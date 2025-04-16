
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import HeadContent from "@/components/HeadContent";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Globe, Phone, MapPin, Calendar, CheckCircle2, Video, 
  ArrowRight, Users, Plane, Clock, CreditCard, HeartPulse,
  Sparkles, FileText, Headphones
} from "lucide-react";

const NRICorner = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/20 to-white">
      <HeadContent 
        title="NRI Dental Services in Palghar | Dental Care for Non-Resident Indians"
        description="Specialized dental services for Non-Resident Indians visiting Palghar. Get world-class dental treatment with flexible scheduling and follow-up care. Book your consultation today!"
        image="/og-image.jpg"
        keywords="NRI dental care, dental services for NRI, dental tourism India, international dental treatment, affordable dental care India, NRI dentist Palghar, dental vacation India"
      />
      
      <Header />
      <main id="main-content" className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Home", href: "/" },
                { label: "NRI Corner", href: "/nri-corner" }
              ]}
              light
            />
            <div className="max-w-3xl mx-auto text-center mt-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Specialized Dental Care for Non-Resident Indians
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Expert dental solutions during your India visit with international standards and personalized care
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20interested%20in%20dental%20consultation.%20Please%20help%20me%20schedule%20a%20virtual%20meeting.%20Thank%20you!", "_blank")}
                  className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6"
                  size="lg"
                >
                  Book Virtual Consultation <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  size="lg"
                  onClick={() => window.open("tel:+918600892884")}
                >
                  Call NRI Coordinator <Phone className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-2 mb-10">
              <div className="inline-flex items-center gap-3 mb-2 bg-blue-50 px-4 py-1 rounded-full">
                <span className="text-3xl">🌏</span>
                <h2 className="text-primary font-semibold">
                  NRI DENTAL SERVICES
                </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-center max-w-3xl">
                Comprehensive Dental Solutions for Your India Visit
              </h3>
              <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-12 text-center">
              <p className="text-lg text-gray-700">
                At Dental Solutions Palghar, we understand the unique needs of our NRI patients. Our dedicated NRI corner offers specialized services designed to maximize your dental treatment during your limited time in India.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="shadow-lg border-t-4 border-t-primary hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Time-Optimized Treatment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Efficient treatment plans designed to fit your India visit schedule, with pre-planning before your arrival.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Condensed treatment schedules",
                      "Priority appointments",
                      "Expedited procedures when possible"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-green-600 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-green-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Globe className="text-green-600 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Global Standards, Local Comfort
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Experience international quality dental care with the comfort of being in your home country.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "International dental protocols",
                      "Western-standard sterilization",
                      "Latest dental technology"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg border-t-4 border-t-blue-500 hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                    <Headphones className="text-blue-500 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Continued Care Support
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our care extends beyond your India visit with virtual follow-ups and coordination with your overseas dentist.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Virtual follow-up consultations",
                      "Digital treatment records",
                      "Overseas dentist coordination"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized NRI Dental Services
              </h2>
              <p className="text-lg text-gray-700">
                Our comprehensive range of dental services is tailored to meet the specific needs of our NRI patients
              </p>
            </div>
            
            <Tabs defaultValue="cosmetic" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 w-full">
                <TabsTrigger value="cosmetic">Cosmetic Dentistry</TabsTrigger>
                <TabsTrigger value="restorative">Restorative Care</TabsTrigger>
                <TabsTrigger value="surgical">Surgical Procedures</TabsTrigger>
                <TabsTrigger value="preventive">Preventive Care</TabsTrigger>
              </TabsList>
              
              <TabsContent value="cosmetic" className="border rounded-lg p-6 shadow-md">
                <div className="md:flex gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src="/services/cosmetic-dentistry.jpg" 
                      alt="Cosmetic Dentistry"
                      className="rounded-lg w-full h-60 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Cosmetic Dentistry</h3>
                    <p className="text-gray-700 mb-4">
                      Transform your smile with our advanced cosmetic dentistry procedures, all completed during your India visit.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Smile Makeovers",
                        "Teeth Whitening",
                        "Porcelain Veneers",
                        "Composite Bonding",
                        "Gum Contouring",
                        "Smile Design Consultation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="restorative" className="border rounded-lg p-6 shadow-md">
                <div className="md:flex gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src="/services/dental-implants.jpg" 
                      alt="Restorative Dentistry"
                      className="rounded-lg w-full h-60 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Restorative Treatments</h3>
                    <p className="text-gray-700 mb-4">
                      Restore your dental health with our comprehensive restorative procedures at a fraction of international costs.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Dental Implants",
                        "Crowns & Bridges",
                        "Full Mouth Rehabilitation",
                        "Root Canal Treatment",
                        "Dentures & Partial Dentures",
                        "Inlays & Onlays"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="surgical" className="border rounded-lg p-6 shadow-md">
                <div className="md:flex gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src="/services/periodontal.jpg" 
                      alt="Surgical Procedures"
                      className="rounded-lg w-full h-60 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Surgical Procedures</h3>
                    <p className="text-gray-700 mb-4">
                      Advanced surgical procedures performed by specialists with international training and experience.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Wisdom Tooth Extraction",
                        "Bone Grafting",
                        "Sinus Lift",
                        "Periodontal Surgery",
                        "Surgical Implant Placement",
                        "Surgical Endodontics"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="preventive" className="border rounded-lg p-6 shadow-md">
                <div className="md:flex gap-8">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <img 
                      src="/services/general-dentistry.jpg" 
                      alt="Preventive Care"
                      className="rounded-lg w-full h-60 object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">Preventive Care</h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive check-ups and preventive treatments during your India visit, with follow-up care guidance.
                    </p>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {[
                        "Comprehensive Dental Exam",
                        "Digital X-rays & Imaging",
                        "Professional Teeth Cleaning",
                        "Oral Cancer Screening",
                        "Fluoride Treatments",
                        "Preventive Care Plan"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-6" variant="outline">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our NRI Patient Process
              </h2>
              <p className="text-lg text-gray-700">
                We've simplified the process to make your dental treatment during your India visit smooth and efficient
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">1</div>
                  <div className="pt-6">
                    <Video className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Pre-Visit Consultation</h3>
                    <p className="text-gray-700">
                      Schedule a virtual consultation before your arrival to discuss your dental needs, treatment options, and create a plan.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">2</div>
                  <div className="pt-6">
                    <Calendar className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Treatment Planning</h3>
                    <p className="text-gray-700">
                      We'll create a detailed treatment timeline aligned with your stay in India, optimizing your visits and results.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative">
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">3</div>
                  <div className="pt-6">
                    <HeartPulse className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">In-Person Treatment</h3>
                    <p className="text-gray-700">
                      Receive your treatment at our state-of-the-art facility with minimal wait times and personalized care.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block h-16 relative">
                <div className="absolute left-1/6 right-1/6 top-1/2 h-0.5 bg-gray-300"></div>
                <div className="absolute left-1/6 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
                <div className="absolute right-1/6 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative md:translate-x-1/2">
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">4</div>
                  <div className="pt-6">
                    <FileText className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Documentation & Follow-up</h3>
                    <p className="text-gray-700">
                      Receive complete documentation of your treatment, with digital records for your reference and for sharing with your regular dentist.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative md:-translate-x-1/2">
                  <div className="absolute -top-4 -left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">5</div>
                  <div className="pt-6">
                    <Headphones className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-3">Virtual Follow-ups</h3>
                    <p className="text-gray-700">
                      Stay connected with our team through scheduled virtual follow-ups to ensure your treatment success and address any concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Price Advantage Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-2 bg-green-50 px-4 py-1 rounded-full">
                <CreditCard className="text-green-600 h-5 w-5" />
                <span className="text-green-600 font-semibold">VALUE FOR NRIs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Significant Cost Savings
              </h2>
              <p className="text-lg text-gray-700">
                Experience premium dental care at a fraction of the cost compared to Western countries
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                    <h3 className="text-2xl font-bold mb-6">Why Choose Us for Your Dental Care in India</h3>
                    <ul className="space-y-4">
                      {[
                        "Save 50-70% compared to US/UK/Canada pricing",
                        "No compromise on quality or materials",
                        "Internationally trained specialists",
                        "State-of-the-art digital technology",
                        "Personalized care and attention",
                        "Beautiful results you can trust"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Sparkles className="h-5 w-5 text-blue-200 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-gray-800">Sample Cost Comparison</h3>
                    <div className="space-y-4">
                      {[
                        { procedure: "Dental Implant", india: "₹25,000-35,000", abroad: "$3,000-4,500" },
                        { procedure: "Porcelain Crown", india: "₹8,000-12,000", abroad: "$1,000-1,500" },
                        { procedure: "Root Canal Treatment", india: "₹5,000-8,000", abroad: "$700-1,200" },
                        { procedure: "Teeth Whitening", india: "₹8,000-15,000", abroad: "$500-800" },
                        { procedure: "Full Smile Makeover", india: "₹80,000-150,000", abroad: "$5,000-15,000" }
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b pb-3">
                          <span className="font-medium text-gray-800">{item.procedure}</span>
                          <div className="flex gap-6">
                            <div className="text-right">
                              <p className="text-sm text-gray-500">India</p>
                              <p className="font-semibold text-green-600">{item.india}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Abroad</p>
                              <p className="font-semibold text-gray-700">{item.abroad}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4">
                      *Prices are approximate and may vary based on complexity. Consultation required for exact quote.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-pattern opacity-10"></div>
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Transform Your Smile During Your India Visit?
                  </h2>
                  <p className="text-xl text-blue-100">
                    Our NRI coordinator is available to help plan your dental treatment
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <Video className="h-10 w-10 text-blue-200 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Virtual Consultation</h3>
                    <p className="text-blue-100">
                      Plan your treatment before your arrival in India
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <Calendar className="h-10 w-10 text-blue-200 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Priority Scheduling</h3>
                    <p className="text-blue-100">
                      Reserved appointments for NRI patients
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                    <Headphones className="h-10 w-10 text-blue-200 mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">Dedicated Support</h3>
                    <p className="text-blue-100">
                      Personalized assistance throughout your treatment
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    onClick={() => window.open("https://wa.me/918600892884?text=Hello%2C%20I%E2%80%99m%20an%20NRI%20interested%20in%20dental%20consultation.%20Please%20help%20me%20schedule%20a%20virtual%20meeting.%20Thank%20you!", "_blank")}
                    className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 w-full sm:w-auto"
                  >
                    Book Virtual Consultation <ArrowRight className="ml-1" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto"
                    onClick={() => window.open("tel:+918600892884")}
                  >
                    Call NRI Coordinator <Phone className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NRICorner;
