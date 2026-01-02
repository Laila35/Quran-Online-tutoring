import Image from 'next/image'

// SVG Icons as React Components
const GlobeIcon = () => (
  <svg
    className="h-6 w-6 text-primary flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.21 4 2.21 8 0 12M12 22c-2.21-4-2.21-8 0-12"
    />
  </svg>
)

const TeacherIcon = () => (
  <svg
    className="h-6 w-6 text-primary flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14s1.5 2 4 2 4-2 4-2m-4-4a3 3 0 100-6 3 3 0 000 6zM12 20v-6"
    />
  </svg>
)

const BookOpenIcon = () => (
  <svg
    className="h-6 w-6 text-primary flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6v12m-4-6h8m-9-6h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V8a2 2 0 012-2z"
    />
  </svg>
)

const MoonIcon = () => (
  <svg
    className="h-6 w-6 text-primary flex-shrink-0"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
    />
  </svg>
)

export default function AboutHero() {
  return (
    <div className="py-12 sm:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side – Text Content */}
        <div>
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Who <span className="text-primary">We Are</span>
          </h2>
          <p className="mt-6 leading-relaxed">
            Quran Online Tutoring is a global online academy dedicated to providing
            authentic, structured, and professional Islamic education. Our programs cover Qur’an
            recitation, Tajweed, Hifz, Arabic, and Islamic Studies for all ages — children,
            teens, adults, and reverts.
          </p>

          {/* Features List */}
          <ul className="mt-8 space-y-6 text-base text-gray-800">
            <li className="flex items-start gap-4">
              <GlobeIcon />
              <span>Serving students worldwide.</span>
            </li>
            <li className="flex items-start gap-4">
              <TeacherIcon />
              <span>Certified male & female teachers.</span>
            </li>
            <li className="flex items-start gap-4">
              <BookOpenIcon />
              <span>Structured curriculum with progress tracking.</span>
            </li>
            <li className="flex items-start gap-4">
              <MoonIcon />
              <span>Flexible classes for kids, adults, and families.</span>
            </li>
          </ul>
        </div>

        {/* Right Side – Image */}
        <div className="relative w-full h-80 sm:h-96 lg:h-[400px] rounded overflow-hidden shadow">
          <Image
            src="/Images/about/Who We Are.jpg"
            alt="Online Quran Tutoring"
            layout="fill" 
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}
