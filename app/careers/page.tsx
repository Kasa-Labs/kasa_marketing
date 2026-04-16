export default function CareersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
              <span className="text-sm font-medium text-emerald-900">
                Join Our Mission
              </span>
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Build technology that expands healthcare access
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Join our team in creating medical documentation tools that serve
            healthcare providers in underserved regions worldwide.
          </p>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>

          <p className="mt-6 text-base text-gray-600">
            We don't have any open positions right now. Reach out if our mission
            resonates. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* What We Value Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-gray-900">
            What We Value
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Health Equity
              </h3>
              <p className="mt-3 text-base text-gray-600">
                We build for the most underserved communities first, ensuring
                our technology works where it's needed most.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Clinical Insight
              </h3>
              <p className="mt-3 text-base text-gray-600">
                Being physician-led means we understand real clinical workflows
                and build tools that actually help.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Thoughtful Innovation
              </h3>
              <p className="mt-3 text-base text-gray-600">
                We solve hard problems like offline AI and resource constraints
                with creative technical solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-t from-violet-50 via-teal-50/30 to-transparent px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Don't see the right role?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're always interested in connecting with people who share our
            mission. Reach out and tell us about yourself.
          </p>
          <div className="mt-8">
            <a
              href="mailto:careers@kasamd.com"
              className="inline-block rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
