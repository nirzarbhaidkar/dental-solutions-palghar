
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";

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

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="mb-16 animate-fade-in">
      <Link to={`/blog/${post.slug}`} className="group block relative">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
            <div className="relative z-10">
              <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-base md:text-lg text-white/90 mb-4 line-clamp-2 max-w-3xl">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center text-primary font-medium">
                  Read Article <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedPost;
