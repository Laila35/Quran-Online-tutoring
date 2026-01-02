// app/components/WhyLoveSystem.tsx
import { FaCheckCircle } from "react-icons/fa";
import { Container } from "../shared/Container";
const points = [
  "Transparent & professional process.",
  "Flexibility in choosing learning track.",
  "Qualified, patient teachers.",
  "Reports that keep families updated.",
  "Confidence in progress and results.",
  "Personalized one-to-one attention."
];

export default function WhyLoveSystem() {
  return (
    <Container className="py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-center mb-12">
          Why Parents & Students <span className="text-primary">Love Our System</span>
        </h2>

        {/* List */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <FaCheckCircle className="text-emerald-500 w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-gray-700 text-base leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
