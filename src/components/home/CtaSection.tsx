
import { Button } from "@/components/ui/button";
import { MessageSquare, Share, Calendar, Phone } from "lucide-react";
import { toast } from "sonner";

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
