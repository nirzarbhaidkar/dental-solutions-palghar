
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Heart, Smile, Sparkles, Shield, Star } from "lucide-react";
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
      highlight: "Over 15 Years",
    },
    {
      title: "Comfortable Care for Your",
      highlight: "Dental Health",
    },
  ];

  // Floating icons data
  const floatingIcons = [
    { Icon: Smile, delay: 0, duration: 6, x: "10%", y: "20%" },
    { Icon: Heart, delay: 1, duration: 8, x: "80%", y: "30%" },
    { Icon: Sparkles, delay: 2, duration: 7, x: "20%", y: "70%" },
    { Icon: Shield, delay: 3, duration: 9, x: "70%", y: "60%" },
    { Icon: Star, delay: 4, duration: 6.5, x: "90%", y: "80%" },
    { Icon: Smile, delay: 5, duration: 7.5, x: "15%", y: "40%" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-primary/10"
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <item.Icon size={40} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
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
              className="text-4xl md:text-6xl font-bold"
              aria-live="polite"
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
            className="w-full sm:w-auto bg-[#1EAEDB] hover:bg-[#17a2b8] text-white px-8 py-6 text-lg"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            Book Appointment on WhatsApp
          </Button>
          <Button 
            variant="green"
            className="w-full sm:w-auto bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 text-lg"
            onClick={() => window.open("tel:+918600892884")}
          >
            Call Now <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
