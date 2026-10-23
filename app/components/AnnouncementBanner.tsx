import { DOWNLOAD_URL } from "@/components/DownloadButton";

export function AnnouncementBanner() {
  return (
    <div className="w-full bg-brand-900 px-4 py-2.5">
      <a
        href={DOWNLOAD_URL}
        className="group mx-auto flex max-w-7xl items-center justify-center gap-2 text-center text-sm text-brand-100"
      >
        <span className="rounded-full bg-brand-600 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-white uppercase">
          New
        </span>
        <span>KasaMD for Mac is here.</span>
        <span className="font-semibold text-white underline-offset-4 group-hover:underline">
          Download now
          <span
            aria-hidden="true"
            className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
          >
            &rarr;
          </span>
        </span>
      </a>
    </div>
  );
}
