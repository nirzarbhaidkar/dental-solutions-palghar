
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

// This would typically come from an API or database
const blogPosts = [
  {
    id: "tips-for-maintaining-optimal-oral-health",
    title: "Tips for Maintaining Optimal Oral Health",
    excerpt: "Learn the best practices for keeping your teeth and gums healthy with these expert tips.",
    category: "Oral Health",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606811971618-4480da73d550?auto=format&fit=crop&q=80",
    date: "March 15, 2024",
    content: `
      <p>Maintaining good oral health is crucial for your overall well-being. Here are some key tips to keep your smile healthy and bright:</p>
      
      <h2>1. Brush Properly</h2>
      <p>Brush your teeth at least twice a day using fluoride toothpaste. Use gentle circular motions and don't forget to brush your tongue.</p>
      
      <h2>2. Floss Daily</h2>
      <p>Flossing removes food particles and plaque between teeth where your toothbrush can't reach.</p>
      
      <h2>3. Regular Check-ups</h2>
      <p>Visit your dentist every six months for professional cleaning and check-ups.</p>
    `
  },
  {
    id: "understanding-different-types-of-braces",
    title: "Understanding Different Types of Braces",
    excerpt: "A comprehensive guide to different orthodontic options available for teeth straightening.",
    category: "Orthodontics",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80",
    date: "March 12, 2024",
    content: `
      <p>Modern orthodontics offers various options for teeth straightening. Let's explore the different types of braces available:</p>
      
      <h2>Traditional Metal Braces</h2>
      <p>The most common type, made from high-grade stainless steel...</p>
      
      <h2>Ceramic Braces</h2>
      <p>Similar to traditional braces but with tooth-colored or clear brackets...</p>
      
      <h2>Invisible Aligners</h2>
      <p>Clear, removable aligners that gradually straighten teeth...</p>
    `
  },
  {
    id: "importance-of-regular-dental-checkups",
    title: "The Importance of Regular Dental Check-ups",
    excerpt: "Why you shouldn't skip your regular dental visits and what to expect during check-ups.",
    category: "Preventive Care",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1629909615184-74c6646bd769?auto=format&fit=crop&q=80",
    date: "March 10, 2024",
    content: `
      <p>Regular dental check-ups are essential for maintaining good oral health. Here's why they matter:</p>
      
      <h2>Early Detection</h2>
      <p>Regular check-ups help detect problems early before they become serious...</p>
      
      <h2>Professional Cleaning</h2>
      <p>Professional cleaning removes tartar and plaque that regular brushing can't...</p>
      
      <h2>Oral Cancer Screening</h2>
      <p>Your dentist checks for signs of oral cancer during routine check-ups...</p>
    `
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Link to="/">
          <Button variant="outline">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <Link to="/">
          <Button variant="outline" className="mb-8">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto">
          <div className="relative h-[400px] mb-8 rounded-2xl overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
              {post.category}
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
