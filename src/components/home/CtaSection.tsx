
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-accent/50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block bg-white px-4 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
            Ready to Improve Your Dental Health?
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Schedule an Appointment Today
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Take the first step towards a healthier smile by scheduling an appointment with our experienced dental professionals. We're here to provide the care you deserve.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary text-white hover:bg-primary-600 px-8 py-6 text-lg rounded-full shadow-soft hover:shadow-hover transition-all group flex items-center justify-center"
              onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Book via WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg border-primary text-primary hover:bg-white rounded-full shadow-sm hover:shadow-md transition-all group flex items-center justify-center"
              onClick={() => window.open("tel:+918600892884")}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Join Our Next Community Camp
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-soft max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Preventive Care</h3>
              <p className="text-gray-600">Regular checkups to prevent dental issues</p>
            </div>
            
            <div className="p-4">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Comfortable Treatment</h3>
              <p className="text-gray-600">Patient comfort is our top priority</p>
            </div>
            
            <div className="p-4">
              <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                  <path d="M9 22v-4h6v4"></path>
                  <path d="M8 6h.01"></path>
                  <path d="M16 6h.01"></path>
                  <path d="M12 6h.01"></path>
                  <path d="M12 10h.01"></path>
                  <path d="M12 14h.01"></path>
                  <path d="M16 10h.01"></path>
                  <path d="M16 14h.01"></path>
                  <path d="M8 10h.01"></path>
                  <path d="M8 14h.01"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art dental equipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
