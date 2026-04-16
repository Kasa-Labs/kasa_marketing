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
          Transcribe patient visits and generate clinical notes right from
          your Mac. No internet needed.
        </p>

        {/* Download CTA */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <a
            href="https://downloads.kasamd.com/public/KasaMD-0.1.dmg"
            className="inline-flex items-center gap-3 rounded-xl bg-gray-900 px-7 py-3.5 text-white shadow-lg transition-all hover:bg-black hover:shadow-xl"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 814 1000"
              fill="currentColor"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.8-105.2-209.9-105.2-331.4 0-194.8 126.6-298.2 251.2-298.2 66.2 0 121.3 43.4 162.8 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.7 15.6 1.3 18.2 2.6.5 6.4.6 10.2.6 45.9 0 104-30.3 139.5-70.7z" />
            </svg>
            <div className="flex flex-col">
              <span className="text-base font-semibold leading-tight">
                Download for Mac
              </span>
              <span className="text-xs text-gray-400">
                Apple Silicon (M1 or later)
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
