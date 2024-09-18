import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from './components/navbar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blog Posts from Api",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
 
      </head>
          <body
      
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-20 min-h-screen  flex flex-col   `}
      >
        <Navigation/>

   
     <main className="wrapper flex-auto ">
        {children}

     </main>

            <footer className=' text-center'>

      <div className="container  py-5">
        <p> All rights Reserved &copy;</p>
      </div>
     </footer>
      </body>
    </html>
  );
}
