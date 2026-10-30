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
    </article>
  );
}

export function WorkflowsByMoment() {
  return (
    <section
      id="services"
      className="scroll-mt-20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
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
                {workflows
                  .filter((workflow) => workflow.moment === moment.id)
                  .map((workflow) => (
                    <WorkflowCard key={workflow.slug} workflow={workflow} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
