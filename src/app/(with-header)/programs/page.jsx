// app/programs/page.jsx
import HeroSection from '../../../components/program/HeroSection'
import LearningTracks from '../../../components/program/LearningTracks'
import IntegratedLearningModel from '../../../components/program/IntegratedLearningModel'
import WhyChoosePrograms from '../../../components/program/WhyChoosePrograms'
import Testimonials from '../../../components/program/Testimonials'
import CallToAction from '../../../components/program/CallToAction'

export const metadata = {
  title: "Programs | Online Qur’an, Arabic & Islamic Studies Courses – Quran Online Tutoring",
  description: "Explore Quran Online Tutoring’s structured learning programs — Qur’an Studies, Arabic, Islamic Studies, and Specialized Tracks — taught by certified male & female teachers for kids and adults worldwide.",
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: 'https://www.quranonlinetutoring.com/programs'
  },
  openGraph: {
    title: "Programs | Online Qur’an, Arabic & Islamic Studies Courses – Quran Online Tutoring",
    description: "Explore Quran Online Tutoring’s structured learning programs — Qur’an Studies, Arabic, Islamic Studies, and Specialized Tracks — taught by certified male & female teachers for kids and adults worldwide.",
    url: 'https://www.quranonlinetutoring.com/programs',
    siteName: 'Quran Online Tutoring',
    type: 'website',
    images: [
      {
        url: '/Images/backgrounds/qot-home-page.jpg',
        width: 1200,
        height: 630,
        alt: 'Quran Online Tutoring Programs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Programs | Online Qur’an, Arabic & Islamic Studies Courses",
    description: "Explore Quran Online Tutoring’s structured learning programs — Qur’an Studies, Arabic, Islamic Studies, and Specialized Tracks — taught by certified teachers.",
    creator: '@YourTwitterHandle'
  }
}

const ProgramsPage = () => {
  return (
    <div>
      <HeroSection />
      <LearningTracks />
      <IntegratedLearningModel />
      <WhyChoosePrograms />
      <Testimonials />
      <CallToAction />
    </div>
  )
}

export default ProgramsPage
