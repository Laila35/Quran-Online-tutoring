import React from "react";
import WorkSection from "../../../components/work/WorkSection";
import StepProcess from "../../../components/work/StepProcess";
import WhyLoveSystem from "../../../components/work/WhyLoveSystem";
import CallToAction from "../../../components/work/CallToAction";
import WorkFaqs from "../../../components/work/WorkFaqs";
import Script from "next/script";

 
export const metadata = {
  title: "How It Works | Quran Online Tutoring – Trial, Placement & Reports",
  description:
    "See how Quran Online Tutoring works: free trial class, placement assessment, personalized plan, structured classes, and progress reports. Simple, professional onboarding for Qur’an and Islamic Studies.",
  keywords: [
    "Qur’an learning",
    "online Qur’an classes",
    "Islamic studies",
    "student-focused learning",
    "Qur’an teachers",
    "progress reports",
  ],
  alternates: {
    canonical: "https://quranonlinetutoring.com/how-it-works",
  },
  openGraph: {
    title: "How It Works | Quran Online Tutoring – Trial, Placement & Reports",
    description:
      "See how Quran Online Tutoring works: free trial class, placement assessment, personalized plan, structured classes, and progress reports. Simple, professional onboarding for Qur’an and Islamic Studies.",
    url: "https://quranonlinetutoring.com/how-it-works",
    siteName: "Quran Online Tutoring",
    images: [
      {
        url: "https://quranonlinetutoring.com/Images/how-it-works/og-how-it-works.jpg",
        width: 1200,
        height: 630,
        alt: "Qur’an Learning Process at Quran Online Tutoring",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works | Quran Online Tutoring – Trial, Placement & Reports",
    description:
      "Understand how Quran Online Tutoring’s process works — from free trial to placement and progress tracking. Simple, professional Qur’an learning online.",
    images: [
      "https://quranonlinetutoring.com/Images/how-it-works/og-how-it-works.jpg",
    ],
  },
  robots: { index: true, follow: true },
};

//
// ✅ Page Component
//
const Page = () => {
  // ✅ Optional: FAQ Schema for Rich Results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the trial class work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After signing up, you’ll receive a free trial class with one of our certified Qur’an teachers to assess your level and goals.",
        },
      },
      {
        "@type": "Question",
        name: "Can I choose my teacher after the trial?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can choose a male or female teacher after the trial, based on your preference and comfort.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide progress reports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, students receive monthly progress reports and completion certificates after assessments.",
        },
      },
    ],
  };

  // ✅ Optional: Breadcrumb Schema for rich navigation results
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://quranonlinetutoring.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "How It Works",
        item: "https://quranonlinetutoring.com/how-it-works",
      },
    ],
  };

  return (
    <>
      {/* ✅ Inject JSON-LD Schemas */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ✅ Page Content */}
      <div>
        <WorkSection />
        <StepProcess />
        <WhyLoveSystem />
        <CallToAction />
        <WorkFaqs />
      </div>
    </>
  );
};

export default Page;
