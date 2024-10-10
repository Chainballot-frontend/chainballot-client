"use client";
import { ReactNode } from "react";
import Footer from "../Landing-page/Footer/Footer";

interface HomeWrapperProps {
  children: ReactNode;
}

export default function HomeWrapper({ children }: HomeWrapperProps) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
