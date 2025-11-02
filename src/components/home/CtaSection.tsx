import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock, MapPin } from "lucide-react";
import { toast } from "sonner";

const CtaSection = () => {
  const handleBookAppointment = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  const handleCallNow = () => {
    window.open("tel:+918600892884");
  };


  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Schedule Your Appointment
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Take the first step towards a healthier smile. Book your consultation today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg"
                className="px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
                onClick={handleBookAppointment}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
                onClick={handleCallNow}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Clinic Hours</p>
                  <p className="text-sm text-muted-foreground">Mon-Sat: 9:30am-2pm & 5pm-9pm</p>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">Emergency Services</p>
                  <p className="text-sm text-muted-foreground">Available 24/7 for urgent care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
