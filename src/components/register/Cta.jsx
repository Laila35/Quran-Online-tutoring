'use client'
import { Container } from '../shared/Container.jsx'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function RegesterCta({ onGetStartedClick }) {
  return (
    <section className="relative bg-gray-50 py-6 mb-4">
      <Container className="text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-3xl font-semibold text-gray-900 leading-tight">
          Start Learning the  {' '}
          <span className="text-primary">
             Qur’an Today
          </span>
        </h2>

        {/* Description */}
        <p className="mt-5 max-w-5xl mx-auto leading-relaxed text-gray-700">
          Your journey begins now — one click, one class, one sincere intention. <br />
          Join thousands of students learning Qur’an and Islamic knowledge online with our trusted teachers.
        </p>

        {/* Contact Info */}
        <div className="mt-6 text-gray-800 text-sm sm:text-base space-y-2">
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#A86739]" />
            <span><strong>+1 (914) 455-0557</strong></span>
          </p>
          <p className="flex justify-center items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#DC913F]" />
            <a href="mailto:admin@quranonlinetutoring.com" className="text-primary hover:underline">
              admin@quranonlinetutoring.com
            </a>
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={onGetStartedClick}
            className="rounded-md bg-gradient-to-r from-[#A86739] to-[#DC913F] px-6 py-2 text-sm sm:text-base font-semibold text-white shadow-md hover:scale-105 transition-transform"
          >
            Get Started
          </button>
         
        </div>

      </Container>
    </section>
  )
}
