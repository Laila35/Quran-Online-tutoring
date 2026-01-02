import { AcademicCapIcon, UsersIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'
const people = [
  {
    name: 'Mushtaq Ali',
    role: 'Owner',
    imageUrl:
      '/Images/teachers/CEO.png',
   
  },
  {
    name: 'Wahaj-Ul-Islam',
    role: 'Supervisor',
    imageUrl:
      '/Images/teachers/Supervisor.png',
   
  },
  {
    name: 'Aziz Al-Ghizri',
    role: 'Manager',
    imageUrl:
      '/Images/teachers/Manager.png',
   
  },
   
]


const malePoints = [
    'Certified in Qur’an recitation with Tajweed.',
    'Experienced in teaching children, teens, and adults.',
    'Many are ḥuffāẓ (memorizers of Qur’an).',
    'Gentle and patient teaching style.',
    'Focus on building discipline, respect, and love for Qur’an.',

  ]

  const femalePoints = [
    'Certified female Qur’an tutors.',
    'Experienced in teaching kids, teens, adults, and sisters.',
    'Specialists in Tajweed, Hifz, and Islamic Studies.',
    'Sisters-only classes available for privacy and comfort.',
    'Empathetic approach for kids and reverts.',
  ]
export default function OurTeam() {
  return (
    <>
       
        <div className="max-w-7xl mx-auto px-4 sm:px-2  sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Male Teachers */}
      <div className="relative border border-gray-200 rounded-xl p-8 shadow-sm">
        {/* Icon */}
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white p-3 rounded-full shadow-lg">
            <AcademicCapIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mt-6">Male Teachers</h3>

        {/* Points */}
        <ul className="mt-6 space-y-4 text-gray-700">
          {malePoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <div className="mt-8  ">
          <Link
            href="/teachers/male"
            className="inline-block bg-primary text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-primary/90 transition"
          >
            Explore Male Teachers
          </Link>
        </div>
      </div>

      {/* Female Teachers */}
      <div className="relative border border-gray-200 rounded-xl p-8 shadow-sm">
        {/* Icon */}
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white p-3 rounded-full shadow-lg">
            <UsersIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-center text-xl font-semibold text-gray-900 mt-6">Female Teachers</h3>

        {/* Points */}
        <ul className="mt-6 space-y-4 text-gray-700">
          {femalePoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircleIcon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <div className="mt-8  ">
          <Link
            href="/teachers/female"
            className="inline-block bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-secondary/90 transition"
          >
            Explore Female Teachers
          </Link>
        </div>
      </div>
    </div>



      <div className="mx-auto max-w-7xl  text-center py-12 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-3xl">
            Meet our Tutors
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image alt={person.name} src={person.imageUrl} className="mx-auto size-40 rounded-full" width={120} height={100}/>
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
              
            </li>
          ))}
        </ul>
      </div>



      
    </>
  )
}

 


 

