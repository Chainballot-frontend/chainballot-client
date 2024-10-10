import Image from "next/image";
import React from "react";

export default function ElectionTypes() {
  return (
    <div className=" flex flex-row justify-between items-center p-16">
      <div className=" ">
        <h1 className=" font-bold text-xl text-[#f5f5f5]">
          Use ChainBallot for Any Type of Election
        </h1>
        <ul className=" font-medium space-y-3 pt-5">
          <li>. Local community elections</li>
          <li>. Organizational decision-making</li>
          <li>. Corporate voting (e.g., shareholders)</li>
          <li>. Governmental elections</li>
          <li>. DAOs and decentralized organizations</li>
        </ul>
      </div>
      <div>
        <Image
          src={"/Images/ballot-box.svg"}
          width={500}
          height={300}
          alt="Ballot box"
        />
      </div>
    </div>
  );
}
