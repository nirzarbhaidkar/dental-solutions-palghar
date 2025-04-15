
import { blogPosts } from "@/data/blogPosts";

export const generateRssFeed = () => {
  const baseUrl = window.location.origin;
  const lastBuildDate = new Date().toUTCString();

  const rssItems = blogPosts
    .map(post => {
      const postUrl = `${baseUrl}/blog/${post.slug}`;
      return `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <link>${postUrl}</link>
          <guid>${postUrl}</guid>
          <description><![CDATA[${post.excerpt}]]></description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <category><![CDATA[${post.category}]]></category>
        </item>
      `;
    })
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Dental Solutions Palghar Blog</title>
        <link>${baseUrl}</link>
        <description>Latest dental health insights and tips from Dr. Anirudh Bhaidkar</description>
        <language>en-in</language>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
        ${rssItems}
      </channel>
    </rss>`;

  return rss;
};
