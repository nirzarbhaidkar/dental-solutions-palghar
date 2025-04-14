import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Phone } from "lucide-react";
import { toast } from "sonner";

const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
      console.log(`Scroll: ${scrollPercentage.toFixed(1)}%`);
      
      if (
        scrollPercentage >= 85 && 
        !hasShown && 
        !sessionStorage.getItem('appointmentPopupShown')
      ) {
        console.log("Triggering appointment popup");
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('appointmentPopupShown', 'true');
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 2000);
    
    return () => window.removeEventListener("scroll", handleScroll);
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-blue-50/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Book Your Dental Appointment Today!
          </DialogTitle>
          <DialogDescription className="text-base">
            Take the first step towards a healthier smile. Our expert team is ready to provide you with exceptional dental care.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <div className="bg-primary/5 rounded-lg p-4 space-y-3">
            <p className="text-sm font-medium text-primary">Why Choose Us:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              <li>Expert team of dental specialists</li>
              <li>Modern, state-of-the-art facilities</li>
              <li>Comfortable & caring environment</li>
              <li>Personalized treatment plans</li>
            </ul>
          </div>
        </div>
        
        <DialogFooter className="sm:justify-between flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            className="text-gray-500 hover:bg-gray-50" 
            onClick={handleClose}
          >
            <X className="h-4 w-4 mr-1" /> Not Now
          </Button>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={handleCall}
            >
              <Phone className="h-4 w-4 mr-1" /> Call Now
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white" 
              onClick={handleBookAppointment}
            >
              <MessageSquare className="h-4 w-4 mr-1" /> Book on WhatsApp
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
