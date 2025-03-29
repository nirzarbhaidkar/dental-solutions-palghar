import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight, Facebook, Instagram, Phone, MapPin, MessageSquare } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20about%20" + encodeURIComponent(post?.title || "") + "%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
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

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600">Sorry, the post you are looking for could not be found.</p>
            <Link to="/blog">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-2xl font-semibold text-primary">
              Dental Solutions
            </Link>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" />
          <p className="text-gray-700 leading-relaxed mb-8">{post.content}</p>
          
          {/* Dental Health Quiz */}
          <div className="my-12">
            <DentalHealthQuiz />
          </div>
          
          {/* WhatsApp CTA Section */}
          <div className="bg-primary/10 rounded-xl p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-3">Need a Dentist Near Me in Palghar?</h3>
            <p className="mb-4">Our dental clinic near me provides comprehensive dental services including teeth cleaning, teeth whitening, dental implants, and pediatric dentistry. Book an appointment with the best dentist in Palghar today!</p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white flex items-center justify-center w-full md:w-auto"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Book Appointment on WhatsApp
            </Button>
          </div>

          {/* Related Posts Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4">Related Dental Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link key={relatedPost.id} to={`/blog/${relatedPost.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{relatedPost.title}</h4>
                        <div className="flex items-center text-primary font-medium">
                          Read more <ChevronRight className="ml-1 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Updated Footer to match Home and Blog pages */}
      <footer className="bg-gray-900 text-white py-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Dental Solutions</h3>
              <p className="text-gray-400 mb-4 max-w-md">
                We provide comprehensive dental care with a focus on patient comfort and the latest technology.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/dentalsolutionspalghar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/the_dental_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="text-gray-400">
                <p className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  123 Dental Street, Palghar, Maharashtra
                </p>
                <p className="flex items-center mb-2">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  +91 8600892884
                </p>
                <div className="flex items-center mt-4">
                  <div className={`h-2 w-2 rounded-full mr-2 ${isOpen ? "bg-green-500" : "bg-red-500"}`}></div>
                  <span className="text-sm">
                    {isOpen ? "Open Now" : "Closed Now"}
                  </span>
                </div>
                <p className="text-xs mt-1">
                  Hours: Mon-Sat: 9:30AM-2PM, 5PM-9PM
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Explore More</h3>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Dental Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
