import React, { useEffect, useState } from "react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Clock, ChevronRight, Tag, Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import TagCloud from "@/components/blog/TagCloud";
import BlogPagination from "@/components/blog/Pagination";
import { calculateReadingTime } from "@/utils/readingTime";
import { generateRssFeed } from "@/utils/generateRssFeed";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  image: string;
  tags?: string[];
}

const POSTS_PER_PAGE = 9;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const blogPostStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((post, index) => {
      const typedPost = post as BlogPost;
      return {
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "headline": typedPost.title,
          "description": typedPost.excerpt,
          "image": typedPost.image.startsWith('http') ? typedPost.image : `https://${window.location.hostname}${typedPost.image}`,
          "url": `https://${window.location.hostname}/blog/${typedPost.slug}`,
          "author": {
            "@type": "Person",
            "name": "Dental Solutions Palghar Team"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Dental Solutions Palghar",
            "logo": {
              "@type": "ImageObject",
              "url": `https://${window.location.hostname}/og-image.jpeg`
            }
          },
          "datePublished": "2024-07-01T00:00:00+05:30"
        }
      };
    })
  };

  const getImageUrl = (imageUrl: string) => {
    try {
      return new URL(imageUrl, window.location.origin).toString();
    } catch {
      return imageUrl;
    }
  };

  const handleRssFeed = () => {
    const rssContent = generateRssFeed();
    const blob = new Blob([rssContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rss.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <ScrollArea className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white">
      <HeadContent 
        title="Dental Health Blog | Tips & Advice | Dental Solutions Palghar"
        description="Read our blog for the latest dental health tips, treatment information, and oral care advice from the top dentists in Palghar."
        image="/og-image.jpeg"
        article={true}
        keywords="dental health tips, oral hygiene advice, dental care blog, palghar dentist blog"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
        <link rel="alternate" hrefLang="en-in" href="https://dentalsolutionspalghar.com/blog" />
        <link rel="alternate" hrefLang="x-default" href="https://dentalsolutionspalghar.com/blog" />
      </Helmet>
      
      <Header />
      <BreadcrumbNav currentPage="Dental Health Blog" />
      
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Dental Health Insights
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mb-4">
              Welcome to the Dental Solutions Palghar blog, where Dr. Anirudh Bhaidkar shares valuable insights, tips, 
              and information about dental health, treatments, and preventive care.
            </p>
          </div>

          <TagCloud />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <article 
                key={`${post.slug}-${index}`} 
                className="group animate-fade-up" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden border-none bg-white relative">
                  <div className="relative overflow-hidden aspect-video">
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={getImageUrl(post.image)}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                        }}
                      />
                    </Link>
                    {post.category && (
                      <span className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm shadow-md">
                        {post.category}
                      </span>
                    )}
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{calculateReadingTime(post.content)}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h2>
                    </Link>
                  </CardHeader>
                  
                  <CardContent className="pb-4 flex-grow">
                    <p className="text-gray-600 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/doctor-avatar.jpg" alt="Dr. Anirudh Bhaidkar" />
                        <AvatarFallback>AB</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">Dr. Anirudh Bhaidkar</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 flex justify-between items-center border-t">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read Article <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Tag className="h-4 w-4 mr-1" />
                      <span>{post.tags && post.tags.length > 0 ? post.tags[0] : "Dental Care"}</span>
                    </div>
                  </CardFooter>
                </Card>
              </article>
            ))}
          </div>

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
      
      <Footer />
    </ScrollArea>
  );
};

export default Blog;
