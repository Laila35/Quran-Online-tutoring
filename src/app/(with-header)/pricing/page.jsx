import Image from "next/image";
import { Container } from "../../../components/shared/Container";
import HeroSection from "../../../components/pricing/Hero";
import PricingCardd from "../../../components/pricing/pricingCard";
import Faqs from "../../../components/shared/Faqs";
import Script from "next/script";
export const metadata = {
  title: "Pricing | Affordable Online Qur’an Classes for All Ages",
  description:
    "Choose the perfect Qur’an learning plan for your needs. Affordable 1-to-1 Qur’an, Tajweed, and Hifz classes with certified male & female teachers. Discounts for families and referrals.",
  alternates: {
    canonical: "https://quranonlinetutoring.com/pricing",
  },
  openGraph: {
    title: "Pricing | Affordable Online Qur’an Classes for All Ages",
    description:
      "Flexible Qur’an class pricing with 30-minute or 1-hour sessions, available 2–7 days per week. Discounts for families, referrals, and low-income households.",
    url: "https://quranonlinetutoring.com/pricing",
    siteName: "Quran Online Tutoring",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://quranonlinetutoring.com/Images/payments/Fee and Schedule Plan.svg",
        width: 1200,
        height: 630,
        alt: "Online Qur’an Class Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Affordable Qur’an Classes Online",
    description:
      "Join Qur’an Online Tutoring with flexible pricing and global access. Certified teachers and one-to-one Qur’an lessons for kids and adults.",
    images: [
      "https://quranonlinetutoring.com/Images/payments/Fee and Schedule Plan.svg",
    ],
  },
  robots: { index: true, follow: true },
};

 
const faqs = [
  {
    question: "Low-Income Families",
    answer: "We offer a 10% discount for low-income families.",
  },
  {
    question: "Referral Discount",
    answer: "Refer a friend and receive a 10% discount on your next month’s fee.",
  },
];

export default function Pricing() { 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      
      <Script
        id="faq-schema-pricing"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero & Pricing Section */}
      <div>
        <HeroSection />
        <PricingCardd />

        {/* Customized Plans */}
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="max-w-3xl mx-auto py-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Customized <span className="text-primary">Plans</span>
            </h2>
            <p className="text-center mb-8">
              We also offer customized plans based on your specific needs and preferences.
              Please contact us to arrange a personalized fee plan that suits your requirements.
            </p>
          </div>

          {/* Payment Methods */}
          <section className="relative z-10 py-12 bg-gray-50 sm:py-16">
            <div className="container mx-auto">
              <div className="w-full mx-auto text-center mb-12">
                <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">
                  Payment <span className="text-primary">Methods</span>
                </h2>
                <p className="text-base leading-relaxed">
                  We accept worldwide payment methods.
                </p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4 p-6 rounded-lg">
                {[
                  { alt: "Mastercard", src: "/Images/payments/qot-mastercard.webp" },
                  { alt: "PayPal", src: "/Images/payments/qot-paypal.webp" },
                  { alt: "Visa", src: "/Images/payments/qot-visa.webp" },
                  { alt: "American Express", src: "/Images/payments/qot-american-express.webp" },
                  { alt: "Moneygram", src: "/Images/payments/qot-moneygram.webp" },
                  { alt: "Western Union", src: "/Images/payments/qot-western-union.webp" },
                  { alt: "JCB", src: "/Images/payments/qot-jcb.webp" },
                  { alt: "ACE", src: "/Images/payments/qot-ace-money.webp" },
                  { alt: "Ria", src: "/Images/payments/qot-ria.webp" },
                  { alt: "Remitly", src: "/Images/payments/qot-remitly.webp" },
                ].map((brand, index) => (
                  <div key={index} className="flex items-center justify-center p-2 w-20 h-16">
                    <Image
                      alt={brand.alt}
                      src={brand.src}
                      width={60}
                      height={40}
                      loading="lazy"
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <Faqs faqs={faqs} />
        </div>
      </div>
    </>
  );
}
