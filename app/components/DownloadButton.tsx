export const DOWNLOAD_URL = "https://downloads.kasamd.com/public/KasaMD.dmg";

export function AppleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.8-105.2-209.9-105.2-331.4 0-194.8 126.6-298.2 251.2-298.2 66.2 0 121.3 43.4 162.8 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.7 15.6 1.3 18.2 2.6.5 6.4.6 10.2.6 45.9 0 104-30.3 139.5-70.7z" />
    </svg>
  );
}

type Variant = "dark" | "light";

const variants: Record<Variant, string> = {
  dark: "bg-brand-900 text-white shadow-lg shadow-brand-900/20 hover:bg-brand-950 hover:shadow-xl hover:shadow-brand-900/25",
  light: "bg-white text-brand-900 shadow-lg shadow-black/10 hover:bg-brand-50",
};

const subtextColor: Record<Variant, string> = {
  dark: "text-brand-200",
  light: "text-muted",
};

export function DownloadButton({ variant = "dark" }: { variant?: Variant }) {
  return (
    <a
      href={DOWNLOAD_URL}
      className={`group inline-flex items-center gap-3 rounded-2xl px-6 py-3.5 transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]}`}
    >
      <AppleIcon className="h-6 w-6" />
      <span className="flex flex-col text-left">
        <span className="text-base font-semibold leading-tight">
          Download for Mac
        </span>
        <span className={`text-xs ${subtextColor[variant]}`}>
          Apple Silicon (M1 or later) &middot; macOS 14+
        </span>
      </span>
    </a>
  );
}
