"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AppleIcon, DOWNLOAD_URL } from "@/components/DownloadButton";

const links = [
  { href: "/features", label: "Features" },
  { href: "/features#pricing", label: "Pricing" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    !href.includes("#") && pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-900/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/kasamd_green.png" alt="KasaMD" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-900"
                    : "text-muted hover:bg-brand-50 hover:text-brand-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={DOWNLOAD_URL}
              className="hidden items-center gap-2 rounded-full bg-brand-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-950 sm:inline-flex"
            >
              <AppleIcon className="h-4 w-4" />
              Download
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="-mr-2 rounded-full p-2 text-brand-900 hover:bg-brand-50 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">
                {mobileMenuOpen ? "Close menu" : "Open menu"}
              </span>
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
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="border-t border-brand-900/10 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-brand-900 hover:bg-brand-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={DOWNLOAD_URL}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-900 px-4 py-3 text-base font-semibold text-white"
              >
                <AppleIcon className="h-4 w-4" />
                Download for Mac
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
