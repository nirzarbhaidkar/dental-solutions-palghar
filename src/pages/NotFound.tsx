
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

    // Check if this is a domain mismatch (.in vs .com)
    const currentUrl = window.location.href;
    const isIncorrectDomain = currentUrl.includes('dentalsolutionspalghar.in');
    
    if (isIncorrectDomain) {
      // Create the correct URL with .com domain
      const correctUrl = currentUrl.replace('dentalsolutionspalghar.in', 'dentalsolutionspalghar.com');
      setOriginalUrl(correctUrl);
      
      // Countdown for auto-redirect
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            window.location.href = correctUrl;
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [location.pathname]);

  const handleGoHome = () => {
    navigate("/");
  };

  const handleRedirect = () => {
    if (originalUrl) {
      window.location.href = originalUrl;
    }
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
            
            {originalUrl ? (
              <>
                <p className="text-gray-600 mb-6">
                  It looks like you're trying to access our site using <span className="font-medium">dentalsolutionspalghar.in</span>, but we've moved to <span className="font-medium">dentalsolutionspalghar.com</span>
                </p>
                <p className="text-gray-600 mb-6">
                  Redirecting you in <span className="font-bold">{countdown}</span> seconds...
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={handleRedirect} className="w-full sm:w-auto">
                    Redirect Now
                  </Button>
                  <Button variant="outline" onClick={handleGoHome} className="w-full sm:w-auto">
                    Go to Homepage
                  </Button>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  The page you're looking for doesn't exist or has been moved.
                </p>
                <Button onClick={handleGoHome} className="w-full sm:w-auto">
                  Return to Homepage
                </Button>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
