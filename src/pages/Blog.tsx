
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock, MessageSquare, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Location", href: "/#location" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Blog", href: "/blog" }
  ];

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

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
              <Link to="/" className="text-2xl font-semibold text-primary">Dental Solutions</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="bg-primary text-white hover:bg-primary/90"
                onClick={handleWhatsAppClick}
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
              <Link 
                key={index}
                to={item.href} 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button 
              className="bg-primary text-white hover:bg-primary/90 w-full"
              onClick={() => {
                handleWhatsAppClick();
                setIsNavOpen(false);
              }}
            >
              Book Appointment on WhatsApp
            </Button>
          </div>
        </div>
      )}

      <div className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Dental Clinic Near Me in Palghar
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Health Insights from the Best Dentist Near Me</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles on dental services, treatments, and tips for maintaining a healthy smile from the leading dentist in Palghar. Learn about teeth whitening, dental implants, orthodontist care, and services for kids dentist near me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <Link to={`/blog/${post.slug}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                    <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-primary font-medium">
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16">
            <div className="bg-muted p-8 rounded-xl">
              <div className="md:flex items-center justify-between">
                <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                  <h2 className="text-2xl font-bold mb-4">Looking for the Best Dental Services in Palghar?</h2>
                  <p className="text-gray-600 mb-6">
                    Our dental clinic near me offers comprehensive dental care including teeth cleaning, teeth whitening near me, dental implants, and services from a pediatric dentist near me. Whether you need a cheap dentist near me for basic care or specialized orthodontist services, we have you covered.
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="flex items-center"><span className="text-primary mr-2">✓</span> Best dentist near me in Palghar</p>
                    <p className="flex items-center"><span className="text-primary mr-2">✓</span> Professional teeth whitening services</p>
                    <p className="flex items-center"><span className="text-primary mr-2">✓</span> Affordable dental implants near me</p>
                    <p className="flex items-center"><span className="text-primary mr-2">✓</span> Kids dentist near me with gentle care</p>
                  </div>
                </div>
                <div className="md:w-1/3 text-center">
                  <Button 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full md:w-auto flex items-center justify-center"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Book Your Appointment Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Blog;
