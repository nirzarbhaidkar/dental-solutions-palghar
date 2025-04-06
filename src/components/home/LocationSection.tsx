
import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const LocationSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="location" className="py-24 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("location.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("location.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("location.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747.0795243456477!2d72.76324887582555!3d19.6966234325839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71d91193bfcd1%3A0x3c78ab3e5f477045!2sDental%20Solutions%20Palghar!5e0!3m2!1sen!2sin!4v1708343393177!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Dental Solutions Palghar Location"
            ></iframe>
          </div>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Dental Solutions Palghar</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <p className="text-gray-700">
                    Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes, next to National College, Shri Ram Nagar, Vishnu Nagar, Palghar, Maharashtra 401404
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                  <a href="tel:+918600892884" className="text-gray-700 hover:text-primary transition-colors">
                    +91 8600892884
                  </a>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-700 font-medium">Opening Hours:</p>
                    <p className="text-gray-600">Mon-Sat: 9:30 am–2 pm, 5–9 pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col gap-3">
                <Button 
                  className="w-full"
                  onClick={() => window.open("https://www.google.com/maps/dir/?api=1&destination=Dental+Solutions+Palghar", "_blank")}
                >
                  Get Directions
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open("tel:+918600892884", "_blank")}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
