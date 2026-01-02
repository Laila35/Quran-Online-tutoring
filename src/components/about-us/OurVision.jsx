import Image from 'next/image'
import { Container } from '../shared/Container'

export default function OurVision() {
  return (
    <div className="py-12 sm:py-16">
      {/* Section Heading */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-20">
        Our <span className="text-primary">Vision</span>
      </h2>

      {/* Vision Card */}
      <div className="relative text-center max-w-4xl mx-auto bg-white border border-dashed border-primary rounded-xl p-10 shadow-lg shadow-primary/10 transition   hover:border-solid duration-300">

        {/* Circle Icon Badge */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full   p-4 shadow-lg flex items-center justify-center">
            <Image
              src="/Images/about/Our vision.jpg" // Use your egg-style icon here
              alt="Vision Icon"
              width={80}
              height={80}
            />
          </div>
        </div>

        {/* Card Text */}
        <p className="text-lg text-gray-700 font-medium leading-relaxed">
          To make <span className="text-primary font-semibold">Qur’an</span> and authentic Islamic knowledge
          accessible to every Muslim family worldwide, regardless of location,
          through <span className="text-primary font-semibold">professional, flexible,</span> and
          <span className="text-primary font-semibold"> trustworthy</span> online teaching.
        </p>
      </div>
    </div>
  )
}
