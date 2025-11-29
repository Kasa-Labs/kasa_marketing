"use client";

import React, { useEffect, useState } from "react";

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId || "");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const tocItems = [
    { id: "contact", title: "1. We're here to help. Get in touch." },
    { id: "about", title: "2. About us" },
    { id: "collect", title: "3. What information do we collect?" },
    { id: "how-collect", title: "4. How do we collect your information?" },
    { id: "use", title: "5. How do we use your information?" },
    {
      id: "marketing",
      title:
        "6. How do we use your personal information for marketing, and how do you opt out?",
    },
    {
      id: "store",
      title: "7. Do we store or share information outside of your country?",
    },
    { id: "share", title: "8. Who do we share your information with?" },
    { id: "website", title: "9. Using our website and Platform" },
    { id: "protect", title: "10. How do we protect your information?" },
    {
      id: "rights",
      title: "11. What are your rights in relation to your information?",
    },
    { id: "employees", title: "12. Employees" },
    { id: "changes", title: "13. Changes to this policy" },
    { id: "related", title: "14. Related companies" },
    { id: "more", title: "15. Find out more" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-10 lg:px-5 lg:py-10">
        <div className="flex gap-15 relative">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block flex-shrink-0 w-70">
            <nav className="sticky top-10 bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                Table of Contents
              </h2>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left w-full py-1.5 text-[15px] transition-colors ${
                        activeSection === item.id
                          ? "text-button font-medium"
                          : "text-gray-600 hover:text-button"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Mobile TOC Overlay */}
          {isMobileMenuOpen && (
            <div
              className="lg:hidden fixed inset-0 bg-black/50 z-40 p-5 overflow-y-auto"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setIsMobileMenuOpen(false);
                }
              }}
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-5 right-5 bg-white rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-md"
              >
                ×
              </button>
              <nav className="bg-white rounded-lg p-8 shadow-lg mt-15 max-w-md mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                  Table of Contents
                </h2>
                <ul className="space-y-3">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full py-1.5 text-[15px] transition-colors ${
                          activeSection === item.id
                            ? "text-button font-medium"
                            : "text-gray-600 hover:text-button"
                        }`}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1 bg-white rounded-lg p-8 lg:p-14 shadow-sm max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-semibold mb-3 text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Last updated: November 28, 2025
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 mb-10 rounded">
              <h3 className="font-semibold text-amber-900 mb-2">
                Important Notice: Development Version
              </h3>
              <p className="text-amber-900 text-sm">
                KasaMD is currently in active development and is provided as a
                demonstration and research platform. The platform is not yet a
                final product and should be used for evaluation and testing
                purposes only. Features, functionality, and security measures
                are subject to change as we continue to develop and improve the
                platform. This platform is not intended for use with live
                patient data or in clinical settings at this time.
              </p>
            </div>

            <section id="contact" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                1. We're here to help. Get in touch.
              </h2>
              <p className="mb-4 text-gray-700">
                At KasaMD, we take your privacy seriously. If you have any
                questions about this privacy policy or how we handle your
                information, please don't hesitate to contact us.
              </p>
              <p className="mb-4 text-gray-700">You can reach us at:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Email: privacy@kasamd.com</li>
                <li>Address: [Your Company Address]</li>
              </ul>
            </section>

            <section id="about" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                2. About us
              </h2>
              <p className="mb-4 text-gray-700">
                KasaMD, a product of Kasa Labs, is a healthcare technology
                platform dedicated to improving medical documentation for
                healthcare providers in underserved regions. We are committed to
                protecting your privacy and handling your data with care and
                transparency.
              </p>
              <p className="mb-4 text-gray-700">
                This privacy policy explains how we collect, use, store, and
                protect your personal information when you use our website and
                platform.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Platform Status
              </h3>
              <p className="mb-4 text-gray-700">
                KasaMD is currently in active development as a demonstration and
                research platform. The platform is provided "as is" for
                evaluation, testing, and demonstration purposes only. We are
                continuously developing and improving our features, security
                measures, and functionality.{" "}
                <strong>
                  Users should not enter live patient data or use this platform
                  for actual clinical documentation at this time.
                </strong>{" "}
                By using this platform, you acknowledge that it is a prototype
                under active development and that features and policies may
                change.
              </p>
            </section>

            <section id="collect" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                3. What information do we collect?
              </h2>
              <p className="mb-4 text-gray-700">
                We collect various types of information to provide and improve
                our services:
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Name and contact details (email address, phone number)</li>
                <li>Professional credentials and medical specialty</li>
                <li>Organization and workplace information</li>
                <li>Account credentials and authentication data</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Patient Information (Healthcare Providers Only)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Patient names and basic demographic information</li>
                <li>Medical notes and clinical documentation</li>
                <li>Transcriptions of medical consultations</li>
              </ul>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Technical Information
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Device information and browser type</li>
                <li>IP address and location data</li>
                <li>Usage data and platform interactions</li>
                <li>Session information and preferences</li>
              </ul>
            </section>

            <section id="how-collect" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                4. How do we collect your information?
              </h2>
              <p className="mb-4 text-gray-700">
                We collect information through various means:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Directly from you:</strong> When you create an
                  account, complete your profile, or use our platform features
                </li>
                <li>
                  <strong>Automatically:</strong> Through cookies and similar
                  technologies as you interact with our platform
                </li>
                <li>
                  <strong>From third parties:</strong> When you authenticate
                  using third-party services or when authorized by you
                </li>
              </ul>
            </section>

            <section id="use" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                5. How do we use your information?
              </h2>
              <p className="mb-4 text-gray-700">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To provide and maintain our platform and services</li>
                <li>To process and generate medical documentation</li>
                <li>To authenticate and secure your account</li>
                <li>To improve our platform and develop new features</li>
                <li>
                  To communicate with you about your account and our services
                </li>
                <li>
                  To comply with legal obligations and healthcare regulations
                </li>
                <li>To prevent fraud and ensure platform security</li>
              </ul>
            </section>

            <section id="marketing" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                6. How do we use your personal information for marketing, and
                how do you opt out?
              </h2>
              <p className="mb-4 text-gray-700">
                We may use your contact information to send you updates about
                our platform, new features, and relevant healthcare technology
                news. You can opt out of marketing communications at any time
                by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clicking the "unsubscribe" link in any marketing email</li>
                <li>
                  Updating your communication preferences in your account
                  settings
                </li>
                <li>Contacting us directly at privacy@kasamd.com</li>
              </ul>
              <p className="mb-4 text-gray-700">
                Please note that even if you opt out of marketing
                communications, we will still send you important service-related
                notifications.
              </p>
            </section>

            <section id="store" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                7. Do we store or share information outside of your country?
              </h2>
              <p className="mb-4 text-gray-700">
                As a platform serving healthcare providers across multiple
                regions, your information may be stored and processed in
                different countries. We ensure that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  All data transfers comply with applicable data protection laws
                </li>
                <li>
                  Appropriate safeguards are in place to protect your
                  information
                </li>
                <li>
                  Healthcare data is handled in accordance with HIPAA, GDPR, and
                  other relevant regulations
                </li>
                <li>
                  Our servers and infrastructure maintain high security
                  standards regardless of location
                </li>
              </ul>
            </section>

            <section id="share" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                8. Who do we share your information with?
              </h2>
              <p className="mb-4 text-gray-700">
                We only share your information in limited circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong>Service providers:</strong> Third-party vendors who
                  help us operate our platform (hosting, analytics, email
                  services)
                </li>
                <li>
                  <strong>Legal obligations:</strong> When required by law or to
                  protect rights and safety
                </li>
                <li>
                  <strong>Business transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets
                </li>
                <li>
                  <strong>With your consent:</strong> When you explicitly
                  authorize us to share your information
                </li>
              </ul>
              <p className="mb-4 text-gray-700">
                We never sell your personal information to third parties.
              </p>
            </section>

            <section id="website" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                9. Using our website and Platform
              </h2>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Cookies and Tracking Technologies
              </h3>
              <p className="mb-4 text-gray-700">
                We use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Remember your login status and preferences</li>
                <li>Analyze platform usage and performance</li>
                <li>Improve user experience and functionality</li>
              </ul>
              <p className="mb-4 text-gray-700">
                You can control cookies through your browser settings, though
                disabling certain cookies may limit platform functionality.
              </p>
            </section>

            <section id="protect" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                10. How do we protect your information?
              </h2>
              <p className="mb-6 text-gray-700">
                We implement comprehensive security measures to protect your
                information:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-5 py-4 text-left font-semibold text-gray-900 text-[15px]">
                        Security Measure
                      </th>
                      <th className="px-5 py-4 text-left font-semibold text-gray-900 text-[15px]">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Encryption
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        All data is encrypted in transit and at rest using
                        industry-standard protocols
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Authentication
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Secure authentication with email verification and
                        session management
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Access controls
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Role-based access ensures users only see authorized
                        information
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        De-identification tools
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        We use a range of tools designed to de-identify your
                        information before it is used or disclosed for certain
                        purposes, as described in this policy
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Secure storage and handling
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        We use a combination of techniques and measures to
                        maintain the security of our website and Platform and to
                        protect your account and your information
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Destroying or de-identifying your information
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        We only keep your information for as long as we need it
                        or are lawfully required to keep it
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="rights" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                11. What are your rights in relation to your information?
              </h2>

              <div className="bg-green-100 border-l-4 border-button p-5 my-6 rounded">
                <p className="italic text-gray-900">
                  You have rights in relation to your personal information. You
                  can contact us to exercise any of your rights in relation to
                  your information.
                </p>
              </div>

              <p className="mb-6 text-gray-700">
                Here are the things you can ask us to do in relation to your
                information at any time while you use our website, Platform or
                other services:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-5 py-4 text-left font-semibold text-gray-900 text-[15px]">
                        Category
                      </th>
                      <th className="px-5 py-4 text-left font-semibold text-gray-900 text-[15px]">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Access
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can request access to your personal information and
                        receive a copy of the data we hold about you
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Correction
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can request that we correct any inaccurate or
                        incomplete information
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Deletion
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can request deletion of your personal information,
                        subject to legal retention requirements
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Data portability
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can request your data in a structured, commonly used
                        format
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Restriction
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can request that we restrict processing of your
                        information in certain circumstances
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Object
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        You can object to processing of your information for
                        certain purposes
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Withdraw consent
                      </td>
                      <td className="px-5 py-4 text-gray-700 text-[15px]">
                        Where we rely on consent, you can withdraw it at any
                        time
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 mb-4 text-gray-700">
                To exercise any of these rights, please contact us at
                privacy@kasamd.com. We will respond to your request within 30
                days.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-900">
                Important Note on Medical Records
              </h3>
              <p className="mb-4 text-gray-700">
                Due to healthcare regulations including HIPAA and GDPR, medical
                records must be retained for 5-10 years depending on
                jurisdiction. Deletion requests for medical documentation will
                result in de-identification rather than complete deletion to
                ensure compliance with these requirements.
              </p>
            </section>

            <section id="employees" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                12. Employees
              </h2>
              <p className="mb-4 text-gray-700">
                If you are a Kasa Labs employee or contractor, additional
                privacy terms may apply to the processing of your employment
                information. Please refer to your employment contract and
                internal policies for details on how we handle employee data.
              </p>
            </section>

            <section id="changes" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                13. Changes to this policy
              </h2>
              <p className="mb-4 text-gray-700">
                We may update this privacy policy from time to time to reflect
                changes in our practices or legal requirements. When we make
                changes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  We will update the "Last updated" date at the top of this
                  policy
                </li>
                <li>
                  For material changes, we will notify you via email or platform
                  notification
                </li>
                <li>
                  Your continued use of the platform after changes constitutes
                  acceptance of the updated policy
                </li>
              </ul>
              <p className="mb-4 text-gray-700">
                We encourage you to review this policy periodically to stay
                informed about how we protect your information.
              </p>
            </section>

            <section id="related" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                14. Related companies
              </h2>
              <p className="mb-4 text-gray-700">
                Kasa Labs may share information with affiliated companies or
                subsidiaries for the purposes described in this privacy policy.
                All related companies are required to maintain the same privacy
                and security standards outlined in this policy.
              </p>
            </section>

            <section id="more" className="mb-12 scroll-mt-10">
              <h2 className="text-3xl lg:text-4xl font-semibold mb-5 text-gray-900">
                15. Find out more
              </h2>
              <p className="mb-4 text-gray-700">
                For more information about privacy and data protection, you can
                visit:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  HIPAA compliance information:{" "}
                  <a
                    href="https://www.hhs.gov/hipaa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button hover:underline"
                  >
                    HHS.gov/HIPAA
                  </a>
                </li>
                <li>
                  GDPR information:{" "}
                  <a
                    href="https://gdpr.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-button hover:underline"
                  >
                    GDPR.eu
                  </a>
                </li>
                <li>Your local data protection authority</li>
              </ul>
              <p className="mb-4 text-gray-700">
                If you have concerns about how we handle your data, you have the
                right to lodge a complaint with your local data protection
                authority.
              </p>
            </section>
          </main>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="lg:hidden fixed bottom-5 right-5 bg-button text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:bg-blue-700 active:scale-95 transition-transform z-30"
      >
        ☰
      </button>
    </div>
  );
}
