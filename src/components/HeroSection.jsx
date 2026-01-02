import React from "react";
import ContactForm from "./ContactForm";
import Link from "next/link";

import { Container } from "./shared/Container";
const HeroSection = () => {
  return (
    <>

      <Container className="relative isolate py-6 sm:py-12"> 
        <div className=" lg:flex   lg:gap-x-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto ">

            <h1 className="text-2xl md:text-4xl font-bold">
               Learn Qur’an Online with Certified Male & Female 
              <span className="text-[#1D89A3]"> Teachers</span>
            </h1>
            <p className="mt-8  max-w-md font-inter">
            Every student deserves a personal path to Qur’an. With Quran Online Tutoring, you choose: Qur’an-only or Qur’an + Islamic Studies. Sessions are tailored to your schedule, with certified male and female teachers, progress reports, and international accessibility.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/register-now"
                className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
              >
                Book Free Trial Class
              </Link> 
            </div>
          </div>
          <div className="mt-16 sm:mt-0 lg:shrink-0 lg:grow">
            <ContactForm /> 
          </div>
        </div>
      </Container>
    </>
  );
};

export default HeroSection;









