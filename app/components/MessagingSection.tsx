import { PaperClipIcon } from "@heroicons/react/24/outline";

const thread = [
  {
    from: "patient",
    time: "11:04 PM",
    text: "My cough is worse tonight and my inhaler is almost empty. Can I get in tomorrow?",
  },
  {
    from: "agent",
    time: "11:04 PM",
    text: "Sorry you're feeling worse. Are you short of breath right now?",
  },
  { from: "patient", time: "11:05 PM", text: "No, just the cough." },
  {
    from: "agent",
    time: "11:05 PM",
    text: "You're booked for 9:20 tomorrow morning, and I've sent a short intake form. Your refill request is with the doctor.",
  },
] as const;

function PatientChat() {
  return (
    <div
      className="overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-black/30"
      aria-label="Illustrative patient conversation"
    >
      <div className="flex items-center gap-3 border-b border-brand-900/10 bg-brand-50 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-semibold text-white">
          K
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-brand-900">Your care team</p>
          <p className="text-xs text-muted">Replies any hour</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-[#f1efe9] px-3 py-4">
        {thread.map((message) => (
          <div
            key={message.text}
            className={`max-w-[85%] rounded-2xl px-3 pt-2 pb-1.5 text-sm leading-snug text-brand-900 shadow-sm ${
              message.from === "patient"
                ? "self-end rounded-br-md bg-[#d9fdd3]"
                : "self-start rounded-bl-md bg-white"
            }`}
          >
            <p>{message.text}</p>
            <p className="mt-0.5 text-right text-[10px] text-muted">
              {message.time}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-brand-50 px-3 py-2.5">
        <PaperClipIcon className="h-5 w-5 text-brand-900" />
        <span className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-muted">
          Message your care team
        </span>
      </div>
    </div>
  );
}

export function MessagingSection() {
  return (
    <section className="bg-brand-50 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <span className="eyebrow bg-white">Patient messaging</span>
          <h2 className="display mt-6 text-4xl sm:text-6xl">
            Your patients message at 11pm.
            <span className="block text-brand-600">They get an answer.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Questions answered and visits booked at any hour. Anything urgent
            goes straight to your physician.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm">
          <PatientChat />
        </div>
      </div>
    </section>
  );
}
