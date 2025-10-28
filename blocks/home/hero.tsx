import Link from "next/link";
import bghero from "@/public/bghero.webp";
import Image from "next/image";
import orbit from "@/public/orbitbg.svg";
import { getEntry } from "@/lib/contentful";

export default async function Hero() {
  const entry = await getEntry('4vS3xsxhN1eATw3l21K6ek');
  const heroHeadline = entry?.fields?.heroHeadline || 'Your Partner in Hospitality Success, Beyond Digital';
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-center gap-y-1 pt-2 text-center">
      {/* Background Image */}

      <Image
        src={bghero}
        width={1920}
        height={1080}
        layout="responsive"
        className="absolute top-0 right-0 z-0 object-cover bg-cover opacity-50"
        alt="Background"
      />

      <Image
        src={orbit}
        width={1920}
        height={1080}
        layout="responsive"
        className="h-full absolute -bottom-8 right-0 z-0 object-cover opacity-90"
        alt="Background"
      />

      <Link
        href="/portfolio/quiknest"
        className="relative z-20 mb-6 inline-flex rounded-full border border-white/20 bg-black/50 px-4 py-2 hover:bg-white/10"
        style={{
          boxShadow: "0 0 0 1px rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span className="mr-2 rounded-full bg-red-600 px-2 py-1 text-xs font-semibold text-white">
          NEW
        </span>
        <span className="text-sm text-white">
          Latest addition to our portfolio
        </span>
      </Link>

       {/* Heading */}
       <h1 className="relative z-0 mb-6 text-center font-medium tracking-tight text-5xl md:text-7xl">
         <span className="max-w-3xl p-1.5 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">
           {heroHeadline}
         </span>



       </h1>
      {/* Description */}
      <p className="mx-auto mb-12 max-w-3xl font-normal text-white/80">
        Running a restaurant, café, or takeaway is tough. We make it easier.
        From websites that drive bookings to menus, signage, and merch, we’ve
        got you covered. Let’s elevate your business together.
      </p>
      {/* CTA Button */}

      <Link
        href="/enquire-now"
        className="relaitve z-20 w-fit rounded-xl border border-white/20 p-2.5 cursor-pointer"
      >
        <div
          className="relative inline-flex items-center justify-center rounded-lg border border-white/10 bg-white px-6 py-2 text-base font-medium text-black transition-colors hover:bg-white/70 hover:font-semibold"
          style={{
            boxShadow: `
                0 0 0 1px rgba(255, 255, 255, 0.1),
                0 0 0 1px rgba(0, 0, 0, 0.05) inset,
                0 0 10px rgba(255, 255, 255, 0.05)
              `,
          }}
        >
          Enquire Now
        </div>
      </Link>
    </main>
  );
}
