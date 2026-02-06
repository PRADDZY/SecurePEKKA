import type { Metadata } from 'next';
import { Outfit, Instrument_Sans } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading'
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body'
});

export const metadata: Metadata = {
  title: 'SecurePEKKA | Security for Startup Teams',
  description:
    'Ship faster with practical audits, targeted pentesting, and launch checks built for startup engineering teams.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}

