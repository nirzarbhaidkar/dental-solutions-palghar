
import React, { useState, useEffect, useRef } from "react";
import { Building2, Users, Stethoscope, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

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
    <h3 ref={ref} className="text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
      {count}{suffix}
    </h3>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Building2 className="h-14 w-14 text-primary" />,
      number: 15,
      title: "Years in Palghar",
      suffix: "+"
    },
    {
      icon: <Users className="h-14 w-14 text-primary" />,
      number: 10000,
      title: "Happy Patients",
      suffix: "+"
    },
    {
      icon: <Stethoscope className="h-14 w-14 text-primary" />,
      number: 5000,
      title: "Implants Placed",
      suffix: "+"
    },
    {
      icon: <MessageSquare className="h-14 w-14 text-primary" />,
      number: 300,
      title: "5-Star Reviews",
      suffix: "+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg md:text-xl">
            For over 15 years, Dental Solutions Palghar has been delivering exceptional dental care 
            with state-of-the-art technology and a compassionate approach.
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {achievements.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden transform hover:-translate-y-3 transition-all duration-300 shadow-lg hover:shadow-2xl border-0 bg-white rounded-2xl"
            >
              <CardContent className="p-10 flex flex-col items-center text-center relative">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-primary to-blue-600 text-white p-5 rounded-full shadow-lg">
                  {item.icon}
                </div>
                <div className="mt-16 mb-3">
                  <AnimatedNumber number={item.number} suffix={item.suffix} />
                </div>
                <p className="text-gray-700 font-medium text-xl">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
