import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-zinc-200`}
      >
        <NextTopLoader showSpinner={false} />
        <div className="flex min-h-screen flex-col max-w-screen-xl mx-auto transition-all duration-300">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
