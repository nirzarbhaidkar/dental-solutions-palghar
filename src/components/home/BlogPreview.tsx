
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            From Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dental Health Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of articles for tips and information on maintaining your oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <Link to="/blog/importance-of-regular-dental-checkups" className="block">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Dental Checkup"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Preventive Care
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>July 10, 2023</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">The Importance of Regular Dental Check-ups</h3>
                <p className="text-gray-600 mb-4">Learn why regular dental visits are crucial for maintaining good oral health and preventing serious dental issues.</p>
                <div className="flex items-center text-primary font-medium">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <Link to="/blog/tips-for-maintaining-healthy-gums" className="block">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Healthy Gums"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Oral Hygiene
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>August 5, 2023</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>4 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">Tips for Maintaining Healthy Gums</h3>
                <p className="text-gray-600 mb-4">Discover effective strategies to keep your gums healthy and prevent periodontal disease with these expert tips.</p>
                <div className="flex items-center text-primary font-medium">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <Link to="/blog/childrens-dental-health" className="block">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Children's Dental Health"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
                  Pediatric Dentistry
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>October 8, 2023</span>
                  <span className="mx-2">•</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">Children's Dental Health: Starting Good Habits Early</h3>
                <p className="text-gray-600 mb-4">Learn how to instill good dental habits in children from an early age to ensure lifelong oral health.</p>
                <div className="flex items-center text-primary font-medium">
                  Read more <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/blog">
            <Button variant="outline" className="mt-4">
              View All Blog Posts <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
