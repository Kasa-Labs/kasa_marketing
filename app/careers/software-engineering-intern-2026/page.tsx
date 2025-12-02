import Link from "next/link";

const job = {
  title: "Software Engineering Intern - Healthcare AI Platform",
  type: "Internship",
  location: "Remote",
  department: "Engineering",
  duration: "3-6 months",
  description:
    "Join our founding team to build AI-powered medical documentation tools that serve healthcare providers in underserved regions worldwide.",
  about: [
    "KasaMD is a physician-led healthcare technology company on a mission to expand access to quality medical documentation. We're building AI-powered tools specifically designed for healthcare providers in resource-limited settings, particularly in Ghana.",
    "As a software engineering intern, you'll work directly with our founding team to build features that have real impact on healthcare delivery. This is an opportunity to contribute to meaningful work while gaining hands-on experience with modern web technologies, AI integration, and healthcare systems.",
  ],
  responsibilities: [
    "Develop and ship features for our web-based medical documentation platform using React, TypeScript, and Node.js",
    "Integrate AI capabilities (transcription, note generation) into clinical workflows",
    "Build and optimize UI components that work seamlessly across devices and network conditions",
    "Contribute to our offline-first architecture to support areas with limited connectivity",
    "Write clean, well-tested code with comprehensive documentation",
    "Participate in code reviews and collaborate with the team on technical decisions",
    "Help identify and solve real clinical workflow challenges through technology",
  ],
  qualifications: [
    "Currently pursuing or recently completed a degree in Computer Science, Software Engineering, or related field",
    "Strong foundation in JavaScript/TypeScript and modern web development",
    "Experience with React or similar frontend frameworks",
    "Familiarity with backend development (Node.js, APIs, databases)",
    "Ability to write clean, maintainable code and learn quickly",
    "Strong problem-solving skills and attention to detail",
    "Excellent communication and collaboration abilities",
  ],
  preferred: [
    "Interest in healthcare technology and health equity",
    "Experience with GraphQL, PostgreSQL, or cloud platforms (AWS, GCP)",
    "Familiarity with AI/ML APIs or natural language processing",
    "Understanding of offline-first or progressive web app architectures",
    "Experience building production applications",
    "Passion for creating accessible, user-friendly interfaces",
  ],
  youllLearn: [
    "Full-stack web development in a production healthcare environment",
    "Integration of AI/ML capabilities into real-world applications",
    "Building HIPAA-compliant systems with proper security and audit controls",
    "Product development in resource-constrained environments",
    "Healthcare workflows and clinical documentation practices",
    "Working directly with physicians to solve real clinical problems",
  ],
  weOffer: [
    "Direct impact on healthcare access in underserved communities",
    "Hands-on experience across the full stack of modern web technologies",
    "Close mentorship from experienced engineers and physicians",
    "Flexible remote work arrangement",
    "Opportunity to contribute to a mission-driven startup from the ground up",
    "Real ownership over features that ship to production",
  ],
  applicationProcess: [
    "Submit your application with resume and a brief note about why you're interested",
    "Initial conversation about your background and our mission (30 min)",
    "Technical discussion and/or coding exercise",
    "Meet the team and discuss potential projects",
    "Decision and offer",
  ],
};

export default function JobPostingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="border-b border-gray-200 bg-gradient-to-br from-amber-50 via-purple-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-medium text-purple-700 hover:text-purple-600"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to careers
          </Link>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            {job.title}
          </h1>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              {job.type}
            </span>
            <span className="inline-flex items-center rounded-full bg-teal-100 px-4 py-2 text-sm font-medium text-teal-800">
              {job.location}
            </span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">
              {job.department}
            </span>
            <span className="inline-flex items-center rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800">
              {job.duration}
            </span>
          </div>

          <div className="mt-8">
            <a
              href="mailto:careers@kasamd.com?subject=Application: Software Engineering Intern"
              className="inline-block rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">About the Role</h2>
            <div className="mt-4 space-y-4 text-base text-gray-600">
              {job.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Responsibilities
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-gray-600">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Required Qualifications
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-gray-600">
              {job.qualifications.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Preferred Qualifications
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-gray-600">
              {job.preferred.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* What You'll Learn */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              What You'll Learn
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-gray-600">
              {job.youllLearn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">What We Offer</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-gray-600">
              {job.weOffer.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Ready to Apply?
              </h2>
              <p className="mt-3 text-base text-gray-600">
                Send us your resume and a brief note about why you're interested
                in joining KasaMD.
              </p>
              <div className="mt-6">
                <a
                  href="mailto:careers@kasamd.com?subject=Application: Software Engineering Intern"
                  className="inline-block rounded-lg bg-purple-700 px-8 py-3.5 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-purple-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
