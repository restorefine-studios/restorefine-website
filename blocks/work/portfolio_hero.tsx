import { portfolioItems } from "@/lib/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <></>

    // <>
    //   <section className="mt-32 sm:mt-32 md:mt-44 relative min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 md:py-20 overflow-hidden">
    //     {/* Background Gradient */}
    //     <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-0" />

    //     {/* Animated circles in background - Much larger and premium */}
    //     <div className="absolute inset-0 overflow-hidden z-0">
    //       {/* Top Left Circle - Massive */}
    //       <div className="absolute -top-48 -left-48 sm:-top-64 sm:-left-64 md:-top-96 md:-left-96 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-red-600/15 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
    //       {/* Bottom Right Circle - Even Larger */}
    //       <div
    //         className="absolute -bottom-48 -right-48 sm:-bottom-64 sm:-right-64 md:-bottom-96 md:-right-96 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] md:w-[1000px] md:h-[1000px] bg-red-600/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] animate-pulse"
    //         style={{ animationDuration: "6s", animationDelay: "1s" }}
    //       />
    //       {/* Center Circle - Subtle */}
    //       <div
    //         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] bg-red-600/5 rounded-full blur-[60px] sm:blur-[80px] md:blur-[100px] animate-pulse"
    //         style={{ animationDuration: "5s", animationDelay: "2s" }}
    //       />
    //     </div>

    //     {/* Badge */}
    //     <div className="relative z-10 mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 backdrop-blur-sm">
    //       <span className="relative flex h-2 w-2">
    //         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
    //         <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
    //       </span>
    //       <span className="text-xs sm:text-sm text-white/80">From strategy to captivating content</span>
    //     </div>

    //     {/* Main Heading */}
    //     <h1 className="relative z-10 mb-4 sm:mb-6 text-center font-medium tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl max-w-5xl leading-tight">
    //       <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">Portfolio</span>
    //       <br />
    //       <span className="inline-block bg-gradient-to-b from-white via-red-500/500 to-red-600 bg-clip-text text-transparent">Hospitality Success</span>
    //       <br />

    //       <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent">Beyond Digital</span>
    //     </h1>

    //     {/* Description */}
    //     <p className="relative z-10 mx-auto mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base md:text-lg text-white/60 leading-relaxed px-2">
    //       Bringing restaurants, cafes, and hospitality brands to life. We handle the creative, your business sees the ROI. Now is the time to captivate your customers with a digital transformation and innovative approach.
    //     </p>

    //     {/* CTA Button */}
    //     <Link href="/contact" className="relative z-10 group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-red-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-white transition-all hover:bg-red-700 hover:scale-105">
    //       Schedule A Call
    //       <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
    //     </Link>

    //     {/* Stats Section */}
    //     <div className="relative z-10 mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto w-full">
    //       <div className="text-center">
    //         <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent mb-1 sm:mb-2">50+</div>
    //         <div className="text-xs sm:text-sm text-white/50">Projects Delivered</div>
    //       </div>
    //       <div className="text-center">
    //         <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent mb-1 sm:mb-2">30+</div>
    //         <div className="text-xs sm:text-sm text-white/50">Happy Clients</div>
    //       </div>
    //       <div className="text-center">
    //         <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent mb-1 sm:mb-2">100%</div>
    //         <div className="text-xs sm:text-sm text-white/50">Client Satisfaction</div>
    //       </div>
    //       <div className="text-center">
    //         <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent mb-1 sm:mb-2">4</div>
    //         <div className="text-xs sm:text-sm text-white/50">Core Services</div>
    //       </div>
    //     </div>
    //   </section>
    // </>
  );
}
