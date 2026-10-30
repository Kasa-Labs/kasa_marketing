import Image from "next/image";
import Link from "next/link";
import { CheckIcon } from "@heroicons/react/20/solid";
import { DownloadButton } from "@/components/DownloadButton";
import { notesForMac } from "@/content/tools";

export function NotesDownload({ full = false }: { full?: boolean }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-brand-900/10 bg-white p-1.5 shadow-2xl shadow-brand-900/15 ring-1 ring-brand-900/5">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="overflow-hidden rounded-xl border border-brand-900/5">
          <Image
            src="/images/kasamd.jpg"
            alt="Notes for Mac showing a SOAP note generated from a patient visit"
            width={3016}
            height={1654}
            sizes={full ? "(min-width: 1152px) 1152px, 100vw" : "(min-width: 1024px) 576px, 100vw"}
            className="w-full"
          />
        </div>
      </div>
      <h3 className="display mt-8 text-3xl">{notesForMac.name}</h3>
      <p className="mt-3 text-base text-muted">{notesForMac.summary}</p>
      {full && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {notesForMac.capabilities.map((capability) => (
            <li
              key={capability.name}
              className="flex items-start gap-2 text-sm text-brand-900"
            >
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {capability.name}
            </li>
          ))}
        </ul>
      )}
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <DownloadButton />
        <Link
          href={notesForMac.href}
          className="inline-flex items-center gap-1 px-2 text-sm font-semibold text-brand-900 underline-offset-4 hover:underline"
        >
          Learn more <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
