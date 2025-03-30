
import { useEffect } from "react";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuizSection from "@/components/home/QuizSection";
import LocationSection from "@/components/home/LocationSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQsSection from "@/components/home/FAQsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaSection from "@/components/home/CtaSection";
import FacebookPixel from "@/components/FacebookPixel";

const Index = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title="Best Dentist in Palghar | Advanced Dental Clinic | Dental Solutions Palghar"
        description="Looking for the best dentist in Palghar? Dental Solutions Palghar provides complete dental care including general dentistry, cosmetic treatments, orthodontics, dental implants, root canal, and emergency services at affordable prices."
        image="https://dentalsolutionspalghar.com/og-image.jpg"
      />
      <FacebookPixel />
      <Header />
      <HeroSection />
      <ServicesSection />
      <QuizSection />
      <LocationSection />
      <TestimonialsSection />
      <FAQsSection />
      <BlogSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
