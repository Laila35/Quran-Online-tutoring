import {
  GlobeAltIcon,
  ClockIcon,
  CalendarDaysIcon,
  MapPinIcon, GlobeAmericasIcon
} from '@heroicons/react/24/solid';
import { Container } from '../shared/Container';
const officeHours = [
  {
    title: "Available Worldwide",
    description: "We offer classes across all time zones for students globally.",
    icon: GlobeAltIcon,
  },
  {
    title: "Flexible Scheduling",
    description: "Choose class times that suit you: morning, afternoon, or evening.",
    icon: ClockIcon,
  },
  {
    title: "7 Days a Week",
    description: "Classes are available every day of the week, based on your preference.",
    icon: CalendarDaysIcon,
  },
]
export default function InfoSections() {
  return (
    <>
  
       
     {/* Section 4: Office Hours (with separate cards) */}
    <Container className="bg-gray-50 py-12 sm:py-16 ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-12">Office <span className='text-primary'>Hours</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {officeHours.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
              >
                <Icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Container>


      {/* Section 5: Location */}
      <div className="py-20 px-6 sm:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl sm:text-3xl font-semibold mb-10">Location</h2>

        <div className="bg-gray-50 rounded-2xl shadow border border-gray-200 p-8 sm:p-10 flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-6">
            <GlobeAmericasIcon className="h-10 w-10 text-primary" />
          </div>

          <p className=" leading-relaxed">
            <strong>Quran Online Tutoring</strong> is an international online academy. We serve students in the{' '}
            <strong>USA, UK, Canada, Australia, Europe, Middle East</strong>, and beyond.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
