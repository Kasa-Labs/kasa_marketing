import Link from "next/link";
import { RequestInviteButton } from "@/components/RequestInvite";

const thread = [
  {
    from: "patient",
    text: "My cough is worse tonight and my inhaler is almost empty. Can I get in tomorrow?",
  },
  {
    from: "agent",
    text: "Sorry you're feeling worse. Are you short of breath right now?",
  },
  { from: "patient", text: "No, just the cough." },
  {
    from: "agent",
    text: "You're booked for 9:20 tomorrow morning, and I've sent a short intake form. Your refill request is with the doctor.",
  },
] as const;

function TextThread() {
  return (
    <div className="flex flex-col gap-2.5" aria-label="Illustrative text conversation">
      <p className="mb-1 text-center text-[11px] font-medium tracking-wide text-brand-200 uppercase">
        Text message &middot; 11:04 PM
      </p>
      {thread.map((message) => (
        <p
          key={message.text}
          className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
            message.from === "patient"
              ? "self-end rounded-br-md bg-brand-500 text-white"
              : "self-start rounded-bl-md bg-white text-brand-900"
          }`}
        >
          {message.text}
        </p>
      ))}
      <p className="mt-1 text-[11px] text-brand-200">
        Illustrative conversation with a KasaMD agent
      </p>
    </div>
  );
}

function ArrowDisc({ dark = false }: { dark?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg transition-transform group-hover:translate-x-0.5 ${
        dark ? "bg-brand-900 text-white" : "bg-white text-brand-900"
      }`}
    >
      &rarr;
    </span>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-16 sm:px-6 sm:pt-28 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          Physician-led &middot; Invite only
        </span>
        <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          The back office for independent practices,{" "}
          <span className="text-brand-600">run by agents.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Patients get answers at 11pm, refills and prior auths wait ready to
          sign, and claims get paid. Your physician makes every clinical call.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <RequestInviteButton />
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 rounded-2xl px-5 py-4 text-base font-semibold text-brand-900 transition-colors hover:bg-brand-100/60"
          >
            Free clinical tools
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-6xl gap-4 lg:grid-cols-2">
        <Link
          href="#back-office"
          className="group flex flex-col justify-between gap-10 rounded-3xl bg-brand-900 p-6 sm:p-8"
        >
          <div className="mx-auto w-full max-w-sm">
            <TextThread />
          </div>
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wide text-brand-200 uppercase">
                Invite only
              </span>
              <h2 className="mt-2 font-gtsuper text-4xl tracking-tight text-white sm:text-5xl">
                The back office
              </h2>
              <p className="mt-2 text-base text-brand-200">
                Agents for messaging, scheduling, refills, prior auth,
                referrals and billing.
              </p>
            </div>
            <ArrowDisc />
          </div>
        </Link>

        <Link
          href="/tools"
          className="group flex flex-col justify-between gap-10 rounded-3xl bg-brand-100 p-6 sm:p-8"
        >
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-brand-900/10 bg-white p-5 shadow-xl shadow-brand-900/10">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-auto rounded-full bg-brand-50 px-2 py-0.5 text-[11px] font-medium text-brand-900">
                Wi-Fi off
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {["Subjective", "Objective", "Assessment", "Plan"].map(
                (label, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-xs font-semibold text-brand-900">
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
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                Free &middot; No account needed
              </span>
              <h2 className="display mt-2 text-4xl sm:text-5xl">
                Free clinical tools
              </h2>
              <p className="mt-2 text-base text-muted">
                Notes for Mac turns the visit into a clinical note. Audio never
                leaves your Mac.
              </p>
            </div>
            <ArrowDisc dark />
          </div>
        </Link>
      </div>
    </section>
  );
}
