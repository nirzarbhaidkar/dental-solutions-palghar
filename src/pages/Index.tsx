
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
import NRICornerSection from "@/components/home/NRICornerSection";
import AchievementsSection from "@/components/home/AchievementsSection";
import CommunityImpactSection from "@/components/home/CommunityImpactSection";
import FacebookPixel from "@/components/FacebookPixel";
import AppointmentPopup from "@/components/AppointmentPopup";

const Index = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    
    // Clear session storage for appointment popup when testing
    // Comment this out in production
    if (process.env.NODE_ENV === 'development') {
      sessionStorage.removeItem('appointmentPopupShown');
      console.log("Development mode: Reset appointment popup");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title="Best Dentist in Palghar | Advanced Dental Clinic | Dental Solutions Palghar"
        description="Looking for the best dentist in Palghar? Dental Solutions Palghar provides complete dental care including general dentistry, cosmetic treatments, orthodontics, dental implants, root canal, and emergency services at affordable prices."
        image="https://dentalsolutionspalghar.in/og-image.jpg"
        keywords="best dentist in palghar, dental clinic palghar, affordable dentist, teeth whitening, root canal treatment, dental implants, orthodontist, pediatric dentist, emergency dental care, dental x-ray, tooth extraction, dental bridges, dental crowns"
        pageType="home"
      />
      <FacebookPixel />
      
      {/* Additional SEO elements */}
      <Helmet>
        <link rel="alternate" hrefLang="en-in" href="https://dentalsolutionspalghar.in" />
        <link rel="alternate" hrefLang="x-default" href="https://dentalsolutionspalghar.in" />
        <meta name="google-site-verification" content="your-verification-code" />
        <meta name="p:domain_verify" content="pinterest-verification-code" />
      </Helmet>
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <AchievementsSection />
        <NRICornerSection />
        <QuizSection />
        <LocationSection />
        <TestimonialsSection />
        <FAQsSection />
        <CommunityImpactSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
      
      {/* Appointment Popup that shows at the end of scrolling */}
      <AppointmentPopup />
    </div>
  );
};

export default Index;
