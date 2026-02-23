import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMS Pharma | Future-ready healthcare solutions',
  description:
    'Modern pharmaceutical website starter focused on trust, quality, and innovation, built with Next.js for Vercel.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
