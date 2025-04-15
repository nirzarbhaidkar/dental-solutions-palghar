
import React from "react";
import ArticleCard from "./ArticleCard";

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

interface ArticleListProps {
  posts: BlogPost[];
  currentPage: number;
}

const ArticleList = ({ posts, currentPage }: ArticleListProps) => {
  // If no posts are available, show a message
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No articles found. Please check back soon!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {posts.map((post, index) => (
        <div 
          key={post.id} 
          className="animate-fade-up" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <ArticleCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
