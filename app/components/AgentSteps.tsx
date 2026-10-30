import {
  LinkIcon,
  SparklesIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: LinkIcon,
    title: "Connect your systems",
    description:
      "Give the agents access to the EHR, phone line, fax and payer portals your practice already uses.",
  },
  {
    icon: SparklesIcon,
    title: "Agents take on the work",
    description:
      "Each workflow has its own agent. They answer, book, draft, file, submit and follow up, day and night.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Your physician approves",
    description:
      "Refills, prior auths and urgent messages wait for your physician's sign-off. Every agent action is logged.",
  },
];

export function AgentSteps() {
  return (
    <section className="bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow bg-white">How it works</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            Agents do the work. You make the calls.
          </h2>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
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
