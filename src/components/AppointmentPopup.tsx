import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Phone, Sparkles, Clock, Award, Building, HeartHandshake, Timer } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // Handle cases where documentHeight is 0 to avoid division by zero
      if (documentHeight === 0) return;
      
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
      if (
        scrollPercentage >= 80 && 
        !hasShown && 
        !sessionStorage.getItem('appointmentPopupShown')
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('appointmentPopupShown', 'true');
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Check shortly after load in case user is already scrolled down
    const timeoutId = setTimeout(handleScroll, 500);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    }
  }, [hasShown]);

  const handleBookAppointment = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!",
      "_blank"
    );
    toast.success("Opening WhatsApp to book your appointment");
    setIsOpen(false);
  };

  const handleCall = () => {
    window.location.href = "tel:+918600892884";
    toast.success("Initiating call to our clinic");
    setIsOpen(false);
  };

  const benefits = [
    { icon: <Award className="h-5 w-5 text-primary" />, text: "Award-Winning Dental Care" },
    { icon: <Building className="h-5 w-5 text-primary" />, text: "State-of-the-Art Clinic" },
    { icon: <HeartHandshake className="h-5 w-5 text-primary" />, text: "Personalized Patient Approach" },
    { icon: <Timer className="h-5 w-5 text-primary" />, text: "Minimal Wait Times" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        showCloseButton={false}
        className={`${isMobile ? 'w-[95%] max-h-[90vh] overflow-y-auto' : 'sm:max-w-md'} p-0 bg-white rounded-xl shadow-2xl border-0`}
      >
        <div className="p-6 bg-primary text-primary-foreground rounded-t-xl relative">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-full">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-bold text-white">Book Your Appointment</DialogTitle>
                <DialogDescription className="text-white/80 mt-1">
                  Your smile deserves the best care.
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <DialogClose asChild>
            <button className="absolute top-3 right-3 p-1 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </DialogClose>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 bg-primary/10 p-2 rounded-full">{benefit.icon}</div>
                  <span className="text-sm text-gray-700 font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Card className="bg-muted/40 border-0">
              <CardContent className="p-4 flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">Clinic Hours</p>
                  <p className="text-xs text-gray-600">Mon-Sat: 9:30am-2pm, 5pm-9pm</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <DialogFooter className="px-6 pb-6 pt-0 flex-col sm:flex-col sm:space-x-0 gap-3">
          <Button 
            className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-6 text-base font-bold shadow-lg shadow-green-500/20" 
            onClick={handleBookAppointment}
          >
            <WhatsAppIcon className="h-5 w-5 mr-2" /> Book on WhatsApp
          </Button>
          <Button 
            className="w-full text-primary hover:bg-primary/10" 
            variant="ghost"
            onClick={handleCall}
          >
            <Phone className="h-4 w-4 mr-2" /> Or Call Us: +91 86008 92884
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
