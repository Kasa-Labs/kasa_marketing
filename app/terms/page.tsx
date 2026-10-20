"use client";

import React from "react";
import { termsData } from "./terms";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-10 lg:px-8 lg:py-16">
        <div className="bg-white rounded-3xl border border-brand-900/10 p-6 shadow-sm sm:p-8 lg:p-16">
          {/* Header */}
          <h1 className="display text-4xl lg:text-5xl mb-3 text-center">
            {termsData.introduction.title}
          </h1>
          <p className="text-sm text-muted mb-10 text-center">
            Last updated: {termsData.lastUpdated}
          </p>

          {/* Introduction */}
          <div className="mb-10">
            <p className="mb-4 text-brand-900/80">
              {termsData.introduction.welcome}
            </p>
            <p className="mb-4 text-brand-900/80">
              {termsData.introduction.acceptance}
            </p>
          </div>

          {/* Development Notice */}
          <div className="bg-brand-50 border-l-4 border-brand-600 p-5 mb-10 rounded-r-xl">
            <h3 className="font-semibold text-brand-900 mb-2">
              {termsData.developmentNotice.title}
            </h3>
            <p className="text-brand-900/80 text-sm">
              {termsData.developmentNotice.content}
            </p>
          </div>

          {/* Sections */}
          {termsData.sections.map((section) => (
            <section key={section.id} className="mb-10" id={section.id}>
              <h2 className="text-2xl font-semibold mb-4 text-brand-900">
                {section.title}
              </h2>

              {section.subsections.map((subsection, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-brand-900">
                    {subsection.title}
                  </h3>
                  <p className="text-brand-900/80 mb-2">{subsection.content}</p>

                  {/* Contact information special case */}
                  {"contactInfo" in subsection && subsection.contactInfo && (
                    <ul className="list-disc pl-6 space-y-1 text-brand-900/80 mt-3">
                      <li>
                        General Inquiries:{" "}
                        <a
                          href={`mailto:${subsection.contactInfo.email}`}
                          className="font-medium text-brand-600 hover:underline"
                        >
                          {subsection.contactInfo.email}
                        </a>
                      </li>
                      <li>
                        Support:{" "}
                        <a
                          href={`mailto:${subsection.contactInfo.support}`}
                          className="font-medium text-brand-600 hover:underline"
                        >
                          {subsection.contactInfo.support}
                        </a>
                      </li>
                      <li>
                        Privacy:{" "}
                        <a
                          href={`mailto:${subsection.contactInfo.privacy}`}
                          className="font-medium text-brand-600 hover:underline"
                        >
                          {subsection.contactInfo.privacy}
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}

          {/* Footer acknowledgment */}
          <div className="mt-12 pt-8 border-t border-brand-900/10">
            <p className="text-sm text-muted text-center">
              By using KasaMD, you acknowledge that you have read, understood,
              and agree to be bound by these Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
