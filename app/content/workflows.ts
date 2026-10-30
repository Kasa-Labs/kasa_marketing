export type Moment = "before" | "after" | "paid";

export type Workflow = {
  slug: string;
  name: string;
  moment: Moment;
  summary: string;
};

export const moments: { id: Moment; label: string; title: string }[] = [
  {
    id: "before",
    label: "Before the visit",
    title: "Every message answered. Every slot filled.",
  },
  {
    id: "after",
    label: "After the visit",
    title: "The paperwork every visit leaves behind.",
  },
  {
    id: "paid",
    label: "Getting paid",
    title: "Paid for the work you already did.",
  },
];

export const workflows: Workflow[] = [
  {
    slug: "patient-messaging",
    name: "Patient messaging",
    moment: "before",
    summary:
      "After-hours texts, calls and portal messages, answered at any hour.",
  },
  {
    slug: "scheduling",
    name: "Scheduling & appointments",
    moment: "before",
    summary: "Booking, reminders and recall that keep the schedule full.",
  },
  {
    slug: "refills",
    name: "Prescription refills",
    moment: "after",
    summary:
      "Refill requests checked against your protocol and ready for one-tap sign-off.",
  },
  {
    slug: "prior-authorization",
    name: "Prior authorization",
    moment: "after",
    summary:
      "Prior auths drafted from the note and chart, then tracked to a decision.",
  },
  {
    slug: "referrals-fax",
    name: "Referrals & fax inbox",
    moment: "after",
    summary:
      "Referrals tracked until the consult note comes back, and every fax read and routed.",
  },
  {
    slug: "billing",
    name: "Billing",
    moment: "paid",
    summary:
      "Eligibility before the visit, clean claims after it, and follow-up until paid.",
  },
];
