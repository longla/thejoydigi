import { DefaultMetaData } from "@/components/meta-data";
import Link from "next/link";
import React, { useState } from "react";

type MainLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  image,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <DefaultMetaData />
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-logo font-bold text-primary no-underline hover:no-underline"
            >
              TheJoyDigi
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-secondary-600 hover:text-primary font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-secondary-600 hover:text-primary font-medium"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-secondary-600 hover:text-primary font-medium"
            >
              About Me
            </Link>
            <Link
              href="/#contact"
              className="text-secondary-600 hover:text-primary font-medium"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-secondary-600 hover:text-primary font-medium"
            >
              Blog
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-secondary-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              <Link
                href="/"
                className="py-2 text-secondary-600 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="py-2 text-secondary-600 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="py-2 text-secondary-600 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/#contact"
                className="py-2 text-secondary-600 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="py-2 text-secondary-600 hover:text-primary font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer Section */}
      <footer className="bg-secondary-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1 - About */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                TheJoyDigi
              </h3>
              <p className="mb-4 text-secondary-300 font-heading">
                Empowering businesses with innovative IT solutions. I help
                companies transform their digital presence and streamline their
                operations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-accent-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-accent-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Services
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#services"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    Website Design & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    Web & Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    SEO & Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    IT & Cloud Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#services"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    Tech Consulting & Digital Strategy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Quick Links */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#about"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                Contact Me
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:contact@thejoydigi.com"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    contact@thejoydigi.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:6572726537"
                    className="text-secondary-300 hover:text-accent-400"
                  >
                    (657) 272-6537
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-800 text-center text-secondary-400">
            <p>
              &copy; {new Date().getFullYear()} TheJoyDigi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
