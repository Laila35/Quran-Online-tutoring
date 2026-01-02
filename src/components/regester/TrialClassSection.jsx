import { Clock, BookOpenCheck, GraduationCap, ListChecks } from "lucide-react";
 

export default function TrialClassSection() {
  const steps = [
    {
      time: "10 minutes",
      title: "Introduction & Assessment",
      description:
        "Meet your teacher and share your goals. The teacher will assess your current level and pronunciation.",
      icon: Clock,
    },
    {
      time: "15 minutes",
      title: "Real Qur’an recitation / reading / Tajweed",
      description:
        "Experience a real Qur’an lesson — recitation, reading, or Tajweed — based on your chosen course.",
      icon: BookOpenCheck,
    },
    {
      time: "5 minutes",
      title: "Islamic Studies sample (Duʿās, manners, or short Hadith)",
      description:
        "Enjoy a short session with Duʿās, manners, or a brief Hadith to complete your class.",
      icon: ListChecks,
    },
     
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto sm:px-[3.3rem] px-6 text-center">
        {/* Header */}
        <div 
          className="mb-14"
        >
          <h2 className="text-3xl sm:text-3xl font-semibold text-slate-900 mb-3">
            What to Expect in the  <span className="text-primary">Trial Class</span>
          </h2>
          <p className=" text-slate-600">
            During Your First Class, You’ll Experience:
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index} 
              className="bg-white shadow-sm hover:shadow-lg rounded-2xl p-6 text-left border border-slate-100 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* <div className="p-3 bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-full shadow-md">
                  <step.icon className="w-6 h-6" />
                </div> */}
                <div>
                  <h3 className=" font-semibold text-slate-900 text-center">
                    {step.title}
                  </h3>
                  <p className=" text-slate-500 italic mb-2 text-center">
                    {step.time}
                  </p>
                  <p className="text-slate-600  leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
