import { motion } from "framer-motion";
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

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Our Process
              </h2>
              <div className="space-y-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-6 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-sky-blue text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 relative"
                    >
                      <div className="absolute inset-0 bg-sky-blue/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="text-sm font-medium">{step.step}</span>
                        <div className="w-6 h-6 mt-1">{step.icon}</div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="flex-1 bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-xl font-semibold text-deep-teal mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
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
