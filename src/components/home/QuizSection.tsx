
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";

const QuizSection = () => {
  return (
    <section className="py-16 bg-white" id="quiz">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium text-white mb-4">
            Dental Health Assessment
          </span>
          <h2 className="text-3xl font-bold text-primary mb-4">Test Your Dental Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our comprehensive dental health assessment to see how well you're caring for your teeth and gums.
            Get personalized recommendations based on your specific dental habits.
          </p>
        </div>
        
        <DentalHealthQuiz />
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Share this quiz with friends and family to help them improve their dental health too!
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
