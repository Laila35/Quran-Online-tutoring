 
import Image from 'next/image'

// Sample icons (you can replace with your own SVGs or images)
const values = [
  {
    title: 'Authenticity',
    description: 'Qur’an & Sunnah as foundation.',
    icon: '/Images/about/Accessibility.jpg',
  },
  {
    title: 'Adab',
    description: 'Respect, patience, and gentleness in teaching.',
    icon: '/Images/about/Adab.jpg',
  },
  {
    title: 'Excellence',
    description: 'Professional scheduling, reports, and communication.',
    icon: '/Images/about/Excellence.jpg'
  },
  {
    title: 'Accessibility',
    description: 'Classes for kids, reverts, sisters, and adults.',
    icon: '/Images/about/Accessibility.jpg',
  },
]

export default function CoreValues() {
  return (
    <div className="py-12 sm:py-16">
      <h2 className="text-3xl font-semibold text-center mb-16">Our <span className="text-primary">Core Values</span></h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border hover:border-primary shadow rounded-lg p-6 transition hover:shadow-lg"
          >
            <div className="mb-4">
              <Image
                src={item.icon}
                alt={item.title || 'Icon'}
                width={80}
                height={80}
                className="mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
// 