"use client";
import { useState } from "react";
import Link from "next/link";
import logoWithText from "../assets/Black Text Logo-01.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src={logoWithText.src}
              alt="ChatFlow"
              className="h-44 w-auto group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation + actions */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <nav className="flex items-center gap-6">
              <Link
                href="/features"
                className="hover:text-gray-900 font-medium transition-colors"
              >
                Product
              </Link>
              <Link
                href="/setup"
                className="hover:text-gray-900 font-medium transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/pricing"
                className="hover:text-gray-900 font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-900 font-medium transition-colors"
              >
                Help center
              </Link>
            </nav>

            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://apps.shopify.com/chatflow?st_source=autocomplete&surface_detail=autocomplete_apps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6892FA] hover:bg-[#5578E8] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Download Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <Link
                href="/features"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              >
                Product
              </Link>
              <Link
                href="/setup"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              >
                Resources
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 font-medium py-2 transition-colors"
              >
                Help center
              </Link>
              <a
                href="https://apps.shopify.com/chatflow?st_source=autocomplete&surface_detail=autocomplete_apps"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#6892FA] hover:bg-[#5578E8] text-white font-semibold px-6 py-2.5 rounded-lg text-center transition-colors mt-2"
              >
                Download Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
