import React from "react";
import RestoServicesHero from "./resto-services/resto-hero";
import mesh from "@/public/restowebheromesh.svg";
import Image from "next/image";
import { RestoOverview } from "./resto-services/resto-overview";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
// import Cta from "@/components/cta";
import websignature from "@/public/websignature.svg";
import { rWebServices } from "@/lib/rwebServices";
import signature from "@/public/restowebsignature.svg";
import globe from "@/public/services/branding/globe.webp";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";

const restoExpectationProps = {
  title: "And These Inspiring Benefits Await You",
  subtitle: " To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Surf the New way",
    gradient: {
      from: "#ff0000",
      to: "#a90909",
    },
    backgroundColor: "#ae0404",
  },
  typewriterPhrases: ["Apt Tech Stack & Infrastructure", "Smooth User Interfaces Across All Devices", "Enhance Customer Interactions"],
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
  services: ["Product Design", "User Research", "User Experience", "User Interface", "Landing Pages", "Email Marketing", "SEO", "Website Management"],
};

const benefitsContent = {
  title: "And We Make It\nEasier For You",
  subtitle: "Simplifying the complex, so you can focus on what matters.",
  signature: websignature.src,
  makeRequest: {
    title: "Make Your Request",
    image: "/services/web/restowebreq.svg",
  },
  receiveRefine: {
    title: "Receive and Refine",
    image: "/services/web/restowebmedal.svg",
  },
};

function RWeb() {
  return (
    <main>
      <RestoServicesHero titletop="Crafting Web" titlebottom="Experiences That Connect" description="We create immersive journeys that captivate audiences and drive engagement. With strategy-led design and seamless functionality, RestoWeb brings your brand’s digital presence to life. " />

      <div className="px-4 lg:px-0 absolute z-0 bottom-32 lg:top-0 flex flex-col h-full lg:items-center items-baseline justify-end lg:justify-center opacity-100 lg:opacity-80">
        <Image src={mesh} alt="mesh" layout="responsive" width={100} height={100} />
      </div>

      <RestoOverview {...rWebServices} />
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

export default RWeb;
