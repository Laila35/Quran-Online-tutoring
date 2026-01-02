"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const MemorizeQuran = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 md:py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-12 md:gap-16 lg:gap-24">
          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative w-full h-full">
              <Image
                width={600}
                height={400}
                src="/Images/homepage/qot-quran-mobile.png"
                alt="Quran App on Mobile Phone"
                className="shadow-xl rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
              />
            </div>
          </div>
          {/* Right Content Section */}
          <div className="w-full md:w-1/2 space-y-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 font-inter mb-5">
                How to memorize Quran{" "}
                <span className="text-emerald-600">easily online</span>
              </h2>

              <div className="space-y-6 font-inter">
                <p className="text-gray-700 text-lg">
                  Memorizing the Quran is a noble and rewarding endeavor. With
                  the advent of online resources, it has become more accessible
                  than ever before.
                </p>
              </div>
            </div>

            <Link href="/register-now">
              <button
                className="bg-emerald-600 text-white px-8 py-3 transition duration-300 ease-in-out text-lg max-w-fit rounded-full font-inter"
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorizeQuran;
