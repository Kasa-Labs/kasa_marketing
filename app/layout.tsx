import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kasamd.com"),
  title: {
    default: "KasaMD - Offline Clinical Transcription for Mac",
    template: "%s | KasaMD",
  },
  description:
    "Offline clinical transcription for your Mac. Transcribe patient visits and generate clinical notes — no internet required.",
  keywords: [
    "offline clinical transcription",
    "offline medical documentation",
    "clinical notes",
    "medical transcription Mac",
    "offline medical tool",
    "HIPAA-friendly transcription",
  ],
  authors: [{ name: "KasaMD" }],
  icons: {
    icon: [
      { url: "/assets/favicon.ico", sizes: "any" },
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      {
        url: "/assets/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/assets/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kasamd.com",
    siteName: "KasaMD",
    title: "KasaMD - Offline Clinical Transcription for Mac",
    description:
      "Offline clinical transcription for your Mac. Transcribe patient visits and generate clinical notes — no internet required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KasaMD - Offline Clinical Transcription for Mac",
    description:
      "Offline clinical transcription for your Mac. No internet required.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
