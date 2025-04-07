
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 backdrop-blur-sm shadow-soft' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-primary">
              Dental Solutions <span className="text-primary-700">Palghar</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-gray-700 hover:text-primary transition-colors flex items-center group"
              aria-label="Home"
            >
              <Home size={20} className="group-hover:scale-110 transition-transform" />
            </Link>
            {navItems.map((item, index) => (
              item.href.includes('#') ? (
                <a 
                  key={index}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="text-gray-700 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-bottom-right hover:after:origin-bottom-left"
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
              <Facebook size={20} className="hover:scale-110 transition-transform" />
            </a>
            <Button 
              className="bg-primary text-white hover:bg-primary-600 transition-colors shadow-sm hover:shadow-md"
              onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              Book Appointment
            </Button>
          </div>

          {/* Removed mobile hamburger menu button */}
        </div>
      </div>

      {/* Removed mobile navigation drawer */}
    </nav>
  );
};

export default Header;
