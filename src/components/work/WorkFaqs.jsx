import React from 'react'
import Faqs from '../shared/Faqs'
const faqs = [
  {
    question: "How does Quran Online Tutoring work?",
    answer:
      "We offer one-on-one live Quran classes through Zoom or Skype. After registration, we match you with a qualified tutor based on your goals, availability, and preferences. Your teacher guides you step-by-step in recitation, Tajweed, or memorization.",
  },
  {
    question: "How can I start learning Quran online?",
    answer:
      "Simply fill out our free trial form. Our team will contact you to schedule your trial class. Once you’re satisfied, you can choose a suitable plan and continue regular lessons at your preferred times.",
  },
  {
    question: "Are the classes live and interactive?",
    answer:
      "Yes! All our sessions are live and one-on-one, allowing direct interaction with your teacher. Students can ask questions, share their screens, and receive instant feedback.",
  },
  {
    question: "What tools do I need for online Quran classes?",
    answer:
      "You’ll need a computer, tablet, or smartphone with an internet connection. Classes are conducted using Zoom or Skype — no complex setup required.",
  },
  {
    question: "Can I choose my own tutor and class schedule?",
    answer:
      "Yes. You can request a male or female tutor and choose your preferred class days and times. We offer flexible scheduling to fit your routine.",
  },
];

const WorkFaqs = () => {
  return (
    <div>
      <Faqs faqs={faqs}/>
    </div>
  )
}

export default WorkFaqs
