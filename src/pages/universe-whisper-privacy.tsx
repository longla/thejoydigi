import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function UniverseWhisperPrivacyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Head>
        <title>The Universe Whisper - Privacy Policy</title>
        <meta name="description" content="Privacy Policy for The Universe Whisper TikTok App." />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
        <main className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-purple-400 text-center">The Universe Whisper - Privacy Policy</h1>
          
          <p className="mb-4 text-gray-300">
            Your privacy is important to us. This Privacy Policy explains how The Universe Whisper collects, uses, and protects your personal information when you use our application.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">Information We Collect</h2>
          <p className="mb-4 text-gray-300">
            Details about the types of information we collect (e.g., TikTok account data, usage data) will be provided here. This may include information you provide directly, such as when you connect your TikTok account, and information collected automatically, like usage statistics and device information.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">How We Use Your Information</h2>
          <p className="mb-4 text-gray-300">
            Information on how collected data is used to provide and improve the service will be detailed here. This includes using your information to post content to your TikTok account as per your instructions, to personalize your experience, to communicate with you about the service, and for analytics to improve The Universe Whisper.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">Data Sharing and Disclosure</h2>
          <p className="mb-4 text-gray-300">
            We do not sell your personal information. We may share your information with third-party service providers only to the extent necessary to provide and improve our services (e.g., cloud hosting). We may also disclose information if required by law. Specifics about data sharing will be further detailed.
          </p>

          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">Data Security</h2>
          <p className="mb-4 text-gray-300">
            We are committed to ensuring that your information is secure. Measures taken to protect your data, such as encryption and access controls, will be outlined here. However, no system is 100% secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="text-3xl font-semibold mt-8 mb-4 text-purple-300">Your Rights and Choices</h2>
          <p className="mb-4 text-gray-300">
            You will have rights to access, update, or delete your personal information. Details on how to exercise these rights will be provided.
          </p>

          <p className="mt-6 mb-4 text-gray-300">
            Please check back later for the full Privacy Policy. We are working diligently to provide a comprehensive and clear explanation of our data practices.
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
