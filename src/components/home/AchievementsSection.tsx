
import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

type Achievement = {
  value: number;
  suffix: string;
  label: string;
  translationKey: string;
};

const achievements: Achievement[] = [
  { value: 5000, suffix: "+", label: "Happy Patients", translationKey: "achievements.happyPatients" },
  { value: 15, suffix: "+", label: "Years of Experience", translationKey: "achievements.experienceYears" },
  { value: 10000, suffix: "+", label: "Dental Procedures", translationKey: "achievements.dentalProcedures" },
  { value: 1000, suffix: "+", label: "Positive Reviews", translationKey: "achievements.positiveReviews" }
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(achievements.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = achievements.map((achievement, index) => {
      const duration = 2000; // 2 seconds for animation
      const steps = 50; // Number of steps in the animation
      const increment = achievement.value / steps;
      let count = 0;

      return setInterval(() => {
        count += increment;
        if (count >= achievement.value) {
          count = achievement.value;
          clearInterval(intervals[index]);
        }

        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.floor(count);
          return newCounts;
        });
      }, duration / steps);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("achievements.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("achievements.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("achievements.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-primary/10 text-center"
            >
              <div className="text-4xl font-bold mb-2 text-primary">
                {counts[index].toLocaleString()}{achievement.suffix}
              </div>
              <p className="text-gray-600">
                {t(achievement.translationKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
