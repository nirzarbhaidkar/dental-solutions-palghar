
import { useEffect } from "react";

const TestimonialsSection = () => {
  useEffect(() => {
    // Load Elfsight platform script
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Elfsight Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <div className="elfsight-app-1c9335dd-4e92-462e-9c64-87c8b9bcb7ab" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
