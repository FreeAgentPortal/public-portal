import type { Metadata } from "next";
import { League_Spartan, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/layout/header";
import Footer from "@/layout/footer";

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
    <html lang='en' className='bg-background uppercase'>
      <body
        className={`${league.variable} antialiased container mx-auto p-4 flex flex-col min-h-screen`}
      >
        <div className='font-sans'>
          <Header />
          <div className='flex-1'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
