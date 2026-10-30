import Link from "next/link";
import { CheckIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import { DownloadButton } from "@/components/DownloadButton";
import { notesForMac } from "@/content/tools";
import { moments, workflows, type Workflow } from "@/content/workflows";

function WorkflowCard({ workflow }: { workflow: Workflow }) {
  return (
    <article className="flex flex-col rounded-3xl border border-brand-900/10 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h4 className="text-xl font-semibold text-brand-900">
          {workflow.name}
        </h4>
      </div>
      <p className="mt-2 text-base text-muted">{workflow.summary}</p>
      <ul className="mt-6 space-y-2.5">
        {workflow.agentDoes.map((task) => (
          <li key={task} className="flex items-start gap-2 text-sm text-brand-900">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {task}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <p className="flex gap-2 rounded-2xl bg-brand-50 p-4 text-sm text-brand-900">
          <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
          <span>
            <span className="font-semibold">Your physician: </span>
            {workflow.physicianApproves}
          </span>
        </p>
      </div>
    </article>
  );
}

function NotesCard() {
  return (
    <article className="flex flex-col gap-6 rounded-3xl bg-brand-900 p-6 sm:col-span-2 sm:p-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-md">
        <div className="flex flex-wrap items-center gap-3">
          <h4 className="text-xl font-semibold text-white">
            {notesForMac.name}
          </h4>
          <span className="rounded-full bg-brand-600 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-white uppercase">
            Free &middot; Available now
          </span>
        </div>
        <p className="mt-2 text-base text-brand-200">{notesForMac.summary}</p>
        <Link
          href={notesForMac.href}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white underline-offset-4 hover:underline"
        >
          Learn more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <DownloadButton variant="light" />
    </article>
  );
}

export function WorkflowsByMoment() {
  return (
    <section
      id="back-office"
      className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="eyebrow">The back office</span>
          <h2 className="display mt-6 text-4xl sm:text-5xl">
            The work around the visit, taken on by agents.
          </h2>
          <p className="mt-4 text-lg text-muted">
            Six agents are in the works, one for each workflow. Each practice
            picks the workflows it wants first.
          </p>
        </div>

        <div className="mt-16 divide-y divide-brand-900/10 border-t border-brand-900/10">
          {moments.map((moment) => (
            <div
              key={moment.id}
              className="grid gap-8 py-12 lg:grid-cols-3 lg:gap-12"
            >
              <div>
                <p className="text-xs font-semibold tracking-wide text-brand-600 uppercase">
                  {moment.label}
                </p>
                <h3 className="display mt-3 text-3xl">{moment.title}</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
                {moment.id === "during" ? (
                  <NotesCard />
                ) : (
                  workflows
                    .filter((workflow) => workflow.moment === moment.id)
                    .map((workflow) => (
                      <WorkflowCard key={workflow.slug} workflow={workflow} />
                    ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
