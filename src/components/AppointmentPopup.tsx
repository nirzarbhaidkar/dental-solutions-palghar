import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Phone, Clock, Award, Building, HeartHandshake, Timer, CheckCircle2, Calendar } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

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
    { icon: <Award className="h-5 w-5" />, text: "15+ Years of Excellence", color: "from-amber-500 to-orange-600" },
    { icon: <Building className="h-5 w-5" />, text: "State-of-the-Art Facility", color: "from-blue-500 to-cyan-600" },
    { icon: <HeartHandshake className="h-5 w-5" />, text: "10,000+ Happy Patients", color: "from-rose-500 to-pink-600" },
    { icon: <Timer className="h-5 w-5" />, text: "Same-Day Appointments", color: "from-green-500 to-emerald-600" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className={`${isMobile ? 'w-[95%]' : 'sm:max-w-md'} p-0`}
      >
        <DialogHeader className="p-6 pb-4 bg-primary text-white">
          <DialogTitle className="text-xl font-bold">
            Book Your Appointment
          </DialogTitle>
          <DialogDescription className="text-white/90 text-sm">
            Get in touch with us today
          </DialogDescription>
        </DialogHeader>

        <div className="p-6 space-y-4">
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 text-primary">
                  {benefit.icon}
                </div>
                <span className="text-sm text-foreground">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-muted p-4 rounded-lg flex items-center gap-3">
            <Clock className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold">Clinic Hours</p>
              <p className="text-xs text-muted-foreground">
                Mon-Sat: 9:30am-2pm & 5pm-9pm
              </p>
            </div>
          </div>
        </div>
        
        <DialogFooter className="px-6 pb-6 flex-col gap-3">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
            onClick={handleBookAppointment}
          >
            <Calendar className="h-5 w-5 mr-2" /> 
            Schedule an Appointment
          </Button>
          <Button 
            className="w-full" 
            variant="outline"
            onClick={handleCall}
          >
            <Phone className="h-5 w-5 mr-2" /> 
            Call +91 86008 92884
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
