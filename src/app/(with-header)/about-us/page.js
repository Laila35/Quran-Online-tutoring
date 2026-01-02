// app/about-us/page.tsx
import React from "react";
import { Container } from "../../../components/shared/Container";
import AboutHero from "../../../components/about-us/Hero";
import OurVision from "../../../components/about-us/OurVision";
import OurMission from "../../../components/about-us/OurMission";
import MakesUs from "../../../components/about-us/MakesUs";
import CoreValues from "../../../components/about-us/CoreValues";
import AboutCta from "../../../components/about-us/Cta";
import Faqs from "../../../components/shared/Faqs";
import Script from "next/script";

 
export const metadata = {
  title: "About Quran Online Tutoring | Learn Qur’an with Certified Teachers",
  description:
    "Discover our mission to make authentic Qur’an education accessible worldwide through qualified teachers and personalized online learning.",
  keywords: [
    "Qur’an learning",
    "online Qur’an classes",
    "Islamic studies",
    "certified teachers",
    "online Qur’an tutoring",
  ],
  authors: [{ name: "Quran Online Tutoring", url: "https://quranonlinetutoring.com" }],
  alternates: { canonical: "https://yourdomain.com/about-us" },
  openGraph: {
    title: "About Quran Online Tutoring",
    description:
      "Discover our mission to make authentic Qur’an education accessible worldwide through qualified teachers and personalized online learning.",
    url: "https://quranonlinetutoring.com/about-us",
    siteName: "Quran Online Tutoring",
    images: [
      {
        url: "https://quranonlinetutoring.com/images/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Quran Online Tutoring",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Quran Online Tutoring",
    description:
      "Discover our mission to make authentic Qur’an education accessible worldwide through qualified teachers and personalized online learning.",
    images: ["https://quranonlinetutoring.com/images/og-about.jpg"],
    robots: { index: true, follow: true },
  },
}; 
 
const faqs = [
  {
    id: 1,
    question: "What is the mission of Quran Online Tutoring?",
    answer:
      "Our mission is to make authentic Qur’an learning accessible to every Muslim worldwide. We aim to help students recite, memorize, and understand the Qur’an with Tajweed under the guidance of qualified teachers.",
  },
  {
    id: 2,
    question: "Who are the teachers at Quran Online Tutoring?",
    answer:
      "All our tutors are certified, experienced, and trained in online Qur’an teaching. They hold Ijazah certifications and are fluent in both Arabic and English, making learning easy for students of all backgrounds.",
  },
  {
    id: 3,
    question: "What makes Quran Online Tutoring unique?",
    answer:
      "We provide personalized one-on-one Qur’an classes tailored to each student’s level, goals, and availability. Our modern online platform combines traditional Islamic teaching methods with flexible scheduling and interactive tools.",
  },
  {
    id: 4,
    question: "Who can join Quran Online Tutoring?",
    answer:
      "Our program welcomes students of all ages — from kids taking their first steps in Qaida to adults seeking to improve Tajweed or memorize the Qur’an. Both male and female tutors are available upon request.",
  },
  {
    id: 5,
    question: "Where are your students and teachers located?",
    answer:
      "We teach students from all over the world, including the USA, UK, Canada, Australia, and the Middle East. Our teachers come from reputable Islamic educational backgrounds in countries such as Egypt and Pakistan.",
  },
];


export default function AboutUs() { 
const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quran Online Tutoring",
    url: "https://quranonlinetutoring.com",
    logo: "https://quranonlinetutoring.com/images/logo.png",
    sameAs: [
      "https://facebook.com/yourpage",
      "https://twitter.com/yourhandle",
      "https://instagram.com/yourhandle",
    ],
  };

  return (
    <> 
      <Script id="organization-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>

      <Container className="overflow-hidden font-inter relative">
        <main>
          <AboutHero />
          <OurVision />
          <OurMission />
          <MakesUs />
          <CoreValues />
          <AboutCta />
          <Faqs faqs={faqs} />
        </main>
      </Container>
    </>
  );
}
