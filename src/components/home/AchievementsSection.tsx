
import React from "react";
import { Building2, Users, Award, User, Stethoscope, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Building2 className="h-12 w-12 text-primary" />,
      number: "15+",
      title: "Years in Palghar"
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      number: "10000+",
      title: "Happy Patients"
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      number: "50+",
      title: "Dentistry Awards"
    },
    {
      icon: <User className="h-12 w-12 text-primary" />,
      number: "25+",
      title: "Expert Staff"
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-primary" />,
      number: "5000+",
      title: "Implants Placed"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-primary" />,
      number: "1000+",
      title: "5-Star Reviews"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-3xl">
            For over 15 years, Dental Solutions Palghar has been delivering exceptional dental care 
            with state-of-the-art technology and a compassionate approach.
          </p>
          <div className="h-1 w-20 bg-primary mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {achievements.map((item, index) => (
            <Card 
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 border-t-2 border-t-primary overflow-hidden"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2 text-gray-800">{item.number}</h3>
                <p className="text-gray-600 text-sm">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
