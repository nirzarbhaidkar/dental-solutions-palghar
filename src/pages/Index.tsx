
import { useState, useEffect } from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Location from "@/components/home/Location";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import BlogPreview from "@/components/home/BlogPreview";
import CallToAction from "@/components/home/CallToAction";
import Footer from "@/components/home/Footer";
import FacebookPixel from "@/components/home/FacebookPixel";
import SeoHelmet from "@/components/home/SeoHelmet";

const Index = () => {
  useEffect(() => {
    // This ensures the page scrolls to top when component mounts
    window.scrollTo(0, 0);
    
    // Log to help with debugging
    console.log("Index component mounted");
  }, []);

  return (
    <div className="min-h-screen bg-background" id="dental-solutions-palghar-main">
      <SeoHelmet />
      <FacebookPixel />
      <Navbar />
      <Hero />
      <Services />
      <Location />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
