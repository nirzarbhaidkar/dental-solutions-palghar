
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    title: "General Dentistry",
    description: "Comprehensive check-ups, cleanings, fillings, and preventive care to maintain optimal oral health.",
    image: "/services/general-dentistry.jpg",
    link: "#"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Transform your smile with veneers, bonding, and esthetic treatments for a beautiful appearance.",
    image: "/services/cosmetic-dentistry.jpg",
    link: "#"
  },
  {
    title: "Orthodontics",
    description: "Straighten your teeth with braces or clear aligners for improved function and aesthetics.",
    image: "/services/orthodontics.jpg",
    link: "#"
  },
  {
    title: "Dental Implants",
    description: "Replace missing teeth with permanent, natural-looking implants that function like real teeth.",
    image: "/services/dental-implants.jpg",
    link: "#"
  },
  {
    title: "Root Canal Treatment",
    description: "Painless and effective treatment to save infected teeth and relieve dental pain.",
    image: "/services/root-canal.jpg",
    link: "#"
  },
  {
    title: "Teeth Whitening",
    description: "Professional whitening treatments that deliver brilliant results for a brighter smile.",
    image: "/services/teeth-whitening.jpg",
    link: "#"
  },
  {
    title: "Pediatric Dentistry",
    description: "Kid-friendly dental care in a comfortable environment for children of all ages.",
    image: "/services/pediatric-dentistry.jpg",
    link: "#"
  },
  {
    title: "Periodontal Treatment",
    description: "Specialized care for gum disease to maintain healthy gums and prevent tooth loss.",
    image: "/services/periodontal.jpg",
    link: "#"
  },
  {
    title: "Emergency Dental Care",
    description: "Prompt attention for dental emergencies to alleviate pain and prevent complications.",
    image: "/services/emergency-dental.jpg",
    link: "#"
  }
];

const ServicesSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("services.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("services.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
