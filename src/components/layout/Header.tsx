
import { useState, useEffect } from "react";
import { Facebook, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSelector from "@/components/LanguageSelector";

type NavItem = {
  label: string;
  href: string;
  translationKey: string;
};

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { label: "Services", href: "#services", translationKey: "header.services" },
    { label: "NRI Corner", href: "#nri-corner", translationKey: "header.nriCorner" },
    { label: "Location", href: "#location", translationKey: "header.location" },
    { label: "Testimonials", href: "#testimonials", translationKey: "header.testimonials" },
    { label: "FAQs", href: "#faqs", translationKey: "header.faqs" },
    { label: "Blog", href: "/blog", translationKey: "header.blog" }
  ];

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
                  {t(item.translationKey)}
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  {t(item.translationKey)}
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
              <LanguageSelector />
            </div>
            <Button 
              className="bg-primary text-white hover:bg-primary/90"
              onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              {t("header.bookAppointment")}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button 
              className="text-gray-700"
              onClick={() => setIsNavOpen(!isNavOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-[100] pt-16 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-6 p-6">
            {navItems.map((item, index) => (
              item.href.startsWith('#') ? (
                <a 
                  key={index}
                  href={item.href} 
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  {t(item.translationKey)}
                </a>
              ) : (
                <Link 
                  key={index}
                  to={item.href} 
                  className="text-lg font-medium text-gray-700 hover:text-primary transition-colors py-2"
                  onClick={() => setIsNavOpen(false)}
                >
                  {t(item.translationKey)}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-4 py-2">
              <a
                href="https://www.facebook.com/DentalSolutionsPalghar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
            </div>
            <div className="flex flex-col space-y-4 pt-4">
              <Button 
                className="bg-primary text-white hover:bg-primary/90 w-full py-6 text-lg"
                onClick={() => {
                  window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
                  setIsNavOpen(false);
                }}
              >
                {t("header.bookAppointment")}
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 w-full py-6 text-lg"
                onClick={() => {
                  window.open("tel:+918600892884");
                  setIsNavOpen(false);
                }}
              >
                {t("header.callNow")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
