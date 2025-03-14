import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, Phone, Clock, ChevronRight, Facebook, Instagram, HelpCircle, Star, User, Quote, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    fbq?: any;
    _fbq?: any;
  }
}

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const headlines = [
    {
      title: "Expert Dental Care for Your",
      highlight: "Perfect Smile",
    },
    {
      title: "Advanced Technology for",
      highlight: "Better Care",
    },
    {
      title: "Trusted by Families for",
      highlight: "Over 11 Years",
    },
    {
      title: "Comfortable Care for Your",
      highlight: "Dental Health",
    },
  ];

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

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of dental services including general dentistry, cosmetic procedures, orthodontics, dental implants, root canal treatments, teeth whitening, pediatric dentistry, periodontal treatments, and emergency dental care."
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every 6 months for routine check-ups and cleanings. However, some patients may need more frequent visits depending on their oral health needs."
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: "In case of a dental emergency, contact us immediately at +91 8600892884. We offer emergency services to address urgent dental issues promptly."
    },
    {
      question: "Do you accept insurance?",
      answer: "Yes, we provide bills that can be claimed on any mediclaim insurance"
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us at +91 8600892884 or through WhatsApp at the same number. You can also visit our clinic in person."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Saturday from 9:30 am–2 pm and 5–9 pm. We are closed on Sundays."
    }
  ];

  const testimonials = [
    {
      name: "Nupur Nerkar",
      text: "I had my root canal treatment done at Dental Solutions Palghar. Had a very smooth experience. The doctors explained the procedure very well. I am happy with the experience. My kid also underwent his dental procedure here. Dr Radha is really good with kids.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sugriv Chaursia",
      text: "After struggling with dental anxiety for years, I finally found a clinic where I feel at ease. The staff is patient and understanding, and Dr. Patel takes time to explain everything thoroughly. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Aadii Jagtap",
      text: "I had a dental emergency and Dental Solutions accommodated me immediately. The care was exceptional, and they followed up the next day to check on me. That's the kind of personalized service that keeps me coming back.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Namrata Pailwan",
      text: "The orthodontic treatment I received at Dental Solutions transformed my smile completely. The team is professional, the facility is immaculate, and the results exceeded my expectations. Worth every penny!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Location", href: "#location" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blog", href: "/blog" }
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const day = now.getDay(); // 0 is Sunday, 1 is Monday, etc.
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;
      
      // Clinic is closed on Sundays (day 0)
      if (day === 0) {
        setIsOpen(false);
        return;
      }
      
      // Morning hours: 9:30 AM - 2:00 PM (570 - 840 minutes)
      const morningStart = 9 * 60 + 30; // 9:30 AM in minutes
      const morningEnd = 14 * 60; // 2:00 PM in minutes
      
      // Evening hours: 5:00 PM - 9:00 PM (1020 - 1260 minutes)
      const eveningStart = 17 * 60; // 5:00 PM in minutes
      const eveningEnd = 21 * 60; // 9:00 PM in minutes
      
      // Check if current time falls within operating hours
      setIsOpen(
        (currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd) ||
        (currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd)
      );
    }, 60000); // Update every minute
    
    // Initial check when component mounts
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;
    
    if (day === 0) {
      setIsOpen(false);
    } else {
      const morningStart = 9 * 60 + 30;
      const morningEnd = 14 * 60;
      const eveningStart = 17 * 60;
      const eveningEnd = 21 * 60;
      
      setIsOpen(
        (currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd) ||
        (currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd)
      );
    }
    
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (function(f:any, b, e, v, n, t, s) {
        if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode?.insertBefore(t,s)})(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', '1358034681882804');
      window.fbq('track', 'PageView');

      const noscript = document.createElement('noscript');
      const img = document.createElement('img');
      img.height = 1;
      img.width = 1;
      img.style.display = 'none';
      img.src = "https://www.facebook.com/tr?id=1358034681882804&ev=PageView&noscript=1";
      noscript.appendChild(img);
      document.body.appendChild(noscript);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-primary">Dental Solutions Palghar</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <a 
                    key={index}
                    href={item.href} 
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
                href="https://www.facebook.com/DentalSolutionsPalghar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
              >
                Book Appointment
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item, index) => (
              item.href.startsWith('#') ? (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/DentalSolutionsPalghar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 w-full"
              onClick={() => {
                window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
                setIsNavOpen(false);
              }}
            >
              Book Appointment on WhatsApp
            </Button>
          </div>
        </div>
      )}

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Welcome to Dental Solutions Palghar
          </span>
          <div className="h-[120px] md:h-[144px] mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentHeadlineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold"
              >
                {headlines[currentHeadlineIndex].title}{" "}
                <span className="text-primary">{headlines[currentHeadlineIndex].highlight}</span>
              </motion.h1>
            </AnimatePresence>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience world-class dental care with our team of experienced professionals. Your smile deserves the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
           <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => window.open(" https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              Book Appointment on WhatsApp
            </Button>
            <Button 
              variant="green" 
              className="px-8 py-6 text-lg"
              onClick={() => window.open("tel:+918600892884")}
            >
              Call Now <Phone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

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

      <section id="location" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find us easily with Google Maps directions to our dental clinic in Palghar.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.426978290518!2d72.76597319999999!3d19.694437699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cdd80189c71%3A0x249440e72a30c6bb!2sDental%20Solutions!5e0!3m2!1sen!2sin!4v1740194859355!5m2!1sen!2sin!4v1740194859355"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Patient Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Read what our patients have to say about their experience at Dental Solutions. 4.9/5 with over 300+ reviews. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 relative"
              >
                <Quote className="absolute top-6 left-6 text-primary/20 h-12 w-12" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">Verified Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our dental services and procedures.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="mb-4 bg-white rounded-xl overflow-hidden shadow"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => {
                    console.log("Toggle question", index);
                    toggleQuestion(index);
                  }}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <HelpCircle
                    className={`h-5 w-5 transition-transform duration-200 ${
                      activeQuestion === index ? 'rotate-180 text-primary' : 'text-gray-500'
                    }`}
                  />
                </button>
                {activeQuestion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              From Our Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dental Health Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles for tips and information on maintaining your oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <Link to="/blog/importance-of-regular-dental-checkups" className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Dental Checkup"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    Preventive Care
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>July 10, 2023</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">The Importance of Regular Dental Check-ups</h3>
                  <p className="text-gray-600 mb-4">Learn why regular dental visits are crucial for maintaining good oral health and preventing serious dental issues.</p>
                  <div className="flex items-center text-primary font-medium">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <Link to="/blog/tips-for-maintaining-healthy-gums" className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Healthy Gums"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    Oral Hygiene
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>August 5, 2023</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>4 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">Tips for Maintaining Healthy Gums</h3>
                  <p className="text-gray-600 mb-4">Discover effective strategies to keep your gums healthy and prevent periodontal disease with these expert tips.</p>
                  <div className="flex items-center text-primary font-medium">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <Link to="/blog/childrens-dental-health" className="block">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                    alt="Children's Dental Health"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    Pediatric Dentistry
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>October 8, 2023</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>6 min read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">Children's Dental Health: Starting Good Habits Early</h3>
                  <p className="text-gray-600 mb-4">Learn how to instill good dental habits in children from an early age to ensure lifelong oral health.</p>
                  <div className="flex items-center text-primary font-medium">
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="/blog">
              <Button variant="outline" className="mt-4">
                View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Dental Health?</h2>
            <p className="text-gray-600 mb-8">
              Schedule an appointment with our experienced dental professionals today and take the first step towards a healthier smile.
            </p>
            <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              Book Your Appointment Now
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400">
                Dental Solutions Palghar is a leading dental clinic committed to providing high-quality oral healthcare with a patient-first approach. Equipped with state-of-the-art technology and a team of experienced dentists, we offer comprehensive treatments, including cosmetic dentistry, orthodontics, dental implants, and preventive care.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.href.startsWith('#') ? (
                      <a 
                        href={item.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link 
                        to={item.href} 
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" 
                     style={{ 
                       backgroundColor: isOpen ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                       color: isOpen ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                     }}>
                  <div className="w-2 h-2 rounded-full mr-2" 
                       style={{ 
                         backgroundColor: isOpen ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'
                       }}>
                  </div>
                  <span>{isOpen ? 'Open Now' : 'Closed Now'}</span>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Monday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Tuesday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Wednesday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Thursday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Friday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                    <span className="text-gray-400 font-medium">Saturday</span>
                    <span className="text-gray-400">9:30 am–2 pm, 5–9 pm</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mt-3">
                  Last updated: {currentTime.toLocaleDateString()} at {currentTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                  <p className="text-gray-400">
                    Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes, next to National College, Shri Ram Nagar, Vishnu Nagar, Palghar, Maharashtra 401404
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                  <a href="tel:+918600892884" className="text-gray-400 hover:text-white transition-colors">
                    +91 8600892884
                  </a>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href="https://www.facebook.com/DentalSolutionsPalghar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/dentalsolutionspalghar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://x.com/dentalsoluti0ns"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Dental Solutions Palghar. All rights reserved. Designed by Nirzar Marketing Solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
