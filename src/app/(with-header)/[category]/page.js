// app/[category]/page.js
import { createClient } from "../../../prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/helpers";
import Script from "next/script";

import Hero from "../../../components/services/Hero";
import SessionStructure from "../../../components/shared/SessionStructure";
import Features from "../../../components/services/Features";
import ChildCourses from "../../../components/services/ChildCourses";
import Resources from "../../../components/services/Resources";
import Testimonials from "../../../components/shared/TestimonialsCarousel";
import Cta from "../../../components/shared/Cta";
import Faqs from "../../../components/shared/Faqs";

const siteUrl = "https://quranonlinetutoring.com";

// ✅ Build all category pages at build time
export async function generateStaticParams() {
  const client = createClient();
  const docs = await client.getAllByType("maincourses");

  return docs.map((doc) => ({
    category: doc.uid, // 🔑 UID = category slug
  }));
}

// ✅ Metadata (static)
export async function generateMetadata({ params }) {
  const { category } = params;
  const client = createClient();

  if (!category) {
    return {
      title: "Not Found",
      description: "The requested course was not found.",
      robots: { index: true, follow: true },
    };
  }

  try {
    const data = await client.getByUID("maincourses", category);

    const title = data.data.meta_title || asText(data.data.title) || "Course";
    const description = data.data.meta_description || "Learn with us online.";
    const image = data.data.meta_image?.url || `${siteUrl}/default-og.png`;
    const canonical = `${siteUrl}/${category}`;

    const faqs =
      data.data.faqs?.map((faq) => ({
        "@type": "Question",
        name: faq.title,
        acceptedAnswer: {
          "@type": "Answer",
          text: asText(faq.answer),
        },
      })) || [];

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Quran Online Tutoring",
        images: [
          {
            url: image,
            alt: data.data.meta_image?.alt || title,
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      robots: { index: false, follow: false }, // ✅ SEO-friendly
      other:
        faqs.length > 0
          ? {
              "application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs,
              }),
            }
          : undefined,
    };
  } catch (error) {
    return {
      title: "Not Found",
      description: "The requested course was not found.",
      robots: { index: true, follow: true },
    };
  }
}

// ✅ Page (static)
export default async function CategoryPage({ params }) {
  const { category } = params;
  const client = createClient();

  if (!category) {
    return notFound();
  }

  try {
    const data = await client.getByUID("maincourses", category);

    return (
      <>
        {/* Inline FAQ Schema */}
        {data.data.faqs?.length > 0 && (
          <Script
            id="faq-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: data.data.faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.title,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: asText(faq.answer),
                  },
                })),
              }),
            }}
          />
        )}

        <Hero hero={data.data.hero} />
        <SessionStructure
          session={data.data.cards}
          sectionContent={data.data.cardtitledes}
        />
        <Features
          services_title={data.data.services_title}
          services_sections={data.data.services_sections}
        />
        <ChildCourses course={data.data.related_courses} ctitle={data.uid} />
        <Resources
          heading={data.data.why_choose_us_title_des}
          items={data.data.why_choose_us_cards}
        />
        <Testimonials testimonials={data.data.testimonials} />
        <Cta
          title={data.data.cta[0].title}
          description={asText(data.data.cta[0].description)}
          imageSrc={data.data.cta[0].image.url}
          buttonText="Get Started"
          buttonLink="/register-now"
        />
        <Faqs faqs={data.data.faqs} />
      </>
    );
  } catch (error) {
    console.error(error);
    return notFound();
  }
}
