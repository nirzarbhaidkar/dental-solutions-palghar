import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  category: string;
  image: string;
  tags?: string[];
}

const Card: React.FC<{ post: BlogPost; index: number }> = ({ post, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
    className="group h-full"
  >
    <Link
      to={`/blog/${post.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={`${post.title} — ${post.category} guide from Dental Solutions Palghar`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          width="640"
          height="400"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary shadow-sm backdrop-blur">
          {post.category}
        </span>
        <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/95 text-primary opacity-0 shadow-md transition-all group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-serif text-xl font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-4 pt-3 text-xs font-medium text-muted-foreground border-t border-border/50">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>
      </div>
    </Link>
  </motion.article>
);

interface Props {
  posts: BlogPost[];
}

const ArticleGrid: React.FC<Props> = ({ posts }) => {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-muted/20 py-16 text-center">
        <p className="text-base text-muted-foreground">
          No articles match your search. Try another keyword or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <Card key={post.id} post={post} index={i} />
      ))}
    </div>
  );
};

export default ArticleGrid;
