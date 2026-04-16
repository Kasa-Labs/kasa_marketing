import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
              <span className="text-sm font-medium text-emerald-900">
                Physician-Led Offline Clinical Transcription
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accessible healthcare technology
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Building an offline clinical transcription tool that works anywhere,
            for anyone, especially where connectivity is unreliable.
          </p>
        </div>
      </section>

      {/* Mission/Story Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Why we're building KasaMD
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              Most clinical transcription software assumes reliable internet,
              cloud processing, and well-funded healthcare systems. But that's
              not reality for millions of healthcare providers worldwide.
            </p>
            <p>
              KasaMD is physician-led and born from firsthand experience with
              the documentation burden. We built an offline clinical
              transcription tool that runs entirely on your Mac — so patient
              audio and notes never leave your device, and the app keeps
              working when the internet doesn't.
            </p>
            <p>
              Our goal is to expand access to quality clinical documentation in
              underserved regions, starting with areas where cost and
              connectivity are barriers to adopting existing solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">Our story</h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              In many parts of the world, clinics rely on paper records or
              fragmented systems that don't fit local workflows. High patient
              volumes, shared devices, and intermittent connectivity make most
              existing documentation solutions impractical.
            </p>
            <p>
              We're piloting KasaMD with physicians in West Africa to build
              tools that work in real clinical environments. Their feedback
              shapes everything we build, from offline-first architecture to
              workflows designed for how care is actually delivered.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our principles
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Physician-led
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Built by healthcare providers who understand clinical workflows
                and the realities of patient care.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Open access
              </h3>
              <p className="mt-3 text-base text-gray-600">
                No credit cards, no paywalls to get started. We believe in
                removing barriers to quality documentation tools.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Designed for accessibility
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Building with reliability and offline functionality in mind to
                serve providers in diverse settings.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                End-to-end workflow
              </h3>
              <p className="mt-3 text-base text-gray-600">
                From recording to finished note in one seamless flow.
                Transcription, editing, and export without switching tools.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                Health equity
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Focused on expanding healthcare access through technology that
                serves underserved regions.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">
                No compromises
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Professional-grade features from day one, not watered-down
                versions for limited markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">The team</h2>
          <p className="mt-6 text-lg text-gray-600">
            KasaMD is physician-led and built by a small team passionate about
            health equity and accessible technology. We combine clinical
            expertise with technical innovation to create tools that genuinely
            serve healthcare providers.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-violet-50 via-teal-50/30 to-transparent px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Join us in making healthcare documentation accessible
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
            >
              Download
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
