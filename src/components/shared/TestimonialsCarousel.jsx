"use client";

import { Container } from "./Container";
import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { asText } from "@prismicio/helpers";

export default function TestimonialsCarousel({ testimonials = [] }) {
  // Map Prismic data into usable format
  const mappedTestimonials = testimonials.map((t, i) => ({
    id: i,
    quote: asText(t.description),
    name: t.name,
    role: t.address,
  }));

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    if (!mappedTestimonials.length) return;
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prevIndex) =>
        prevIndex === mappedTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [mappedTestimonials.length]);

  const goToPrevious = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? mappedTestimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === mappedTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!mappedTestimonials.length) return null;

  const current = mappedTestimonials[currentTestimonial];

  return (
    <Container className="py-12 sm:py-16">
      <div className="bg-primary relative rounded-lg overflow-hidden">
        <div className="flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="w-full xl:flex-auto xl:px-8 xl:py-6">
            {/* Fixed height testimonial box */}
            <figure className="relative isolate pt-6 sm:pt-12 min-h-[300px] sm:min-h-[250px] flex flex-col justify-between transition-all duration-300">
              {/* Testimonial Quote */}
              <blockquote className="text-xl text-justify sm:px-16 text-white sm:text-xl">
                <p className="max-w-3xl">{current.quote}</p>
              </blockquote>

              {/* Name and Role */}
              <figcaption className="mt-8 text-base sm:px-16">
                <div className="font-semibold text-white">{current.name}</div>
                <div className="mt-1 text-gray-300">{current.role}</div>
              </figcaption>
            </figure>

            {/* Arrow Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-4">
              <button
                onClick={goToPrevious}
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/75"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 pr-4">
              <button
                onClick={goToNext}
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/75"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
