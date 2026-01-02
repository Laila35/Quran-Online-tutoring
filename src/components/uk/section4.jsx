"use client";
import React from "react";
import Image from "next/image";

const BLUE = "#1f8ea3";

const Section4 = () => {
  const reasons = [
    {
      title: "One-to-one personalized learning",
      icon: "/Images/icons/l4.png",
    },
    {
      title: "Experienced male & female teachers",
      icon: "/Images/icons/l1.png",
    },
    {
      title: "Flexible schedules for UK time zones",
      icon: "/Images/icons/l2.png",
    },
    {
      title: "Focus on correct pronunciation & understanding",
      icon: "/Images/icons/l3.png",
    },
    {
      title: "Friendly, student-focused teaching approach",
      icon: "/Images/icons/l1.png",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold">
       <span className="text-black">Why Families Choose </span>
       <span className="text-[#1F8AA4]">Our Online Quran Classes</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <form
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 text-center
                         transition-all duration-300 cursor-pointer
                         hover:border-[#1f8ea3] hover:shadow-xl hover:bg-[#1f8ea3]/5
                         flex flex-col h-full"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div
                  className="h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${BLUE}15` }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                    className="sm:w-8 sm:h-8"
                  />
                </div>
              </div>

              {/* Title wrapped in two lines */}
              <div className="flex-grow flex items-center justify-center min-h-[3.5rem]">
                <h3 className="text-gray-800 font-medium text-xs sm:text-sm leading-tight 
                             line-clamp-2 break-words px-1">
                  {item.title}
                </h3>
              </div>

              {/* Optional hidden submit button for form functionality */}
              <button type="submit" className="hidden">Submit</button>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;