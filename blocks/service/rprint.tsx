import Image from "next/image";
import RestoServicesHero from "./resto-services/resto-hero";
import { RestoOverview } from "./resto-services/resto-overview";
import signature from "@/public/restoprintsignature.svg";
import RestoBenefits from "./resto-services/resto-benefits";
import { RestoExpectation } from "./resto-services/resto-expectation";
import money from "@/public/moneystartgraphic.svg";
import printsketch from "@/public/printherobg.svg";
import { rPrintServices } from "@/lib/rprintServices";
import globe from "@/public/services/branding/globe.webp";
import pulse from "@/public/services/branding/iterationschart.svg";
import avatar from "@/public/services/branding/commsavatar.svg";
import commstext from "@/public/services/branding/commstext.svg";
import paper from "@/public/services/print/paper.svg";
import pin from "@/public/services/print/roller.svg";
import menu from "@/public/services/print/openbook.svg";
import pack from "@/public/services/print/foodpack.svg";
import boxes from "@/public/services/print/stackedboxes.svg";

const restoExpectationProps = {
  title: "And These Inspiring Benefits Await You",
  subtitle: " To turn your ideas into impactful solutions",
  partnerCard: {
    title: "Print with Execellence",
    gradient: {
      from: "#ff0000",
      to: "#a90909",
    },
    backgroundColor: "#ae0404",
  },
  typewriterPhrases: ["Eye-Catching Promotional Materials", "Align With Your Restaurants Ambience", "Attract Attention To Your Business"],
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
  services: ["Restaurant Menu", "Signage", "Restaurant Stationery Print", "Apparel Printing"],
};

const benefitsContent = {
  title: "And We Make It\nEasier For You",
  subtitle: "Simplifying the complex, so you can focus on what matters.",
  signature: money.src,
  makeRequest: {
    title: "Make Your Request",
    image: "/services/print/restoprintreq.svg",
  },
  receiveRefine: {
    title: "Receive and Refine",
    image: "/services/print/restoprintmedal.svg",
  },
};

const mobileMarqueeImages = [paper, pin, menu, pack, boxes];

function RPrint() {
  return (
    <main className="">
      <div className="flex flex-col lg:block">
        <RestoServicesHero
          titletop="Creating Long-Lasting"
          titlebottom="Print Impressions"
          description="Expert guidance and execution on all your printing needs. From menus to promotional materials, we ensure high-quality print outputs that truly represent your brand's excellence. "
          heroClass="lg:mb-0 mb-8"
        />

        {/* Mobile marquee underneath hero text */}
        <div className="absolute bottom-12 lg:hidden flex gap-x-4 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
            {mobileMarqueeImages.map((src, index) => (
              <Image key={index} src={src || "/placeholder.svg"} alt={`Print service icon ${index + 1}`} width={120} height={120} className="inline-block mx-3" />
            ))}
          </div>
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
            {mobileMarqueeImages.map((src, index) => (
              <Image key={index + mobileMarqueeImages.length} src={src || "/placeholder.svg"} alt={`Print service icon ${index + 1}`} width={120} height={120} className="inline-block mx-3" />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute z-0 left-0 right-0 top-10 lg:top-28 min-w-full mx-auto min-h-screen hidden lg:flex flex-col items-center justify-center">
        <Image src={printsketch || "/placeholder.svg"} alt="resto print sketch" fill className="h-full object-none animate-pulse" />
      </div>
      <section className="pt-8 lg:pt-32">
        <RestoOverview {...rPrintServices} />
        <RestoBenefits {...benefitsContent} />
        <RestoExpectation {...restoExpectationProps} />

        {/* Signature marquee at the bottom for both desktop and mobile */}
        <section className="absolute inset-x-0 flex w-full overflow-x-hidden bg-transparent py-0 gap-x-4">
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
            <Image src={signature || "/placeholder.svg"} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
          </div>
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-0">
            <Image src={signature || "/placeholder.svg"} alt="signature" layout="responsive" width={500} height={500} className="w-full" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default RPrint;
