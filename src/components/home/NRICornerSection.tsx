
import React from "react";
import { Globe, Phone, MapPin, Calendar, CheckCircle2, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NRICornerSection = () => {
  return (
    <section id="nri-corner" className="py-16 bg-gradient-to-br from-accent/50 via-white to-accent/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="text-3xl">🇮🇳</span>
          <h2 className="text-3xl font-bold text-center">
            NRI Corner – <span className="text-primary">World-Class Dental Care, Rooted in Trust</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-lg text-gray-700">
            Welcome to Dental Solutions Palghar's NRI Corner – Your Home for Healthy Smiles in India.
          </p>
          <p className="mt-4 text-gray-600">
            Living abroad and looking for trusted dental care for yourself or your loved ones back home? 
            Whether it's a planned dental vacation, a treatment during your next India visit, or ongoing 
            care for your family, we are here to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-green-600" /> 
              Why NRIs Choose Us:
            </h3>
            <ul className="space-y-3">
              {[
                "Top-Quality Dental Treatments at Indian prices",
                "Advanced Technology & International Standards",
                "Flexible Scheduling to suit your India visit",
                "Pre-Treatment Virtual Consultations from anywhere in the world",
                "Dedicated Support for Treatment Planning & Travel Assistance",
                "Post-Treatment Follow-Ups Online"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Globe className="text-primary" /> 
              Services Popular with NRI Patients:
            </h3>
            <ul className="space-y-3">
              {[
                "Cosmetic Dentistry (Smile Makeovers, Veneers, Whitening)",
                "Dental Implants & Full Mouth Rehabilitation",
                "Root Canal Treatments",
                "Pediatric & Family Dentistry",
                "Preventive & Routine Dental Checkups for Parents/Seniors"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Card className="bg-gradient-to-br from-white to-accent/20 border-accent shadow-lg mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Video className="text-primary" /> 
              Based Abroad? Let's Connect Before You Fly!
            </h3>
            <p className="text-gray-700 mb-6">
              We offer virtual consultations to help you plan your treatment even before you land in India. 
              Our expert dentists will guide you on the treatment options, duration, and costs so you can make 
              an informed decision.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span>Plan your treatment in advance</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-600" />
                <span>Speak to our NRI Care Coordinator</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <span>Serving NRIs visiting Mumbai, Palghar, Vasai, Virar</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => window.open(" https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20interested%20in%20dental%20treatment.%20Please%20help%20me%20schedule%20a%20virtual%20consultation.%20Thank%20you!", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
          >
            Schedule Virtual Consultation on WhatsApp
          </Button>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg"
            onClick={() => window.open("tel:+918600892884")}
          >
            Call NRI Care Coordinator <Phone className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NRICornerSection;
