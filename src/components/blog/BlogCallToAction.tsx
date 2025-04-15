
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "lucide-react";

const BlogCallToAction = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%20read%20your%20article%20and%20I'd%20like%20to%20book%20an%20appointment%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!",
      "_blank"
    );
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-xl p-6 md:p-8 mt-8 animate-fade-up">
      <h3 className="text-3xl font-bold text-red-600 mb-4 leading-tight">
        80% of People Avoid the Dentist Until It's Too Late!
      </h3>
      <p className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Don't wait for the pain — take charge of your dental health today.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Regular dental check-ups and cleanings are key to preventing serious issues and keeping your smile bright. 
        From cosmetic care to advanced treatments, we're here to support your entire family's oral health.
      </p>
      
      <Button 
        onClick={handleWhatsAppClick}
        className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-medium text-lg py-6 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
      >
        <WhatsappIcon className="w-6 h-6" />
        Book a WhatsApp Appointment
      </Button>
    </div>
  );
};

export default BlogCallToAction;
