import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import { Helmet } from "react-helmet-async";
import { Share, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const QuizSection = () => {
  const shareQuiz = (platform: string) => {
    const url = `${window.location.origin}${window.location.pathname}#dental-health-assessment";
    const title = "Dental Health Assessment Quiz | Dental Solutions Palghar";
    const description = "Take this dental health quiz from Dental Solutions Palghar to improve your oral health!";
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast.success("Quiz link copied to clipboard!");
        }).catch(() => {
          toast.error("Failed to copy link");
        });
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(description + ' ' + url)}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: title,
            text: description,
            url: url,
          }).catch(err => console.error('Error sharing:', err));
        }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="dental-health-assessment">
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Dental Health Assessment Quiz",
                "description": "Take our comprehensive dental health assessment to evaluate your oral hygiene practices and get personalized recommendations.",
                "url": "https://dentalsolutionspalghar.com/#dental-health-assessment"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            Dental Health Assessment
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Test Your Dental Knowledge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take our comprehensive dental health assessment to see how well you're caring for your teeth and gums.
            Get personalized recommendations based on your specific dental habits.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('facebook')}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-4 w-4 mr-1 text-blue-600" /> Share
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('twitter')}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-4 w-4 mr-1 text-blue-400" /> Tweet
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="rounded-full" 
              onClick={() => shareQuiz('whatsapp')}
              aria-label="Share on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1 text-green-500">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.2.301-.767.966-.94 1.164-.173.199-.347.223-.647.075-.3-.15-1.269-.467-2.416-1.483-.893-.795-1.494-1.78-1.67-2.079-.173-.3-.018-.462.13-.61.134-.133.3-.347.45-.52.149-.174.199-.3.299-.5.1-.2.05-.374-.05-.524-.1-.15-.673-1.62-.92-2.21-.243-.582-.486-.5-.673-.51-.172-.008-.371-.01-.571-.01-.2 0-.522.074-.796.375-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.218 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.223-.572-.372m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg> Share
            </Button>
          </div>
        </div>
        
        <DentalHealthQuiz />
      </div>
    </section>
  );
};

export default QuizSection;
