
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
}: HeadContentProps) => {
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
      <FAQStructuredData />
      <ReviewStructuredData />
    </>
  );
};

export default HeadContent;
