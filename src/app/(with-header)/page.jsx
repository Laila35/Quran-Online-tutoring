import React from "react";
import QuranLearning from "../../components/QuranLearning";
import MemorizeQuran from "../../components/MemorizeQuran";
import LearningOptions from "../../components/LearningOptions";
import Testimonials from "../../components/landing/Testimonials";
import CourseSlider from "../../components/CourseSlider";
import HeroSection from "../../components/HeroSection";
import WhyChooseUs from "../../components/WhyChooseUs";
import TajweedOnline from "../../components/tajweedonline";
import Steps from "../../components/Steps";
import Cta from "../../components/shared/Cta";
import { SecondaryFeatures } from "../../components/shared/SecondaryFeatures"; 
import Faqs from "../../components/shared/Faqs";
const faqs = [
  {
    question: "What is Quran Online Tutoring?",
    answer:
      "Quran Online Tutoring is an online learning platform that connects students around the world with qualified male and female Quran tutors. We provide one-on-one live Quran classes for kids and adults, focusing on recitation, Tajweed, memorization, and Islamic studies.",
  },
  {
    question: "How do the online Quran classes work?",
    answer:
      "Classes are conducted live through Zoom or Skype with screen sharing and interactive tools. Each student is assigned a dedicated tutor who provides personalized attention, step-by-step learning, and progress tracking according to your level and goals.",
  },
  {
    question: "Can kids learn Quran online effectively?",
    answer:
      "Absolutely! Our tutors specialize in teaching children through engaging, age-appropriate methods. Kids learn Quran recitation, Tajweed, and Islamic basics in a fun, interactive environment with male or female teachers upon request.",
  },
  {
    question: "Do you offer free trial classes?",
    answer:
      "Yes! We offer a free one-on-one trial class so you can experience our teaching method before enrolling. Simply fill out the registration form, and we’ll schedule your free trial at your convenience.",
  },
  {
    question: "What are the qualifications of your Quran tutors?",
    answer:
      "All of our tutors are certified, experienced, and fluent in both Arabic and English. Many are graduates from renowned Islamic universities and hold Ijazah certifications in Tajweed and Quran memorization.",
  },
  {
    question: "Do you have female Quran tutors for sisters and kids?",
    answer:
      "Yes, we have a dedicated team of qualified female tutors who specialize in teaching sisters and young learners in a comfortable and supportive online environment.",
  },
  {
    question: "What is the class schedule and duration?",
    answer:
      "Classes are flexible — you can choose your preferred days and times. Typically, each class lasts 30 to 60 minutes, depending on your learning plan.",
  },
  {
    question: "How can I register for Quran classes?",
    answer:
      "You can easily register by clicking on the 'Get Free Trial' or 'Register Now' button on our website. After submitting your details, our team will contact you to arrange your first free class.",
  },
];


export const metadata = {
  title: "Quran Online Tutoring | Learn Quran Online with Tajweed",
  description:
    "Online Quran Classes - Learn Quran Online with Tajweed for Kids & Adults from experienced tutors. Start your journey today!",
  keywords:
    "Online Quran Classes, Learn Quran Online, Tajweed, Quran for Kids, Quran for Adults, Islamic Studies",
  authors: [{ name: "Quran Online Tutoring" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.quranonlinetutoring.com",
  },
  openGraph: {
    title: "Quran Online Tutoring | Learn Quran Online with Tajweed",
    description:
      "Join our Online Quran Classes and learn the Quran with Tajweed from expert tutors. Perfect for kids and adults.",
    url: "https://www.quranonlinetutoring.com",
    type: "website",
    images: [
      {
        url: "/images/quran-learning-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Learn Quran Online with Tajweed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quran Online Tutoring | Learn Quran Online with Tajweed",
    description:
      "Online Quran Classes - Learn Quran Online with Tajweed for Kids & Adults from expert tutors.",
    images: ["/images/quran-learning-banner.jpg"],
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};
 

const Home = () => { 
  return (
    <>
      <HeroSection />
      <div className="bg-gray-50 py-12">
        <SecondaryFeatures />
      </div>
      <div>
        <LearningOptions />
        <QuranLearning />
        <WhyChooseUs />
      </div>
      <Testimonials />
      <Cta
        title="Start Your Qur’an Journey Today"
        description=" Every journey begins with a single step. Whether you’re helping your child take their first look at Noorani Qaida, or you’re an adult aiming to memorize Qur’an, Quran Online Tutoring is your partner. With certified male and female teachers, flexible scheduling, and authentic Islamic curriculum, we ensure your Qur’an journey is structured, personal, and blessed."
        benefits={[
          "Competitive salaries",
          "Remote work options",
          "30 days paid vacation",
          "Inclusive culture",
        ]}
        imageSrc="/Images/homepage/Start Your Qur’an Journey Today.svg"
        buttonText="Book Free Trial Class"
        buttonLink="/register-now"
      />
      <Faqs faqs={faqs}/>
    </>
  );
};

export default Home;
