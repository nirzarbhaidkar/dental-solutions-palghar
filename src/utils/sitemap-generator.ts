
/**
 * Sitemap Generator Utility
 * 
 * This utility helps manage and update the sitemap.xml file
 * It can be used to automatically update lastmod dates
 * and generate new entries for dynamic content
 */

import fs from 'fs';
import path from 'path';

// Function to update all lastmod dates to today
export const updateLastModifiedDates = () => {
  const today = new Date().toISOString().split('T')[0];
  
  // Path to sitemap.xml
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  
  // Read the current sitemap
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Replace all lastmod dates with today's date
  sitemapContent = sitemapContent.replace(
    /<lastmod>[^<]+<\/lastmod>/g,
    `<lastmod>${today}</lastmod>`
  );
  
  // Write the updated sitemap back to the file
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  
  console.log(`Updated all lastmod dates in sitemap.xml to ${today}`);
};

// Function to add a new URL to the sitemap
export const addUrlToSitemap = (
  url: string,
  options: {
    priority?: string;
    changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    images?: Array<{ url: string; title: string; caption?: string }>;
  } = {}
) => {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  const today = new Date().toISOString().split('T')[0];
  
  let imageXml = '';
  if (options.images && options.images.length > 0) {
    imageXml = options.images.map(img => `
    <image:image>
      <image:loc>${img.url}</image:loc>
      <image:title>${img.title}</image:title>
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('');
  }
  
  const newUrlEntry = `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${options.changefreq || 'monthly'}</changefreq>
    <priority>${options.priority || '0.7'}</priority>${imageXml}
  </url>`;
  
  // Insert the new URL entry just before the closing </urlset> tag
  sitemapContent = sitemapContent.replace('</urlset>', `${newUrlEntry}\n</urlset>`);
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`Added ${url} to sitemap.xml`);
};

// This function can be used in a build script or serverless function
// to automatically update the sitemap before deployment
export const generateSitemap = () => {
  // Update all existing dates
  updateLastModifiedDates();
  
  // Add any new URLs or dynamic content here
  // Example:
  // addUrlToSitemap('https://dentalsolutionspalghar.in/new-service', {
  //   priority: '0.8',
  //   changefreq: 'weekly',
  //   images: [{ url: 'https://dentalsolutionspalghar.in/images/new-service.jpg', title: 'New Dental Service' }]
  // });
  
  console.log('Sitemap generation completed');
};
