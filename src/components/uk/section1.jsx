"use client";
import React from "react";
import Image from "next/image";
import ContactForm from "../ContactForm"; // adjust path if needed

const Section1 = () => {
  return (
    <section className="flex flex-col md:flex-row bg-white">
      {/* LEFT SIDE - Content */}
      <div className="md:w-3/5 w-full flex flex-col justify-start items-center p-2 md:p-10 md:mt-0 bg-white-50">
        {/* Logo centered */}
        <div className="mb-0 flex justify-center">
          <Image
            src="/Images/logo/logo.png"
            alt="Ilmul Quran Logo"
            width={250}
            height={220}
            className="object-contain"
          />
        </div>
        {/* Headline */}
        <h1 className="text-xl md:text-2xl font-bold mb-2 text-center text-black">
          Online Quran Classes for{" "}
          <span className="text-[#1F8AA4]">
            Kids & Adults in the UK
          </span>
        </h1>

        {/* Sub-headline */}
        <h2 className="text-base md:text-lg mb-1 text-center text-gray-800">
          Learn Quran online with qualified teachers through live one-to-one classes, flexible timings, and a structured learning approach.
        </h2>
        {/* Benefit Bullets */}
        <ul className="list-none space-y-2 mb-2 text-gray-800 text-center">
          <li>✔ One-to-One Live Classes</li>
          <li>✔ Certified & Experienced Teachers</li>
          <li>✔ Flexible Timings for UK Families</li>
          <li>✔ Structured Quran & Islamic Learning</li>
        </ul>

        {/* Trust micro-copy */}
        <p className="text-sm md:text-base text-center text-gray-500">
          Trusted by families for online Quran & Islamic education worldwide.
        </p>
      </div>
      {/* RIGHT SIDE - Contact Form */}
      <div className="md:w-2/5 w-full flex justify-center items-start p-4 md:p-16 mt-2 md:mt-0">
        {/* Form without extra background */}
        <div className="w-full max-w-md">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Section1;