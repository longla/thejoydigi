import { NextPage } from "next";
import Link from "next/link";
import { FaMobile, FaPalette, FaRocket, FaUserCog } from "react-icons/fa";

const Services: NextPage = () => {
  const services = [
    {
      title: "Website Design & Development",
      description:
        "Custom, clean, and SEO-optimized websites that reflect your brand and help convert visitors into customers. Built with modern tools and mobile-friendly design.",
      icon: <FaPalette className="w-6 h-6" />,
      link: "/services/websites",
      features: [
        "Custom website design",
        "Responsive development",
        "SEO optimization",
        "Content management",
        "E-commerce integration",
      ],
      targetAudience: [
        "New businesses needing websites",
        "Small businesses wanting to grow",
        "Solopreneurs and creatives",
      ],
    },
    {
      title: "Web & Mobile Apps",
      description:
        "Full-stack development for web and mobile apps tailored to your business goals. From MVPs to internal tools — scalable, secure, and user-friendly.",
      icon: <FaMobile className="w-6 h-6" />,
      link: "/services/apps",
      features: [
        "Web application development",
        "Mobile app development",
        "API integration",
        "Cloud deployment",
        "Cross-platform compatibility",
      ],
      targetAudience: [
        "Startups with app ideas",
        "Businesses needing internal tools",
        "Founders seeking tech partners",
      ],
    },
    {
      title: "Digital Consulting",
      description:
        "Expert guidance to clarify your digital roadmap. Whether you're choosing the right tools, boosting visibility on search engines, or improving your funnel — we help you move smarter.",
      icon: <FaRocket className="w-6 h-6" />,
      link: "/services/consulting",
      features: [
        "Tech stack selection",
        "SEO strategy",
        "Digital transformation",
        "Growth planning",
        "Performance optimization",
      ],
      targetAudience: [
        "Non-technical founders",
        "Businesses planning digital transformation",
        "Teams needing tech guidance",
      ],
    },
    {
      title: "Freelance CTO / Tech Partner",
      description:
        "Strategic technology leadership for non-technical founders. We help you make informed decisions, build the right team, and scale your tech infrastructure.",
      icon: <FaUserCog className="w-6 h-6" />,
      link: "/services/cto",
      features: [
        "Technical strategy",
        "Team building",
        "Architecture design",
        "Process optimization",
        "Tech stack selection",
      ],
      targetAudience: [
        "Non-technical founders",
        "Startups needing tech leadership",
        "Businesses scaling their tech",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-soft-sand">
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-deep-teal mb-6">
            Our Services
          </h1>
          <p className="text-xl text-deep-teal mb-8">
            We help businesses grow with joyful experiences, purposeful design,
            custom tech, and clear strategy.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="group">
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-12 h-12 bg-sky-blue/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-deep-teal mb-4 group-hover:text-coral">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-deep-teal mb-3">
                    Perfect For:
                  </h3>
                  <ul className="space-y-2">
                    {service.targetAudience.map((audience, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-sky-blue rounded-full mr-3"></span>
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="text-sky-blue font-semibold group-hover:text-sky-blue-dark">
                  Learn More →
                </button>
              </div>
            </Link>
          ))}
        </div>

        <section className="text-center mt-16">
          <Link
            href="/consultation"
            className="bg-sky-blue text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-sky-blue-dark transition-colors"
          >
            Book a Free Consultation
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Services;
