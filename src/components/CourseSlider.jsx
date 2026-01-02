"use client";
import React, { useState, useEffect } from "react";
import { courses } from "../lib/courses";
import Slider from "./Slider";

const CourseSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at the second card for infinite loop behavior
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Adjust the number of slides based on screen width
  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      setSlidesToShow(width >= 1024 ? 3 : width >= 768 ? 2 : 1);
    };

    updateSlidesToShow(); // Set initial value
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + slidesToShow;
      return nextIndex >= courses.length ? 1 : nextIndex; // Loop back to the first card
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = prevIndex - slidesToShow;
      return prevIndexValue < 1 ? courses.length - slidesToShow : prevIndexValue; // Loop back to last card
    });
  };

  return (
    <section className="max-w-6xl  mx-auto bg-w py-2 px-4 relative" id="courses">
      {/* Add an overlay to add opacity to the background */}
      <div className="absolute inset-0 opacity-10 z-0"></div>

      <div className="relative z-10">
        <div className="mt-16 mb-2">
          <h2 className="text-2xl md:text-3xl font-inter font-semibold md:pl-6 text-black">
            Explore Top Rated <span className="text-emerald-600">Courses</span>
          </h2>
        </div>

        <Slider
          slidesToShow={slidesToShow}
          currentIndex={currentIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </section>
  );
};

export default CourseSlider;
