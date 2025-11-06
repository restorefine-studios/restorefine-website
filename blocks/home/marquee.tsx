"use client";

import Image from "next/image";

interface Logo {
  name: string;
  url: string;
  filter?: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
  return (
    <main className="pb-24 w-full">
      <div className="pb-12 md:pb-16 relative">
        <div
          aria-hidden="true"
          className="left-1/2 top-0 w-full center pointer-events-none absolute h-px max-w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(143, 143, 143, 0.67) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>
        <div
          aria-hidden="true"
          className="-top-1 left-1/2 h-[200px] w-full md:max-w-[400px] center pointer-events-none absolute max-w-full -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 90deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 50%), radial-gradient(rgba(200, 200, 200, 0.1) 0%, transparent 80%)",
          }}
        ></div>
      </div>
      <section className="w-full">
        <h1 className="text-center text-white/70 mb-4">
          Trusted By Top Innovative Teams
        </h1>
        <section className="relative flex w-full overflow-x-hidden bg-transparent py-4 gap-x-8">
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-8">
            {logos.map((logo, index) => (
              <Image
                key={`${logo.name}-1-${index}`}
                src={logo.url}
                alt={logo.name}
                width={180}
                height={60}
                className="h-12 w-auto object-contain opacity-100 md:opacity-30 hover:opacity-100"
                style={{ filter: logo.filter }}
              />
            ))}
          </div>
          <div className="animate-marquee-infinite flex min-w-full shrink-0 items-center justify-around gap-8">
            {logos.map((logo, index) => (
              <Image
                key={`${logo.name}-2-${index}`}
                src={logo.url}
                alt={logo.name}
                width={180}
                height={60}
                className="h-12 w-auto object-contain opacity-100 md:opacity-30 hover:opacity-100"
                style={{ filter: logo.filter }}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
