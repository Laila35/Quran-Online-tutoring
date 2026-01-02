"use client";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { testimonialsData } from "../lib/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Testimonial = () => {
  return (
    <Swiper
      spaceBetween={20}
      modules={[Autoplay]}
      slidesPerView={2}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      className="my-12 "
    >
      {testimonialsData.map((testimonial) => (
        <SwiperSlide key={testimonial?.id} className="p-4 ">
          <div className="relative rounded-lg border border-teal-100 overflow-hidden p-6 h-52 flex flex-col justify-between">
            <div className="absolute top-4 left-4 text-gray-500 opacity-75">
              <FaQuoteLeft size={20} color="teal"/>
            </div>
            <div className="absolute bottom-4 right-4 text-gray-500 opacity-75">
              <FaQuoteRight size={20} color="teal"/>
            </div>
            <div className="pt-8">
              <div className="text-gray-800 font-semibold text-lg mb-2">
                {testimonial?.title}
              </div>
              <div className="text-gray-600 text-sm">
                {testimonial?.description}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Testimonial;