import { NextPage } from "next";
import Link from "next/link";
import {
  FaChartLine,
  FaCode,
  FaMobile,
  FaPalette,
  FaRocket,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import MainLayout from "../_layouts";

const Websites: NextPage = () => {
  const features = [
    {
      icon: <FaPalette className="w-6 h-6" />,
      title: "Custom Design",
      description:
        "Unique, brand-aligned designs that stand out and engage visitors.",
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: "Responsive Development",
      description: "Flawless performance across all devices and screen sizes.",
    },
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to improve search visibility.",
    },
    {
      icon: <FaShoppingCart className="w-6 h-6" />,
      title: "E-commerce Integration",
      description:
        "Seamless online store setup with secure payment processing.",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Performance Focused",
      description: "Fast loading times and optimized user experience.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We start by understanding your business goals, target audience, and unique requirements.",
      icon: <FaSearch className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Design",
      description:
        "Create wireframes and design mockups that align with your brand and goals.",
      icon: <FaPalette className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Development",
      description:
        "Build your website using modern technologies and best practices.",
      icon: <FaCode className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Testing",
      description:
        "Thorough testing across devices and browsers to ensure quality.",
      icon: <FaMobile className="w-6 h-6" />,
    },
    {
      step: "5",
      title: "Launch",
      description:
        "Deploy your website and provide training for content management.",
      icon: <FaRocket className="w-6 h-6" />,
    },
  ];

  return (
    <MainLayout
      title="Website Design & Development | The Joy Digi"
      description="Custom, clean, and SEO-optimized websites that reflect your brand and help convert visitors into customers. Built with modern tools and mobile-friendly design."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Website Design & Development
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              Custom, clean, and SEO-optimized websites that reflect your brand
              and help convert visitors into customers.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="w-12 h-12 bg-sky-blue/10 rounded-full flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-deep-teal mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl font-semibold text-deep-teal mb-6">
                Our Process
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">
                    Discovery
                  </h3>
                  <p className="text-gray-600">
                    We start by understanding your business goals, target
                    audience, and unique requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">
                    Design
                  </h3>
                  <p className="text-gray-600">
                    Create wireframes and design mockups that align with your
                    brand and goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">
                    Development
                  </h3>
                  <p className="text-gray-600">
                    Build your website using modern technologies and best
                    practices.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">
                    Testing
                  </h3>
                  <p className="text-gray-600">
                    Thorough testing across devices and browsers to ensure
                    quality.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-deep-teal mb-2">
                    Launch
                  </h3>
                  <p className="text-gray-600">
                    Deploy your website and provide training for content
                    management.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Perfect For
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRocket className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        New Businesses
                      </h3>
                      <p className="text-gray-600">
                        Needing their first website to establish online presence
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaChartLine className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        Growing Companies
                      </h3>
                      <p className="text-gray-600">
                        Wanting to upgrade their online presence and reach
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaPalette className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        Creatives & Solopreneurs
                      </h3>
                      <p className="text-gray-600">
                        Needing a portfolio site to showcase their work
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaShoppingCart className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        E-commerce Businesses
                      </h3>
                      <p className="text-gray-600">
                        Looking to sell products or services online
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center">
              <Link
                href="/#booking"
                className="inline-block bg-[#4ABEFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF6B6B] transition-colors duration-300"
              >
                Start Building Your Website
              </Link>
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Websites;
