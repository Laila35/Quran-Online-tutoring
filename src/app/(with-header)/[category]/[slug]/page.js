// app/[category]/[slug]/page.js
import { createClient } from "@/prismicio";
import { notFound } from "next/navigation";
import { asText } from "@prismicio/helpers";
import Script from "next/script";
import Testimonial from "../../../../components/shared/Testimonial";
import ChildHero from "../../../../components/services/child/Hero";
import ChildCta from "../../../../components/services/child/Cta";
import Faqs from "../../../../slices/Faqs";
import WhyChooseUS from "../../../../components/services/child/whyChooseUs";
import ChildCourses from "../../../../components/services/ChildCourses";
import SessionStructure from "../../../../components/shared/SessionStructure";
import ChildFeatures from "../../../../components/services/child/ChildFeatures";

const siteUrl = "https://quranonlinetutoring.com";

// ✅ Generate all static paths at build
export async function generateStaticParams() {
  const client = createClient();
  const docs = await client.getAllByType("childcourses");

  return docs.map((doc) => ({
    category: doc.data.category || "courses",
    slug: doc.uid,
  }));
}

// ✅ Metadata SSG
export async function generateMetadata({ params }) {
  const { category, slug } = params;
  const client = createClient();

  try {
    const data = await client.getByUID("childcourses", slug);

    if (!data || !data.data) {
      return {
        title: "Not Found",
        description: "The requested page was not found.",
        robots: { index: false, follow: false },
      };
    }

    const title = data.data.meta_title || asText(data.data.title) || slug;
    const description = data.data.meta_description || "Learn with us online.";
    const image = data.data.meta_image?.url || `${siteUrl}/default-og.png`;
    const canonical = `${siteUrl}/${category}/${slug}`;

    // FAQ schema
    const faqs = (data.data.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question || faq.title || "",
      acceptedAnswer: {
        "@type": "Answer",
        text: asText(faq.answer || []),
      },
    }));

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Quran Online Tutoring",
        images: [{ url: image, alt: title, width: 1200, height: 630 }],
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
      robots: { index: true, follow: true },
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
  } catch {
    return {
      title: "Not Found",
      description: "The requested page was not found.",
      robots: { index: false, follow: false },
    };
  }
}

// ✅ Page — Static
export default async function SubPage({ params }) {
  const { category, slug } = params;
  const client = createClient();

  let data;
  try {
    data = await client.getByUID("childcourses", slug);

    // ✅ Handle missing or invalid data
    if (!data || !data.data) {
      return notFound();
    }

    if (data.data.category && category !== data.data.category) {
      return notFound();
    }
  } catch (error) {
    console.error(error);
    return notFound();
  }

  // Now safe to use data.data
  const safe = (value, fallback) => value ?? fallback;

  return (
    <div>
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
                name: faq.question || faq.title || "",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: asText(faq.answer || []),
                },
              })),
            }),
          }}
        />
      )}

      <ChildHero heroo={safe(data.data.hero, {})} />

      <SessionStructure
        session={safe(data.data.cards, [])}
        sectionContent={safe(data.data.card_title_des, "")}
      />

      <ChildFeatures
        services_sections={safe(data.data.services_sections, [])}
        servicetitle={safe(data.data.services_title, "")}
      />

      <WhyChooseUS
        items={safe(data.data.why_choose_us_cards, [])}
        title={safe(data.data.why_choose_us_title_des, "")}
      />

      <Testimonial
        featuredTestimonial={safe(data.data.testimonials?.[0], {})}
        testimonials={safe(data.data.testimonials, [])}
      />

      <ChildCta
        title={safe(data.data.cta?.[0]?.title, "")}
        description={asText(safe(data.data.cta?.[0]?.description, []))}
        imageSrc={safe(data.data.cta?.[0]?.image?.url, "")}
        buttonText="Get Started"
        buttonLink="/register-now"
      />

      <ChildCourses
        course={safe(data.data.related_courses, [])}
        ctitle={safe(data.uid, "")}
      />

      <Faqs
        faqs={(safe(data.data.faqs, [])).map((faq) => ({
          question: faq.question || faq.title || "",
          answer: asText(faq.answer || []),
        }))}
      />
    </div>
  );
}
