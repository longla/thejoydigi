import { HomeIcon, QrCodeIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Link from "next/link";
import MainLayout from "../_layouts";

const CaseStudies: NextPage = () => {
  return (
    <MainLayout
      title="Case Studies | The Joy Digi"
      description="Explore our successful projects and see how we've helped businesses grow with digital solutions."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-deep-teal mb-8 text-center">
            Case Studies
          </h1>
          <p className="text-xl text-deep-teal mb-12 text-center max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital
            presence and achieve their goals.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* QRganiz Case Study */}
            <Link
              href="/case-studies/qrganiz"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <QrCodeIcon className="w-6 h-6 text-sky-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-teal group-hover:text-coral transition-colors">
                  QRganiz
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                A smart QR code-based item tracker that helps users organize
                their personal belongings.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Mobile App
                </span>
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Website
                </span>
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Digital Launch
                </span>
              </div>
            </Link>

            {/* Ruh Roh Retreat Case Study */}
            <Link
              href="/case-studies/ruh-roh-retreat"
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <HomeIcon className="w-6 h-6 text-sky-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-teal group-hover:text-coral transition-colors">
                  Ruh Roh Retreat
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                A premium dog boarding business in California that needed a
                complete digital presence.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Brand Identity
                </span>
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Website
                </span>
                <span className="text-sm bg-soft-sand text-deep-teal px-3 py-1 rounded-full">
                  Booking System
                </span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;
