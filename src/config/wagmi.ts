import { http, createConfig } from "wagmi";
import { base } from "wagmi/chains";
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
    projectId: "iolk",
  }
);

export const wagmiConfig = createConfig({
  chains: [base],
  multiInjectedProviderDiscovery: false,
  connectors,
  ssr: true,
  transports: {
    [base.id]: http(),
  },
});
