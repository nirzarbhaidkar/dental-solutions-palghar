
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, ChevronRight, CircleCheck, Share, Link, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Question = {
  id: number;
  text: string;
  options: Array<{
    id: string;
    text: string;
    value: "A" | "B" | "C";
  }>;
};

type ResultType = "good" | "average" | "needsAttention";

type Result = {
  title: string;
  description: string;
  actionText: string;
  type: ResultType;
};

type Recommendation = {
  id: string;
  title: string;
  description: string;
  relevantResponses: Array<{questionId: number; value: string}>;
};

const questions: Question[] = [
  {
    id: 1,
    text: "How often do you experience sensitivity to hot or cold foods?",
    options: [
      { id: "q1-a", text: "Never", value: "A" },
      { id: "q1-b", text: "Occasionally", value: "B" },
      { id: "q1-c", text: "Frequently", value: "C" },
    ],
  },
  {
    id: 2,
    text: "How often do you visit a dentist for a check-up?",
    options: [
      { id: "q2-a", text: "Every 6 months", value: "A" },
      { id: "q2-b", text: "Once a year", value: "B" },
      { id: "q2-c", text: "Only when I have a problem", value: "C" },
    ],
  },
  {
    id: 3,
    text: "Do your gums bleed when brushing or flossing?",
    options: [
      { id: "q3-a", text: "No, never", value: "A" },
      { id: "q3-b", text: "Sometimes", value: "B" },
      { id: "q3-c", text: "Often", value: "C" },
    ],
  },
  {
    id: 4,
    text: "Do you have persistent bad breath?",
    options: [
      { id: "q4-a", text: "No, never", value: "A" },
      { id: "q4-b", text: "Occasionally", value: "B" },
      { id: "q4-c", text: "Yes, even after brushing", value: "C" },
    ],
  },
  {
    id: 5,
    text: "Are you satisfied with the color of your teeth?",
    options: [
      { id: "q5-a", text: "Yes, they look bright and white", value: "A" },
      { id: "q5-b", text: "They could be whiter", value: "B" },
      { id: "q5-c", text: "I wish they were much whiter", value: "C" },
    ],
  },
  {
    id: 6,
    text: "Do you experience jaw pain, headaches, or teeth grinding?",
    options: [
      { id: "q6-a", text: "No", value: "A" },
      { id: "q6-b", text: "Occasionally", value: "B" },
      { id: "q6-c", text: "Yes, regularly", value: "C" },
    ],
  },
  {
    id: 7,
    text: "How often do you brush your teeth?",
    options: [
      { id: "q7-a", text: "Twice a day or more", value: "A" },
      { id: "q7-b", text: "Once a day", value: "B" },
      { id: "q7-c", text: "Less than once a day", value: "C" },
    ],
  },
  {
    id: 8,
    text: "Do you use dental floss or interdental brushes?",
    options: [
      { id: "q8-a", text: "Yes, daily", value: "A" },
      { id: "q8-b", text: "Occasionally", value: "B" },
      { id: "q8-c", text: "Rarely or never", value: "C" },
    ],
  },
  {
    id: 9,
    text: "Do you smoke or use tobacco products?",
    options: [
      { id: "q9-a", text: "No, never", value: "A" },
      { id: "q9-b", text: "Occasionally", value: "B" },
      { id: "q9-c", text: "Yes, regularly", value: "C" },
    ],
  },
  {
    id: 10,
    text: "How would you rate your diet in terms of sugar consumption?",
    options: [
      { id: "q10-a", text: "Low sugar diet", value: "A" },
      { id: "q10-b", text: "Moderate sugar intake", value: "B" },
      { id: "q10-c", text: "High sugar consumption", value: "C" },
    ],
  },
];

const results: Record<string, Result> = {
  A: {
    title: "Your smile is in great shape!",
    description: "Keep up your routine and consider a professional cleaning to maintain it.",
    actionText: "Book consultation",
    type: "good",
  },
  B: {
    title: "Your oral health is decent, but there's room for improvement.",
    description: "A professional check-up can help identify areas to focus on.",
    actionText: "Book consultation",
    type: "average",
  },
  C: {
    title: "Your dental health may need attention.",
    description: "Don't wait until it worsens—get expert advice on how to improve your dental health.",
    actionText: "Book consultation now",
    type: "needsAttention",
  },
};

