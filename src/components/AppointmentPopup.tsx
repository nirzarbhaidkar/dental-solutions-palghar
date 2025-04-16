
import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Phone, Sparkles, Clock, Calendar } from "lucide-react";
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
      <DialogContent 
        className={`${isMobile ? 'w-[95%] max-h-[90vh] overflow-y-auto' : 'sm:max-w-lg'} bg-white p-6 rounded-xl shadow-lg border-0`}
      >
        <div className="flex flex-col items-center text-center">
          <DialogHeader className="mb-4 w-full">
            <div className="flex items-center justify-center mb-2">
              <Sparkles className="h-6 w-6 text-[#1EAEDB] mr-2" />
              <DialogTitle className="text-2xl font-bold text-[#0FA0CE]">
                Book Your Dental Appointment
              </DialogTitle>
            </div>
            <DialogDescription className="text-base text-gray-600 mt-1">
              Take the first step towards a healthier smile. Our expert team is ready to provide you with exceptional dental care.
            </DialogDescription>
          </DialogHeader>
          
          <div className="w-full mb-5">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm font-semibold text-[#0FA0CE] mb-2">Why Choose Us:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <Sparkles className="h-4 w-4 text-[#0FA0CE] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Expert dental specialists</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-4 w-4 text-[#0FA0CE] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Modern, state-of-the-art facilities</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-4 w-4 text-[#0FA0CE] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable & caring environment</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-4 w-4 text-[#0FA0CE] mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personalized treatment plans</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full mb-4">
            <div className="flex flex-col md:flex-row items-stretch gap-3 text-left">
              <div className="flex-1 border border-gray-100 rounded-lg p-3 bg-gray-50 flex items-center">
                <Calendar className="h-5 w-5 text-[#0FA0CE] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Flexible Scheduling</h4>
                  <p className="text-xs text-gray-500">Appointments available 6 days a week</p>
                </div>
              </div>
              <div className="flex-1 border border-gray-100 rounded-lg p-3 bg-gray-50 flex items-center">
                <Clock className="h-5 w-5 text-[#0FA0CE] mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Quick Response</h4>
                  <p className="text-xs text-gray-500">Get confirmation within 30 minutes</p>
                </div>
              </div>
            </div>
          </div>
          
          <DialogFooter className="w-full flex flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              className="text-gray-500 hover:bg-gray-50 flex-1 order-3 sm:order-1" 
              onClick={handleClose}
            >
              <X className="h-4 w-4 mr-1" /> Not Now
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white flex-1 order-1 sm:order-2"
              onClick={handleCall}
            >
              <Phone className="h-4 w-4 mr-1" /> Call Now
            </Button>
            <Button 
              className="bg-[#1EAEDB] hover:bg-[#1EAEDB]/90 text-white flex-1 order-2 sm:order-3" 
              onClick={handleBookAppointment}
            >
              <MessageSquare className="h-4 w-4 mr-1" /> Book on WhatsApp
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
