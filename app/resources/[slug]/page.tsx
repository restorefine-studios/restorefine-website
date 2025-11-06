import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getEntry } from "@/lib/contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

export async function generateStaticParams() {
  const blogIds = ['1GbQtiZFH0JMacfoA0lykv', '30ejQTBPwJeuMBmpd30dWk'];
  return blogIds.map((id) => ({
    slug: id,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const entry = await getEntry(params.slug);

  if (!entry) {
    notFound()
  }

  const title = entry.fields?.title || 'Blog Title';
  const author = entry.fields?.authorName || 'Author';
  const authorImage = entry.fields?.authorImage ? 'https:' + entry.fields.authorImage.fields.file.url : '/placeholder.svg';
  const thumbnail = entry.fields?.blogThumbnail ? 'https:' + entry.fields.blogThumbnail.fields.file.url : '/placeholder.svg';
  const dateRaw = entry.fields?.blogDate || 'Date';
  const date = new Date(dateRaw).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

  const blogContent = entry.fields?.blogContent;



  return (
    <main>
     
      <section className="relative h-[500px] w-full">
        <div className="">
          <Image src={thumbnail} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

       <div className="max-w-3xl relative z-10 container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
          <div className="flex items-center gap-3 mt-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-[#d9d9d9]">
              <Image
                src={authorImage}
                alt={author}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div className="flex items-center text-white text-sm">
              <span>{author}</span>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </div>
          </div>
        </div>

     
      <section className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            {blogContent ? documentToReactComponents(blogContent, {
              renderNode: {
                [BLOCKS.EMBEDDED_ASSET]: (node) => (
                  <div className="my-8">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={'https:' + node.data.target.fields.file.url}
                        alt={node.data.target.fields.title || ''}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </div>
                ),
              },
              renderText: (text) => text.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < text.split('\n').length - 1 && <br />}
                </span>
              )),
            }) : <p>No content available.</p>}
          </div>

          <div className="mt-12 pt-8 border-t border-[#464646]">
            <Link href="/resources" className="text-[#999999] hover:text-white transition-colors">
              ← Back to all posts
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
