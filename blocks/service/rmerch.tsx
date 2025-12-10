import React from "react";
import restostar from "@/public/restostar.svg";
import Image from "next/image";
import ring from "@/public/merchring.svg";
import tri from "@/public/merchangle.svg";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RestoBenefits from "./resto-services/resto-benefits";
import headlineimg from "@/public/services/merch/pexels-oyindamola-taiwo-346083207-18930893.jpg";
import stationery from "@/public/services/merch/restorefine_floatingpens.jpg";
import apron from "@/public/services/merch/HOM-000-024-M-Freebie.jpg";
import chestshot from "@/public/services/merch/pexels-skgphotography-22617996.jpg";
import cards from "@/public/services/merch/restorefine_thankyoucard.jpg";
import { RestoExpectation } from "./resto-services/resto-expectation";

const star = <Image src={restostar} alt="RestoStar" width={100} height={100} />;
const merchring = <Image src={ring} alt="MerchRing" width={150} height={150} />;
const triangle = <Image src={tri} alt="MerchAngle" width={50} height={50} />;


function RMerch({ data }: { data: any }) {
  return (
    <main className="py-32 lg:py-44">
      <section className="px-2 lg:px-0 relative z-10 flex flex-col items-start lg:items-center justify-start lg:justify-center text-left lg:text-center gap-y-4">
        <h1 className="relative z-0 mb-0 lg:mb-6 text-left md:text-center font-medium tracking-tight rservicehero text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Finally You Can
            <br />
            Print, Wear and Impress
          </span>
        </h1>

        <Link href="/enquire-now" className="flex items-center gap-1 mt-1 hover:opacity-90">
          <div className="w-auto bg-white text-black text-sm rounded-[24px] px-6 py-3">Lets Craft Something</div>
          <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
        </Link>
      </section>

      <section className="px-2 lg:px-0 pt-6 lg:pt-16 pb-0 lg:pb-32">
        <div className="">
          <div className="mb-8 flex flex-col lg:flex-row items-center justify-between gap-4">
            <p className="text-md w-[350px] text-white leading-relaxed">
              {data.hero.description}
            </p>

            <div className="relative flex items-center justify-center">
              {merchring}
              <span className="absolute">{triangle}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left column */}
            <div className="mt-12 grid gap-4">
              <div className="relative h-[200px] bg-[#d9d9d9] rounded-[24px]">
                <Image src={stationery} alt="restomerchstationery" fill className="absolute top-0 object-cover w-full rounded-[24px]" />
              </div>
              <div className="relative h-[300px] bg-[#d9d9d9] rounded-[24px]">
                <Image src={apron} alt="restomerchapron" fill className="absolute top-0 object-cover w-full rounded-[24px]" />
              </div>
            </div>

            {/* Center column */}
            <div className="relative">
              <div className="absolute -top-12 z-10 left-1/2 -translate-x-1/2">{star}</div>
              <div className="relative z-0 h-[550px] bg-[#d9d9d9] rounded-[24px] ">
                <Image src={headlineimg} alt="restomerchheroimg" fill className="absolute top-0 object-cover w-full rounded-[24px]" />
              </div>
            </div>

            {/* Right column */}
            <div className="mt-0 lg:mt-12 grid gap-4">
              <div className="relative h-[300px] bg-[#d9d9d9] rounded-[24px]">
                <Image src={chestshot} alt="restomerchprint-tshirt" fill className="absolute top-0 object-cover w-full rounded-[24px]" />
              </div>
              <div className="relative h-[200px] bg-[#d9d9d9] rounded-[24px]">
                <Image src={cards} alt="restomerchstationerycards" fill className="absolute top-0 object-cover w-full rounded-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.services.features.slice(0,3).map((item: any, index: number) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6"
            >
              <div>
                <h2 className="text-2xl font-medium text-white mb-1">
                  {item.title}
                </h2>
                 <p className="text-sm text-white/80 leading-relaxed">
                   {item.description}
                 </p>
              </div>
              {index !== data.services.features.slice(0,3).length - 1 && (
                <div className=" w-full lg:w-px h-px lg:h-full bg-white/30"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* <RestoOverview /> */}
      <RestoBenefits
        title={data.benefits.title}
        subtitle={data.benefits.subtitle}
        signature={data.starIcon}
        makeRequest={{
          title: "Make Your Request",
          image: "/services/merch/restomerchreq.svg",
        }}
        receiveRefine={{
          title: "Receive and Refine",
          image: "/services/merch/restomerchmedal.svg",
        }}
      />
      <RestoExpectation
        title={data.expectation.title}
        subtitle={data.expectation.subtitle}
        partnerCard={{
          title: "Your Brand merchandise",
          gradient: { from: "#3FCBFE", to: "#1B496F" },
          backgroundColor: "#99E2FF",
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

export default RMerch;
