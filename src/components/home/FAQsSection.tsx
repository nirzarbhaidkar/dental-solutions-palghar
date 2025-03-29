
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQsSection = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of dental services including general dentistry, cosmetic procedures, orthodontics, dental implants, root canal treatments, teeth whitening, pediatric dentistry, periodontal treatments, and emergency dental care."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health needs."
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "In case of a dental emergency, contact us immediately at +91 8600892884. We offer emergency services to address urgent dental issues promptly."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we provide bills that can be claimed on any mediclaim insurance"
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us at +91 8600892884 or through WhatsApp at the same number. You can also visit our clinic in person."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Saturday from 9:30 am–2 pm and 5–9 pm. We are closed on Sundays."
    }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="faqs" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our dental services and procedures.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 bg-white rounded-xl overflow-hidden shadow"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => {
                  console.log("Toggle question", index);
                  toggleQuestion(index);
                }}
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <HelpCircle
                  className={`h-5 w-5 transition-transform duration-200 ${
                    activeQuestion === index ? 'rotate-180 text-primary' : 'text-gray-500'
                  }`}
                />
              </button>
              {activeQuestion === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
