import type { Metadata } from "next";
import { League_Spartan, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/header";
import Footer from "@/layout/footer";
import Providers from "./providers";

const league = Roboto_Condensed({
  variable: "--font-league-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Free Agent Portal",
  description: "A portal for free agents to find opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html
        lang='en'
        className='bg-gradient-to-bl from-black via-black bg-no-repeat min-h-screen to-gray-800'
      >
        <body
          className={`${league.variable} antialiased container mx-auto p-4 flex flex-col uppercase text-white `}
        >
          <div className='font-sans'>
            <Header />
            <div className='flex-1 mt-16'>{children}</div>
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
