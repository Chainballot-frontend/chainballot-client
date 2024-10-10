import type { Metadata } from "next";
import "@coinbase/onchainkit/styles.css";
import localFont from "next/font/local";
import "./globals.css";
import OnchainProviders from "@/providers/OnchainProviders";

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
  title: "ChainBallot",
  description: "Decentralized voting system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <OnchainProviders>{children}</OnchainProviders>
      </body>
    </html>
  );
}
// Smart Wallet 10/9/2024