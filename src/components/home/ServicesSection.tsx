
import React from "react";
import { 
  Stethoscope, 
  Sparkles, 
  AlignCenter, 
  Smartphone, 
  LineChart, 
  Sun, 
  Baby, 
  Heart, 
  AlarmClock 
} from "lucide-react";
import { cn } from "@/lib/utils";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  color: string;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "/services/general-dentistry.jpg",
      icon: <Stethoscope className="h-6 w-6" />,
      color: "bg-blue-100"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "/services/cosmetic-dentistry.jpg",
      icon: <Sparkles className="h-6 w-6" />,
      color: "bg-purple-100"
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "/services/orthodontics.jpg",
      icon: <AlignCenter className="h-6 w-6" />,
      color: "bg-green-100"
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural-looking results",
      image: "/services/dental-implants.jpg",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-yellow-100"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic care to save damaged teeth",
      image: "/services/root-canal.jpg",
      icon: <LineChart className="h-6 w-6" />,
      color: "bg-red-100"
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile",
      image: "/services/teeth-whitening.jpg",
      icon: <Sun className="h-6 w-6" />,
      color: "bg-amber-100"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: "/services/pediatric-dentistry.jpg",
      icon: <Baby className="h-6 w-6" />,
      color: "bg-pink-100"
    },
    {
      title: "Periodontal Treatment",
      description: "Comprehensive gum care and disease prevention",
      image: "/services/periodontal.jpg",
      icon: <Heart className="h-6 w-6" />,
      color: "bg-indigo-100"
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services when you need them most",
      image: "/services/emergency-dental.jpg",
      icon: <AlarmClock className="h-6 w-6" />,
      color: "bg-orange-100"
    }
  ];

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Dental Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>
              <div className="p-6 relative">
                <div className={cn("absolute -top-8 left-6 w-14 h-14 rounded-full flex items-center justify-center", service.color)}>
                  {service.icon}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
