import Image from "next/image";
import {
  HeartIcon,
  LockOpenIcon,
  SignalSlashIcon,
  ArrowPathIcon,
  GlobeAltIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { CtaSection } from "@/components/CtaSection";

const principles = [
  {
    icon: HeartIcon,
    title: "Physician-led",
    description:
      "Built by healthcare providers who understand clinical workflows and the realities of patient care.",
  },
  {
    icon: LockOpenIcon,
    title: "Open access",
    description:
      "No credit cards, no paywalls to get started. We believe in removing barriers to quality documentation tools.",
  },
  {
    icon: SignalSlashIcon,
    title: "Designed for accessibility",
    description:
      "Building with reliability and offline functionality in mind to serve providers in diverse settings.",
  },
  {
    icon: ArrowPathIcon,
    title: "End-to-end workflow",
    description:
      "From recording to finished note in one seamless flow. Transcription, editing, and export without switching tools.",
  },
  {
    icon: GlobeAltIcon,
    title: "Health equity",
    description:
      "Focused on expanding healthcare access through technology that serves underserved regions.",
  },
  {
    icon: SparklesIcon,
    title: "No compromises",
    description:
      "Professional-grade features from day one, not watered-down versions for limited markets.",
  },
];

const founder = {
  name: "Dr. Emmanuel Adomfeh, MD",
  role: "Founder & CEO",
  photo: "/images/emmanuel.jpg",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow">
            Physician-Led Offline Clinical Transcription
          </span>

          <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl">
            Accessible healthcare{" "}
            <span className="text-brand-600">technology</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Building an offline clinical transcription tool that works anywhere,
            for anyone, especially where connectivity is unreliable.
          </p>
        </div>
      </section>

      {/* Mission + Story */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-brand-900/10 bg-white p-8 sm:p-10">
            <h2 className="display text-3xl sm:text-4xl">
              Why we&apos;re building KasaMD
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                Most clinical transcription software assumes reliable internet,
                cloud processing, and well-funded healthcare systems. But
                that&apos;s not reality for millions of healthcare providers
                worldwide.
              </p>
              <p>
                KasaMD is physician-led and born from firsthand experience with
                the documentation burden. We built an offline clinical
                transcription tool that runs entirely on your Mac, so patient
                audio and notes never leave your device, and the app keeps
                working when the internet doesn&apos;t.
              </p>
              <p>
                Our goal is to expand access to quality clinical documentation
                in underserved regions, starting with areas where cost and
                connectivity are barriers to adopting existing solutions.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-gtsuper text-3xl tracking-tight text-white sm:text-4xl">
                Our story
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-200">
                <p>
                  In many parts of the world, clinics rely on paper records or
                  fragmented systems that don&apos;t fit local workflows. High
                  patient volumes, shared devices, and intermittent connectivity
                  make most existing documentation solutions impractical.
                </p>
                <p>
                  We&apos;re piloting KasaMD with physicians in West Africa to
                  build tools that work in real clinical environments. Their
                  feedback shapes everything we build, from offline-first
                  architecture to workflows designed for how care is actually
                  delivered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow bg-white">What guides us</span>
            <h2 className="display mt-6 text-4xl sm:text-5xl">
              Our principles
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="rounded-3xl border border-brand-900/10 bg-white p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-900">
                  <principle.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-brand-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-base text-muted">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The team</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            Who&apos;s building KasaMD
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            KasaMD is built by a small team passionate about health equity and
            accessible technology. We combine clinical expertise with technical
            innovation to create tools that genuinely serve healthcare
            providers.
          </p>

          <figure className="mx-auto mt-14 w-48">
            <div className="overflow-hidden rounded-2xl ring-1 ring-brand-900/10">
              <Image
                src={founder.photo}
                alt={`Portrait of ${founder.name}, ${founder.role} of KasaMD`}
                width={1080}
                height={1312}
                sizes="12rem"
                className="aspect-square h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-4">
              <p className="text-base font-semibold whitespace-nowrap text-brand-900">
                {founder.name}
              </p>
              <p className="text-sm text-muted">{founder.role}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="pt-4">
        <CtaSection
          title="Join us in making healthcare documentation accessible"
          description="Download KasaMD for free and tell us what to build next."
        />
      </div>
    </div>
  );
}
