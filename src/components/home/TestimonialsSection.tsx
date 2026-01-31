import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

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
    <section ref={sectionRef} id="testimonials" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="badge-premium mb-4">
              What Our Patients Say
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't just take our word for it – see what our patients have to say about their experience.
            </p>
          </div>
        </ScrollReveal>
        
        {/* Elfsight Google Reviews Widget */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-6xl mx-auto">
            <div className="elfsight-app-1c9335dd-4e92-462e-9c64-87c8b9bcb7ab" data-elfsight-app-lazy></div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
