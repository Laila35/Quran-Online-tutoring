 
const features = [
  {
    feature: "Certified Teachers",
    description: "Trained male & female tutors, Ijāzah holders, and Arabic scholars.",
  },
  {
    feature: "One-on-One Sessions",
    description: "Personalized attention for every student.",
  },
  {
    feature: "Flexible Schedules",
    description: "Classes available 24/7 across all time zones.",
  },
  {
    feature: "ERP Tracking System",
    description: "Real-time progress reports and attendance logs.",
  },
  {
    feature: "Parent Updates",
    description: "Monthly feedback and performance reports.",
  },
  {
    feature: "Faith-Centered Learning",
    description: "Adab, sincerity, and spiritual growth built into every lesson.",
  },
];

export default function WhyChoosePrograms() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FCFD] py-12 px-6 sm:px-[4.2rem]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          The <span className="text-[#1D89A3]">Quran Online Tutoring</span> Difference
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our programs are designed to combine personalized teaching, flexibility, and faith-centered learning for every student.
        </p>
      </div>

      {/* Features Table / Grid */}
      <div className="overflow-x-auto">
        <table className="max-w-3xl mx-auto table-auto border-collapse">
          <thead>
            <tr className="bg-[#F0F9FA]">
              <th className="text-left text-[#1D89A3] px-6 py-4 text-lg font-semibold border-b border-gray-200">
                Feature
              </th>
              <th className="text-left text-gray-700 px-6 py-4 text-lg font-semibold border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-[#F9FCFD] hover:bg-[#E6F5F8] transition-colors"}
              >
                <td className="px-6 py-4 font-medium text-gray-900 text-sm">{item.feature}</td>
                <td className="px-6 py-4 text-gray-700 text-sm">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
