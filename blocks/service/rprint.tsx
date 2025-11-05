import React from "react";
import ball from "@/public/rbrandingheroball.svg";
import baloon from "@/public/rbrandingherobaloon.svg";
import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";

import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";
import printsketch from "@/public/printherobg.svg";

import globe from "@/public/services/branding/globe.png";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";




function RPrint({ data }: { data: any }) {
  return (
    <main className="">
      <RestoServicesHero
        titletop={data.hero.titletop}
        titlebottom={data.hero.titlebottom}
        description={data.hero.description}
      />

      <div className="absolute z-0 left-0 right-0 top-10 lg:top-28 min-w-full mx-auto min-h-screen flex flex-col items-center justify-center">
        <Image
          src={printsketch}
          alt="resto print sketch"
          fill
          className="h-full object-none animate-pulse"
        />
      </div>
      <section className="pt-16 lg:pt-32">
        <RestoOverview {...data.overview} />
        <RestoBenefits
          title={data.benefits.title}
          subtitle={data.benefits.subtitle}
          signature={data.signature}
          makeRequest={{
            title: "Make Your Request",
            image: "/services/print/restoprintreq.svg",
          }}
          receiveRefine={{
            title: "Receive and Refine",
            image: "/services/print/restoprintmedal.svg",
          }}
        />
        <RestoExpectation
          title={data.expectation.title}
          subtitle={data.expectation.subtitle}
          partnerCard={{
            title: "Print with Excellence",
            gradient: { from: "#ff0000", to: "#a90909" },
            backgroundColor: "#ae0404",
          }}
          typewriterPhrases={data.expectation.typewriterPhrases}
          buildingCard={data.expectation.buildingCard}
          supportCard={data.expectation.supportCard}
          iterationsCard={data.expectation.iterationsCard}
          services={data.expectation.services}
        />

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
      </section>
    </main>
  );
}

export default RPrint;
