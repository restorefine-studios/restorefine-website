import funnel from "@/public/aboutherographic.svg";
import Image from "next/image";
import huddle from "@/public/companyhuddle.webp";

function AboutHero() {
  return (
    <main className="">
      <section className="relative z-10 min-h-screen flex flex-col md:flex-row items-start md:items-center justify-center md:justify-between text-left gap-y-3 md:gap-y-4">
        <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-7xl">
          <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
            Refining Your
            <br />
            Vision, Amplifying
            <br />
            Your Impact
          </span>
        </h1>

        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <Image src={funnel || "/placeholder.svg"} alt="Funnel" width={450} height={450} className="w-full h-auto" />
        </div>
      </section>

      <section className="space-y-8 sm:space-y-12 pb-16 sm:pb-24">
        <div className="w-full relative h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden bg-[#d9d9d9]">
          <Image src={huddle || "/placeholder.svg"} alt="resto huddle up" fill className="h-full rounded-[24px] object-cover flex lg:absolute bottom-0 lg:-bottom-8 grayscale-none lg:grayscale scale-100 hover:scale-105 hover:grayscale-0 transition-all duration-700 ease-in-out" />
        </div>

        <div className="space-y-3 lg:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">About Us</h2>
          <div className="max-w-full text-sm md:text-base text-white/80 space-y-4">
            <p>
              At RestoRefine Studios, we set out with a clear goal: to become Scotland&apos;s top all-in-one agency, headquartered in Glasgow and serving businesses across the nation. Our vision stems from a deep understanding of the challenges faced by businesses and hospitality sectors in finding
              a reliable one-stop solution for all their needs.
            </p>
            <p>
              From web design and custom apparel to promotional materials and much more, we are here to simplify the process and deliver exceptional results. We built this agency on the values of clear communication, affordability, and a deep commitment to understanding and meeting our clients&apos;
              unique needs.
            </p>
            <p>At RestoRefine Studios, our clients are at the heart of everything we do. Your success is our success, and we are dedicated to going above and beyond to provide outstanding service and impactful solutions for your business.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutHero;
