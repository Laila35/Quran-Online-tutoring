import Link from "next/link";
import { FaCheckCircle, FaEnvelope, FaPhone } from "react-icons/fa";
import React from "react";
import BackgroundBeams from '../../components/ui/background-beams.jsx'

export const metadata = {
  title: 'Thank You | Quran ',
  description: 'Thank you for submitting the form. We will reach out to you soon.',
};

const ThankYouPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <BackgroundBeams />

      {/* Content Container with increased transparency and blur */}
      <div className="relative z-20 max-w-3xl w-full px-6 md:px-10 lg:px-16 py-10 md:py-16 bg-white/10  rounded-lg  text-center flex flex-col items-center">
        
        {/* Success Icon */}
        <FaCheckCircle className="text-amber-500 text-6xl md:text-7xl mb-6" />

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Thank You!
        </h1>

        {/* Message */}
        <p className="text-gray-700 text-lg md:text-xl mb-8">
          We appreciate you reaching out. Our team will review your submission and contact you soon.
        </p>

        {/* Contact Info */}
        <div className="text-gray-600 space-y-4 mb-8">
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>admin@QuranOnlineTutoring.com</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaPhone className="text-blue-500 text-xl" />
            <span>+1 (914) 455-0557</span>
          </div>
        </div>

        {/* Back to Home Button */}
        <Link href="/" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 ease-in-out shadow-md">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
