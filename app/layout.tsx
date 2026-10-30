import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReferrerTracker } from "@/components/ReferrerTracker";

export const metadata: Metadata = {
  metadataBase: new URL("https://kasamd.com"),
  title: {
    default: "KasaMD - The Back Office for Independent Practices",
    template: "%s | KasaMD",
  },
  description:
    "Agents that run the back office for independent practices: patient messaging, scheduling, refills, prior authorization, referrals and billing, with your physician approving every clinical call. Plus free clinical tools, starting with Notes for Mac.",
  keywords: [
    "independent practice back office",
    "medical practice automation",
    "AI agents for medical practices",
    "after-hours patient messaging",
    "prior authorization automation",
    "prescription refill management",
    "medical billing",
    "free clinical tools",
    "offline clinical transcription",
    "clinical notes for Mac",
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
    title: "KasaMD - The Back Office for Independent Practices",
    description:
      "Agents for patient messaging, scheduling, refills, prior authorization, referrals and billing. Your physician approves every clinical call.",
  },
  twitter: {
    card: "summary_large_image",
    title: "KasaMD - The Back Office for Independent Practices",
    description:
      "Agents run the back office for independent practices. Your physician approves every clinical call.",
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
        <ReferrerTracker />
      </body>
    </html>
  );
}
