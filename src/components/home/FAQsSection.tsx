import React, { useState } from "react";
import { Search, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ScrollReveal from "@/components/ui/scroll-reveal";

export type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

const faqData: FAQ[] = [
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

const FAQsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

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

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%20have%20a%20question%20about%20your%20dental%20services.%20Can%20you%20help%20me%3F",
      "_blank"
    );
    toast.success("Opening WhatsApp to ask your question");
  };

  const categoryColors: Record<string, string> = {
    services: "bg-blue-50 text-blue-600 border-blue-100",
    general: "bg-gray-50 text-gray-600 border-gray-100",
    emergency: "bg-red-50 text-red-600 border-red-100",
    payments: "bg-green-50 text-green-600 border-green-100",
    appointments: "bg-purple-50 text-purple-600 border-purple-100",
    treatments: "bg-amber-50 text-amber-600 border-amber-100",
  };

  return (
    <section id="faqs" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/50" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="badge-premium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Find answers to common questions about our dental services and procedures.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto">
            {/* Search input */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for questions..."
                className="w-full py-4 pl-12 pr-12 bg-card rounded-2xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 shadow-soft"
              />
              <AnimatePresence>
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 flex items-center pr-4 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ Accordion */}
            <div className="card-elevated p-6 md:p-8">
              {filteredFAQs.length > 0 ? (
                <Accordion type="multiple" value={expandedItems} onValueChange={handleAccordionValueChange} className="w-full space-y-2">
                  {filteredFAQs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`} 
                      className="border border-border/50 rounded-xl overflow-hidden data-[state=open]:bg-primary/5 data-[state=open]:border-primary/20 transition-all duration-300"
                    >
                      <AccordionTrigger className="text-base md:text-lg font-medium py-4 px-5 hover:no-underline hover:bg-muted/30 text-left">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="flex-1">{faq.question}</span>
                          {faq.category && (
                            <span className={`text-xs px-2.5 py-1 rounded-full border ${categoryColors[faq.category] || categoryColors.general}`}>
                              {faq.category}
                            </span>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground px-5 pb-5">
                        <p className="mb-4 leading-relaxed">{faq.answer}</p>
                        {(faq.category === "emergency" || faq.category === "appointments") && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                            onClick={handleWhatsAppContact}
                          >
                            <WhatsAppIcon className="w-4 h-4 mr-2" />
                            Ask on WhatsApp
                          </Button>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">No matching questions found</p>
                  <Button variant="outline" onClick={handleClearSearch}>
                    Clear Search
                  </Button>
                </div>
              )}
            </div>

            {/* Still have questions CTA */}
            <div className="mt-10 text-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Still Have Questions?
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-xl gradient-text">Still Have Questions?</AlertDialogTitle>
                    <AlertDialogDescription className="text-muted-foreground">
                      Our team is ready to help you with any questions you might have about our dental services.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="grid grid-cols-1 gap-3 mt-4">
                    <Button 
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full justify-start h-12" 
                      onClick={handleWhatsAppContact}
                    >
                      <WhatsAppIcon className="mr-3 h-5 w-5" />
                      Ask on WhatsApp
                    </Button>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white w-full justify-start h-12"
                      onClick={() => window.location.href = "tel:+918600892884"}
                    >
                      <Phone className="mr-3 h-5 w-5" />
                      Call Us Directly
                    </Button>
                  </div>
                  <AlertDialogFooter className="mt-4">
                    <AlertDialogAction className="w-full">Close</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQsSection;
