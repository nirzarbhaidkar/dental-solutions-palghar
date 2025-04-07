
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Headline = {
  title: string;
  highlight: string;
};

const HeroSection = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  const headlines: Headline[] = [
    {
      title: "Expert Dental Care for Your",
      highlight: "Perfect Smile",
    },
    {
      title: "Advanced Technology for",
      highlight: "Better Care",
    },
    {
      title: "Trusted by Families for",
      highlight: "Over 11 Years",
    },
    {
      title: "Comfortable Care for Your",
      highlight: "Dental Health",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-primary-50/30 to-white">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in shadow-sm">
          Welcome to Dental Solutions Palghar
        </span>
        <div className="h-[120px] md:h-[144px] mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadlineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-display font-bold"
            >
              {headlines[currentHeadlineIndex].title}{" "}
              <span className="text-primary">{headlines[currentHeadlineIndex].highlight}</span>
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
          Experience world-class dental care with our team of experienced professionals. Your smile deserves the best.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button 
            className="bg-primary text-white hover:bg-primary-600 px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-all group"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Book Appointment on WhatsApp
          </Button>
          <Button 
            variant="outline" 
            className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary-50 rounded-full shadow-sm hover:shadow-md transition-all group"
            onClick={() => window.open("tel:+918600892884")}
          >
            <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" /> 
            Call Now
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <div className="animate-slide-from-left flex items-center bg-white p-4 rounded-lg shadow-soft">
            <div className="bg-primary-50 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 21a9 9 0 0 1 0-18 9.75 9.75 0 0 1 6.74 2.74L12 12"></path>
                <path d="M12 12v.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 12h.01"></path>
                <path d="M8 12h.01"></path>
                <path d="M12 8v.01"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-bold">Latest Technology</h3>
              <p className="text-sm text-gray-600">State-of-the-art equipment</p>
            </div>
          </div>
          
          <div className="animate-fade-in flex items-center bg-white p-4 rounded-lg shadow-soft delay-100">
            <div className="bg-primary-50 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-bold">Gentle Care</h3>
              <p className="text-sm text-gray-600">Patient comfort is our priority</p>
            </div>
          </div>
          
          <div className="animate-slide-from-right flex items-center bg-white p-4 rounded-lg shadow-soft">
            <div className="bg-primary-50 rounded-full p-3 mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.85 1 4.9.346 1.055 1.9 2.195 1.9 2.195"></path>
                <path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"></path>
                <path d="M17 15a3.5 3.5 0 0 0-.025-4.975"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-bold">Affordable Prices</h3>
              <p className="text-sm text-gray-600">Quality care at fair rates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
