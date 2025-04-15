
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, ChevronRight, MessageSquare, Share, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { blogPosts } from "../data/blogPosts";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20about%20" + encodeURIComponent(post?.title || "") + "%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  const sharePost = (platform: string) => {
    if (!post) return;
    
    const url = window.location.href;
    const title = `${post.title} | Dental Solutions Palghar`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast.success("Link copied to clipboard!");
        }).catch(() => {
          toast.error("Failed to copy link");
        });
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: title,
            text: post.excerpt,
            url: url,
          }).catch(err => console.error('Error sharing:', err));
        }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      const day = now.getDay();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;
      
      if (day === 0) {
        setIsOpen(false);
        return;
      }
      
      const morningStart = 9 * 60 + 30;
      const morningEnd = 14 * 60;
      const eveningStart = 17 * 60;
      const eveningEnd = 21 * 60;
      
      setIsOpen(
        (currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd) ||
        (currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd)
      );
    }, 60000);
    
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

  const metaDescription = post.content.length > 160 
    ? `${post.content.substring(0, 157)}...` 
    : post.content;

  const currentDomain = window.location.hostname;
  
  const absoluteImageUrl = post.image.startsWith('http') 
    ? post.image 
    : `https://${currentDomain}${post.image}`;

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title={`${post.title} | Dental Solutions Palghar`}
        description={metaDescription}
        image={absoluteImageUrl}
        article={true}
        keywords={`dental health, oral care, ${post.category.toLowerCase()}, dentist palghar, dental clinic, ${post.title.toLowerCase()}`}
      />
      <Header />

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/doctor-avatar.jpg" alt="Dr. Anirudh Bhaidkar" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-gray-900">Dr. Anirudh Bhaidkar</h3>
                <p className="text-sm text-gray-500">Dental Solutions Palghar</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post?.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post?.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-6 text-gray-900 font-serif leading-tight">
            {post?.title}
          </h1>
          
          <img 
            src={post?.image} 
            alt={post?.title} 
            className="w-full rounded-xl mb-8 aspect-video object-cover"
          />
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm font-medium text-gray-600">Share this article:</span>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3" 
              onClick={() => sharePost('facebook')}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4 text-blue-600" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3" 
              onClick={() => sharePost('twitter')}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4 text-blue-400" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3" 
              onClick={() => sharePost('linkedin')}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-4 w-4 text-blue-700" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3" 
              onClick={() => sharePost('whatsapp')}
              aria-label="Share on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-green-500">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3" 
              onClick={() => sharePost('copy')}
              aria-label="Copy link to clipboard"
            >
              <Copy className="h-4 w-4 text-gray-600" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full px-3 sm:hidden" 
              onClick={() => sharePost('')}
              aria-label="Share via device sharing"
            >
              <Share className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed">{post?.content}</p>
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
