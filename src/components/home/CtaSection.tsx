import { Button } from "@/components/ui/button";
import { MessageSquare, Share, Calendar, Phone } from "lucide-react";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const CtaSection = () => {
  const handleBookAppointment = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  const handleCallNow = () => {
    window.open("tel:+918600892884");
  };

  const handleShare = () => {
    const url = window.location.origin;
    const title = "Dental Solutions Palghar - Best Dental Clinic in Palghar";
    const text = "Check out Dental Solutions Palghar for quality dental care services!";

    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url,
      }).catch(err => console.error('Error sharing:', err));
    } else {
      navigator.clipboard.writeText(url).then(() => {
        toast.success("Website link copied to clipboard!");
      }).catch(() => {
        toast.error("Failed to copy link");
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-accent to-primary/5">
      <div className="container mx-auto px-4">
        <div className="bg-white p-10 rounded-3xl shadow-xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Ready to Improve Your Dental Health?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule an Appointment
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards a healthier smile by scheduling an appointment with our experienced dental professionals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center shadow-lg hover:shadow-xl transition-all rounded-full"
                onClick={handleBookAppointment}
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" />
                Book Your Appointment Now
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg border-primary/30 text-primary hover:bg-primary/5 flex items-center rounded-full"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                variant="outline"
                className="px-8 py-6 text-lg border-primary/30 text-primary hover:bg-primary/5 flex items-center rounded-full"
                onClick={handleShare}
              >
                <Share className="mr-2 h-5 w-5" />
                Share With Friends
              </Button>
            </div>
          </div>

          <div className="mt-12 bg-muted p-6 rounded-xl">
            <div className="flex items-center justify-center gap-2 text-center text-gray-600">
              <Calendar className="h-5 w-5 text-primary" />
              <p>Available for appointments 7 days a week. Emergency dental services available 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
