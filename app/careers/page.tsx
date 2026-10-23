import {
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { CtaSection } from "@/components/CtaSection";

const values = [
  {
    icon: GlobeAltIcon,
    title: "Health Equity",
    description:
      "We build for the most underserved communities first, ensuring our technology works where it's needed most.",
  },
  {
    icon: HeartIcon,
    title: "Clinical Insight",
    description:
      "Being physician-led means we understand real clinical workflows and build tools that actually help.",
  },
  {
    icon: LightBulbIcon,
    title: "Thoughtful Innovation",
    description:
      "We solve hard problems like offline AI and resource constraints with creative technical solutions.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow">Join Our Mission</span>
          <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl">
            Build technology that expands{" "}
            <span className="text-brand-600">healthcare access</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Join our team in creating medical documentation tools that serve
            healthcare providers in underserved regions worldwide.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="display text-3xl sm:text-4xl">Open Positions</h2>
          <div className="mt-8 flex flex-col items-start gap-6 rounded-3xl border border-dashed border-brand-300 bg-brand-50 p-8 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-900 shadow-sm">
              <EnvelopeIcon className="h-6 w-6" />
            </div>
            <p className="text-base text-muted">
              We don&apos;t have any open positions right now. Reach out if our
              mission resonates. We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-center text-4xl sm:text-5xl">
            What We Value
          </h2>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-brand-900/10 bg-white p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-900">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-base text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-8">
        <CtaSection
          title="Don't see the right role?"
          description="We're always interested in connecting with people who share our mission. Reach out and tell us about yourself."
        >
          <a
            href="mailto:careers@kasamd.com"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-semibold text-brand-900 shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-brand-50"
          >
            <EnvelopeIcon className="h-5 w-5" />
            Get in Touch
          </a>
        </CtaSection>
      </div>
    </div>
  );
}
