"use client";

import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const clients = [
    { name: "FedEx", logo: "https://logo.clearbit.com/fedex.com" },
    { name: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleDragEnd(dragOffset);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    handleDragEnd(dragOffset);
  };

  const handleDragEnd = (offset: number) => {
    const threshold = 50; // minimum drag distance to trigger slide change

    if (Math.abs(offset) > threshold) {
      if (offset > 0) {
        // Dragged right = previous slide
        prevSlide();
      } else {
        // Dragged left = next slide
        nextSlide();
      }
    }
    setDragOffset(0);
  };

  return (
    <section className=" flex items-center justify-center py-20 overflow-hidden bg-black">
      <div className="text-center mb-16 w-full absolute top-12">
        <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent mb-3">Trusted by Industry Leaders</h2>
        <p className="text-white/50 text-sm md:text-base">Brands that believe in our vision</p>
      </div>

      {/* 3D Carousel Container - Added drag event listeners */}
      <div
        ref={containerRef}
        className="relative h-[300px] flex items-center justify-center px-16 sm:px-20 w-full cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "1200px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={prevSlide}
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 border-2 border-red-500 flex items-center justify-center hover:bg-red-700 hover:border-red-600 transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-red-600/50"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div
          className="relative w-full max-w-6xl h-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {clients.map((client, index) => {
            const position = (index - currentIndex + clients.length) % clients.length;

            let positionClass = "";
            let cardSize = "";
            let cardShadow = "";
            let imageWidth = 140;
            let imageHeight = 60;

            if (position === 0) {
              positionClass = "left-1/2 -translate-x-1/2 scale-100 z-20";
              cardSize = "w-[200px] h-[130px] sm:w-[280px] sm:h-[180px] md:w-[340px] md:h-[220px]";
              cardShadow = "shadow-xl";
              imageWidth = 200;
              imageHeight = 80;
            } else if (position === 1) {
              positionClass = "right-[25%] sm:right-[32%] translate-x-1/2 scale-[0.85] sm:scale-[0.9] z-10";
              cardSize = "w-[160px] h-[100px] sm:w-[230px] sm:h-[150px] md:w-[280px] md:h-[180px]";
              cardShadow = "shadow-[-6px_0_12px_-2px_rgba(0,0,0,0.2)]";
              imageWidth = 160;
              imageHeight = 60;
            } else if (position === 2) {
              positionClass = "hidden sm:block right-[15%] translate-x-1/2 scale-[0.75] z-0 opacity-70";
              cardSize = "w-[200px] h-[130px] md:w-[240px] md:h-[160px]";
              cardShadow = "shadow-[-8px_0_15px_-3px_rgba(0,0,0,0.3)]";
              imageWidth = 140;
              imageHeight = 50;
            } else if (position === 3) {
              positionClass = "hidden sm:block left-[15%] -translate-x-1/2 scale-[0.75] z-0 opacity-70";
              cardSize = "w-[200px] h-[130px] md:w-[240px] md:h-[160px]";
              cardShadow = "shadow-[8px_0_15px_-3px_rgba(0,0,0,0.3)]";
              imageWidth = 140;
              imageHeight = 50;
            } else if (position === 4) {
              positionClass = "left-[25%] sm:left-[32%] -translate-x-1/2 scale-[0.85] sm:scale-[0.9] z-10";
              cardSize = "w-[160px] h-[100px] sm:w-[230px] sm:h-[150px] md:w-[280px] md:h-[180px]";
              cardShadow = "shadow-[6px_0_12px_-2px_rgba(0,0,0,0.2)]";
              imageWidth = 160;
              imageHeight = 60;
            }

            return (
              <div
                key={index}
                className={`absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-out ${positionClass}`}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <div className={`${cardSize} bg-white rounded-2xl sm:rounded-3xl ${position === 0 ? "border-2 border-gray-300" : "border border-gray-200"} flex items-center justify-center ${cardShadow} overflow-hidden transition-all duration-700`}>
                  <Image src={client.logo || "/placeholder.svg"} alt={client.name} width={imageWidth} height={imageHeight} className="object-contain w-[80px] sm:w-[120px] md:w-[160px] h-auto px-2" />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 border-2 border-red-500 flex items-center justify-center hover:bg-red-700 hover:border-red-600 transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-red-600/50"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
