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
import { Bookmark, Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts as BlogPost[]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const posts = selectedCategory === "all" 
      ? blogPosts as BlogPost[]
      : (blogPosts as BlogPost[]).filter(post => post.category === selectedCategory);
    
    setFilteredPosts(posts);
  }, [selectedCategory]);

  const { items: visiblePosts, hasMore, loading, loaderRef } = useInfiniteScroll<BlogPost>({
    initialItems: filteredPosts,
    itemsPerPage: 6,
  });

  const featuredPost = blogPosts[0] as BlogPost;
  const featuredImageUrl = new URL(featuredPost.image, window.location.origin).toString();

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
              "url": `https://${window.location.hostname}/og-image.jpg`
            }
          },
          "datePublished": "2024-07-01T00:00:00+05:30"
        }
      };
    })
  };

  const categories = ["all", ...new Set(blogPosts.map(post => (post as BlogPost).category || "Uncategorized"))];

  const getImageUrl = (imageUrl: string) => {
    try {
      return new URL(imageUrl, window.location.origin).toString();
    } catch {
      return imageUrl;
    }
  };

  return (
    <ScrollArea className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white">
      <HeadContent 
        title="Dental Health Blog | Tips & Advice | Dental Solutions Palghar"
        description="Read our blog for the latest dental health tips, treatment information, and oral care advice from the top dentists in Palghar."
        image={featuredImageUrl}
        article={true}
        keywords="dental health tips, oral hygiene advice, dental care blog, palghar dentist blog, teeth cleaning tips, dental treatment information, gum disease prevention, tooth decay prevention, children dental care, dental implant information"
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
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Welcome to the Dental Solutions Palghar blog, where Dr. Anirudh Bhaidkar shares valuable insights, tips, 
              and information about dental health, treatments, and preventive care.
            </p>
          </div>
          
          <div className="mb-16">
            <Link to={`/blog/${featuredPost.slug}`}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-50 to-white border-none">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-7 lg:col-span-8 relative">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover aspect-video rounded-l-lg"
                    />
                    {featuredPost.category && (
                      <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-5 lg:col-span-4 p-6 flex flex-col justify-center">
                    <div className="mb-4 flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{featuredPost.date}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center text-primary font-medium">
                      Read Featured Article <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8 justify-center bg-white/50 p-4 rounded-lg sticky top-4 z-10 backdrop-blur-sm">
            {categories.map((category) => (
              <Button 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"} 
                className={`rounded-full capitalize ${
                  selectedCategory === category 
                    ? 'bg-primary text-white shadow-md' 
                    : 'hover:bg-primary/10'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "All Posts" : category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visiblePosts.map((post, index) => (
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
                      <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
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
                        <span>{post.readTime}</span>
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
          
          {hasMore && (
            <div 
              ref={loaderRef} 
              className="flex justify-center my-8"
            >
              {loading ? (
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
                  <p className="text-gray-500">Loading more articles...</p>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => loaderRef.current?.scrollIntoView()}
                >
                  Load More Articles
                </Button>
              )}
            </div>
          )}
          
          {!hasMore && visiblePosts.length > 0 && (
            <div className="text-center my-8 py-4 border-t border-gray-100">
              <p className="text-gray-600">You've reached the end of our articles</p>
              <Button variant="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Back to top
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </ScrollArea>
  );
};

export default Blog;
