import { testimonialsData } from "../lib/testimonials";

export default function CourseTestimonials() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h3 className="text-3xl font-bold text-amber-500 mb-12 text-center">Parents Feedback</h3>

      {/* Scrolling testimonials container */}
      <div className="overflow-hidden relative p-2">
        <div className="flex items-center gap-6 animate-scroll-loop">
          {
            testimonialsData.concat(testimonialsData).map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-xs bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md"
                style={{ height: '200px' }}  // Fixed height for all testimonials
              >
                <p className="text-emerald-700 text-base mb-4 font-light">{testimonial.description}</p>
                <p className="text-right text-emerald-600 font-semibold text-sm">— {testimonial.title}</p>
              </div>
            ))
          }
        </div>
      </div>

      <style jsx>{`
        .animate-scroll-loop {
          animation: scroll-loop 30s linear infinite;
        }

        @keyframes scroll-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
}
