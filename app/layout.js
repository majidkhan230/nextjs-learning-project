import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'


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

export const metadata = {
  title: "Portfolio",
  description: "Generated by mjd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <nav className='flex justify-between items-center h-[60px]  px-20'>
        <div className="logo">Logo</div>
        <ul className='flex gap-10'>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  );
}
