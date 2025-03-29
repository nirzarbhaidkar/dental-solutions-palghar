
import { useEffect } from "react";
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
