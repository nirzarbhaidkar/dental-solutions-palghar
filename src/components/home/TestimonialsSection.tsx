
import { useEffect, useRef, useState } from "react";

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Load Elfsight platform script only when section is visible
          const script = document.createElement('script');
          script.src = 'https://static.elfsight.com/platform/platform.js';
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 bg-muted">
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
