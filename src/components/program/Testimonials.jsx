 
const testimonials = [
  {
    quote:
      "My son completed Noorani Qaida and now reads Qur’an fluently within 6 months.",
    name: "Mariam, UK",
  },
  {
    quote:
      "I joined the Qur’an + Islamic Studies program — my children now love their classes!",
    name: "Abdullah, USA",
  },
  {
    quote:
      "As a revert, the teachers made every concept easy to understand.",
    name: "Lauren, Ireland",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FCFD] to-white py-24 px-6 sm:px-[4.2rem]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          What Our <span className="text-[#1D89A3]">Students Say</span> 
        </h2>
        <p className="text-gray-600  max-w-2xl mx-auto">
          Real feedback from parents and students who experienced our integrated learning programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-700  text-sm mb-6">⭐ {item.quote}</p>
            <p className="text-[#1D89A3] font-semibold text-right">{item.name}</p>
          </div>
        ))}
      </div> 
    </section>
  );
}
