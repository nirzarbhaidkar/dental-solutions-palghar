
import React from 'react';
import SEO from './SEO';
import StructuredData from './StructuredData';
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
}

const HeadContent = ({
  title,
  description,
  image = "/og-image.jpg",
  article,
  keywords,
  publishedTime,
  modifiedTime,
  authorName,
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
      <StructuredData />
      <FAQStructuredData />
      <ReviewStructuredData />
    </>
  );
};

export default HeadContent;

