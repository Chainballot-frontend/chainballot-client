'use client'
import Link from "next/link";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";


export default function Create () {
  const [value, setValue] = useState('');



  return (
    <>
      <div className="md:w-full w-11/12 grid place-items-center pb-14">
        <div className="flex items-center justify-between md:w-11/12 w-8/12 h-20">
          <Link href={"/"}>
            <Image
              src={"/Images/CHAINBALLOT.svg"}
              width={100}
              height={100}
              alt="Logo"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/Images/tabler_arrow-back-up.svg"}
              width={50}
              height={100}
              alt="Logo"
            />
          </Link>
        </div>
        <form className="bg-white text-black h-auto w-10/12 md:p-16 p-4 rounded-2xl flex flex-col gap-8" action="#">
          <h1 className="text-4xl font-bold text-center">Create New Election</h1>
          <div className="w-full">
            <label htmlFor="election-title" className="font-semibold">Election Title</label>
            <InputText id="election-title" className="border-2 w-full p-4" value={value} onChange={(e) => setValue(e.target.value)}/>
          </div>
          <div className="w-full">
            <label htmlFor="election-description" className="font-semibold">Election Description (Optional)</label>
            <InputTextarea id="election-description" autoResize  className="border-2 w-full p-4" rows={5} cols={30}/>
          </div>
          <div className="flex items-center justify-center gap-8 w-full">
            <div className="flex flex-col w-2/4">
              <label htmlFor="start-date" className="font-semibold">Start Date</label>
              <InputText id="start-date" className="border-2 w-full p-4" />
            </div>
            <div className="flex flex-col w-2/4">
              <label htmlFor="end-date" className="font-semibold">End Date</label>
              <InputText id="end-date" className="border-2 w-full p-4" />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="legibility" className="font-semibold">Voting Legibility</label>
            <InputText id="legibility" className="border-2 w-full p-4" />
          </div>
          <div className="grid place-items-center gap-8">
            <h1 className="text-4xl font-bold text-center">Candidate 1</h1>
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex flex-col w-2/4">
                <label htmlFor="candidate-party" className="font-semibold">Candidate Name</label>
                <InputText id="candidate-party" className="border-2 w-full p-4" />
              </div>
              <div className="flex flex-col w-2/4">
                <label htmlFor="affiliation" className="font-semibold">Candidate Party/Affiliation(OPtional)</label>
                <InputText id="affiliation" className="border-2 w-full p-4" />
              </div>
            </div> 
            <div className="w-full">
              <label htmlFor="manifesto" className="font-semibold">Manifesto</label>
              <InputTextarea id="manifesto" autoResize  className="border-2 w-full p-4" rows={5} cols={30}/>
            </div>
          </div>
          <div className="grid place-items-center gap-8">
            <h1 className="text-4xl font-bold text-center">Candidate 2</h1>
            <div className="flex items-center justify-center gap-8 w-full">
              <div className="flex flex-col w-2/4">
                <label htmlFor="candidate-party" className="font-semibold">Candidate Name</label>
                <InputText id="candidate-party" className="border-2 w-full p-4" />
              </div>
              <div className="flex flex-col w-2/4">
                <label htmlFor="affiliation" className="font-semibold text-nowrap">Candidate Party/Affiliation(OPtional)</label>
                <InputText id="affiliation" className="border-2 w-full p-4" />
              </div>
            </div> 
            <div className="w-full">
              <label htmlFor="manifesto" className="font-semibold">Manifesto</label>
              <InputTextarea id="manifesto" autoResize  className="border-2 w-full p-4" rows={5} cols={30}/>
            </div>
          </div>
          <div className="flex items-center justify-center gap-12 w-full">
            <Button className="bg-[#5E00B2] text-white w-[16rem] font-semibold  flex flex-row  gap-2 px-[1.5] items-center justify-center rounded-lg py-3">ADD NEW CANDIDATE
              <Image 
                src={"/Icons/Vector.svg"}
                width={23}
                height={20}
                alt="Plus sign"
              />
            </Button>
            <Button className="bg-[#5E00B2] text-white w-[16rem] font-semibold  flex flex-row  gap-2 px-[1.5] items-center justify-center rounded-lg py-3">CREATE</Button>
          </div>
        </form>
      </div>
    </>
  )
}
