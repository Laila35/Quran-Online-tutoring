import Link from "next/link";
import React from "react";
import OurTeam from "../../../components/teachers/Team";
import TutorCta from "../../../components/teachers/Cta";
import { Container } from "../../../components/shared/Container";
import Faqs from "../../../components/shared/Faqs";
import TeacherHighlights from "../../../components/teachers/TeacherHighlights"; 
import Script from "next/script";
import ContactForm from "../../../components/ContactForm";
export const metadata = {
  title: "Online Qur’an Teachers | Certified Male & Female Instructors",
  description:
    "Learn Qur’an with experienced online Qur’an teachers. Certified male and female instructors in Tajweed, Hifz, and Islamic Studies. One-to-one guidance for kids and adults.",
  alternates: {
    canonical: "https://quranonlinetutoring.com/qot-teachers",
  },
  openGraph: {
    title: "Online Qur’an Teachers | Certified Male & Female Instructors",
    description:
      "Learn Qur’an with experienced online Qur’an teachers. Certified male and female instructors in Tajweed, Hifz, and Islamic Studies. One-to-one guidance for kids and adults.",
    url: "https://quranonlinetutoring.com/qot-teachers",
    siteName: "Quran Online Tutoring",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://quranonlinetutoring.com/Images/teachers/Our-Teachers (1).jpg",
        width: 1200,
        height: 630,
        alt: "Our Certified Qur’an Teachers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Qur’an Teachers | Certified Male & Female Instructors",
    description:
      "Learn Qur’an online with certified male and female teachers specializing in Tajweed, Hifz, and Islamic Studies.",
    images: ["https://quranonlinetutoring.com/Images/teachers/Our-Teachers (1).jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const TeachersPage = () => {
  const faqs = [
    {
      question: "Are teachers certified?",
      answer:
        "Yes, all teachers are certified in Tajweed and Qur’an teaching.",
    },
    {
      question: "Can I choose a male or female teacher?",
      answer: "Yes, you may select during onboarding.",
    },
    {
      question: "Do teachers speak English?",
      answer: "Yes, teachers speak English, Arabic, and Urdu.",
    },
    {
      question: "Do teachers teach adults and kids?",
      answer: "Yes, our team includes specialists for all age groups.",
    },
    {
      question: "Can I change teachers later?",
      answer: "Yes, teacher switching is allowed upon request.",
    },
  ]; 
 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Container> 
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-2  sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-2xl sm:text-4xl  font-semibold">
              Our Teachers – Certified Male & Female{" "}
              <span className="text-primary">Qur’an Instructors</span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-teal-500 rounded-full mt-4 mb-6"></div>

            <p className="text-gray-700 leading-relaxed">
              Behind every successful student is a dedicated teacher. At Quran
              Online Tutoring, our teachers are certified, professional, and
              trained in teaching Qur’an, Tajweed, Hifz, Arabic, and Islamic
              Studies to students worldwide. We provide both male and female
              teachers so families can choose what makes them most comfortable.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full justify-center flex sm:justify-end">
            <ContactForm/>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <OurTeam />
      <TeacherHighlights />
      <TutorCta cta="" />
      <Faqs id="faq" faqs={faqs} />
    </Container>
  );
};

export default TeachersPage;
