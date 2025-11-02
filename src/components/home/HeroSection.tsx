import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Heart, Smile, Sparkles, Shield, Star, Award, Plus, Check } from "lucide-react";
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

  // Dental-related floating icons only
  const floatingIcons = [
    { Icon: Smile, delay: 0, duration: 8, x: "5%", y: "15%", color: "text-blue-500/40" },
    { Icon: Heart, delay: 1.5, duration: 10, x: "85%", y: "25%", color: "text-red-500/40" },
    { Icon: Sparkles, delay: 3, duration: 9, x: "15%", y: "75%", color: "text-yellow-500/40" },
    { Icon: Shield, delay: 4.5, duration: 7, x: "75%", y: "65%", color: "text-green-500/40" },
    { Icon: Star, delay: 6, duration: 8.5, x: "92%", y: "80%", color: "text-purple-500/40" },
    { Icon: Plus, delay: 2, duration: 11, x: "8%", y: "45%", color: "text-primary/50" },
    { Icon: Award, delay: 5, duration: 9.5, x: "88%", y: "50%", color: "text-orange-500/40" },
    { Icon: Check, delay: 1, duration: 7.5, x: "25%", y: "35%", color: "text-cyan-500/40" },
    { Icon: Smile, delay: 4, duration: 10.5, x: "70%", y: "20%", color: "text-indigo-500/40" },
    { Icon: Heart, delay: 6.5, duration: 8, x: "12%", y: "60%", color: "text-pink-500/40" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-primary/5">
      {/* Enhanced Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color} drop-shadow-lg`}
            style={{
              left: item.x,
              top: item.y,
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 1, 0],
              scale: [0, 1.3, 1, 1.2, 0],
              y: [0, -50, -25, -45, 0],
              rotate: [0, 20, -15, 25, 0],
              x: [0, 15, -8, 12, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
          >
            <item.Icon size={56} strokeWidth={1.8} />
          </motion.div>
        ))}
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.span 
          className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 px-6 py-2 rounded-full text-sm font-medium mb-6 text-primary shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Shield className="w-4 h-4" />
          Trusted by 10000+ Happy Patients
        </motion.span>
        
        <div className="h-[120px] md:h-[144px] mb-6">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentHeadlineIndex}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold leading-tight"
              aria-live="polite"
            >
              <span className="text-gray-800">{headlines[currentHeadlineIndex].title}</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-primary">
                {headlines[currentHeadlineIndex].highlight}
              </span>
            </motion.h1>
          </AnimatePresence>
        </div>
        
        <motion.p 
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experience world-class dental care with our team of experienced professionals. Your smile deserves the best.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            className="w-full sm:w-auto bg-gradient-to-r from-[#1EAEDB] to-[#17a2b8] hover:from-[#17a2b8] hover:to-[#138496] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            Book Appointment on WhatsApp
          </Button>
          <Button 
            variant="green"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => window.open("tel:+918600892884")}
          >
            Call Now <Phone className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
