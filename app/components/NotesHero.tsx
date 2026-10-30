import Link from "next/link";
import {
  CheckCircleIcon,
  SignalSlashIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { DownloadButton } from "@/components/DownloadButton";

const highlights = [
  { icon: SignalSlashIcon, label: "Works fully offline" },
  { icon: LockClosedIcon, label: "Audio never leaves your Mac" },
  { icon: CheckCircleIcon, label: "Free, no account needed" },
];

export function NotesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-16 sm:px-6 sm:pt-28 lg:px-8">
      {/* Background grid + glow */}
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          Free clinical tool &middot; Made for Mac
        </span>

        {/* Main Headline */}
        <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Offline clinical transcription.{" "}
          <span className="text-brand-600">For free.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Notes for Mac transcribes patient visits and generates clinical notes
          right on your Mac. No internet needed.
        </p>

        {/* Download CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <DownloadButton />
          <Link
            href="#capabilities"
            className="inline-flex items-center gap-1 rounded-2xl px-5 py-4 text-base font-semibold text-brand-900 transition-colors hover:bg-brand-100/60"
          >
            See what it does
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted">
          {highlights.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-brand-600" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
