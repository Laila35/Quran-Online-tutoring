import Link from "next/link";
import { Phone, UserPlus, LogIn } from "lucide-react";
import {
  FaXTwitter,
  FaFacebook,
  FaPinterest,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

export default function TopNavbar() {
  const socialLinks = [
    {
      icon: FaXTwitter,
      url: "https://twitter.com/qotutoring",
      username: "qotutoring",
      label: "X (Twitter)"
    },
    {
      icon: FaFacebook,
      url: "https://facebook.com/qotutoring",
      username: "qotutoring",
      label: "Facebook"
    },
    {
      icon: FaPinterest,
      url: "https://pinterest.com/qotutoring",
      username: "qotutoring",
      label: "Pinterest"
    },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/company/qotutoring",
      username: "qotutoring",
      label: "LinkedIn"
    },
    {
      icon: FaInstagram,
      url: "https://instagram.com/qotutoring",
      username: "qotutoring",
      label: "Instagram"
    },
    {
      icon: FaYoutube,
      url: "https://youtube.com/@qotutoring",
      username: "qotutoring",
      label: "YouTube"
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 text-[#1D89A3] h-[80px]">
        {/* Left Logo */}
        <div className="flex items-center p-0 m-0">
          <Link href="/" className="block w-[150px] h-[60px] relative">
            {/* ✅ Fixed width/height container avoids layout shift */}
            <Image
              src="/Images/logo/logo.png"
              alt="QuranOnlineTutoring logo"
              fill
              priority
              sizes="150px"
              className="object-contain"
            />
          </Link>
        </div>

        {/* Middle Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="https://wa.me/19144550557"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 p-3 rounded-lg transition-colors"
          >
            <span className="font-medium text-primary">+1 (914) 455-0557</span>
          </Link>
          <Link
            href="/register-now"
            className="flex items-center gap-1 hover:text-[#166b80]"
          >
            <UserPlus size={16} /> Register Now
          </Link>
          <Link
            href="http://sp.quranonlinetutoring.com"
            className="flex items-center gap-1 hover:text-[#166b80]"
          >
            <LogIn size={16} /> Student Login
          </Link>
        </div>

        {/* Right Social Icons */}
        <div className="flex items-center space-x-3 text-lg px-10">
          {socialLinks.map((social, i) => (
            <Link
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${social.label}`}
              className="text-white bg-gradient-to-r from-[#A86739] to-[#DC913F] rounded-full p-1 w-[28px] h-[28px] flex items-center justify-center hover:scale-110 transition-transform duration-200"
              title={`${social.label}: ${social.username}`}
            >
              <social.icon className="w-[16px] h-[16px]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
