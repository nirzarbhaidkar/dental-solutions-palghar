
import { Button } from "@/components/ui/button";
import { MessageSquare, Share, Copy } from "lucide-react";
import { toast } from "sonner";

const CtaSection = () => {
  const handleBookAppointment = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg flex items-center"
              onClick={handleBookAppointment}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Book Your Appointment Now
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg border-primary/30 text-primary hover:bg-primary/5 flex items-center"
              onClick={handleShare}
            >
              <Share className="mr-2 h-5 w-5" />
              Share With Friends
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
