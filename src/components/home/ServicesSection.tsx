import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tooth as ToothIcon, 
  Smile, 
  Gauge, 
  Syringe, 
  Activity, 
  Sparkles, 
  Baby, 
  Heart, 
  Phone 
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "/services/general-dentistry.jpg",
      icon: <ToothIcon className="h-6 w-6 text-primary" />
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "/services/cosmetic-dentistry.jpg",
      icon: <Smile className="h-6 w-6 text-primary" />
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "/services/orthodontics.jpg",
      icon: <Gauge className="h-6 w-6 text-primary" />
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural-looking results",
      image: "/services/dental-implants.jpg",
      icon: <Syringe className="h-6 w-6 text-primary" />
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic care to save damaged teeth",
      image: "/services/root-canal.jpg",
      icon: <Activity className="h-6 w-6 text-primary" />
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile",
      image: "/services/teeth-whitening.jpg",
      icon: <Sparkles className="h-6 w-6 text-primary" />
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: "/services/pediatric-dentistry.jpg",
      icon: <Baby className="h-6 w-6 text-primary" />
    },
    {
      title: "Periodontal Treatment",
      description: "Comprehensive gum care and disease prevention",
      image: "/services/periodontal.jpg",
      icon: <Heart className="h-6 w-6 text-primary" />
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services when you need them most",
      image: "/services/emergency-dental.jpg",
      icon: <Phone className="h-6 w-6 text-primary" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            Comprehensive Dental Solutions
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer a wide range of dental services to keep your smile healthy and beautiful. 
            Our expert team uses the latest technology to provide the best care possible.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className="relative h-52 overflow-hidden group">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col h-[calc(100%-13rem)]">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <Button
                    variant="outline"
                    className="mt-auto w-full border-primary/30 text-primary hover:bg-primary/5"
                    onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20" + encodeURIComponent(service.title) + "%20services.%20Please%20provide%20more%20information.%20Thank%20you!", "_blank")}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
