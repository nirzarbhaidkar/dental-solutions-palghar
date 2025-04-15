
import React, { useEffect, useState } from "react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlogPagination from "@/components/blog/Pagination";
import FeaturedPost from "@/components/blog/FeaturedPost";
import ArticleList from "@/components/blog/ArticleList";

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
            <FeaturedPost post={currentPosts[0]} />
          )}

          {/* Article List */}
          <ArticleList posts={currentPosts} currentPage={currentPage} />

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
