// "use client";
// import { courses } from "../../lib/courses";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import CourseTestimonials from "../../components/CourseTestimonials";
// import {
//   ArrowLeft,
//   ChevronRight,
//   Star,
//   Clock,
//   Users,
//   Award,
//   BookOpen,
//   Check,
// } from "lucide-react";
// import StickyContactForm from "../../components/StickyContactForm";
// import { useParams } from "next/navigation";
// import Head from "next/head";

// const CourseDetailPage = () => {
//   const { slug } = useParams(); // ✅ Correct hook to get dynamic route params

//   const course = courses.find((course) => course.href === slug);

//   if (!course) {
//     // ✅ Handle course not found
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center text-center">
//         <h1 className="text-3xl font-bold text-red-600">Course Not Found</h1>
//         <p className="mt-4 text-gray-600">
//           Sorry, the course youre looking for doesnt exist.
//         </p>
//         <Link href="/" className="mt-6 text-blue-500 underline">
//           Go Back to Home
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>

//     <head>
//      <title>{course.title + " Course - Quran Online Tutoring"}</title>
//     </head>

//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col lg:flex-row gap-8 py-8">
          

//           {/* Right Column - Sticky Form */}
//          <div className="w-full lg:w-1/3 order-1 lg:order-2 pt-10">
//             <div className="sticky top-8">
//               <StickyContactForm />
//             </div>
//           </div>


//           {/* Main Content - Left Column */}
// <div className="w-full lg:w-2/3 order-2 lg:order-1">
          
//             {/* Hero Section */}
//             <header className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12 md:py-16">
//               <div className="absolute inset-0">
//                 <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
//               </div>
//               <div className="relative">
//                 <nav className="mb-8 flex items-center justify-between">
//                   <Link
//                     href="/courses"
//                     className="group inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-6 py-3 text-lg text-gray-600 transition-all hover:border-emerald-200 hover:text-emerald-700"
//                   >
//                     <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
//                   </Link>
//                   <div className="flex items-center gap-6 text-emerald-600">
//                     <div className="flex items-center gap-2">
//                       <Star className="h-5 w-5 text-amber-400" />
//                       <span className="font-semibold">4.9</span>
//                     </div>
//                     <div className="h-5 w-px bg-gray-200" />
//                     <span className="text-sm text-gray-500">2,400+ enrolled</span>
//                   </div>
//                 </nav>

//                 <div className="grid gap-8">
//                   <div>
//                     <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-lg text-emerald-700">
//                       <Star className="h-4 w-4 text-amber-400" />
//                       <span>Featured Course</span>
//                     </div>
//                     <h1 className="mb-4 text-4xl font-serif font-light text-gray-900 md:text-5xl">
//                       {course.title}
//                     </h1>
//                     <p className="mb-6 text-lg leading-relaxed text-gray-600 md:text-xl">
//                       {course.description.intro}
//                     </p>

//                     <div className="flex flex-wrap gap-6">
//                       <div className="flex items-center gap-3 text-gray-600">
//                         <Clock className="h-5 w-5 text-emerald-600" />
//                         <span>12 weeks</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-600">
//                         <Users className="h-5 w-5 text-emerald-600" />
//                         <span>All levels</span>
//                       </div>
//                       <div className="flex items-center gap-3 text-gray-600">
//                         <Award className="h-5 w-5 text-emerald-600" />
//                         <span>Certificate</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="relative aspect-video overflow-hidden rounded-lg">
//                     <Image
//                       src={course.src}
//                       width={800}
//                       height={600}
//                       alt={`${course.title} Image`}
//                       className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//                   </div>
//                 </div>
//               </div>
//             </header>

