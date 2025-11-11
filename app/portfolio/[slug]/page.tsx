import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/lib/portfolio";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.id,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioItems.find((item) => item.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-purple-600/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back button */}
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Project metadata */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Tag className="w-4 h-4 text-red-500" />
              <span className="text-sm text-white/80">{project.category}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
              <Calendar className="w-4 h-4 text-red-500" />
              <span className="text-sm text-white/80">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Project header */}
          <header className="max-w-4xl mb-12">
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">{project.title}</h1>
            <p className="text-lg lg:text-xl leading-relaxed text-white/70">{project.description}</p>
          </header>
        </div>
      </div>

      {/* Images Gallery Section */}
      <div className="container mx-auto px-4 pb-32">
        <div className="max-w-7xl mx-auto space-y-8">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-700 hover:shadow-2xl hover:shadow-red-500/20"
              style={{
                animation: "fadeInUp 0.6s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              {/* Image number badge */}
              <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                <span className="text-sm font-medium text-white">{String(index + 1).padStart(2, "0")}</span>
              </div>

              {/* Image container */}
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <Image src={image || "/placeholder.svg"} alt={`${project.title} - Image ${index + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px" />

                {/* Zoom indicator on hover */}
                <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                    <span className="text-sm text-white">View Full Size</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Navigation */}
        <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            {/* Previous project */}
            {portfolioItems.indexOf(project) > 0 && (
              <Link href={`/portfolio/${portfolioItems[portfolioItems.indexOf(project) - 1].id}`} className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                <ArrowLeft className="w-5 h-5 text-red-500 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <p className="text-xs text-white/50 mb-1">Previous Project</p>
                  <p className="text-white font-medium">{portfolioItems[portfolioItems.indexOf(project) - 1].title}</p>
                </div>
              </Link>
            )}

            {/* Back to portfolio - Elegant glassmorphic design */}
            <Link href="/portfolio" className="group relative px-12 py-5 rounded-[32px] overflow-hidden transition-all duration-500 hover:scale-105">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/80 via-gray-900/90 to-black/95 backdrop-blur-xl" />

              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50" />

              {/* Border effect */}
              <div className="absolute inset-0 rounded-[32px] border border-white/10 group-hover:border-red-500/30 transition-colors duration-500" />

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-red-600/20 blur-xl" />
              </div>

              {/* Text */}
              <span className="relative text-white font-semibold text-lg tracking-wide">View All Projects</span>
            </Link>

            {/* Next project */}
            {portfolioItems.indexOf(project) < portfolioItems.length - 1 && (
              <Link href={`/portfolio/${portfolioItems[portfolioItems.indexOf(project) + 1].id}`} className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:bg-white/10 w-full sm:w-auto">
                <div className="text-right">
                  <p className="text-xs text-white/50 mb-1">Next Project</p>
                  <p className="text-white font-medium">{portfolioItems[portfolioItems.indexOf(project) + 1].title}</p>
                </div>
                <ArrowLeft className="w-5 h-5 text-red-500 rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
