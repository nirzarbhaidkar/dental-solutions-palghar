import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquare, X, Phone, Sparkles, Clock, Calendar, MapPin, Shield, Star } from "lucide-react";
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

  const benefits = [
    { icon: <Star className="h-4 w-4 text-yellow-500" />, text: "Expert dental specialists" },
    { icon: <Shield className="h-4 w-4 text-blue-500" />, text: "Modern, state-of-the-art facilities" },
    { icon: <Sparkles className="h-4 w-4 text-purple-500" />, text: "Comfortable & caring environment" },
    { icon: <Clock className="h-4 w-4 text-green-500" />, text: "Efficient & timely treatment" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent 
        className={`${isMobile ? 'w-[95%] max-h-[90vh] overflow-y-auto' : 'sm:max-w-lg'} bg-white p-0 rounded-xl shadow-xl border-0`}
      >
        <div className="bg-gradient-to-r from-primary/90 to-blue-600 text-white p-6 rounded-t-xl">
          <DialogHeader className="mb-1 w-full">
            <div className="flex items-center mb-2">
              <Sparkles className="h-6 w-6 text-white mr-2" />
              <DialogTitle className="text-2xl font-bold text-white">
                Your Smile Matters to Us
              </DialogTitle>
            </div>
            <DialogDescription className="text-base text-white/90">
              Book your dental appointment today and take the first step towards a healthier smile.
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
            <p className="font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2 inline" /> 
              <span className="mr-2">Limited Time Offer:</span> 
              <span className="bg-yellow-500 text-black px-2 py-0.5 rounded">20% OFF</span> 
              <span className="ml-2">on first consultation</span>
            </p>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-5">
            <h3 className="text-base font-semibold text-gray-900 mb-3">Why Choose Dental Solutions Palghar:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                  {benefit.icon}
                  <span className="text-sm text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-5">
            <div className="bg-primary/5 rounded-lg p-3">
              <h3 className="font-medium text-primary mb-2 text-sm">Our Services Include:</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-xs text-gray-700">• General Dentistry</div>
                <div className="text-xs text-gray-700">• Cosmetic Dentistry</div>
                <div className="text-xs text-gray-700">• Orthodontics</div>
                <div className="text-xs text-gray-700">• Dental Implants</div>
                <div className="text-xs text-gray-700">• Root Canal Treatment</div>
                <div className="text-xs text-gray-700">• Periodontal Treatment</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <Card className="bg-muted/30 border-gray-100">
              <CardContent className="p-3 flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-gray-900">Location:</strong>
                  <p className="text-gray-600">Dental Solutions, Near Court, Palghar</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-muted/30 border-gray-100">
              <CardContent className="p-3 flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-xs">
                  <strong className="text-gray-900">Hours:</strong>
                  <p className="text-gray-600">Mon-Sat: 9:30am-2pm, 5pm-9pm</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-2">
            <Button 
              className="text-gray-500 hover:bg-gray-50 flex-1 order-3 sm:order-1" 
              onClick={handleClose}
            >
              <X className="h-4 w-4 mr-1" /> Close
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
              <WhatsAppIcon className="h-4 w-4 mr-1" /> Book on WhatsApp
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentPopup;
