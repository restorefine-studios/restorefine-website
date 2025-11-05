"use client"

import { useEffect, useRef, useState } from "react"

interface StrategySectionProps {
  strategyHeadline: string;
  strategySubtext: string;
  strategies: any[];
}

export function StrategySection({ strategyHeadline, strategySubtext, strategies }: StrategySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const sectionTop = sectionRef.current.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      const sectionHeight = sectionRef.current.offsetHeight

      // Calculate which item should be active based on scroll position
      const itemHeight = sectionHeight / strategies.length
      const scrollPosition = (windowHeight / 2 - sectionTop) / itemHeight

      const newActiveIndex = Math.min(Math.max(Math.floor(scrollPosition), 0), strategies.length - 1)

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeIndex])

  return (
    <section ref={sectionRef} className="py-16 bg-[#000000] min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="mx-auto mb-16">
          <h2 className="text-2xl font-medium text-white md:text-2xl lg:text-3xl">{strategyHeadline}</h2>
          <p className="text-white/80">{strategySubtext}</p>
        </div>

        <div className="relative max-w-md mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-white/20"></div>

          {strategies.map((strategy: any, index: number) => (
            <div
              key={index}
              ref={(el) => { itemRefs.current[index] = el }}
              className={`flex items-start gap-8 py-12 transition-colors duration-300`}
            >
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                    index === activeIndex ? "border-white text-white" : "border-[#999999]/40 text-[#999999]/40"
                  }`}
                >
                  <span className="text-xl font-medium">{index + 1}</span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className={`text-xl font-medium ${index === activeIndex ? "text-[red]" : "text-[#999999]"}`}>
                  {strategy.title}
                </h3>
                <p className={`text-sm ${index === activeIndex ? "text-white/80 font-medium" : "text-[#999999]/50"}`}>
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
