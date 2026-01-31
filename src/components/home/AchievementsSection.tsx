import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Building2, Users, Stethoscope, MessageSquare, Star } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

// Custom counter hook for number animation
const useCounter = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;
    
    const startAnimation = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(startAnimation);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(startAnimation);
    
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);

  return { count, ref: countRef };
};

// Animation wrapper component
const AnimatedNumber = ({ number, suffix = "+" }: { number: number; suffix?: string }) => {
  const { count, ref } = useCounter(number);
  
  return (
    <h3 ref={ref} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 gradient-text">
      {count.toLocaleString()}{suffix}
    </h3>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Building2,
      number: 15,
      title: "Years in Palghar",
      suffix: "+",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: 10000,
      title: "Happy Patients",
      suffix: "+",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Stethoscope,
      number: 5000,
      title: "Implants Placed",
      suffix: "+",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Star,
      number: 300,
      title: "5-Star Reviews",
      suffix: "+",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl">
              For over 15 years, Dental Solutions Palghar has been delivering exceptional dental care 
              with state-of-the-art technology and a compassionate approach.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-elevated p-6 md:p-8 text-center h-full relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  
                  {/* Number */}
                  <AnimatedNumber number={item.number} suffix={item.suffix} />
                  
                  {/* Label */}
                  <p className="text-muted-foreground font-medium text-base md:text-lg">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
