
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Business Owner",
    content: "I had a dental emergency while visiting Palghar, and Dr. Bhaidkar accommodated me immediately. The treatment was painless and effective. The clinic is modern, clean, and the staff is friendly. Highly recommended!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "Priya Patel",
    role: "Teacher",
    content: "After years of being afraid of dentists, I finally found Dental Solutions Palghar. Dr. Bhaidkar is gentle, explains everything clearly, and made my root canal completely painless. The clinic has state-of-the-art equipment and follows all hygiene protocols.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Rajesh Gupta",
    role: "IT Professional",
    content: "My experience with teeth whitening at Dental Solutions was excellent. The results exceeded my expectations, and the procedure was comfortable. Dr. Bhaidkar provided great advice on maintaining my results. The clinic is conveniently located with ample parking.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Ananya Shah",
    role: "Student",
    content: "I got my braces at Dental Solutions Palghar, and I'm incredibly happy with the progress. Dr. Bhaidkar is knowledgeable and friendly, making each visit pleasant. The staff always accommodates my schedule, and the clinic is immaculately clean.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const TestimonialsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            {t("testimonials.title")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
