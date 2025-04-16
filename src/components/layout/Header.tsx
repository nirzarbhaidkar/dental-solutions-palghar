
import { useState, useEffect } from "react";
import { Facebook, Home, X, Menu, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";

type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Services", href: "/#services" },
    { label: "NRI Corner", href: "/#nri-corner" },
    { label: "Location", href: "/#location" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Blog", href: "/blog" }
  ];

  // Handle anchor links with smooth scrolling
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isNavOpen) {
      setIsNavOpen(false);
    }
    
    // If we're not on the homepage and trying to access an anchor, go to homepage first
    if (location.pathname !== '/' && href.startsWith('/#')) {
      window.location.href = href;
      return;
    }
    
    // Extract the anchor without the #
    const anchor = href.replace('/#', '');
    const element = document.getElementById(anchor);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without full page reload
      window.history.pushState(null, '', href);
    }
  };

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // If mobile menu is open and click is outside the mobile nav
      if (isNavOpen && !target.closest('.mobile-nav-container') && !target.closest('button[aria-label="Open menu"]')) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavOpen]);

  const handleBookAppointment = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!",
      "_blank"
    );
    toast.success("Opening WhatsApp to book your appointment");
  };

  const handleCall = () => {
    window.location.href = "tel:+918600892884";
    toast.success("Initiating call to our clinic");
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-semibold text-primary">Dental Solutions Palghar</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
              aria-label="Home"
            >
              <Home size={20} />
            </Link>
            {navItems.map((item, index) => (
              item.href.includes('#') ? (
                <a 
                  key={index}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
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
              onClick={handleBookAppointment}
            >
              Book Appointment
            </Button>
          </div>

          {/* Mobile buttons */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 border-primary text-primary"
              onClick={handleCall}
              aria-label="Call us"
            >
              <Phone size={16} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8 border-[#25D366] text-[#25D366]"
              onClick={handleBookAppointment}
              aria-label="Book on WhatsApp"
            >
              <MessageSquare size={16} />
            </Button>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label={isNavOpen ? "Close menu" : "Open menu"}
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`mobile-nav-container fixed right-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-lg font-semibold text-primary">Menu</span>
            <button
              onClick={() => setIsNavOpen(false)}
              className="text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="py-4 px-4 space-y-4">
            <Link
              to="/"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center"
              onClick={() => setIsNavOpen(false)}
            >
              <Home size={18} className="mr-2" />
              Home
            </Link>
            {navItems.map((item, index) => (
              item.href.includes('#') ? (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={index}
                  to={item.href}
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
            <div className="pt-4 border-t">
              <Button
                className="w-full mb-3 bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 text-white"
                onClick={() => {
                  handleBookAppointment();
                  setIsNavOpen(false);
                }}
              >
                <MessageSquare size={18} className="mr-2" />
                Book on WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  handleCall();
                  setIsNavOpen(false);
                }}
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
