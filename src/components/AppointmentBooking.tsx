
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface TimeSlot {
  id: string;
  start_time: string;
  end_time: string;
}

interface Dentist {
  id: string;
  name: string;
  specialization: string;
}

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedDentist, setSelectedDentist] = useState<string>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();
  const [availableTimeSlots, setAvailableTimeSlots] = useState<TimeSlot[]>([]);
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const { toast } = useToast();

  const loadDentists = async () => {
    const { data, error } = await supabase
      .from("dentists")
      .select("*");
    
    if (error) {
      toast({
        title: "Error loading dentists",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setDentists(data);
  };

  const loadAvailableTimeSlots = async () => {
    if (!selectedDate || !selectedDentist) return;

    const startOfDay = new Date(selectedDate);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(selectedDate);
    endOfDay.setHours(23, 59, 59, 999);

    const { data, error } = await supabase
      .from("time_slots")
      .select("*")
      .eq("dentist_id", selectedDentist)
      .eq("is_available", true)
      .gte("start_time", startOfDay.toISOString())
      .lte("end_time", endOfDay.toISOString());

    if (error) {
      toast({
        title: "Error loading time slots",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setAvailableTimeSlots(data);
  };

  const handleBookAppointment = async () => {
    if (!selectedDate || !selectedDentist || !selectedTimeSlot) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const { data: appointment, error: appointmentError } = await supabase
      .from("appointments")
      .insert({
        patient_name: patientName,
        patient_email: patientEmail,
        patient_phone: patientPhone,
        dentist_id: selectedDentist,
        time_slot_id: selectedTimeSlot,
        status: "scheduled",
      })
      .select()
      .single();

    if (appointmentError) {
      toast({
        title: "Error booking appointment",
        description: appointmentError.message,
        variant: "destructive",
      });
      return;
    }

    // Update time slot availability
    await supabase
      .from("time_slots")
      .update({ is_available: false })
      .eq("id", selectedTimeSlot);

    // Send confirmation email
    const timeSlot = availableTimeSlots.find(slot => slot.id === selectedTimeSlot);
    const dentist = dentists.find(d => d.id === selectedDentist);

    await supabase.functions.invoke("send-appointment-reminder", {
      body: {
        patientName,
        patientEmail,
        dentistName: dentist?.name,
        appointmentDate: format(selectedDate, "MMMM d, yyyy"),
        appointmentTime: format(new Date(timeSlot?.start_time || ""), "h:mm a"),
      },
    });

    toast({
      title: "Appointment booked!",
      description: "You will receive a confirmation email shortly.",
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedDentist(undefined);
    setSelectedTimeSlot(undefined);
    setPatientName("");
    setPatientEmail("");
    setPatientPhone("");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Select a Dentist</Label>
          <Select value={selectedDentist} onValueChange={setSelectedDentist}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a dentist" />
            </SelectTrigger>
            <SelectContent>
              {dentists.map((dentist) => (
                <SelectItem key={dentist.id} value={dentist.id}>
                  {dentist.name} - {dentist.specialization}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Select a Date</Label>
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
            disabled={(date) => date < new Date() || date.getDay() === 0}
          />
        </div>

        {selectedDate && selectedDentist && (
          <div className="space-y-2">
            <Label>Available Time Slots</Label>
            <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a time" />
              </SelectTrigger>
              <SelectContent>
                {availableTimeSlots.map((slot) => (
                  <SelectItem key={slot.id} value={slot.id}>
                    {format(new Date(slot.start_time), "h:mm a")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <Label htmlFor="patientName">Your Name</Label>
            <Input
              id="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label htmlFor="patientEmail">Email</Label>
            <Input
              id="patientEmail"
              type="email"
              value={patientEmail}
              onChange={(e) => setPatientEmail(e.target.value)}
              placeholder="john@example.com"
            />
          </div>

          <div>
            <Label htmlFor="patientPhone">Phone Number</Label>
            <Input
              id="patientPhone"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <Button
          className="w-full"
          onClick={handleBookAppointment}
          disabled={!selectedDate || !selectedDentist || !selectedTimeSlot || !patientName || !patientEmail || !patientPhone}
        >
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default AppointmentBooking;
