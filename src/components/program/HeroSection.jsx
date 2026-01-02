import React from "react";
import Link from "next/link"; 
import ContactForm from "../ContactForm";
import { Container } from "../shared/Container";

export default function HeroSection() {
  return (
    <Container className="relative isolate py-6 sm:py-12">
      {/* Decorative background glow */}
      <div className="absolute inset-0  pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Title */}
            <h1 className="text-2xl font-semibold tracking-tight text-pretty sm:text-4xl mb-6">
              A Structured Path to{" "}
              <span className="text-primary">Sacred Learning</span>
            </h1>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed mb-4">
              At <span className="font-semibold">Quran Online Tutoring</span>, we believe every Muslim deserves a guided,
              structured, and spiritually enriching Qur’an learning journey.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Our programs are divided into four interconnected tracks, designed for
              students of all ages and backgrounds — from beginners to advanced
              learners. Each program combines authentic Islamic curriculum,
              qualified teachers, and personalized sessions that fit your schedule
              and goals.
            </p>

            <p className="text-primary mb-8">
              Learn the Qur’an, understand its meaning, live by its guidance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center items-center gap-4">
              <Link
                href="/register-now"
                className="bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white px-10 py-2 rounded-lg shadow hover:shadow-md transition-all duration-300 font-medium text-lg"
              >
                Start Free Trial Class
              </Link> 
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="flex-1 w-full lg:max-w-md  "> 
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}