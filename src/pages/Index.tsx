
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
