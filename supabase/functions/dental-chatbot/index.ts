
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-session-id",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ChatRequest {
  message: string;
  sessionId: string;
  userName?: string;
  conversationId?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get the chat message from the request
    const { message, sessionId, userName, conversationId } = await req.json() as ChatRequest;
    
    if (!message || !sessionId) {
      return new Response(
        JSON.stringify({ error: "Message and session ID are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create a Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") as string;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") as string;
    const supabase = createClient(supabaseUrl, supabaseKey);

    let currentConversationId = conversationId;

    // If no conversation ID is provided, create a new conversation
    if (!currentConversationId) {
      const { data: newConversation, error: conversationError } = await supabase
        .from("chat_conversations")
        .insert({
          user_id: null,
          user_name: userName || "Guest",
          session_id: sessionId,
        })
        .select()
        .single();

      if (conversationError) {
        console.error("Error creating conversation:", conversationError);
        return new Response(
          JSON.stringify({ error: "Error creating conversation" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      currentConversationId = newConversation.id;
    }

    // Store the user message
    const { error: userMessageError } = await supabase
      .from("chat_messages")
      .insert({
        conversation_id: currentConversationId,
        content: message,
        is_bot: false,
      });

    if (userMessageError) {
      console.error("Error storing user message:", userMessageError);
      return new Response(
        JSON.stringify({ error: "Error storing user message" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Generate a response based on the user's message
    const botResponse = generateBotResponse(message);

    // Store the bot response
    const { error: botMessageError } = await supabase
      .from("chat_messages")
      .insert({
        conversation_id: currentConversationId,
        content: botResponse,
        is_bot: true,
      });

    if (botMessageError) {
      console.error("Error storing bot message:", botMessageError);
      return new Response(
        JSON.stringify({ error: "Error storing bot message" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Return the bot response and conversation ID
    return new Response(
      JSON.stringify({
        response: botResponse,
        conversationId: currentConversationId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

// Function to generate bot responses based on user input
function generateBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  // Appointment related queries
  if (lowerMessage.includes("appointment") || lowerMessage.includes("book") || lowerMessage.includes("schedule")) {
    return "I'd be happy to help you schedule an appointment! Please provide your preferred date and time, or you can call us directly at +91 8600892884. You can also book instantly through WhatsApp by clicking the 'Book Appointment on WhatsApp' button.";
  }
  
  // Opening hours
  if (lowerMessage.includes("open") || lowerMessage.includes("hours") || lowerMessage.includes("timing")) {
    return "Our clinic is open:\n• Monday to Friday: 9:00 AM - 8:00 PM\n• Saturday: 9:00 AM - 6:00 PM\n• Sunday: 10:00 AM - 4:00 PM (By appointment only)";
  }
  
  // Services
  if (lowerMessage.includes("service") || lowerMessage.includes("treatment") || lowerMessage.includes("procedure")) {
    return "We offer a wide range of dental services including:\n• General dentistry (check-ups, fillings)\n• Cosmetic dentistry (whitening, veneers)\n• Dental implants\n• Root canal treatment\n• Orthodontics\n• Pediatric dentistry\n• Emergency dental care\n\nWould you like more information about any specific service?";
  }
  
  // Payment and insurance
  if (lowerMessage.includes("payment") || lowerMessage.includes("insurance") || lowerMessage.includes("cost") || lowerMessage.includes("price")) {
    return "We accept various payment methods including cash, credit/debit cards, and major insurance plans. For specific pricing information, please contact our office directly as costs vary depending on the treatment and your individual needs.";
  }
  
  // Dental emergency
  if (lowerMessage.includes("emergency") || lowerMessage.includes("pain") || lowerMessage.includes("hurt") || lowerMessage.includes("bleeding")) {
    return "If you're experiencing a dental emergency, please call us immediately at +91 8600892884. For severe bleeding or trauma, please go to the nearest emergency room. We prioritize emergency cases and will do our best to see you as soon as possible.";
  }
  
  // Contact information
  if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("address") || lowerMessage.includes("location")) {
    return "You can reach us at +91 8600892884 or visit us at 123 Dental Street, Palghar, Maharashtra. Feel free to also connect with us on Facebook and Instagram - links are available at the bottom of our website.";
  }
  
  // Preparation for appointment
  if (lowerMessage.includes("prepare") || lowerMessage.includes("before appointment")) {
    return "For your appointment, please bring:\n• Your ID\n• Insurance information (if applicable)\n• List of current medications\n• Medical history information\n• Previous dental records (if available)\n\nArrive 15 minutes early to complete any necessary paperwork.";
  }
  
  // Default response
  return "Thank you for reaching out to Dental Solutions Palghar. How can I assist you today? You can ask me about our services, scheduling appointments, operating hours, or any other questions you may have about our dental clinic.";
}
