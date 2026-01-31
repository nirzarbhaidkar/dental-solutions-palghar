import { Button } from "@/components/ui/button";
import { Calendar, Phone, Clock, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ScrollReveal from "@/components/ui/scroll-reveal";

const CtaSection = () => {
  const handleBookAppointment = () => {
    window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank");
  };

  const handleCallNow = () => {
    window.open("tel:+918600892884");
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative rounded-3xl overflow-hidden"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card background with gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-10" />
              <div className="absolute inset-[1px] bg-card rounded-3xl" />
              
              <div className="relative p-8 md:p-12 lg:p-16">
                {/* Badge */}
                <div className="flex justify-center mb-8">
                  <span className="badge-premium">
                    <Sparkles className="w-4 h-4" />
                    Ready to Transform Your Smile?
                  </span>
                </div>

                {/* Heading */}
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    Schedule Your <span className="gradient-text">Appointment</span>
                  </h2>
                  <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Take the first step towards a healthier smile. Book your consultation today and experience world-class dental care.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <Button 
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-6 text-lg shadow-elevated hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group"
                    onClick={handleBookAppointment}
                  >
                    <WhatsAppIcon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Book on WhatsApp
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                    onClick={handleCallNow}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </div>

                {/* Info cards */}
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div 
                    className="group bg-muted/50 hover:bg-muted p-5 rounded-xl flex items-start gap-4 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Clinic Hours</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9:30am-2pm & 5pm-9pm</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="group bg-muted/50 hover:bg-muted p-5 rounded-xl flex items-start gap-4 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Emergency Services</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for urgent care</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
