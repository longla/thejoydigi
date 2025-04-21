import { NextPage } from "next";
import Link from "next/link";
import {
  FaChartLine,
  FaRocket,
  FaSearch,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import MainLayout from "../_layouts";

const Consulting: NextPage = () => {
  const services = [
    {
      icon: <FaSearch className="w-6 h-6" />,
      title: "SEO Strategy",
      description:
        "Comprehensive SEO audits and strategies to improve your search visibility and organic traffic.",
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Digital Growth",
      description:
        "Data-driven strategies to grow your online presence and customer base.",
    },
    {
      icon: <FaTools className="w-6 h-6" />,
      title: "Tech Stack Selection",
      description:
        "Expert guidance in choosing the right technologies for your business needs.",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Improve your website's speed, user experience, and conversion rates.",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Team Training",
      description:
        "Workshops and training sessions to upskill your team in digital best practices.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Assessment",
      description:
        "Analyze your current digital presence and identify opportunities.",
    },
    {
      step: "2",
      title: "Strategy",
      description:
        "Develop a customized digital roadmap aligned with your goals.",
    },
    {
      step: "3",
      title: "Implementation",
      description: "Guide your team through executing the recommended changes.",
    },
    {
      step: "4",
      title: "Monitoring",
      description:
        "Track progress and adjust strategies based on performance data.",
    },
    {
      step: "5",
      title: "Optimization",
      description: "Continuously refine and improve your digital presence.",
    },
  ];

  return (
    <MainLayout
      title="Digital Consulting | The Joy Digi"
      description="Expert guidance to clarify your digital roadmap. Whether you're choosing the right tools, boosting visibility on search engines, or improving your funnel — we help you move smarter."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Digital Consulting
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              Expert guidance to clarify your digital roadmap. Whether you're
              choosing the right tools, boosting visibility on search engines,
              or improving your funnel — we help you move smarter.
            </p>
          </section>

          <div className="max-w-6xl mx-auto">
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Our Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <div className="w-12 h-12 bg-sky-blue/10 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-deep-teal mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-deep-teal mb-8">
                Our Approach
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
                      Non-technical founders needing digital guidance
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Businesses planning digital transformation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Teams needing tech stack recommendations
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Companies wanting to improve their online presence
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
                Start Your Digital Transformation
              </Link>
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Consulting;
