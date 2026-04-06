export function AnnouncementBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-400 to-yellow-300 px-4 py-3">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center text-center">
          <p className="text-sm font-medium text-gray-900 sm:text-base">
            KasaMD for Mac is here →
          </p>
          <a
            href="https://downloads.kasamd.com/public/KasaMD-0.1.dmg"
            className="ml-1 inline-flex items-center underline text-sm font-semibold text-gray-900 transition-transform sm:text-base"
          >
            Download now
          </a>
        </div>
      </div>
    </div>
  );
}
