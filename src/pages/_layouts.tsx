import { DefaultSEO } from "@/components/seo";
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
      <DefaultSEO />
      {/* Header Section */}
      <header className="sticky top-0 z-50 bg-[#FDF6EC] shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-logo font-bold text-[#003B49] no-underline hover:no-underline"
            >
              TheJoyDigi
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-[#003B49] hover:text-[#FF6B6B] font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-[#003B49] hover:text-[#FF6B6B] font-medium"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-[#003B49] hover:text-[#FF6B6B] font-medium"
            >
              About Us
            </Link>
            <Link
              href="/#contact"
              className="text-[#003B49] hover:text-[#FF6B6B] font-medium"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-[#003B49] hover:text-[#FF6B6B] font-medium"
            >
              Blog
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-[#003B49]">
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
          <div className="md:hidden bg-[#FDF6EC] border-t border-[#003B49] shadow-md">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              <Link
                href="/"
                className="py-2 text-[#003B49] hover:text-[#FF6B6B] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="py-2 text-[#003B49] hover:text-[#FF6B6B] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="py-2 text-[#003B49] hover:text-[#FF6B6B] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="py-2 text-[#003B49] hover:text-[#FF6B6B] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="py-2 text-[#003B49] hover:text-[#FF6B6B] font-medium"
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
      <footer className="bg-[#003B49] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">
                The Joy Digi
              </h3>
              <p className="text-white mb-4">
                A Digital Studio for Visionary Brands
              </p>
              <p className="text-white">
                Helping businesses grow with purposeful design, custom tech, and
                clear strategy
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    Website Design & Development
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    Web & Mobile Applications
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    Digital Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-white">
                  <a
                    href="mailto:hello@thejoydigi.com"
                    className="hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    hello@thejoydigi.com
                  </a>
                </li>
                <li className="text-white">
                  <a
                    href="tel:+16572726537"
                    className="hover:text-[#FF6B6B] transition-colors duration-300"
                  >
                    (657) 272-6537
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white mt-12 pt-8 text-center">
            <p className="text-white">
              © {new Date().getFullYear()} The Joy Digi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainLayout;
