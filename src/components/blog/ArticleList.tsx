
import React from "react";
import { BlogPost } from "@/data/blogPosts";
import ArticleCard from "./ArticleCard";

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
