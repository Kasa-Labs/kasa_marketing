import Image from "next/image";

export function ProductDemo() {
  return (
    <section className="relative overflow-x-clip px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl">
        {/* Brand glow behind the window */}
        <div className="pointer-events-none absolute -inset-x-8 top-10 bottom-0 rounded-[3rem] bg-gradient-to-r from-brand-200/60 via-brand-100/60 to-brand-200/60 blur-3xl" />

        {/* Mac-style window frame */}
        <div className="relative overflow-hidden rounded-2xl border border-brand-900/10 bg-white p-1.5 shadow-2xl shadow-brand-900/20 ring-1 ring-brand-900/5 sm:rounded-3xl sm:p-2">
          <div className="flex items-center gap-1.5 px-3 py-2 sm:py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 hidden text-xs text-muted sm:inline">
              KasaMD &mdash; Follow-up Type 2 Diabetes
            </span>
          </div>
          <div className="overflow-hidden rounded-xl border border-brand-900/5 sm:rounded-2xl">
            <Image
              src="/images/kasamd.jpg"
              alt="KasaMD application interface showing a SOAP note generated from a patient visit, with a medication reference panel"
              width={3016}
              height={1654}
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
