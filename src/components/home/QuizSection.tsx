import React from "react";
import DentalHealthQuiz from "@/components/DentalHealthQuiz";
import { Helmet } from "react-helmet-async";
import { Share, Facebook, Twitter, Linkedin, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

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
              <WhatsAppIcon className="h-4 w-4 mr-1 text-green-500" /> Share
            </Button>
          </div>
        </div>
        
        <DentalHealthQuiz />
      </div>
    </section>
  );
};

export default QuizSection;
