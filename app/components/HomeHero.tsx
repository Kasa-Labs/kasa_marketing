import Link from "next/link";
import { GET_STARTED_HREF } from "@/components/RequestInvite";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white px-4 pt-20 pb-20 sm:px-6 sm:pt-28 sm:pb-28 lg:px-8">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className="eyebrow">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
          Physician-led
        </span>
        <h1 className="display mt-8 text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl">
          Practice medicine.
          <span className="block text-brand-600">We&apos;ll handle the rest.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
          Patients get answers at 11pm, refills and prior auths wait ready to
          sign, and claims get paid. Your physician makes every clinical call.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={GET_STARTED_HREF}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-900 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-brand-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-950"
          >
            Get started
            <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center gap-1 rounded-2xl px-5 py-4 text-base font-semibold text-brand-900 transition-colors hover:bg-brand-100/60"
          >
            Free clinical tools
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
