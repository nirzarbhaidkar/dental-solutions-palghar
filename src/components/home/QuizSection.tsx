
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";

const QuizSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Dental Health Quiz
          </span>
        </div>
        
        <DentalHealthQuiz />
      </div>
    </section>
  );
};

export default QuizSection;
