
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Question {
  id: number;
  text: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

const quizQuestions: Question[] = [
  {
    id: 1,
    text: "How often should you visit your dentist for a check-up?",
    options: [
      { id: "a", text: "Once every 5 years" },
      { id: "b", text: "Only when you have a toothache" },
      { id: "c", text: "Every 6 months" },
      { id: "d", text: "Once a year" }
    ],
    correctAnswer: "c",
    explanation: "Regular dental check-ups every 6 months help prevent dental problems and catch issues early when they're easier to treat."
  },
  {
    id: 2,
    text: "How long should you brush your teeth?",
    options: [
      { id: "a", text: "30 seconds" },
      { id: "b", text: "1 minute" },
      { id: "c", text: "2 minutes" },
      { id: "d", text: "5 minutes" }
    ],
    correctAnswer: "c",
    explanation: "Dentists recommend brushing for 2 minutes, twice a day, to effectively remove plaque and maintain good oral hygiene."
  },
  {
    id: 3,
    text: "What is the primary cause of tooth decay?",
    options: [
      { id: "a", text: "Sugar consumption" },
      { id: "b", text: "Bacterial plaque" },
      { id: "c", text: "Soft drinks" },
      { id: "d", text: "Cold weather" }
    ],
    correctAnswer: "b",
    explanation: "Bacterial plaque is the primary cause of tooth decay. The bacteria in plaque produce acids that gradually dissolve tooth enamel."
  },
  {
    id: 4,
    text: "When should a child have their first dental visit?",
    options: [
      { id: "a", text: "When all baby teeth have erupted" },
      { id: "b", text: "By their first birthday" },
      { id: "c", text: "When they start school" },
      { id: "d", text: "Only if they have a problem" }
    ],
    correctAnswer: "b",
    explanation: "A child should visit the dentist by their first birthday or when their first tooth appears, whichever comes first."
  },
  {
    id: 5,
    text: "What is the best way to clean between teeth?",
    options: [
      { id: "a", text: "Rinsing with water" },
      { id: "b", text: "Using a toothpick" },
      { id: "c", text: "Flossing" },
      { id: "d", text: "Brushing harder" }
    ],
    correctAnswer: "c",
    explanation: "Flossing is the most effective way to clean between teeth, removing plaque and food particles from areas your toothbrush can't reach."
  }
];

const DentalQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [explanationOpen, setExplanationOpen] = useState<Record<number, boolean>>({});

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answerId
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    let correctAnswers = 0;
    
    quizQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    setScore(correctAnswers);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setIsSubmitted(false);
    setScore(0);
    setExplanationOpen({});
  };

  const toggleExplanation = (questionId: number) => {
    setExplanationOpen((prev) => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const isQuestionAnswered = (questionIndex: number) => {
    return selectedAnswers[questionIndex] !== undefined;
  };

  const getButtonVariant = (questionIndex: number) => {
    if (isSubmitted) {
      const isCorrect = selectedAnswers[questionIndex] === quizQuestions[questionIndex].correctAnswer;
      return isCorrect ? "green" : "destructive";
    }
    return isQuestionAnswered(questionIndex) ? "primary" : "outline";
  };

  if (!showQuiz) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Test Your Dental Knowledge</h2>
        <p className="text-gray-600 mb-6 text-center">
          How much do you know about dental health? Take our quick quiz to find out and learn some important facts about oral hygiene.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={() => setShowQuiz(true)}
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Your Results</h2>
        <div className="text-center mb-8">
          <div className="text-5xl font-bold mb-4 text-primary">{score} / {quizQuestions.length}</div>
          <p className="text-lg">
            {score === quizQuestions.length 
              ? "Perfect! You're a dental health expert!" 
              : score >= quizQuestions.length / 2 
                ? "Good job! You know quite a bit about dental health." 
                : "Thanks for taking the quiz! Now you know more about dental health."}
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <h3 className="text-xl font-semibold">Review Your Answers:</h3>
          {quizQuestions.map((question, index) => {
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            return (
              <div key={question.id} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-start">
                  <div className={`flex items-center justify-center rounded-full w-6 h-6 mt-0.5 mr-2 flex-shrink-0 ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {isCorrect ? <Check size={14} /> : '✗'}
                  </div>
                  <div>
                    <p className="font-medium">{question.text}</p>
                    <p className="text-sm mt-1">
                      Your answer: <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                        {question.options.find(opt => opt.id === selectedAnswers[index])?.text}
                      </span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm mt-1">
                        Correct answer: <span className="text-green-600 font-medium">
                          {question.options.find(opt => opt.id === question.correctAnswer)?.text}
                        </span>
                      </p>
                    )}
                    
                    <Collapsible 
                      open={explanationOpen[index]} 
                      onOpenChange={() => toggleExplanation(index)}
                      className="mt-2"
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="p-0 h-auto text-primary flex items-center">
                          <HelpCircle size={14} className="mr-1" />
                          <span>Why?</span>
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-2 text-sm text-gray-600 border-l-2 border-primary/20 pl-3">
                        {question.explanation}
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button onClick={handleReset} className="bg-primary text-white px-6 py-2 rounded-lg">
            Take Quiz Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 my-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Dental Health Quiz</h2>
        <div className="text-sm text-gray-500">Question {currentQuestion + 1} of {quizQuestions.length}</div>
      </div>

      <motion.div
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <h3 className="text-xl font-medium mb-4">{quizQuestions[currentQuestion].text}</h3>
        
        <RadioGroup 
          value={selectedAnswers[currentQuestion] || ""} 
          onValueChange={handleAnswerSelect}
          className="space-y-3"
        >
          {quizQuestions[currentQuestion].options.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
              <RadioGroupItem value={option.id} id={`option-${option.id}`} />
              <Label htmlFor={`option-${option.id}`} className="flex-grow cursor-pointer">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </motion.div>

      <div className="flex justify-between">
        <Button 
          onClick={handlePreviousQuestion} 
          disabled={currentQuestion === 0}
          variant="outline"
        >
          Previous
        </Button>
        
        <div className="flex space-x-3">
          {quizQuestions.map((_, index) => (
            <Button 
              key={index}
              size="sm"
              variant={getButtonVariant(index)}
              className={`w-8 h-8 p-0 ${currentQuestion === index ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        {currentQuestion < quizQuestions.length - 1 ? (
          <Button 
            onClick={handleNextQuestion} 
            disabled={!isQuestionAnswered(currentQuestion)}
          >
            Next
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            disabled={Object.keys(selectedAnswers).length < quizQuestions.length}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default DentalQuiz;
