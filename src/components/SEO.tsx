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
  noindex?: boolean;
}

const SEO = ({
  title = "Dental Clinic in Palghar | Dental Solutions",
  description = "Dental Solutions Palghar offers general, cosmetic, restorative and emergency dental care, including implants, braces, root canal treatment and care for children.",
  image = "/og-image.jpg",
  article = false,
  canonicalUrl,
  publishedTime,
  modifiedTime,
  authorName = "Dental Solutions Palghar",
  noindex = false,
}: SEOProps) => {
  const { pathname } = useLocation();
  const siteUrl = "https://dentalsolutionspalghar.in";
  const url = canonicalUrl || `${siteUrl}${pathname === "/" ? "/" : pathname}`;
  const absoluteImageUrl = image.startsWith("http")
    ? image
    : `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Dental Solutions Palghar" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {article && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {article && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {article && authorName && <meta property="article:author" content={authorName} />}

      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Palghar" />
      <meta name="geo.position" content="19.6944377;72.7659732" />
      <meta name="ICBM" content="19.6944377, 72.7659732" />
    </Helmet>
  );
};

export default SEO;
