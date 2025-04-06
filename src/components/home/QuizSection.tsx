
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import { useLanguage } from "@/context/LanguageContext";

const QuizSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="quiz" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("quiz.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("quiz.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("quiz.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <DentalHealthQuiz />
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
