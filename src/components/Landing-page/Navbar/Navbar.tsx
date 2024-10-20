"use client";
import Link from "next/link";
import Image from "next/image";
// import { DialogDemo } from "../ConnectDialog/ConnectDialog";
import { usePathname } from "next/navigation";
import { ConnectButton } from "@/components/Wallet";
// import { Button } from "../ui/button";

const Navbar = () => {
    const location = usePathname();
    return (
        <nav className="flex flex-row justify-between p-16 pt-10 bg-transparent">
            <div>
                <Link href={"/"}>
                    <Image
                        src={"/Images/CHAINBALLOT.svg"}
                        width={100}
                        height={100}
                        alt="Logo"
                    />
                </Link>
            </div>

            <div>
                <ul className=" flex flex-row gap-9 text-[1rem] text-[#f5f5f5] font-semibold">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/"}>About</Link>
                    </li>
                    <li>
                        <Link href={"/"}>Vote</Link>
                    </li>
                </ul>
            </div>

            <div>
                <ConnectButton></ConnectButton>
            </div>
        </nav>
    );
};

export default Navbar;
