
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

type Question = {
  id: number;
  text: {
    en: string;
    hi: string;
    mr: string;
  };
  options: Array<{
    id: string;
    text: {
      en: string;
      hi: string;
      mr: string;
    };
    isCorrect: boolean;
  }>;
};

const quizQuestions: Question[] = [
  {
    id: 1,
    text: {
      en: "How many times a day should you brush your teeth?",
      hi: "आपको दिन में कितनी बार अपने दांतों को ब्रश करना चाहिए?",
      mr: "दिवसातून किती वेळा दात घासावेत?"
    },
    options: [
      { id: "1a", text: { en: "Once", hi: "एक बार", mr: "एकदा" }, isCorrect: false },
      { id: "1b", text: { en: "Twice", hi: "दो बार", mr: "दोनदा" }, isCorrect: true },
      { id: "1c", text: { en: "After every meal", hi: "हर भोजन के बाद", mr: "प्रत्येक जेवणानंतर" }, isCorrect: false },
      { id: "1d", text: { en: "Once a week", hi: "सप्ताह में एक बार", mr: "आठवड्यातून एकदा" }, isCorrect: false }
    ]
  },
  {
    id: 2,
    text: {
      en: "Which of the following is NOT a sign of gum disease?",
      hi: "निम्नलिखित में से कौन मसूड़ों की बीमारी का लक्षण नहीं है?",
      mr: "खालीलपैकी कोणते हिरड्यांच्या आजाराचे लक्षण नाही?"
    },
    options: [
      { id: "2a", text: { en: "Bleeding gums", hi: "मसूड़ों से खून आना", mr: "हिरड्यांमधून रक्तस्त्राव" }, isCorrect: false },
      { id: "2b", text: { en: "Sensitive teeth", hi: "संवेदनशील दांत", mr: "संवेदनशील दात" }, isCorrect: true },
      { id: "2c", text: { en: "Bad breath", hi: "मुंह की दुर्गंध", mr: "तोंडाची दुर्गंधी" }, isCorrect: false },
      { id: "2d", text: { en: "Receding gums", hi: "मसूड़ों का पीछे हटना", mr: "हिरड्या मागे जाणे" }, isCorrect: false }
    ]
  },
  {
    id: 3,
    text: {
      en: "How often should you replace your toothbrush?",
      hi: "आपको अपना टूथब्रश कितनी बार बदलना चाहिए?",
      mr: "तुम्ही तुमचा टूथब्रश किती काळानंतर बदलावा?"
    },
    options: [
      { id: "3a", text: { en: "Every 3-4 months", hi: "हर 3-4 महीने", mr: "दर 3-4 महिन्यांनी" }, isCorrect: true },
      { id: "3b", text: { en: "Once a year", hi: "साल में एक बार", mr: "वर्षातून एकदा" }, isCorrect: false },
      { id: "3c", text: { en: "Every month", hi: "हर महीने", mr: "दर महिन्याला" }, isCorrect: false },
      { id: "3d", text: { en: "When it looks worn out", hi: "जब यह घिसा हुआ दिखे", mr: "जेव्हा ते खराब दिसते" }, isCorrect: false }
    ]
  },
  {
    id: 4,
    text: {
      en: "Which of these foods is best for your teeth?",
      hi: "इनमें से कौन सा खाद्य पदार्थ आपके दांतों के लिए सबसे अच्छा है?",
      mr: "यापैकी कोणते अन्न तुमच्या दातांसाठी सर्वोत्तम आहे?"
    },
    options: [
      { id: "4a", text: { en: "Candy", hi: "कैंडी", mr: "कॅंडी" }, isCorrect: false },
      { id: "4b", text: { en: "Soft drinks", hi: "सॉफ्ट ड्रिंक्स", mr: "सॉफ्ट ड्रिंक्स" }, isCorrect: false },
      { id: "4c", text: { en: "Cheese", hi: "पनीर", mr: "चीझ" }, isCorrect: true },
      { id: "4d", text: { en: "Citrus fruits", hi: "खट्टे फल", mr: "आंबट फळे" }, isCorrect: false }
    ]
  },
  {
    id: 5,
    text: {
      en: "What is the main cause of tooth decay?",
      hi: "दांतों के क्षय का मुख्य कारण क्या है?",
      mr: "दात खराब होण्याचे मुख्य कारण काय आहे?"
    },
    options: [
      { id: "5a", text: { en: "Bacteria", hi: "बैक्टीरिया", mr: "बॅक्टेरिया" }, isCorrect: true },
      { id: "5b", text: { en: "Cold weather", hi: "ठंडा मौसम", mr: "थंड हवामान" }, isCorrect: false },
      { id: "5c", text: { en: "Drinking water", hi: "पानी पीना", mr: "पाणी पिणे" }, isCorrect: false },
      { id: "5d", text: { en: "Lack of sleep", hi: "नींद की कमी", mr: "झोपेची कमी" }, isCorrect: false }
    ]
  }
];

const DentalHealthQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const { language } = useLanguage();

  const handleOptionSelect = (optionId: string, isCorrect: boolean) => {
    setSelectedOption(optionId);
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (language === 'en') {
      if (percentage === 100) return "Perfect! You have excellent dental knowledge!";
      if (percentage >= 80) return "Great job! You know a lot about dental health!";
      if (percentage >= 60) return "Good effort! You have decent dental knowledge.";
      if (percentage >= 40) return "Not bad. There's room for improvement.";
      return "Keep learning! Schedule a consultation to learn more about dental health.";
    } else if (language === 'hi') {
      if (percentage === 100) return "परफेक्ट! आपके पास उत्कृष्ट दंत ज्ञान है!";
      if (percentage >= 80) return "बहुत बढ़िया! आप दंत स्वास्थ्य के बारे में बहुत कुछ जानते हैं!";
      if (percentage >= 60) return "अच्छा प्रयास! आपके पास ठीक-ठाक दंत ज्ञान है।";
      if (percentage >= 40) return "बुरा नहीं। सुधार की गुंजाइश है।";
      return "सीखते रहें! दंत स्वास्थ्य के बारे में अधिक जानने के लिए परामर्श शेड्यूल करें।";
    } else {
      if (percentage === 100) return "परफेक्ट! तुमच्याकडे उत्कृष्ट दंत ज्ञान आहे!";
      if (percentage >= 80) return "छान काम! तुम्हाला दंत आरोग्याबद्दल खूप माहिती आहे!";
      if (percentage >= 60) return "चांगला प्रयत्न! तुमच्याकडे चांगले दंत ज्ञान आहे.";
      if (percentage >= 40) return "वाईट नाही. सुधारणेची संधी आहे.";
      return "शिकत रहा! दंत आरोग्याबद्दल अधिक जाणून घेण्यासाठी सल्लामसलत शेड्यूल करा.";
    }
  };

  // Translation mapping for button text
  const buttonText = {
    next: {
      en: "Next Question",
      hi: "अगला प्रश्न",
      mr: "पुढील प्रश्न"
    },
    restart: {
      en: "Restart Quiz",
      hi: "क्विज पुनः आरंभ करें",
      mr: "क्विझ पुन्हा सुरू करा"
    },
    appointment: {
      en: "Book a Consultation",
      hi: "परामर्श बुक करें",
      mr: "सल्लामसलत बुक करा"
    },
    select: {
      en: "Select an option",
      hi: "एक विकल्प चुनें",
      mr: "एक पर्याय निवडा"
    }
  };

  // Result title translations
  const resultTitle = {
    en: "Quiz Results",
    hi: "क्विज परिणाम",
    mr: "क्विझ निकाल"
  };

  // Score message translations
  const scoreMessage = {
    en: "You scored",
    hi: "आपका स्कोर",
    mr: "तुमचे गुण"
  };

  // Out of message translations
  const outOfMessage = {
    en: "out of",
    hi: "में से",
    mr: "पैकी"
  };

  if (showResult) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6">{resultTitle[language as keyof typeof resultTitle]}</h3>
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-primary">{score}/{quizQuestions.length}</div>
          <p className="text-lg mt-2">
            {scoreMessage[language as keyof typeof scoreMessage]} {score} {outOfMessage[language as keyof typeof outOfMessage]} {quizQuestions.length}
          </p>
          <p className="text-gray-600 mt-4">{getResultMessage()}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={restartQuiz} variant="outline">
            {buttonText.restart[language as keyof typeof buttonText.restart]}
          </Button>
          <Button 
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%20just%20took%20the%20dental%20quiz%20on%20your%20website%20and%20scored%20" + score + "%20out%20of%20" + quizQuestions.length + ".%20I%27d%20like%20to%20book%20a%20consultation.%20Thank%20you!", "_blank")}
          >
            {buttonText.appointment[language as keyof typeof buttonText.appointment]}
          </Button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">
            {language === 'en' ? 'Question' : language === 'hi' ? 'प्रश्न' : 'प्रश्न'} {currentQuestion + 1}/{quizQuestions.length}
          </span>
          <span className="text-sm text-gray-500">
            {language === 'en' ? 'Score' : language === 'hi' ? 'स्कोर' : 'गुण'}: {score}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-6">{question.text[language as keyof typeof question.text]}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`w-full p-4 rounded-lg border text-left transition-colors ${
              selectedOption === option.id
                ? option.isCorrect
                  ? "bg-green-100 border-green-500 text-green-800"
                  : "bg-red-100 border-red-500 text-red-800"
                : "border-gray-200 hover:border-primary hover:bg-primary/5"
            }`}
            onClick={() => !answered && handleOptionSelect(option.id, option.isCorrect)}
            disabled={answered}
          >
            {option.text[language as keyof typeof option.text]}
            {answered && selectedOption === option.id && (
              <span className="float-right">
                {option.isCorrect ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleNextQuestion}
          disabled={!answered}
          className={`w-full py-3 ${!answered ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {!answered ? buttonText.select[language as keyof typeof buttonText.select] : buttonText.next[language as keyof typeof buttonText.next]}
        </Button>
      </div>
    </div>
  );
};

export default DentalHealthQuiz;
