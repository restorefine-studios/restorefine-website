import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";
// import Cta from "@/components/cta";
import signature from "@/public/restobrandingsignature.svg";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";
import { rBrandingServices } from "@/lib/rbrandingServices";
import artefacts from "@/public/services/branding/rbrandinghomemobile.svg";
import globe from "@/public/services/branding/globe.webp";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";

const benefitsContent = {
  title: "And We Make It\nEasier For You",
  subtitle: "Simplifying the complex, so you can focus on what matters.",
  signature: money.src,
  makeRequest: {
    title: "Make Your Request",
    image: "/services/branding/makereqsgraphic.svg",
  },
  receiveRefine: {
    title: "Receive and Refine",
    image: "/services/branding/restomedal.svg",
  },
};

const restoExpectationProps = {
  title: "And These Inspiring Benefits Await You",
  subtitle: " To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Partner with Creativity",
    gradient: {
      from: "#ff0000",
      to: "#a90909",
    },
    backgroundColor: "#ae0404",
  },
  typewriterPhrases: ["Transparent Communication & Collaboration", "Holistic Brand Strategy Implementation", "User Experience Research"],
  buildingCard: {
    image: globe.src,
    title: "Building",
    subtitle: "Future",
  },
  supportCard: {
    avatar: avatar.src,
    textImage: commstext.src,
    title: "Reliable 24h Support",
    subtitle: "This means just as much to us, reach us anytime",
  },
  iterationsCard: {
    image: pulse.src,
    title: "Iterations",
    subtitle: " As many needed to achieve excellence",
  },
  services: ["Product Design", "Social Media", "Landing Pages", "Logos", "Brand Guidelines", "Icons", "Branding", "Slide Decks", "Visual Identity", "Restaurant Menu Design"],
};

function RBranding() {
  return (
    <main className="">
      <RestoServicesHero
        titletop="Resto-lutionary Branding"
        titlebottom="For Bold Visions"
        description="With RestoBranding, develop a compelling brand that captures attention. From logo design to complete brand development, including social media graphics, we ensure your brand communicates clearly and effectively across all channels. "
      />

      <section className="w-screen absolute top-[65%] left-0 right-0 lg:top-12 h-full flex flex-col lg:flex-row items-center justify-between lg:gap-0 gap-2">
        <div className="hidden lg:flex lg:flex-row items-end justify-between w-full">
          <div className="flex justify-start">
            <Image src={baloon} alt="baloon" width={180} height={180} />
          </div>

          <div className="flex justify-end">
            <Image src={ball} alt="ball" width={150} height={150} />
          </div>
        </div>
        <div className="py-8 flex items-center justify-center lg:hidden">
          <Image src={artefacts} alt="artefacts" width={270} height={270} />
        </div>
      </section>

      <RestoOverview {...rBrandingServices} />
      <RestoBenefits {...benefitsContent} />
      <RestoExpectation {...restoExpectationProps} />
      {/* <Cta /> */}
      <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image src={signature} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image src={signature} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
        </div>
      </section>
    </main>
  );
}

export default RBranding;
