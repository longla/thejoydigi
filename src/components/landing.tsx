import { useState } from "react";
import { FaCloud, FaCode, FaLaptopCode, FaMobile } from "react-icons/fa";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

export default function Landing() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications and websites built with cutting-edge technologies to help your business thrive online.",
      icon: <FaCode className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: <FaMobile className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services to optimize your business operations and reduce costs.",
      icon: <FaCloud className="w-8 h-8" />,
    },
    {
      id: 4,
      title: "IT Consulting",
      description:
        "Expert guidance on digital transformation, technology strategy, and implementation for your business.",
      icon: <FaLaptopCode className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-gray-900 mb-6">
            Bringing Joy to Your Digital Journey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering Businesses with Innovative Digital Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Schedule Your Free Consultation
            </a>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Tailored Digital Solutions Just for You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <FaCode className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Web Development
              </h3>
              <p className="text-gray-600">
                Custom web applications and websites built with cutting-edge
                technologies to help your business thrive online.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <FaMobile className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Mobile Apps
              </h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications that deliver
                exceptional user experiences across all devices.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <FaCloud className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-600">
                Scalable cloud infrastructure and services to optimize your
                business operations and reduce costs.
              </p>
            </div>
            <div className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600 mb-4">
                <FaLaptopCode className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                IT Consulting
              </h3>
              <p className="text-gray-600">
                Expert guidance on digital transformation, technology strategy,
                and implementation for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Meet Your Digital Partner
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              As a dedicated freelancer, I'm passionate about helping businesses
              create value in the digital space. My commitment to transparency,
              clear communication, and tailored services ensures that your
              digital journey is both successful and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* QRganiz Project */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="text-blue-600 mb-6">
                  <FaCode className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  QRganiz
                </h3>
                <p className="text-gray-600 mb-6">
                  A smart organization solution featuring QR technology and
                  AI-powered image search for effortless item management.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm">
                    Mobile App
                  </span>
                  <span className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm shadow-sm">
                    AI Integration
                  </span>
                </div>
                <a
                  href="https://www.qrganiz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </a>
              </div>
            </div>

            {/* Ruh-Roh Retreat Project */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="text-purple-600 mb-6">
                  <FaMobile className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  Ruh-Roh Retreat
                </h3>
                <p className="text-gray-600 mb-6">
                  A modern pet boarding service website built with React.js,
                  featuring a responsive design, booking system, and optimized
                  for search engines.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow-sm">
                    React.js
                  </span>
                  <span className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow-sm">
                    SEO
                  </span>
                  <span className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm shadow-sm">
                    Digital Marketing
                  </span>
                </div>
                <a
                  href="https://www.ruhrohretreat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center group"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </a>
              </div>
            </div>

            {/* Placeholder for future projects */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="text-green-600 mb-6">
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">
                  More Projects Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay tuned for more exciting projects showcasing innovative
                  solutions and cutting-edge technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white text-green-600 rounded-full text-sm shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Schedule Your Free Consultation
          </h2>
          <div className="max-w-[800px] mx-auto">
            <div className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://calendly.com/baolonguit/free-consulting-session"
                className="w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Schedule a consultation"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16">
            Let's Start Your Digital Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                Thank You!
              </h3>
              <p className="text-gray-600 mb-6">
                Your message has been sent successfully. I'll get back to you
                soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
