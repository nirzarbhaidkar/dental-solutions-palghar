
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, ChevronRight, CircleCheck } from "lucide-react";
import { cn } from "@/lib/utils";

type Question = {
  id: number;
  text: string;
  options: Array<{
    id: string;
    text: string;
    value: "A" | "B" | "C";
  }>;
};

type Result = {
  title: string;
  description: string;
  actionText: string;
  type: "good" | "average" | "needsAttention";
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
];

const results: Record<string, Result> = {
  A: {
    title: "Your smile is in great shape!",
    description: "Keep up your routine and consider a professional cleaning to maintain it.",
    actionText: "Book a quick consultation",
    type: "good",
  },
  B: {
    title: "Your oral health is decent, but there's room for improvement.",
    description: "A professional check-up can help identify areas to focus on.",
    actionText: "Schedule a visit today",
    type: "average",
  },
  C: {
    title: "Your dental health may need attention.",
    description: "Don't wait until it worsens—get expert advice on how to improve your dental health.",
    actionText: "Claim a free consultation",
    type: "needsAttention",
  },
};

const DentalHealthQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [completed, setCompleted] = useState(false);
  const [agreedToContact, setAgreedToContact] = useState(false);

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
    }
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
  
  const handleWhatsAppClick = () => {
    const result = calculateResult();
    const message = `Hello, I just took your dental health quiz and got: "${results[result].title}" - I'd like to book an appointment at Dental Solutions Palghar.`;
    window.open(`https://wa.me/918600892884?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setCompleted(false);
    setAgreedToContact(false);
  };

  const currentQuestionData = questions[currentQuestion];
  const result = completed ? calculateResult() : null;
  const resultData = result ? results[result] : null;

  if (!started) {
    return (
      <Card className="w-full max-w-3xl mx-auto mt-12 mb-8 overflow-hidden shadow-lg border-0">
        <div className="bg-primary/10 p-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How Healthy Is Your Smile?</h2>
          <p className="text-muted-foreground mt-2">Find out if your teeth and gums are in top shape!</p>
        </div>
        <CardContent className="p-6 text-center">
          <p className="mb-4 text-lg">Take our quick 2-minute quiz to assess your dental health and get personalized recommendations.</p>
          <Button 
            onClick={() => setStarted(true)} 
            className="mt-4"
            size="lg"
          >
            Start Quiz <ChevronRight className="ml-1" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto mt-12 mb-8 overflow-hidden shadow-lg border-0">
      {!completed ? (
        <>
          <div className="bg-primary/10 p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Dental Health Quiz</h2>
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div 
                className="bg-primary h-2 rounded-full transition-all" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">{currentQuestionData.text}</h3>
            <RadioGroup 
              value={answers[currentQuestionData.id] || ""}
              onValueChange={(value) => handleAnswer(currentQuestionData.id, value)}
              className="space-y-3"
            >
              {currentQuestionData.options.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem 
                    value={option.value} 
                    id={option.id}
                    className="border-2"
                  />
                  <label 
                    htmlFor={option.id} 
                    className="text-base cursor-pointer flex-grow py-2"
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
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">{resultData?.title}</h3>
              <p className="text-muted-foreground">{resultData?.description}</p>
            </div>
            
            <div className="mb-6 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Your answers:</h4>
              <ul className="space-y-2">
                {Object.entries(answers).map(([questionId, answer]) => {
                  const question = questions.find(q => q.id === parseInt(questionId));
                  const option = question?.options.find(o => o.value === answer);
                  return (
                    <li key={questionId} className="flex gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>{question?.text}</strong>
                        <br />
                        <span className="text-sm text-muted-foreground">Your answer: {option?.text}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox 
                id="contact-consent" 
                checked={agreedToContact}
                onCheckedChange={(checked) => setAgreedToContact(checked as boolean)} 
              />
              <label 
                htmlFor="contact-consent" 
                className="text-sm cursor-pointer"
              >
                I consent to being contacted by Dental Solutions regarding my dental health. Your privacy is important to us and your information will not be shared.
              </label>
            </div>
          </CardContent>
          <CardFooter className="p-6 border-t flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={handleReset} 
              variant="outline"
              className="w-full sm:w-auto"
            >
              Retake Quiz
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              disabled={!agreedToContact}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
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
