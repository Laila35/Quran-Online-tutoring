'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../shared/Container'

export default function BlogCard({ posts }) {
  const [view, setView] = useState('list')

  return (
    <Container className="py-12 sm:py-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
        <h1 className="text-2xl sm:text-3xl font-semibold text-center sm:text-left mb-4 sm:mb-0">
          Latest Blog Posts
        </h1>

        {/* View Toggle Buttons */}
        <div className="flex gap-2 items-center justify-center">
          <button
            className={`px-3 py-1 text-sm border rounded ${
              view === 'list'
                ? 'bg-primary text-white'
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => setView('list')}
          >
            List View
          </button>
          <button
            className={`px-3 py-1 text-sm border rounded ${
              view === 'grid'
                ? 'bg-primary text-white'
                : 'border-gray-300 text-gray-700'
            }`}
            onClick={() => setView('grid')}
          >
            Grid View
          </button>
        </div>
      </div>

      {/* Render List or Grid */}
      {view === 'list' ? (
        <div className="space-y-16">
          {posts.map((article) => (
            <div
              key={article.href}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t pt-8"
            >
              <div className="w-full">
                <Image
                  src={article.image.src}
                  alt={article.title || 'Article Image'}
                  width={article.image.width}
                  height={article.image.height}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
                  <Link href={article.href} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-neutral-700 mb-4">{article.description}</p>
                <Link
                  href={article.href}
                  className="text-primary hover:underline font-medium mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((article) => (
            <div
              key={article.href}
              className="rounded-lg overflow-hidden border shadow-sm bg-white"
            >
              <Image
                src={article.image.src}
                alt={article.title || 'Article Image'}
                width={article.image.width}
                height={article.image.height}
                className="object-cover w-full h-40"
              />
              <div className="p-6 flex flex-col">
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  <Link href={article.href} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-sm text-neutral-700 mb-4">{article.description}</p>
                <Link
                  href={article.href}
                  className="text-primary hover:underline font-medium mt-auto"
                >
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  )
}
