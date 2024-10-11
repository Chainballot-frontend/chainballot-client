import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="w-full text-white flex items-center justify-between p-8 px-12">
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
        <button className="capitalize bg-white text-[#5E00B2] w-[16rem] font-semibold  flex flex-row  gap-2 px-[1.5] items-center justify-center rounded-lg py-3 ">
          CREATE NEW ELECTION
          <Image
            src={"/Icons/plus.svg"}
            width={23}
            height={20}
            alt="Plus sign"
          />
        </button>
      </div>
    </div>
  );
};
