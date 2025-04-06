
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-blue-50 pt-20 pb-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-700">
              {t("hero.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="text-md bg-primary hover:bg-primary/90"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
              >
                {t("hero.bookAppointment")}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-md border-primary text-primary hover:bg-primary/10"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <img 
              src="/general-dentistry.jpg" 
              alt="Dental Solutions Palghar" 
              className="rounded-lg shadow-xl max-w-md transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
