
import { Button } from "@/components/ui/button";

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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Book a WhatsApp Appointment
      </Button>
    </div>
  );
};

export default BlogCallToAction;
