export type Moment = "before" | "during" | "after" | "paid";

export type Workflow = {
  slug: string;
  name: string;
  moment: Moment;
  summary: string;
  agentDoes: string[];
  physicianApproves: string;
};

export const moments: { id: Moment; label: string; title: string }[] = [
  {
    id: "before",
    label: "Before the visit",
    title: "Every message answered. Every slot filled.",
  },
  {
    id: "during",
    label: "During the visit",
    title: "The note, written on your Mac.",
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
    agentDoes: [
      "Answers routine questions by text, phone and portal",
      "Books visits right in the conversation",
      "Routes urgent issues straight to the physician",
      "Keeps a log of every conversation",
    ],
    physicianApproves:
      "Urgent issues and clinical questions go to your physician.",
  },
  {
    slug: "scheduling",
    name: "Scheduling & appointments",
    moment: "before",
    summary: "Booking, reminders and recall that keep the schedule full.",
    agentDoes: [
      "Books visits and sends reminders",
      "Fills same-day sick slots",
      "Runs wellness and chronic-care recall",
      "Collects intake forms and captures insurance cards before the visit",
    ],
    physicianApproves:
      "Your physician sets the scheduling rules. The agent books within them.",
  },
  {
    slug: "refills",
    name: "Prescription refills",
    moment: "after",
    summary:
      "Refill requests checked against your protocol and ready for one-tap sign-off.",
    agentDoes: [
      "Takes requests from patients, pharmacies and the portal",
      "Checks each one against your refill protocol (last visit, labs due, controlled-substance rules)",
      "Queues approved refills for one-tap sign-off",
      "Books a visit for patients who are overdue",
    ],
    physicianApproves:
      "Every refill. The agent prepares it and your physician signs with one tap.",
  },
  {
    slug: "prior-authorization",
    name: "Prior authorization",
    moment: "after",
    summary:
      "Prior auths drafted from the note and chart, then tracked to a decision.",
    agentDoes: [
      "Drafts the request from the visit note and chart",
      "Submits it once your physician signs",
      "Tracks payer responses and follows up",
    ],
    physicianApproves: "Signs each request before it goes to the payer.",
  },
  {
    slug: "referrals-fax",
    name: "Referrals & fax inbox",
    moment: "after",
    summary:
      "Referrals tracked until the consult note comes back, and every fax read and routed.",
    agentDoes: [
      "Packages the note and records for each outgoing referral",
      "Sends it and tracks it until the patient is seen and the consult note returns",
      "Reads incoming faxes and files each one to the chart",
      "Hands each fax to the agent that owns it, so pharmacy requests go to refills and payer replies to prior auth",
    ],
    physicianApproves:
      "Your physician orders each referral. Letters and results that need a clinical read land in their queue.",
  },
  {
    slug: "billing",
    name: "Billing",
    moment: "paid",
    summary:
      "Eligibility before the visit, clean claims after it, and follow-up until paid.",
    agentDoes: [
      "Checks eligibility before the visit",
      "Builds clean claims from the signed note",
      "Follows up on open claims and works denials",
      "Collects patient payments",
    ],
    physicianApproves: "Claims go out only from notes your physician has signed.",
  },
];
