import React from "react";
// import luxevent from "@/public/mediahero.jpg";
import Image from "next/image";
import moneyeye from "@/public/rmediahero.svg";
import ctabg from "@/public/rmediactabg.jpg";
import { RestoOverview } from "./resto-services/resto-overview";


import bio from "@/public/services/media/restomediabio.jpg";
import { RestoExpectation } from "./resto-services/resto-expectation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";



function RMedia({ data }: { data: any }) {
  return (
    <main className="">
      
        {/* <div className="w-full h-full object-cover absolute top-0 left-0 z-0">
          <Image
            src={luxevent}
            alt="luxevent"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
          <span className="min-h-screen relative z-10 flex items-center justify-center">
            <Image
              src={mlogo}
              alt="restomedialogo"
              width={100}
              height={100}
              className=""
            />
          </span>
        </div> */}

        

         <section className="relative z-0 min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between text-left gap-y-16 md:gap-y-4">
          <div className="flex flex-col items-start gap-y-5" >
  <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-7xl">
          <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
           Shot, Shared,
            <br />
           & Selling Out
          </span>
        </h1>
        <p className="md:max-w-lg max-w-full" >
          From perfectly lit plates to behind-the-scenes reels, we turn your business into the content your audience didn&apos;t know they needed. This is digital media, tailored for visibility and built for connection.
        </p>


  <Link
        href="/enquire-now"
        className="flex items-center gap-1 mt-1 hover:opacity-90"
      >
        <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
          Lets Craft Something
        </div>
        <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
      </Link>

       
          </div>
      

        <div className="w-auto md:w-[500px]">
          <Image
            src={moneyeye || "/placeholder.svg"}
            alt="Money Eye"
            width={450}
            height={450}
            className="w-full h-auto"
          />
        </div>
      </section>
  

      <section className="py-24 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative h-[350px] bg-[#d9d9d9] rounded-[24px]">
          <Image
            src={bio}
            alt="resto media bio"
            fill
            className="absolute rounded-[24px] object-cover w-full"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">What is Resto Media</h2>
          <p className="text-sm text-white/50">
            RestoMedia manages your social media and content creation,
            delivering high-quality photography and videography that showcases
            the best of your business. We handle your social platforms, ensuring
            engaging content that drives visibility and customer interaction.
          </p>
        </div>
      </section>

      <RestoOverview {...data.overview} />

      <section className="py-12">
        <div className="flex w-full inset-x-0 overflow-x-hidden">
          <Image
            src={ctabg}
            alt="mediactabackground"
            layout="responsive"
            width={100}
            height={100}
            className="w-full bg-norepeat"
            objectFit="cover"
          />
        </div>
      </section>

      <RestoExpectation
        title={data.expectation.title}
        subtitle={data.expectation.subtitle}
        partnerCard={{
          title: "Showcase your Business",
          gradient: { from: "#FFE0A7", to: "#483920" },
          backgroundColor: "#C9A585",
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
    </main>
  );
}

export default RMedia;
