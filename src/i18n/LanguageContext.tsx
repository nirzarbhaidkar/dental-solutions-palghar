import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "hi" | "mr";

export const LANGUAGES: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "mr", label: "Marathi", native: "मराठी" },
];

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.nri": "NRI Corner",
  "nav.location": "Location",
  "nav.testimonials": "Testimonials",
  "nav.faqs": "FAQs",
  "nav.blog": "Blog",
  "nav.menu": "Menu",
  "nav.followFb": "Follow on Facebook",
  "cta.bookNow": "Book Now",
  "cta.bookWhatsapp": "Book on WhatsApp",
  "cta.callClinic": "Call Clinic",
  "cta.callClinicFull": "Call +91 86008 92884",
  "cta.instantReply": "Instant reply · 24/7",
  "cta.talkToUsNow": "Talk to us now",
  "hero.badge.short": "10,000+ Happy Patients",
  "hero.badge.long": "Trusted by 10,000+ Happy Patients",
  "hero.subheadline":
    "Your trusted dental care partner in Palghar — modern technology, gentle hands, beautiful smiles.",
  "hero.headline1.title": "Best Dentist in Palghar for Your",
  "hero.headline1.highlight": "Perfect Smile",
  "hero.headline2.title": "Advanced Dental Technology in",
  "hero.headline2.highlight": "Palghar",
  "hero.headline3.title": "Trusted Dental Clinic in Palghar for",
  "hero.headline3.highlight": "Over 15 Years",
  "hero.headline4.title": "Affordable Dental Care in",
  "hero.headline4.highlight": "Palghar",
  "hero.trust.patients": "10,000+ Patients",
  "hero.trust.rating": "4.9★ Rating",
  "hero.trust.sameDay": "Same Day Care",
  "lang.label": "Language",
  "lang.weSpeak": "We speak English, हिन्दी & मराठी",
  "contact.title": "Contact Dental Solutions Palghar",
  "contact.subtitle":
    "Call, WhatsApp, email or visit our multispeciality dental clinic & implant centre on Mahim Rd, Palghar. Same-day appointments. 24/7 emergency dental care.",
  "contact.reachUs": "Reach Us",
  "contact.phoneWa": "Phone & WhatsApp",
  "contact.email": "Email",
  "contact.address": "Clinic Address",
  "contact.directions": "Get directions →",
  "contact.hours": "Opening Hours",
  "contact.hoursValue": "Mon – Sat: 9:30 AM – 2:00 PM & 5:00 PM – 9:00 PM",
  "contact.sunday": "Sunday: By appointment only",
  "contact.callToBook": "Call to Book",
  "contact.whatsappUs": "WhatsApp Us",
  "contact.reviewsTitle": "Real Google Reviews from Palghar Patients",
  "contact.reviewsSub":
    "4.9★ rated by hundreds of patients across Palghar, Boisar, Tarapur, Virar and Vasai. Live Google Reviews — unedited.",
};

const hi: Dict = {
  "nav.home": "होम",
  "nav.services": "सेवाएँ",
  "nav.nri": "NRI कॉर्नर",
  "nav.location": "स्थान",
  "nav.testimonials": "मरीज़ों के अनुभव",
  "nav.faqs": "सामान्य प्रश्न",
  "nav.blog": "ब्लॉग",
  "nav.menu": "मेन्यू",
  "nav.followFb": "फेसबुक पर फॉलो करें",
  "cta.bookNow": "अभी बुक करें",
  "cta.bookWhatsapp": "WhatsApp पर बुक करें",
  "cta.callClinic": "क्लिनिक को कॉल करें",
  "cta.callClinicFull": "कॉल करें +91 86008 92884",
  "cta.instantReply": "तुरंत जवाब · 24/7",
  "cta.talkToUsNow": "अभी हमसे बात करें",
  "hero.badge.short": "10,000+ खुश मरीज़",
  "hero.badge.long": "10,000+ खुश मरीज़ों का भरोसा",
  "hero.subheadline":
    "पालघर में आपका भरोसेमंद डेंटल केयर पार्टनर — आधुनिक तकनीक, कोमल हाथ, खूबसूरत मुस्कान।",
  "hero.headline1.title": "आपकी परफेक्ट मुस्कान के लिए पालघर के",
  "hero.headline1.highlight": "बेस्ट डेंटिस्ट",
  "hero.headline2.title": "पालघर में अत्याधुनिक",
  "hero.headline2.highlight": "डेंटल तकनीक",
  "hero.headline3.title": "पालघर का भरोसेमंद डेंटल क्लिनिक —",
  "hero.headline3.highlight": "15+ वर्षों से",
  "hero.headline4.title": "पालघर में किफायती",
  "hero.headline4.highlight": "डेंटल केयर",
  "hero.trust.patients": "10,000+ मरीज़",
  "hero.trust.rating": "4.9★ रेटिंग",
  "hero.trust.sameDay": "उसी दिन इलाज",
  "lang.label": "भाषा",
  "lang.weSpeak": "हम English, हिन्दी और मराठी बोलते हैं",
  "contact.title": "Dental Solutions Palghar से संपर्क करें",
  "contact.subtitle":
    "कॉल, WhatsApp, ईमेल या हमारे मल्टीस्पेशलिटी डेंटल क्लिनिक एवं इम्प्लांट सेंटर पर आइए (माहिम रोड, पालघर)। उसी दिन अपॉइंटमेंट। 24/7 इमरजेंसी डेंटल केयर।",
  "contact.reachUs": "हमसे संपर्क करें",
  "contact.phoneWa": "फ़ोन और WhatsApp",
  "contact.email": "ईमेल",
  "contact.address": "क्लिनिक का पता",
  "contact.directions": "दिशा-निर्देश पाएँ →",
  "contact.hours": "खुलने का समय",
  "contact.hoursValue": "सोम – शनि: सुबह 9:30 – दोपहर 2:00 और शाम 5:00 – रात 9:00",
  "contact.sunday": "रविवार: केवल अपॉइंटमेंट पर",
  "contact.callToBook": "बुक करने के लिए कॉल करें",
  "contact.whatsappUs": "WhatsApp करें",
  "contact.reviewsTitle": "पालघर के मरीज़ों के असली Google रिव्यू",
  "contact.reviewsSub":
    "पालघर, बोईसर, तारापुर, विरार और वसई के सैकड़ों मरीज़ों द्वारा 4.9★ रेटिंग। लाइव Google रिव्यू — बिना संपादन।",
};

