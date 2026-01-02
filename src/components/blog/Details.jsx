import { components } from "@/slices";

import { PrismicNextImage } from "@prismicio/next";
import SocialShare from '../shared/SocialShare.jsx'
import ContactFormRegister from '../ContactForm-register.jsx'


import { SliceZone } from '@prismicio/react';

const Details = ({post,postUrl}) => {
  return (
     <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* --- LEFT SIDEBAR (TOC) --- */}
        <aside className="lg:col-span-2 ">
          {/* {headings.length > 0 && (
            <nav className="sticky top-24 space-y-3 text-sm">
              <h2 className="font-semibold text-gray-800 mb-2">
                Table of Contents
              </h2>
              <ul className="space-y-2">
                {headings.map((h) => (
                  <li key={h.id}>
                    <a
                      href={`#${h.id}`}
                      className="text-gray-600 hover:text-primary transition"
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )} */}
          {/* table */}
        </aside>

        {/* --- MAIN CONTENT --- */}
        <main className="lg:col-span-7">
          {/* Category */}
          {post.data.category && (
            <p className="text-blue-600 font-medium text-sm text-center mb-3">
              {post.data.category}
            </p>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl text-center font-bold mb-4 leading-tight">
            {post.data.title
              .split(" ")
              .map((word, index, arr) =>
                index === arr.length - 1 ? (
                  <span key={index} className="text-primary">
                    {" "}
                    {word}
                  </span>
                ) : (
                  <span key={index}> {word}</span>
                )
              )}
          </h1>

            

          {/* Author Info */}
          <div className="flex items-center justify-center space-x-3 mb-10">
            {post.data.author_image?.url && (
              <PrismicNextImage
                field={post.data.author_image}
                alt={post.data.author_name || "Author"}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <div className="text-sm text-gray-600">
              <p className="font-medium">{post.data.author_name}</p>
              <p>
                {new Date(post.first_publication_date).toLocaleDateString(
                  "en-US",
                  {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  }
                )}{" "}
                • {Math.ceil(post.data.read_time || 5)} min read
              </p>
            </div>
          </div>

          {/* Hero Image */}
          {post.data.image?.url && (
            <PrismicNextImage
              field={post.data.image}
              alt={post.data.image.alt || post.data.title}
              className="w-full max-h-[23rem] object-cover rounded-xl mb-8"
            />
          )}

          <SocialShare url={postUrl} title={post.data.title} />

          {/* Content with IDs for H2 */}
          <div className="prose prose-lg max-w-none mx-auto  mt-6">
              <SliceZone slices={post.data.slices} components={components} />
          </div>
        </main>

        {/* --- RIGHT SIDEBAR (Contact Form) --- */}
        <aside className="lg:col-span-3 ">
          <div className="sticky top-40">
            <ContactFormRegister />
          </div>
        </aside>
      </div>
  )
}

export default Details
