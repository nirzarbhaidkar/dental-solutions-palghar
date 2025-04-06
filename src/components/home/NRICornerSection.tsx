
import React from "react";
import { Globe, Phone, MapPin, Calendar, CheckCircle2, Video, ArrowRight, Users, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NRICornerSection = () => {
  return (
    <section id="nri-corner" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center gap-3 mb-2 bg-blue-50 px-4 py-1 rounded-full">
            <span className="text-3xl">🌏</span>
            <h2 className="text-primary font-semibold">
              NRI CORNER
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-center max-w-3xl">
            World-Class Dental Care for Non-Resident Indians
          </h3>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg text-gray-700">
            Tailored dental solutions for NRIs visiting India. Experience the perfect combination of international standards and personalized care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="shadow-lg border-t-4 border-t-primary hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Plane className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Strategic Treatment Planning
              </h3>
              <p className="text-gray-600 mb-4">
                Optimized treatment schedules that maximize results during your India visit, with pre-planning before your arrival.
              </p>
              <ul className="space-y-2">
                {[
                  "Pre-visit consultations",
                  "Condensed treatment plans",
                  "Priority scheduling"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-green-600 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-green-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Globe className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                International Quality Standards
              </h3>
              <p className="text-gray-600 mb-4">
                Receive dental care that meets global benchmarks with the comfort of being in your home country.
              </p>
              <ul className="space-y-2">
                {[
                  "Advanced dental technology",
                  "Globally trained specialists",
                  "International protocols"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-t-4 border-t-blue-500 hover:shadow-xl transition-all duration-300">
            <CardContent className="pt-6">
              <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-500 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Family-Oriented Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive care packages for your entire family during your India visit, coordinated in one location.
              </p>
              <ul className="space-y-2">
                {[
                  "Multi-generational care",
                  "Combined family appointments",
                  "Coordinated treatment plans"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-blue-50 to-white border-primary shadow-lg mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-8">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm mb-4">
                <Video className="text-primary h-4 w-4" /> 
                <span className="text-sm font-medium">Virtual Consultations Available</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Start Your Dental Journey Before Arriving in India
              </h3>
              <p className="text-gray-700 mb-6">
                Schedule a virtual consultation with our specialists to plan your treatment, understand procedures, and prepare for your visit. We'll have everything ready when you arrive.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <span>Efficient Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>24/7 NRI Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>Mumbai/Palghar Region</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-primary flex flex-col justify-center items-center p-8 text-white">
              <h4 className="text-2xl font-bold mb-4 text-center">Special NRI Services</h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Smile Transformations",
                  "Dental Implant Solutions",
                  "Full Mouth Rehabilitation",
                  "Cosmetic Dentistry",
                  "Preventive Care"
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
        
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h3 className="text-2xl font-bold mb-6">Ready to Plan Your Dental Care in India?</h3>
          <p className="text-gray-700 mb-8">
            Our dedicated NRI coordinator will guide you through the entire process, from initial consultation to treatment completion.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20interested%20in%20dental%20consultation.%20Please%20help%20me%20schedule%20a%20virtual%20meeting.%20Thank%20you!", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto"
          >
            Schedule Virtual Consultation <ArrowRight className="ml-1" />
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg w-full sm:w-auto"
            onClick={() => window.open("tel:+918600892884")}
          >
            Speak with NRI Coordinator <Phone className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NRICornerSection;
