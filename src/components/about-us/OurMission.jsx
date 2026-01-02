import Image from 'next/image'
 
// Replace these icons with your own images (SVG or PNG)
const missions = [
  {
    icon: '/Images/about/To teach Qur’an with Tajweed to all ages..jpg',
    text: 'To teach Qur’an with Tajweed to all ages.',
  },
  {
    icon: '/Images/about/To nurture faith and manners with Islamic Studies..jpg',
    text: 'To nurture faith and manners with Islamic Studies.',
  },
  {
    icon: '/Images/about/To empower reverts and busy professionals with flexible learning..jpg',
    text: 'To empower reverts and busy professionals with flexible learning.',
  },
  {
    icon: '/Images/about/Adab.jpg',
    text: 'To maintain adab, professionalism, and quality in every class.',
  },
]

export default function OurMission() {
  return (
    <div className="py-12 sm:py-16">
      <h2 className="sm:text-3xl text-2xl font-semibold text-center mb-20">
        Our <span className="text-primary">Mission</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {missions.map((mission, index) => (
          <div
            key={index}
            className="relative  border rounded-xl pt-14 pb-6 px-6 text-center shadow hover:shadow-xl transition duration-300"
          >
            {/* Icon with ring effect */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className=" bg-white border-2 border-primary p-2 rounded-full   flex items-center justify-center shadow-md">
                <Image
                  src={mission.icon}
                  alt="icon"
                  width={52}
                  height={52}
                />
              </div>
            </div>

            {/* Text */}
            <p className=" leading-relaxed">{mission.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
