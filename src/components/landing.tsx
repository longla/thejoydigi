import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  FaChartBar,
  FaChartLine,
  FaClock,
  FaFileInvoice,
  FaHeart,
  FaMobile,
  FaPalette,
  FaRocket,
  FaUserCog,
} from "react-icons/fa";

type Service = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  targetAudience?: string[];
};

export default function Landing() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbers = value.replace(/\D/g, "");

    // Format the number as (XXX) XXX-XXXX
    if (numbers.length === 0) return "";
    if (numbers.length <= 3) return `(${numbers}`;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formattedNumber });
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation - update to check formatted number
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Format phone number before sending to API
      const formattedPhone = formData.phone.replace(/\D/g, "");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          phone: formattedPhone,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setErrors({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitError(
          data.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Services data
  const services: Service[] = [
    {
      id: 1,
      title: "Website Design & Development",
      description:
        "Custom, clean, and SEO-optimized websites that reflect your brand and help convert visitors into customers. Built with modern tools and mobile-friendly design.",
      icon: <FaPalette className="w-6 h-6" />,
      features: [
        "Custom website that fits your brand perfectly",
        "Mobile-friendly and responsive design",
        "SEO-optimized for better visibility",
        "Fast loading and modern tech stack",
        "E-commerce and booking systems if needed",
      ],
      targetAudience: [
        "New businesses needing websites",
        "Small businesses wanting to grow",
        "Solopreneurs and creatives",
      ],
    },
    {
      id: 2,
      title: "Web & Mobile Applications",
      description:
        "Full-stack development for web and mobile apps tailored to your business goals. From MVPs to internal tools — scalable, secure, and user-friendly.",
      icon: <FaMobile className="w-6 h-6" />,
      features: [
        "Custom web and mobile applications",
        "Scalable architecture for growth",
        "User-friendly interfaces",
        "Secure and reliable solutions",
        "Cross-platform compatibility",
      ],
      targetAudience: [
        "Startups with app ideas",
        "Businesses needing internal tools",
        "Founders seeking tech partners",
      ],
    },
    {
      id: 3,
      title: "Digital Consulting",
      description:
        "Expert guidance to clarify your digital roadmap. Whether you're choosing the right tools, boosting visibility on search engines, or improving your funnel — we help you move smarter.",
      icon: <FaRocket className="w-6 h-6" />,
      features: [
        "Tech stack recommendations",
        "SEO strategy and implementation",
        "Digital growth strategy",
        "Performance optimization",
        "Content and social media guidance",
      ],
      targetAudience: [
        "Non-technical founders",
        "Businesses planning digital transformation",
        "Teams needing tech guidance",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#FDF6EC] via-white to-[#4ABEFF]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,190,255,0.05),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#003B49] mb-6 font-logo"
          >
            A Digital Studio for Visionary Brands
          </motion.h1>
          <p className="text-xl md:text-2xl text-[#003B49] mb-4 max-w-3xl mx-auto">
            Helping businesses grow with purposeful design, custom tech, and
            clear strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-block bg-[#4ABEFF] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#FF6B6B] transition-colors duration-300"
            >
              Schedule Your Free Consultation
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#4ABEFF] text-[#4ABEFF] rounded-full font-medium hover:text-[#FF6B6B] hover:border-[#FF6B6B] transition-colors duration-300 bg-[#FDF6EC] w-full sm:w-auto"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#FDF6EC]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-4">
              Services
            </h2>
            <p className="text-lg text-[#003B49] max-w-2xl mx-auto">
              Helping businesses grow with purposeful design, custom tech, and
              clear strategy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-6">
                  {service.icon &&
                    React.cloneElement(service.icon as React.ReactElement, {
                      className: "w-6 h-6 text-[#4ABEFF]",
                    })}
                </div>
                <h3 className="text-2xl font-bold text-[#003B49] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#003B49] mb-6">{service.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#003B49] mb-3">
                    Perfect For:
                  </h4>
                  <ul className="space-y-2">
                    {service.targetAudience?.map((audience, index) => (
                      <li
                        key={index}
                        className="flex items-center text-[#003B49]"
                      >
                        <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                        {audience}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="#booking"
                    className="inline-block w-full text-center border-2 border-[#4ABEFF] text-[#4ABEFF] bg-[#FDF6EC] px-6 py-3 rounded-full font-semibold hover:text-[#FF6B6B] hover:border-[#FF6B6B] transition-colors duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        id="process"
        className="py-20 bg-gradient-to-br from-[#4ABEFF]/5 to-[#003B49]/5"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-4">
              How We Work
            </h2>
            <p className="text-lg text-[#003B49] max-w-2xl mx-auto">
              Our simple, transparent process designed to bring your vision to
              life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="w-16 h-16 bg-[#4ABEFF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-2 group-hover:text-[#4ABEFF] transition-colors duration-300">
                Free Consultation
              </h3>
              <p className="text-[#003B49]">
                Let's chat about your goals and ideas over a virtual coffee
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="w-16 h-16 bg-[#4ABEFF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-2 group-hover:text-[#4ABEFF] transition-colors duration-300">
                Custom Proposal
              </h3>
              <p className="text-[#003B49]">
                A tailored plan that fits your needs and budget perfectly
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="w-16 h-16 bg-[#4ABEFF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-2 group-hover:text-[#4ABEFF] transition-colors duration-300">
                Design & Build
              </h3>
              <p className="text-[#003B49]">
                Watch your vision come to life with our creative magic
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="w-16 h-16 bg-[#4ABEFF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-2 group-hover:text-[#4ABEFF] transition-colors duration-300">
                Review & Iterate
              </h3>
              <p className="text-[#003B49]">
                Your feedback helps us make it even better
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <div className="w-16 h-16 bg-[#4ABEFF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-2 group-hover:text-[#4ABEFF] transition-colors duration-300">
                Launch & Support
              </h3>
              <p className="text-[#003B49]">
                Time to shine! We're here to help you succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-8">
              Meet Your Digital Partner
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="w-full md:w-1/2">
                <img
                  src="/about-image.jpeg"
                  alt="Long La - Founder of The Joy Digi"
                  className="rounded-full shadow-lg w-full h-auto object-cover aspect-square"
                />
              </div>
              <div className="w-full md:w-1/2 text-left">
                <p className="text-lg text-[#003B49] mb-6">
                  Hi, I'm Long — founder and developer of The Joy Digi. I've
                  spent over 10 years as a software engineer working with big
                  tech companies, startups, and consulting firms. Throughout
                  that journey, I've built everything from polished user-facing
                  apps to robust internal systems, learning what really creates
                  value for a business.
                </p>
                <p className="text-lg text-[#003B49] mb-6">
                  The Joy Digi is my way of combining that experience with a
                  personal mission: helping others bring meaningful ideas to
                  life. I believe in a value-first approach — where every
                  project is designed not just to look good, but to make a real
                  impact. Whether it's a handcrafted website, a custom app, or a
                  strategy session, it's all about creating tools that truly
                  serve your goals.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#4ABEFF]/10 text-[#4ABEFF] rounded-full text-sm font-medium">
                    10+ Years Experience
                  </span>
                  <span className="px-3 py-1 bg-[#003B49]/10 text-[#003B49] rounded-full text-sm font-medium">
                    Big Tech Background
                  </span>
                  <span className="px-3 py-1 bg-[#FF6B6B]/10 text-[#FF6B6B] rounded-full text-sm font-medium">
                    Startup Expertise
                  </span>
                  <span className="px-3 py-1 bg-[#4ABEFF]/10 text-[#4ABEFF] rounded-full text-sm font-medium">
                    Consulting Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets The Joy Digi Apart Section */}
      <section className="py-20 bg-[#FDF6EC]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-4">
              What Sets The Joy Digi Apart
            </h2>
            <p className="text-lg text-[#003B49]">
              Our unique approach to digital solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                <FaChartLine className="w-6 h-6 text-[#4ABEFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                Growth-focused
              </h3>
              <p className="text-[#003B49]">
                Solutions built to support clients' next stage of growth,
                ensuring your digital presence scales with your business.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                <FaUserCog className="w-6 h-6 text-[#4ABEFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                Tailored Approach
              </h3>
              <p className="text-[#003B49]">
                Every project is shaped by your unique goals and needs, not
                cookie-cutter solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                <FaHeart className="w-6 h-6 text-[#4ABEFF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                Built with Care
              </h3>
              <p className="text-[#003B49]">
                Clean design, solid tech, and long-term value at the core of
                everything we create.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-[#003B49] mb-8">
              Fair and straightforward pricing that works for your business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#FDF6EC] rounded-lg">
                <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                  <FaClock className="w-6 h-6 text-[#4ABEFF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                  Hourly Rate
                </h3>
                <p className="text-[#003B49]">
                  Based on project needs and complexity
                </p>
              </div>
              <div className="p-8 bg-[#FDF6EC] rounded-lg">
                <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                  <FaChartBar className="w-6 h-6 text-[#4ABEFF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                  Time Tracking
                </h3>
                <p className="text-[#003B49]">
                  Transparent tracking of all project hours
                </p>
              </div>
              <div className="p-8 bg-[#FDF6EC] rounded-lg">
                <div className="w-12 h-12 bg-[#4ABEFF]/10 rounded-full flex items-center justify-center mb-4">
                  <FaFileInvoice className="w-6 h-6 text-[#4ABEFF]" />
                </div>
                <h3 className="text-xl font-semibold text-[#003B49] mb-4">
                  Custom Quotes
                </h3>
                <p className="text-[#003B49]">
                  Tailored pricing for every client's needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-secondary-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003B49] mb-4">
              Real Projects. Real Results.
            </h2>
            <p className="text-lg text-[#003B49] max-w-2xl mx-auto">
              See how we've helped businesses grow with purposeful design and
              modern technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* QRganiz Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#003B49]">QRganiz</h3>
                <span className="px-4 py-2 bg-[#4ABEFF]/10 text-[#4ABEFF] rounded-full text-sm font-semibold">
                  Mobile App + Website
                </span>
              </div>
              <p className="text-[#003B49] mb-6">
                A smart QR code-based item tracker that helps users organize
                their personal belongings. The project included both product
                development and go-to-market strategy.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#003B49] mb-3">
                  What We Did:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Product Design & Branding
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Mobile App Development (React Native)
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Website Design & Development
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Amazon Product Launch Support
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    SEO Strategy & Content
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="https://www.qrganiz.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ABEFF] hover:text-[#003B49] font-semibold flex items-center"
                >
                  View Project
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
                </a>
                <span className="text-sm text-gray-500">
                  Productivity / Tech
                </span>
              </div>
            </div>

            {/* Ruh Roh Retreat Case Study */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#003B49]">
                  Ruh Roh Retreat
                </h3>
                <span className="px-4 py-2 bg-[#4ABEFF]/10 text-[#4ABEFF] rounded-full text-sm font-semibold">
                  Website + Booking System
                </span>
              </div>
              <p className="text-[#003B49] mb-6">
                A premium dog boarding business in California that needed a
                complete digital presence, from branding to booking system.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#003B49] mb-3">
                  What We Did:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Brand Identity Development
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Website Design & Development
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Booking System Integration
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Content Strategy & SEO
                  </li>
                  <li className="flex items-center text-[#003B49]">
                    <span className="w-2 h-2 bg-[#4ABEFF] rounded-full mr-3"></span>
                    Social Media Marketing
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href="https://ruhrohretreat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ABEFF] hover:text-[#003B49] font-semibold flex items-center"
                >
                  View Project
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
                </a>
                <span className="text-sm text-gray-500">
                  Pet Services / Hospitality
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-[#003B49]">
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
      <section id="contact" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-[#003B49]">
            Let's Start Your Digital Journey
          </h2>
          <div className="max-w-2xl mx-auto">
            {submitError && (
              <div className="mb-6 p-4 bg-accent-50 border border-accent-200 text-accent-600 rounded-lg">
                {submitError}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#003B49] mb-1"
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
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? "border-accent" : "border-gray-300"
                  } shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200`}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-accent">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#003B49] mb-1"
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
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-accent" : "border-gray-300"
                  } shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-accent">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#003B49] mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="(XXX) XXX-XXXX"
                  maxLength={14}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? "border-accent" : "border-gray-300"
                  } shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200`}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-accent">{errors.phone}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#003B49] mb-1"
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
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.message ? "border-accent" : "border-gray-300"
                  } shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors duration-200 resize-none`}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-accent">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-center px-6 py-3 rounded-full font-semibold transition-colors duration-300 text-white ${
                  isSubmitting
                    ? "bg-[#FF6B6B] opacity-75 cursor-not-allowed"
                    : "bg-[#4ABEFF] hover:bg-[#FF6B6B]"
                } flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
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
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
                <svg
                  className="h-6 w-6 text-primary-600"
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
              <h3 className="text-2xl font-heading font-bold text-[#003B49] mb-2">
                Thank You!
              </h3>
              <p className="text-[#003B49] mb-6">
                Your message has been sent successfully. I'll get back to you
                soon.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="bg-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-primary-600 transition-colors duration-300"
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
