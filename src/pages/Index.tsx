
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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
