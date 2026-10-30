import {
  ClipboardDocumentListIcon,
  CpuChipIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const points = [
  {
    icon: UserIcon,
    title: "Your physician approves",
    description:
      "Agents prepare the clinical work. Only your physician signs refills, prior auths and anything urgent.",
  },
  {
    icon: ClipboardDocumentListIcon,
    title: "Every action is logged",
    description:
      "Each message, booking, submission and follow-up is recorded with what the agent did, so you can audit it any time.",
  },
  {
    icon: CpuChipIcon,
    title: "Agents, not outsourced staff",
    description:
      "KasaMD has no back-office staff working in your records. The only people in the loop are your own.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-brand-900 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-brand-100 uppercase">
            Trust
          </span>
          <h2 className="mt-6 font-gtsuper text-4xl tracking-tight text-white sm:text-5xl">
            You make the clinical decisions.
          </h2>
          <p className="mt-6 text-lg text-brand-200">
            Agents handle the volume. Anything clinical waits for the physician
            who knows the patient.
          </p>
        </div>

        <ul className="grid gap-4 lg:col-span-3">
          {points.map((point) => (
            <li
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-brand-100">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {point.title}
              </h3>
              <p className="mt-1 text-base text-brand-200">
                {point.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
