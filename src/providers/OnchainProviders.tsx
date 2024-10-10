"use client";
import { ReactNode } from "react";
import { 
  RainbowKitProvider } from '@rainbow-me/rainbowkit'; import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "@/config/wagmi";

import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css'; 

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey={"QVnPT0XROesIx8BFkjAETLpULlnb6rxG"}
          chain={base}
        >
           <RainbowKitProvider modalSize="compact">
            {children}
          </RainbowKitProvider>
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
