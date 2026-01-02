import React from "react";
import Link from "next/link";
// Import Font Awesome icons
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative bg-gray-100 py-16 px-6 sm:px-[4.2rem] overflow-hidden">
      {/* Optional soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,137,163,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Start Your Journey with <span className="text-[#1D89A3]">Quran Online Tutoring</span>
        </h2>
        <p className="text-gray-700">
          Choose your track, pick your schedule, and begin learning the Qur’an with sincerity and excellence.
        </p>

        <p className="text-[#1D89A3] font-medium">
          Your journey begins with a single click — and a sincere niyyah.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-6 text-gray-700  ">
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#1D89A3]" /> +1 (914) 455-0557
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#1D89A3]" /> admin@quranonlinetutoring.com
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="#register"
          className="inline-block mt-8 bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#166b80] transition-colors duration-300"
        >
          Register for Free Trial Class
        </Link>
      </div>
    </section>
  );
}
