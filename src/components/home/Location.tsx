
import React from "react";

const Location = () => {
  return (
    <section id="location" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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

        <div className="rounded-2xl overflow-hidden shadow-lg">
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
    </section>
  );
};

export default Location;
