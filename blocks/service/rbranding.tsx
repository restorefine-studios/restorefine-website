import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";
// import Cta from "@/components/cta";

import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";

import artefacts from "@/public/services/branding/rbrandinghomemobile.svg";
import globe from "@/public/services/branding/globe.png";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";





function RBranding({ data }: { data: any }) {
  return (
    <main className="">
      <RestoServicesHero
        titletop={data.hero.titletop}
        titlebottom={data.hero.titlebottom}
        description={data.hero.description}
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
        <div className="flex items-center justify-center lg:hidden">
          <Image src={artefacts} alt="artefacts" width={300} height={300} />
        </div>
      </section>

      <RestoOverview {...data.overview} />
      <RestoBenefits
        title={data.benefits.title}
        subtitle={data.benefits.subtitle}
        signature={data.signature}
        makeRequest={{
          title: "Make Your Request",
          image: "/services/branding/makereqsgraphic.svg",
        }}
        receiveRefine={{
          title: "Receive and Refine",
          image: "/services/branding/restomedal.svg",
        }}
      />
      <RestoExpectation
        title={data.expectation.title}
        subtitle={data.expectation.subtitle}
        partnerCard={{
          title: "Partner with Creativity",
          gradient: { from: "#ff0000", to: "#a90909" },
          backgroundColor: "#ae0404",
        }}
        typewriterPhrases={data.expectation.typewriterPhrases}
        buildingCard={data.expectation.buildingCard}
        supportCard={data.expectation.supportCard}
        iterationsCard={data.expectation.iterationsCard}
        services={data.expectation.services}
      />
      {/* <Cta /> */}
      <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={data.signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
          <Image
            src={data.signature}
            alt="signature"
            layout="responsive"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
}

export default RBranding;