const recommendations: Recommendation[] = [
  {
    id: "sensitivity",
    title: "Tooth Sensitivity Solution",
    description: "Try using toothpaste for sensitive teeth and consider a dental check-up to identify the cause.",
    relevantResponses: [{questionId: 1, value: "B"}, {questionId: 1, value: "C"}]
  },
  {
    id: "checkups",
    title: "Regular Check-ups",
    description: "Scheduling bi-annual dental check-ups can prevent many dental problems and save you from costly treatments later.",
    relevantResponses: [{questionId: 2, value: "B"}, {questionId: 2, value: "C"}]
  },
  {
    id: "bleeding-gums",
    title: "Gum Care",
    description: "Bleeding gums can be an early sign of gum disease. Improve your brushing technique and consider a dental cleaning.",
    relevantResponses: [{questionId: 3, value: "B"}, {questionId: 3, value: "C"}]
  },
  {
    id: "bad-breath",
    title: "Fresh Breath Solution",
    description: "Persistent bad breath may indicate underlying dental issues. A thorough dental cleaning and proper tongue cleaning can help.",
    relevantResponses: [{questionId: 4, value: "B"}, {questionId: 4, value: "C"}]
  },
  {
    id: "whitening",
    title: "Teeth Whitening Options",
    description: "Professional teeth whitening treatments can safely brighten your smile without damaging enamel.",
    relevantResponses: [{questionId: 5, value: "B"}, {questionId: 5, value: "C"}]
  },
  {
    id: "tmj",
    title: "TMJ/Grinding Solution",
    description: "Jaw pain and grinding may require a night guard or TMJ therapy. Book a consultation to evaluate your symptoms.",
    relevantResponses: [{questionId: 6, value: "B"}, {questionId: 6, value: "C"}]
  },
  {
    id: "brushing",
    title: "Brushing Routine Improvement",
    description: "Brushing twice a day with fluoride toothpaste is essential for preventing decay and gum disease.",
    relevantResponses: [{questionId: 7, value: "B"}, {questionId: 7, value: "C"}]
  },
  {
    id: "flossing",
    title: "Interdental Cleaning",
    description: "Flossing daily removes plaque from areas your toothbrush can't reach, preventing cavities between teeth.",
    relevantResponses: [{questionId: 8, value: "B"}, {questionId: 8, value: "C"}]
  },
  {
    id: "tobacco",
    title: "Tobacco Use Impact",
    description: "Tobacco products stain teeth, increase gum disease risk, and raise oral cancer risk. Consider cessation support.",
    relevantResponses: [{questionId: 9, value: "B"}, {questionId: 9, value: "C"}]
  },
  {
    id: "diet",
    title: "Diet and Dental Health",
    description: "Reducing sugar intake can significantly decrease your risk of cavities and improve overall dental health.",
    relevantResponses: [{questionId: 10, value: "B"}, {questionId: 10, value: "C"}]
  }
];

const DentalHealthQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);
  const [quizId, setQuizId] = useState<string | null>(null);

  useEffect(() => {
    // Check if there's a quiz ID in the URL
    const params = new URLSearchParams(window.location.search);
    const quizIdParam = params.get('quizId');
    
    if (quizIdParam) {
      try {
        const decodedData = JSON.parse(atob(quizIdParam));
        if (decodedData && decodedData.answers) {
          setAnswers(decodedData.answers);
          setCompleted(true);
          setStarted(true);
        }
      } catch (error) {
        console.error("Failed to parse quiz data:", error);
      }
    }
  }, []);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCompleted(true);
      // Generate a unique ID for this quiz result
      generateQuizId();
    }
  };

  const generateQuizId = () => {
    const quizData = {
      answers,
      timestamp: new Date().toISOString(),
    };
    const encoded = btoa(JSON.stringify(quizData));
    setQuizId(encoded);
  };

  const calculateResult = () => {
    const counts: Record<string, number> = { A: 0, B: 0, C: 0 };
    
    Object.values(answers).forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    
    if (counts.A >= counts.B && counts.A >= counts.C) return "A";
    if (counts.B >= counts.A && counts.B >= counts.C) return "B";
    return "C";
  };

  const getPersonalizedRecommendations = (): Recommendation[] => {
    const personalizedRecs: Recommendation[] = [];
    
    // Check each recommendation's relevance based on user's answers
    recommendations.forEach(rec => {
      const isRelevant = rec.relevantResponses.some(response => {
        return answers[response.questionId] === response.value;
      });
      
      if (isRelevant) {
        personalizedRecs.push(rec);
      }
    });
    
    return personalizedRecs;
  };
  
  const handleWhatsAppClick = () => {
    const result = calculateResult();
    const message = `Hello, I just took your dental health quiz and got: "${results[result].title}" - I'd like to book an appointment at Dental Solutions Palghar.`;
    window.open(`https://wa.me/918600892884?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleShareQuiz = () => {
    if (!quizId) return;
    
    const shareUrl = `${window.location.origin}${window.location.pathname}?quizId=${quizId}#quiz`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Dental Health Quiz Results',
        text: 'Check out my dental health quiz results from Dental Solutions Palghar!',
        url: shareUrl,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast.success("Link copied to clipboard!");
      }).catch((err) => {
        console.error('Failed to copy: ', err);
        toast.error("Failed to copy link");
      });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setCompleted(false);
    setQuizId(null);
    
    // Remove the quiz ID from the URL
    const url = new URL(window.location.href);
    url.searchParams.delete('quizId');
    window.history.replaceState({}, '', url.toString());
  };

  const currentQuestionData = questions[currentQuestion];
  const result = completed ? calculateResult() : null;
  const resultData = result ? results[result] : null;
  const personalizedRecommendations = completed ? getPersonalizedRecommendations() : [];

  if (!started) {
    return (
      <Card className="w-full max-w-3xl mx-auto mt-12 mb-8 overflow-hidden shadow-lg border-0 animate-fade-in" id="quiz">
        <div className="bg-primary text-white p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Find out if your teeth and gums are in top shape!</h2>
        </div>
        <CardContent className="p-8 text-center">
          <p className="mb-6 text-lg">Take our quick 2-minute quiz to assess your dental health and get personalized recommendations.</p>
          <ul className="text-left mb-6 mx-auto max-w-md">
            <li className="flex items-center gap-2 mb-2">
              <Check className="h-5 w-5 text-primary" /> 10 simple questions
            </li>
            <li className="flex items-center gap-2 mb-2">
              <Check className="h-5 w-5 text-primary" /> Personalized dental care tips
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-5 w-5 text-primary" /> Free professional recommendations
            </li>
          </ul>
          <Button 
            onClick={() => setStarted(true)} 
            className="mt-4 bg-accent hover:bg-accent/90 text-white group"
            size="lg"
          >
            Start Quiz <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto mt-12 mb-8 overflow-hidden shadow-lg border-0" id="quiz">
      {!completed ? (
        <>
          <div className="bg-primary text-white p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Dental Health Quiz</h2>
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full">
              <div 
                className="bg-white h-2 rounded-full transition-all" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold mb-6">{currentQuestionData.text}</h3>
            <RadioGroup 
              value={answers[currentQuestionData.id] || ""}
              onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
              className="space-y-4"
            >
              {currentQuestionData.options.map((option) => (
                <div key={option.id} className={cn(
                  "flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all",
                  answers[currentQuestionData.id] === option.value 
                    ? "border-primary bg-primary/5" 
                    : "border-gray-200 hover:border-primary/50"
                )}>
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.id}
                    className="border-2"
                  />
                  <label 
                    htmlFor={option.id} 
                    className="text-base cursor-pointer flex-grow py-2 pl-3"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="p-6 border-t flex justify-between">
            {currentQuestion > 0 ? (
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion((prev) => prev - 1)}
              >
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestionData.id]}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white"
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
            </Button>
          </CardFooter>
        </>
      ) : (
        <div className="animate-fade-in">
          <div className={cn(
            "p-6 text-white",
            resultData?.type === "good" ? "bg-green-600" : 
            resultData?.type === "average" ? "bg-primary" : "bg-orange-600"
          )}>
            <div className="flex items-center gap-3">
              <CircleCheck className="h-8 w-8" />
              <h3 className="text-xl font-bold">Your Results</h3>
            </div>
          </div>
          <CardContent className="p-6">
            <div className="text-center mb-6 pb-6 border-b">
              <h3 className="text-2xl font-bold mb-2">{resultData?.title}</h3>
              <p className="text-muted-foreground">{resultData?.description}</p>
            </div>
            
            {personalizedRecommendations.length > 0 && (
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4">Your Personalized Recommendations:</h4>
                <div className="space-y-4">
                  {personalizedRecommendations.map((rec) => (
                    <div key={rec.id} className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                      <h5 className="font-medium text-primary">{rec.title}</h5>
                      <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-3">Your answers:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(answers).map(([questionId, answer]) => {
                  const question = questions.find(q => q.id === parseInt(questionId));
                  const option = question?.options.find(o => o.value === answer);
                  return (
                    <div key={questionId} className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium">{question?.text}</p>
                        <p className="text-xs text-muted-foreground">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-6 border-t flex flex-wrap gap-4 justify-between">
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleReset} 
                variant="outline"
              >
                Retake Quiz
              </Button>
              <Button 
                onClick={handleShareQuiz}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Share className="h-4 w-4" /> Share Results
              </Button>
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className={cn(
                "px-6",
                resultData?.type === "good" ? "bg-green-600 hover:bg-green-700" : 
                resultData?.type === "average" ? "bg-primary hover:bg-primary/90" : 
                "bg-orange-600 hover:bg-orange-700"
              )}
            >
              {resultData?.actionText}
            </Button>
          </CardFooter>
        </div>
      )}
    </Card>
  );
};

export default DentalHealthQuiz;
