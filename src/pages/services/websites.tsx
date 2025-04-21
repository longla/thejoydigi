import { NextPage } from "next";
import Link from "next/link";
import {
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
    },
    {
      step: "2",
      title: "Design",
      description:
        "Create wireframes and design mockups that align with your brand and goals.",
    },
    {
      step: "3",
      title: "Development",
      description:
        "Build your website using modern technologies and best practices.",
    },
    {
      step: "4",
      title: "Testing",
      description:
        "Thorough testing across devices and browsers to ensure quality.",
    },
    {
      step: "5",
      title: "Launch",
      description:
        "Deploy your website and provide training for content management.",
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

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Our Process
              </h2>
              <div className="space-y-8">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-sky-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-deep-teal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Perfect For
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      New businesses needing their first website
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Small businesses wanting to upgrade their online presence
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Solopreneurs and creatives needing a portfolio site
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Businesses needing e-commerce functionality
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="text-center">
              <Link
                href="/#booking"
                className="inline-block bg-[#4ABEFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF6B6B] transition-colors duration-300"
              >
                Schedule Your Free Consultation
              </Link>
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Websites;
