"use client";

import React from "react";
import { TypewriterText } from "@/components/typewriterText";
import Image from "next/image";

interface PartnerCard {
  title: string;
  gradient: {
    from: string;
    to: string;
  };
  backgroundColor: string;
}

interface BuildingCard {
  image: string;
  title: string;
  subtitle: string;
}

interface SupportCard {
  avatar: string;
  textImage: string;
  title: string;
  subtitle: string;
}

interface IterationsCard {
  image: string;
  title: string;
  subtitle: string;
}

interface RestoExpectationProps {
  title: string;
  subtitle: string;
  partnerCard: PartnerCard;
  typewriterPhrases: string[];
  buildingCard: BuildingCard;
  supportCard: SupportCard;
  iterationsCard: IterationsCard;
  services: string[];
}

export function RestoExpectation({
  title,
  subtitle,
  partnerCard,
  typewriterPhrases,
  buildingCard,
  supportCard,
  iterationsCard,
  services,
}: RestoExpectationProps) {
  return (
    <section className="py-20 mg:py-32">
      <div className="">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-[#ffffff] md:text-3xl lg:text-4xl max-w-full md:max-w-[40%]">
            {title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index !== title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-sm text-[#ffffff]/80">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end mb-8">
          {/* Partner with Creativity card */}
          <div className="relative">
            <div
              className="absolute -top-5 left-6 w-[85%] h-[280px] sm:h-[330px] rounded-[24px]"
              style={{ backgroundColor: partnerCard.backgroundColor }}
            />
            <div
              className="relative w-full h-[280px] sm:h-[330px] rounded-[24px] overflow-hidden flex items-center justify-center"
              style={{
                background: `linear-gradient(to bottom right, ${partnerCard.gradient.from}, ${partnerCard.gradient.to})`,
              }}
            >
              <style jsx global>{`
                @import url("https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap");
              `}</style>
              <h3
                className="text-center"
                style={{
                  fontFamily: "'Homemade Apple', cursive",
                  transform: "rotate(-10deg)",
                  maxWidth: "80%",
                  lineHeight: 1.4,
                }}
              >
                <span className="text-[#ffffff] text-4xl">
                  {partnerCard.title.split(" ").map((word, index, array) => (
                    <React.Fragment key={index}>
                      {index === 1 ? (
                        <span className="text-[#000000]">{word}</span>
                      ) : (
                        word
                      )}
                      {index !== array.length - 1 && " "}
                      {index === 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </h3>
            </div>
          </div>

          {/* TypewriterText component */}
          <div className="h-[280px] sm:h-[330px] md:h-[350px] bg-gradient-to-br from-[#ffffff] to-[#c9c9c9] rounded-[24px] lg:col-span-2 p-6 sm:p-8 flex justify-center">
            <TypewriterText phrases={typewriterPhrases} />
          </div>

          {/* Building for Future card */}
          <section
            className={` ${
              buildingCard.image === "" ? "hidden" : "flex"
            } h-[180px] sm:h-[200px] rounded-[24px] p-4 sm:p-6  items-center justify-center overflow-hidden relative`}
          >
            <div className="absolute inset-0 bg-[#000000] bg-gradient-radial from-[#000000] from-65% to-[#ff0000] to-100%"></div>
            <div className="flex items-center gap-4 relative z-10">
              <Image
                src={
                  buildingCard.image || "/placeholder.svg?height=80&width=80"
                }
                alt="Globe"
                width={80}
                height={80}
                className="rounded-full w-16 h-16 sm:w-20 sm:h-20"
              />
               <div className="text-[#ffffff] capitalize">
                 <h3 className="text-xl sm:text-2xl font-semibold">
                   {buildingCard.title}
                 </h3>
                 <span className="flex items-center gap-x-1">
                   <h3 className="text-xl sm:text-2xl font-semibold text-[#ffffff]/70">
                     For
                   </h3>
                   <h3 className="text-xl sm:text-2xl font-semibold">
                     {buildingCard.subtitle}
                   </h3>
                 </span>
               </div>
            </div>
          </section>

          {/* Reliable 24h Support card */}
          <section
            className={` ${
              supportCard.avatar === "" ? "hidden" : "relative"
            } h-[180px] sm:h-[200px] bg-gradient-to-br from-[#1B1B1B] to-[#000000] rounded-[24px]  overflow-hidden`}
          >
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{
                background: "linear-gradient(135deg, #9C9C9C 0%, #363636 31%)",
                padding: "0.5px",
              }}
            >
              <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#1B1B1B] to-[#000000]"></div>
            </div>

            <div className="absolute top-6 left-6 flex flex-row items-center p-0 gap-3">
              <Image
                src={
                  supportCard.avatar || "/placeholder.svg?height=80&width=80"
                }
                alt="Communications Support Avatar"
                width={80}
                height={80}
                className="object-contain w-[70px]"
              />
              <Image
                src={
                  iterationsCard.image || "/placeholder.svg?height=80&width=80"
                }
                alt="Communications Support Text"
                width={80}
                height={80}
                className="object-contain w-[160px]"
              />
            </div>

            <div className="absolute bottom-5 left-5 ">
              <h3 className="text-xl sm:text-2xl text-[#ffffff] font-semibold">
                {supportCard.title}
              </h3>
              <p className="text-xs text-[#ffffff]/60">
                {supportCard.subtitle}
              </p>
            </div>
          </section>

          {/* Iterations card */}
          <section
            className={` ${
              iterationsCard.image === "" ? "hidden" : "relative"
            } h-[180px] sm:h-[200px] bg-gradient-to-br from-[#1B1B1B] to-[#000000] rounded-[24px] overflow-hidden`}
          >
            <div
              className="absolute inset-0 rounded-[24px]"
              style={{
                background: "linear-gradient(135deg, #9C9C9C 0%, #363636 31%)",
                padding: "0.5px",
              }}
            >
              <div className="w-full h-full rounded-[24px] bg-gradient-to-br from-[#1B1B1B] to-[#000000]"></div>
            </div>

            <div className="flex items-center justify-center p-0">
              <Image
                
                src={
                  supportCard.textImage || "/placeholder.svg?height=80&width=80"
                }
                alt="Resto Iterations Pulse"
                width={80}
                height={80}
                className="absolute bottom-6 object-contain w-[80%]"
              />
            </div>

            <div className="absolute bottom-5 left-5 ">
              <h3 className="text-xl sm:text-2xl text-[#ffffff] font-semibold">
                {iterationsCard.title}
              </h3>
              <p className="text-xs text-[#ffffff]/60">
                {iterationsCard.subtitle}
              </p>
            </div>
          </section>
        </div>

        <div className="flex flex-wrap gap-4">
          {services.map((service) => (
            <button
              key={service}
              className="px-6 py-3 text-[#ffffff] border border-[#ffffff]/30 rounded-full hover:bg-[#ffffff]/10 transition-colors"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
