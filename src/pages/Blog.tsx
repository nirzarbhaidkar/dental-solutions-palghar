
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Location", href: "/#location" },
    { label: "FAQs", href: "/#faqs" },
    { label: "Blog", href: "/blog" }
  ];

  const blogPosts = [
    {
      id: "1",
      title: "The Importance of Regular Dental Check-ups",
      excerpt: "Learn why regular dental visits are crucial for maintaining good oral health and preventing serious dental issues.",
      date: "July 10, 2023",
      readTime: "5 min read",
      slug: "importance-of-regular-dental-checkups",
      category: "Preventive Care",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "2",
      title: "Tips for Maintaining Healthy Gums",
      excerpt: "Discover effective strategies to keep your gums healthy and prevent periodontal disease with these expert tips.",
      date: "August 5, 2023",
      readTime: "4 min read",
      slug: "tips-for-maintaining-healthy-gums",
      category: "Oral Hygiene",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "3",
      title: "Understanding Dental Implants: A Comprehensive Guide",
      excerpt: "Everything you need to know about dental implants, from the procedure to aftercare and benefits.",
      date: "September 12, 2023",
      readTime: "7 min read",
      slug: "understanding-dental-implants",
      category: "Restorative Dentistry",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: "4",
      title: "Children's Dental Health: Starting Good Habits Early",
      excerpt: "Learn how to instill good dental habits in children from an early age to ensure lifelong oral health.",
      date: "October 8, 2023",
      readTime: "6 min read",
      slug: "childrens-dental-health",
      category: "Pediatric Dentistry",
      image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "5",
      title: "Teeth Whitening: Professional vs. At-Home Options",
      excerpt: "Compare professional teeth whitening treatments with at-home options to find what's best for your smile.",
      date: "November 15, 2023",
      readTime: "5 min read",
      slug: "teeth-whitening-options",
      category: "Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1581585504807-45d83ec342ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    },
    {
      id: "6",
      title: "What to Expect During a Root Canal Treatment",
      excerpt: "Demystifying the root canal procedure: what happens during treatment and why it's not as scary as you think.",
      date: "December 3, 2023",
      readTime: "6 min read",
      slug: "what-to-expect-during-root-canal",
      category: "Endodontics",
      image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    }
  ];

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
                window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
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
              Our Dental Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dental Health Insights</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of articles on dental care, treatments, and tips for maintaining a healthy smile.
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

          <div className="mt-16 text-center">
            <div className="max-w-2xl mx-auto bg-muted p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Ready to Improve Your Dental Health?</h2>
              <p className="text-gray-600 mb-6">
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
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400">
                Dental Solutions Palghar is a leading dental clinic committed to providing high-quality oral healthcare with a patient-first approach.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.href} className="text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400">Phone: +91 8600892884</p>
              <p className="text-gray-400">Address: Dental Solutions, Palghar, Maharashtra</p>
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

export default Blog;
