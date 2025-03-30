
import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import { Helmet } from "react-helmet-async";

const QuizSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="dental-health-assessment">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Dental Health Assessment Quiz",
                "description": "Take our comprehensive dental health assessment to evaluate your oral hygiene practices and get personalized recommendations.",
                "url": "https://dentalsolutionspalghar.com/#dental-health-assessment"
              }
            ]
          }
          `}
        </script>
      </Helmet>
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
          <div className="text-sm text-gray-500 bg-white p-5 rounded-lg shadow-sm max-w-xl mx-auto">
            <h3 className="text-primary font-medium mb-2">Why This Quiz Matters</h3>
            <p className="mb-3">
              Regular dental assessments help identify potential issues before they become serious problems. 
              Our Palghar dental experts recommend completing this quiz every 6 months.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Dental Health Assessment Quiz',
                      text: 'Take this dental health quiz from Dental Solutions Palghar to improve your oral health!',
                      url: 'https://dentalsolutionspalghar.com/#dental-health-assessment',
                    })
                  }
                }}
                className="text-accent hover:text-primary transition-colors flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
