import React from "react";
import Image from "next/image";
import Link from "next/link";


const TajweedOnline = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 md:py-16 p-8 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-x-10 lg:gap-28">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-5xl font-semibold text-gray-900 font-inter mb-5">
                Easy Quran learning through{" "}
                <span className="text-emerald-500">online</span>
              </h2>

              <div className="space-y-4 font-inter">
                <p className="text-gray-600 text-base">
                  Online Quran learning gives you the convenience of learning
                  Quran lessons, which you can perform at your own time and place.
                  This is an important opportunity for religious education that
                  can be easily obtained.
                </p>

                <p className="text-gray-600 text-base">
                  Online Quranic education offers flexibility and convenience,
                  allowing you to tailor your learning experience to your needs
                  and schedule.
                </p>
              </div>
            </div>
<Link href="/register-now">

            <button
              className="bg-emerald-600 text-white px-6 py-3 rounded-full 
              hover:bg-emerald-500 transition duration-300 ease-in-out 
              hover:shadow-lg text-sm md:text-base max-w-fit font-inter"
              >
              Get Registered
            </button>
              </Link>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex items-center">
            <div className="relative w-full h-full">
              <Image
              height={300}
              width={600}
                src="/Images/homepage/qot-tajweed.png"
                alt="Quran tajweed learning"
                className="rounded-tl-3xl rounded-tr-3xl rounded-br-3xl"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TajweedOnline;
