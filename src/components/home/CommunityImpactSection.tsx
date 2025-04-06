
import React from "react";
import { Button } from "@/components/ui/button";
import { Users, Heart, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CommunityImpactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/20 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("communityImpact.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("communityImpact.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("communityImpact.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <p className="text-gray-600 text-lg">
              {t("communityImpact.description")}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Users className="text-primary h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">50+</h3>
                  <p className="text-sm text-gray-600">Dental Camps</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Heart className="text-primary h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">10,000+</h3>
                  <p className="text-sm text-gray-600">People Treated</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Award className="text-primary h-10 w-10 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">15+</h3>
                  <p className="text-sm text-gray-600">Tribal Villages Covered</p>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full sm:w-auto mt-4"
              variant="outline"
              onClick={() => window.open("https://wa.me/918600892884", "_blank")}
            >
              {t("communityImpact.learnMore")}
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Dental camp" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-xl bg-primary opacity-20 blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-xl bg-primary opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
