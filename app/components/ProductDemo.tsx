import Image from "next/image";

export function ProductDemo() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-20 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-gray-600">
            Professional medical documentation at your fingertips.
          </p>
        </div>

        {/* Demo Screenshot */}
        <div className="mt-16">
          <div className="relative mx-auto max-w-6xl">
            {/* Subtle gradient glow behind the image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-teal-100/50 via-violet-100/50 to-teal-100/50 blur-2xl" />

            {/* Image container with shadow and border */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              <Image
                src="/images/kasa_app.jpg"
                alt="KasaMD application interface showing medical voice dictation and clinical documentation"
                width={1920}
                height={1080}
                className="w-full"
                priority
              />
            </div>
            {/* White fade gradient at bottom - positioned outside image container */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 via-gray-50/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
