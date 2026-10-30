import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { FreeToolsGrid } from "@/components/FreeToolsGrid";

export const metadata: Metadata = {
  title: "Free Clinical Tools",
  description:
    "Free clinical tools from KasaMD, starting with Notes for Mac: offline transcription and clinical notes. No account needed.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Clinical Tools | KasaMD",
    description:
      "Free clinical tools from KasaMD, starting with Notes for Mac. No account needed.",
    url: "https://kasamd.com/tools",
  },
};

export default function ToolsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl text-center">
          <span className="eyebrow">Free clinical tools</span>
          <h1 className="display mt-8 text-5xl leading-[1.05] sm:text-6xl">
            Tools for clinicians.{" "}
            <span className="text-brand-600">Free.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
            Download and use them today. No account, no sign-up, no credit
            card.
          </p>
        </div>
      </section>

      <section className="px-4 pt-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <FreeToolsGrid />
        </div>
      </section>

      <CtaSection
        title="Start with your next note."
        description="Download Notes for Mac and turn your next patient visit into a finished note, without an internet connection."
      />
    </>
  );
}
