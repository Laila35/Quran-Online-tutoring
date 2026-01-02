 

import { CheckCircle2 } from "lucide-react";
 

const points = [
  "Meet your teacher (male or female – your choice)",
  "Experience our live one-on-one learning style",
  "Receive your level assessment during class",
  "Get a personalized learning plan",
  "Learn how Qur’an + Islamic Studies are integrated",
];

export default function WhyTakeTrial() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.3rem] text-center">
        {/* Section Title */}
        <h2
         
          className="text-3xl md:text-3xl font-semibold text-slate-800 mb-6"
        >
          Why Take a <span className="text-primary">Free Trial?</span> 
        </h2>

        {/* Subtitle */}
        <p 
          className="    mb-12"
        >
          Experience the Qur’an Classroom from Home
        </p>

        {/* Points List - Two Columns on md+ screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl sm mx-auto text-left">
          {points.map((item, i) => (
            <div
              key={i} 
              className="flex items-start gap-3 bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-shadow"
            >
              <CheckCircle2 className="text-teal-600 w-6 h-6 mt-1 shrink-0" />
              <p className="text-slate-700 ">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
