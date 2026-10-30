import { DownloadButton } from "@/components/DownloadButton";

export function CtaSection({
  id,
  title = "Spend less time charting.",
  description = "Download KasaMD and turn your next patient visit into a finished note, without an internet connection.",
  children,
}: {
  id?: string;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-900 px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* Soft brand glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="font-gtsuper text-4xl tracking-tight text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg text-brand-200">{description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {children ?? <DownloadButton variant="light" />}
          </div>
        </div>
      </div>
    </section>
  );
}
