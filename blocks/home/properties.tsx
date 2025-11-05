import Image from "next/image";

interface Models {
  id: number,
  source: string,
  alt: string,
  width: number,
  height: number,
  className: string
}

interface BentoGridProps {
  headline: string;
  subtext: string;
  models: Models[];
}

export function BentoGrid({ headline, subtext, models }: BentoGridProps) {
  return (
    <section>
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-8 md:mb-16 gap-y-3 md:gap-y-4">
        <h2 className="max-w-[100%] md:max-w-[50%] text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
          {headline}
        </h2>
        <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">
          {subtext}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="space-y-4">
        {/* Top grid: first 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {models.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className={` ${item.id === 2 ? "flex flex-col items-end justify-end pl-4 pt-4 md:pl-0 md:pt-0" : "grid place-items-center p-4 md:p-0"}
              aspect-[4/3] rounded-[24px] bg-[#131313] relative overflow-hidden`}
            >
              <Image
                src={item.source}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className}
              />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-black/60 flex items-center justify-center text-white text-sm font-medium text-center p-4">
                {item.alt}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom grid: remaining 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {models.slice(2).map((item) => (
            <div
              key={item.id}
              className="h-[270px] rounded-[24px] bg-[#131313] grid place-items-center relative overflow-hidden"
            >
              <Image
                src={item.source}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className={item.className}
              />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-black/60 flex items-center justify-center text-white text-sm text-center p-4">
                {item.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
