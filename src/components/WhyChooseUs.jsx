import {
  GlobeAltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { Container } from './shared/Container';
const trustedData = [
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-primary" />,
    text: "Serving USA, UK, Canada, Australia, Europe, and Middle East.",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-primary" />,
    text: "One-to-one online classes for kids, teens, and adults.",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-primary" />,
    text: "Male & female teachers for comfort and privacy.",
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-primary" />,
    text: "Authentic curriculum rooted in Qur’an & Sunnah.",
  },
  // {
  //   icon: <ClockIcon className="h-8 w-8 text-green-500" />,
  //   text: "Flexible timings across global time zones.",
  // },
];

export default function TrustedCardsSection() {
  return (
    <Container className="py-12 sm:py-16 bg-gray-50">
      <div  >
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-16">
          Trusted by Families <span className='text-primary'>Worldwide</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustedData.map((item, index) => (
            <div
              key={index}
              className="relative  rounded-xl shadow-md p-6 text-center transition hover:shadow-lg border border-cyan-300"
            >
              {/* Icon Circle */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-14 h-14 flex items-center justify-center rounded-full
               border border-primary bg-white shadow-sm">
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="mt-10">
                <p className=" font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
