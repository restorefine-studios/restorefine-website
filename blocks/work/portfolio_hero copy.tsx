import { portfolioItems } from "@/lib/portfolio";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function PortfolioHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20">
      {/* Left Content */}
      <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-2 backdrop-blur-sm mb-4"></div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
            <span className="inline-block bg-gradient-to-b from-slate-50 via-red-700 to-red-900 bg-clip-text text-transparent">Portfolioœ</span>
            <br />
            <span className="inline-block bg-gradient-to-b from-white to-[#6D6C6D] h-20 bg-clip-text text-transparent">Beyond Digital</span>
          </h1>

          <p className="text-gray-400 -mt-10 text-base sm:text-lg max-w-md">Showcasing our finest work in hospitality branding, digital marketing, and creative excellence. From restaurants to hotels, we transform brands into unforgettable experiences.</p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">WHO WE ARE</button>
            <Link href="/contact" className="px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Side - Scrolling Cards Grid */}
        <div className="relative h-[600px] overflow-hidden">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Column 1 - Scroll Up */}
            <div className="flex flex-col gap-4 animate-scroll-up">
              {/* ROAS Card */}
              <div className="bg-gradient-to-br from-[#8B7355]/20 to-[#6B5544]/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <div className="text-sm text-white/60 mb-2">ROAS</div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-4xl font-bold text-white">340%</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-500">⚡</span>
                  </div>
                </div>
                <div className="text-xs text-white/40">is ROAS this month of our customers</div>
              </div>

              {/* ROAS Badge */}
              <div className="bg-gradient-to-br from-[#9ACD32]/30 to-[#7CB342]/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-[#9ACD32]/40 flex items-center justify-center">
                <span className="text-[#9ACD32] font-bold text-lg">+ 340% ROAS</span>
              </div>

              {/* Growth Card */}
              <div className="bg-gradient-to-br from-[#8B9D83]/20 to-[#6B7D63]/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <div className="text-sm text-white/60 mb-2">Growth</div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-4xl font-bold text-white">96%</div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-white/40">Average increase in ROAS this month of our customers</div>
              </div>

              {/* Portfolio Image */}
              <div className="relative rounded-3xl overflow-hidden h-48">
                <Image src={portfolioItems[0]?.thumbnail || "/placeholder.svg"} alt="Project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-medium">{portfolioItems[0]?.title || "Project"}</div>
                  <div className="text-white/60 text-sm">{portfolioItems[0]?.category}</div>
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="bg-gradient-to-br from-[#8B7355]/20 to-[#6B5544]/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <div className="text-sm text-white/60 mb-2">ROAS</div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-4xl font-bold text-white">340%</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <span className="text-yellow-500">⚡</span>
                  </div>
                </div>
                <div className="text-xs text-white/40">is ROAS this month of our customers</div>
              </div>
            </div>

            {/* Column 2 - Scroll Down */}
            <div className="flex flex-col gap-4 animate-scroll-down">
              {/* Medellum Card */}
              <div className="relative rounded-3xl overflow-hidden h-48">
                <Image src={portfolioItems[1]?.thumbnail || "/placeholder.svg"} alt="Project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-medium">{portfolioItems[1]?.title || "Medellum"}</div>
                  <div className="text-white/60 text-sm">{portfolioItems[1]?.category}</div>
                </div>
              </div>

              {/* Growth Badge */}
              <div className="bg-gradient-to-br from-[#A8D5BA]/30 to-[#7CB342]/20 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                <div className="text-sm text-white/60 mb-2">Growth</div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-4xl font-bold text-white">96%</div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </div>
                </div>
                <div className="text-xs text-white/40">Average increase in ROAS this month of our customers</div>
              </div>

              {/* Globe Icon Card */}
              <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/30 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex items-center justify-center aspect-square">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>

              {/* ROAS Badge Small */}
              <div className="bg-gradient-to-br from-[#9ACD32]/30 to-[#7CB342]/20 backdrop-blur-md rounded-2xl px-6 py-3 border border-[#9ACD32]/40 flex items-center justify-center">
                <span className="text-[#9ACD32] font-bold">+ 340% ROAS</span>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="relative rounded-3xl overflow-hidden h-48">
                <Image src={portfolioItems[1]?.thumbnail || "/placeholder.svg"} alt="Project" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-medium">{portfolioItems[1]?.title || "Medellum"}</div>
                  <div className="text-white/60 text-sm">{portfolioItems[1]?.category}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
