"use client";
import { useState ,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { PrismicImage } from "@prismicio/react";
 
const NAV_ITEMS = [
  { label: "Home", href: "/" }, 
  
   {
  label: "Programs",
  href: "/programs",
  megaMenu: true,  
  children: [
    {
      label: "Qur’an Studies Track",
      href: "/quran-track",
      children: [
        {
          label: "Foundations of Recitation",
          href: "/quran-track/qaida",
          description: "Learn to recite with proper pronunciation",
          image: {
            src: "/Images/services/Icons_Foundation of Recitation.svg", 
            alt: "Foundations of Recitation Icon",
            objectFit: "contain",  
          },
        },
        {
          label: "Rules of Tajweed",
          href: "/quran-track/tajweed",
          description: "Master the rules of tajweed step by step",  
          image: {
            src: "/Images/services/Icons_Rules of tajweed.svg",  
            alt: "Rules of Tajweed",
            objectFit: "contain",  
          },
        },
        {
          label: "Fluent Qur’an Reading",
          href: "/quran-track/reading",
          description: "Gain fluency and confidence in reading", 
          image: {
            src: "/Images/services/Icons_Fluent Quran reading.svg",
            alt: "Fluent Qur’an Reading",
            objectFit: "contain",  
          },
        },
        {
          label: "Memorization Programs",
          href: "/quran-track/memorization",
          description: 'memorize the Quran with hafiz Quran tutors', 
          image: {
            src: "/Images/services/Icons_Quran Memorization Program.svg",
            alt: "Memorization Programs",
            objectFit: "contain",  
          },
          children: [
            {
              label: "Short Surah Program",
              href: "/memorization/short-surahs",
              description: "Start memorizing with shorter surahs",
              image: "/images/logo/logo.png",
            },
            {
              label: "Complete Hifz",
              href: "/memorization/complete",
              description: "Full Qur’an memorization with guidance",
              image: "/images/logo/logo.png",
            },
          ],
        },
        {
          label: "Qur’an with Translation ",
          href: "/quran-track/translation",
          description: "Understand Qur’an beyond recitation", 
          image: {
            src:  "/Images/services/Icons_Quran meaning.svg", 
            alt: "Qur’an with Translation ",
            objectFit: "contain",  
          },
        },
        {
          label: "Certification & Ijazah",
          href: "/quran-track/ijazah",
          description: "Earn official ijazah certifications", 
          image: {
            src: "/Images/services/Icons_Certification & ijazah.svg",
            alt: "Certification & Ijazah",
            objectFit: "contain",  
          },
        },
      ],
    },
     {
  label: "Islamic Studies Track",
  href: "/islamic-studies",
  children: [
    // Kids (5–12)
    {
      label: "Level-1-kids",
      href: "/islamic-studies/level-1-kids",
      description: "Build good habits and supplications", 
      image: {
            src:   "/Images/logo/Level -1 Kids.jpg",
            alt: "Supplications & Manners",
            objectFit: "contain",  
          },
    },
    {
      label: "Level-2-kids",
      href: "/islamic-studies/level-2-kids",
      description: "Learn from the lives of Prophets", 
      image: {
            src: "/Images/logo/Level - 2 Kids.jpg",
            alt: "Prophets’ Stories",
            objectFit: "contain",  
          },
    },
    {
      label: "Level-3-teens",
      href: "/islamic-studies/level-3-teens",
      description: "Foundations of prayer and Islam", 
      image: {
            src: "/Images/logo/Level - 3 Teens.jpg", 
            alt: "Salah & Pillars",
            objectFit: "contain",  
          },
    },

    // Teens (13–18)
    {
      label: "level-4-adults",
      href: "/islamic-studies/level-4-adults",
      description: "Core beliefs every teen should know", 
      image: {
            src: "/Images/logo/Llevel - 4 Adults.jpg", 
            alt: "Aqeedah Essentials",
            objectFit: "contain",  
          },
    },
     
  ],
},

    {
      label: "Arabic Track",
      href: "/arabic-track",
      children: [
        {
          label: "Arabic Beginners",
          href: "/arabic-track/beginners",
          description: "Basics of Arabic letters and words", 
          image: {
            src: "/Images/logo/Arabic Beginner.jpg", 
            alt: "Arabic Starter",
            objectFit: "contain",  
          },
        },
        {
          label: "Qur’anic Vocabulary & Grammar",
          href: "/arabic-track/quranic-arabic",
          description: "Understand Qur’anic arabic-track", 
          image: {
            src: "/Images/logo/Quranic Vocabulary and Grammer.jpg", 
            alt: "Qur’anic Vocabulary & Grammar",
            objectFit: "contain",  
          },
        },
        {
          label: "Arabic for Salah",
          href: "/arabic-track/arabic-for-salah",
          description: "arabic-track needed for prayer & worship", 
          image: {
            src: "/Images/logo/Arabic for Salah.jpg",
            alt: "arabic-track for Worship",
            objectFit: "contain",  
          },
        },
        {
          label: "Arabic-track Conversation",
          href: "/arabic-track/conversation",
          description: "Speak arabic-track in daily conversation", 
           image: {
            src: "/Images/logo/Arabic Track Conversation.jpg",
            alt: "Speak arabic-track in daily conversation",
            objectFit: "contain",  
          },
        }, 
      ],
    },
    {
      label: "Specialized Tracks",
      href: "/specialized-tracks",
      children: [
        {
          label: "Revert Adults",
          href: "/specialized-tracks/revert-adults",
          description: "Supportive programs for adult reverts to Islam",
          image: {
            src: "/Images/logo/Revert Adult.jpg",
            alt: "New Muslim Program",
            objectFit: "contain",  
          },
        },
        {
          label: "Revert Kids",
          href: "/specialized-tracks/revert-kids",
          description: "Islamic education tailored for revert children",
          image: {
            src: "/Images/logo/Revert Kids.jpg",
            alt: "Women’s Program",
            objectFit: "contain",  
          },
        },
        {
          label: "Sisters",
          href: "/specialized-tracks/sisters",
          description: "Dedicated courses and support for Muslim women",
          image: {
            src: "/Images/logo/Sisters.jpg", 
            alt:  "Ramadan Exclusive",
            objectFit: "contain",  
          },
        },
        {
          label: "Ramadan",
          href: "/specialized-tracks/ramadan",
          description: "Specialized learning and workshops for Ramadan",
          image: {
            src: "/Images/logo/Ramadan.jpg",
            alt: "Short Islamic Workshops",
            objectFit: "contain",  
          },
        },
        {
          label: "Tafsir",
          href: "/specialized-tracks/tafsir",
          description: "Sharpen recitation with experts", 
          image: {
            src: "/Images/logo/Tafsir.jpg", 
            alt: "Qur’an Recitation Masterclass",
            objectFit: "contain",  
          },
        },
        {
          label: "Ten Qirāʾāt Studies",
          href: "/specialized-tracks/qirat",
          description: "Study the ten authentic qirāʾāt", 
          image: {
            src: "/Images/logo/Ten Qiraat Studies.jpg", 
            alt: "Ten Qirāʾāt Studies",
            objectFit: "contain",  
          },
        },
          {
          label: "Short",
          href: "/specialized-tracks/short",
          description: "Study the ten authentic qirāʾāt", 
          image: {
            src: "/Images/logo/Shorts.jpg", 
            alt: "Ten Qirāʾāt Studies",
            objectFit: "contain",  
          },
        },
      ],
    },
  ],
},  

  { label: "How it works", href: "/how-it-works" }, 
  {
    label: "Tutors",
    href: "/teachers",
    children: [ 
       { label: "Male Tutor", href: "/teachers/male" },
       { label: "Female Tutor", href: "/teachers/female" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  // {
  //   label: "Resources",
  //   href: "",
  //   children: [ 
  //      { label: "Blog", href: "/blog" },
  //       { label: "About Us", href: "/about-us" },
  //   ],
  // },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
];

// ❌ Remove free trial if not present in content
const SHOW_FREE_TRIAL = true; // toggle this based on your CMS/content

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState(null);
  const [hoverSub, setHoverSub] = useState(null);

  const hoverTimer = useRef(null);
  const leaveTimer = useRef(null);

  // Handle main hover with delay
  const handleMouseEnter = (label) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    hoverTimer.current = setTimeout(() => setHoverItem(label), 200); // 200ms delay
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    leaveTimer.current = setTimeout(() => {
      setHoverItem(null);
      setHoverSub(null);
    }, 200); // small delay before closing
  };

  const [openMenus, setOpenMenus] = useState([]);

  // ✅ Toggle open/close menus
  const toggleMenu = (label) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  return (
    <nav className="sticky top-0 z-50 shadow-sm bg-white sm:bg-[#1D89A3]">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex items-center justify-between py-3">
        {/* Mobile logo only */}
        <div className="lg:hidden">
          <Link href="/">
            <Image src="/Images/logo/logo.png" width={140} height={40} alt="Logo" />
          </Link>
        </div>

        {/* Desktop menu */}
     <ul className="hidden lg:flex mx-auto space-x-8 font-medium text-white">
  {NAV_ITEMS.map((item) => (
    <li
      key={item.label}
      className="relative group"
      onMouseEnter={() => {
        handleMouseEnter(item.label);
        // auto-open first child for mega menu
        if (item.megaMenu && item.children && item.children.length > 0) {
          setHoverSub(item.children[0].label);
        }
      }}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className="hover:text-[#166b80] flex items-center gap-1"
        onClick={() => child.href && setMenuOpen(false)}
      >
        {item.label}
        {item.children && <IoChevronDown className="text-sm" />}
      </Link>

      {/* Mega Menu for Programs */}
      {item.megaMenu && hoverItem === item.label && (
        <div className="absolute top-full left-[11.6rem] -translate-x-1/2 mt-3 bg-white rounded-2xl shadow-xl h-[410px] w-[950px] flex z-50 transition-all duration-200">
          {/* Left Column → Categories */}
          <ul className="w-1/4 border-r border-gray-100 py-2 space-y-4">
            {item.children.map((child) => (
              <li
                key={child.label}
                className={`px-5 py-3 text-sm cursor-pointer flex justify-between items-center transition ${
                  hoverSub === child.label
                    ? "bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white font-bold"
                    : "text-gray-700 hover:bg-emerald-50 hover:text-[#166b80]"
                }`}
                onMouseEnter={() => setHoverSub(child.label)}
              >
             <Link href={child.href || '#'} onClick={() => {
                 setHoverItem(null);
                 setHoverSub(null);
                 }}>
             <span className="flex-1">{child.label}</span>
             </Link>
                {child.children && <span className="text-primary">›</span>}
              </li>
            ))}
          </ul>

           
          <div className="w-3/4 p-6 overflow-y-auto">
  {item.children.map(
    (child) =>
      hoverSub === child.label &&
      child.children && (
        <ul key={child.label} className="grid grid-cols-2 gap-6">
          {child.children.map((sub) => (
            <li
              key={sub.label}
              className="flex gap-4 items-start p-4 hover:border rounded-lg hover:shadow-md transition"
            >
              <Link
                href={sub.href}
                className="hover:text-[#166b80] flex gap-4 w-full"
                onClick={() => {
               setHoverItem(null);
               setHoverSub(null);
               }}
              >
                 {sub.image && (
  <>
    {sub.image.url ? (
      // ✅ Prismic Image
      <PrismicImage
        field={sub.image}
        alt={sub.label}
        height={50}
        width={50}
        className="w-14 h-14 object-contain"
      />
    ) : (
      // ✅ Local Image
      <Image
        src={sub.image.src}
        alt={sub.image.alt || sub.label || 'ss'}
        width={50}
        height={50}
        className="w-14 h-14 object-contain"
      />
    )}
  </>
)}
                <div className="text-black">
                  {sub.label}
                  {sub.description && (
                    <p className="text-xs text-gray-500 mt-1 leading-snug">
                      {sub.description}
                    </p>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )
  )}
</div>
        </div>
      )}

      {/* Simple Dropdown for Resources */}
      {!item.megaMenu && item.children && hoverItem === item.label && (
        <ul className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg w-56 py-2 z-50">
          {item.children.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gradient-to-r from-[#A86739] to-[#DC913F] hover:text-white"
                onClick={() => {
                setHoverItem(null);
                setHoverSub(null);
                }}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>


         

        {/* Free Trial CTA (optional) */}
        {/* {SHOW_FREE_TRIAL && (
          <div className="hidden lg:block">
            <Link href="/register-now">
              <button className="px-5 py-2 bg-[#DC913F] hover:bg-[#DC915F] text-white rounded-lg shadow-md">
                Free Trial
              </button>
            </Link>
          </div>
        )} */}

        {/* Mobile menu button */}
        <button className="lg:hidden text-2xl text-[#1D89A3]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
     {menuOpen && (
        <div className="lg:hidden fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg p-6 z-50 overflow-y-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-end items-center mb-6">
            {/* <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image src="/Images/logo/logo.png" width={120} height={40} alt="Logo" />
            </Link> */}
            <FaTimes className="text-2xl text-primary cursor-pointer" onClick={() => setMenuOpen(false)} />
          </div>

          {/* Nav Items */}
          <ul className="space-y-4 flex-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    onClick={() => item.href && setMenuOpen(false)}
                    className="text-gray-700 hover:text-secondary font-medium"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button onClick={() => toggleMenu(item.label)}>
                      <IoChevronDown
                        className={`transition-transform ${openMenus.includes(item.label) ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>

                {/* Children */}
                {item.children && openMenus.includes(item.label) && (
                  <ul className="pl-4 mt-2 space-y-2  text-gray-600">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <div className="flex justify-between items-center">
                          <Link
                            href={child.href}
                            onClick={() => child.href && setMenuOpen(false)}
                            className="hover:text-secondary"
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <button onClick={() => toggleMenu(child.label)}>
                              <IoChevronDown
                                className={`transition-transform  ${openMenus.includes(child.label) ? "rotate-180" : ""}`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Grandchildren */}
                        {child.children && openMenus.includes(child.label) && (
                          <ul className="pl-4 mt-2 space-y-2 text-sm text-gray-500">
                            {child.children.map((sub) => (
                              <li key={sub.label}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setMenuOpen(false)}
                                  className="hover:text-secondary"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Buttons */}
          {SHOW_FREE_TRIAL && (
            <div className=" space-y-3 flex mt-4  items-center justify-between">
              <Link href="/register-now" onClick={() => setMenuOpen(false)}>
                <button className="w-full py-1 px-2 bg-gradient-to-r from-[#A86739] to-[#DC913F] text-white rounded-lg shadow-md">
                  Register
                </button>
              </Link>
               <Link
                href="https://wa.me/19144550557"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-3   rounded-lg   transition-colors"
              >
                <span className="font-medium text-primary">+1 (914) 455-0557</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

 

 












// "use client";
// import { useState, useEffect } from "react";
// import { FaBars, FaTimes, FaHome, FaUser, FaBookOpen, FaDoorOpen } from "react-icons/fa";
// import { IoChevronDown } from "react-icons/io5";
// import Image from "next/image";
// import Link from "next/link";
// import { navItems } from "../lib/NavItems";
// import { BsPersonCircle } from "react-icons/bs";
// import { MdPriceChange } from "react-icons/md";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [dropdownStates, setDropdownStates] = useState({
//     teachers: false,
//     courses: false,
//   });

//   const handleDropdown = (dropdown) => {
//     setDropdownStates((prev) => ({ ...prev, [dropdown]: !prev[dropdown] }));
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const getNavItemHref = (item) => {
//     if (item === "Home") return "/";
//     return `/${item.toLowerCase().replace(" ", "-")}`;
//   };

//   const renderNavItem = (item, index, isMobile = false) => {
//     const icon =
//       item === "Home" ? (
//         <FaHome />
//       ) : item === "Teachers" ? (
//         <FaUser />
//       ) : item === "Courses" ? (
//         <FaBookOpen />
//       ) : item === "Register Now" ? (
//         <BsPersonCircle />
//       ) : item === "Pricing" ? (
//         <MdPriceChange />
//       ) : item === "Teachers" ? (
//         <FaUser />
//       ) : (
//         <FaDoorOpen />
//       );

//     if (typeof item === "string") {
//       return (
//         <li
//           key={index}
//           className="flex items-center gap-2 hover:text-emerald-500 transform transition duration-300 ease-in-out"
//         >
//           {icon}
//           <Link href={getNavItemHref(item)}>{item}</Link>
//         </li>
//       );
//     }

//     if (item.title === "Teachers") {
//       return (
//         <li key={index} className="relative">
//           <div
//             className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition duration-300"
//             onMouseEnter={() => handleDropdown("teachers")}
//             onMouseLeave={() => handleDropdown("teachers")}
//           >
//             <FaUser />
//             <Link href={"/quran-teacher"}>
//             {item.title}
//             </Link>
//             <IoChevronDown
//               className={`transition-transform duration-300 ${
//                 dropdownStates.teachers ? "rotate-180" : ""
//               }`}
//             />

//             {/* Desktop Dropdown */}
//             {!isMobile && (
//               <div
//                 className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${
//                   dropdownStates.teachers
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//               >
//                 {item.dropdownItems.map((dropdownItem, idx) => (
//                   <Link
//                     key={idx}
//                     href={dropdownItem.href}
//                     className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 transition duration-300"
//                   >
//                     {dropdownItem.label}
//                   </Link>
//                 ))}
//               </div>
//             )}
//           </div>
//         </li>
//       );
//     }

//     if (item.title === "Courses") {
//       return (
//         <li key={index} className="relative">
//           <div
//             className="flex items-center gap-1 cursor-pointer hover:text-emerald-500 transition duration-300"
//             onMouseEnter={() => handleDropdown("courses")}
//             onMouseLeave={() => handleDropdown("courses")}
//           >
//             <FaBookOpen />
//             <Link href={"/courses"}>{item.title}</Link>
//             <IoChevronDown
//               className={`transition-transform duration-300 ${
//                 dropdownStates.courses ? "rotate-180" : ""
//               }`}
//             />

//             {/* Compact Desktop Dropdown - Two Columns */}
//             {!isMobile && (
//               <div
//                 className={`absolute top-0 mt-12 border left-0 w-[30rem] bg-white shadow-lg rounded-md  transition-all duration-300 ${
//                   dropdownStates.courses
//                     ? "opacity-100 visible translate-y-0"
//                     : "opacity-0 invisible -translate-y-2"
//                 }`}
//               >
//                 <div className="grid grid-cols-2 gap-0 max-h-[26rem] overflow-y-auto">
//                   {item.courses.map((course, idx) => (
//                     <Link
//                       key={idx}
//                       href={`/${course.href}`}
//                       className="block px-3 py-1.5 text-sm text-gray-800 hover:bg-emerald-50 hover:text-emerald-500 transition duration-200"
//                     >
//                       {course.title}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </li>
//       );
//     }

//     return null;
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-white shadow-lg transition-colors duration-500">
//       <div className="mx-auto max-w-8xl px-6 lg:px-16 flex justify-between items-center font-inter text-emerald-400 transition-all duration-300">
//         {/* Logo */}


//         <Link href="/">
//           <Image
//             src="/Images/logo/qot-logo.png"
//             width={135}
//             height={80}
//             alt="QuranOnlineTutoring logo"
//             />
//         </Link>

//         {/* WhatsApp Contact for Mobile - Between Logo and Hamburger */}
//         <div className="flex items-center">
//        {/* WhatsApp Contact in Mobile Menu */}
// <Link
//   href="https://wa.me/19144550557"
//   target="_blank"
//   rel="noopener noreferrer"
//   onClick={toggleMenu}
//   className="flex items-center justify-center gap-2 text-green-500"
// >

//   <span className="">+1 (914) 455-0557</span>
// </Link>
//         </div>

//         {/* Desktop Links */}
//         <ul className="hidden lg:flex space-x-8 text-md font-semibold text-emerald-700">
//           {navItems.map((item, index) => renderNavItem(item, index))}
//         </ul>

//         {/* Buttons */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <Link href="/register-now">
//             <button className="px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-amber-600 transition duration-300 shadow-lg">
//               Get Free Trial
//             </button>
//           </Link>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <button
//           onClick={toggleMenu}
//           className="lg:hidden text-2xl text-emerald-400 focus:outline-none"
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Mobile/Tablet Navigation Menu */}
//         <div
//           className={`fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
//             menuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col h-full p-6 overflow-y-auto">
//             {/* Close Button */}
//             <button
//               onClick={toggleMenu}
//               className="self-end text-3xl text-emerald-500 hover:text-emerald-600 transition-colors"
//             >
//               <FaTimes />
//             </button>

//             {/* Navigation Links */}
//             <nav className="mt-8 space-y-4">
//               {navItems.map((item, index) => {
//                 const Icon =
//                   item === "Home"
//                     ? FaHome
//                     : item === "Teachers"
//                     ? FaUser
//                     : item === "Courses"
//                     ? FaBookOpen
//                     : item === "Register Now"
//                     ? BsPersonCircle
//                     : item === "Pricing"
//                     ? MdPriceChange
//                     : item === "Teachers"
//                     ? FaUser
//                     : FaDoorOpen;

//                 if (typeof item === "string") {
//                   return (
//                     <Link
//                       key={index}
//                       href={getNavItemHref(item)}
//                       className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
//                       onClick={toggleMenu}
//                     >
//                       <Icon className="text-emerald-500" />
//                       <span className="font-medium">{item}</span>
//                     </Link>
//                   );
//                 }

//                 if (item.title === "Teachers") {
//                   return (
//                     <div key={index} className="">
//                       <div
//                         className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
//                         onClick={() => handleDropdown("teachers")}
//                       >
//                         <FaUser />
//                         <span className="font-semibold text-emerald-700">
//                           {item.title}
//                         </span>
//                         <IoChevronDown
//                           className={`transition-transform duration-300 ${
//                             dropdownStates.teachers ? "rotate-180" : ""
//                           }`} 
//                         />
//                       </div>
//                       <div
//                         className={`pl-3 space-y-2 overflow-hidden transition-all duration-300 ${
//                           dropdownStates.teachers
//                             ? "max-h-96 opacity-100"
//                             : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         {item.dropdownItems.map((dropdownItem, idx) => (
//                           <Link
//                             key={idx}
//                             href={dropdownItem.href}
//                             onClick={toggleMenu}
//                             className="flex items-center space-x-3 p-2 rounded-md hover:bg-emerald-50 transition-colors"
//                           >
//                             <div>
//                               <FaUser className="text-emerald-500 w-4 h-4" />
//                             </div>
//                             <span className="text-sm">
//                               {dropdownItem.label}
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 }
//                 if (item.title === "Courses") {
//                   return (
//                     <div key={index} className="border">
//                       <div
//                         className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
//                         onClick={() => handleDropdown("courses")}
//                       >
//                         <FaBookOpen />
//                         <span className="font-semibold text-emerald-700">
//                           {item.title}
//                         </span>
//                         <IoChevronDown
//                           className={`transition-transform duration-300 ${
//                             dropdownStates.courses ? "rotate-180" : ""
//                           }`}
//                         />
//                       </div>
//                       <div
//                         className={`pl-3 space-y-2 overflow-scroll transition-all duration-300 ${
//                           dropdownStates.courses
//                             ? "max-h-96 opacity-100"
//                             : "max-h-0 opacity-0"
//                         }`}
//                       >
//                         {item.courses.map((course, idx) => (
//                           <Link
//                             key={idx}
//                             href={`/${course.href}`}
//                             onClick={toggleMenu}
//                             className="flex items-center space-x-3 p-2 rounded-md hover:bg-emerald-50 transition-colors"
//                           >
//                             <div>
//                               <FaBookOpen className="text-emerald-500 w-4 h-4" />
//                             </div>
//                             <span className="text-sm">{course.title}</span>
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 }
//                 return null;
//               })}

        
//               {/* Additional Links */}
//               <div className="mt-auto space-y-4">
//                 <Link
//                   href="https://cp.ilmulquran.com"
//                   onClick={toggleMenu}
//                   className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
//                 >
//                   <FaUser className="text-emerald-500" />
//                   <span className="font-medium">Student Portal</span>
//                 </Link>
//                 <Link
//                   href="/register-now"
//                   onClick={toggleMenu}
//                   className="flex items-center space-x-3 p-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
//                 >
//                   <FaDoorOpen />
//                   <span className="font-medium">Get Free Trial</span>
//                 </Link>

//                       {/* WhatsApp Contact in Mobile Menu */}
//               <Link
//                 href="https://wa.me/19144550557"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 onClick={toggleMenu}
//                 className="flex items-center space-x-3 p-3 rounded-lg hover:bg-emerald-50 transition-colors"
//               >
//                 <span className="font-medium text-green-600">WhatsApp: +1 (914) 455-0557</span>
//               </Link>

//               </div>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;