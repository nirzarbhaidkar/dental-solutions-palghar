
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";

const QuizSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="quiz">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Dental Health Assessment
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your Dental Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our comprehensive dental health assessment to see how well you're caring for your teeth and gums.
            Get personalized recommendations based on your specific dental habits.
          </p>
        </div>
        
        <DentalHealthQuiz />
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 bg-white p-3 rounded-lg shadow-sm max-w-xl mx-auto">
            Share this quiz with friends and family to help them improve their dental health too!
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
