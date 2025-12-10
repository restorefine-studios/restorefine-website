import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RestoServicesHeroProps {
  titletop: string;
  titlebottom: string;
  description: string;
  heroClass?: string;
}

function RestoServicesHero({
  titletop,
  titlebottom,
  description,
  heroClass = "",
}: RestoServicesHeroProps) {
  return (
    <main
      className={` ${heroClass} relative z-10 sm:-mt-32 -mt-24 mb-52 lg:mb-0 lg:-mt-0 min-h-screen flex flex-col items-start md:items-center justify-center text-left md:text-center gap-y-3 md:gap-y-4
`}
    >
      <div className="px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full">
            <h1 className="relative z-0 text-left md:text-center font-medium tracking-tight rservicehero text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="py-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
                {titletop}
                <br />
                {titlebottom}
              </span>
            </h1>
            <p className="text-sm md:text-base w-full md:min-w-1/2 md:w-3/5 text-white/80 mt-4 mx-auto">
              {description}
            </p>
            <Link
              href="/enquire-now"
              className="flex items-center gap-1 mt-6 hover:opacity-90 md:justify-center"
            >
              <div className="w-auto bg-white text-black text-sm rounded-[32px] px-6 py-3">
                Let&apos;s Craft Something
              </div>
              <ArrowRight className="flex items-center justify-center bg-[red] text-white rounded-full p-2.5 size-10" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default RestoServicesHero;
