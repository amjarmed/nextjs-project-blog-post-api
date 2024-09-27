import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navigation from './components/Navbar';
import Footer from './components/Footer';
import useElementSize from './hooks/useElementSize';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: 'inspirewire - blog',
  description: 'news and lifestyle informations blog'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased     `}
      >
        <Navigation />
        <main className='wrapper  md:pt-20'>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
