import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Calendar, X } from "lucide-react";
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


  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className={`${isMobile ? 'w-[95%] max-w-sm' : 'sm:max-w-md'} p-0 gap-0 border-0 overflow-hidden`}
        showCloseButton={false}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-10 rounded-full p-2 hover:bg-muted/80 transition-colors"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="relative bg-gradient-to-br from-background via-background to-primary/5">
          <div className="px-6 pt-12 pb-8 space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                Ready for a Healthier Smile?
              </h2>
              <p className="text-sm text-muted-foreground">
                Schedule your visit with us today
              </p>
            </div>

            {/* Stats - Minimal */}
            <div className="grid grid-cols-2 gap-3 py-4">
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-muted/30">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Patients</div>
              </div>
            </div>

            {/* Hours */}
            <div className="text-center py-3 px-4 rounded-lg border border-border/40 bg-card/50">
              <p className="text-xs font-medium text-muted-foreground mb-1">Clinic Hours</p>
              <p className="text-sm font-semibold text-foreground">Mon-Sat: 9:30am-2pm & 5pm-9pm</p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-2">
              <Button 
                size="lg"
                className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all" 
                onClick={handleBookAppointment}
              >
                <Calendar className="h-5 w-5 mr-2" /> 
                Book Appointment
              </Button>
              <Button 
                size="lg"
                className="w-full h-12 text-base font-semibold" 
                variant="outline"
                onClick={handleCall}
              >
                <Phone className="h-5 w-5 mr-2" /> 
                Call Now
              </Button>
            </div>

            {/* Trust badge */}
            <p className="text-center text-xs text-muted-foreground pt-2">
              Trusted by families across Palghar
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
