import Link from "next/link";
import {
  SignalSlashIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClockIcon,
  PencilSquareIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

const smallFeatures = [
  {
    name: "Patient Management",
    description: "Efficiently organize and access patient information.",
    icon: UserGroupIcon,
  },
  {
    name: "Session Management",
    description: "Track and organize each transcription session seamlessly.",
    icon: ClockIcon,
  },
  {
    name: "Text Editor",
    description:
      "Advanced medical text editor with rich formatting and templates.",
    icon: PencilSquareIcon,
  },
];

const templates = ["SOAP Note", "HPI", "Progress Note", "Specialty", "Custom"];

function FeatureIcon({
  icon: Icon,
  dark = false,
}: {
  icon: React.ElementType;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-xl ${
        dark ? "bg-white/10 text-brand-100" : "bg-brand-100 text-brand-900"
      }`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}

function Waveform() {
  const bars = [
    6, 14, 22, 12, 30, 18, 38, 24, 44, 28, 36, 16, 26, 40, 20, 32, 12, 24, 34,
    18, 28, 10, 22, 14, 30, 20, 8, 16,
  ];
  return (
    <div className="flex h-12 items-center gap-1">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-1.5 rounded-full bg-brand-500"
          style={{ height: h, opacity: 0.45 + (i % 4) * 0.15 }}
        />
      ))}
    </div>
  );
}

export function FeaturesOverview() {
  return (
    <section className="bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow bg-white">Features</span>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              Everything you need.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Professional-grade features designed to streamline your clinical
              workflow.
            </p>
          </div>
          <Link
            href="/features"
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-900/30"
          >
            View all features
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Offline AI transcription */}
          <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 lg:col-span-2">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="relative">
              <FeatureIcon icon={SignalSlashIcon} dark />
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Offline AI Transcription
              </h3>
              <p className="mt-2 max-w-md text-base text-brand-200">
                Convert speech to text with high accuracy, fully on-device. No
                internet needed.
              </p>
              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-row sm:items-center">
                <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-brand-600 sm:self-auto px-3 py-1.5 text-xs font-semibold text-white">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
                  Recording &middot; 02:12
                </span>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <Waveform />
                </div>
                <span className="text-xs font-medium text-brand-200">
                  Wi-Fi off
                </span>
              </div>
            </div>
          </div>

          {/* Clinical documentation */}
          <div className="rounded-3xl border border-brand-900/10 bg-white p-8">
            <FeatureIcon icon={DocumentTextIcon} />
            <h3 className="mt-6 text-xl font-semibold text-brand-900">
              Clinical Documentation
            </h3>
            <p className="mt-2 text-base text-muted">
              Generate comprehensive clinical notes from your conversations.
            </p>
            <div className="mt-6 space-y-3 rounded-2xl bg-brand-50 p-4">
              {["Subjective", "Objective", "Assessment", "Plan"].map(
                (label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-white text-xs font-semibold text-brand-900 shadow-sm">
                      {label[0]}
                    </span>
                    <span
                      className="h-2 rounded-full bg-brand-300"
                      style={{ width: `${[80, 60, 70, 50][i]}%` }}
                    />
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Small features */}
          {smallFeatures.map((feature) => (
            <div
              key={feature.name}
              className="rounded-3xl border border-brand-900/10 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-brand-900/5"
            >
              <FeatureIcon icon={feature.icon} />
              <h3 className="mt-6 text-xl font-semibold text-brand-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-muted">{feature.description}</p>
            </div>
          ))}

          {/* Templates */}
          <div className="flex flex-col gap-8 rounded-3xl border border-brand-900/10 bg-white p-8 lg:col-span-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <FeatureIcon icon={RectangleStackIcon} />
              <h3 className="mt-6 text-xl font-semibold text-brand-900">
                Unlimited Templates
              </h3>
              <p className="mt-2 text-base text-muted">
                Access all SOAP, HPI, and specialty note templates with no
                restrictions.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:max-w-md lg:justify-end">
              {templates.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-medium text-brand-900"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
