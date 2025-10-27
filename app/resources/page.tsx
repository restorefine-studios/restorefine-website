"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogContent";

export default function BlogPage() {
  // Featured posts (first 2)
  const featuredPosts = blogPosts.slice(0, 2);
  // Regular posts (rest)
  const regularPosts = blogPosts.slice(2);

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative h-[600px] top-0 z-0">
        <div className="">
          <Image src="/resourcesbg.webp" alt="Background pattern" fill className="object-cover opacity-50" priority />
        </div>
        <div className="relative z-10 container h-full flex flex-col items-start justify-center my-auto mx-auto ">
          <h1 className="relative z-0 text-left font-medium tracking-tight rservicehero text-4xl md:text-7xl">
            <span className="p-1 inline-block bg-gradient-to-b from-white to-[#6D6C6D] bg-clip-text text-transparent tracking-tight">
              The First Word
              <br />
              In What&apos;s Next
            </span>
          </h1>
          <p className="text-white/90 max-w-2xl mt-6">Like the quiet before a thunderclap — this is where sparks fly for bold brands, standout stories, and digital experiences worth remembering. From kitchens to code, it&apos;s all on the table.</p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4">
          <Link href="/resources" className="text-black font-medium px-6 py-2 rounded-full bg-white">
            Blog
          </Link>
          <Link href="/reviews" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} aria-disabled="true" className="cursor-not-allowed text-[#999999] font-medium px-6 py-2 rounded-full bg-[#292929] hover:bg-white hover:text-black transition-colors">
            Reviews
          </Link>
          <Link href="/events" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()} aria-disabled="true" className="cursor-not-allowed text-[#999999] font-medium px-6 py-2 rounded-full bg-[#292929] hover:bg-white hover:text-black transition-colors">
            Events
          </Link>
        </div>
      </div>

      {/* Featured Posts (2 columns) */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredPosts.map((post) => (
            <Link href={`/resources/${post.slug}`} key={post.slug} className="group">
              <div>
                {/* Thumbnail with border */}
                <div className="bg-transparent p-4 rounded-lg overflow-hidden border border-white/20">
                  <div className="aspect-[16/9] relative ">
                    <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </div>

                {/* Content below thumbnail */}
                <div className="pt-6 pb-4">
                  <h3 className="text-xl font-medium text-white mb-3">{post.title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#d9d9d9]">
                      <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} width={40} height={40} className="object-cover" />
                    </div>
                    <div className="flex items-center text-[#999999] text-sm">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Regular Posts (3 columns) */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Link href={`/resources/${post.slug}`} key={post.slug} className="group">
              <div>
                {/* Thumbnail with border */}
                <div className="bg-transparent p-4 rounded-lg overflow-hidden border border-white/20">
                  <div className="aspect-[16/9] relative">
                    <Image src={post.thumbnail || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </div>

                {/* Content below thumbnail */}
                <div className="pt-6 pb-4">
                  <h3 className="text-lg font-medium text-white mb-3">{post.title}</h3>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-[#d9d9d9]">
                      <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} width={50} height={50} className="object-cover" />
                    </div>
                    <div className="flex items-center text-[#999999] text-sm">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
