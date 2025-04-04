
import React from "react";
import { Globe, Phone, MapPin, Calendar, CheckCircle2, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NRICornerSection = () => {
  return (
    <section id="nri-corner" className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">🇮🇳</span>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              NRI Corner
            </h2>
          </div>
          <p className="text-xl text-primary font-semibold text-center max-w-2xl">
            World-Class Dental Care at Indian Prices
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-lg text-gray-700">
            Planning your next India visit? Schedule dental treatments that would cost 3-4x more abroad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <CheckCircle2 className="text-green-600" /> 
                Save Thousands While in India
              </h3>
              <ul className="space-y-3">
                {[
                  "Complete dental makeovers at 70% less than US/UK prices",
                  "Same international-standard equipment and materials",
                  "Treatment completed during your India visit",
                  "Family packages for multiple members"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg border-l-4 border-l-green-600">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                <Globe className="text-primary" /> 
                Most Popular NRI Treatments
              </h3>
              <ul className="space-y-3">
                {[
                  "Smile Makeovers: Get that perfect smile for 1/3rd the cost",
                  "Dental Implants: Save ₹50,000-₹1,50,000 per implant",
                  "Full Mouth Rehabilitation",
                  "Root Canal & Crown: Complete package in just 3-5 days"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <Card className="bg-gradient-to-r from-blue-50 to-white border-primary shadow-lg mb-10">
          <CardContent className="pt-6 pb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <Video className="text-primary" /> 
                  Plan Your Treatment Before Your India Trip
                </h3>
                <p className="text-gray-700 mb-6">
                  Book a free virtual consultation with our specialists. Get treatment plans, timelines, and exact costs before you arrive.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-green-600" />
                    <span>Treatment in 3-7 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span>24/7 NRI support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Mumbai/Palghar region</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/4 flex flex-col gap-3">
                <div className="text-lg font-bold text-center text-primary">
                  Save up to 70%
                </div>
                <div className="text-sm text-center text-gray-500">
                  vs. US/UK/Canada prices
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20interested%20in%20dental%20treatment%20during%20my%20next%20India%20visit.%20Please%20help%20me%20schedule%20a%20virtual%20consultation.%20Thank%20you!", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg w-full sm:w-auto"
          >
            Get Free Virtual Consultation <ArrowRight className="ml-1" />
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg w-full sm:w-auto"
            onClick={() => window.open("tel:+918600892884")}
          >
            Call NRI Coordinator <Phone className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NRICornerSection;
