import React from "react";

export default function VotersSteps() {
  const VotersCard = [
    {
      content: "Connect Your Wallet",
      subHeadline:
        "Start by connecting your crypto wallet to verify your eligibility",
    },
    {
      content: "Vote for Your Candidate",
      subHeadline:
        "View the list of candidates, make your choice, and cast your vote securely onchain.",
    },
    {
      content: "Track Results in Real-Time",
      subHeadline:
        "Watch as votes are counted and results are displayed instantly once the voting closes.",
    },
  ];
  return (
    <div className=" ">
      <h1 className=" font-bold p-5 text-2xl">For Voter</h1>
      {VotersCard.map((card) => (
        <div
          key={card.content}
          className="flex flex-col align-top gap-2 mt-2 bg-[#5E00B2B2] py-3 px-5 w-[400px] rounded-lg space-y-5"
        >
          <h1 className=" font-semibold text-[#f5f5f5] text-xl ">
            {card.content}
          </h1>
          <p>{card.subHeadline}</p>
        </div>
      ))}
    </div>
  );
}
