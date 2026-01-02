
import Image from 'next/image'

const parentsTrust = [
  {
    text: 'Trained in Tajweed and Islamic Sciences.',
    icon: '/Images/teachers/Trained in Tajweed and Islamic Sciences.jpg',
  },
  {
    text: 'Background checks and professionalism.',
    icon: '/Images/teachers/Background checks and professionalism.jpg',
  },
  {
    text: 'Gentle with children, motivating with teens, respectful with adults.',
    icon: '/Images/teachers/Gentle with children, motivating with teens, respectful with adults.jpg',
  },
  {
    text: 'One-to-one attention ensures progress.',
    icon: '/Images/teachers/One-to-one attention ensures progress.jpg',
  },
  {
    text: 'Available across global time zones.',
    icon: '/Images/teachers/Available across global time zones.jpg',
  },
]

const teacherTraining = [
  {
    text: 'Tajweed precision (makhārij & ṣifāt).',
    icon: '/Images/teachers/Tajweed precision (makhārij & ṣifāt).jpg',
  },
  {
    text: 'Teaching methodology for online platforms.',
    icon: '/Images/teachers/Teaching methodology for online platforms.jpg',
  },
  {
    text: 'Adab al-ʿilm – Islamic manners in teaching.',
    icon: '/Images/teachers/Adab al-ʿilm – Islamic manners in teaching.jpg',
  },
  {
    text: 'Student engagement for kids & adults.',
    icon: '/Images/teachers/Student engagement for kids & adults.jpg',
  },
]

export default function TeacherHighlights() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-2 ">
        {/* Section 1 */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Why Parents <span className="text-primary">Trust Our Teachers</span>
        </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
  {parentsTrust.map((item, index) => (
    <div
      key={index}
      className="relative hover:border-primary rounded-xl border border-gray-200 p-6 shadow-sm text-center hover:shadow-md transition"
    >
      {/* Icon container positioned above card */}
      <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow">
          <Image
            src={item.icon}
            alt="ss"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>
      </div>

      {/* Add some top padding so text doesn't go under the icon */}
      <div className="pt-10">
        <p>{item.text}</p>
      </div>
    </div>
  ))}
</div>


        {/* Section 2 */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-10">
          Teacher <span className="text-primary">Training & Standards</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teacherTraining.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 p-6 shadow-sm text-center hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shadow ">
                  <Image
                    src={item.icon}
                    alt="ss"
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
