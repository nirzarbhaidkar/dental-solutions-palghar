import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight, Facebook, Instagram, Phone as PhoneIcon, MapPin as MapPinIcon, MessageSquare } from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

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

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20about%20" + encodeURIComponent(post.title) + "%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  const isTeethWhiteningPost = post.slug === "teeth-whitening-options";
  const teethWhiteningImages = isTeethWhiteningPost ? [
    {
      url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Professional teeth whitening treatment at our dental clinic"
    },
    {
      url: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      caption: "Before and after results of our professional teeth whitening services"
    }
  ] : [];

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
          <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8 shadow-md" />
          
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
            <p className="mb-4">{post.content.slice(0, post.content.length / 2)}</p>
            
            {isTeethWhiteningPost && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                {teethWhiteningImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-64 object-cover"
                    />
                    <p className="p-3 text-sm text-center bg-gray-50 italic">{image.caption}</p>
                  </div>
                ))}
              </div>
            )}
            
            <p>{post.content.slice(post.content.length / 2)}</p>
          </div>
          
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl shadow-md overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Need a Dentist Near Me in Palghar?</h3>
              <p className="mb-6 text-gray-700">Our dental clinic near me provides comprehensive dental services including teeth cleaning, teeth whitening, dental implants, and pediatric dentistry. Book an appointment with the best dentist in Palghar today!</p>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-6 font-medium rounded-lg w-full md:w-auto flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Book Appointment on WhatsApp
                </Button>
                <span className="text-gray-500 text-sm md:text-base">or call us at <a href="tel:+918600892884" className="text-primary font-medium hover:underline">+91 8600 892 884</a></span>
              </div>
            </div>
          </div>

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
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400 mb-4">
                We provide comprehensive dental care with a focus on patient comfort and the latest technology.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/DentalSolutionsPalghar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/the_dental_solutions/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <MapPinIcon className="mr-2 h-5 w-5" />
                  123 Dental Street, Palghar, Maharashtra
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  +91 8600892884
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Explore More</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Dental Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
