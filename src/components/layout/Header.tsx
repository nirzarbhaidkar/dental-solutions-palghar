
import { useState, useEffect } from "react";
import { Facebook, Home, X, Menu, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
    <>
      {/* Mobile-first header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Mobile header (base styles) */}
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-primary flex-shrink-0"
            >
              <span className="hidden xs:inline">Dental Solutions Palghar</span>
              <span className="inline xs:hidden">DS Palghar</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link 
                to="/"
                className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1"
                aria-label="Home"
              >
                <Home className="h-4 w-4" />
              </Link>
              {navItems.map((item, index) => (
                item.href.includes('#') ? (
                  <a 
                    key={index}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    to={item.href} 
                    className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <a
                href="https://www.facebook.com/DentalSolutionsPalghar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={handleBookAppointment}
                size="sm"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Now
              </Button>
            </nav>

            {/* Mobile actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button 
                size="icon" 
                variant="ghost"
                className="h-9 w-9 text-primary"
                onClick={handleCall}
                aria-label="Call clinic"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button 
                size="icon"
                variant="ghost"
                className="h-9 w-9"
                onClick={() => setIsNavOpen(!isNavOpen)}
                aria-label={isNavOpen ? "Close menu" : "Open menu"}
              >
                {isNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      {isNavOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}

      {/* Mobile navigation drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isNavOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-lg font-bold text-primary">Menu</span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsNavOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              <Link
                to="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                onClick={() => setIsNavOpen(false)}
              >
                <Home className="h-5 w-5 text-primary" />
                <span className="font-medium">Home</span>
              </Link>

              {navItems.map((item, index) => (
                item.href.includes('#') ? (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                  >
                    <span className="font-medium">{item.label}</span>
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.href}
                    className="flex items-center justify-between px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                    onClick={() => setIsNavOpen(false)}
                  >
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              ))}

              <div className="pt-4 mt-4 border-t">
                <a
                  href="https://www.facebook.com/DentalSolutionsPalghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-accent transition-colors"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2]" />
                  <span className="font-medium">Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="p-4 border-t space-y-2 bg-muted/30">
            <Button
              className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold h-12"
              onClick={() => {
                handleBookAppointment();
                setIsNavOpen(false);
              }}
            >
              <WhatsAppIcon className="h-5 w-5 mr-2" />
              Book on WhatsApp
            </Button>
            <Button
              variant="outline"
              className="w-full h-12 font-semibold"
              onClick={() => {
                handleCall();
                setIsNavOpen(false);
              }}
            >
              <Phone className="h-5 w-5 mr-2" />
              Call +91 86008 92884
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile bottom action bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t shadow-lg safe-area-bottom">
        <div className="grid grid-cols-2 gap-2 p-2">
          <Button
            className="bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold h-12 text-sm"
            onClick={handleBookAppointment}
          >
            <WhatsAppIcon className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">Book Now</span>
          </Button>
          <Button
            variant="outline"
            className="h-12 font-semibold border-primary text-primary text-sm"
            onClick={handleCall}
          >
            <Phone className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">Call Now</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
