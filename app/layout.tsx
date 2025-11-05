import type { Metadata } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'IncorporatePro ? Fast, Compliant Company Formation',
  description: 'Launch your US company with bank-ready documents, registered agent, EIN, and ongoing compliance ? powered by modern workflows.',
  metadataBase: new URL('https://agentic-5eca6042.vercel.app'),
  openGraph: {
    title: 'IncorporatePro',
    description: 'Fast, compliant company formation and compliance platform.',
    url: 'https://agentic-5eca6042.vercel.app',
    siteName: 'IncorporatePro',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'IncorporatePro' }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IncorporatePro',
    description: 'Fast, compliant company formation and compliance platform.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
