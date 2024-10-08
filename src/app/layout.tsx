import Navbar from '@/components/navbar';
import { Providers } from '@/components/provider';

import { cn } from '@/lib/utils';
import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import "./globals.css";

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}>
        <Providers>
          <Navbar/>
          {children}
        </Providers>
        {/*<Toaster />*/}
      </body>
    </html>
  );
}
