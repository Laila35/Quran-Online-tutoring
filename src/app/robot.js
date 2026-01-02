// app/robots.js

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/_next/',
          '/static/',
          '/private/',
          '/preview/',
          "/thank-you",
        ],
      },
    ],
    sitemap: 'https://quranonlinetutoring.com/sitemap.xml',
    host: 'https://quranonlinetutoring.com',
  };
}
