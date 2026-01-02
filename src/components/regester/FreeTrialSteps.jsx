"use client";

import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Fill the Form Below",
    description:
      "Submit your basic details, learning goals, and preferred class type.",
  },
  {
    step: 2,
    title: "Get Confirmation",
    description:
      "Our admin team will email or WhatsApp you to confirm the trial time.",
  },
  {
    step: 3,
    title: "Meet Your Teacher",
    description:
      "Attend your live Zoom session and explore your personalized learning plan.",
  },
  {
    step: 4,
    title: "Begin Your Journey",
    description: "Enroll in your chosen program and continue learning consistently.",
  },
];

export default function FreeTrialSteps() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.3rem] text-center">
        {/* Section Title */}
        <h2
           
          className="text-3xl md:text-3xl font-semibold text-slate-800 mb-6"
        >
          How the Free Trial <span className="text-primary">Works</span>
        </h2>

        <p 
          className="mb-12"
        >
          Simple & Transparent Process
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div
              key={i} 
              className="bg-slate-50 rounded-2xl p-6 shadow hover:shadow-lg transition-shadow relative"
            >
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center  mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