//             {/* Quick Stats */}
//             <section className="my-8 border-t border-emerald-100 bg-white py-8">
//               <div className="grid grid-cols-2 gap-4 divide-x divide-emerald-100 md:grid-cols-4">
//                 {[
//                   { label: "Total Hours", value: "60+", icon: Clock },
//                   { label: "Active Students", value: "2.4K+", icon: Users },
//                   { label: "Completion Rate", value: "94%", icon: Award },
//                   { label: "Total Modules", value: "12", icon: BookOpen },
//                 ].map((stat, index) => (
//                   <div key={index} className="flex flex-col items-center p-4 text-center">
//                     <stat.icon className="mb-2 h-5 w-5 text-emerald-600" />
//                     <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
//                     <div className="text-xs text-gray-500">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Course Overview */}
//             <section className="my-12">
//               <h2 className="mb-6 text-3xl font-serif font-light text-gray-900">About this course</h2>
//               <div className="prose prose-lg prose-emerald max-w-none">
//                 <p>{course.description.details}</p>
//               </div>
//             </section>

//             {/* What You'll Learn */}
//             <section className="my-12">
//               <h3 className="mb-6 text-2xl font-serif font-light text-gray-900">What you will learn</h3>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 {course.description.benefits.map((benefit, index) => (
//                   <div key={index} className="flex items-start gap-3">
//                     <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100">
//                       <Check className="h-3 w-3 text-emerald-600" />
//                     </span>
//                     <p className="text-gray-600">{benefit}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Key Features */}
//             <section className="my-12 bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-8">
//               <h2 className="mb-6 text-3xl font-serif font-light text-gray-900">Course Highlights</h2>
//               <p className="mb-8 text-lg text-gray-600">
//                 Master new skills with our comprehensive curriculum and expert guidance
//               </p>
//               <div className="grid gap-6 sm:grid-cols-2">
//                 {course.description.keyBenefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className="rounded-xl bg-white p-6 shadow-md transition-all hover:shadow-lg"
//                   >
//                     <h3 className="mb-3 text-xl font-medium text-gray-900">{benefit.title}</h3>
//                     <p className="text-gray-600">{benefit.detail}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Course Structure */}
//             <section className="my-12">
//               <h2 className="mb-6 text-3xl font-serif font-light text-gray-900">Course Structure</h2>
//               <p className="mb-8 text-lg text-gray-600">A carefully designed curriculum to ensure your success</p>
//               <div className="grid gap-6 md:grid-cols-2">
//                 {[ 
//                   { title: "Self-Paced Learning", description: "Learn at your own pace with lifetime access.", icon: "🎯", color: "bg-emerald-100 text-emerald-700" },
//                   { title: "Interactive Sessions", description: "Hands-on exercises and projects", icon: "💡", color: "bg-amber-100 text-amber-700" },
//                   { title: "Expert Support", description: "Guidance from industry professionals", icon: "👥", color: "bg-blue-100 text-blue-700" },
//                   { title: "Community Access", description: "Join a community of learners", icon: "🌟", color: "bg-purple-100 text-purple-700" }
//                 ].map((item, index) => (
//                   <div key={index} className="rounded-xl border border-gray-100 bg-white p-6 hover:border-emerald-200">
//                     <div className={`mb-3 inline-block rounded-lg ${item.color} p-3 text-2xl`}>{item.icon}</div>
//                     <h3 className="mb-2 font-serif text-xl font-medium text-gray-900">{item.title}</h3>
//                     <p className="text-gray-600">{item.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* Call to Action */}
//             <section className="my-12 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-12 text-center">
//               <h2 className="mb-4 text-3xl font-serif font-light text-gray-900">Ready to Start Your Journey?</h2>
//               <p className="mb-6 text-lg text-gray-600">Join thousands of students transforming their careers</p>
//               <Link href="/register-now">
//                 <button className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-700">
//                   <span>Enroll Now and Save 30%</span>
//                   <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//                 </button>
//               </Link>
//             </section>

//             {/* Testimonials */}
//             <CourseTestimonials />
//           </div>

      


//         </div>
//       </div>
//     </div>
//      </>
//   );
// };

// export default CourseDetailPage;
// // 