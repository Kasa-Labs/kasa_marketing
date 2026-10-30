import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import { tools, type FreeTool } from "@/content/tools";

function ToolCard({ tool }: { tool: FreeTool }) {
  return (
    <Link
      href={tool.href}
      className="group flex flex-col rounded-3xl border border-brand-900/10 bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-900/5"
    >
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
        <span className="rounded-full bg-brand-600 px-2.5 py-0.5 tracking-wide text-white uppercase">
          Free
        </span>
        <span className="text-muted">{tool.platform}</span>
      </div>
      <h3 className="display mt-6 text-3xl">{tool.name}</h3>
      <p className="mt-3 text-base text-muted">{tool.summary}</p>
      <ul className="mt-6 space-y-2">
        {tool.capabilities.map((capability) => (
          <li
            key={capability.name}
            className="flex items-start gap-2 text-sm text-brand-900"
          >
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
            {capability.name}
          </li>
        ))}
      </ul>
      <span className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-brand-900">
        Learn more
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </span>
    </Link>
  );
}

export function FreeToolsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}
