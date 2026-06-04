
import { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import FacebookPixel from "@/components/FacebookPixel";
import AppointmentPopup from "@/components/AppointmentPopup";

const QuizSection = lazy(() => import("@/components/home/QuizSection"));
const LocationSection = lazy(() => import("@/components/home/LocationSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const FAQsSection = lazy(() => import("@/components/home/FAQsSection"));
const BlogSection = lazy(() => import("@/components/home/BlogSection"));
const CtaSection = lazy(() => import("@/components/home/CtaSection"));
const NRICornerSection = lazy(() => import("@/components/home/NRICornerSection"));
const AchievementsSection = lazy(() => import("@/components/home/AchievementsSection"));
const CommunityImpactSection = lazy(() => import("@/components/home/CommunityImpactSection"));

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
        title="Best Dental Clinic in Palghar | Implant Centre — Dental Solutions"
        description="Palghar's top-rated multispeciality dental clinic & implant centre. 4.9★ Google reviews, 15+ years experience, painless treatments. Book your appointment today."
        image="https://dentalsolutionspalghar.in/og-image.jpg"
        keywords="best dental clinic in palghar, dental implants palghar, implant centre palghar, multispeciality dental clinic palghar, dentist in palghar, palghar dentist, best dentist in palghar, top dentist palghar, painless dentist palghar, dental clinic in palghar, dentist near me palghar, affordable dentist palghar, teeth whitening palghar, root canal palghar, orthodontist palghar, kids dentist palghar, emergency dentist palghar"
        pageType="home"
      />
      <FacebookPixel />
      
      {/* Additional SEO elements */}
      <Helmet>
        <link rel="alternate" hrefLang="en-in" href="https://dentalsolutionspalghar.in" />
        <link rel="alternate" hrefLang="x-default" href="https://dentalsolutionspalghar.in" />
      </Helmet>
      
      <Header />
      <main id="main-content">
        <HeroSection />
        <ServicesSection />
        <Suspense fallback={<div className="min-h-[200px]" />}>
          <AchievementsSection />
          <NRICornerSection />
          <QuizSection />
          <LocationSection />
          <TestimonialsSection />
          <FAQsSection />
          <CommunityImpactSection />
          <BlogSection />
          <CtaSection />
        </Suspense>
      </main>
      <Footer />
      
      {/* Appointment Popup that shows at the end of scrolling */}
      <AppointmentPopup />
    </div>
  );
};

export default Index;
