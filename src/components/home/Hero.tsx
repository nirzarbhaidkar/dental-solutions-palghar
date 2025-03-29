
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Headline {
  title: string;
  highlight: string;
}

const Hero = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);

  const headlines = [
    {
      title: "Best Dentist in",
      highlight: "Palghar",
    },
    {
      title: "Top Dental Clinic",
      highlight: "Near You",
    },
    {
      title: "Expert Dental Solutions for",
      highlight: "Your Perfect Smile",
    },
    {
      title: "Affordable Teeth Whitening",
      highlight: "& Dental Implants",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-32 pb-16 px-4" id="dental-solutions-palghar-hero">
      <div className="container mx-auto text-center">
        <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
          Welcome to Dental Solutions Palghar - Your Trusted Dentist Near Me
        </span>
        <div className="h-[120px] md:h-[144px] mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadlineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold"
            >
              {headlines[currentHeadlineIndex].title}{" "}
              <span className="text-primary">{headlines[currentHeadlineIndex].highlight}</span>
            </motion.h1>
          </AnimatePresence>
        </div>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
          Experience world-class dental care at Dental Solutions, the premier dental clinic in Palghar. Our expert mouth doctors provide teeth whitening, dental implants, and complete oral care services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            Book Appointment on WhatsApp
          </Button>
          <Button 
            variant="green" 
            className="px-8 py-6 text-lg"
            onClick={() => window.open("tel:+918600892884")}
          >
            Call Dental Clinic Now <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
