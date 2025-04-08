
import React from "react";
import { HandHeart, Globe, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunityImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Making A Difference
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            Community Impact
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:shadow-xl border border-gray-100">
              <div className="flex items-start mb-6">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-full mr-4">
                  <HandHeart className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Serving The Underserved</h3>
                  <p className="text-gray-600">
                    Dr. Aniruddh Bhaidkar and his team have conducted over 50 dental camps 
                    throughout the Palghar district, bringing essential oral healthcare to 
                    tribal communities and those with limited access to dental services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-full mr-4">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Education Initiatives</h3>
                  <p className="text-gray-600">
                    Our team regularly visits schools and community centers to educate 
                    children and adults about oral hygiene practices, preventive care, 
                    and the importance of regular dental check-ups.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-primary to-blue-600 p-3 rounded-full mr-4">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Free Dental Care Programs</h3>
                  <p className="text-gray-600">
                    We believe that everyone deserves access to quality dental care. 
                    Through our free dental programs, we've helped thousands of patients 
                    receive treatments they otherwise could not afford.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Our Commitment to Community Wellness
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Dr. Aniruddh Bhaidkar has been deeply committed to serving the community for over a decade. 
              His passion for bringing quality dental care to everyone, especially the underserved, 
              has resulted in initiatives that have touched thousands of lives across the Palghar district.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              From organizing free dental checkups in remote villages to providing subsidized 
              treatments for those in need, our efforts continue to make a meaningful difference 
              in promoting oral health and overall well-being throughout the region.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="rounded-full"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20join%20your%20next%20community%20dental%20camp.%20Please%20share%20details%20about%20upcoming%20events.%20Thank%20you!", "_blank")}
              >
                Join Our Next Community Camp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
