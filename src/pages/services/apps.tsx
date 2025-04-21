import { NextPage } from "next";
import Link from "next/link";
import {
  FaChartLine,
  FaCode,
  FaMobile,
  FaRocket,
  FaServer,
  FaShieldAlt,
  FaUserCog,
} from "react-icons/fa";
import MainLayout from "../_layouts";

const Apps: NextPage = () => {
  const features = [
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description:
        "Build once, deploy everywhere with React Native and modern web technologies.",
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Custom Development",
      description:
        "Tailored solutions that perfectly match your business requirements.",
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: "Backend Services",
      description:
        "Robust backend infrastructure with scalable APIs and databases.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Security First",
      description:
        "Enterprise-grade security and data protection built into every app.",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Performance Optimized",
      description: "Lightning-fast apps with smooth user experiences.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Planning",
      description:
        "Define requirements, user stories, and technical architecture.",
    },
    {
      step: "2",
      title: "Design",
      description: "Create user flows, wireframes, and UI/UX designs.",
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development with regular updates and feedback.",
    },
    {
      step: "4",
      title: "Testing",
      description:
        "Comprehensive testing including unit, integration, and user testing.",
    },
    {
      step: "5",
      title: "Deployment",
      description: "App store submission and production deployment.",
    },
  ];

  return (
    <MainLayout
      title="Web & Mobile Apps | The Joy Digi"
      description="Full-stack development for web and mobile apps tailored to your business goals. From MVPs to internal tools — scalable, secure, and user-friendly."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Web & Mobile Apps
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              Full-stack development for web and mobile apps tailored to your
              business goals. From MVPs to internal tools — scalable, secure,
              and user-friendly.
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
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRocket className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        Startups
                      </h3>
                      <p className="text-gray-600">
                        With innovative app ideas ready to bring to market
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
                        Needing internal tools and dashboards
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCode className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        Digital Transformation
                      </h3>
                      <p className="text-gray-600">
                        Looking to digitize their services
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-soft-sand/50 transition-colors duration-300">
                    <div className="w-10 h-10 bg-sky-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaUserCog className="w-5 h-5 text-sky-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-deep-teal mb-1">
                        Founders
                      </h3>
                      <p className="text-gray-600">
                        Seeking a tech partner for their vision
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
                Start Your App Development Journey
              </Link>
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Apps;
