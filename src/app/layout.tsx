import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { brand } from '@/config/brand';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';
import { JsonLd } from '@/components/seo/JsonLd';
import './globals.css';

// Font loaders must have static literals at build time.
// Note: To change fonts, edit layout.tsx and brand.ts together.
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

// noindex is active unless NEXT_PUBLIC_ALLOW_INDEXING is explicitly 'true'
const allowIndexing = process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true';
const baseUrl = `https://${brand.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: brand.name,
    template: brand.seo.titleTemplate,
  },
  description: brand.seo.description,
  alternates: {
    canonical: './',
  },
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    nocache: !allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      noimageindex: !allowIndexing,
    },
  },
  openGraph: {
    title: {
      default: brand.name,
      template: brand.seo.titleTemplate,
    },
    description: brand.seo.description,
    url: baseUrl,
    siteName: brand.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: brand.name,
      template: brand.seo.titleTemplate,
    },
    description: brand.seo.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate CSS root variables directly from brand.colors
  const dynamicColorVariables = `
    :root {
      --brand-primary: ${brand.colors.primary};
      --brand-accent: ${brand.colors.accent};
      --brand-accent-text: ${brand.colors.accentText};
      --brand-surface: ${brand.colors.surface};
      --brand-ink: ${brand.colors.ink};
    }
  `;

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: dynamicColorVariables }} />
        <JsonLd />
      </head>
      <body className="flex min-h-screen flex-col bg-brand-surface text-brand-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
