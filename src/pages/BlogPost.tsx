
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MessageSquare, 
  ChevronRight,
  Facebook,
  Instagram,
  MapPin as MapPinIcon,
  Phone as PhoneIcon
} from "lucide-react";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post && process.env.NODE_ENV !== 'development') {
      navigate('/404', { replace: true });
    }
    
    if (post) {
      document.title = `${post.title} | Best Dentist in Palghar - Dental Solutions`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${post.excerpt} Expert dental care in Palghar. Top-rated dentist near you offering comprehensive dental services.`);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = `${post.excerpt} Expert dental care in Palghar. Top-rated dentist near you offering comprehensive dental services.`;
        document.head.appendChild(meta);
      }

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Dental Solutions Palghar",
        "image": "https://dentalsolutionspalghar.in/og-image.jpg",
        "url": `https://dentalsolutionspalghar.in/blog/${slug}`,
        "telephone": "+918600892884",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Dental Street",
          "addressLocality": "Palghar",
          "addressRegion": "Maharashtra",
          "postalCode": "401404",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.6854,
          "longitude": 72.7451
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
          ],
          "opens": "09:00",
          "closes": "20:00"
        },
        "sameAs": [
          "https://www.facebook.com/DentalSolutionsPalghar",
          "https://www.instagram.com/the_dental_solutions/"
        ]
      });
      document.head.appendChild(schemaScript);
    }
  }, [post, slug, navigate]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600">Sorry, the post you are looking for could not be found.</p>
            <a href="/blog">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </a>
          </div>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20about%20" + encodeURIComponent(post.title) + "%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="text-2xl font-semibold text-primary">
              Dental Solutions
            </a>
            <a href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <article itemScope itemType="https://schema.org/BlogPosting">
          <meta itemProp="datePublished" content={new Date(post.date).toISOString()} />
          <meta itemProp="author" content="Dental Solutions Palghar" />
          <meta itemProp="publisher" content="Dental Solutions Palghar" />
          
          <div className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold mb-4" itemProp="headline">{post.title}</h1>
            <img src={post.image} alt={post.title} className="w-full rounded-xl mb-8" itemProp="image" />
            <div className="text-gray-700 leading-relaxed mb-8" itemProp="articleBody">
              {post.content.split('. ').map((sentence, index) => (
                <p key={index} className="mb-4">{sentence}.</p>
              ))}
            </div>
            
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

            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-4">Related Dental Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts
                  .filter(relatedPost => relatedPost.id !== post.id)
                  .slice(0, 2)
                  .map(relatedPost => (
                    <a key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
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
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </article>
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
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
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
