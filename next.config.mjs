/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [ 
      { source: '/learn-noorani-qaida-online', destination: '/quran-track/qaida', permanent: true },
      { source: '/quran-reading-with-tajweed', destination: '/quran-track/reading', permanent: true },
      { source: '/quran-memorization', destination: '/quran-track/memorization', permanent: true },
      { source: '/tajweed-classes-online', destination: '/quran-track/tajweed', permanent: true },
      { source: '/online-ijazah-course', destination: '/quran-track/ijazah', permanent: true },
      { source: '/quran-with-translation-course', destination: '/quran-track/translation', permanent: true }, 
      { source: '/learn-islamic-studies-online', destination: '/islamic-studies', permanent: true },  
      { source: '/learn-arabic-online', destination: '/arabic-track/beginners', permanent: true },
      { source: '/quranic-arabic-course', destination: '/arabic-track/quranic-arabic', permanent: true },  
      { source: '/female-quran-teacher', destination: '/teachers/female', permanent: true },
      { source: '/male-quran-teachers', destination: '/teachers/male', permanent: true },  
      { source: '/quran-tafseer-course', destination: '/specialized-tracks/tafsir', permanent: true },
      { source: '/ten-qiraat-online', destination: '/specialized-tracks/qirat', permanent: true },
      { source: '/ramadan-special-courses', destination: '/specialized-tracks/ramadan', permanent: true }, 
      { source: '/home', destination: '/', permanent: true }, 
      { source: '/faqs', destination: '/', permanent: true }, 
      { source: '/courses', destination: '/programs', permanent: true }, 
      { source: '/quality-assurance', destination: '/', permanent: true }, 
      { source: '/customer-service', destination: '/', permanent: true }, 
      // Resources
      { source: '/learn-daily-supplication-online', destination: '/resources/duas-hadith', permanent: true },
    ];
  },
};

export default nextConfig;
