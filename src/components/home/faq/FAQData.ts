
export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

export const faqData: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of dental services including general dentistry, cosmetic procedures, orthodontics, dental implants, root canal treatments, teeth whitening, pediatric dentistry, periodontal treatments, and emergency dental care.",
    category: "services"
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health needs.",
    category: "general"
  },
  {
    question: "What should I do in a dental emergency?",
    answer: "In case of a dental emergency, contact us immediately at +91 8600892884. We offer emergency services to address urgent dental issues promptly. Common emergencies include severe toothache, knocked-out tooth, broken tooth, or dental abscess.",
    category: "emergency"
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we provide bills that can be claimed on any mediclaim insurance. Please bring your insurance details during your visit, and our staff will help you process the claim.",
    category: "payments"
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment by calling us at +91 8600892884 or through WhatsApp at the same number. You can also visit our clinic in person or use the appointment booking form on our website.",
    category: "appointments"
  },
  {
    question: "What are your operating hours?",
    answer: "We are open Monday through Saturday from 9:30 am–2 pm and 5–9 pm. We are closed on Sundays except for emergency appointments that can be scheduled via phone.",
    category: "general"
  },
  {
    question: "Is teeth whitening safe?",
    answer: "Yes, professional teeth whitening performed by our dentists is safe. We use clinically proven whitening agents and follow strict protocols to ensure your comfort and safety throughout the procedure.",
    category: "treatments"
  },
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. Regular check-ups, good oral hygiene, and avoiding harmful habits like smoking are essential for the longevity of dental implants.",
    category: "treatments"
  }
];
