
import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQStructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What dental services do you offer in Palghar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At Dental Solutions Palghar, we offer comprehensive dental care including general dentistry (checkups, cleanings, fillings), cosmetic dentistry (teeth whitening, veneers), restorative dentistry (crowns, bridges, implants), orthodontics (braces, clear aligners), root canal treatment, periodontal treatment, pediatric dentistry, and emergency dental care."
              }
            },
            {
              "@type": "Question",
              "name": "How often should I visit a dentist in Palghar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We recommend visiting Dental Solutions Palghar every six months for routine checkups and professional cleaning. Regular dental visits help prevent dental problems and maintain good oral health. Some patients may need more frequent visits based on their specific oral health needs."
              }
            },
            {
              "@type": "Question",
              "name": "What is the cost of dental implants in Palghar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost of dental implants at Dental Solutions Palghar varies depending on the number of implants needed, the complexity of the case, and whether additional procedures like bone grafting are required. We offer competitive pricing with options starting from ₹25,000 per implant. We provide detailed cost estimates during consultations."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide emergency dental services in Palghar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Dental Solutions Palghar offers emergency dental services for issues like severe toothaches, knocked-out teeth, broken teeth, lost fillings or crowns, bleeding gums, or dental infections. Call our emergency number at +918600892884 for immediate assistance, even outside regular business hours."
              }
            },
            {
              "@type": "Question",
              "name": "What orthodontic options do you offer for teeth straightening in Palghar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "At Dental Solutions Palghar, we offer multiple orthodontic treatment options including traditional metal braces, ceramic braces, lingual braces (behind the teeth), and clear aligners. Our orthodontist will recommend the best option based on your specific needs, lifestyle, and budget during your consultation."
              }
            },
            {
              "@type": "Question",
              "name": "How long does teeth whitening treatment take in your Palghar clinic?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our in-office professional teeth whitening at Dental Solutions Palghar typically takes 60-90 minutes and provides immediate results, with teeth becoming several shades lighter in just one session. We also offer take-home whitening kits that work gradually over 1-2 weeks for those who prefer whitening at their own pace."
              }
            }
          ]
        }
        `}
      </script>
    </Helmet>
  );
};

export default FAQStructuredData;
