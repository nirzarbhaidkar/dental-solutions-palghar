import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Phone, Sparkles, Clock, Award, Building, HeartHandshake, Timer, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { motion, AnimatePresence } from "framer-motion";

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
      <AnimatePresence>
        {isOpen && (
          <DialogContent 
            showCloseButton={false}
            className={`${isMobile ? 'w-[95%] max-h-[90vh] overflow-y-auto' : 'sm:max-w-lg'} p-0 bg-gradient-to-br from-white via-blue-50/30 to-white rounded-2xl shadow-2xl border-0 overflow-hidden`}
          >
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 pointer-events-none" />
            
            {/* Animated header */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-gradient-to-r from-primary via-blue-600 to-primary text-white rounded-t-2xl relative overflow-hidden"
            >
              {/* Floating sparkles animation */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                />
              </div>

              <DialogHeader className="relative z-10">
                <div className="flex items-start gap-3">
                  <motion.div 
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl shadow-lg"
                  >
                    <Sparkles className="h-7 w-7 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-white mb-1">
                      Ready for Your Best Smile?
                    </DialogTitle>
                    <DialogDescription className="text-white/90 text-sm md:text-base">
                      Book your appointment in just 30 seconds
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>
              <DialogClose asChild>
                <motion.button 
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </motion.button>
              </DialogClose>
            </motion.div>

            <div className="p-6 space-y-6 relative z-10">
              {/* Benefits section with enhanced design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Why Patients Choose Us
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className={`flex-shrink-0 bg-gradient-to-br ${benefit.color} p-2.5 rounded-lg text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {benefit.icon}
                        </div>
                        <span className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors">
                          {benefit.text}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Clinic hours with enhanced design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-sm">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-800 mb-1">We're Open!</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        <span className="font-semibold">Mon-Sat:</span> 9:30am-2pm & 5pm-9pm
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trust badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center justify-center gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-lg"
              >
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="font-medium">Trusted by 10,000+ patients since 2009</span>
              </motion.div>
            </div>
            
            {/* Enhanced CTA buttons */}
            <DialogFooter className="px-6 pb-6 pt-0 flex-col sm:flex-col sm:space-x-0 gap-3 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#25D366] text-white py-6 text-base font-bold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300" 
                  onClick={handleBookAppointment}
                >
                  <WhatsAppIcon className="h-5 w-5 mr-2" /> 
                  Book Now on WhatsApp
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full border-2 border-primary/20 text-primary hover:bg-primary/10 hover:border-primary/40 py-6 transition-all duration-300" 
                  variant="outline"
                  onClick={handleCall}
                >
                  <Phone className="h-5 w-5 mr-2" /> 
                  Call Us: +91 86008 92884
                </Button>
              </motion.div>
            </DialogFooter>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
};

export default AppointmentPopup;
