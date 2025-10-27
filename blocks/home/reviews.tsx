"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    name: "Raj",
    position: "Himalayan Dine In",
    review: "The print quality was amazing, and I couldn't believe how affordable it was compared to my last supplier. Great service and fast delivery!",
    image: "/reviewuser.svg",
    companyLogo: "/himalayanlogo.svg",
  },
  {
    id: 2,
    name: "Balraj",
    position: "Favourite Spot",
    review: "RestoRefine Studios gave our café a fresh look with a great logo redesign and incredible food photos. The photos really improved our social media presence, which has helped bring in more customers. Highly recommend them for creative and professional work in Glasgow!",
    image: "/reviewuser.svg",
    companyLogo: "/favouritespot_logo.webp",
  },
  // Add more reviews as needed
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    if (isMobile && scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  const handleNext = () => {
    if (isMobile && scrollRef.current) {
      scrollRef.current.scrollBy({
        left: scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    } else {
      setCurrentIndex((prev) => (prev < reviews.length - 2 ? prev + 1 : prev));
    }
  };

  const showArrows = !isMobile && reviews.length > 2;

  return (
    <section>
      <div className="py-32 md:py-36">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white md:text-4xl">Our Clients</h2>
          <p className="max-w-[80%] md:max-w-[50%] text-sm sm:text-md md:text-base text-white/80">Hear firsthand how our solutions have boosted online success for users like you.</p>
        </div>

        {/* Reviews */}
        <div className="relative">
          <div
            ref={scrollRef}
            className={`
              ${isMobile ? "flex overflow-x-auto scrollbar-hide" : "grid grid-cols-1 md:grid-cols-2"} 
              gap-6
            `}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className={`
                  rounded-[24px] bg-transparent p-8 border border-white/20
                  ${isMobile ? "flex-none w-[80vw]" : ""}
                `}
              >
                {/* Profile */}
                <div className="flex items-center gap-x-6 gap-y-0 mb-6">
                  <div className="relative w-12 h-12">
                    {/* Client Image */}
                    <div className="absolute inset-0 rounded-full bg-[#d9d9d9] flex items-center justify-center">
                      <Image src={review.companyLogo || ""} alt={""} fill className="rounded-full object-cover w-full" />
                    </div>
                    {/* Company Logo - positioned to overlap */}
                    <div className="absolute inset-0 translate-x-4 rounded-full bg-white flex items-center justify-center">
                      <Image src={review.image || ""} alt={""} width={25} height={25} className="object-contain" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">{review.name}</h3>
                    <p className="text-sm text-white/60">{review.position}</p>
                  </div>
                </div>
                {/* Review Text */}
                <p className="w-full text-sm text-white">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {showArrows && (
            <div className="mt-8 flex justify-end gap-2">
              <button onClick={handlePrevious} disabled={currentIndex === 0} className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${currentIndex === 0 ? "bg-[#2b2b2b] cursor-not-allowed" : "bg-[#2b2b2b] hover:bg-[#3b3b3b]"}`} aria-label="Previous review">
                <ArrowRight className="h-5 w-5 rotate-180 text-white" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= reviews.length - 2}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors ${currentIndex >= reviews.length - 2 ? "bg-[#2b2b2b] cursor-not-allowed" : "bg-red-600 hover:bg-red-700"}`}
                aria-label="Next review"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
