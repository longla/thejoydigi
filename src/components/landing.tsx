import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  FaChartLine,
  FaClock,
  FaLaptopCode,
  FaMobile,
  FaPalette,
  FaQuestionCircle,
  FaReceipt,
  FaRocket,
  FaStar,
  FaTag,
} from "react-icons/fa";

type Service = {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
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
        "Get a professional website that builds trust, brings in customers, and makes your business look great — no tech experience needed. I handle everything so you can focus on running your business.",
      icon: <FaPalette className="w-6 h-6" />,
      features: [
        "Custom website that fits your business and brand",
        "Mobile-friendly and easy to use on all devices",
        "Built to help you get found on Google (local SEO)",
        "Online store or booking system if needed",
      ],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description:
        "I help founders bring their app ideas to life without needing a technical background. I design and build mobile apps for iOS and Android that are user-friendly, scalable, and tailored to your goals — whether it's a side project or the start of a business.",
      icon: <FaMobile className="w-6 h-6" />,
      features: [
        "Apps designed with your goals in mind",
        "Works on both iOS and Android devices",
        "Great for MVPs or small business tools",
        "No tech skills required to get started",
      ],
    },
    {
      id: 3,
      title: "SEO & Digital Marketing",
      description:
        "Want to show up on Google and get more customers? I take care of SEO and digital ads for you — including Google, Facebook, Instagram, and Amazon. You don't need to understand the tech — I handle it all and help you reach more people online.",
      icon: <FaRocket className="w-6 h-6" />,
      features: [
        "Get found on Google with smart SEO",
        "Run ads that bring real customers",
        "Help with content and social media",
        "Simple reports to show what's working",
      ],
    },
    {
      id: 5,
      title: "Digital Analytics",
      description:
        "I set up tracking so you know what's working and what's not. No complicated dashboards — just clear reports that show where your visitors come from, what they do, and how your business is growing.",
      icon: <FaLaptopCode className="w-6 h-6" />,
      features: [
        "Track visits and customer behavior",
        "Know which pages and ads perform best",
        "Easy-to-read reports — no tech jargon",
        "Insights to help grow your business",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-white to-secondary">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,190,255,0.05),transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-textLight mb-6 font-logo"
          >
            Elevating
            <span className="text-primary"> Digital Experiences</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-textLight mb-8 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge digital solutions that drive
            growth and enhance user experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
            >
              Schedule Your Free Consultation
            </a>
            <a
              href="#contact"
              className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Contact Me
            </a>
            <a
              href="#why-me"
              className="inline-block bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-colors duration-300"
            >
              Why Me
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-bgLight">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-textLight">
            Cutting-Edge Digital Solutions for Your Business
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-bgLight rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="text-primary mb-4 flex justify-center"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                    {service.title}
                  </h3>
                  <p className="text-textLight mb-6">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-xl font-heading font-semibold text-textLight mb-3">
                      What you get:
                    </h4>
                    <ul className="space-y-2">
                      {service.features?.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.2 + 0.4 + featureIndex * 0.1,
                          }}
                          className="flex items-start text-textLight"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg md:text-xl text-textLight mb-8">
              <span className="hidden md:inline-block mr-2">
                <FaQuestionCircle className="inline-block w-5 h-5 text-primary" />
              </span>
              Not sure what you need yet? Let's talk. I offer a free consult to
              help you figure out the best next step.
            </p>
            <a
              href="#booking"
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
            >
              Schedule Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-textLight">
            Meet Your Digital Partner
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden shadow-xl mx-auto">
              <Image
                src="/about-image.jpeg"
                alt="Long La - Your Digital Partner"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-textLight">
                Hi, I'm Long La, your dedicated digital partner with over 12
                years of experience in the tech industry. My journey has taken
                me through leading tech companies, innovative startups, and
                consulting firms, giving me a unique perspective on delivering
                exceptional digital solutions.
              </p>
              <p className="text-lg text-textLight">
                My philosophy is simple: value first. Every project I undertake
                is driven by a commitment to deliver real, measurable results
                that matter to your business. Whether it's building a custom
                website, developing a mobile app, or implementing digital
                marketing strategies, I focus on solutions that directly impact
                your bottom line.
              </p>
              <p className="text-lg text-textLight">
                Having worked across various industries, I understand that each
                business has unique challenges and opportunities. My approach
                combines technical expertise with clear communication and a deep
                understanding of business needs, ensuring that your digital
                journey is both successful and enjoyable.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  12+ Years Experience
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  Big Tech Background
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Startup Experience
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                  Consulting Expertise
                </motion.div>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="#booking"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
                >
                  Let's Work Together
                </a>
                <a
                  href="#portfolio"
                  className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold border-2 border-primary hover:bg-secondary transition-colors duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section id="why-me" className="py-20 bg-bgLight">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-heading font-bold text-center mb-16 text-textLight"
          >
            Why Choose Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Competitive Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
              >
                <FaTag className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                Competitive Price
              </h3>
              <p className="text-textLight">
                I offer competitive rates without compromising on quality,
                ensuring you get the best value for your investment.
              </p>
            </motion.div>

            {/* Value First Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
              >
                <FaChartLine className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                Value First Approach
              </h3>
              <p className="text-textLight">
                Every solution is designed with your business goals in mind,
                focusing on delivering real value and measurable results.
              </p>
            </motion.div>

            {/* High Quality Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
              >
                <FaStar className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                High Quality Solutions
              </h3>
              <p className="text-textLight">
                I deliver innovative, high-quality solutions using cutting-edge
                technologies and best practices.
              </p>
            </motion.div>

            {/* Transparent Billing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
              >
                <FaReceipt className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                Transparent Billing
              </h3>
              <p className="text-textLight">
                Clear, upfront pricing with no hidden fees. You'll always know
                exactly what you're paying for.
              </p>
            </motion.div>

            {/* Fast Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="bg-secondary p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6"
              >
                <FaClock className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                Fast Delivery
              </h3>
              <p className="text-textLight">
                Quick turnaround times without compromising quality, helping you
                launch your projects faster.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-bgLight">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-textLight">
            Explore My Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* QRganiz Project */}
            <div className="bg-gradient-to-br from-secondary to-primary-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                  QRganiz
                </h3>
                <FaMobile className="w-6 h-6 text-primary mb-3" />
                <p className="text-textLight mb-6">
                  Helped a solo founder bring their idea to life — from concept
                  to product launch. I built the website, mobile app, and QR
                  label system, and supported their successful launch on Amazon.
                  A simple way to organize belongings using QR code stickers and
                  an easy-to-use mobile app.
                </p>
                <a
                  href="https://www.qrganiz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-700 font-semibold inline-flex items-center group"
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
            <div className="bg-gradient-to-br from-secondary to-accent-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                  Ruh-Roh Retreat
                </h3>
                <FaStar className="w-6 h-6 text-accent mb-3" />
                <p className="text-textLight mb-6">
                  Helped a premium pet boarding business get discovered online
                  and grow their bookings. I built a modern, mobile-friendly
                  website with an easy-to-use booking system, set up their
                  Google Business Profile, and ran local SEO and ad campaigns.
                  The result? More visibility, more inquiries, and more happy
                  pet owners.
                </p>
                <a
                  href="https://www.ruhrohretreat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-700 font-semibold inline-flex items-center group"
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
            <div className="bg-gradient-to-br from-secondary to-primary-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-4 text-textLight">
                  More Projects Coming Soon
                </h3>
                <p className="text-textLight mb-6">
                  Stay tuned for more exciting projects showcasing innovative
                  solutions and cutting-edge technologies.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-white text-primary rounded-full text-sm shadow-sm">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-textLight">
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
          <h2 className="text-4xl font-heading font-bold text-center mb-16 text-textLight">
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
                  className="block text-sm font-medium text-textLight mb-1"
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
                  className="block text-sm font-medium text-textLight mb-1"
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
                  className="block text-sm font-medium text-textLight mb-1"
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
                  className="block text-sm font-medium text-textLight mb-1"
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
                className={`w-full ${
                  isSubmitting
                    ? "bg-primary-400"
                    : "bg-primary hover:bg-primary-600"
                } text-white px-6 py-4 rounded-lg font-semibold transition-colors duration-300 text-lg flex items-center justify-center`}
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
              <h3 className="text-2xl font-heading font-bold text-textLight mb-2">
                Thank You!
              </h3>
              <p className="text-textLight mb-6">
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
