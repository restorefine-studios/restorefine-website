import React from "react";
import AboutHero from "./hero";
import { StrategySection } from "./strategies";
import { Team } from "./team";
// import { Values } from "./values";
import Cta from "@/components/cta";

interface AboutUsProps {
  heroHeadline: string;
  heroHeadlineImage: string;
  aboutHeadline: string;
  aboutParagraph: string;
  aboutImage: string;
  strategyHeadline: string;
  strategySubtext: string;
  strategies: any[];
  founderHeadline: string;
  founderSubtext: string;
  founders: any[];
}

function AboutUs(props: AboutUsProps) {
  return (
    <main>
      <AboutHero
        headline={props.heroHeadline}
        image={props.heroHeadlineImage}
        aboutHeadline={props.aboutHeadline}
        aboutParagraph={props.aboutParagraph}
        aboutImage={props.aboutImage}
      />
      <StrategySection
        strategyHeadline={props.strategyHeadline}
        strategySubtext={props.strategySubtext}
        strategies={props.strategies}
      />
      <Team
        headline={props.founderHeadline}
        subtext={props.founderSubtext}
        founders={props.founders}
      />
      {/* <Values /> */}
      <Cta />
    </main>
  );
}

export default AboutUs;
