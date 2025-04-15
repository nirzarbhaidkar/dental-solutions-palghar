
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlogPagination from "@/components/blog/Pagination";
import ArticleCard from "@/components/blog/ArticleCard";

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

  return (
    <ScrollArea className="min-h-screen bg-white">
      <HeadContent 
        title="Dental Health Blog | Tips & Advice | Dental Solutions Palghar"
        description="Read our blog for the latest dental health tips, treatment information, and oral care advice from the top dentists in Palghar."
      />
      
      <Header />
      
      <main className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
              Latest Articles
            </h1>
            <p className="text-xl text-gray-600">
              Insights and updates from the dental world
            </p>
          </div>

          {/* Featured Post */}
          {currentPage === 1 && currentPosts[0] && (
            <div className="mb-16">
              <Link to={`/blog/${currentPosts[0].slug}`} className="group block">
                <div className="relative aspect-[21/9] overflow-hidden rounded-xl mb-6">
                  <img
                    src={currentPosts[0].image}
                    alt={currentPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {currentPosts[0].category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {currentPosts[0].title}
                    </h2>
                    <p className="text-lg text-white/90 mb-4 line-clamp-2">
                      {currentPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{currentPosts[0].date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{currentPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Article Grid */}
          <div className="space-y-8">
            {currentPosts.slice(currentPage === 1 ? 1 : 0).map((post) => (
              <ArticleCard key={post.id} {...post} />
            ))}
          </div>

          <BlogPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      
      <Footer />
    </ScrollArea>
  );
};

export default Blog;
