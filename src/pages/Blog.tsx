
import React, { useEffect } from "react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get the featured blog post for OG image (first post)
  const featuredPost = blogPosts[0];
  const featuredImageUrl = featuredPost.image.startsWith('http') 
    ? featuredPost.image 
    : `https://dentalsolutionspalghar.com${featuredPost.image}`;

  // Create structured data for blog posts
  const blogPostStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image.startsWith('http') ? post.image : `https://dentalsolutionspalghar.com${post.image}`,
        "url": `https://dentalsolutionspalghar.com/blog/${post.slug}`,
        "author": {
          "@type": "Person",
          "name": "Dental Solutions Palghar Team"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dental Solutions Palghar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://dentalsolutionspalghar.com/og-image.jpg"
          }
        },
        "datePublished": "2024-07-01T00:00:00+05:30"
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title="Dental Health Blog | Tips & Advice | Dental Solutions Palghar"
        description="Read our blog for the latest dental health tips, treatment information, and oral care advice from the top dentists in Palghar."
        image={featuredImageUrl}
        article={true}
        keywords="dental health tips, oral hygiene advice, dental care blog, palghar dentist blog, teeth cleaning tips, dental treatment information, gum disease prevention, tooth decay prevention, children dental care, dental implant information"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
        <link rel="alternate" hreflang="en-in" href="https://dentalsolutionspalghar.com/blog" />
        <link rel="alternate" hreflang="x-default" href="https://dentalsolutionspalghar.com/blog" />
      </Helmet>
      
      <Header />
      <BreadcrumbNav currentPage="Dental Health Blog" />
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">
            Latest Dental Health Tips & Advice
          </h1>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gray-600 text-center">
              Welcome to the Dental Solutions Palghar blog, where our experienced dentists share valuable insights, tips, 
              and information about dental health, treatments, and preventive care. Explore our articles to learn more about 
              maintaining optimal oral health for you and your family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link to={`/blog/${post.slug}`}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-block bg-accent text-white py-2 px-4 rounded-full hover:bg-secondary transition-colors duration-200"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </Link>
                    <span className="text-sm text-gray-500">5 min read</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
