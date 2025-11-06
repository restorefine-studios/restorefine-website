import React from "react";
import RestoServicesHero from "./resto-services/resto-hero";
import mesh from "@/public/restowebheromesh.svg";
import Image from "next/image";
import { RestoOverview } from "./resto-services/resto-overview";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
// import Cta from "@/components/cta";
import websignature from "@/public/websignature.svg";


import globe from "@/public/services/branding/globe.png";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";





function RWeb({ data }: { data: any }) {
  return (
    <main>
      <RestoServicesHero
        titletop={data.hero.titletop}
        titlebottom={data.hero.titlebottom}
        description={data.hero.description}
      />

      <div className="absolute z-0 top-0 lg:top-0 flex flex-col h-full items-center justify-center opacity-80">
        <Image
          src={mesh}
          alt="mesh"
          layout="responsive"
          width={100}
          height={100}
        />
      </div>

      <RestoOverview {...data.overview} />
      <RestoBenefits
        title={data.benefits.title}
        subtitle={data.benefits.subtitle}
        signature={data.starIcon}
        makeRequest={{
          title: "Make Your Request",
          image: "/services/web/restowebreq.svg",
        }}
        receiveRefine={{
          title: "Receive and Refine",
          image: "/services/web/restowebmedal.svg",
        }}
      />
      <RestoExpectation
        title={data.expectation.title}
        subtitle={data.expectation.subtitle}
        partnerCard={{
          title: "Surf the New way",
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

export default RWeb;
