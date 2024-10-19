import type { Metadata } from "next";
import "@coinbase/onchainkit/styles.css";
import "./globals.css";
import OnchainProviders from "@/providers/OnchainProviders";
// import { PrimeReactProvider } from "primereact/api";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Navbar from "@/components/Landing-page/Navbar/Navbar";

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
            <body className='bg-[url("/Images/bg.svg")] bg-cover bg-center'>
                <OnchainProviders>
                    <Navbar></Navbar>
                    {/* <PrimeReactProvider> */}
                    {children}
                    {/* </PrimeReactProvider> */}
                </OnchainProviders>
            </body>
        </html>
    );
}
