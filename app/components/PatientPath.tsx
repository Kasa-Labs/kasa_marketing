import { ShieldCheckIcon } from "@heroicons/react/20/solid";
import { moments, type Moment } from "@/content/workflows";

const steps: {
  time: string;
  moment: Moment;
  agent: string;
  text: string;
  physician?: string;
}[] = [
  {
    time: "11:04 PM",
    moment: "before",
    agent: "Patient messaging",
    text: "A patient texts that her cough is worse and her inhaler is almost out. The agent asks the routine questions, books a same-day visit and logs the refill request.",
    physician: "Anything urgent goes straight to the physician.",
  },
  {
    time: "7:30 AM",
    moment: "before",
    agent: "Scheduling and billing",
    text: "Her intake form and insurance card come in overnight, and eligibility is checked before she arrives.",
  },
  {
    time: "9:20 AM",
    moment: "during",
    agent: "Notes for Mac",
    text: "The visit is transcribed on the physician's Mac and drafted into a note.",
    physician: "The physician reviews and signs the note.",
  },
  {
    time: "10:05 AM",
    moment: "after",
    agent: "Prior authorization",
    text: "Her new inhaler needs a prior auth. The agent drafts it from the note and chart.",
    physician:
      "The physician signs, then the agent submits it and tracks the payer's answer.",
  },
  {
    time: "Later",
    moment: "paid",
    agent: "Billing",
    text: "A clean claim is built from the signed note, submitted and followed until it's paid.",
  },
];

const momentLabel = Object.fromEntries(
  moments.map((m) => [m.id, m.label]),
) as Record<Moment, string>;

export function PatientPath() {
  return (
    <section className="bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="eyebrow bg-white">One patient, start to finish</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            From the first message to the paid claim.
          </h2>
          <p className="mt-4 text-lg text-muted">
            One set of agents carries each patient through the day. Wherever
            the work is clinical, it stops for your physician.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 lg:grid-cols-5">
          {steps.map((step) => (
            <li
              key={step.time}
              className="flex flex-col rounded-3xl border border-brand-900/10 bg-white p-6"
            >
              <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                {momentLabel[step.moment]}
              </p>
              <p className="mt-3 font-gtsuper text-2xl text-brand-900">
                {step.time}
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-900">
                {step.agent}
              </p>
              <p className="mt-3 text-sm text-muted">{step.text}</p>
              {step.physician && (
                <p className="mt-auto flex gap-2 pt-5 text-sm font-medium text-brand-900">
                  <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {step.physician}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
