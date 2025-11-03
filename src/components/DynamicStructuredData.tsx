import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

interface DynamicStructuredDataProps {
  pageType?: 'home' | 'blog' | 'blogpost' | 'service';
  title?: string;
  description?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  serviceData?: {
    name: string;
    description: string;
    price?: string;
    category: string;
  };
}

const DynamicStructuredData = ({ 
  pageType, 
  title, 
  description, 
  publishedTime, 
  modifiedTime, 
  authorName = "Dr. Dental Solutions",
  serviceData 
}: DynamicStructuredDataProps) => {
  const location = useLocation();
  const currentUrl = `https://dentalsolutionspalghar.in${location.pathname}`;
  
  // Auto-detect page type if not provided
  const detectedPageType = pageType || (() => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/blog/') && location.pathname !== '/blog') return 'blogpost';
    if (location.pathname === '/blog') return 'blog';
    if (location.pathname.startsWith('/services/')) return 'service';
    return 'home';
  })();

  // Get blog post data if on blog post page
  const blogSlug = location.pathname.startsWith('/blog/') ? location.pathname.replace('/blog/', '') : '';
  const blogPost = blogSlug ? blogPosts.find(post => post.slug === blogSlug) : null;

  const generateOrganizationSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dental Solutions Palghar",
    "alternateName": "Best Dental Clinic in Palghar",
    "url": "https://dentalsolutionspalghar.in",
    "logo": "https://dentalsolutionspalghar.in/og-image.jpg",
    "image": "https://dentalsolutionspalghar.in/og-image.jpg",
    "telephone": "+918600892884",
    "email": "contact@dentalsolutionspalghar.com",
    "description": "Dental Solutions Palghar is the leading dental clinic in Palghar offering comprehensive dental care including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canal treatment, teeth whitening, emergency dental care, and pediatric dentistry.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes",
      "addressLocality": "Palghar",
      "addressRegion": "Maharashtra",
      "postalCode": "401404",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.694437699999998,
      "longitude": 72.76597319999999
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/DentalSolutionsPalghar",
      "https://www.instagram.com/dentalsolutionspalghar"
    ]
  });

  const generateBlogPostSchema = () => {
    if (!blogPost) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogPost.title,
      "description": blogPost.excerpt,
      "image": [blogPost.image],
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": "https://dentalsolutionspalghar.in"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Dental Solutions Palghar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dentalsolutionspalghar.in/og-image.jpg"
        }
      },
      "datePublished": publishedTime || blogPost.date,
      "dateModified": modifiedTime || publishedTime || blogPost.date,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      },
      "url": currentUrl,
      "articleSection": blogPost.category,
      "keywords": blogPost.tags?.join(", ") || "",
      "wordCount": blogPost.content.split(' ').length,
      "timeRequired": blogPost.readTime,
      "inLanguage": "en-US",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://dentalsolutionspalghar.in/blog"
      }
    };
  };

  const generateServiceSchema = () => {
    if (!serviceData) return null;

    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": serviceData.name,
      "description": serviceData.description,
      "url": currentUrl,
      "provider": {
        "@type": "Dentist",
        "name": "Dental Solutions Palghar",
        "url": "https://dentalsolutionspalghar.in",
        "telephone": "+918600892884",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Shop number 5,6, Apoorva Apartments, Mahim Rd",
          "addressLocality": "Palghar",
          "addressRegion": "Maharashtra",
          "postalCode": "401404",
          "addressCountry": "IN"
        }
      },
      "category": serviceData.category,
      ...(serviceData.price && { "offers": {
        "@type": "Offer",
        "price": serviceData.price,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      }})
    };
  };

  const generateWebSiteSchema = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dental Solutions Palghar",
    "alternateName": "Best Dental Clinic in Palghar",
    "url": "https://dentalsolutionspalghar.in",
    "description": "Leading dental clinic in Palghar offering comprehensive dental care services including general dentistry, cosmetic dentistry, orthodontics, and emergency dental care.",
    "publisher": {
      "@type": "Organization",
      "name": "Dental Solutions Palghar"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dentalsolutionspalghar.in/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.facebook.com/DentalSolutionsPalghar",
      "https://www.instagram.com/dentalsolutionspalghar"
    ]
  });

  const generateBreadcrumbSchema = () => {
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dentalsolutionspalghar.in"
      }
    ];

    if (detectedPageType === 'blog') {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://dentalsolutionspalghar.in/blog"
      });
    } else if (detectedPageType === 'blogpost' && blogPost) {
      breadcrumbs.push(
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://dentalsolutionspalghar.in/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blogPost.title,
          "item": currentUrl
        }
      );
    } else if (detectedPageType === 'service' && serviceData) {
      breadcrumbs.push(
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://dentalsolutionspalghar.in/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": serviceData.name,
          "item": currentUrl
        }
      );
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  return (
    <Helmet>
      {/* Organization Schema - Always present */}
      <script type="application/ld+json">
        {JSON.stringify(generateOrganizationSchema())}
      </script>

      {/* WebSite Schema - Always present */}
      <script type="application/ld+json">
        {JSON.stringify(generateWebSiteSchema())}
      </script>

      {/* Breadcrumb Schema - Always present */}
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbSchema())}
      </script>

      {/* BlogPosting Schema - Only for blog posts */}
      {detectedPageType === 'blogpost' && generateBlogPostSchema() && (
        <script type="application/ld+json">
          {JSON.stringify(generateBlogPostSchema())}
        </script>
      )}

      {/* Service Schema - Only for service pages */}
      {detectedPageType === 'service' && generateServiceSchema() && (
        <script type="application/ld+json">
          {JSON.stringify(generateServiceSchema())}
        </script>
      )}
    </Helmet>
  );
};

export default DynamicStructuredData;