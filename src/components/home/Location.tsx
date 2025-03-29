
import React from "react";

const Location = () => {
  return (
    <section id="dental-clinic-palghar-location" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Dental Clinic Near Me in Palghar
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit the Best Dentist in Palghar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find Dental Solutions Palghar, the top-rated dental clinic near you. We offer teeth whitening, dental implants, and complete dental care services at affordable prices.
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
            title="Dental Solutions Palghar Location - Dentist Near Me"
          ></iframe>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            <strong>Dental Solutions Palghar</strong><br />
            Shop number 5,6, Apoorva Apartments, Mahim Rd, next to Chetna Classes<br />
            Palghar, Maharashtra 401404<br />
            <strong>Phone:</strong> <a href="tel:+918600892884" className="text-primary hover:underline">+91 8600 892 884</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;
