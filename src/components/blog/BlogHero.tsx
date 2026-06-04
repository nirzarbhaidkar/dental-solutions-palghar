import React from "react";
import { motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";

interface BlogHeroProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  query: string;
  onQueryChange: (q: string) => void;
  totalArticles: number;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  query,
  onQueryChange,
  totalArticles,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/95 via-primary to-[hsl(210_80%_38%)] text-primary-foreground">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-[hsl(160_84%_39%)]/30 blur-3xl" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            The Dental Solutions Journal
          </span>
          <h1 className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Smile science, simplified.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">
            Evidence-based guides, treatment deep-dives, and patient stories from
            Palghar's most-trusted multispeciality dental clinic & implant centre.
          </p>

          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-4 py-3 backdrop-blur-md shadow-xl shadow-black/10"
          >
            <Search className="h-5 w-5 text-white/80" />
            <input
              type="search"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search articles, treatments, symptoms…"
              aria-label="Search articles"
              className="w-full bg-transparent text-base text-white placeholder:text-white/60 focus:outline-none"
            />
            <span className="hidden sm:inline text-xs font-medium text-white/70">
              {totalArticles} articles
            </span>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                    active
                      ? "border-white bg-white text-primary shadow-lg"
                      : "border-white/30 bg-white/5 text-white/90 hover:bg-white/15"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <svg
        className="block w-full text-background"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,32 C240,72 480,0 720,24 C960,48 1200,72 1440,32 L1440,60 L0,60 Z"
        />
      </svg>
    </section>
  );
};

export default BlogHero;
