
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Healthy Is Your Smile?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our quick quiz to assess your dental health and get personalized recommendations.
          </p>
        </div>
        
        <DentalHealthQuiz />
      </div>
    </section>
  );
};

export default QuizSection;
