"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { portfolioItems } from "@/lib/portfolio";
import newtag from "@/public/newtag.svg";
import { ArrowRight } from "lucide-react";
import Carousel from "./carousel";
import PortfolioHero from "./portfolio_hero";
// import PortfolioHero from "./portfolio_hero";

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [currentClientPage, setCurrentClientPage] = useState(0);

  // Client logos data
  const clients = [
    { name: "FedEx", logo: "https://logo.clearbit.com/fedex.com" },
    { name: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Stripe", logo: "https://logo.clearbit.com/stripe.com" },
    { name: "Netflix", logo: "https://logo.clearbit.com/netflix.com" },
  ];

  const clientsPerPage = 5;
  const totalPages = Math.ceil(clients.length / clientsPerPage);
  const displayedClients = clients.slice(currentClientPage * clientsPerPage, (currentClientPage + 1) * clientsPerPage);

  const angleStep = 360 / clients.length; // 72 degrees for 5 items

  // Navigation functions - Rotate the carousel
  const nextSlide = () => {
    setRotation((prev) => prev + angleStep);
  };

  const prevSlide = () => {
    setRotation((prev) => prev - angleStep);
  };

  // Client navigation
  const nextClientPage = () => {
    setCurrentClientPage((prev) => (prev + 1) % totalPages);
  };

  const prevClientPage = () => {
    setCurrentClientPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Categories for filtering
  const categories = ["Branding", "Menus", "Media", "Web & Mobile"];

  // Sort items by date to ensure most recent is first
  const sortedItems = [...portfolioItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter items based on selected category
  const filteredItems = selectedCategory ? sortedItems.filter((item) => item.category === selectedCategory) : sortedItems;

  return (
    <>
      <PortfolioHero />

      {/* New Hero Section with Scrolling Cards */}

      {/* Trusted By Section - Spotlight Grid with Magnetic Effect */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden relative">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Radial Gradient Spotlight */}
        <div className="absolute inset-0 bg-gradient-radial from-red-500/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 backdrop-blur-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-sm text-red-100">Powering Global Brands</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium mb-4">
              <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] h-20 bg-clip-text text-transparent">Trusted by the Best</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">Join industry leaders who trust us to elevate their brand</p>
          </div>

          {/* Bento Grid Style */}
          <div className="max-w-7xl mx-auto relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {displayedClients.map((client, index) => (
                <div
                  key={client.name}
                  className="group relative perspective-1000"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Card Container */}
                  <div className="relative h-[160px] transform-gpu transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                    {/* Spotlight effect that follows cursor area */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-purple-500/0 group-hover:from-red-500/10 group-hover:via-purple-500/5 group-hover:to-red-500/10 blur-xl transition-all duration-500" />

                    {/* Main Card */}
                    <div className="relative h-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md rounded-2xl border border-white/[0.08] overflow-hidden group-hover:border-red-500/30 transition-all duration-500">
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>

                      {/* Inner Glow */}
                      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-red-500/0 to-transparent group-hover:from-red-500/5 transition-all duration-500" />

                      {/* Logo Container */}
                      <div className="relative h-full flex items-center justify-center p-6">
                        <div className="relative transform transition-transform duration-500 group-hover:scale-110">
                          <Image src={client.logo || "/placeholder.svg"} alt={client.name} width={120} height={50} className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />

                          {/* Logo Glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="absolute inset-0 bg-red-500/20 blur-xl" />
                          </div>
                        </div>
                      </div>

                      {/* Corner Highlights */}
                      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-red-500/0 group-hover:from-red-500/20 to-transparent transition-all duration-500" />
                      <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-purple-500/0 group-hover:from-purple-500/20 to-transparent transition-all duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 mt-12">
                {/* Previous Button */}
                <button onClick={prevClientPage} className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/0 to-transparent group-hover:from-red-500/10 transition-all duration-300" />
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Page Indicators */}
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button key={index} onClick={() => setCurrentClientPage(index)} className={`transition-all duration-300 rounded-full ${index === currentClientPage ? "w-8 h-2 bg-gradient-to-r from-red-500 to-purple-500" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
                  ))}
                </div>

                {/* Next Button */}
                <button onClick={nextClientPage} className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-md border border-white/[0.08] hover:border-red-500/30 transition-all duration-300 hover:scale-110">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/0 to-transparent group-hover:from-red-500/10 transition-all duration-300" />
                  <svg className="w-5 h-5 text-white/60 group-hover:text-white transition-colors absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Stats Bar */}
          {/* <div className="mt-20 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-white/[0.03] via-white/[0.05] to-white/[0.03] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-8">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-sm text-gray-500">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-2">98%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm text-gray-500">Global Brands</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Portfolio Grid Section - Bento Style */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-950 to-black">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm mb-6">
              <span className="text-sm text-white/80">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-6">Our Latest Projects</h2>
          </div>

          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-full border transition-all duration-300 ${
                selectedCategory === null ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30" : "bg-white/5 text-white/70 border-white/10 hover:border-red-600/50 hover:text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              All Projects
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  selectedCategory === category ? "bg-red-600 text-white border-red-600 shadow-lg shadow-red-600/30" : "bg-white/5 text-white/70 border-white/10 hover:border-red-600/50 hover:text-white hover:bg-white/10 backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Bento Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
              {filteredItems.map((item, index) => {
                // Define bento grid layout patterns
                const isLarge = index === 0;
                const isTall = index === 1 || index === 4;
                const isWide = index === 2;

                return (
                  <Link
                    key={item.id}
                    href={`/portfolio/${item.id}`}
                    className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                      isLarge ? "md:col-span-2 lg:col-span-2 md:row-span-2 h-[400px] md:h-[600px]" : isTall ? "md:row-span-2 h-[400px] md:h-[600px]" : isWide ? "md:col-span-2 h-[300px]" : "h-[300px]"
                    }`}
                  >
                    {/* Background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/40 to-black/80 z-10 transition-opacity duration-500 group-hover:opacity-70" />

                    {/* Strong black gradient for text readability on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500" />

                    {/* Image */}
                    <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

                    {/* "New" Badge */}
                    {index === 0 && (
                      <div className="absolute left-6 top-6 z-20">
                        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-red-600/50 flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                          </span>
                          New
                        </div>
                      </div>
                    )}

                    {/* Hover gradient border effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                      <div className="absolute inset-0 rounded-3xl border-2 border-red-500/50 shadow-[0_0_30px_rgba(239,68,68,0.3)]" />
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
                      {/* Category badge */}
                      <div className="mb-3 inline-flex">
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/20">{item.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 transform transition-all duration-500 group-hover:translate-x-2">{item.title}</h3>

                      {/* Description - shows on hover */}
                      <p className="text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md">{item.description || "Explore this amazing project from our portfolio"}</p>

                      {/* Arrow icon */}
                      <div className="mt-4 inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-2">
                        <span className="text-sm font-medium">View Project</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No Projects Found</h3>
                <p className="text-white/50">No projects available for this category at the moment.</p>
              </div>
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#1A1A1A] to-[#0D0D0D] rounded-3xl text-center mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64"></section>
    </>
  );
}
