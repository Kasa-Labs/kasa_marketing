import type { Metadata } from 'next';
import './globals.css';
import { AnnouncementBanner } from '@/components/AnnouncementBanner';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://kasamd.com'),
  title: {
    default: 'KasaMD - AI Medical Documentation',
    template: '%s | KasaMD',
  },
  description:
    'Transform patient conversations into accurate medical documentation. AI-powered clinical notes that understand medicine.',
  keywords: [
    'medical documentation',
    'clinical notes',
    'AI transcription',
    'healthcare technology',
    'medical records',
  ],
  authors: [{ name: 'KasaMD' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kasamd.com',
    siteName: 'KasaMD',
    title: 'KasaMD - AI Medical Documentation',
    description:
      'Transform patient conversations into accurate medical documentation. AI-powered clinical notes that understand medicine.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KasaMD - AI Medical Documentation',
    description:
      'Transform patient conversations into accurate medical documentation.',
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
