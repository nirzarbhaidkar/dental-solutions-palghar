import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Shield, Sparkles, Star, Award, Clock, Users, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { useLanguage } from "@/i18n/LanguageContext";

type Headline = {
  title: string;
  highlight: string;
};

const HeroSection = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const { t } = useLanguage();

  const headlines: Headline[] = [
    { title: t("hero.headline1.title"), highlight: t("hero.headline1.highlight") },
    { title: t("hero.headline2.title"), highlight: t("hero.headline2.highlight") },
    { title: t("hero.headline3.title"), highlight: t("hero.headline3.highlight") },
    { title: t("hero.headline4.title"), highlight: t("hero.headline4.highlight") },
  ];

  const trustBadges = [
    { icon: Users, label: t("hero.trust.patients") },
    { icon: Star, label: t("hero.trust.rating") },
    { icon: Clock, label: t("hero.trust.sameDay") },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [headlines.length]);

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

      <div className="container mx-auto px-4 relative z-10 py-10 sm:py-20">
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
              <span className="sm:hidden">{t("hero.badge.short")}</span>
              <span className="hidden sm:inline">{t("hero.badge.long")}</span>
            </span>
            <span className="flex items-center gap-0.5 text-amber-500 flex-shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
              ))}
            </span>
          </motion.div>

          {/* Rotating headlines */}
          <div className="min-h-[72px] sm:min-h-[120px] md:min-h-[144px] mb-3 sm:mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadlineIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-[22px] min-[360px]:text-[24px] min-[390px]:text-[26px] min-[430px]:text-[28px] sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] sm:leading-tight px-1"
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
            className="text-muted-foreground text-[12px] min-[360px]:text-[13px] min-[390px]:text-[14px] min-[430px]:text-[15px] sm:text-lg md:text-xl max-w-2xl mx-auto mb-5 sm:mb-10 leading-relaxed px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* World-class CTAs — mobile first */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2 max-w-sm sm:max-w-none mx-auto w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Primary — WhatsApp */}
            <motion.a
              href="https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment on WhatsApp"
              whileTap={{ scale: 0.98 }}
              className="group relative isolate w-full sm:w-auto h-[60px] sm:h-[64px] rounded-2xl overflow-hidden flex items-center pl-2 pr-5 sm:pr-7 gap-3.5 text-white font-semibold select-none
                         bg-gradient-to-br from-[#25D366] via-[#1FB855] to-[#128C7E]
                         shadow-[0_10px_30px_-10px_rgba(18,140,126,0.7),inset_0_1px_0_rgba(255,255,255,0.25)]
                         ring-1 ring-white/10 transition-transform duration-200 active:translate-y-px"
            >
              {/* sheen */}
              <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                          bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)] bg-[length:200%_100%] animate-[shine_2.4s_linear_infinite]" />
              {/* live pulse dot */}
              <span aria-hidden className="absolute top-2 right-3 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-white/70 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>

              <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white shrink-0 shadow-md">
                <WhatsAppIcon size={26} />
              </span>
              <span className="relative flex flex-col items-start leading-tight text-left min-w-0">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-white/85">Instant reply · 24/7</span>
                <span className="text-[16px] sm:text-[17px] font-extrabold tracking-tight">Book on WhatsApp</span>
              </span>
              <svg aria-hidden viewBox="0 0 24 24" className="relative ml-auto h-5 w-5 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5">
                <path fill="currentColor" d="M13.3 5.3a1 1 0 0 1 1.4 0l5.6 5.6a1.5 1.5 0 0 1 0 2.1l-5.6 5.6a1 1 0 1 1-1.4-1.4l4.3-4.3H4.5a1 1 0 1 1 0-2h13.1l-4.3-4.2a1 1 0 0 1 0-1.4z" />
              </svg>
            </motion.a>

            {/* Secondary — Call */}
            <motion.a
              href="tel:+918600892884"
              aria-label="Call clinic now"
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto h-[60px] sm:h-[64px] rounded-2xl overflow-hidden flex items-center pl-2 pr-5 sm:pr-7 gap-3.5 font-semibold select-none
                         bg-white/85 dark:bg-white/[0.06] backdrop-blur-xl
                         border border-primary/20 hover:border-primary/45
                         shadow-[0_8px_24px_-12px_rgba(11,122,159,0.35)]
                         transition-colors duration-200 active:translate-y-px"
            >
              <span className="relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </span>
              <span className="flex flex-col items-start leading-tight text-left min-w-0">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-muted-foreground">Talk to us now</span>
                <span className="text-[16px] sm:text-[17px] font-extrabold tracking-tight text-foreground">Call Clinic</span>
              </span>
              <svg aria-hidden viewBox="0 0 24 24" className="ml-auto h-5 w-5 text-primary/70 transition-transform duration-200 group-hover:translate-x-0.5">
                <path fill="currentColor" d="M13.3 5.3a1 1 0 0 1 1.4 0l5.6 5.6a1.5 1.5 0 0 1 0 2.1l-5.6 5.6a1 1 0 1 1-1.4-1.4l4.3-4.3H4.5a1 1 0 1 1 0-2h13.1l-4.3-4.2a1 1 0 0 1 0-1.4z" />
              </svg>
            </motion.a>
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
