import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Sparkles, 
  AlignCenter, 
  Smartphone, 
  LineChart, 
  Sun, 
  Baby, 
  Heart, 
  AlarmClock,
  ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

type Service = {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  gradient: string;
  slug: string;
};

const ServicesSection = () => {
  const services: Service[] = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "/services/general-dentistry.jpg",
      icon: <Stethoscope className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
      slug: "general-dentistry"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "/services/cosmetic-dentistry.jpg",
      icon: <Sparkles className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-500",
      slug: "cosmetic-dentistry"
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "/services/orthodontics.jpg",
      icon: <AlignCenter className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500",
      slug: "orthodontics"
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural-looking results",
      image: "/services/dental-implants.jpg",
      icon: <Smartphone className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500",
      slug: "dental-implants"
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic care to save damaged teeth",
      image: "/services/root-canal.jpg",
      icon: <LineChart className="h-6 w-6" />,
      gradient: "from-red-500 to-rose-500",
      slug: "root-canal"
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile",
      image: "/services/teeth-whitening.jpg",
      icon: <Sun className="h-6 w-6" />,
      gradient: "from-yellow-500 to-amber-500",
      slug: "teeth-whitening"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: "/services/pediatric-dentistry.jpg",
      icon: <Baby className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-400",
      slug: "pediatric-dentistry"
    },
    {
      title: "Periodontal Treatment",
      description: "Comprehensive gum care and disease prevention",
      image: "/services/periodontal.jpg",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-indigo-500 to-violet-500",
      slug: "periodontal-treatment"
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services when you need them most",
      image: "/services/emergency-dental.jpg",
      icon: <AlarmClock className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-500",
      slug: "emergency-dental-care"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="badge-premium mb-4">
              <Sparkles className="w-4 h-4" />
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Dental Solutions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>
        </ScrollReveal>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="card-elevated overflow-hidden h-full flex flex-col">
                {/* Image container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} in Palghar - Professional dental care and treatment at Dental Solutions Palghar`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="413"
                    height="208"
                    decoding="async"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Floating icon */}
                  <div className={cn(
                    "absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
                    `bg-gradient-to-br ${service.gradient}`
                  )}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {service.description}
                  </p>
                  <Link to={`/services/${service.slug}`}>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between group/btn hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
