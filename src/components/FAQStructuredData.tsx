
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQStructuredDataProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "What dental services do you offer in Palghar?",
    answer: "At Dental Solutions Palghar, we offer comprehensive dental care including general dentistry (checkups, cleanings, fillings), cosmetic dentistry (teeth whitening, veneers), restorative dentistry (crowns, bridges, implants), orthodontics (braces, clear aligners), root canal treatment, periodontal treatment, pediatric dentistry, conscious sedation and emergency dental care."
  },
  {
    question: "How often should I visit a dentist in Palghar?",
    answer: "We recommend visiting Dental Solutions Palghar every six months for routine checkups and professional cleaning. Some patients may need more frequent visits based on their specific oral health needs."
  },
  {
    question: "What is the cost of dental implants in Palghar?",
    answer: "The cost of dental implants at Dental Solutions Palghar varies depending on the number of implants needed and case complexity. We offer competitive pricing with options starting from ₹25,000 per implant and flexible payment plans."
  },
  {
    question: "Do you provide emergency dental services in Palghar?",
    answer: "Yes, Dental Solutions Palghar offers emergency dental services for issues like severe toothaches, knocked-out teeth, broken teeth, lost fillings or crowns, bleeding gums, or dental infections. Call +918600892884 for immediate assistance."
  },
  {
    question: "What orthodontic options do you offer for teeth straightening in Palghar?",
    answer: "We offer multiple orthodontic treatment options including traditional metal braces, ceramic braces, lingual braces and clear aligners. Our orthodontist will recommend the best option based on your specific needs."
  }
];

const FAQStructuredData = ({ faqs }: FAQStructuredDataProps) => {
  const items = faqs && faqs.length > 0 ? faqs : defaultFAQs;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default FAQStructuredData;
