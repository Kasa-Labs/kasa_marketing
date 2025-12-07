import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50" />

        <div className="relative mx-auto max-w-4xl text-center">
          {/* Pill Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
              <span className="text-sm font-medium text-emerald-900">
                Physician-Led Medical Documentation
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Accessible healthcare technology
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Building medical documentation tools that work anywhere, for anyone,
            starting in Ghana and expanding to underserved regions worldwide.
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
              Most medical documentation software assumes reliable internet,
              expensive hardware, and well-funded healthcare systems. But that's
              not reality for millions of healthcare providers worldwide.
            </p>
            <p>
              KasaMD is physician-led and born from firsthand experience with
              the documentation burden. We believe every healthcare provider
              deserves professional-grade tools, regardless of where they
              practice or what resources they have access to.
            </p>
            <p>
              We're starting where the need is greatest. Our team is currently
              working with physicians in Ghana to build and refine documentation
              tools designed for the realities of practice in resource-limited
              settings—intermittent connectivity, shared devices, and high
              patient volumes.
            </p>
          </div>
        </div>
      </section>

      {/* Ghana Initiative Section */}
      <section className="bg-gradient-to-r from-emerald-50 to-teal-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Our work in Ghana
          </h2>
          <div className="mt-6 space-y-4 text-lg text-gray-600">
            <p>
              Ghana has a growing healthcare system with dedicated providers,
              but many clinics still rely on paper records or fragmented digital
              tools that don't fit local workflows. Documentation time takes
              physicians away from patients.
            </p>
            <p>
              We're partnering with physicians to pilot KasaMD in real clinical
              environments. This collaboration shapes everything we build—from
              offline-first architecture to workflows that match how care is
              actually delivered on the ground.
            </p>
            <p>
              Our goal is to prove that world-class medical documentation
              doesn't require world-class infrastructure, then expand this model
              to underserved regions across West Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Values/Approach Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            Our principles
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Principle cards */}
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
                Offline-first
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Designed to work reliably with intermittent connectivity,
                because healthcare doesn't wait for a stable network.
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
                Starting in Ghana and expanding to regions where cost and
                infrastructure are barriers to existing solutions.
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

      {/* Team Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900">The team</h2>
          <p className="mt-6 text-lg text-gray-600">
            KasaMD is physician-led and built by a small team passionate about
            health equity and accessible technology. Our co-founder practices
            medicine and is actively piloting our tools with colleagues in
            Ghana, ensuring everything we build serves real clinical needs.
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
              href="https://app.kasamd.com/signup"
              className="rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
