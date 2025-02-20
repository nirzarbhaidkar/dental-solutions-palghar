import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Phone, Clock, ChevronRight, Star, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data
const blogPosts = [
  {
    title: "Tips for Maintaining Optimal Oral Health",
    excerpt: "Learn the best practices for keeping your teeth and gums healthy with these expert tips.",
    category: "Oral Health",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606811971618-4480da73d550?auto=format&fit=crop&q=80",
    date: "March 15, 2024"
  },
  {
    title: "Understanding Different Types of Braces",
    excerpt: "A comprehensive guide to different orthodontic options available for teeth straightening.",
    category: "Orthodontics",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    date: "March 12, 2024"
  },
  {
    title: "The Importance of Regular Dental Check-ups",
    excerpt: "Why you shouldn't skip your regular dental visits and what to expect during check-ups.",
    category: "Preventive Care",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1629909615184-74c6646bd769?auto=format&fit=crop&q=80",
    date: "March 10, 2024"
  }
];

const Index = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const services = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental care for the whole family",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our expert cosmetic services",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
    },
    {
      title: "Orthodontics",
      description: "Achieve the perfect alignment with our orthodontic solutions",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The team at Dental Solutions transformed my smile completely. The care and professionalism were outstanding!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Rahul Patel",
      text: "Best dental experience ever! Dr. Shah made my root canal procedure completely painless. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
    {
      name: "Meera Desai",
      text: "Incredibly satisfied with my dental implants. The whole team is very caring and professional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    },
  ];

  const team = [
    {
      name: "Dr. Amit Shah",
      role: "Senior Dentist & Implantologist",
      experience: "15+ years experience",
      specialization: "Dental Implants & Cosmetic Dentistry",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Priya Mehta",
      role: "Orthodontist",
      experience: "12+ years experience",
      specialization: "Braces & Clear Aligners",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Raj Patel",
      role: "Pediatric Dentist",
      experience: "10+ years experience",
      specialization: "Children's Dentistry",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
    },
  ];

  const treatments = [
    {
      name: "Dental Implants",
      description: "Permanent solution for missing teeth with natural-looking results",
      beforeImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    },
    {
      name: "Smile Makeover",
      description: "Complete transformation of your smile using various cosmetic procedures",
      beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80",
    },
    {
      name: "Invisible Braces",
      description: "Straighten your teeth discreetly with clear aligners",
      beforeImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1581582090823-ea0672118be5?auto=format&fit=crop&q=80",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-primary">Dental Solutions</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
              <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
              <Button className="bg-primary text-white hover:bg-primary/90">Book Appointment</Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isNavOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-16 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">About</a>
            <a href="#team" className="text-gray-700 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Contact</a>
            <Button className="bg-primary text-white hover:bg-primary/90 w-full">Book Appointment</Button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
            Welcome to Dental Solutions Palghar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Expert Dental Care for Your <span className="text-primary">Perfect Smile</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up">
            Experience world-class dental care with our team of experienced professionals. Your smile deserves the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg">
              Book an Appointment
            </Button>
            <Button variant="outline" className="px-8 py-6 text-lg">
              Learn More <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Dental Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of dental services to keep your smile healthy and beautiful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="link" className="mt-4 text-primary p-0">
                    Learn More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Expert Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Dental Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team of dental professionals is committed to providing you with the highest quality care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-gray-600">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Patient Reviews
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Read about the experiences of our satisfied patients and their transformative dental journeys.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-lg mb-4">"{testimonials[currentTestimonial].text}"</p>
                  <p className="font-semibold text-lg">{testimonials[currentTestimonial].name}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Treatment Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Treatment Gallery
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of successful dental transformations and the amazing results we've achieved.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative h-40">
                    <img 
                      src={treatment.beforeImage} 
                      alt={`${treatment.name} Before`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                      Before
                    </span>
                  </div>
                  <div className="relative h-40">
                    <img 
                      src={treatment.afterImage} 
                      alt={`${treatment.name} After`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 text-sm rounded">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                  <p className="text-gray-600">{treatment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog/Resources Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Blog & Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dental Health Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest articles, tips, and resources about dental health and treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Button 
                    variant="link" 
                    className="text-primary p-0 group-hover:translate-x-2 transition-transform"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="text-lg">
              View All Articles <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
              Patient Resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Helpful Information
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access our collection of educational resources and patient forms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "New Patient Forms",
                description: "Download and fill out your new patient forms before your visit",
                icon: "📝"
              },
              {
                title: "Dental Care Guide",
                description: "Learn about proper dental hygiene and care techniques",
                icon: "🦷"
              },
              {
                title: "Insurance Information",
                description: "Details about accepted insurance plans and coverage",
                icon: "📄"
              },
              {
                title: "FAQs",
                description: "Answers to commonly asked questions about our services",
                icon: "❓"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 mr-4" />
                    <p>123 Palghar Main Road, Palghar, Maharashtra 401404</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 mr-4" />
                    <p>+91 123 456 7890</p>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 mr-4" />
                    <div>
                      <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Book an Appointment</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Dental Solutions</h4>
              <p className="text-gray-400">
                Providing quality dental care and creating beautiful smiles in Palghar.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 019.45 2.525c.636-.247 1.363-.416 2.427-.465C12.945 2.013 13.285 2 15.92 2h.08z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
