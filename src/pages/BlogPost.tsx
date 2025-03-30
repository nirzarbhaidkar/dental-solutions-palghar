
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight, Facebook, Instagram, Phone, MapPin, MessageSquare } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20about%20" + encodeURIComponent(post?.title || "") + "%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    
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
        <HeadContent 
          title="Post Not Found | Dental Solutions Palghar"
          description="The blog post you're looking for could not be found. Explore our other dental health articles and resources."
        />
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

  // Generate a description from the first 160 characters of the content
  const metaDescription = post.content.length > 160 
    ? `${post.content.substring(0, 157)}...` 
    : post.content;

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title={`${post.title} | Dental Solutions Palghar`}
        description={metaDescription}
        image={post.image}
        article={true}
        keywords={`dental health, oral care, ${post.category.toLowerCase()}, dentist palghar, dental clinic, ${post.title.toLowerCase()}`}
      />
      <Header />

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
      
      <Footer />
    </div>
  );
};

export default BlogPost;
