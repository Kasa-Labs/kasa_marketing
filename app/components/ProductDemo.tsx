export function ProductDemo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-gray-600">
            An offline clinical transcription tool that runs entirely on your
            Mac.
          </p>
        </div>

        {/* Demo Video */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-6xl">
            {/* Subtle gradient glow behind the video */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/50 via-violet-100/50 to-teal-100/50 blur-2xl" />

            {/* Video container with shadow and border */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/ezI1gyJ7kvM"
                title="KasaMD demo — offline clinical transcription on your Mac"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
