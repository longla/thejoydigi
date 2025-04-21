import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../_layouts";

const RuhRohRetreatCaseStudy: NextPage = () => {
  return (
    <MainLayout
      title="Ruh Roh Retreat Case Study | The Joy Digi"
      description="How we helped launch a premium dog boarding business with a complete digital presence."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Ruh Roh Retreat
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              A premium dog boarding business in California that needed a
              complete digital presence.
            </p>
            <div className="relative w-full aspect-[16/9] max-w-[400px] max-h-[500px] mx-auto rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/case-studies/ruh-roh-hero.webp"
                alt="Ruh Roh Retreat Facility"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600">Project Type</p>
                <p className="font-medium text-deep-teal">
                  Brand + Website + Booking
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Industry</p>
                <p className="font-medium text-deep-teal">
                  Pet Services / Hospitality
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium text-deep-teal">California, USA</p>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://www.ruhrohretreat.com/"
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
                The client needed help launching a premium dog boarding business
                from scratch, requiring:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Complete brand identity development</li>
                <li>Professional website with booking system</li>
                <li>SEO strategy and content management</li>
                <li>Digital marketing and visibility solutions</li>
                <li>Trust-building elements for pet owners</li>
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
                  Brand & Website
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Developed business name, logo, and visual brand</li>
                  <li>Built a playful yet professional website</li>
                  <li>Created mobile-friendly, pet-owner focused design</li>
                  <li>Integrated booking system and intake flow</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">
                  Content & Marketing
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    Wrote clear, value-driven copy emphasizing safety and care
                  </li>
                  <li>Set up blog structure for SEO</li>
                  <li>Managed content publishing</li>
                  <li>Ran social media ad campaigns</li>
                  <li>Guided local marketing strategy</li>
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
                    100%
                  </div>
                  <div className="text-gray-600">Calendar Fill Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-blue mb-2">
                    4.9
                  </div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-sky-blue mb-2">
                    50%
                  </div>
                  <div className="text-gray-600">Repeat Clients</div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-deep-teal mb-4">
                  Client Testimonial
                </h3>
                <blockquote className="text-gray-600 italic">
                  "The Joy Digi team helped us launch our dream business with a
                  strong digital presence. Their attention to detail in both
                  design and functionality has been instrumental in building
                  trust with our clients and growing our business."
                </blockquote>
                <div className="mt-4 text-gray-600">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p>Founder, Ruh Roh Retreat</p>
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

export default RuhRohRetreatCaseStudy;
