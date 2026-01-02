"use client";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import ContactForm from "./ContactForm";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-gray-100 overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.08),transparent_70%)] bg-primary">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.12),transparent_70%)] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        {/* -------- GRID -------- */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-2">
          {/* -------- COLUMN 1: QURAN TRACK -------- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Qur’an Studies Track
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {[
                ["Foundations of Recitation", "/quran-track/qaida"],
                ["Rules of Tajweed", "/quran-track/tajweed"],
                ["Fluent Qur’an Reading", "/quran-track/reading"],
                ["Memorization Programs", "/quran-track/memorization"],
                ["Qur’an with Translation", "/quran-track/translation"],
                ["Certification & Ijazah", "/quran-track/ijazah"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- COLUMN 2: ISLAMIC & ARABIC -------- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Islamic Studies Track
            </h3>
            <ul className="space-y-2 text-sm font-inter mb-6">
              {[
                ["Level 1 – Kids", "/islamic-studies/level-1-kids"],
                ["Level 2 – Kids", "/islamic-studies/level-2-kids"],
                ["Level 3 – Teens", "/islamic-studies/level-3-teens"],
                ["Level 4 – Adults", "/islamic-studies/level-4-adults"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Arabic Track
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {[
                ["Arabic Beginners", "/arabic-track/beginners"],
                ["Qur’anic Vocabulary & Grammar", "/arabic-track/quranic-arabic"],
                ["Arabic for Salah", "/arabic-track/arabic-for-salah"],
                ["Arabic Conversation", "/arabic-track/conversation"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- COLUMN 3: SPECIALIZED -------- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Specialized Tracks
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {[
                ["Revert Adults", "/specialized-tracks/revert-adults"],
                ["Revert Kids", "/specialized-tracks/revert-kids"],
                ["Sisters Track", "/specialized-tracks/sisters"],
                ["Ramadan Workshops", "/specialized-tracks/ramadan"],
                ["Tafsir", "/specialized-tracks/tafsir"],
                ["Ten Qirāʾāt Studies", "/specialized-tracks/qirat"],
                ["Short Programs", "/specialized-tracks/short"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- COLUMN 4: MORE -------- */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              More
            </h3>
            <ul className="space-y-2 text-sm font-inter">
              {[
                ["Home", "/"],
                ["Methodology", "/how-it-works"],
                ["Tutors", "/teachers"],
                ["Pricing", "/pricing"],
                ["Blog", "/blog"],
                ["About Us", "/about-us"],
                ["Contact", "/contact-us"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-amber-400 transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------- COLUMN 5: CONTACT FORM -------- */}
          <div className="sm:block hidden">
            <h3 className="text-lg  w-fullfont-semibold  text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Get a Free Trial
            </h3> 
              <ContactForm /> 
            </div>
        </div>

          <div className="block sm:hidden">
            <h3 className="text-lg mt-4 w-fullfont-semibold  text-white mb-4 font-inter relative after:content-[''] after:block after:w-12 after:h-0.5 after:bg-amber-500 after:mt-2">
              Get a Free Trial
            </h3> 
              <ContactForm /> 
          </div>

        {/* -------- MISSION TEXT & CONTACT INFO -------- */}
        <div className="mt-14 text-center text-gray-300 text-sm font-inter max-w-3xl mx-auto leading-relaxed">
          Empowering learners worldwide to connect with the Qur’an through
          expert, personalized online tutoring.
        </div>

        <div className="mt-5 flex flex-col items-center justify-center text-sm font-inter text-gray-200 space-y-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-amber-500 w-4 h-4" />
            <a
              href="https://wa.me/19144550557"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-500 transition-colors"
            >
              +1 (914) 455-0557
            </a>
          </div>
          <div className="flex items-center gap-2">
           <FaEnvelope className="text-amber-500 w-4 h-4" />
            <a
              href="mailto:admin@quranonlinetutoring.com"
              className="hover:text-amber-500 transition-colors"
            >
              admin@quranonlinetutoring.com
            </a>
          </div>
        </div>

        {/* -------- BOTTOM BAR -------- */}
        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-sm text-gray-300">
          {/* Social Media */}
          <div className="flex space-x-4">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/qotutoring/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/qotutoring/" },
              { Icon: IoLogoTwitter, href: "https://x.com/qotutoring/" },
              { Icon: FaYoutube, href: "https://www.youtube.com/@qotutoring/" },
              { Icon: FaPinterest, href: "https://www.pinterest.com/qotutoring/" },
            ].map(({ Icon, href }, i) => (
              <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#A86739] to-[#DC913F] hover:bg-amber-500 transition-all duration-300">
                  <Icon className="w-4 h-4 text-white" />
                </div>
              </Link>
            ))}
          </div>

          {/* Free Trial Button */}
          <Link href="/register-now">
            <button className="px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#A86739] to-[#DC913F] hover:bg-amber-500 rounded shadow transition">
              Get Free Trial
            </button>
          </Link>

          {/* Copyright */}
          <p className="text-gray-300 text-center font-inter tracking-wide">
            © {new Date().getFullYear()}   All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
