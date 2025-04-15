
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string;
  canonicalUrl?: string;
  publishedTime?: string;
  modifiedTime?: string;
  authorName?: string;
}

const SEO = ({
  title = "Best Dentist in Palghar | Advanced Dental Clinic | Dental Solutions Palghar",
  description = "Looking for the best dentist in Palghar? Dental Solutions Palghar provides complete dental care including general dentistry, cosmetic treatments, orthodontics, dental implants, root canal, and emergency services at affordable prices. Visit our top-rated dental clinic today!",
  image = "/og-image.jpeg", 
  article = false,
  keywords = "dentist in palghar, dental clinic near me, best dentist palghar, affordable dental services, teeth whitening palghar, root canal treatment palghar, dental implants palghar, orthodontist palghar, kids dentist palghar, emergency dental care palghar, teeth cleaning, dental bridges, dental crowns",
  canonicalUrl,
  publishedTime,
  modifiedTime,
  authorName = "Dental Solutions Palghar"
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = window.location.origin;
  const url = canonicalUrl || `${siteUrl}${pathname}`;

  // Ensure image URL is absolute
  const absoluteImageUrl = image.startsWith('http') 
    ? image 
    : `${siteUrl}${image}`;
  
  // Default dimensions for the OG image - important for proper previews
  const imageWidth = "1200";
  const imageHeight = "630";
  const imageType = "image/jpeg";
  const imageAlt = title;

  // Facebook App ID - replace with your actual Facebook App ID
  const fbAppId = "1358034681882804";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="fb:app_id" content={fbAppId} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <meta property="og:image:type" content={imageType} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="Dental Solutions Palghar" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <meta name="twitter:site" content="@dentalsolutionspalghar" />
      <meta name="twitter:creator" content="@dentalsolutionspalghar" />
      
      {/* WhatsApp specific */}
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      
      {/* Article specific meta tags */}
      {article && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {authorName && <meta property="article:author" content={authorName} />}
        </>
      )}
      
      {/* Additional iOS and Android app banner meta tags */}
      <meta name="apple-itunes-app" content="app-id=yourAppStoreID, affiliate-data=yourAffiliateData, app-argument=yourAppArgument" />
      <meta name="google-play-app" content="app-id=yourPackageName" />
      
      {/* Robots and Canonical */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={url} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Palghar" />
      <meta name="geo.position" content="19.694437699999998;72.76597319999999" />
      <meta name="ICBM" content="19.694437699999998, 72.76597319999999" />
      
      {/* Additional Performance Tags */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    </Helmet>
  );
};

export default SEO;
