
import React from "react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-muted" id="dentist-near-me-booking">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit the Best Dentist in Palghar?</h2>
          <p className="text-gray-600 mb-8">
            Schedule an appointment with our experienced dental professionals at Dental Solutions Palghar today. Whether you need teeth whitening, dental implants, or are looking for a reliable dental clinic near you, we're here to help!
          </p>
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            Book Your Appointment with Palghar's Top Dentist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
