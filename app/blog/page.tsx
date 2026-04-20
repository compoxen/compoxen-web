import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog'
import { BRAND } from '@/lib/constants'
import { getBreadcrumbSchema } from '@/lib/schema'

const URL = '/blog'

export const metadata: Metadata = {
  title: 'Compoxen Blog — Composite Fencing Guides, Comparisons, and Cost Notes',
  description:
    'Editorial guides on composite fencing — material science, comparisons to wood and vinyl and metal, cost over 10 years, climate-specific specifications, and installation walkthroughs.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Compoxen Blog',
    description: 'Editorial guides on composite fencing.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-1.jpg', width: 1200, height: 630, alt: 'Compoxen composite fence' }],
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Compoxen Blog',
  url: BRAND.url + URL,
  publisher: { '@type': 'Organization', name: BRAND.name, url: BRAND.url },
  blogPost: BLOG_POSTS.map(p => ({
    '@type': 'BlogPosting',
    headline: p.title,
    url: `${BRAND.url}/blog/${p.slug}`,
    datePublished: p.publishedDate,
    dateModified: p.updatedDate ?? p.publishedDate,
    image: `${BRAND.url}${p.image}`,
    description: p.description,
    author: { '@type': 'Organization', name: BRAND.name },
  })),
}

export default function BlogIndex() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate))
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <SchemaScript
        data={[
          blogSchema,
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Editorial"
        title={<>Composite fencing, <span className="text-gradient-light">explained</span></>}
        subtitle="Honest guides on material, cost, climate, and installation — from the team that builds the fence."
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: URL }]} />

      <section className="bg-enterprise-50 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Category filter (anchor jumps; static) */}
          <nav aria-label="Blog categories" className="mt-10 mb-12 flex flex-wrap gap-2">
            <a href="#all" className="text-xs font-medium px-3 py-1.5 rounded-full bg-enterprise-950 text-white">All</a>
            {BLOG_CATEGORIES.map(cat => (
              <a
                key={cat}
                href={`#${slugify(cat)}`}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-enterprise-950/8 text-enterprise-950/70 hover:bg-enterprise-950 hover:text-white transition-colors"
              >
                {cat}
              </a>
            ))}
          </nav>

          {/* Featured */}
          <article className="mb-16 group" id="all">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 relative aspect-[16/10] rounded-3xl overflow-hidden bg-enterprise-950">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-2">
                  <span className="text-xs font-semibold text-brand-amber uppercase tracking-wider">
                    {featured.category} · Latest
                  </span>
                  <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-enterprise-950 tracking-tight leading-tight group-hover:text-brand-amber transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-enterprise-950/60 leading-relaxed">{featured.description}</p>
                  <p className="mt-4 text-xs text-enterprise-950/40">
                    <time dateTime={featured.publishedDate}>{formatDate(featured.publishedDate)}</time>
                    {' · '}
                    {featured.readMinutes} min read
                  </p>
                </div>
              </div>
            </Link>
          </article>

          {/* Grouped by category */}
          {BLOG_CATEGORIES.map(cat => {
            const catPosts = rest.filter(p => p.category === cat)
            if (!catPosts.length) return null
            return (
              <section key={cat} id={slugify(cat)} className="mb-16 scroll-mt-32">
                <h2 className="text-xl md:text-2xl font-semibold text-enterprise-950 tracking-tight mb-6">
                  {cat}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catPosts.map(post => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </>
  )
}

function PostCard({ post }: { post: typeof BLOG_POSTS[number] }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block bg-white border border-enterprise-950/8 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative aspect-[16/10] bg-enterprise-950">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <span className="text-[11px] font-semibold text-brand-amber uppercase tracking-wider">
            {post.category}
          </span>
          <h3 className="mt-2 text-base md:text-lg font-semibold text-enterprise-950 leading-snug group-hover:text-brand-amber transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-enterprise-950/60 leading-relaxed line-clamp-3">{post.description}</p>
          <p className="mt-3 text-xs text-enterprise-950/40">
            <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
            {' · '}
            {post.readMinutes} min read
          </p>
        </div>
      </Link>
    </article>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
