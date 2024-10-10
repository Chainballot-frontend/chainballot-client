"use client";
import React from "react";
import HomeWrapper from "@/components/Home/HomeWrapper";
import Hero from "@/components/Landing-page/Hero/Hero";
import About from "@/components/Landing-page/About/About";
import Steps from "@/components/Landing-page/Steps/Steps";
import Mission from "@/components/Landing-page/Mission/Mission";

export default function Home() {
  return (
    <div className="">
      <HomeWrapper>
        <Hero />
        <About />
        <Steps />
        <Mission />
      </HomeWrapper>
    </div>
  );
}
