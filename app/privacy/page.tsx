"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-10 lg:px-8 lg:py-16">
        <div className="bg-white rounded-3xl border border-brand-900/10 p-6 shadow-sm sm:p-8 lg:p-16">
          <h1 className="display text-4xl lg:text-5xl mb-3 text-center">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted mb-10 text-center">
            Last updated: October 28, 2026
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              1. Contact us
            </h2>
            <p className="mb-4 text-brand-900/80">
              If you have any questions about this privacy policy or how we
              handle your information, please contact us.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>Email: privacy@kasamd.com</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              2. About us
            </h2>
            <p className="mb-4 text-brand-900/80">
              KasaMD, a product of Kasa Labs, is a healthcare technology
              company dedicated to improving medical documentation for
              healthcare providers in underserved regions. We are committed to
              protecting your privacy and handling your data with care and
              transparency.
            </p>
            <p className="mb-4 text-brand-900/80">
              This privacy policy explains how we collect, use, store, and
              protect your personal information when you use our services,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>
                <strong>KasaMD Mac App:</strong> A macOS application for
                offline clinical documentation, transcription, and note
                generation.
              </li>
              <li>
                <strong>KasaMD WhatsApp Bot:</strong> A free WhatsApp-based
                clinical documentation assistant available to healthcare
                providers and rural clinics.
              </li>
              <li>
                <strong>KasaMD Website:</strong> Our marketing website at
                kasamd.com.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              3. What information do we collect?
            </h2>
            <p className="mb-4 text-brand-900/80">
              The information we collect depends on which KasaMD service you
              use.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-brand-900">
              WhatsApp Bot
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80 mb-4">
              <li>Your WhatsApp phone number</li>
              <li>
                Messages you send to the bot, including text and voice messages
              </li>
              <li>
                Any patient or clinical information you include in your
                messages
              </li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-brand-900">
              Mac App
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80 mb-4">
              <li>
                Audio recordings processed locally on your device for
                transcription
              </li>
              <li>
                Clinical notes and documentation generated on your device
              </li>
              <li>Patient records you create within the app</li>
            </ul>
            <p className="mb-4 text-brand-900/80">
              The Mac app is designed to work offline. Data you create in the
              Mac app is stored locally on your device.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3 text-brand-900">
              Website
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>
                Standard web analytics data such as page visits and device type
              </li>
              <li>
                When you download the Mac app: your IP address, approximate
                location (country, region, city) and network provider, browser,
                and the page you came from
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              4. How do we collect your information?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>
                <strong>WhatsApp Bot:</strong> When you send messages to the
                KasaMD bot on WhatsApp. Your messages are received via the
                WhatsApp Business API.
              </li>
              <li>
                <strong>Mac App:</strong> When you record audio, create notes,
                or manage patient records within the application.
              </li>
              <li>
                <strong>Website:</strong> Automatically when you visit our
                website.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              5. How do we use your information?
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>
                To process your messages and generate clinical documentation
              </li>
              <li>To provide and improve our services</li>
              <li>To respond to your requests and provide support</li>
              <li>To comply with applicable legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              6. Third-party services
            </h2>
            <p className="mb-4 text-brand-900/80">
              To provide our services, your information may be shared with the
              following types of third-party providers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80 mb-4">
              <li>
                <strong>AI processing:</strong> Messages sent to the WhatsApp
                bot are processed using third-party AI services (Anthropic) to
                generate clinical documentation. These providers process your
                data according to their own privacy and data handling policies.
              </li>
              <li>
                <strong>Messaging platform:</strong> The WhatsApp bot operates
                through WhatsApp (Meta). Your use of WhatsApp is subject to{" "}
                <a
                  href="https://www.whatsapp.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-600 hover:underline"
                >
                  WhatsApp&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Hosting and infrastructure:</strong> Service providers
                that host and operate our servers.
              </li>
            </ul>
            <p className="mb-4 text-brand-900/80">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              7. Data storage and international transfers
            </h2>
            <p className="mb-4 text-brand-900/80">
              Your data may be processed and stored outside of your country.
              By using our services, you acknowledge that your information may
              be transferred to and processed in countries other than your own.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              8. How do we protect your information?
            </h2>
            <p className="mb-4 text-brand-900/80">
              We take reasonable measures to protect your information,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80">
              <li>Encrypting data in transit</li>
              <li>Restricting access to authorized personnel</li>
              <li>
                Using secure infrastructure for data storage and processing
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              9. Your rights
            </h2>
            <p className="mb-4 text-brand-900/80">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-brand-900/80 mb-4">
              <li>
                Request access to the personal information we hold about you
              </li>
              <li>
                Request correction of inaccurate information
              </li>
              <li>
                Request deletion of your personal information
              </li>
              <li>
                Stop using our services at any time (for the WhatsApp bot,
                simply stop messaging the bot)
              </li>
            </ul>
            <p className="mb-4 text-brand-900/80">
              To exercise any of these rights, contact us at
              privacy@kasamd.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              10. Important note for healthcare providers
            </h2>
            <p className="mb-4 text-brand-900/80">
              If you use KasaMD to document patient interactions, you are
              responsible for obtaining any necessary patient consent before
              sharing patient information through our services. You should
              comply with the healthcare regulations and data protection laws
              applicable in your jurisdiction.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              11. Changes to this policy
            </h2>
            <p className="mb-4 text-brand-900/80">
              We may update this privacy policy from time to time. When we do,
              we will update the &quot;Last updated&quot; date at the top of
              this page. Your continued use of our services after any changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-brand-900">
              12. Questions or concerns
            </h2>
            <p className="mb-4 text-brand-900/80">
              If you have concerns about how we handle your data, you can
              contact us at privacy@kasamd.com or reach out to your local data
              protection authority.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
