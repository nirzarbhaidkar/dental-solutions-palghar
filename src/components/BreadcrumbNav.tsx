import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbNavProps {
  items?: BreadcrumbItem[];
  currentPage: string;
}

const BreadcrumbNav = ({ items = [], currentPage }: BreadcrumbNavProps) => {
  const location = useLocation();
  const fullPath = location.pathname;
  
  // Generate breadcrumb items if none provided
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbItems(fullPath, currentPage);
  
  // Prepare structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://dentalsolutionspalghar.com${item.path}`
    }))
  };
  
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-gray-50">
        <ol className="flex flex-wrap items-center text-sm text-gray-600">
          <li className="flex items-center">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            {breadcrumbItems.length > 0 && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </li>
          
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index < breadcrumbItems.length - 1 ? (
                <>
                  <Link to={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              ) : (
                <span className="font-medium text-primary" aria-current="page">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

// Helper function to generate breadcrumb items from URL path
const generateBreadcrumbItems = (fullPath: string, currentPage: string): BreadcrumbItem[] => {
  if (fullPath === '/' || fullPath === '') return [];
  
  const pathSegments = fullPath.split('/').filter(segment => segment !== '');
  let currentPath = '';
  
  const items = pathSegments.map((segment, index) => {
    currentPath += `/${segment}`;
    
    // If this is the last segment, use the provided currentPage name
    if (index === pathSegments.length - 1) {
      return {
        name: currentPage,
        path: currentPath
      };
    }
    
    // Otherwise, format the segment name
    const formattedName = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      name: formattedName,
      path: currentPath
    };
  });
  
  return items;
};

export default BreadcrumbNav;
