import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DjedFit',
  description: 'A comprehensive software solution for nutrition, supplements, and exercise management between coaches and clients.',
  icons:{
    icon:'/logo.png'
  },
  openGraph: {
    title: 'DjedFit',
    description:
      'A comprehensive software solution for nutrition, supplements, and exercise management between coaches and clients.',
    images: ['/logo.png'], // ✅ shows logo when sharing link on social media
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}