
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="mb-16">
      <Link to={`/blog/${post.slug}`} className="group block">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl mb-6">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-lg text-white/90 mb-4 line-clamp-2">
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
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FeaturedPost;
