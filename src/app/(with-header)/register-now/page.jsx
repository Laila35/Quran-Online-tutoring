import MainRegister from "@/components/register/Main";


// ✅ SEO Meta Configuration
export const metadata = {
  title: "Register for Free Trial | Online Qur’an Classes for Kids & Adults – Quran Online Tutoring",
  description:
    "Start your free trial Qur’an class today with certified male or female teachers. Experience one-on-one Qur’an learning online — Tajweed, Hifz, Arabic, and Islamic Studies for all ages.",
  alternates: {
    canonical: "https://www.quranonlinetutoring.com/register-now",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Register for Free Trial | Online Qur’an Classes for Kids & Adults – Quran Online Tutoring",
    description:
      "Join now and learn Qur’an online with expert teachers. Book your free trial class today — Tajweed, Hifz, Arabic, and Islamic Studies.",
    url: "https://www.quranonlinetutoring.com/register-now",
    siteName: "Quran Online Tutoring",
    images: [
      {
        url: "/Images/about/Who We Are.jpg", // 🖼 Replace with your real image
        width: 1200,
        height: 630,
        alt: "Register for Free Trial Qur’an Classes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <MainRegister />
    </div>
  );
}
