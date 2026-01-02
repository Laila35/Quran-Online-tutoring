"use client";

import { BiTime, BiChalkboard, BiUserCircle } from "react-icons/bi";

export default function Steps() {
  const steps = [
    {
      icon: BiTime,
      title: "Book a Trial",
      description:
        "Book a Free Trial Class with us by filling out our registration form. After that, our team member will contact you soon via WhatsApp to schedule your trial class according to your requirements.",
      rating: 5,
    },
    {
      icon: BiChalkboard,
      title: "Take Free Online Class",
      description:
        "After reviewing your trial class request, our team will assign you a tutor and will send you the Skype/Zoom Meeting link via WhatsApp or Email so you can attend the session.",
      rating: 5,
    },
    {
      icon: BiUserCircle,
      title: "Enroll in Full Course",
      description:
        "Once you are satisfied with our trial session, you can request to join our classes as a regular student. Choose a monthly plan for your regular class enrollment. Your journey begins here.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Islamic Pattern Background */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("Images/islamic-pattern.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
          }}
        />
        <div className="relative z-10">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-emerald-600 mb-4">
              Steps to Learn Quran with Us
            </h2>
            <p className="text-lg md:text-xl text-black">
              Learn online Quran with the world&apos;s best
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <article
                key={index}
                className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-emerald-700" />
                  </div>
                  <h3 className="text-xl font-medium text-emerald-900 mb-4">{step.title}</h3>
                  <p className="text-sm md:text-base text-gray-700 mb-6">{step.description}</p>

                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(step.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                {/* Connecting Lines */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-emerald-100" />
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
