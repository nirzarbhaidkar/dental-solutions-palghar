
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
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about their experience at Dental Solutions. 4.9/5 with over 300+ reviews. 
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="elfsight-app-1c9335dd-4e92-462e-9c64-87c8b9bcb7ab" data-elfsight-app-lazy></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
