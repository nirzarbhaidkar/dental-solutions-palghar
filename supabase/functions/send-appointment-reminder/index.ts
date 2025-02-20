
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentData {
  patientName: string;
  patientEmail: string;
  dentistName: string;
  appointmentDate: string;
  appointmentTime: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { patientName, patientEmail, dentistName, appointmentDate, appointmentTime }: AppointmentData = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Dental Clinic <appointments@yourdomain.com>",
      to: [patientEmail],
      subject: "Appointment Reminder",
      html: `
        <h1>Appointment Reminder</h1>
        <p>Dear ${patientName},</p>
        <p>This is a reminder for your upcoming dental appointment:</p>
        <ul>
          <li>Date: ${appointmentDate}</li>
          <li>Time: ${appointmentTime}</li>
          <li>Dentist: ${dentistName}</li>
        </ul>
        <p>Please arrive 10 minutes before your scheduled appointment time.</p>
        <p>If you need to reschedule, please contact us at least 24 hours in advance.</p>
      `,
    });

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
