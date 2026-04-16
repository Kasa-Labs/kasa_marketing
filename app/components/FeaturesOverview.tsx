import Link from "next/link";

// USING: Option 4 - Teal + Violet (Modern + Bold)
// Primary: #14b8a6 (teal-500), Secondary: #8b5cf6 (violet-500)

const features = [
  {
    name: "Offline AI Transcription",
    description:
      "Convert speech to text with high accuracy, fully on-device. No internet needed.",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="15" r="12" fill="#14b8a6" />
        <rect x="14" y="20" width="12" height="12" rx="2" fill="#8b5cf6" />
      </svg>
    ),
  },
  {
    name: "Clinical Documentation",
    description:
      "Generate comprehensive clinical notes from your conversations",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="10" y="10" width="14" height="14" rx="2" fill="#14b8a6" />
        <rect x="16" y="16" width="14" height="14" rx="2" fill="#8b5cf6" />
      </svg>
    ),
  },
  {
    name: "Patient Management",
    description: "Efficiently organize and access patient information",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="15" cy="15" r="10" fill="#14b8a6" />
        <circle cx="25" cy="25" r="10" fill="#8b5cf6" />
      </svg>
    ),
  },
  {
    name: "Session Management",
    description: "Track and organize each transcription session seamlessly",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="12" width="16" height="16" rx="3" fill="#14b8a6" />
        <circle cx="28" cy="20" r="8" fill="#8b5cf6" />
      </svg>
    ),
  },
  {
    name: "Text Editor",
    description:
      "Advanced medical text editor with rich formatting and templates",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 8 L32 20 L20 32 L8 20 Z" fill="#14b8a6" />
        <circle cx="20" cy="20" r="6" fill="#8b5cf6" />
      </svg>
    ),
  },
  {
    name: "Unlimited Templates",
    description:
      "Access all SOAP, HPI, and specialty note templates with no restrictions",
    icon: (
      <svg
        className="h-12 w-12"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="8" y="10" width="16" height="20" rx="2" fill="#14b8a6" />
        <rect x="16" y="12" width="16" height="20" rx="2" fill="#8b5cf6" />
      </svg>
    ),
  },
];

export function FeaturesOverview() {
  return (
    <section className="bg-white pt-24" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professional-grade features designed to streamline your clinical
            workflow.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-12">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex gap-4">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gray-50">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section with Gradient - Full Width */}
      <div className="relative mt-20 overflow-hidden">
        {/* Gradient background from bottom - violet and teal */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-50 via-teal-50/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-100/40 to-transparent" />

        <div className="relative flex flex-col items-center justify-center gap-6 px-8 py-16 sm:flex-row">
          <h3 className="w-full text-center text-2xl font-bold text-gray-900 sm:hidden">
            Use KasaMD for free today
          </h3>
          <Link
            href="/features"
            className="w-full rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600 sm:w-auto"
          >
            Learn More
          </Link>
          <Link
            href="/features"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-center text-base font-semibold text-gray-900 transition-colors hover:bg-gray-50 sm:w-auto"
          >
            View All Features
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
