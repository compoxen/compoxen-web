import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Phone, Shield, MapPin, Clock, Award, Sparkles } from 'lucide-react'

import { services, getServiceBySlug, getRelatedServices } from '@/lib/services'
import { BRAND, PRODUCT_SPECS } from '@/lib/constants'
import { getAllCities, getCityHref } from '@/lib/cities'
import {
  getBreadcrumbSchema, getCityServiceSchema, getOrganizationSchema, getFAQSchema,
} from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  const url = `${BRAND.url}/services/${service.slug}`
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: service.metaTitle, description: service.metaDescription, url },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  // Top tier-1 cities for internal linking
  const topCities = getAllCities()
    .filter(c => c.tier === 'tier1')
    .slice(0, 10)

  const related = getRelatedServices(service.slug)

  // Build a synthetic city for the schema (covers entire UT service area)
  const utahArea = {
    name: 'Utah',
    slug: 'utah',
    county: 'Salt Lake' as const,
    tier: 'tier1' as const,
    population: 3380800,
    neighborhoods: [],
    metaTitle: '',
    metaDescription: '',
  }

  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getCityServiceSchema(utahArea, service),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.shortTitle, url: `/services/${service.slug}` },
          ]),
          getFAQSchema(service.serviceFaqs),
        ]}
      />

      <PageHero
        badge={service.tagline}
        title={
          <>
            {service.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="text-gradient-light">{service.title.split(' ').slice(-1)}</span>
          </>
        }
        subtitle={service.heroDescription}
        primaryCta={{ label: 'Get a Free Quote', href: '/get-quote' }}
        secondaryCta={{ label: `Call ${BRAND.phone}`, href: BRAND.phoneHref }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-6xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { icon: Shield, label: PRODUCT_SPECS.warranty, sub: 'Material warranty' },
              { icon: MapPin, label: 'Utah-based', sub: 'Lehi yard + statewide install' },
              { icon: Clock, label: service.leadTime.split(';')[0], sub: 'Typical lead time' },
              { icon: Award, label: 'Free quotes', sub: '48-hour written estimate' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={sub} className="flex items-center gap-3">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-enterprise-950 truncate">{label}</div>
                  <div className="text-enterprise-950/50 text-xs truncate">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO LONG DESCRIPTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="badge-light text-xs">About this service</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
            Why Utah chooses Compoxen for {service.shortTitle.toLowerCase()}
          </h2>
          <div className="mt-6 space-y-5 text-enterprise-950/70 text-base md:text-lg leading-relaxed">
            {service.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM MATERIAL SPOTLIGHT */}
      <section className="py-16 md:py-20 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="badge-light text-xs inline-flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-600" /> Premium fence material
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Engineered composite, not commodity WPC
            </h2>
            <p className="mt-3 text-enterprise-950/60">
              Compoxen panels are built specifically for Utah climate &mdash; mineral-reinforced cores,
              UV-stable cap-stock, and a hidden fastener system you won&apos;t find on big-box composite.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.materialHighlights.map(m => (
              <div key={m.title} className="bg-white rounded-2xl p-5 border border-enterprise-950/5 hover:border-amber-400/30 hover:shadow-md transition-all">
                <div className="font-semibold text-enterprise-950 text-sm">{m.title}</div>
                <p className="text-enterprise-950/60 text-sm mt-2 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL: features + sticky pricing aside */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-3 gap-10">
          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-6">
              <div className="bg-enterprise-50 rounded-2xl p-5 border border-enterprise-950/5">
                <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-2">Pricing</div>
                <div className="text-xl font-semibold text-enterprise-950">{service.priceRange}</div>
                <p className="text-xs text-enterprise-950/50 mt-1">Free written quote within 48 hours.</p>
              </div>
              <div className="bg-enterprise-50 rounded-2xl p-5 border border-enterprise-950/5 text-sm">
                <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-3">At a glance</div>
                <ul className="space-y-2 text-enterprise-950/70">
                  <li className="flex justify-between gap-2">
                    <span>Material warranty</span>
                    <span className="font-medium text-enterprise-950 text-right">{PRODUCT_SPECS.warranty}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Wind rating</span>
                    <span className="font-medium text-enterprise-950 text-right">{PRODUCT_SPECS.windRating}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Fire rating</span>
                    <span className="font-medium text-enterprise-950 text-right">{PRODUCT_SPECS.fireRating}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Lead time</span>
                    <span className="font-medium text-enterprise-950 text-right">{service.leadTime.split(';')[0]}</span>
                  </li>
                  <li className="flex justify-between gap-2">
                    <span>Service area</span>
                    <span className="font-medium text-enterprise-950 text-right">All of Utah</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/get-quote"
                className="block text-center px-5 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
              >
                Start a Free Quote
              </Link>
              <a
                href={BRAND.phoneHref}
                className="flex items-center justify-center gap-2 px-5 py-3 border border-enterprise-950/10 text-enterprise-950 font-medium text-sm rounded-xl hover:bg-enterprise-50 transition-all"
              >
                <Phone size={14} /> {BRAND.phone}
              </a>
            </div>
          </aside>

          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-enterprise-950 tracking-tight">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-3">
              {service.bullets.map(b => (
                <li key={b} className="flex gap-3 text-enterprise-950/70 text-base">
                  <CheckCircle size={18} className="text-amber-600 mt-1 shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-12 text-xl font-semibold text-enterprise-950 tracking-tight">Service features</h3>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {service.features.map(f => (
                <div key={f.title} className="bg-enterprise-50 rounded-xl p-5 border border-enterprise-950/5">
                  <div className="font-semibold text-enterprise-950 text-sm">{f.title}</div>
                  <p className="text-enterprise-950/60 text-sm mt-1.5 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="py-16 md:py-20 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="badge-light text-xs">How it works</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Quote to walkthrough in four steps
            </h2>
            <p className="mt-3 text-enterprise-950/60">
              No surprises. Every Compoxen project follows the same predictable workflow.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {service.processSteps.map(s => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-enterprise-950/5 relative">
                <div className="text-5xl font-bold text-amber-500/20 leading-none mb-3">0{s.step}</div>
                <div className="font-semibold text-enterprise-950">{s.title}</div>
                <p className="text-enterprise-950/60 text-sm mt-2 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE COMPOXEN */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="badge-light text-xs">Why Compoxen</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              What you get with us that you won&apos;t get elsewhere
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.whyChooseUs.map(w => (
              <div key={w} className="flex gap-3 bg-enterprise-50 rounded-xl p-5 border border-enterprise-950/5">
                <CheckCircle size={20} className="text-amber-600 mt-0.5 shrink-0" />
                <span className="text-enterprise-950/80 text-sm leading-relaxed">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BANNER */}
      <section className="py-12 bg-amber-50/40 border-y border-amber-100">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-enterprise-950">
              Ready for a {service.shortTitle.toLowerCase()} quote?
            </h3>
            <p className="text-enterprise-950/60 text-sm mt-1">
              Free written estimate in 48 hours. No high-pressure sales.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 border border-enterprise-950/15 text-enterprise-950 font-medium text-sm rounded-xl hover:bg-white transition-all"
            >
              <Phone size={14} /> Call
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="badge-light text-xs">FAQs</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              {service.shortTitle} questions, answered
            </h2>
          </div>
          <div className="space-y-3">
            {service.serviceFaqs.map(faq => (
              <details
                key={faq.q}
                className="group bg-enterprise-50 rounded-xl border border-enterprise-950/5 overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex justify-between items-center gap-4 font-semibold text-enterprise-950 text-sm">
                  <span>{faq.q}</span>
                  <span className="text-amber-600 text-lg group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-enterprise-950/70 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-enterprise-50 border-y border-enterprise-950/5">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-10">
              <span className="badge-light text-xs">Related services</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
                Pairs well with
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {related.map(r => {
                const Icon = r.icon
                return (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}`}
                    className="group bg-white rounded-2xl p-6 border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 mb-4">
                      <Icon size={18} />
                    </div>
                    <div className="font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">{r.title}</div>
                    <p className="text-enterprise-950/60 text-sm mt-2 leading-relaxed">{r.tagline}</p>
                    <div className="mt-4 text-sm font-semibold text-amber-700 inline-flex items-center gap-1">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CITIES */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="badge-light text-xs">Utah-wide</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              {service.shortTitle} across Utah
            </h2>
            <p className="mt-3 text-enterprise-950/60 max-w-2xl mx-auto">
              We deliver this service in every Utah city we serve. Top markets:
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {topCities.map(c => (
              <Link
                key={c.slug}
                href={getCityHref(c)}
                className="bg-enterprise-50 rounded-xl p-3 text-center border border-enterprise-950/5 hover:border-amber-400/40 hover:bg-white hover:shadow-md transition-all text-sm font-medium text-enterprise-950 hover:text-amber-700"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/service-areas" className="text-sm text-amber-700 font-semibold hover:text-amber-600 inline-flex items-center gap-1">
              All Utah cities <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Ready for a {service.shortTitle.toLowerCase()} quote?
          </h2>
          <p className="mt-4 text-white/50 text-lg">{service.tagline}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Start a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              <Phone size={14} /> {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
