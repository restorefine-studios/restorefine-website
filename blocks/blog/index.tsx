"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blogContent";

export function BlogPage() {
  // Featured posts (first 2)
  const featuredPosts = blogPosts.slice(0, 2);
  // Regular posts (rest)
  const regularPosts = blogPosts.slice(2);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 z-0">
          <Image src="/resourcesbg.webp" alt="Background pattern" fill className="object-cover" priority />
        </div>
        <div className="relative z-10 container mx-auto px-4 pt-32 md:pt-40">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
            The First Word
            <br />
            <span className="text-white/70">In What&apos;s Next</span>
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
          <Link href="/reviews" className="text-[#999999] font-medium px-6 py-2 rounded-full bg-[#292929] hover:bg-white hover:text-black transition-colors">
            Reviews
          </Link>
          <Link href="/events" className="text-[#999999] font-medium px-6 py-2 rounded-full bg-[#292929] hover:bg-white hover:text-black transition-colors">
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
                <div className="bg-[#000000] rounded-lg overflow-hidden border border-white/20">
                  <div className="aspect-[16/9] relative">
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
                <div className="bg-[#000000] rounded-lg overflow-hidden border border-white/20">
                  <div className="aspect-[16/9] relative">
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
    </main>
  );
}
