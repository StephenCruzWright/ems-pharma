import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EMS PHARMA LDA | Pharmaceutical distribution in Mozambique',
  description:
    'EMS PHARMA LDA distributes pharmaceutical, cosmetic, consumable, hygiene, and cleaning products across major Mozambican markets.',
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
