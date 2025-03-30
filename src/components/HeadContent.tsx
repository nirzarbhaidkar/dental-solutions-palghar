
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
}

const HeadContent = (props: HeadContentProps) => {
  return (
    <>
      <SEO {...props} />
      <StructuredData />
      <FAQStructuredData />
      <ReviewStructuredData />
    </>
  );
};

export default HeadContent;
