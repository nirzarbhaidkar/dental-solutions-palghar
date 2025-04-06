
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Ready to Improve Your Dental Health?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule an Appointment
          </h2>
          <p className="text-gray-600 mb-8">
            Take the first step towards a healthier smile by scheduling an appointment with our experienced dental professionals.
          </p>
          <Button 
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg"
            onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
          >
            Book Your Appointment Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
