import Image from "next/image";

const About = () => {
  return (
    <div className=" flex flex-row justify-between w-full p-16">
      <div className=" space-y-5">
        <h1 className=" text-[#f5f5f5] text-[2rem] font-bold">
          What is <span className=" text-[#48008e]">ChainBallot?</span>
        </h1>
        <p className=" text-start w-4/5 text-lg ">
          ChainBallot is a decentralized voting platform that leverages
          blockchain technology to ensure transparent, secure, and immutable
          election processes. Whether for local communities or large-scale
          elections, our platform offers real-time vote tracking and instant
          results, ensuring fairness and trust for every participant.
        </p>
      </div>
      <div className="">
        <Image
          src={"/Images/voting-box.svg"}
          width={1000}
          height={400}
          alt="voting box"
        />
      </div>
    </div>
  );
};

export default About;
