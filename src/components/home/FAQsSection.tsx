
import React, { useState } from "react";
import FAQSearchBar from "./faq/FAQSearchBar";
import FAQAccordion from "./faq/FAQAccordion";
import FAQContactSection from "./faq/FAQContactSection";
import { faqData } from "./faq/FAQData";
import type { FAQ } from "./faq/FAQAccordion";

const FAQsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleAccordionValueChange = (value: string[]) => {
    setExpandedItems(value);
  };

  return (
    <section id="faqs" className="py-20 bg-gradient-to-b from-muted/50 to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block bg-accent/80 px-4 py-1 rounded-full text-sm font-medium mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our dental services and procedures. Can't find what you're looking for? Feel free to contact us.
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Search bar component */}
          <FAQSearchBar 
            searchTerm={searchTerm} 
            onSearchChange={handleSearch} 
            onClearSearch={handleClearSearch} 
          />

          {/* FAQs Accordion component */}
          <FAQAccordion 
            faqs={filteredFAQs} 
            expandedItems={expandedItems} 
            onAccordionValueChange={handleAccordionValueChange} 
          />

          {/* Have more questions section */}
          <FAQContactSection />
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
