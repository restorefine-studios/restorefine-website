"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { portfolioItems, PortfolioItem } from "@/lib/portfolio";
import { ArrowRight, X } from "lucide-react";
import Bubble from "./BubbleUi/bubble.js";
import { data } from "./BubbleUi/data.js";
// import PortfolioHero from "./portfolio_hero";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<PortfolioItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const workSectionRef = useRef<HTMLDivElement>(null);

  // Define categories
  const categories = ["All", "Branding", "Menus", "Media", "Web & Mobile"];

  // Filter bubbles based on selected category
  const filteredData = selectedCategory === "All" ? data.map((item) => item.element) : data.filter((item) => item.category === selectedCategory).map((item) => item.element);

  // Function to get portfolio items for a specific client
  const getClientWork = (clientName: string) => {
    if (!clientName) return [];

    // Clean the client name for matching
    const cleanClientName = clientName
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim();

    // Check for exact matches with portfolio item titles/descriptions
    return portfolioItems.filter((item) => {
      const itemTitle = item.title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
      const itemDescription = item.description
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim();
      const itemId = item.id
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .trim();

      // Check for various matching patterns
      return (
        itemTitle.includes(cleanClientName) ||
        itemDescription.includes(cleanClientName) ||
        itemId.includes(cleanClientName) ||
        cleanClientName.includes(itemTitle.split(" ")[0]) || // First word match
        (cleanClientName === "quiknest logo design" && itemId.includes("quiknest")) ||
        (cleanClientName === "masala moves by luna shree" && itemId.includes("masala"))
      );
    });
  };

  // Handle client selection from bubble UI - display work inline
  const handleClientSelect = (clientData: any) => {
    let clientName = "";

    // Extract client name from the bubble data
    if (clientData && clientData.props && clientData.props.alt) {
      clientName = clientData.props.alt;
    } else if (typeof clientData === "string") {
      clientName = clientData;
    } else {
      console.log("Client data:", clientData); // For debugging
      return;
    }

    // Find matching portfolio item and display inline
    const clientWork = getClientWork(clientName);

    if (clientWork.length > 0) {
      // Set the selected work to display below
      setSelectedWork(clientWork[0]);

      // Scroll to the work section after a short delay to allow state update
      setTimeout(() => {
        workSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      // If no specific work found, clear selection
      console.log(`No work found for ${clientName}`);
      setSelectedWork(null);
    }
  };

  return (
    <section className="w-full bg-black text-white py-20 px-1 md:px-8 lg:px-16">
      {/* Header */}

      {/* Interactive Bubble UI Section */}
      <div className="">
        <Bubble onClientSelect={handleClientSelect} bubbleData={filteredData} />
      </div>
      <div className="-mt-12">
        <div ref={workSectionRef} className="note text-center text-gray-400 mb-8 opacity-35 ">
          <p>Click on any client logo below to view their project details</p>
        </div>
        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full border transition-all duration-300 ${selectedCategory === category ? "bg-red-600 border-red-600 text-white" : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20"}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Work Display */}
      {selectedWork && (
        <section className="mt-20 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">{selectedWork.title}</h3>
              <div className="flex items-center gap-4">
                <span className="text-red-400 font-medium">{selectedWork.category}</span>
                <span className="text-white/50">{selectedWork.date}</span>
              </div>
            </div>
            <button onClick={() => setSelectedWork(null)} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors">
              <X className="w-4 h-4" />
              Close
            </button>
          </div>

          {/* Project Description */}
          <div className="mb-12">
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl">{selectedWork.description}</p>
          </div>

          {/* Project Images Gallery */}
          <div className="grid grid-cols-1 gap-8">
            {selectedWork.images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden bg-white/5">
                <div className="aspect-video relative">
                  <Image src={image} alt={`${selectedWork.title} - Image ${index + 1}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* View Full Project Link */}
          {/* <div className="text-center mt-12">
            <Link href={`/portfolio/${selectedWork.id}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-medium transition-colors">
              View Full Project Details
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div> */}
        </section>
      )}

      {/* Call to action when no work is selected */}
    </section>
  );
}
