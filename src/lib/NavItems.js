const manualCourses = [
  { title: "Noorani qaida online", href: "noorani-qaida-online" },
  { title: "Learn Quran With Tajweed", href: "learn-quran-with-tajweed" },
  { title: "Memorize Quran Online", href: "memorize-quran-online" },
  { title: "Taleem ul Islam", href: "taleem-ul-islam" },
  { title: "Learn islamic Studies online", href: "learn-islamic-studies-online" },
  { title: "Quran Classes for adults", href: "quran-classes-for-adults" },
  { title: "Online Ijazah Course", href: "online-ijazah-course" },
  { title: "Ten Qiraat Online", href: "ten-qiraat-online" },
  { title: "Quranic Arabic Course", href: "quranic-arabic-course" },
  { title: "Learn Arabic Online", href: "learn-arabic-online" },
  { title: "Quran Tafseer Course", href: "quran-tafseer-course" },
  { title: "Hifz Classes Online", href: "hifz-classes-online" },
  { title: "Learn Quran Online", href: "learn-quran-online" },
  { title: "Tajweed classes Online", href: "tajweed-classes-online" },
];

export const navItems = [
  "Home",
  {
    title: "Teachers",
    dropdownItems: [
      { label: "Male Teachers", href: "/male-quran-teachers" },
      { label: "Female Teachers", href: "/female-quran-teacher" },
    ],
  },
  {
    title: "Courses",
    courses: [  
      ...manualCourses // your extra manual courses
    ],
  },
  "About Us",
  "Register Now",
  "Pricing",
  "contact-us",
];
