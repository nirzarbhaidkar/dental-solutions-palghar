
import React from "react";

const LocationSection = () => {
  return (
    <section id="location" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Clinics
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find us easily with Google Maps directions to our dental clinics in Palghar.
          </p>
        </div>

        <div className="space-y-8 max-w-5xl mx-auto">
          {/* First Location */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Dental Solutions - Main Clinic</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.426978290518!2d72.76597319999999!3d19.694437699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71cdd80189c71%3A0x249440e72a30c6bb!2sDental%20Solutions!5e0!3m2!1sen!2sin!4v1740194859355!5m2!1sen!2sin!4v1740194859355"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Solutions main clinic location in Palghar - Google Maps"
                className="w-full hover:opacity-95 transition-opacity"
              ></iframe>
            </div>
          </div>

          {/* Second Location */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-center">Dental Solutions - Mahim (Palghar)</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.526924728336!2d72.72323709999999!3d19.647512799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be702bd1f04d2a7%3A0x50080b4c3331e358!2sDental%20Solutions%20Mahim(Palghar)!5e0!3m2!1sen!2sin!4v1762010519758!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dental Solutions Mahim (Palghar) clinic location - Google Maps"
                className="w-full hover:opacity-95 transition-opacity"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
