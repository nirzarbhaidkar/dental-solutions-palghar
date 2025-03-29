
import React, { useState, useRef, useEffect } from "react";
import { Send, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  text: string;
  isUser: boolean;
  timestamp: Date;
};

const INITIAL_BOT_MESSAGE = {
  text: "👋 Hi there! I'm the Dental Solutions assistant. How can I help you today?",
  isUser: false,
  timestamp: new Date(),
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Common dental questions and answers
  const qa = [
    {
      keywords: ["appointment", "book", "schedule", "slot", "available"],
      answer: "You can book an appointment by tapping the 'Book Appointment' button or messaging us on WhatsApp at +91 8600892884. Would you like me to help you book now?"
    },
    {
      keywords: ["hours", "open", "timing", "schedule", "closed"],
      answer: "We're open Monday to Saturday from 9:30 am–2 pm and 5–9 pm. We're closed on Sundays. Would you like to book an appointment?"
    },
    {
      keywords: ["address", "location", "where", "place", "reach", "find"],
      answer: "We're located at Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes, next to National College, Palghar, Maharashtra 401404."
    },
    {
      keywords: ["service", "treatment", "offer", "provide", "cleaning", "whitening", "implant"],
      answer: "We offer comprehensive dental services including general dentistry, cosmetic procedures, orthodontics, implants, root canal treatment, teeth whitening, and pediatric dentistry. Is there a specific service you'd like to know more about?"
    },
    {
      keywords: ["pain", "toothache", "hurt", "sensitive", "emergency"],
      answer: "Dental pain requires prompt attention. We offer emergency dental services. Please call us at +91 8600892884 right away for assistance, or book an urgent appointment."
    },
    {
      keywords: ["cost", "price", "fee", "charge", "insurance", "expensive"],
      answer: "Our pricing varies depending on the treatment needed. We provide bills that can be claimed on any mediclaim insurance. Would you like to schedule a consultation to discuss your specific needs?"
    },
    {
      keywords: ["doctor", "dentist", "specialist", "who", "staff", "team"],
      answer: "Our clinic is staffed with experienced dental professionals specialized in various aspects of dental care. Dr. Radha is particularly great with children. Would you like to know more about our team?"
    }
  ];

  // Scroll to bottom when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Generate bot response with small delay for realistic effect
    setTimeout(() => {
      const botReply = generateBotReply(inputValue);
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  const generateBotReply = (userInput: string): Message => {
    const input = userInput.toLowerCase();
    
    // Check for matching questions
    for (const item of qa) {
      if (item.keywords.some(keyword => input.includes(keyword))) {
        return {
          text: item.answer,
          isUser: false,
          timestamp: new Date()
        };
      }
    }

    // Default response for unmatched queries
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
      return {
        text: "Hello! How can I assist you with your dental care needs today?",
        isUser: false,
        timestamp: new Date()
      };
    }

    if (input.includes("thank")) {
      return {
        text: "You're welcome! Is there anything else I can help you with?",
        isUser: false,
        timestamp: new Date()
      };
    }

    if (input.includes("bye") || input.includes("goodbye")) {
      return {
        text: "Thank you for chatting! Feel free to reach out if you have more questions. Have a great day!",
        isUser: false,
        timestamp: new Date()
      };
    }

    // Fallback response
    return {
      text: "I'd be happy to help with that. Would you like to speak with someone from our team? You can call us at +91 8600892884 or book an appointment online.",
      isUser: false,
      timestamp: new Date()
    };
  };

  const handleBookAppointment = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
    toast({
      title: "Opening WhatsApp",
      description: "Redirecting you to our booking assistant."
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full w-14 h-14 shadow-lg flex items-center justify-center ${
          isOpen ? "bg-gray-500" : "bg-primary"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>

      {/* Chatbot panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl overflow-hidden flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-primary text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-medium">Dental Chat Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-white hover:bg-primary/80"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Message list */}
          <div className="flex-1 overflow-y-auto p-3 max-h-96 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 flex ${
                  message.isUser ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg ${
                    message.isUser
                      ? "bg-primary/90 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick action */}
          <div className="p-2 border-t border-gray-200 bg-gray-50">
            <Button 
              onClick={handleBookAppointment}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Book Appointment
            </Button>
          </div>

          {/* Input area */}
          <form onSubmit={handleSubmit} className="p-2 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              type="submit"
              className="rounded-l-none"
              disabled={!inputValue.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
