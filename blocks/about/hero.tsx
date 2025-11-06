import Image from "next/image";

interface AboutHeroProps {
  headline: string;
  image: string;
  aboutHeadline: string;
  aboutParagraph: string;
  aboutImage: string;
}

function AboutHero({ headline, image, aboutHeadline, aboutParagraph, aboutImage }: AboutHeroProps) {
  return (
    <main className="">
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between text-left gap-y-3 md:gap-y-4">
         <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-7xl">
           <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
             {headline}
           </span>
         </h1>

         <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
           <Image
             src={image || "/placeholder.svg"}
             alt="Hero Image"
             width={450}
             height={450}
             className="w-full h-auto"
           />
         </div>
      </section>

      <section className="space-y-8 sm:space-y-12 pb-16 sm:pb-24">
        <div className="w-full relative h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden bg-[#d9d9d9]">
          <Image
            src={aboutImage || "/placeholder.svg"}
            alt="About Image"
            fill
            className="h-full rounded-[24px] object-cover flex lg:absolute bottom-0 lg:-bottom-8 grayscale-none lg:grayscale scale-100 hover:scale-105 hover:grayscale-0 transition-all duration-700 ease-in-out"
          />
        </div>

        <div className="space-y-3 lg:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
            {aboutHeadline}
          </h2>
          <div className="max-w-full text-sm md:text-base text-white/80 space-y-4">
            <p>{aboutParagraph}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutHero;
