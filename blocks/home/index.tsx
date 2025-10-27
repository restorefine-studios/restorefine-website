import React from "react";
import Hero from "./hero";
import { BentoGrid } from "./properties";
import { LogoMarquee } from "./marquee";
import { CreativePotential } from "./potential";
// import { Insights } from "./insights";
import { Reviews } from "./reviews";
import Cta from "@/components/cta";
import Reels from "./reels";

function Resto() {
  return (
    <main className="">
      <Hero />
      <LogoMarquee />
      <Reels />
      <BentoGrid />
      <CreativePotential />
      {/* <Insights /> */}
      <Reviews />
      <Cta />
    </main>
  );
}

export default Resto;