const mr: Dict = {
  "nav.home": "होम",
  "nav.services": "सेवा",
  "nav.nri": "NRI कॉर्नर",
  "nav.location": "स्थान",
  "nav.testimonials": "रुग्णांचे अनुभव",
  "nav.faqs": "सामान्य प्रश्न",
  "nav.blog": "ब्लॉग",
  "nav.menu": "मेनू",
  "nav.followFb": "फेसबुकवर फॉलो करा",
  "cta.bookNow": "आत्ता बुक करा",
  "cta.bookWhatsapp": "WhatsApp वर बुक करा",
  "cta.callClinic": "क्लिनिकला कॉल करा",
  "cta.callClinicFull": "कॉल करा +91 86008 92884",
  "cta.instantReply": "तत्काळ उत्तर · 24/7",
  "cta.talkToUsNow": "आत्ता आमच्याशी बोला",
  "hero.badge.short": "10,000+ समाधानी रुग्ण",
  "hero.badge.long": "10,000+ समाधानी रुग्णांचा विश्वास",
  "hero.subheadline":
    "पालघरमधील तुमचा विश्वासू डेंटल केअर पार्टनर — आधुनिक तंत्रज्ञान, मृदू हात, सुंदर हास्य.",
  "hero.headline1.title": "तुमच्या परफेक्ट हास्यासाठी पालघरचे",
  "hero.headline1.highlight": "सर्वोत्तम डेंटिस्ट",
  "hero.headline2.title": "पालघरमध्ये अद्ययावत",
  "hero.headline2.highlight": "डेंटल तंत्रज्ञान",
  "hero.headline3.title": "पालघरचे विश्वासू डेंटल क्लिनिक —",
  "hero.headline3.highlight": "15+ वर्षांपासून",
  "hero.headline4.title": "पालघरमध्ये परवडणारी",
  "hero.headline4.highlight": "डेंटल केअर",
  "hero.trust.patients": "10,000+ रुग्ण",
  "hero.trust.rating": "4.9★ रेटिंग",
  "hero.trust.sameDay": "त्याच दिवशी उपचार",
  "lang.label": "भाषा",
  "lang.weSpeak": "आम्ही English, हिन्दी आणि मराठी बोलतो",
  "contact.title": "Dental Solutions Palghar शी संपर्क साधा",
  "contact.subtitle":
    "कॉल, WhatsApp, ईमेल किंवा आमच्या मल्टीस्पेशालिटी डेंटल क्लिनिक व इम्प्लांट सेंटरला भेट द्या (माहिम रोड, पालघर). त्याच दिवशी अपॉइंटमेंट. 24/7 इमर्जन्सी डेंटल केअर.",
  "contact.reachUs": "आमच्याशी संपर्क",
  "contact.phoneWa": "फोन आणि WhatsApp",
  "contact.email": "ईमेल",
  "contact.address": "क्लिनिकचा पत्ता",
  "contact.directions": "दिशा मिळवा →",
  "contact.hours": "उघडण्याची वेळ",
  "contact.hoursValue": "सोम – शनि: सकाळी 9:30 – दुपारी 2:00 आणि संध्या. 5:00 – रात्री 9:00",
  "contact.sunday": "रविवार: फक्त अपॉइंटमेंटने",
  "contact.callToBook": "बुक करण्यासाठी कॉल करा",
  "contact.whatsappUs": "WhatsApp करा",
  "contact.reviewsTitle": "पालघरच्या रुग्णांचे खरे Google रिव्ह्यू",
  "contact.reviewsSub":
    "पालघर, बोईसर, तारापूर, विरार आणि वसईतील शेकडो रुग्णांकडून 4.9★ रेटिंग. लाइव्ह Google रिव्ह्यू — संपादनाशिवाय.",
};

const DICTS: Record<Lang, Dict> = { en, hi, mr };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<Ctx | undefined>(undefined);

const STORAGE_KEY = "dsp-lang";

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved && DICTS[saved]) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  const t = (key: string) => DICTS[lang][key] ?? DICTS.en[key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
