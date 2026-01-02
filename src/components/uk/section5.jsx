"use client";
import React from "react";
import Image from "next/image";

const BLUE = "#1f8ea3";

const Section5 = () => {
  const courses = [
    {
      title: "Quran Reading (Beginner to Advanced)",
      icon: "/Images/icons/l1.png",
    },
    {
      title: "Tajweed Rules & Practice",
      icon: "/Images/icons/l2.png",
    },
    {
      title: "Islamic Studies",
      icon: "/Images/icons/l3.png",
    },
    {
      title: "Quran Learning for Kids",
      icon: "/Images/icons/l4.png",
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
             <span className="text-black">What You</span>
         <span className="text-[#1F8AA4]"> Can Learn</span>
          </h2>
        </div>

        {/* Grid: 2 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {courses.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl
                         transition-all duration-300
                         hover:shadow-xl hover:border-[#1f8ea3]"
            >
              {/* Card content */}
              <div className="flex items-center gap-6 p-8">

                {/* Left Icon */}
                <div
                  className="h-20 w-20 flex-shrink-0 rounded-full
                             flex items-center justify-center"
                  style={{ backgroundColor: `${BLUE}15` }}
                >
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                  />
                </div>

                {/* Right Content */}
                <div>
                  <h3 className="text-gray-900 font-semibold text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section5;
