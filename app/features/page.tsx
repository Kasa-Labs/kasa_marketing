import Link from "next/link";

const features = [
  {
    name: "AI Transcription",
    description:
      "Automatically convert speech to text with high accuracy using advanced AI models.",
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
      "Generate comprehensive, professional clinical notes from your patient conversations in seconds.",
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
    description:
      "Efficiently organize and access patient information with an intuitive interface.",
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
    description:
      "Track and organize each transcription session seamlessly with automatic saving.",
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
    name: "Advanced Text Editor",
    description:
      "Medical text editor with rich formatting, templates, and real-time collaboration.",
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
      "Access all note templates including SOAP, HPI, and specialty formats with no restrictions.",
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

const kasaFeatures = [
  {
    feature: "Unlimited Transcriptions",
    included: true,
    description:
      "No limits on how many patient conversations you can transcribe",
  },
  {
    feature: "Unlimited Clinical Notes",
    included: true,
    description: "Generate as many notes as you need with no restrictions",
  },
  {
    feature: "Unlimited Templates",
    included: true,
    description:
      "Access all note templates including SOAP, HPI, and custom formats",
  },
  {
    feature: "Unlimited Patient Records",
    included: true,
    description: "Manage all your patients without storage limitations",
  },
  {
    feature: "Unlimited Session History",
    included: true,
    description: "Access complete history of all past transcription sessions",
  },
  {
    feature: "PDF Export",
    included: true,
    description: "Export your notes to PDF format for sharing and records",
  },
  {
    feature: "Custom Templates",
    included: true,
    description: "Create and save your own note templates",
  },
  {
    feature: "Multi-Device Access",
    included: true,
    description: "Use KasaMD on desktop, tablet, and mobile",
  },
];

const faqs = [
  {
    question: "Is KasaMD really free?",
    answer:
      "Yes! KasaMD is currently free to use with all features included. We offer unlimited transcriptions, unlimited notes, and unlimited patient records at no cost.",
  },
  {
    question: "Will KasaMD always be free?",
    answer:
      "We currently offer all features for free. In the future, we may introduce optional premium features, but our core medical documentation tools will remain accessible.",
  },
  {
    question: "Are there any usage limits?",
    answer:
      "No. You get unlimited transcriptions, unlimited clinical notes, unlimited templates, and unlimited patient records.",
  },
  {
    question: "What happens to my audio recordings?",
    answer:
      "Your audio is never stored on our servers and is never used to train AI models. Audio is processed in real-time for transcription only.",
  },
  {
    question: "What types of notes can I generate?",
    answer:
      "KasaMD supports multiple note formats including SOAP notes, HPI, progress notes, and custom templates. You can also create your own templates.",
  },
  {
    question: "Do I need to download anything?",
    answer:
      "No, KasaMD is a web-based application. Just sign up and start using it in your browser. No downloads required.",
  },
  {
    question: "Can I use KasaMD on my phone?",
    answer: "Yes! KasaMD works on desktop, tablet, and mobile devices.",
  },
  {
    question: "How accurate is the AI transcription?",
    answer:
      "Our AI transcription achieves high accuracy on clear audio. Accuracy depends on audio quality, background noise, and accents. You can always edit and refine notes after generation.",
  },
  {
    question: "Can I export my notes?",
    answer:
      "Yes, you can export notes to PDF format for sharing with colleagues or adding to patient records.",
  },
];

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-teal-500"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Professional medical documentation. Free.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Everything you need to streamline clinical documentation. No limits,
            no costs.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-xl bg-gray-50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-3 text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Table */}
      <section className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8" id="pricing">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What's included
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need, with no limits
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold font-gtsuper text-teal-600">
                    Kasa
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {kasaFeatures.map((item, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {item.feature}
                      </div>
                      <div className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {item.included && <CheckIcon />}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              All features included. No credit card required. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8" id="faq">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <dl className="mt-12 space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-8">
                <dt className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </dt>
                <dd className="mt-3 text-base text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-violet-50 via-teal-50/30 to-transparent px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to get started?
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="https://app.kasamd.com/signup"
              className="rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
            >
              Try Our Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
