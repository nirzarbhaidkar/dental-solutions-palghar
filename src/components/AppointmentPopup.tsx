
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Phone } from "lucide-react";
import { toast } from "sonner";

const AppointmentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Function to check scroll position and trigger popup
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
      // Debug scroll position
      console.log(`Scroll: ${scrollPercentage.toFixed(1)}%`);
      
      // Show popup when user has scrolled 85% of the page height
      if (
        scrollPercentage >= 85 && 
        !hasShown && 
        !sessionStorage.getItem('appointmentPopupShown')
      ) {
        console.log("Triggering appointment popup");
        setIsOpen(true);
        setHasShown(true);
        // Set a flag in sessionStorage to prevent showing again in this session
        sessionStorage.setItem('appointmentPopupShown', 'true');
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check for very short pages
    setTimeout(handleScroll, 2000);
    
    // Clean up
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
            Get Expert Dental Care Today!
          </DialogTitle>
          <DialogDescription className="text-base">
            Don't wait to address your dental concerns. Our experienced team is ready to provide immediate care and consultation.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="bg-primary/5 rounded-lg p-4">
            <p className="text-sm font-medium text-primary mb-2">Why Choose Us:</p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5">
              <li>Immediate appointments available</li>
              <li>Expert dental consultation</li>
              <li>State-of-the-art facilities</li>
              <li>Affordable treatment plans</li>
            </ul>
          </div>
          
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-sm text-green-800 font-medium">🕒 Limited Time Offer!</p>
            <p className="text-sm text-green-700 mt-1">Book now and get a free dental check-up with your consultation.</p>
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
              className="bg-green-600 hover:bg-green-700 text-white" 
              onClick={handleBookAppointment}
            >
              <MessageSquare className="h-4 w-4 mr-1" /> Book on WhatsApp
            </Button>
            <Button 
              variant="secondary"
              className="bg-primary hover:bg-primary/90 text-white" 
              onClick={handleCall}
            >
              <Phone className="h-4 w-4 mr-1" /> Call Now
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
