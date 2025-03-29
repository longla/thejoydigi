import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FaCloud, FaCode, FaLaptopCode, FaMobile } from "react-icons/fa";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};

function LandingComponent() {
  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactRef = useRef<HTMLElement>(null);

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

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send the contact request to our API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "An error occurred while submitting your message"
        );
      }

      // Show success message
      setFormSubmitted(true);

      // Reset form
      setContactForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "An error occurred while submitting your message. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
          >
            Transform Your Business with{" "}
            <span className="text-primary-400">Innovative</span>{" "}
            <span className="text-primary-300">IT Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 text-secondary-200"
          >
            We help businesses thrive in the digital age with innovative IT
            solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#services"
              className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-secondary-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
              and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-secondary-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-6 text-center">
                Why Choose TheJoyDigi?
              </h2>
              <p className="text-lg text-secondary-600 mb-6 text-center">
                With years of experience in delivering innovative IT solutions,
                we understand what it takes to help businesses succeed in the
                digital age. Our team of experts combines technical expertise
                with business acumen to deliver results that matter.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary mr-2"
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
                  <span className="text-secondary-600">
                    Expert team with proven track record
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary mr-2"
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
                  <span className="text-secondary-600">
                    Custom solutions for your unique needs
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary mr-2"
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
                  <span className="text-secondary-600">
                    24/7 support and maintenance
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-primary mr-2"
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
                  <span className="text-secondary-600">
                    Competitive pricing and flexible terms
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-secondary-600">
                Ready to transform your business? Contact us today for a free
                consultation.
              </p>
            </div>
            {formSubmitted && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-500"
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
                    <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-2">
                      Thank you for your message!
                    </h3>
                    <p className="text-secondary-600 font-sans">
                      We'll get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 w-full bg-primary hover:bg-primary-600 text-white py-2 rounded-lg font-medium transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {!formSubmitted && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, phone: e.target.value })
                    }
                    required
                    pattern="[0-9]{10}"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={contactForm.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingComponent;
