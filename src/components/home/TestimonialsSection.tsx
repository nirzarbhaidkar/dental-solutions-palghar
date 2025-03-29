
import { Star, Quote } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Nupur Nerkar",
      text: "I had my root canal treatment done at Dental Solutions Palghar. Had a very smooth experience. The doctors explained the procedure very well. I am happy with the experience. My kid also underwent his dental procedure here. Dr Radha is really good with kids.",
      rating: 5
    },
    {
      name: "Sugriv Chaursia",
      text: "After struggling with dental anxiety for years, I finally found a clinic where I feel at ease. The staff is patient and understanding, and Dr. Patel takes time to explain everything thoroughly. Highly recommend!",
      rating: 5
    },
    {
      name: "Aadii Jagtap",
      text: "I had a dental emergency and Dental Solutions accommodated me immediately. The care was exceptional, and they followed up the next day to check on me. That's the kind of personalized service that keeps me coming back.",
      rating: 5
    },
    {
      name: "Namrata Pailwan",
      text: "The orthodontic treatment I received at Dental Solutions transformed my smile completely. The team is professional, the facility is immaculate, and the results exceeded my expectations. Worth every penny!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent px-4 py-1 rounded-full text-sm font-medium mb-4">
            Patient Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Read what our patients have to say about their experience at Dental Solutions. 4.9/5 with over 300+ reviews. 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative"
            >
              <Quote className="absolute top-6 left-6 text-primary/20 h-12 w-12" />
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">Verified Patient</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
