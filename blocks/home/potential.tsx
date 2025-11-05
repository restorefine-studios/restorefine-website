import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface PotentialImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

interface CreativePotentialProps {
  headline: string;
  subtext: string;
  images: PotentialImage[];
}

export function CreativePotential({ headline, subtext, images }: CreativePotentialProps) {
  return (
    <section className="pt-32 md:pt-44">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Text Content */}
          <div className="col-span-1 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
              {headline}
            </h2>

            <p className="text-sm sm:text-md md:text-base text-white/80">
              {subtext}
            </p>

            {/* Custom See More Button */}
            <Link
              href="/services"
              className="group mt-8 inline-flex items-center rounded-full border border-white/30 bg-black px-4 py-2 transition-colors hover:bg-white/5"
            >
              <span className="mr-4 text-sm text-white">See More</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-5 w-5 text-white" />
              </span>
            </Link>
          </div>

          {/* Empty Shapes */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-0">
            {images.map((img, index) => (
              <div key={index} className="responsive-height rounded-[24px] bg-[#131313] relative overflow-hidden">
                <div className="absolute top-7 left-7 space-y-2">
                  <p className="text-md md:text-xs font-medium text-white/50">
                    {img.title}
                  </p>
                  <h2 className="max-w-[70%] text-lg md:text-md font-medium block text-white/80">
                    {img.subtitle}
                  </h2>
                </div>

                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="w-full absolute bottom-0 grayscale-none md:grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        {/* Commented out as per the original code */}
        {/* <div className="mt-12 flex justify-end gap-4">
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2b2b2b] transition-colors hover:bg-[#3b3b3b]"
            aria-label="Previous slide"
          >
            <ArrowRight className="h-5 w-5 rotate-180 text-white" />
          </button>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700"
            aria-label="Next slide"
          >
            <ArrowRight className="h-5 w-5 text-white" />
          </button>
        </div> */}
      </div>
    </section>
  );
}
