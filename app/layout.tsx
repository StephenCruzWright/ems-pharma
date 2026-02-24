import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMS Pharma | Healthcare distribution in Mozambique',
  description:
    'EMS Pharma (EMS Property) imports, exports, stores, and distributes healthcare products with quality-focused international partnerships.',
  icons: {
    icon: '/favicon.png'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
