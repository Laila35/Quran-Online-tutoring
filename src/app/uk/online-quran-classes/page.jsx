"use client";

import React from 'react';
import Section1 from '../../../components/uk/section1';
import Section2 from '../../../components/uk/section2';
import Section3 from '../../../components/uk/section3';
import Section4 from '../../../components/uk/section4';
import Section5 from '../../../components/uk/section5';
import Section6 from '../../../components/uk/section6';

export default function UKPage() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Sections */}
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />

      {/* Button container below Section6 */}
      <div className="bg-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <button
            onClick={scrollToTop}
            className="px-8 py-4 bg-[#1f8ea3] hover:bg-[#1a7a8d] text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#1f8ea3] focus:ring-opacity-50 text-lg"
            aria-label="Get Free Trial Class"
          >
            Start Your Free Trial Class
          </button>
          
          <p className="mt-4 text-gray-600 text-sm">
            Click the button above to get your free trial class and start your Quran learning journey today!
          </p>
        </div>
      </div>
    </main>
  );
}