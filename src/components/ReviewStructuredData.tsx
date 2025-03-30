
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ReviewStructuredData = () => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Dental Solutions Palghar",
          "image": "/og-image.png",
          "url": "https://dentalsolutionspalghar.com",
          "telephone": "+918600892884",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop number 5,6, Apoorva Apartments, Mahim Rd",
            "addressLocality": "Palghar",
            "addressRegion": "Maharashtra",
            "postalCode": "401404",
            "addressCountry": "IN"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "156"
          },
          "review": [
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Amit Sharma"
              },
              "datePublished": "2023-12-15",
              "reviewBody": "Dr. Shah at Dental Solutions Palghar is exceptional! I had severe tooth pain and got an emergency appointment the same day. The root canal procedure was virtually painless. Highly recommend this dental clinic in Palghar!",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Priya Patel"
              },
              "datePublished": "2024-01-20",
              "reviewBody": "I took my 4-year-old son for his first dental checkup at Dental Solutions Palghar, and the pediatric dentist was amazing with him. The clinic is clean, modern, and the staff is very friendly. Great dental care for children in Palghar!",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            },
            {
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": "Rahul Desai"
              },
              "datePublished": "2024-02-10",
              "reviewBody": "Had my teeth whitening done at Dental Solutions Palghar last week. The results are fantastic! My teeth are visibly whiter. The procedure was comfortable and the staff explained everything thoroughly. Best dental clinic in Palghar for cosmetic dentistry.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              }
            }
          ]
        }
        `}
      </script>
    </Helmet>
  );
};

export default ReviewStructuredData;
