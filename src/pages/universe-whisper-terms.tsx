import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function UniverseWhisperTermsPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Head>
        <title>The Universe Whisper - Terms of Service</title>
        <meta name="description" content="Terms of Service for The Universe Whisper TikTok App." />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
        <main className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center">The Universe Whisper - Terms of Service</h1>
          
          <p className="mb-4 text-gray-300">
            Welcome to The Universe Whisper! These terms and conditions outline the rules and regulations for the use of The Universe Whisper's services.
          </p>
          <p className="mb-6 text-gray-300">
            By accessing this app we assume you accept these terms and conditions. Do not continue to use The Universe Whisper if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">Placeholder Sections</h2>
          <p className="mb-4 text-gray-300">
            Detailed terms regarding content ownership, user responsibilities, limitations of liability, and other relevant clauses will be updated here soon.
          </p>
          <p className="mb-4 text-gray-300">
            Please check back later for the full Terms of Service.
          </p>
          
          <div className="mt-8 text-sm text-gray-500">
            <p>Last Updated: {lastUpdatedDate}</p>
          </div>

          <div className="mt-10 text-center">
            <Link href="/universe-whisper" legacyBehavior>
              <a className="text-purple-400 hover:text-purple-300 text-lg font-semibold">&larr; Back to The Universe Whisper</a>
            </Link>
          </div>
        </main>
        <footer className="w-full max-w-4xl text-center mt-8 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} The Universe Whisper. All rights reserved.</p>
           <div className="mt-2 space-x-4">
            <Link href="/universe-whisper-terms" legacyBehavior>
              <a className="hover:text-gray-300">Terms of Service</a>
            </Link>
            <span>|</span>
            <Link href="/universe-whisper-privacy" legacyBehavior>
              <a className="hover:text-gray-300">Privacy Policy</a>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
