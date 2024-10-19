import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownDisconnect,
  WalletDropdownFundLink,
  WalletDropdownLink,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Name,
  Identity,
  Avatar,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";

export function ConnectButton() {
  return (
    <div className="flex justify-end ">
      <Wallet className=" text-slate-50">
        <ConnectWallet withWalletAggregator className="text-slate-100 custom-button-color">
          <Avatar className="h-6 w-6 bg-white text-white border border-white" />
          <Name className="text-white" />
        </ConnectWallet>
        <WalletDropdown>
          <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
            <Avatar className=" text-slate-50" />
            <Name className=" text-slate-50"/>
            <Address className={color.foregroundMuted} />
            <EthBalance />
          </Identity>
          {/* <WalletDropdownBasename /> */}
          <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
            Wallet
          </WalletDropdownLink>
          {/* <WalletDropdownFundLink /> */}
          <WalletDropdownDisconnect />
        </WalletDropdown>
      </Wallet>
    </div>
  );
}
