import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const gilroy = localFont({
  src: '../../fonts/Gilroy-Regular.woff',
  variable: '--font-gilroy',
  weight: '400',
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://osmehza5.rs'),
  title: {
    default: 'Osmeh za 5',
    template: '%s | Osmeh za 5',
  },
  description: 'Povratak u školu sa osmehom.',
  openGraph: {
    title: 'Osmeh za 5',
    description: 'Povratak u školu sa osmehom.',
    url: 'https://osmehza5.rs',
    siteName: 'Osmeh za 5',
    locale: 'sr_RS',
    type: 'website',
  },
  twitter: {
    title: 'Osmeh za 5',
    description: 'Povratak u školu sa osmehom.',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${gilroy.variable} antialiased`}>{children}</body>
    </html>
  );
}
