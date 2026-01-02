"use client";
import React from "react";
import Image from "next/image";

const sectionData = [
  {
    desc: "Children learning Quran from the basics.",
    icon: "/Images/icons/l1.png",
  },
  {
    desc: "Adults starting or improving Quran recitation.",
    icon: "/Images/icons/l2.png",
  },
  {
    desc: "Families looking for structured Islamic education.",
    icon: "/Images/icons/l3.png",
  },
  {
    desc: "Beginners and intermediate learners.",
    icon: "/Images/icons/l4.png",
  },
];

export default function Section2() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl font-bold">
            <span className="text-black">Who Can Join Our </span>
            <span className="text-[#1F8AA4]">Online Quran Classes?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sectionData.map((item, index) => (
            <div
              key={index}
              className="
                relative rounded-2xl border border-gray-200 bg-white px-6 pt-14 pb-8 text-center
                shadow-sm transition-all duration-300
                hover:shadow-lg
                hover:border-l-4 hover:border-l-[#1F8AA4]
              "
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#1F8AA4] bg-white shadow-sm">
                  <Image
                    src={item.icon}
                    alt="Quran learning icon"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-10 text-center text-sm text-gray-500">
          This helps filter serious learners and improves lead quality.
        </p>
      </div>
    </section>
  );
}
