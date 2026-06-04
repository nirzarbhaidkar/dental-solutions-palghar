
import React from "react";
import { useParams, Link } from "react-router-dom";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface ServiceContent {
  title: string;
  description: string;
  image: string;
  longDescription: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

const serviceContent: Record<string, ServiceContent> = {
  "general-dentistry": {
    title: "General Dentistry",
    description: "Comprehensive preventive and family dental care in Palghar — checkups, cleanings, fillings and routine treatments.",
    image: "/services/general-dentistry.jpg",
    longDescription: [
      "Our general dentistry services form the foundation of good oral health, providing comprehensive care for patients of all ages.",
      "We focus on preventive care and early intervention to maintain your oral health and prevent serious dental issues from developing."
    ],
    benefits: [
      "Regular check-ups and cleanings",
      "Early detection of dental problems",
      "Preventive care and education",
      "Complete oral health maintenance",
      "Family-friendly environment"
    ],
    process: [
      {
        title: "Initial Consultation",
        description: "Thorough examination and discussion of your dental health goals"
      },
      {
        title: "Treatment Planning",
        description: "Customized care plan based on your specific needs"
      },
      {
        title: "Regular Maintenance",
        description: "Ongoing care to maintain optimal oral health"
      }
    ],
    faqs: [
      {
        question: "How often should I visit the dentist?",
        answer: "We recommend visiting every 6 months for regular check-ups and cleanings."
      },
      {
        question: "What does a routine check-up include?",
        answer: "A routine check-up includes dental cleaning, examination, X-rays if needed, and oral cancer screening."
      }
    ]
  },
  "conscious-sedation": {
    title: "Conscious Sedation",
    description: "Gentle inhalation sedation for anxiety-free dental care in children",
    image: "/services/conscious-sedation.jpg",
    longDescription: [
      "Conscious sedation (inhalation sedation) is a minimally invasive technique that helps reduce anxiety and improve cooperation in children who are unable to tolerate dental procedures under routine local anesthesia alone.",
      "The child remains conscious, maintains protective reflexes, and responds to verbal commands, while being in a relaxed and comfortable state. All cases are carefully evaluated prior to sedation, and appropriate monitoring protocols are strictly followed throughout the procedure."
    ],
    benefits: [
      "Improved cooperation and smoother treatment delivery",
      "Reduced psychological trauma for anxious children",
      "Better completion of required dental care",
      "Quick recovery with minimal post-procedure downtime",
      "May help avoid referral for general anesthesia in appropriate cases",
      "Safe for children with special healthcare needs"
    ],
    process: [
      {
        title: "Pre-Sedation Evaluation",
        description: "Careful assessment of the child's medical history, anxiety level, and suitability for conscious sedation"
      },
      {
        title: "Sedation Administration",
        description: "Gentle inhalation sedation delivered through a small nasal mask, keeping the child relaxed and comfortable"
      },
      {
        title: "Dental Treatment",
        description: "Required dental procedures performed while the child remains calm, conscious, and cooperative"
      },
      {
        title: "Recovery & Monitoring",
        description: "Quick recovery period with continuous monitoring before the child is discharged"
      }
    ],
    faqs: [
      {
        question: "Is conscious sedation safe for children?",
        answer: "Yes, conscious sedation is a well-established and safe technique when administered by trained professionals. The child remains conscious, maintains protective reflexes, and is monitored throughout the procedure."
      },
      {
        question: "Which children benefit from conscious sedation?",
        answer: "It is ideal for highly anxious or fearful children, very young children requiring dental intervention, uncooperative behavior due to dental phobia, children with special healthcare needs, cases requiring longer or multiple procedures, and those with a strong gag reflex."
      },
      {
        question: "How quickly does the child recover after sedation?",
        answer: "Recovery is typically very quick with minimal downtime. Most children return to normal activities shortly after the procedure."
      }
    ]
  },
  "orthodontics": {
    title: "Orthodontics",
    description: "Braces and clear aligners in Palghar for straighter teeth, better bite alignment and a confident, healthy smile.",
    image: "/services/orthodontics.jpg",
    longDescription: [
      "Our orthodontic services help patients of all ages achieve properly aligned teeth and jaws for improved function and aesthetics.",
      "We offer traditional braces, clear aligners, and other modern orthodontic solutions tailored to your unique needs."
    ],
    benefits: [
      "Improved tooth alignment",
      "Enhanced facial appearance",
      "Better oral hygiene",
      "Corrected bite issues",
      "Reduced risk of dental problems"
    ],
    process: [
      {
        title: "Orthodontic Assessment",
        description: "Comprehensive evaluation of your teeth, jaw, and facial structure"
      },
      {
        title: "Customized Treatment Plan",
        description: "Detailed plan outlining treatment approach, timeline, and expected outcomes"
      },
      {
        title: "Regular Adjustments",
        description: "Periodic visits to monitor progress and make necessary adjustments"
      }
    ],
    faqs: [
      {
        question: "At what age should orthodontic treatment begin?",
        answer: "The American Association of Orthodontists recommends an initial orthodontic evaluation at age 7, but treatment can be effective at any age."
      },
      {
        question: "How long does orthodontic treatment take?",
        answer: "Treatment typically ranges from 12 to 30 months, depending on individual needs and the specific orthodontic issue being addressed."
      }
    ]
  },
  "dental-implants": {
    title: "Dental Implants in Palghar",
    description: "Palghar's trusted implant centre offering single-tooth, multiple, full-mouth and All-on-4 dental implants with FDA-approved titanium implants, 3D-guided placement and lifetime warranty.",
    image: "/services/dental-implants.jpg",
    longDescription: [
      "Dental Solutions Palghar is a dedicated implant centre delivering world-class tooth replacement using premium European and Korean implant systems (Nobel Biocare, Straumann, Osstem). Whether you're missing a single tooth, several teeth, or need full-mouth rehabilitation, our implantologists plan every case with 3D CBCT scans for precise, predictable, and pain-free placement.",
      "Unlike removable dentures or tooth-supported bridges, dental implants replace the tooth root itself. This stops jawbone shrinkage, preserves your facial structure, and gives you teeth that look, feel, and bite exactly like natural ones — often within a single surgical visit using our flapless and immediate-loading protocols.",
      "We offer the complete implant menu: single-tooth implants, implant-supported bridges, All-on-4 and All-on-6 full-arch rehabilitation, zygomatic implants for severe bone loss, and same-day 'teeth in a day' solutions. Every implant placed at our Palghar clinic carries a written warranty and lifetime follow-up.",
      "Patients travel to us from Palghar, Boisar, Tarapur, Virar, Vasai and across the Mumbai-Ahmedabad corridor because we combine specialist expertise, transparent pricing, EMI options, and a proven 98%+ success rate backed by 4.9★ Google reviews."
    ],
    benefits: [
      "Permanent, lifetime tooth replacement — no slipping or removal",
      "Looks, feels and functions like a natural tooth",
      "Prevents jawbone loss and facial sagging that follows tooth loss",
      "Restores 100% chewing efficiency — eat anything you love",
      "Protects adjacent healthy teeth (no grinding required, unlike bridges)",
      "98%+ clinical success rate with premium implant brands",
      "Single-visit immediate loading available for eligible cases",
      "Flexible EMI plans and transparent, all-inclusive pricing",
      "Lifetime warranty on the implant fixture"
    ],
    process: [
      {
        title: "Free Implant Consultation & 3D CBCT Scan",
        description: "Comprehensive evaluation including digital X-rays, CBCT scan and bone-density analysis to create your personalised, computer-guided treatment plan."
      },
      {
        title: "Treatment Planning & Quote",
        description: "Transparent written quote with implant brand options (Nobel Biocare / Straumann / Osstem), timeline, and EMI options — no hidden costs."
      },
      {
        title: "Painless Implant Placement",
        description: "Surgical placement under local anaesthesia using flapless, computer-guided technique. Most single implants are placed in under 45 minutes."
      },
      {
        title: "Osseointegration (Healing)",
        description: "3-6 month healing period during which the titanium implant fuses with your jawbone. A temporary tooth is provided so you're never without a smile."
      },
      {
        title: "Abutment & Final Crown",
        description: "Custom-designed zirconia or PFM crown is digitally fabricated and attached for a perfectly natural look and bite."
      },
      {
        title: "Lifetime Aftercare",
        description: "Free 6-monthly implant maintenance check-ups and written warranty for complete peace of mind."
      }
    ],
    faqs: [
      {
        question: "How much do dental implants cost in Palghar?",
        answer: "At Dental Solutions Palghar, single-tooth implants start from ₹25,000 (Korean systems) and go up to ₹55,000 for premium Swiss/Swedish brands like Straumann and Nobel Biocare. Full-mouth All-on-4 rehabilitation starts from ₹2,50,000 per arch. Every quote is all-inclusive (implant + abutment + crown + scans) and we offer 0% EMI options."
      },
      {
        question: "Are dental implants painful?",
        answer: "No. The procedure is done under local anaesthesia and most patients report it's more comfortable than a tooth extraction. Mild swelling for 2-3 days is normal and easily managed with prescribed medication."
      },
      {
        question: "How long do dental implants last?",
        answer: "With proper oral hygiene and 6-monthly check-ups, the titanium implant itself lasts a lifetime. The crown on top may need replacement after 10-15 years. We provide a written lifetime warranty on the implant fixture."
      },
      {
        question: "Can I get teeth in a single day?",
        answer: "Yes — for suitable cases we offer immediate-loading 'Teeth in a Day' and All-on-4 protocols, where implants and a fixed temporary bridge are placed in the same visit. Suitability is confirmed after a free CBCT scan."
      },
      {
        question: "What if I don't have enough bone for an implant?",
        answer: "We routinely perform sinus lifts, bone grafting, and ridge augmentation procedures to rebuild bone. For severe cases, zygomatic implants anchored in the cheekbone make implants possible even when conventional implants cannot."
      },
      {
        question: "Why choose Dental Solutions Palghar over other implant clinics?",
        answer: "We are a dedicated multispeciality implant centre with in-house CBCT, 15+ years of implantology experience, only FDA-approved premium brands, written lifetime warranty, 4.9★ Google reviews, and transparent EMI pricing — patients travel from Boisar, Tarapur, Virar and Vasai for our expertise."
      }
    ]
  },
  "root-canal": {
    title: "Root Canal Treatment",
    description: "Painless root canal treatment in Palghar using advanced endodontic techniques to save infected or damaged teeth.",
    image: "/services/root-canal.jpg",
    longDescription: [
      "Root canal therapy is a specialized procedure that treats the infected pulp of a tooth, eliminating pain and saving the natural tooth.",
      "Our advanced techniques and technology make the process comfortable while effectively preserving your tooth's function and appearance."
    ],
    benefits: [
      "Relief from tooth pain",
      "Preservation of natural tooth",
      "Prevention of infection spread",
      "Restored tooth function",
      "Minimally invasive procedure"
    ],
    process: [
      {
        title: "Diagnosis and Assessment",
        description: "Evaluation of tooth damage and determination of appropriate treatment"
      },
      {
        title: "Pulp Removal",
        description: "Careful removal of infected or damaged pulp tissue"
      },
      {
        title: "Canal Cleaning and Shaping",
        description: "Thorough cleaning and shaping of the root canals"
      },
      {
        title: "Filling and Sealing",
        description: "Placement of biocompatible material and permanent sealing"
      },
      {
        title: "Restoration",
        description: "Placement of a crown or filling to restore tooth function and appearance"
      }
    ],
    faqs: [
      {
        question: "Is a root canal painful?",
        answer: "Modern techniques and anesthesia make root canal treatment no more uncomfortable than getting a filling. Most patients report immediate relief from the pain of infection."
      },
      {
        question: "How long does the procedure take?",
        answer: "Most root canals can be completed in one or two appointments, each lasting 60-90 minutes depending on the complexity of the case."
      }
    ]
  },
  "teeth-whitening": {
    title: "Teeth Whitening",
    description: "Professional in-office and take-home teeth whitening in Palghar for a noticeably brighter, whiter smile.",
    image: "/services/teeth-whitening.jpg",
    longDescription: [
      "Our professional teeth whitening services provide safe, effective results that are significantly better than over-the-counter options.",
      "We offer both in-office and take-home whitening options to accommodate your preferences and lifestyle."
    ],
    benefits: [
      "Dramatically whiter smile",
      "Professionally supervised process",
      "Longer-lasting results",
      "Reduced tooth sensitivity",
      "Customized treatment options"
    ],
    process: [
      {
        title: "Shade Assessment",
        description: "Evaluation of current tooth color and desired outcome"
      },
      {
        title: "Preparation",
        description: "Protection of gums and oral tissues before treatment"
      },
      {
        title: "Whitening Application",
        description: "Application of professional-grade whitening agents"
      },
      {
        title: "Post-Treatment Care",
        description: "Instructions for maintaining your new, brighter smile"
      }
    ],
    faqs: [
      {
        question: "How long do teeth whitening results last?",
        answer: "Results typically last 1-3 years depending on lifestyle factors like consumption of staining foods and beverages, smoking, and oral hygiene practices."
      },
      {
        question: "Is professional teeth whitening safe?",
        answer: "Yes, professional teeth whitening under dental supervision is safe for your teeth and gums. We take precautions to minimize sensitivity and protect your oral tissues."
      }
    ]
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    description: "Specialized dental care for children in a friendly environment",
    image: "/services/pediatric-dentistry.jpg",
    longDescription: [
      "Our pediatric dental services are designed specifically for children, creating positive experiences that foster lifelong oral health habits.",
      "We focus on prevention, early intervention, and education in a child-friendly environment that makes dental visits fun and stress-free."
    ],
    benefits: [
      "Child-friendly environment",
      "Specialized care for developing teeth",
      "Prevention-focused approach",
      "Early detection of dental issues",
      "Positive dental experiences"
    ],
    process: [
      {
        title: "First Visit",
        description: "Gentle introduction to dental care in a kid-friendly setting"
      },
      {
        title: "Preventive Care",
        description: "Regular cleanings, fluoride treatments, and sealants"
      },
      {
        title: "Education",
        description: "Age-appropriate instruction on proper brushing and flossing"
      },
      {
        title: "Growth Monitoring",
        description: "Tracking dental development and addressing concerns early"
      }
    ],
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer: "The American Academy of Pediatric Dentistry recommends scheduling the first dental visit when the first tooth appears or no later than the child's first birthday."
      },
      {
        question: "How can I prepare my child for their first dental visit?",
        answer: "Keep it positive! Read children's books about dental visits, play pretend dentist at home, and avoid using words like 'hurt,' 'pain,' or 'shot' when discussing the appointment."
      }
    ]
  },
  "periodontal-treatment": {
    title: "Periodontal Treatment",
    description: "Comprehensive gum disease prevention, scaling and periodontal treatment in Palghar for healthy gums and teeth.",
    image: "/services/periodontal.jpg",
    longDescription: [
      "Our periodontal services focus on the prevention, diagnosis, and treatment of gum disease and other conditions affecting the supporting structures of the teeth.",
      "We offer both non-surgical and surgical treatments to effectively manage periodontal disease and restore gum health."
    ],
    benefits: [
      "Improved gum health",
      "Prevention of tooth loss",
      "Reduced inflammation",
      "Fresh breath",
      "Support for overall health"
    ],
    process: [
      {
        title: "Comprehensive Assessment",
        description: "Thorough evaluation of gum health, pocket depths, and bone levels"
      },
      {
        title: "Deep Cleaning",
        description: "Scaling and root planing to remove bacteria and calculus below the gumline"
      },
      {
        title: "Medication Therapy",
        description: "Targeted antibiotics or antimicrobials when needed"
      },
      {
        title: "Maintenance Program",
        description: "Regular follow-up care to prevent disease recurrence"
      }
    ],
    faqs: [
      {
        question: "What are the signs of gum disease?",
        answer: "Common signs include bleeding when brushing or flossing, red, swollen, or tender gums, persistent bad breath, receding gums, and loose teeth."
      },
      {
        question: "Is periodontal disease treatable?",
        answer: "Yes, periodontal disease is treatable, especially in its early stages. Advanced cases can be managed effectively, though some damage may be irreversible, highlighting the importance of early intervention."
      }
    ]
  },
  "emergency-dental-care": {
    title: "Emergency Dental Care",
    description: "24/7 emergency dental services when you need them most",
    image: "/services/emergency-dental.jpg",
    longDescription: [
      "Our emergency dental services provide prompt relief for dental pain and urgent care for dental injuries and acute conditions.",
      "We prioritize emergency cases to ensure you receive the care you need when you need it most, often offering same-day appointments for true emergencies."
    ],
    benefits: [
      "Immediate pain relief",
      "Same-day appointments",
      "After-hours availability",
      "Comprehensive emergency treatment",
      "Prevention of further damage"
    ],
    process: [
      {
        title: "Emergency Assessment",
        description: "Rapid evaluation of your condition and pain level"
      },
      {
        title: "Pain Management",
        description: "Immediate steps to relieve pain and discomfort"
      },
      {
        title: "Problem Resolution",
        description: "Treatment of the underlying issue causing the emergency"
      },
      {
        title: "Follow-up Care",
        description: "Instructions and appointments for any necessary continuing care"
      }
    ],
    faqs: [
      {
        question: "What constitutes a dental emergency?",
        answer: "Dental emergencies include severe pain, knocked-out teeth, loose or broken teeth, severe infections or abscesses, significant soft tissue injury, and persistent bleeding."
      },
      {
        question: "What should I do if my tooth is knocked out?",
        answer: "Handle the tooth by the crown (not the root), rinse it gently without scrubbing, try to reinsert it if possible, or keep it in milk or saliva, and see a dentist immediately—ideally within 30 minutes."
      }
    ]
  }
};

