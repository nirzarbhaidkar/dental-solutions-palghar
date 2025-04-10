
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { toast } from "sonner";

const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show popup when user has scrolled 85% of the page height
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (
        scrollPosition >= documentHeight * 0.85 && 
        !hasShown && 
        !sessionStorage.getItem('appointmentPopupShown')
      ) {
        setIsOpen(true);
        setHasShown(true);
        // Set a flag in sessionStorage to prevent showing again in this session
        sessionStorage.setItem('appointmentPopupShown', 'true');
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-primary">Book Your Dental Appointment</DialogTitle>
          <DialogDescription>
            Take the first step towards a healthier smile today! Our team is ready to provide you with exceptional dental care.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-gray-500 mb-2">Benefits of booking now:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Priority appointment scheduling</li>
            <li>Personalized treatment plans</li>
            <li>Expert dental consultation</li>
            <li>Convenient WhatsApp booking</li>
          </ul>
        </div>
        
        <DialogFooter className="sm:justify-between flex flex-col sm:flex-row gap-2">
          <Button 
            variant="outline" 
            className="text-gray-500" 
            onClick={handleClose}
          >
            <X className="h-4 w-4 mr-1" /> Maybe Later
          </Button>
          <Button 
            className="bg-primary text-white" 
            onClick={handleBookAppointment}
          >
            <MessageSquare className="h-4 w-4 mr-1" /> Book via WhatsApp
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
