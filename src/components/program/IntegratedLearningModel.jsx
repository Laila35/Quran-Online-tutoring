"use client";

import React from "react";

export default function IntegratedLearningModel() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8FCFD] py-12 px-6 sm:px-[4.1rem] overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,137,163,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Our <span className="text-[#1D89A3]">Integrated Learning Model</span>
        </h2>

        <h3 className="text-xl md:text-xl font-semibold text-gray-800 mb-4">
          Qur’an + Islamic Studies – A Complete Learning Experience
        </h3>

        <p className="text-gray-700 mb-14 leading-relaxed max-w-3xl mx-auto">
          Each session blends Qur’an recitation, memorization, and Tajweed with
          foundational Islamic knowledge — ensuring spiritual growth and balanced
          development.
        </p>

        {/* Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h4 className="text-md font-semibold   mb-3">
              Each 30-minute session includes:
            </h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
              <li>
                <span className="font-medium text-sm">20–25 minutes:</span> Qur’an
                recitation / Tajweed / memorization
              </li>
              <li>
                <span className="font-medium text-sm">5–10 minutes:</span> Islamic Studies –
                Duʿās, manners, ʿAqīdah, or Seerah
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h4 className="text-md font-semibold   mb-3">
              For advanced students or Hifz learners:
            </h4>
            <p className="text-gray-700 text-sm">
              <span className="font-medium ">60-minute sessions</span> include
              Qur’an + Tafsīr or Fiqh & Hadith studies for deeper understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F9FCFD] border border-[#1D89A3]/20 rounded-xl p-6 hover:shadow-md transition-all duration-300">
            <h4 className="text-md font-semibold  mb-3">
               During onboarding, students may choose:
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>→ <span className="font-medium">Qur’an-only learning</span></li>
              <li>
                → <span className="font-medium">Qur’an + Islamic Studies</span> (recommended for holistic development)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
