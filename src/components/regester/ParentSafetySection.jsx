'use client'
import { ShieldCheck, BookOpen, Video, BarChart3, Users } from "lucide-react";

export default function ParentSafetySection({ onGetStartedClick }) {
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified & Certified Teachers",
      description: "All teachers are verified, trained, and certified.",
    },
    {
      icon: BookOpen,
      title: "Islamic Adab in Every Session",
      description: "Every session is conducted under Islamic adab.",
    },
    {
      icon: BarChart3,
      title: "Monthly Progress Reports",
      description: "Parents receive monthly progress updates.",
    },
    {
      icon: Video,
      title: "Recorded Sessions",
      description: "Sessions can be recorded upon request for transparency.",
    },

  ];

  return (
    <section className="py-12 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-[3.3rem] text-center">
        {/* Header */}
        <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          Parent Assurance &amp; <span className="text-primary">Safety</span>
        </h2>
        <p className=" text-slate-600 mb-12 mt-2">
          For Parents’ Peace of Mind
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:border-primary hover:border hover:shadow-md transition text-left flex items-start gap-4"
            >
              <div className="flex-shrink-0 p-3 rounded-full bg-primary to-teal-600 text-white shadow-md">
                <feature.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-slate-600 ">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6 sm:mt-12">
          <button
            onClick={onGetStartedClick}
            className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-6 py-2 text-sm sm:text-base font-semibold text-white shadow-md hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
}
