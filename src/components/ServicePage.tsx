
import React from "react";
import { useParams, Link } from "react-router-dom";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Phone } from "lucide-react";

interface ServiceContent {
  title: string;
  description: string;
  image: string;
  longDescription: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceContent: Record<string, ServiceContent> = {
  "general-dentistry": {
    title: "General Dentistry",
    description: "Comprehensive dental care for the whole family",
    image: "/services/general-dentistry.jpg",
    longDescription: [
      "Our general dentistry services form the foundation of good oral health, providing comprehensive care for patients of all ages.",
      "We focus on preventive care and early intervention to maintain your oral health and prevent serious dental issues from developing."
    ],
    benefits: [
      "Regular check-ups and cleanings",
      "Early detection of dental problems",
      "Preventive care and education",
      "Complete oral health maintenance",
      "Family-friendly environment"
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Thorough examination and discussion of your dental health goals"
      },
      {
        title: "Treatment Planning",
        description: "Customized care plan based on your specific needs"
      },
      {
        title: "Regular Maintenance",
        description: "Ongoing care to maintain optimal oral health"
      }
    ],
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting every 6 months for regular check-ups and cleanings."
      },
      {
        question: "What does a routine check-up include?",
        answer: "A routine check-up includes dental cleaning, examination, X-rays if needed, and oral cancer screening."
      }
    ]
  },
  // ... Similar content structure for other services
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceContent[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you are looking for could not be found.</p>
            <Link to="/#services">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeadContent 
        title={`${service.title} | Dental Solutions Palghar`}
        description={service.description}
        image={service.image}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/#services" className="text-primary hover:underline inline-flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          
          <div className="rounded-2xl overflow-hidden mb-12">
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          
          <div className="prose max-w-none mb-12">
            {service.longDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Book an appointment today and take the first step towards better dental health.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-primary text-white"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment%20for%20" + encodeURIComponent(service.title) + "%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("tel:+918600892884")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
