import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import MarkdownLite from '@/components/content/MarkdownLite'
import { Prose, ContentSection, ClosingCTA } from '@/components/content/Primitives'
import { BLOG_POSTS, getPostBySlug, getRelatedPosts, BLOG_AUTHOR } from '@/lib/blog'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article not found' }
  const url = `https://compoxen.com/blog/${post.slug}`
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate ?? post.publishedDate,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.imageAlt }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const url = `/blog/${post.slug}`
  const related = getRelatedPosts(post.slug, 3)

  return (
    <>
      <SchemaScript
        data={[
          getArticleSchema({
            type: 'BlogPosting',
            url,
            headline: post.title,
            description: post.description,
            image: post.image,
            datePublished: post.publishedDate,
            dateModified: post.updatedDate ?? post.publishedDate,
            authorName: BLOG_AUTHOR,
            section: post.category,
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url },
          ]),
        ]}
      />

      <PageHero
        badge={post.category}
        title={post.title}
        subtitle={post.description}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: url },
        ]}
      />

      {/* Cover image */}
      <div className="bg-enterprise-50 pt-8">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden bg-enterprise-950">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-xs text-enterprise-950/40">
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            {post.updatedDate && post.updatedDate !== post.publishedDate && (
              <> · Updated <time dateTime={post.updatedDate}>{formatDate(post.updatedDate)}</time></>
            )}
            {' · '}
            {post.readMinutes} min read
            {' · '}
            By {BLOG_AUTHOR}
          </p>
        </div>
      </div>

      <ContentSection>
        <Prose>
          <MarkdownLite source={post.body} />
        </Prose>
      </ContentSection>

      {related.length > 0 && (
        <section className="bg-white border-t border-enterprise-950/4 py-16">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-2xl font-semibold text-enterprise-950 mb-8">More in {post.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block bg-enterprise-50 border border-enterprise-950/8 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[16/10] bg-enterprise-950">
                    <Image
                      src={r.image}
                      alt={r.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-brand-amber uppercase tracking-wider">{r.category}</span>
                    <h3 className="mt-2 text-base font-semibold text-enterprise-950 group-hover:text-brand-amber transition-colors leading-snug">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCTA />
    </>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
