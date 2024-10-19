import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { 
   connectorsForWallets, 
  
} from '@rainbow-me/rainbowkit'; 
import {
  metaMaskWallet,
  rainbowWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended Wallet",
      wallets: [coinbaseWallet],
    },
    {
      groupName: "Other Wallets",
      wallets: [rainbowWallet, metaMaskWallet],
    },
  ],
  {
    appName: "ChainBallot",
    projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_ID as string,
  }
);

export const wagmiConfig = createConfig({
  chains: [baseSepolia],
  multiInjectedProviderDiscovery: false,
  connectors,
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});
