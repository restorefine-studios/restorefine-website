"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface RestoOverviewProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

export function RestoOverview({
  title,
  subtitle,
  features,
}: RestoOverviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
      setCurrentIndex(0);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      if (currentIndex < features.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    } else {
      if (currentIndex + 3 < features.length) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="">
      <div className="">
        <div className="text-center flex flex-col items-center justify-center mb-8">
          <h2 className="max-w-[100%] md:max-w-[50%] text-2xl sm:text-3xl font-semibold text-white md:text-4xl">
            {title}
          </h2>
          <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">
            {subtitle}
          </p>
        </div>

        <div className="w-full relative overflow-hidden mb-8">
          <motion.div
            className="w-full flex md:gap-6 gap-0"
            initial={false}
            animate={{
              x: `${-currentIndex * (isMobile ? 100 : 100 / 2.5)}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex-none gap-3 lg:gap-0 ${
                  isMobile ? "w-full" : "w-[calc(33.333%-1rem)]"
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-[24px] overflow-hidden h-[350px]">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="object-cover"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-[#ffffff] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#ffffff]/80 md:truncate sm:whitespace-normal sm:overflow-auto hover:whitespace-normal hover:overflow-auto cursor-pointer transition-transform duration-500 ease-in-out">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div
          className={`${
            features.length <= (isMobile ? 1 : 3) ? "hidden" : "flex"
          } justify-end gap-4`}
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="p-4 rounded-full bg-[#323232] text-[#ffffff] disabled:opacity-50 transition-opacity"
            aria-label="Previous features"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </button>
          <button
            onClick={nextSlide}
            disabled={
              isMobile
                ? currentIndex >= features.length - 1
                : currentIndex + 3 >= features.length
            }
            className="p-4 rounded-full bg-[#ff0000] text-[#ffffff] disabled:opacity-50 transition-opacity"
            aria-label="Next features"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
