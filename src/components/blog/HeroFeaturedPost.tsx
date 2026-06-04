import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  image: string;
}

const HeroFeaturedPost: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-20"
      aria-labelledby="featured-heading"
    >
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Editor's pick
          </span>
          <h2
            id="featured-heading"
            className="mt-1 font-serif text-2xl font-bold text-foreground md:text-3xl"
          >
            This week's featured read
          </h2>
        </div>
      </div>

      <Link
        to={`/blog/${post.slug}`}
        className="group relative grid overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl shadow-primary/5 transition-all hover:shadow-2xl hover:shadow-primary/15 md:grid-cols-12"
      >
        <div className="relative md:col-span-7 aspect-[16/10] md:aspect-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="eager"
            fetchPriority="high"
            width="1200"
            height="800"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-primary shadow-md backdrop-blur">
            {post.category}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-5 p-8 md:col-span-5 md:p-10">
          <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary md:text-4xl">
            {post.title}
          </h3>
          <p className="text-base leading-relaxed text-muted-foreground line-clamp-3 md:text-lg">
            {post.excerpt}
          </p>
          <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read the full article
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.section>
  );
};

export default HeroFeaturedPost;
