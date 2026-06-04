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
      title: "Best Dentist in Palghar for Your",
      highlight: "Perfect Smile",
    },
    {
      title: "Advanced Dental Technology in",
      highlight: "Palghar",
    },
    {
      title: "Trusted Dental Clinic in Palghar for",
      highlight: "Over 15 Years",
    },
    {
      title: "Affordable Dental Care in",
      highlight: "Palghar",
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
        
        {/* Floating icons - hidden on mobile to reduce GPU cost */}
        <motion.div
          className="hidden sm:block absolute top-1/4 left-[10%] text-primary/20"
          animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={48} />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute top-1/3 right-[15%] text-blue-500/20"
          animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Star size={40} />
        </motion.div>
        <motion.div
          className="hidden sm:block absolute bottom-1/3 left-[15%] text-primary/15"
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Award size={36} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <motion.div
            className="inline-flex items-center gap-1.5 sm:gap-2 glass px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-5 sm:mb-8 max-w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-foreground/80 whitespace-nowrap">
              <span className="sm:hidden">10,000+ Happy Patients</span>
              <span className="hidden sm:inline">Trusted by 10,000+ Happy Patients</span>
            </span>
            <span className="flex items-center gap-0.5 text-amber-500 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              ))}
            </span>
          </motion.div>

          {/* Rotating headlines */}
          <div className="min-h-[88px] sm:min-h-[120px] md:min-h-[144px] mb-4 sm:mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadlineIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[28px] leading-[1.15] sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:leading-tight px-2"
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
            className="text-muted-foreground text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-7 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your trusted dental care partner in Palghar — modern technology, gentle hands, beautiful smiles.
          </motion.p>

          {/* CTA Buttons — mobile first */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 mb-8 sm:mb-12 px-2 max-w-md sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary WhatsApp CTA */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                window.open(
                  "https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!",
                  "_blank"
                )
              }
              aria-label="Book appointment on WhatsApp"
              className="relative w-full sm:w-auto min-h-[56px] px-5 sm:px-7 rounded-2xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold shadow-[0_8px_24px_-8px_rgba(37,211,102,0.6)] transition-colors duration-200 flex items-center justify-center gap-3 active:translate-y-px"
            >
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white shrink-0 shadow-sm">
                <WhatsAppIcon size={22} />
              </span>
              <span className="flex flex-col items-start leading-tight text-left">
                <span className="text-[10px] sm:text-xs font-medium text-white/85">Instant reply · 24/7</span>
                <span className="text-[15px] sm:text-base font-bold">Book on WhatsApp</span>
              </span>
            </motion.button>

            {/* Secondary Call CTA */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("tel:+918600892884")}
              aria-label="Call clinic now"
              className="relative w-full sm:w-auto min-h-[56px] px-5 sm:px-7 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-primary/25 hover:border-primary/50 hover:bg-white text-foreground font-semibold transition-colors duration-200 flex items-center justify-center gap-3 active:translate-y-px"
            >
              <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </span>
              <span className="flex flex-col items-start leading-tight text-left">
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">Talk to us now</span>
                <span className="text-[15px] sm:text-base font-bold">Call Clinic</span>
              </span>
            </motion.button>
          </motion.div>

          {/* Trust badges row */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <div className="p-1.5 sm:p-2 rounded-full bg-primary/10">
                  <badge.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-medium">{badge.label}</span>
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
