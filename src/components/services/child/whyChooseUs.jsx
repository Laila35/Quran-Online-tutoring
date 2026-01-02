import {
  GlobeAltIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { Container } from '../../shared/Container';
const trustedData = [
  {
    icon: <GlobeAltIcon className="h-8 w-8 text-secondary" />,
    text: "Serving USA, UK, Canada, Australia, Europe, and Middle East.",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-secondary" />,
    text: "One-to-one online classes for kids, teens, and adults.",
  },
  {
    icon: <AcademicCapIcon className="h-8 w-8 text-secondary" />,
    text: "Male & female teachers for comfort and privacy.",
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-secondary" />,
    text: "Authentic curriculum rooted in Qur’an & Sunnah.",
  },
  // {
  //   icon: <ClockIcon className="h-8 w-8 text-green-500" />,
  //   text: "Flexible timings across global time zones.",
  // },
];

export default function WhyChooseUS({title,items}) {
  return (
    <Container className="py-12 sm:py-16 bg-gray-50">
      <div  >
        <h2 className="text-xl sm:text-3xl font-semibold text-center mb-16">
         {title[0].title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative  rounded-xl shadow-md p-6 text-center transition hover:shadow-lg border border-cyan-300"
            >
              
              {/* Card Content */}
              <div className="mt-2">
                <p className=" font-medium leading-relaxed">
                  {item.description[0].text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
