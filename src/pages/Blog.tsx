import React, { useEffect, useMemo, useState } from "react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { blogPosts } from "@/data/blogPosts";
import { ScrollArea } from "@/components/ui/scroll-area";
import BlogPagination from "@/components/blog/Pagination";
import BlogHero from "@/components/blog/BlogHero";
import HeroFeaturedPost from "@/components/blog/HeroFeaturedPost";
import TrendingStrip from "@/components/blog/TrendingStrip";
import ArticleGrid from "@/components/blog/ArticleGrid";
import NewsletterCTA from "@/components/blog/NewsletterCTA";

const POSTS_PER_PAGE = 9;
const ALL = "All Topics";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [query, setQuery] = useState("");

  const categories = useMemo(() => {
    const set = new Set(blogPosts.map((p) => p.category));
    return [ALL, ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const matchesCat =
        activeCategory === ALL || p.category === activeCategory;
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.tags || []).some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesQ;
    });
  }, [activeCategory, query]);

  const featured = filtered[0];
  const trending = filtered.slice(1, 4);
  const rest = filtered.slice(4);

  const totalPages = Math.max(1, Math.ceil(rest.length / POSTS_PER_PAGE));
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginated = rest.slice(startIndex, startIndex + POSTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, query]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <ScrollArea className="min-h-screen bg-background pb-20 lg:pb-0">
      <HeadContent
        title="Dental Health Blog | Expert Tips from Palghar's Top Dentists"
        description="Evidence-based dental articles, treatment guides and oral-care tips from Dental Solutions Palghar — Palghar's trusted multispeciality dental clinic & implant centre."
        pageType="blog"
      />

      <Header />

      <main>
        <BlogHero
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          query={query}
          onQueryChange={setQuery}
          totalArticles={blogPosts.length}
        />

        <div className="container mx-auto max-w-6xl px-4 py-16">
          {featured && currentPage === 1 && <HeroFeaturedPost post={featured} />}

          {trending.length > 0 && currentPage === 1 && (
            <TrendingStrip posts={trending} />
          )}

          <section aria-labelledby="all-articles-heading">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <h2
                  id="all-articles-heading"
                  className="font-serif text-2xl font-bold text-foreground md:text-3xl"
                >
                  {activeCategory === ALL
                    ? "All articles"
                    : activeCategory}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {filtered.length} article
                  {filtered.length === 1 ? "" : "s"}
                  {query ? ` matching "${query}"` : ""}
                </p>
              </div>
            </div>

            <ArticleGrid posts={paginated} />
          </section>

          {totalPages > 1 && (
            <div className="mt-12">
              <BlogPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}

          <NewsletterCTA />
        </div>
      </main>

      <Footer />
    </ScrollArea>
  );
};

export default Blog;
