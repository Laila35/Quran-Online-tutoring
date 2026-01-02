 
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const features1 = [
  {
    title: 'Integrated Curriculum',
    description: 'Qur’an + Islamic Studies in one program.',
  },
  {
    title: 'Certified Teachers',
    description: 'Male & female tutors trained in Tajweed and Islamic sciences.',
  },
  {
    title: 'Flexibility',
    description: '30-minute or 1-hour sessions, 2–7 days a week.',
  },
]

const features2 = [
  {
    title: 'Student-Centered',
    description: 'Choice of Qur’an-only or Qur’an + Islamic Studies.',
  },
  {
    title: 'Professional System',
    description: 'Trial classes, placement, progress reports, certification.',
  },
]

export default function MakesUs() {
  return (
    <div className="py-12 sm:py-16">
      <h2 className="text-3xl font-bold text-center mb-12">What Makes Us <span className="text-primary">Different?</span></h2>

      {/* Card 1: 3 Features */}
      <div className=" border border-primary rounded-xl p-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features1.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg text font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card 2: 2 Features */}
      <div className="border border-primary rounded-xl p-8 mx-auto max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features2.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