const ServicePage = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceContent[serviceSlug || ""];

  if (!service) {
    return (
      <div className="min-h-screen bg-background pb-20 lg:pb-0">{/* Added padding for mobile bottom bar */}
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you are looking for could not be found.</p>
            <Link to="/#services">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">{/* Added padding for mobile bottom bar */}
      <HeadContent 
        title={`${service.title} | Dental Solutions Palghar`}
        description={service.description}
        image={service.image}
        pageType="service"
        serviceData={{
          name: service.title,
          description: service.description,
          category: "Dental Service"
        }}
        faqs={service.faqs}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/#services" className="text-primary hover:underline inline-flex items-center mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
          </Link>
          
          <div className="rounded-2xl overflow-hidden mb-12">
            <img 
              src={service.image} 
              alt={`${service.title} in Palghar - Comprehensive ${service.title.toLowerCase()} services at Dental Solutions Palghar`} 
              className="w-full h-[400px] object-cover"
              loading="eager"
              fetchPriority="high"
              width="1024"
              height="400"
              sizes="(max-width: 768px) 100vw, 1024px"
              decoding="async"
            />
          </div>
          
          <h1 className="text-4xl font-bold mb-6">{service.title}</h1>
          
          <div className="prose max-w-none mb-12">
            {service.longDescription.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="border-l-2 border-primary pl-4">
                    <h3 className="font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-xl mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-primary/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-6">Book an appointment today and take the first step towards better dental health.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I'd%20like%20to%20book%20an%20appointment%20for%20" + encodeURIComponent(service.title) + "%20at%20Dental%20Solutions%20Palghar.%20Please%20let%20me%20know%20the%20available%20slots.%20Thank%20you!", "_blank")}
              >
                <WhatsAppIcon className="mr-2 h-4 w-4" />
                Book on WhatsApp
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open("tel:+918600892884")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
