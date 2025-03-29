
import React from 'react';
import { Helmet } from 'react-helmet';

const SeoHelmet = () => {
  return (
    <Helmet>
      <title>Best Dentist in Palghar | Dental Clinic Near Me | Dental Solutions Palghar</title>
      <meta name="description" content="Looking for a dentist in Palghar? Dental Solutions offers comprehensive dental services including teeth whitening, implants, root canal, and emergency dental care. Best dental clinic near me with affordable prices. Visit our mouth doctor today!" />
      <meta name="keywords" content="dentist palghar, dentist in palghar, dental solutions palghar, dental clinic palghar, mouth doctor, dental solutions, dentist near me, dental clinic near me, dental curve palghar, palghar dental clinic, teeth whitening near me, dental implants, best dentist near me" />
      
      {/* Additional structured data for local business */}
      <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dental Solutions Palghar",
          "alternateName": ["Best Dental Clinic in Palghar", "Top Dentist Near Me"],
          "url": "https://dentalsolutionspalghar.com",
          "telephone": "+918600892884",
          "priceRange": "₹₹",
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
        }
      `}
      </script>
    </Helmet>
  );
};

export default SeoHelmet;
