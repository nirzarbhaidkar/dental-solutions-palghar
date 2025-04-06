
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
    <h3 ref={ref} className="text-3xl md:text-4xl font-bold mb-2 text-primary">
      {count}{suffix}
    </h3>
  );
};

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      number: 15,
      title: "Years in Palghar"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      number: 10000,
      title: "Happy Patients"
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      number: 5000,
      title: "Implants Placed"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      number: 300,
      title: "5-Star Reviews"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
            Our Achievements
          </h2>
          <p className="text-gray-600 max-w-3xl text-lg">
            For over 15 years, Dental Solutions Palghar has been delivering exceptional dental care 
            with state-of-the-art technology and a compassionate approach.
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <Card 
              key={index}
              className="overflow-hidden transform hover:-translate-y-2 transition-all duration-300 shadow-md hover:shadow-xl border-0 bg-white rounded-xl"
            >
              <CardContent className="p-8 flex flex-col items-center text-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-white p-4 rounded-full shadow-lg">
                  {item.icon}
                </div>
                <div className="mt-12 mb-2">
                  <AnimatedNumber number={item.number} />
                </div>
                <p className="text-gray-600 font-medium text-lg">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
