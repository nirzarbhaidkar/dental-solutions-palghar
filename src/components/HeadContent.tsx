
import React from 'react';
import SEO from './SEO';
import DynamicStructuredData from './DynamicStructuredData';
import FAQStructuredData from './FAQStructuredData';
import ReviewStructuredData from './ReviewStructuredData';

interface HeadContentProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
  pageType?: 'home' | 'blog' | 'blogpost' | 'service';
  serviceData?: {
    name: string;
    description: string;
    price?: string;
    category: string;
  };
  faqs?: { question: string; answer: string }[];
}

const HeadContent = ({
  title,
  description,
  image = "/og-image.jpeg",
  article,
  keywords,
  publishedTime,
  modifiedTime,
  authorName,
  pageType,
  serviceData,
  faqs,
}: HeadContentProps) => {
  // Only emit FAQPage schema where FAQs are actually visible:
  // - homepage (FAQsSection renders the default FAQs)
  // - service pages (when matching faqs are passed)
  const showFAQ = pageType === 'home' || (pageType === 'service' && faqs && faqs.length > 0);
  return (
    <>
      <SEO 
        title={title}
        description={description}
        image={image}
        article={article}
        keywords={keywords}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        authorName={authorName}
      />
      <DynamicStructuredData 
        pageType={pageType}
        title={title}
        description={description}
        publishedTime={publishedTime}
        modifiedTime={modifiedTime}
        authorName={authorName}
        serviceData={serviceData}
      />
      {showFAQ && <FAQStructuredData faqs={faqs} />}
      <ReviewStructuredData />
    </>
  );
};

export default HeadContent;
