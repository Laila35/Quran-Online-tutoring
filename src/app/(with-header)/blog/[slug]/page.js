import { createClient } from "../../../../prismicio";
import { notFound } from "next/navigation";
import Details from "../../../components/blog/Details";
import { asText } from "@prismicio/helpers";

// ✅ Disable dynamic rendering for static generation
export const dynamicParams = false;
export const revalidate = false;

export async function generateMetadata(props) {
  const params = await props.params;
  const client = createClient();
  const post = await client.getByUID("blog", params.slug).catch(() => null);
  if (!post) return {};

  const url = `https://www.quranonlinetutoring.com/blog/${params.slug}`;
  const seoTitle = post.data.meta_title || post.data.title || "Quran Blog";
  const seoDescription =
    post.data.meta_description || post.data.description || "";
  const seoImage =
    post.data.meta_image?.url || post.data.image?.url || null;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: { canonical: url },
    // robots: "index, follow",  
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url,
      type: "article",
      images: seoImage
        ? [{ url: seoImage, width: 1200, height: 630, alt: seoTitle }]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: seoDescription,
      images: seoImage ? [seoImage] : [],
    },
     robots: {
    index: true,
    follow: true,
  },
  };
}

export default async function BlogPage(props) {
  const params = await props.params;
  const client = createClient();
  const post = await client.getByUID("blog", params.slug).catch(() => null);
  if (!post) notFound();

  const postUrl = `https://www.quranonlinetutoring.com/blog/${params.slug}`;

  // ✅ Build FAQ Schema
  let faqSchema = null;
  const faqSlice = post.data.slices.find(
    (s) => s.slice_type === "faqs" || s.slice_type === "faq"
  );
  const faqItems = faqSlice?.primary?.faqs ?? faqSlice?.items ?? [];

  if (Array.isArray(faqItems) && faqItems.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question || faq.question_text || "",
        acceptedAnswer: {
          "@type": "Answer",
          text: Array.isArray(faq.answer)
            ? asText(faq.answer)
            : faq.answer || "",
        },
      })),
    };
  }

  return (
    <> 
      {faqSchema && (
        <script
          key="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 py-10">
        <Details post={post} postUrl={postUrl} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();
  const posts = await client.getAllByType("blog");
  return posts.map((post) => ({ slug: post.uid }));
}
