"use client";
import React from "react";
import Image from "next/image";

const BLUE = "#1f8ea3"; // same blue as your design

const Section3 = () => {
  const howItWorks = [
    {
      title: "Sign Up for a Free Trial Class",
      icon: "/Images/icons/l1.png",
    },
    {
      title: "Get Matched with a Qualified Teacher",
      icon: "/Images/icons/l2.png",
    },
    {
      title: "Start Learning Quran Online from Home",
      icon: "/Images/icons/l3.png",
    },
  ];

  return (
    <section className="bg-white py-5">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="text-center mb-14">
   <h2 className="text-3xl md:text-4xl font-bold">
    <span className="text-black">How Our Online </span>
    <span className="text-[#1F8AA4]">Quran Classes Work</span>
  </h2>
   </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-white transition-all duration-300
                         hover:border-[#1f8ea3] hover:bg-[#1f8ea3]/5 hover:shadow-xl"
            >
              <div className="p-8 text-center">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className="h-20 w-20 rounded-full flex items-center justify-center transition-colors duration-300"
                    style={{ backgroundColor: `${BLUE}15` }}
                  >
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={40}
                      height={40}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section3;