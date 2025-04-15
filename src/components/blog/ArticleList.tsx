
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
  return (
    <div className="space-y-8">
      {posts.slice(currentPage === 1 ? 1 : 0).map((post) => (
        <ArticleCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default ArticleList;
