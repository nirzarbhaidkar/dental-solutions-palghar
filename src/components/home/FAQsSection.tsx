
import React, { useState } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Search } from "lucide-react";
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
import { toast } from "sonner";

type FAQ = {
  question: string;
  answer: string;
  category?: string;
};

const FAQsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const faqs: FAQ[] = [
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

  // Filter FAQs based on search term
  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleAccordionValueChange = (value: string) => {
    if (expandedItems.includes(value)) {
      setExpandedItems(expandedItems.filter(item => item !== value));
    } else {
      setExpandedItems([...expandedItems, value]);
    }
  };

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%20have%20a%20question%20about%20your%20dental%20services.%20Can%20you%20help%20me%3F",
      "_blank"
    );
    toast.success("Opening WhatsApp to ask your question");
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
          {/* Search bar */}
          <div className="relative mb-6 flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search for questions..."
                className="w-full py-3 pl-12 pr-10 bg-white rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all">
            {filteredFAQs.length > 0 ? (
              <Accordion type="multiple" value={expandedItems} onValueChange={handleAccordionValueChange} className="w-full">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border-b border-gray-200 last:border-0 data-[state=open]:bg-blue-50/30 rounded-lg transition-colors"
                  >
                    <AccordionTrigger className="text-lg font-medium py-4 px-4 hover:bg-muted/30 rounded-t-lg text-left">
                      {faq.question}
                      {faq.category && (
                        <span className="ml-2 text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {faq.category}
                        </span>
                      )}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 pb-4 px-4">
                      <p className="mb-3">{faq.answer}</p>
                      {(faq.category === "emergency" || faq.category === "appointments") && (
                        <div className="mt-3">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
                            onClick={handleWhatsAppContact}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                              <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Ask on WhatsApp
                          </Button>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No matching questions found</p>
                <Button variant="outline" onClick={handleClearSearch}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>

          {/* Have more questions section */}
          <div className="mt-10 text-center">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="bg-white hover:bg-blue-50 border-primary/30 text-primary">
                  Have More Questions?
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-xl text-primary">Still Have Questions?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Our team is ready to help you with any questions you might have about our dental services.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="grid grid-cols-1 gap-3 mt-2">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white w-full justify-start" 
                    onClick={handleWhatsAppContact}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                      <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    Ask on WhatsApp
                  </Button>
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white w-full justify-start"
                    onClick={() => window.location.href = "tel:+918600892884"}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Directly
                  </Button>
                </div>
                <AlertDialogFooter className="mt-4">
                  <AlertDialogAction>Close</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogHeader>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FAQsSection;
