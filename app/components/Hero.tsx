import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-bl from-yellow-50/50 via-transparent to-cyan-50/50" />
      {/* Mixed warm-cool gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50" />

      {/* Large gradient blobs - mixing warm and cool tones */}
      <div className="absolute -right-64 -bottom-64">
        <div className="h-[900px] w-[900px] rounded-full bg-gradient-to-br from-cyan-100/30 to-blue-100/30 blur-3xl" />
      </div>
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-purple-100/20 to-indigo-100/20 blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4">
        <div className="h-[800px] w-[800px] rounded-full bg-gradient-to-br from-orange-100/20 to-amber-100/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Pill Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
            <span className="text-sm font-medium text-emerald-900">
              Free AI Medical Documentation
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-center text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Clinical documentation. <br />
          Zero cost.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
          Speak naturally. Get structured notes instantly, for free — no credit
          card required.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.kasamd.com/signup"
            className="w-full rounded-lg bg-button px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-button-hover sm:w-auto"
          >
            Start Free Today
          </Link>
        </div>
      </div>
    </section>
  );
}
