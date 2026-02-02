import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Shield, Sparkles, Star, Award, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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

  const trustBadges = [
    { icon: Users, label: "10,000+ Patients" },
    { icon: Star, label: "4.9★ Rating" },
    { icon: Clock, label: "Same Day Care" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden">
      {/* Premium gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large gradient orb */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-blue-400/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/15 to-cyan-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        
        {/* Floating icons with subtle animation */}
        <motion.div
          className="absolute top-1/4 left-[10%] text-primary/20"
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={48} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-[15%] text-blue-500/20"
          animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 left-[15%] text-primary/15"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Award size={36} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 10,000+ Happy Patients
            </span>
            <span className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </span>
          </motion.div>

          {/* Rotating headlines */}
          <div className="h-[100px] sm:h-[120px] md:h-[144px] mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadlineIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                aria-live="polite"
              >
                <span className="text-foreground">{headlines[currentHeadlineIndex].title}</span>{" "}
                <span className="gradient-text">
                  {headlines[currentHeadlineIndex].highlight}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Subheadline */}
          <motion.p
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience world-class dental care with our team of experienced professionals. 
            Your smile deserves the best.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg font-semibold shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
              onClick={() =>
                window.open(
                  "https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!",
                  "_blank"
                )
              }
            >
              <WhatsAppIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("tel:+918600892884")}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <badge.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
