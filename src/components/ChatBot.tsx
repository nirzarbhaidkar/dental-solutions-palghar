
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, X, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "@/integrations/supabase/client";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Initialize session ID and load conversation if exists
  useEffect(() => {
    // Generate or retrieve session ID from local storage
    const storedSessionId = localStorage.getItem("chatSessionId");
    const newSessionId = storedSessionId || uuidv4();
    
    if (!storedSessionId) {
      localStorage.setItem("chatSessionId", newSessionId);
    }
    
    setSessionId(newSessionId);
    
    // Load existing conversation if available
    const loadExistingConversation = async () => {
      try {
        // Find existing conversation for this session
        const { data: conversationData, error: conversationError } = await supabase
          .from('chat_conversations')
          .select('id')
          .eq('session_id', newSessionId)
          .order('created_at', { ascending: false })
          .limit(1);
          
        if (conversationError) throw conversationError;
        
        if (conversationData && conversationData.length > 0) {
          const existingConversationId = conversationData[0].id;
          setConversationId(existingConversationId);
          
          // Load messages for this conversation
          const { data: messagesData, error: messagesError } = await supabase
            .from('chat_messages')
            .select('*')
            .eq('conversation_id', existingConversationId)
            .order('created_at', { ascending: true });
            
          if (messagesError) throw messagesError;
          
          if (messagesData && messagesData.length > 0) {
            setMessages(messagesData.map(msg => ({
              id: msg.id,
              content: msg.content,
              isBot: msg.is_bot
            })));
            return;
          }
        }
        
        // If no conversation exists or no messages, show welcome message
        setMessages([
          {
            id: uuidv4(),
            content: "Welcome to Dental Solutions Palghar! How can I assist you today?",
            isBot: true,
          },
        ]);
      } catch (error) {
        console.error("Error loading conversation:", error);
        // Show welcome message in case of error
        setMessages([
          {
            id: uuidv4(),
            content: "Welcome to Dental Solutions Palghar! How can I assist you today?",
            isBot: true,
          },
        ]);
      }
    };
    
    loadExistingConversation();
  }, []);

  // Scroll to bottom of chat when messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const saveMessage = async (newMessage: Message, isUserMessage: boolean) => {
    try {
      // Create conversation if it doesn't exist
      if (!conversationId) {
        const { data, error } = await supabase
          .from('chat_conversations')
          .insert({
            session_id: sessionId,
            user_id: null, // Can be updated later if user logs in
            user_name: null // Can be updated later if user provides name
          })
          .select('id')
          .single();
          
        if (error) throw error;
        setConversationId(data.id);
        
        // Save message with new conversation ID
        await supabase
          .from('chat_messages')
          .insert({
            conversation_id: data.id,
            content: newMessage.content,
            is_bot: !isUserMessage
          });
      } else {
        // Save message with existing conversation ID
        await supabase
          .from('chat_messages')
          .insert({
            conversation_id: conversationId,
            content: newMessage.content,
            is_bot: !isUserMessage
          });
      }
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setMessage("");
    
    // Add user message to chat
    const userMessageId = uuidv4();
    const userMessageObj = {
      id: userMessageId,
      content: userMessage,
      isBot: false
    };
    
    setMessages((prev) => [...prev, userMessageObj]);
    
    // Save user message to database
    saveMessage(userMessageObj, true);
    
    setIsLoading(true);
    
    try {
      // Send message to chatbot function
      const response = await supabase.functions.invoke("dental-chatbot", {
        body: {
          message: userMessage,
          sessionId,
          conversationId,
        },
      });
      
      if (response.error) {
        throw new Error(response.error.message);
      }
      
      // Save conversation ID if it's new
      if (response.data.conversationId && !conversationId) {
        setConversationId(response.data.conversationId);
      }
      
      // Add bot response to chat
      const botMessageObj = {
        id: uuidv4(),
        content: response.data.response,
        isBot: true
      };
      
      setMessages((prev) => [...prev, botMessageObj]);
      
      // Save bot message to database
      saveMessage(botMessageObj, false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to get a response. Please try again.",
        variant: "destructive",
      });
      
      // Remove user message if error occurs
      setMessages((prev) => prev.filter((msg) => msg.id !== userMessageId));
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="flex flex-col bg-white rounded-lg shadow-xl w-80 sm:w-96 h-96 border">
          <div className="flex items-center justify-between p-4 bg-primary text-white rounded-t-lg">
            <h3 className="font-semibold">Dental Solutions Chat</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleChat}
              className="h-8 w-8 text-white hover:bg-primary/80"
            >
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-3 max-w-[85%] ${
                  msg.isBot ? "mr-auto" : "ml-auto"
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    msg.isBot
                      ? "bg-gray-200 text-gray-800"
                      : "bg-primary text-white"
                  }`}
                >
                  {msg.content.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < msg.content.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mb-3 max-w-[85%] mr-auto">
                <div className="p-3 rounded-lg bg-gray-200 text-gray-800 flex space-x-1">
                  <div className="animate-bounce">.</div>
                  <div className="animate-bounce delay-100">.</div>
                  <div className="animate-bounce delay-200">.</div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <form
            onSubmit={handleSendMessage}
            className="p-4 border-t flex items-center gap-2"
          >
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <Button
              type="submit"
              variant="green"
              size="icon"
              disabled={isLoading || !message.trim()}
            >
              <Send size={18} />
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          variant="green"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <MessageSquare size={24} />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
