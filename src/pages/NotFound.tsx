
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [originalUrl, setOriginalUrl] = useState("");

  useEffect(() => {
    // Log the 404 error
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Since the site is hosted on .in domain, we no longer need domain mismatch handling
    // Both .in and .com are valid, so we're not redirecting anymore
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeadContent 
        title="Page Not Found | Dental Solutions Palghar"
        description="The page you're looking for doesn't exist. You may have mistyped the address or the page may have been moved."
      />
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-16">
        <div className="max-w-md w-full mx-auto text-center px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
            
            <p className="text-gray-600 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={handleGoHome} className="w-full sm:w-auto">
              Return to Homepage
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
