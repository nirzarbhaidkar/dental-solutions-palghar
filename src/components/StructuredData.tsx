
import React from 'react';
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  return (
    <Helmet>
      {/* Enhanced Schema.org structured data for local business */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Dentist",
          "name": "Dental Solutions Palghar",
          "alternateName": "Best Dental Clinic in Palghar",
          "image": "/og-image.png",
          "logo": "/og-image.png",
          "url": "https://dentalsolutionspalghar.com",
          "telephone": "+918600892884",
          "email": "contact@dentalsolutionspalghar.com",
          "description": "Dental Solutions Palghar is the leading dental clinic in Palghar offering comprehensive dental care including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canal treatment, teeth whitening, emergency dental care, and pediatric dentistry at affordable prices.",
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
          ],
          "priceRange": "₹₹",
          "hasMap": "https://goo.gl/maps/YourGoogleMapsLink",
          "department": [
            {
              "@type": "Dentist",
              "name": "General Dentistry Department",
              "description": "Comprehensive dental checkups, cleaning, fillings, and preventive care."
            },
            {
              "@type": "Dentist",
              "name": "Cosmetic Dentistry Department",
              "description": "Teeth whitening, veneers, crowns, and smile makeover procedures."
            },
            {
              "@type": "Dentist",
              "name": "Orthodontics Department",
              "description": "Braces, aligners, and other teeth straightening treatments."
            },
            {
              "@type": "Dentist",
              "name": "Implant Dentistry",
              "description": "Dental implants and restorative procedures."
            }
          ],
          "availableService": [
            {
              "@type": "MedicalProcedure",
              "name": "Root Canal Treatment",
              "description": "Procedure to remove infected pulp and preserve the damaged tooth."
            },
            {
              "@type": "MedicalProcedure",
              "name": "Dental Implants",
              "description": "Artificial tooth roots placed to support restorations."
            },
            {
              "@type": "MedicalProcedure",
              "name": "Teeth Whitening",
              "description": "Professional teeth bleaching for a brighter smile."
            },
            {
              "@type": "MedicalProcedure",
              "name": "Orthodontic Treatment",
              "description": "Corrective procedures for teeth alignment and jaw position."
            },
            {
              "@type": "MedicalProcedure",
              "name": "Pediatric Dentistry",
              "description": "Specialized dental care for children."
            }
          ],
          "areaServed": [
            {
              "@type": "City",
              "name": "Palghar"
            },
            {
              "@type": "City",
              "name": "Boisar"
            },
            {
              "@type": "City",
              "name": "Tarapur"
            },
            {
              "@type": "City",
              "name": "Safale"
            },
            {
              "@type": "City",
              "name": "Kelve Road"
            }
          ]
        }
        `}
      </script>
    </Helmet>
  );
};

export default StructuredData;
