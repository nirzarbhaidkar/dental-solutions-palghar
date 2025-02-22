
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
    {
      title: "Dental Implants",
      description: "Permanent solutions for missing teeth with natural-looking results",
      image: "https://images.unsplash.com/photo-1579083390476-901d43d22fef?auto=format&fit=crop&q=80",
    },
    {
      title: "Root Canal Treatment",
      description: "Advanced endodontic care to save damaged teeth",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80",
    },
    {
      title: "Teeth Whitening",
      description: "Professional teeth whitening for a brighter smile",
      image: "https://images.unsplash.com/photo-1499789853431-fcbf274f57b9?auto=format&fit=crop&q=80",
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized dental care for children in a friendly environment",
      image: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?auto=format&fit=crop&q=80",
    },
    {
      title: "Periodontal Treatment",
      description: "Comprehensive gum care and disease prevention",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80",
    },
    {
      title: "Emergency Dental Care",
      description: "24/7 emergency dental services when you need them most",
      image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-primary">Dental Solutions</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary text-white hover:bg-primary/90">Book Appointment</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary/90 w-full">Book Appointment</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Welcome to Dental Solutions Palghar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Expert Dental Care for Your <span className="text-primary">Perfect Smile</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience world-class dental care with our team of experienced professionals. Your smile deserves the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
              onClick={() => window.open("https://wa.me/+911234567890", "_blank")}
            >
              Book Appointment on WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg"
              onClick={() => window.open("tel:+911234567890")}
            >
              Call Now <Phone className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="link" className="mt-4 text-primary p-0">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <p>123 Palghar Main Road, Palghar, Maharashtra 401404</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <p>+91 123 456 7890</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 mr-4" />
                    <div>
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400">
                Providing quality dental care and creating beautiful smiles in Palghar.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dental Solutions Palghar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
