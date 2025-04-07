
import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Visit Our Clinic
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us easily with Google Maps directions to our dental clinic in Palghar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-soft hover:shadow-hover transition-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.426978290518!2d72.76597319999999!3d19.694437699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cdd80189c71%3A0x249440e72a30c6bb!2sDental%20Solutions!5e0!3m2!1sen!2sin!4v1740194859355!5m2!1sen!2sin!4v1740194859355"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-2xl shadow-soft">
            <h3 className="text-2xl font-bold mb-6 font-display">Clinic Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-gray-700">
                    Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes, next to National College, Shri Ram Nagar, Vishnu Nagar, Palghar, Maharashtra 401404
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contact</h4>
                  <p className="text-gray-700">
                    <a href="tel:+918600892884" className="hover:text-primary transition-colors">
                      +91 8600892884
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full mr-4 shadow-sm">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                  <div className="space-y-1 text-gray-700">
                    <p>Monday - Saturday: 9:30 am–2 pm, 5–9 pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="https://www.google.com/maps/place/Dental+Solutions/@19.6944377,72.7659732,17z/data=!4m6!3m5!1s0x3be71cdd80189c71:0x249440e72a30c6bb!8m2!3d19.6944377!4d72.7659732!16s%2Fg%2F11j84fm37p?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block bg-primary text-white py-3 px-6 rounded-full shadow-sm hover:shadow-md hover:bg-primary-600 transition-all"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
