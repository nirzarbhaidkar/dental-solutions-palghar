
import { useState, useEffect } from "react";
import { Facebook, Home, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

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
      if (isNavOpen && !target.closest('.mobile-nav-container')) {
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-primary">Dental Solutions Palghar</Link>
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
              onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              Book Appointment
            </Button>
          </div>

          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-[100] pt-16 md:hidden overflow-y-auto mobile-nav-container">
          <div className="flex flex-col space-y-6 p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-primary">Menu</h2>
              <button 
                onClick={() => setIsNavOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            <Link 
              to="/"
              className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-3 flex items-center gap-2 border-b border-gray-100"
              onClick={() => setIsNavOpen(false)}
            >
              <Home size={20} /> Home
            </Link>
            
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100">
                {item.href.includes('#') ? (
                  <a 
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-3 block"
                    onClick={(e) => handleAnchorClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    to={item.href} 
                    className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-3 block"
                    onClick={() => setIsNavOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">Follow us</p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/DentalSolutionsPalghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4 pt-4 mt-auto">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 w-full py-6 text-lg"
                onClick={() => {
                  window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
                  setIsNavOpen(false);
                }}
              >
                Book Appointment on WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full py-6 text-lg"
                onClick={() => {
                  window.open("tel:+918600892884");
                  setIsNavOpen(false);
                }}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
