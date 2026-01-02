"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsBarChart } from "react-icons/bs";
import Image from "next/image";
import { courses } from "../lib/courses.js";
import Link from "next/link";

const Slider = ({ slidesToShow, currentIndex, handleNext, handlePrev }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add first and last items to create seamless loop
  const extendedCourses = [
    courses[courses.length - 1], // Last card (duplicate)
    ...courses,  // Original cards
    courses[0], // First card (duplicate)
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setIsTransitioning(false), 700); // Match CSS transition duration
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-full p-4 overflow-hidden">
      <div
        className={`flex transition-transform duration-700 ease-in-out`}
        style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
      >
        {extendedCourses.map((course, index) => (
          <div
            key={index}
            className={`w-full lg:w-1/3 md:w-1/3 sm:w-1/3 flex-shrink-0 px-2`} // Set equal width for each card
          >
            <div className="bg-white rounded-xl shadow-lg mb-4 border border-gray-200 transition-shadow duration-300">
              <div className="relative h-40 sm:h-60">
                <Image
                  src={course.src}
                  alt={course.title || 'Course Image'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg transition-transform duration-300 transform hover:scale-105"
                />
              </div>
              <div className="px-3 md:px-6 pb-6 pt-2">
              <h2 className="text-lg font-semibold text-emerald-700 mt-3 mb-2 line-clamp-2">
  {course.title}
</h2>

                <div className="flex items-center justify-between text-gray-500 text-sm mb-4 border-2 px-2 py-1 border-gray-300 rounded-lg">
                  <div className="flex items-center gap-x-2">
                    <FiClock className="size-4 text-emerald-700" />
                    <div>
                      <div className="text-xs">Duration</div>
                      <div className="font-semibold text-emerald-600 text-xs md:text-[15px]">
                        {course.duration}
                      </div>
                    </div>
                  </div>
                  <div className="h-8 border border-gray-300 mx-4"></div>
                  <div className="flex items-center gap-x-2">
                    <BsBarChart className="size-4 text-emerald-700" />
                    <div>
                      <div className="text-xs">Level</div>
                      <div className="font-semibold text-xs md:text-[15px] text-emerald-600">
                        {course.level}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/register-now"
                    className={`bg-emerald-600 text-white hover:bg-amber-500 px-3 py-2 rounded-full shadow-md`}
                  >
                    Register Now
                  </Link>
                  <Link
                    href={`/courses/${course.href}`}
                    className="border border-gray-300 px-3 py-2 hover:bg-amber-500 hover:text-white rounded-full shadow-md"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 z-10"
        aria-label="Previous slide"
      >
        <FaArrowLeft className="text-emerald-700" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 p-3 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 z-10"
        aria-label="Next slide"
      >
        <FaArrowRight className="text-emerald-700" />
      </button>
    </div>
  );
};

export default Slider;
