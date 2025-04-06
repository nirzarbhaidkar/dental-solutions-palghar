
import React from "react";
import { 
  Card, 
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { 
  CreditCard, 
  Clock, 
  MessageCircle, 
  Plane,
  CalendarClock,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const benefits = [
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Expedited Appointments",
    description: "Priority scheduling to accommodate your limited time in India"
  },
  {
    icon: <CalendarClock className="h-5 w-5 text-primary" />,
    title: "Treatment Planning",
    description: "Comprehensive planning for complex procedures during your stay"
  },
  {
    icon: <CreditCard className="h-5 w-5 text-primary" />,
    title: "International Payments",
    description: "Multiple payment options including international credit cards"
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-primary" />,
    title: "Virtual Consultations",
    description: "Pre-visit consultations via video call for treatment planning"
  },
  {
    icon: <Plane className="h-5 w-5 text-primary" />,
    title: "Travel Assistance",
    description: "Help with local accommodations and transportation"
  },
  {
    icon: <Check className="h-5 w-5 text-primary" />,
    title: "International Standards",
    description: "Care that meets global standards with modern equipment"
  }
];

const NRICornerSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="nri-corner" className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("nriCorner.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("nriCorner.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("nriCorner.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-100 hover:border-primary/10 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20and%20interested%20in%20dental%20services%20during%20my%20visit%20to%20India.%20Please%20provide%20more%20information.%20Thank%20you!", "_blank")}
          >
            Contact Us for NRI Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NRICornerSection;
