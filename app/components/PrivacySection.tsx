import {
  ComputerDesktopIcon,
  ShieldCheckIcon,
  SignalSlashIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    icon: ComputerDesktopIcon,
    title: "Runs entirely on your Mac",
    description:
      "Transcription and note generation happen locally. Audio, transcripts, and notes stay on your device.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Nothing sent to our servers",
    description:
      "There is no cloud processing step, so there is no patient data for us to store, share, or lose.",
  },
  {
    icon: SignalSlashIcon,
    title: "Works when the internet doesn't",
    description:
      "Clinic, home visits, or low-connectivity environments: KasaMD keeps working anywhere.",
  },
];

export function PrivacySection() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Private by design</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            Your patients&apos; data never leaves the room.
          </h2>
          <p className="mt-6 text-lg text-muted">
            Most transcription tools stream audio to the cloud. KasaMD was built
            offline-first, so privacy isn&apos;t a setting. It&apos;s how the
            app works.
          </p>
        </div>

        <ul className="space-y-4">
          {points.map((point) => (
            <li
              key={point.title}
              className="flex gap-5 rounded-2xl border border-brand-900/10 bg-white p-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-900 text-brand-100">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-900">
                  {point.title}
                </h3>
                <p className="mt-1 text-base text-muted">{point.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
