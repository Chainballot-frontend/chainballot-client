import React from "react";
import VotersSteps from "./VoterSteps";
import AdminSteps from "./AdminSteps";

const Steps = () => {
  return (
    <div className=" p-16">
      <h1 className=" text-[#f5f5f5] text-xl font-semibold">
        Simple Steps to Get Started
      </h1>

      <div className="  flex  flex-row justify-between">
        <VotersSteps />
        <AdminSteps />
      </div>
    </div>
  );
};

export default Steps;
