 
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Yasir",
      location: "UK",
      text: "After one trial class, I knew this was the right place for my kids.",
      rating: 5,
      avatar: "Y",
      color: "bg-primary"
    },
    {
      id: 2,
      name: "Ayesha",
      location: "USA",
      text: "My teacher was patient and kind, I learned Surah Al-Fātiḥah perfectly.",
      rating: 5,
      avatar: "A",
      color: "bg-primary"
    },
    {
      id: 3,
      name: "Omar",
      location: "Canada",
      text: "Their trial was organized, professional, and truly spiritual.",
      rating: 5,
      avatar: "O",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-12   to-teal-50/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.3rem] text-center">
        {/* Header */}
        <div className="mb-12"> 
          <h2 className="text-3xl sm:text-3xl font-semibold text-slate-900 mb-3">
            What Our Students Say
          </h2>
          <p className="text-slate-600 ">
            Real stories from real students across the globe
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow relative overflow-hidden text-left hover:shadow-lg transition"
            >
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-teal-600" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center text-white text-xl font-bold shadow-md`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

             <p className="text-slate-700 italic text-sm">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
