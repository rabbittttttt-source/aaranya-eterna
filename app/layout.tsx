import { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: 'Aaranya Eterna',
    template: '%s | Aaranya Eterna',
  },
  description: siteConfig.description,
  keywords: ['nature retreat', 'tree dedication', 'memorial forest', 'eco memorial', 'wellness retreat'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aaranya Eterna',
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: 'Aaranya Eterna',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aaranya Eterna',
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="page-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
