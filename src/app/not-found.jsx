"use client";
import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            <head>
                <title>Page Not Found - 404 Error | Quran Online Tutoring </title>
                <meta
                    name="description"
                    content="Oops! The page you’re looking for doesn’t exist. Please check the URL or return to the homepage of Quran Online Tutoring."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>

            <div className="flex flex-col items-center justify-start min-h-screen text-center pt-20 px-4">
                <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold text-amber-500">404</h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-abmer-300">Page Not Found</h2>
                <p className="mt-2 text-sm sm:text-base md:text-lg text-amber-200">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link href="/" className="mt-4 px-4 py-2 text-white rounded hover:bg-amber-600 transition duration-300">
                    Go to Home
                </Link>
            </div>

        </>
    );
};

export default Custom404;
