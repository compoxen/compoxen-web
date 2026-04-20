import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { FAQS, FAQ_SECTIONS } from '@/lib/faqs'
import { getFAQSchema } from '@/lib/schema'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Composite Fencing FAQ — Material, Cost, Installation, Availability',
  description:
    'Direct answers to the most common questions about Compoxen composite fencing: material science, lifecycle, cost per linear foot, installation process, and where it is available.',
  alternates: { canonical: 'https://compoxen.com/faq' },
  openGraph: {
    title: 'Composite Fencing FAQ — Compoxen',
    description: 'Direct answers about composite fencing material, cost, installation, and availability.',
    url: 'https://compoxen.com/faq',
    images: [{ url: '/images/gallery-2.jpg', width: 1200, height: 630, alt: 'Composite fencing installation' }],
  },
}

export default function FAQPage() {
  return (
    <>
      <SchemaScript data={getFAQSchema(FAQS)} />

      <PageHero
        badge="Reference"
        title={<>Composite fencing, <span className="text-gradient-light">answered</span></>}
        subtitle="Thirty direct answers about Compoxen composite fencing — material, lifecycle, cost, installation, and where you can buy it."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'Check Availability', href: '/states' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'FAQ', href: '/faq' }]} />

      <section className="bg-enterprise-50 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Quick jump nav */}
          <nav aria-label="Sections" className="mt-10 mb-12 flex flex-wrap gap-2">
            {FAQ_SECTIONS.map(section => (
              <a
                key={section}
                href={`#${slugify(section)}`}
                className="text-xs font-medium px-3 py-1.5 rounded-full bg-white border border-enterprise-950/8 text-enterprise-950/70 hover:bg-enterprise-950 hover:text-white transition-colors"
              >
                {section}
              </a>
            ))}
          </nav>

          {FAQ_SECTIONS.map(section => {
            const items = FAQS.filter(f => f.section === section)
            return (
              <section key={section} id={slugify(section)} className="mb-16 scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-semibold text-enterprise-950 tracking-tight mb-6">
                  {section}
                </h2>
                <div className="space-y-4">
                  {items.map(item => (
                    <details
                      key={item.q}
                      className="group bg-white border border-enterprise-950/8 rounded-2xl p-5 md:p-6 open:shadow-sm transition-shadow"
                    >
                      <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                        <h3 className="text-base md:text-lg font-semibold text-enterprise-950 leading-snug">
                          {item.q}
                        </h3>
                        <span
                          aria-hidden="true"
                          className="shrink-0 mt-1 w-6 h-6 rounded-full bg-enterprise-950/5 text-enterprise-950 flex items-center justify-center text-sm group-open:rotate-45 transition-transform"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-enterprise-950/70 leading-relaxed text-[15px]">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )
          })}

          {/* Closing CTA */}
          <div className="mt-12 p-8 md:p-10 bg-enterprise-950 text-white rounded-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Still have a question?</h2>
            <p className="mt-3 text-white/60 max-w-xl mx-auto">
              Get a region-specific answer in writing. A certified dealer will reply with pricing,
              lead time, and availability for your zip code.
            </p>
            <Link
              href="/get-quote"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
