import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServicesHeroProps {
  headline: string;
  subtext: string;
  image: string;
  marquee: string;
}

function ServicesHero({ headline, subtext, image, marquee }: ServicesHeroProps) {
  return (
    <main className="min-h-screen overflow-hidden pt-12">
      <section className="px-0 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 text-left flex flex-col items-start gap-y-4 mb-8 lg:mb-0">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
             <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
               {headline}
             </span>
           </h1>
           <p className="w-full lg:w-3/4 text-sm sm:text-base text-white/80">
             {subtext}
           </p>
          <Link href="/enquire-now" className="flex items-center gap-2">
            <span className="bg-white text-black text-sm rounded-full px-6 py-3">
              Let&apos;s Craft Something
            </span>
            <ArrowRight className="bg-red-600 text-white rounded-full p-2.5 w-10 h-10" />
          </Link>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
             <Image
               src={image || "/placeholder.svg"}
               alt="Services Hero Graphic"
               width={750}
               height={750}
               layout="responsive"
               priority
             />
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden py-4 md:pb-16">
        <div className="rotate-[-4deg] transform translate-y-1/4">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/60 mx-4">
              {marquee}
            </span>
            <span className="text-4xl md:text-5xl lg:text-7xl font-bold text-white/60 mx-4">
              {marquee}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServicesHero;
