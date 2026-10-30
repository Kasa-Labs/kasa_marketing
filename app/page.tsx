import Link from "next/link";
import { AgentSteps } from "@/components/AgentSteps";
import { CtaSection } from "@/components/CtaSection";
import { FreeToolsGrid } from "@/components/FreeToolsGrid";
import { HomeHero } from "@/components/HomeHero";
import { PatientPath } from "@/components/PatientPath";
import { RequestInviteButton } from "@/components/RequestInvite";
import { TrustSection } from "@/components/TrustSection";
import { WorkflowsByMoment } from "@/components/WorkflowsByMoment";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PatientPath />
      <WorkflowsByMoment />
      <AgentSteps />
      <TrustSection />

      <section
        id="free-tools"
        className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="eyebrow">Free clinical tools</span>
              <h2 className="display mt-6 text-4xl sm:text-5xl">
                Free tools for clinicians. No account needed.
              </h2>
            </div>
            <Link
              href="/tools"
              className="inline-flex shrink-0 items-center gap-1 rounded-full border border-brand-900/15 bg-white px-5 py-2.5 text-sm font-semibold text-brand-900 transition-colors hover:border-brand-900/30"
            >
              All free tools
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="mt-14">
            <FreeToolsGrid />
          </div>
        </div>
      </section>

      <CtaSection
        id="get-started"
        title="Hand the back office to agents."
        description="KasaMD is invite only. Tell us about your practice and the work you want off your plate."
      >
        <RequestInviteButton variant="light" />
        <Link
          href="/tools"
          className="inline-flex items-center gap-1 rounded-2xl px-5 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
        >
          Free clinical tools
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </CtaSection>
    </>
  );
}
