"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              {/* <img src="/logo_green.png" alt="" className="w-7 h-7" /> */}
              <img src="/kasamd_green.png" alt="" className="h-8" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Features
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="https://app.kasamd.com"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Transcribe
            </Link>
            <Link
              href="https://boafo.kasamd.com"
              className="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Boafo
              <span className="absolute -right-5 -top-1 text-[10px] font-semibold text-emerald-600">
                bet
              </span>
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Link
              href="https://app.kasamd.com/auth/login"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              href="https://app.kasamd.com/auth/signup"
              className="rounded-lg bg-button px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-button-hover"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 pb-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="/features"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="https://app.kasamd.com"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Transcribe
              </Link>
              <Link
                href="https://boafo.kasamd.com"
                className="relative text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Boafo
                <span className="ml-2 text-[10px] font-semibold text-emerald-600">
                  new
                </span>
              </Link>
              <div className="flex flex-col gap-3 border-t border-gray-200 pt-4">
                <Link
                  href="https://app.kasamd.com/auth/login"
                  className="rounded-lg bg-white px-4 py-2 text-center text-base font-semibold text-black border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="https://app.kasamd.com/auth/signup"
                  className="rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
