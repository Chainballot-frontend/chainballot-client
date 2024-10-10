"use client";
import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import { ConnectButton } from "@/components/Wallet";
import { useAccount } from "wagmi";

const Hero = () => {
  const { address } = useAccount();
  return (
    <div className='bg-[url("/Images/bg.svg")] bg-cover bg-center h-screen relative'>
      <Navbar />

      <div className=" flex flex-col items-center justify-center w-3/6 text-center  mx-auto px-20 mt-10 space-y-10">
        <span className="">
          <h1 className="text-5xl font-[800] font-Montserrat p-0 m-0">
            Empowering
          </h1>
          <h1 className=" text-5xl font-[800] font-Montserrat ">
            {" "}
            Transparent Voting on the Blockchain
          </h1>
        </span>

        <p className=" text-[20px]">
          Secure, decentralized, and real-time voting for communities,
          organizations, and governments.
        </p>

        {address !== undefined ? (
          <div className="flex flex-row space-x-4">
            <button className=" capitalize bg-[#5E00B2] w-[16rem] text-[#fff] flex flex-row  gap-2 px-1 justify-center items-center rounded-lg py-3 font-semibold ">
              START VOTING
            </button>
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
        ) : (
          <Fragment>
            <ConnectButton />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Hero;
