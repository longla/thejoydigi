import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../_layouts";

const CaseStudies: NextPage = () => {
  const caseStudies = [
    {
      id: "qrganiz",
      title: "QRganiz",
      description:
        "A smart QR code-based item tracker that helps users organize their personal belongings.",
      image: "/case-studies/qrganiz-preview.webp",
      category: "Mobile App + Website",
      link: "/case-studies/qrganiz",
    },
    {
      id: "ruh-roh-retreat",
      title: "Ruh Roh Retreat",
      description:
        "A premium dog boarding business in California that needed a complete digital presence.",
      image: "/case-studies/ruh-roh-preview.webp",
      category: "Website + Booking System",
      link: "/case-studies/ruh-roh-retreat",
    },
  ];

  return (
    <MainLayout
      title="Case Studies | The Joy Digi"
      description="See how we've helped businesses grow with purposeful design and modern technology."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              Real projects. Real results. See how we've helped businesses grow
              with purposeful design and modern technology.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study) => (
                <Link key={study.id} href={study.link} className="group">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-64">
                      <Image
                        src={study.image}
                        alt={study.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-deep-teal group-hover:text-sky-blue transition-colors">
                          {study.title}
                        </h2>
                        <span className="px-3 py-1 bg-sky-blue/10 text-sky-blue rounded-full text-sm font-medium">
                          {study.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-4">{study.description}</p>
                      <div className="flex items-center text-sky-blue group-hover:text-coral transition-colors">
                        <span className="font-medium">View Case Study</span>
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CaseStudies;
