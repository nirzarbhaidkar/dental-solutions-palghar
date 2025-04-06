
import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

type FAQ = {
  question: string;
  answer: string;
};

const FAQsSection = () => {
  const { t, language } = useLanguage();
  
  // FAQs in all three languages
  const faqsByLanguage: Record<string, FAQ[]> = {
    en: [
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
    ],
    hi: [
      {
        question: "आप कौन-कौन सी सेवाएँ प्रदान करते हैं?",
        answer: "हम सामान्य दंत चिकित्सा, कॉस्मेटिक प्रक्रियाएँ, ऑर्थोडोंटिक्स, डेंटल इम्प्लांट्स, रूट कैनाल ट्रीटमेंट, दांतों की सफेदी, बाल दंत चिकित्सा, पेरियोडोंटल उपचार और आपातकालीन दंत देखभाल सहित दंत सेवाओं की एक व्यापक श्रृंखला प्रदान करते हैं।"
      },
      {
        question: "मुझे दंत चिकित्सक के पास कितनी बार जाना चाहिए?",
        answer: "हम नियमित जांच और सफाई के लिए हर 6 महीने में दंत चिकित्सक के पास जाने की सलाह देते हैं। हालांकि, कुछ मरीजों को अपनी मौखिक स्वास्थ्य आवश्यकताओं के आधार पर अधिक बार आने की आवश्यकता हो सकती है।"
      },
      {
        question: "दंत संबंधी आपातकाल के मामले में मुझे क्या करना चाहिए?",
        answer: "दंत संबंधी आपातकाल के मामले में, हमें तुरंत +91 8600892884 पर संपर्क करें। हम तत्काल दंत समस्याओं को तुरंत संबोधित करने के लिए आपातकालीन सेवाएं प्रदान करते हैं।"
      },
      {
        question: "क्या आप बीमा स्वीकार करते हैं?",
        answer: "हां, हम ऐसे बिल प्रदान करते हैं जिन्हें किसी भी मेडिक्लेम बीमा पर दावा किया जा सकता है।"
      },
      {
        question: "मैं अपॉइंटमेंट कैसे बुक कर सकता हूँ?",
        answer: "आप हमें +91 8600892884 पर कॉल करके या उसी नंबर पर व्हाट्सएप के माध्यम से अपॉइंटमेंट बुक कर सकते हैं। आप व्यक्तिगत रूप से भी हमारे क्लिनिक पर आ सकते हैं।"
      },
      {
        question: "आपके काम करने के घंटे क्या हैं?",
        answer: "हम सोमवार से शनिवार तक सुबह 9:30 बजे से दोपहर 2 बजे तक और शाम 5 बजे से 9 बजे तक खुले हैं। हम रविवार को बंद रहते हैं।"
      }
    ],
    mr: [
      {
        question: "तुम्ही कोणत्या सेवा देता?",
        answer: "आम्ही सामान्य दंतचिकित्सा, कॉस्मेटिक प्रक्रिया, ऑर्थोडोंटिक्स, डेंटल इम्प्लांट्स, रूट कॅनाल ट्रीटमेंट, दात व्हायटनिंग, बाल दंतचिकित्सा, पेरियोडोंटल उपचार आणि आपत्कालीन दंत काळजी यासह दंत सेवांची व्यापक श्रेणी देतो."
      },
      {
        question: "मला किती वेळा दंतवैद्याकडे जावे लागेल?",
        answer: "आम्ही नियमित तपासणी आणि स्वच्छतेसाठी दर 6 महिन्यांनी दंतवैद्याकडे जाण्याची शिफारस करतो. मात्र, काही रुग्णांना त्यांच्या तोंडाच्या आरोग्याच्या गरजांनुसार अधिक वारंवार भेट देण्याची आवश्यकता असू शकते."
      },
      {
        question: "दंत आपत्कालीन स्थितीत मी काय करावे?",
        answer: "दंत आपत्कालीन परिस्थितीत, आम्हाला +91 8600892884 वर त्वरित संपर्क करा. आम्ही तात्काळ दंत समस्या त्वरित सोडवण्यासाठी आपत्कालीन सेवा देतो."
      },
      {
        question: "तुम्ही विमा स्वीकारता का?",
        answer: "होय, आम्ही अशी बिले देतो जी कोणत्याही मेडिक्लेम विम्यावर दावा करू शकतात."
      },
      {
        question: "मी अपॉइंटमेंट कशी बुक करू शकतो?",
        answer: "तुम्ही आम्हाला +91 8600892884 वर कॉल करून किंवा त्याच नंबरवर व्हाट्सअँपद्वारे अपॉइंटमेंट बुक करू शकता. तुम्ही आमच्या क्लिनिकला व्यक्तिशः भेट देऊ शकता."
      },
      {
        question: "तुमचे कार्यालयीन तास काय आहेत?",
        answer: "आम्ही सोमवार ते शनिवार सकाळी 9:30 ते दुपारी 2 वाजेपर्यंत आणि संध्याकाळी 5 ते 9 वाजेपर्यंत उघडे आहोत. आम्ही रविवारी बंद असतो."
      }
    ]
  };

  // Use the correct FAQs based on current language
  const faqs = faqsByLanguage[language] || faqsByLanguage['en'];

  return (
    <section id="faqs" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("faqs.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("faqs.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("faqs.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-0">
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
