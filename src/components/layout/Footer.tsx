import React, { useState, useEffect } from "react";
import { MapPin, Phone, Facebook, Instagram, Twitter, Share } from "lucide-react";
import { Link } from "react-router-dom";

type NavItem = {
  label: string;
  href: string;
};

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "Services", href: "#services" },
    { label: "Location", href: "#location" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Dental Health Quiz", href: "#quiz" }
  ];

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

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          <div className="md:max-w-xs">
            <h3 className="text-xl font-bold mb-4">Dental Solutions Palghar</h3>
            <p className="text-gray-400">
              Dental Solutions Palghar is the best dental clinic in Palghar, offering comprehensive oral healthcare including dental implants, orthodontics (braces), root canal treatment, teeth whitening, pediatric dentistry, and emergency dental care near Palghar station.
            </p>
          </div>
          
          <div className="flex flex-col items-start justify-start">
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

          <div className="flex flex-col items-start justify-start">
            <h4 className="text-xl font-bold mb-4">Opening Hours</h4>
            <div className="space-y-5 w-full">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold tracking-wide ${isOpen ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
                </span>
                {isOpen ? 'Open Now' : 'Closed Now'}
              </div>

              <div className="space-y-0 text-sm">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-white/80 font-medium">Monday – Saturday</span>
                  <span className="text-white/60 tabular-nums">9:30 am – 2 pm<br className="sm:hidden" /><span className="hidden sm:inline">, </span>5 – 9 pm</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-white/80 font-medium">Sunday</span>
                  <span className="text-red-400/80 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-start">
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
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Dental Solutions Palghar. All rights reserved. Designed by{' '}
            <a 
              href="https://nirzar.in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline hover:text-white transition-colors"
            >
              Nirzar Marketing Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
