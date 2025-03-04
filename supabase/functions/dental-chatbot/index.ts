
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

interface RequestBody {
  message: string
  sessionId: string
  conversationId?: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    )

    // Get request body
    const requestData: RequestBody = await req.json()
    const { message, sessionId, conversationId } = requestData

    if (!message || !sessionId) {
      return new Response(
        JSON.stringify({ error: 'Message and session ID are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Process the message and generate a response
    const botResponse = await generateDentalResponse(message)

    // Return the response with conversation ID
    return new Response(
      JSON.stringify({
        response: botResponse,
        conversationId: conversationId || null,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error processing request:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})

async function generateDentalResponse(message: string): Promise<string> {
  // Basic rule-based responses for dental queries
  const lowerMessage = message.toLowerCase()
  
  // Emergency responses
  if (lowerMessage.includes('emergency') || 
      lowerMessage.includes('pain') || 
      lowerMessage.includes('bleeding') || 
      lowerMessage.includes('accident')) {
    return 'For dental emergencies, please call our emergency line at +91-XXXXXXXXXX immediately. We offer same-day emergency appointments whenever possible.'
  }
  
  // Appointment booking
  if (lowerMessage.includes('appointment') || 
      lowerMessage.includes('book') || 
      lowerMessage.includes('schedule')) {
    return 'To book an appointment, please call us at +91-XXXXXXXXXX during our working hours (Mon-Sat, 9am-7pm) or leave your phone number and preferred time, and we will call you back.'
  }
  
  // Teeth cleaning
  if (lowerMessage.includes('cleaning') || 
      lowerMessage.includes('plaque') || 
      lowerMessage.includes('tartar')) {
    return 'We recommend professional teeth cleaning every six months. Our dental hygienists use ultrasonic scalers and polishing tools to remove plaque and tartar safely. Would you like to book a cleaning appointment?'
  }
  
  // Root canal
  if (lowerMessage.includes('root canal')) {
    return 'Root canal treatment is used to save teeth with infected or damaged pulp. The procedure is performed under local anesthesia and is much more comfortable than its reputation suggests. Recovery typically takes a few days. Would you like more information?'
  }

  // Teeth whitening
  if (lowerMessage.includes('whiten') || 
      lowerMessage.includes('whitening') || 
      lowerMessage.includes('yellow')) {
    return 'We offer both in-office professional whitening and take-home whitening kits. In-office treatment provides immediate results, while take-home kits work more gradually. Would you like to know the costs or schedule a consultation?'
  }

  // Braces and orthodontics
  if (lowerMessage.includes('braces') || 
      lowerMessage.includes('orthodontic') || 
      lowerMessage.includes('align') || 
      lowerMessage.includes('crooked')) {
    return 'We offer various orthodontic treatments including traditional braces, ceramic braces, and clear aligners. Treatment duration depends on your specific needs. Would you like to schedule a consultation with our orthodontist?'
  }

  // Dental implants
  if (lowerMessage.includes('implant')) {
    return 'Dental implants are the gold standard for replacing missing teeth. The procedure involves placing a titanium post in the jawbone, which then supports a crown. The process typically takes 3-6 months for complete healing. Would you like to schedule a consultation?'
  }

  // Costs and insurance
  if (lowerMessage.includes('cost') || 
      lowerMessage.includes('price') || 
      lowerMessage.includes('insurance') || 
      lowerMessage.includes('payment')) {
    return 'Our fees vary depending on the treatment. We accept most major insurance plans and offer payment plans for larger treatments. For a specific quote, please call our office or schedule a consultation.'
  }

  // Clinic location
  if (lowerMessage.includes('address') || 
      lowerMessage.includes('location') || 
      lowerMessage.includes('where') || 
      lowerMessage.includes('directions')) {
    return 'We are located at Dr. Kulkarni\'s Dental Solutions, 1st Floor, Shree Datta Complex, Near Railway Station, Palghar West, Palghar - 401404. Free parking is available nearby.'
  }

  // Hours
  if (lowerMessage.includes('hour') || 
      lowerMessage.includes('time') || 
      lowerMessage.includes('open') || 
      lowerMessage.includes('close')) {
    return 'Our clinic hours are:\nMonday to Saturday: 9:00 AM - 7:00 PM\nSunday: Closed (Emergency services available)\n\nFor urgent care outside these hours, please call our emergency number.'
  }

  // Greeting
  if (lowerMessage.includes('hello') || 
      lowerMessage.includes('hi') || 
      lowerMessage.includes('hey') || 
      lowerMessage.includes('greetings')) {
    return 'Hello! Welcome to Dental Solutions Palghar. How can I assist you today?'
  }

  // Thank you
  if (lowerMessage.includes('thank') || 
      lowerMessage.includes('thanks')) {
    return 'You\'re welcome! Is there anything else I can help you with regarding our dental services?'
  }

  // Default response
  return 'Thank you for your message. I\'m here to help with any dental questions or concerns. I can provide information about our treatments, schedule appointments, or connect you with our staff. How can I assist you today?'
}
