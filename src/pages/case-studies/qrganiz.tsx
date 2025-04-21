import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../_layouts";

const QRganizCaseStudy: NextPage = () => {
  return (
    <MainLayout
      title="QRganiz Case Study | The Joy Digi"
      description="How we built a smart QR code-based item tracker to help users organize their personal belongings."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">QRganiz</h1>
            <p className="text-xl text-deep-teal mb-8">
              A smart QR code-based item tracker that helps users organize their
              personal belongings.
            </p>
            <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/case-studies/qrganiz-hero.webp"
                alt="QRganiz App Interface"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Project Type</p>
                <p className="font-medium text-deep-teal">
                  Mobile App + Website
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Industry</p>
                <p className="font-medium text-deep-teal">
                  Productivity / Tech
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Timeline</p>
                <p className="font-medium text-deep-teal">6 Months</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-deep-teal">Global</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://www.qrganiz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sky-blue hover:text-coral transition-colors"
              >
                Visit Client Website
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-deep-teal mb-6">
              The Challenge
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <p className="text-gray-600 mb-4">
                The client needed a solution to help users keep track of their
                personal belongings, especially valuable items that are
                frequently misplaced or loaned out. The challenge was to create
                a system that was:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Easy to use for non-technical users</li>
                <li>Cost-effective to implement</li>
                <li>Scalable for different types of items</li>
                <li>Secure and private</li>
                <li>Accessible across multiple devices</li>
              </ul>
            </div>
          </section>

          {/* What We Did Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-deep-teal mb-6">
              What We Did
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">
                  Mobile App Development
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Built a cross-platform mobile app using React Native</li>
                  <li>Implemented QR code generation and scanning</li>
                  <li>Created a user-friendly interface for item management</li>
                  <li>Added offline functionality for basic features</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">
                  Backend Infrastructure
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Developed a scalable backend using Node.js and MongoDB
                  </li>
                  <li>Implemented secure user authentication</li>
                  <li>Created APIs for item tracking and management</li>
                  <li>Set up cloud storage for QR code images</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-semibold text-deep-teal mb-6">
              Results
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-sky-blue mb-2">
                    10k+
                  </div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-blue mb-2">
                    4.8
                  </div>
                  <div className="text-gray-600">App Store Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-blue mb-2">
                    95%
                  </div>
                  <div className="text-gray-600">User Retention</div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">
                  Client Testimonial
                </h3>
                <blockquote className="text-gray-600 italic">
                  "The Joy Digi team transformed our vision into a reality. The
                  QRganiz app has exceeded our expectations in terms of user
                  adoption and satisfaction. Their attention to detail and
                  commitment to quality made all the difference."
                </blockquote>
                <div className="mt-4 text-gray-600">
                  <p className="font-semibold">John Smith</p>
                  <p>Founder, QRganiz</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="max-w-4xl mx-auto text-center">
            <Link
              href="/contact"
              className="inline-block bg-sky-blue text-white px-8 py-4 rounded-lg hover:bg-coral transition-colors"
            >
              Start Your Project
            </Link>
          </section>
        </main>
      </div>
    </MainLayout>
  );
};

export default QRganizCaseStudy;
