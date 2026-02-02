
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
        title="Dentist in Palghar | Best Dental Clinic Near You | Dental Solutions"
        description="Looking for a trusted dentist in Palghar? Dental Solutions Palghar offers expert dental care including implants, braces, root canal, teeth whitening, and emergency services. Affordable prices & modern technology. Book today!"
        image="https://dentalsolutionspalghar.in/og-image.jpg"
        keywords="dentist in palghar, palghar dentist, dental clinic in palghar, best dentist palghar, dentist near me palghar, affordable dentist palghar, teeth whitening palghar, root canal palghar, dental implants palghar, orthodontist palghar, kids dentist palghar, emergency dentist palghar"
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
