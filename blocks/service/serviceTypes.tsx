"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ServiceTypesProps {
  headline: string;
  subtext: string;
  subServices: any[];
  serviceDetails: any[];
}

export default function ServiceTypes({ headline, subtext, subServices, serviceDetails }: ServiceTypesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= services.length ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500); // Match this with the CSS transition duration
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500); // Match this with the CSS transition duration
  };

  const services = subServices.slice(1); // Use subServices 2-5 for carousel

  const visibleServices = isMobile
    ? services
    : [
        services[currentIndex],
        services[(currentIndex + 1) % services.length],
        services[(currentIndex + 2) % services.length],
      ];

  return (
    <div className="py-24 space-y-8 lg:space-y-16">
      <div className="">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
            {headline}
          </h1>
          <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">
            {subtext}
          </p>
        </div>

        <div className="w-fulll my-6 md:my-12 relative h-[500px] lg:h-[600px] rounded-[24px] overflow-hidden bg-[#d9d9d9]">
          <Image
            src={subServices[0]?.image || "/placeholder.svg"}
            alt="Services Hero"
            fill
            className="h-full object-cover flex lg:absolute bottom-0 lg:-bottom-8"
          />
        </div>
      </div>

      <div className="mb-0">
        <div className="flex flex-col lg:flex-row items-start justify-evenly">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
            {subServices[0]?.title}
          </h2>
          <div className="space-y-6">
            <p className="max-w-full lg:max-w-[400px] text-sm md:text-base text-white/80">
              {subServices[0]?.description}
            </p>
            <Link
              href="/services/restobranding"
              className="text-sm inline-flex items-center gap-2 text-white border border-white/20 rounded-full px-4 py-2 hover:bg-white/10 transition-colors group"
            >
              See More
              <div className="bg-[red] w-8 h-8 rounded-full p-1 flex items-center jsutify-center ">
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section className="space-y-4">
        <div
          className={`${
            isMobile
              ? "flex overflow-x-auto scrollbar-hide"
              : "grid md:grid-cols-2 lg:grid-cols-3"
          } gap-4`}
        >
          {visibleServices.map((service: any, index: number) => (
            <Link
              key={`${service.title}-${index}`}
              href={service.href}
              className={`${
                isMobile ? "flex-none w-[80vw]" : ""
              } bg-[#d9d9d9] rounded-[24px] overflow-hidden relative transition-transform duration-500 ease-in-out ${
                isTransitioning ? "transform translate-x-full" : ""
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute z-10 p-6 space-y-1">
                <p className="text-xs font-medium text-white">
                  {service.title}
                </p>
                <h2 className="text-xl font-semibold block text-white">
                  {service.description}
                </h2>
              </div>
              <div className="h-[550px] border-t border-t-black/80 relative">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="absolute z-0 right-0 w-full object-cover grayscale-none md:grayscale scale-100 hover:scale-110 hover:grayscale-0 duration-700 ease-in-out transition-all cursor-pointer"
                />
              </div>
            </Link>
          ))}
        </div>

        {!isMobile && services.length > 3 && (
          <div className="flex justify-end gap-4">
            <button
              onClick={prevSlide}
              className="p-4 rounded-full bg-[#303030] text-white hover:bg-[#404040] transition-colors"
              disabled={isTransitioning}
            >
              <ArrowRight className="w-6 h-6 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 rounded-full bg-[#ff0000] text-white hover:bg-[#ff0000]/90 transition-colors"
              disabled={isTransitioning}
            >
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </section>

       <div className="space-y-16">
        {serviceDetails.map((service: any, index: number) => (
          <div key={service.number} className="relative">
            <div className="grid md:grid-cols-[100px_1fr] gap-4">
              <div className="text-4xl font-semibold text-[red]">
                {service.number}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80">{service.description}</p>
                <div className="flex flex-wrap gap-4">
                  {service.services.map((item: string) => (
                    <button
                      key={item}
                      className="px-6 py-3 text-white text-xs border border-white/30 rounded-full hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            {index < serviceDetails.length - 1 && (
              <div className="absolute -bottom-8 left-0 right-0 h-px bg-white/30" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
