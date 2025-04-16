
import React from "react";
import { Phone } from "lucide-react";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FAQContactSection = () => {
  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/918600892884?text=Hello%2C%20I%20have%20a%20question%20about%20your%20dental%20services.%20Can%20you%20help%20me%3F",
      "_blank"
    );
    toast.success("Opening WhatsApp to ask your question");
  };

  return (
    <div className="mt-10 text-center">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="bg-white hover:bg-blue-50 border-primary/30 text-primary">
            Have More Questions?
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl text-primary">Still Have Questions?</AlertDialogTitle>
            <AlertDialogDescription>
              Our team is ready to help you with any questions you might have about our dental services.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="grid grid-cols-1 gap-3 mt-2">
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white w-full justify-start" 
              onClick={handleWhatsAppContact}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Ask on WhatsApp
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white w-full justify-start"
              onClick={() => window.location.href = "tel:+918600892884"}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us Directly
            </Button>
          </div>
          <AlertDialogFooter className="mt-4">
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default FAQContactSection;
