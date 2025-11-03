
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
          "image": "https://dentalsolutionspalghar.in/og-image.jpg",
          "logo": "https://dentalsolutionspalghar.in/og-image.jpg",
          "url": "https://dentalsolutionspalghar.in",
          "telephone": "+918600892884",
          "email": "contact@dentalsolutionspalghar.com",
          "description": "Dental Solutions Palghar is the leading dental clinic in Palghar offering comprehensive dental care including general dentistry, cosmetic dentistry, orthodontics, dental implants, root canal treatment, teeth whitening, emergency dental care, and pediatric dentistry at affordable prices.",
          "slogan": "Your Smile, Our Priority",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
          "priceRange": "₹₹",
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
          "hasMap": "https://www.google.com/maps/place/Dental+Solutions+Palghar/@19.6944377,72.7659732,17z",
          "sameAs": [
            "https://www.facebook.com/DentalSolutionsPalghar",
            "https://www.instagram.com/dentalsolutionspalghar"
          ],
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
              "description": "Procedure to remove infected pulp and preserve the damaged tooth.",
              "url": "https://dentalsolutionspalghar.in/services/root-canal"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Dental Implants",
              "description": "Artificial tooth roots placed to support restorations.",
              "url": "https://dentalsolutionspalghar.in/services/dental-implants"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Teeth Whitening",
              "description": "Professional teeth bleaching for a brighter smile.",
              "url": "https://dentalsolutionspalghar.in/services/teeth-whitening"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Orthodontic Treatment",
              "description": "Corrective procedures for teeth alignment and jaw position.",
              "url": "https://dentalsolutionspalghar.in/services/orthodontics"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Pediatric Dentistry",
              "description": "Specialized dental care for children.",
              "url": "https://dentalsolutionspalghar.in/services/pediatric-dentistry"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Emergency Dental Care",
              "description": "Immediate dental care for urgent situations.",
              "url": "https://dentalsolutionspalghar.in/services/emergency-dental"
            },
            {
              "@type": "MedicalProcedure",
              "name": "Periodontal Treatment",
              "description": "Treatment for gum diseases and infections.",
              "url": "https://dentalsolutionspalghar.in/services/periodontal"
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
          ],
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "WiFi",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Air Conditioning",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Wheelchair Accessible",
              "value": true
            }
          ],
          "specialty": [
            "General Dentistry", 
            "Cosmetic Dentistry", 
            "Orthodontics", 
            "Implantology", 
            "Endodontics", 
            "Periodontics", 
            "Pediatric Dentistry"
          ]
        }
        `}
      </script>
      
      {/* BreadcrumbList structured data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://dentalsolutionspalghar.in"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://dentalsolutionspalghar.in/#services"
            }
          ]
        }
        `}
      </script>
      
      {/* Medical Business structured data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dental Solutions Palghar",
          "image": "https://dentalsolutionspalghar.in/og-image.jpg",
          "url": "https://dentalsolutionspalghar.in",
          "telephone": "+918600892884",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Shop number 5,6, Apoorva Apartments, Mahim Rd",
            "addressLocality": "Palghar",
            "addressRegion": "Maharashtra",
            "postalCode": "401404",
            "addressCountry": "IN"
          },
          "medicalSpecialty": ["Dentistry", "Orthodontics", "Endodontics"]
        }
        `}
      </script>
      
      {/* WebSite structured data */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "url": "https://dentalsolutionspalghar.in",
          "name": "Dental Solutions Palghar",
          "description": "Leading dental clinic in Palghar offering comprehensive dental care services.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://dentalsolutionspalghar.in/blog?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }
        `}
      </script>
    </Helmet>
  );
};

export default StructuredData;
