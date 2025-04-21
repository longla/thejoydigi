import { NextPage } from "next";
import Link from "next/link";
import {
  FaChartBar,
  FaCode,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import MainLayout from "../_layouts";

const CTO: NextPage = () => {
  const services = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Technical Leadership",
      description:
        "Guide your technical team and make strategic decisions about technology stack and architecture.",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Team Building",
      description:
        "Help recruit, train, and manage technical talent to build a strong development team.",
    },
    {
      icon: <FaChartBar className="w-6 h-6" />,
      title: "Product Strategy",
      description:
        "Define and execute product roadmaps aligned with business goals and market needs.",
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Security & Compliance",
      description:
        "Ensure your technology meets security standards and regulatory requirements.",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovation Advisory",
      description:
        "Identify and implement emerging technologies to keep your business competitive.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Understand your business goals, current tech stack, and team structure.",
    },
    {
      step: "2",
      title: "Assessment",
      description:
        "Evaluate technical capabilities, identify gaps, and opportunities.",
    },
    {
      step: "3",
      title: "Planning",
      description: "Develop a comprehensive technical strategy and roadmap.",
    },
    {
      step: "4",
      title: "Implementation",
      description:
        "Execute the strategy while building and mentoring your team.",
    },
    {
      step: "5",
      title: "Growth",
      description:
        "Scale your technical operations and continuously optimize processes.",
    },
  ];

  return (
    <MainLayout
      title="Freelance CTO / Tech Partner | The Joy Digi"
      description="Get the technical leadership you need without the full-time commitment. We help you build, scale, and optimize your technology operations while mentoring your team."
    >
      <div className="min-h-screen bg-soft-sand">
        <main className="container mx-auto px-4 py-16">
          <section className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-deep-teal mb-6">
              Freelance CTO / Tech Partner
            </h1>
            <p className="text-xl text-deep-teal mb-8">
              Get the technical leadership you need without the full-time
              commitment. We help you build, scale, and optimize your technology
              operations while mentoring your team.
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
                      Startups needing technical leadership
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Growing companies scaling their tech team
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Businesses undergoing digital transformation
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                    <span className="text-gray-600">
                      Founders needing a technical co-founder
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="text-center">
              <Link
                href="/consultation"
                className="bg-sky-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-sky-blue-dark transition-colors"
              >
                Start Your Technical Partnership
              </Link>
            </section>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default CTO;
