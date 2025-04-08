
import { Button } from "@/components/ui/button";
import { MessageSquare, Share, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-blue-100/50 to-transparent rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-t from-blue-100/50 to-transparent rounded-tr-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center rounded-3xl bg-white p-10 md:p-16 shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Ready to Improve Your Dental Health?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-700">
            Schedule an Appointment
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-lg">
            Take the first step towards a healthier smile by scheduling an appointment with our experienced dental professionals. We're committed to providing you with the best care possible.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button 
              className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg flex items-center rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
              onClick={handleBookAppointment}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Book Your Appointment Now
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg border-primary/30 text-primary hover:bg-primary/5 flex items-center rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105"
              onClick={handleShare}
            >
              <Share className="mr-2 h-5 w-5" />
              Share With Friends
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
