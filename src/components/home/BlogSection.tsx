
import { Calendar, Clock, ChevronRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

// Define the BlogPost type to match the one in Blog.tsx
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

const BlogSection = () => {
  // Get first 3 blog posts for homepage
  const featuredPosts = blogPosts.slice(0, 3) as BlogPost[];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            From Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dental Health Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles for tips and information on maintaining your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <article key={post.slug} className="group animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-300 overflow-hidden border-none bg-white">
                <div className="relative overflow-hidden">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={`${post.title} - Dental health tips and advice from Dental Solutions Palghar`}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width="413"
                      height="192"
                      decoding="async"
                    />
                  </Link>
                  {post.category && (
                    <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                </CardHeader>
                
                <CardContent className="pb-4 flex-grow">
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary font-medium hover:underline"
                    aria-label="Read Article"
                  >
                    Read Article <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
