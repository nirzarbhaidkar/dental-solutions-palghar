import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, Clock } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  image: string;
}

const TrendingStrip: React.FC<{ posts: BlogPost[] }> = ({ posts }) => {
  if (!posts.length) return null;
  return (
    <section aria-labelledby="trending-heading" className="mb-16">
      <div className="mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h2
          id="trending-heading"
          className="font-serif text-xl font-bold text-foreground md:text-2xl"
        >
          Trending this month
        </h2>
      </div>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <li key={post.id}>
            <Link
              to={`/blog/${post.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-3 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg"
            >
              <span className="font-serif text-3xl font-bold leading-none text-primary/30 transition-colors group-hover:text-primary">
                0{i + 1}
              </span>
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                <img
                  src={post.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width="64"
                  height="64"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  {post.category}
                </p>
                <p className="line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default TrendingStrip;
