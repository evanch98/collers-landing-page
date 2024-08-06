import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/header/navbar';
import { Footer } from '@/components/footer/footer';

const font = Kanit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Collers',
  description: 'Collers Landing Page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
