import {
  SignalSlashIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  PencilSquareIcon,
  RectangleStackIcon,
  CheckIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { CtaSection } from "@/components/CtaSection";
import { DownloadButton } from "@/components/DownloadButton";

const features = [
  {
    name: "Offline AI Transcription",
    description:
      "Convert speech to text with high accuracy using on-device AI models. No internet connection required.",
    icon: SignalSlashIcon,
  },
  {
    name: "Clinical Documentation",
    description:
      "Generate comprehensive, professional clinical notes from your patient conversations in seconds.",
    icon: DocumentTextIcon,
  },
  {
    name: "Patient Management",
    description:
      "Efficiently organize and access patient information with an intuitive interface.",
    icon: UserGroupIcon,
  },
  {
    name: "Session Management",
    description:
      "Track and organize each transcription session seamlessly with automatic saving.",
    icon: ClockIcon,
  },
  {
    name: "Advanced Text Editor",
    description:
      "Medical text editor with rich formatting and templates, built for clinical workflows.",
    icon: PencilSquareIcon,
  },
  {
    name: "Unlimited Templates",
    description:
      "Access all note templates including SOAP, HPI, and specialty formats with no restrictions.",
    icon: RectangleStackIcon,
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
    feature: "Fully Offline",
    included: true,
    description:
      "Transcription and note generation run entirely on your Mac. No internet required.",
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
    question: "How is my data handled?",
    answer:
      "KasaMD runs entirely on your Mac. Audio, transcripts, and notes stay on your device. Nothing is sent to our servers.",
  },
  {
    question: "What types of notes can I generate?",
    answer:
      "KasaMD supports multiple note formats including SOAP notes, HPI, progress notes, and custom templates. You can also create your own templates.",
  },
  {
    question: "Do I need to download anything?",
    answer:
      "Yes. KasaMD is a native macOS app. Download the .dmg, drag it to Applications, and you're ready to go. No account or sign-up required.",
  },
  {
    question: "Does KasaMD need an internet connection?",
    answer:
      "No. KasaMD is fully offline. Transcription and note generation run locally on your Mac, so it works anywhere: clinic, home visits, or low-connectivity environments.",
  },
  {
    question: "What devices does KasaMD support?",
    answer:
      "KasaMD runs on Macs with Apple Silicon (M1 or later) and macOS 14 Sonoma or later. Support for other platforms is on our roadmap.",
  },
  {
    question: "How accurate is the AI transcription?",
    answer:
      "Our on-device transcription achieves high accuracy on clear audio. Accuracy depends on audio quality, background noise, and accents. You can always edit and refine notes after generation.",
  },
  {
    question: "Can I export my notes?",
    answer:
      "Yes, you can export notes to PDF format for sharing with colleagues or adding to patient records.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow">Features</span>
          <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl">
            Offline clinical transcription.{" "}
            <span className="text-brand-600">Free.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Everything you need to transcribe patient visits and generate
            clinical notes, running entirely on your Mac.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group rounded-3xl border border-brand-900/10 bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-900 transition-colors group-hover:bg-brand-900 group-hover:text-brand-100">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-brand-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section
        className="scroll-mt-20 bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        id="pricing"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow bg-white">Pricing</span>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              What&apos;s included
            </h2>
            <p className="mt-4 text-lg text-muted">
              Everything you need, with no limits
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-brand-900/10 bg-white shadow-xl shadow-brand-900/5 lg:grid lg:grid-cols-5">
            {/* Plan summary */}
            <div className="relative overflow-hidden bg-brand-900 p-8 sm:p-10 lg:col-span-2">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="relative">
                <img
                  src="/kasamd_green.png"
                  alt="KasaMD"
                  className="h-7 brightness-0 invert"
                />
                <p className="mt-8 flex items-baseline gap-2">
                  <span className="font-gtsuper text-6xl text-white">$0</span>
                  <span className="text-brand-200">everything included</span>
                </p>
                <p className="mt-4 text-base text-brand-200">
                  All features included. No credit card required. No hidden
                  fees.
                </p>
                <div className="mt-8">
                  <DownloadButton variant="light" />
                </div>
              </div>
            </div>

            {/* Included list */}
            <ul className="grid gap-x-8 gap-y-6 p-8 sm:grid-cols-2 sm:p-10 lg:col-span-3">
              {kasaFeatures.map((item) => (
                <li key={item.feature} className="flex gap-3">
                  {item.included && (
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100">
                      <CheckIcon
                        className="h-4 w-4 text-brand-600"
                        strokeWidth={2.5}
                      />
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-semibold text-brand-900">
                      {item.feature}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
        id="faq"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div>
            <span className="eyebrow">FAQ</span>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-muted">
              Can&apos;t find what you&apos;re looking for?{" "}
              <a
                href="mailto:hello@kasamd.com"
                className="font-semibold text-brand-900 underline decoration-brand-300 underline-offset-4 hover:decoration-brand-900"
              >
                Email us
              </a>
              .
            </p>
          </div>

          <div className="divide-y divide-brand-900/10 border-y border-brand-900/10 lg:col-span-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-lg font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-900 transition-transform duration-200 group-open:rotate-45 group-open:bg-brand-900 group-open:text-white">
                    <PlusIcon className="h-4 w-4" strokeWidth={2} />
                  </span>
                </summary>
                <p className="pr-14 pb-4 text-base leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to get started?" />
    </div>
  );
}
