import { workflows } from "@/content/workflows";

const inviteBody = [
  "Practice name:",
  "Number of clinicians:",
  "EHR:",
  `Which workflows (${workflows.map((w) => w.name).join(", ")}):`,
  "",
].join("\n");

export const GET_STARTED_HREF = "/#get-started";

export const INVITE_URL = `mailto:hello@kasamd.com?subject=${encodeURIComponent(
  "Invite request",
)}&body=${encodeURIComponent(inviteBody)}`;

type Variant = "dark" | "light";

const variants: Record<Variant, string> = {
  dark: "bg-brand-900 text-white shadow-lg shadow-brand-900/20 hover:bg-brand-950",
  light: "bg-white text-brand-900 shadow-lg shadow-black/10 hover:bg-brand-50",
};

export function RequestInviteButton({
  variant = "dark",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={INVITE_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      Request an invite
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
