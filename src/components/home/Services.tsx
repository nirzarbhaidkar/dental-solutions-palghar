
import React from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const Services = () => {
  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "/services/general-dentistry.jpg"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "/services/cosmetic-dentistry.jpg"
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "/services/orthodontics.jpg"
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural-looking results",
      image: "/services/dental-implants.jpg"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic care to save damaged teeth",
      image: "/services/root-canal.jpg"
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile",
      image: "/services/teeth-whitening.jpg"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: "/services/pediatric-dentistry.jpg"
    },
    {
      title: "Periodontal Treatment",
      description: "Comprehensive gum care and disease prevention",
      image: "/services/periodontal.jpg"
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services when you need them most",
      image: "/services/emergency-dental.jpg"
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
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
