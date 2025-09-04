import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/header";
import Footer from "@/layout/footer";
import Providers from "./providers";
import { Notification } from "@/components/notification";
import { Suspense } from "react";
import { Loading } from "@/components/loading";
import CookieWarning from "@/components/cookie-warning";

const roboto = Roboto_Condensed({
  variable: "--font-league-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Free Agent Portal",
  description: "Where Pro teams look for available free agent talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      data-theme='dark'
      lang='en'
      className='bg-gradient-to-bl from-black via-black to-gray-800 min-h-screen'
    >
      <body
        className={`${roboto.variable} antialiased font-sans flex flex-col container mx-auto p-4 uppercase text-white min-h-screen`}
      >
        <Providers>
          <Suspense fallback={<Loading />}>
            <Notification />

            <Header />
            <div className='flex-1 mt-16'>{children}</div>

            <Footer />
            <CookieWarning />
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
