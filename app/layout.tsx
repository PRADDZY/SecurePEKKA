import type { Metadata } from 'next';
import { Bricolage_Grotesque, Manrope } from 'next/font/google';
import './globals.css';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
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
      <body className={`${bricolage.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}

