import {
  MicrophoneIcon,
  CpuChipIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: MicrophoneIcon,
    title: "Record the visit",
    description:
      "Start a session and talk with your patient as you normally would. KasaMD listens in the background.",
  },
  {
    icon: CpuChipIcon,
    title: "Transcribe on-device",
    description:
      "Speech is converted to text by AI models running locally on your Mac. Nothing is uploaded.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Get a finished note",
    description:
      "Pick a SOAP, HPI or custom template, review the generated note, then copy or export to PDF.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8" id="how-it-works">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            From conversation to chart in three steps
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
          {/* Connector line on desktop */}
          <div className="pointer-events-none absolute top-10 right-[16%] left-[16%] hidden border-t border-dashed border-brand-300 md:block" />

          {steps.map((step, idx) => (
            <li
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-brand-900/10 bg-white shadow-sm">
                <step.icon className="h-8 w-8 text-brand-900" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
                  {idx + 1}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 max-w-xs text-base text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
