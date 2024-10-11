import React from "react";
import Image from "next/image";
const Mission = () => {
  return (
    <div className="p-16 flex flex-col justify-center items-center">
      <h1 className="font-bold  pb-5 text-2xl text-center">
        Security and Transparency Section
      </h1>
      <div className="flex flex-row justify-between items-center rounded-lg border-[#5E00B2] shadow-2xl border">
        <Image
          src={"/Images/security.svg"}
          width={300}
          height={300}
          alt="Ballot box"
        />

        <div className="w-full">
          <p className=" w-1/2 mx-auto text-justify">
            ChainBallot is built on the Base blockchain, ensuring that all data
            is secure, verifiable, and fully decentralized. Every vote is
            immutably recorded, providing the highest level of transparency and
            trust.”
          </p>
        </div>
      </div>
      <div className=" flex flex-row gap-5 mt-10">
        <button className=" capitalize bg-[#5E00B2] w-[16rem] text-[#fff] flex flex-row font-semibold gap-2 px-1 justify-center items-center rounded-lg py-3 ">
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
    </div>
  );
};

export default Mission;
