import Image from "next/image";

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
        {/* Main Headline */}
        <h1 className="text-center text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Offline Clinical Transcription. For Free.
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-8 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
          Clinical documentation and decision support for clinicians who don't
          have stable internet. Transcribe visits and generate notes, offline
          for free.
        </p>

        {/* Download CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <a
            href="https://downloads.kasamd.com/public/KasaMD-0.1.dmg"
            className="flex items-center gap-4 rounded-2xl bg-white/80 px-8 py-4 shadow-lg backdrop-blur transition-all hover:shadow-xl hover:bg-white"
          >
            <Image
              src="/images/app_logo.png"
              alt="KasaMD app icon"
              width={56}
              height={56}
              className="rounded-xl"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900">
                Download for Mac
              </span>
              <span className="text-sm text-gray-500">
                Requires Apple Silicon (M1 or later)
              </span>
            </div>
          </a>
          <p className="text-xs text-gray-400">
            macOS app &middot; Free &middot; No internet required
          </p>
        </div>
      </div>
    </section>
  );
}
