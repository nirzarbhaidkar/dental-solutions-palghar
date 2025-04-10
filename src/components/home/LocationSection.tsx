
import React from "react";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us easily with Google Maps directions to our dental clinic in Palghar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Our Address</h3>
                <p className="text-gray-600">
                  Dental Solutions, Shop No 9, Shree Samarth Plaza, Behind HP Petrol Pump, Palghar (W), Maharashtra, 401404
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Working Hours</h3>
                <p className="text-gray-600">
                  Monday - Saturday: 10:00 AM - 8:00 PM<br />
                  Sunday: 10:00 AM - 2:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                <p className="text-gray-600">
                  Phone: +91 8600892884<br />
                  Email: info@dentalsolutionspalghar.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.426978290518!2d72.76597319999999!3d19.694437699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cdd80189c71%3A0x249440e72a30c6bb!2sDental%20Solutions!5e0!3m2!1sen!2sin!4v1740194859355!5m2!1sen!2sin!4v1740194859355"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full hover:opacity-95 transition-opacity"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
