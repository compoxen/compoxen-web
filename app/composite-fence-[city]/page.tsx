import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  CheckCircle, Shield, Hammer, MapPin, ArrowRight, Phone, Star, Truck, Home, Sparkles,
} from 'lucide-react'

import {
  getAllCities, getCityBySlug, getCityHref, getNearbyCities, COUNTY_META,
} from '@/lib/cities'
import { BRAND, PRODUCT_COLORS, PRODUCT_SPECS } from '@/lib/constants'
import { services } from '@/lib/services'
import { FAQS } from '@/lib/faqs'
import {
  getCityLocalBusinessSchema, getCityServiceSchema, getBreadcrumbSchema, getFAQSchema,
} from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import NearbyCities from '@/components/NearbyCities'

interface CityPageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllCities().map(c => ({ city: c.slug }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) return {}
  const url = `${BRAND.url}${getCityHref(city)}`
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      url,
      type: 'website',
    },
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  if (!city) notFound()

  const county = COUNTY_META[city.county]
  const nearby = getNearbyCities(city, 6)

  // Pick FAQs that work well on a city landing page
  const cityFaqs = [
    {
      q: `Do you install composite fencing in ${city.name}?`,
      a: `Yes. ${BRAND.name} supplies and installs composite fence across ${city.name} and the rest of ${city.county} County. Most ${city.name} projects book within a week and finish in 2–4 days on a residential lot.`,
      section: 'Availability & service area' as const,
    },
    {
      q: `How much does a composite fence cost in ${city.name}, UT?`,
      a: `${city.name} composite fence projects typically run $52–$78 per linear foot installed, depending on height, gate count, and lot conditions. Material-only kits for DIY runs at $28–$42 per linear foot delivered. Free written quotes within 48 hours.`,
      section: 'Cost & purchase' as const,
    },
    {
      q: `Will Compoxen pass HOA review in ${city.name}?`,
      a: `${BRAND.name}'s neutral architect-led palette (Harbor Slate, Mesa Taupe, Shadow Forge, Redwood Ember, Cocoa Ridge) and clean panel face are designed to clear ${city.name} HOA architectural review on the first submission. We can supply a spec packet for your board.`,
      section: 'Installation' as const,
    },
    ...FAQS.filter(f => f.section === 'Material & engineering').slice(0, 3),
  ]

  const intro =
    city.intro ??
    `${city.name} homeowners pick ${BRAND.name} because composite outlasts wood, looks better than vinyl, and never asks for a stain can. We supply the panels and our certified crews install them — one company, one warranty.`

  // Reuse the shared premium material highlights baked into every service entry
  const materialHighlights = services[0].materialHighlights

  return (
    <>
      <SchemaScript
        data={[
          getCityLocalBusinessSchema(city),
          getCityServiceSchema(city),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/service-areas' },
            { name: county.name, url: `/counties/${county.slug}` },
            { name: city.name, url: getCityHref(city) },
          ]),
          getFAQSchema(cityFaqs),
        ]}
      />

      {/* HERO */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,rgba(217,119,6,0.10)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 max-w-5xl">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="badge-dark text-xs inline-flex items-center gap-1.5">
              <MapPin size={12} className="text-amber-400" /> {city.name}, UT
            </span>
            <span className="badge-dark text-xs">{city.county} County</span>
            <span className="text-xs inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 font-semibold uppercase tracking-wider">
              <Star size={11} className="fill-amber-300" /> Primary service area
            </span>
            <span className="badge-green text-xs inline-flex items-center gap-1.5">
              <CheckCircle size={12} /> Top priority install
            </span>
          </div>

          <h1
            className="text-white font-semibold tracking-tight leading-[1.06] max-w-4xl"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Composite fence supply + install in <span className="text-gradient-light">{city.name}</span>
          </h1>

          <p className="mt-6 text-white/60 text-lg md:text-xl max-w-3xl leading-relaxed">{intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a {city.name} Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/80 font-medium text-sm rounded-xl hover:bg-white/6 transition-all"
            >
              <Phone size={14} /> {BRAND.phone}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
            {[
              { icon: Shield,  v: PRODUCT_SPECS.warranty,        l: 'Material warranty' },
              { icon: Hammer,  v: '2–4 days',                     l: 'Typical install' },
              { icon: Star,    v: `${BRAND.googleRating}★`,       l: 'Customer rating' },
              { icon: Truck,   v: 'Statewide',                    l: 'Utah delivery' },
            ].map(s => (
              <div key={s.l} className="bg-white/5 border border-white/8 rounded-xl p-4">
                <s.icon size={18} className="text-amber-400 mb-2" />
                <div className="text-white font-semibold text-base">{s.v}</div>
                <div className="text-white/40 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Service Areas', href: '/service-areas' },
          { name: county.name, href: `/counties/${county.slug}` },
          { name: city.name, href: getCityHref(city) },
        ]}
      />

      {/* WHY THIS CITY */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="badge-light text-xs">Why {city.name} picks Compoxen</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight leading-tight">
                The composite fence engineered for {city.county} County conditions.
              </h2>
              <p className="mt-5 text-enterprise-950/60 leading-relaxed">
                {county.description} {BRAND.name}&apos;s mineral-reinforced composite is rated for{' '}
                {PRODUCT_SPECS.temperatureRange} and {PRODUCT_SPECS.windRating} — the exact range Utah throws at
                a fence over a 20-year span.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  `Built for ${city.county} County climate — freeze-thaw, UV, and dry summers.`,
                  `${PRODUCT_SPECS.warranty} material warranty in writing, not a marketing line.`,
                  `Hidden fastener system — clean panel face for HOAs and architects.`,
                  `Same crew supplies + installs. One warranty document, one phone number.`,
                  `Free quotes anywhere in ${city.name}, ${city.county} County, and statewide.`,
                ].map(line => (
                  <li key={line} className="flex gap-3 text-enterprise-950/70 text-sm">
                    <CheckCircle size={18} className="text-amber-600 mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-enterprise-50 rounded-2xl p-7 border border-enterprise-950/5">
              <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-4">
                Neighborhoods we serve in {city.name}
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-enterprise-950/70">
                {city.neighborhoods.map(n => (
                  <li key={n} className="flex items-center gap-2">
                    <Home size={12} className="text-amber-600/70" />
                    {n}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-enterprise-950/8">
                <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-3">
                  Service details
                </div>
                <dl className="text-sm space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-enterprise-950/50">County</dt>
                    <dd className="text-enterprise-950 font-medium">{county.name}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-enterprise-950/50">Population served</dt>
                    <dd className="text-enterprise-950 font-medium">{city.population.toLocaleString()}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-enterprise-950/50">Material warranty</dt>
                    <dd className="text-enterprise-950 font-medium">{PRODUCT_SPECS.warranty}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-enterprise-950/50">Wind rating</dt>
                    <dd className="text-enterprise-950 font-medium">{PRODUCT_SPECS.windRating}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-24 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-2xl mb-12">
            <span className="badge-light text-xs">Services in {city.name}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              What we install in {city.name}
            </h2>
            <p className="mt-3 text-enterprise-950/60">
              Pick a service to see scope, pricing, and timeline. Every service is delivered by{' '}
              {BRAND.name}-trained crews using {BRAND.name} material.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white rounded-2xl p-6 border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-enterprise-950/60 leading-relaxed line-clamp-2">{s.tagline}</p>
                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-amber-700 font-semibold">{s.priceRange}</span>
                  <span className="text-enterprise-950/40 group-hover:text-amber-700 transition-colors inline-flex items-center gap-1">
                    Learn more <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COLORS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="badge-light text-xs">Five architect-led colors</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              All five colors in stock for {city.name}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {PRODUCT_COLORS.map(c => (
              <div key={c.slug} className="text-center">
                <div
                  className="aspect-square rounded-2xl border border-enterprise-950/5 mb-3"
                  style={{ background: c.hex }}
                />
                <div className="text-sm font-semibold text-enterprise-950">{c.name}</div>
                <div className="text-xs text-enterprise-950/40 mt-1">{c.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM MATERIAL SPOTLIGHT */}
      <section className="py-20 md:py-24 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span className="badge-light text-xs inline-flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-600" /> Premium fence material
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Engineered composite, not commodity WPC
            </h2>
            <p className="mt-3 text-enterprise-950/60">
              {city.name} gets the same premium {BRAND.name} composite we install across every Utah city &mdash;
              mineral-reinforced cores, UV-stable cap-stock, and a hidden fastener system you won&apos;t find on big-box composite.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {materialHighlights.map(m => (
              <div key={m.title} className="bg-white rounded-2xl p-5 border border-enterprise-950/5 hover:border-amber-400/30 hover:shadow-md transition-all">
                <div className="font-semibold text-enterprise-950 text-sm">{m.title}</div>
                <p className="text-enterprise-950/60 text-sm mt-2 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BANNER */}
      <section className="py-12 bg-amber-50/40 border-b border-amber-100">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-enterprise-950">
              Ready for a {city.name} composite fence quote?
            </h3>
            <p className="text-enterprise-950/60 text-sm mt-1">
              Free written estimate in 48 hours. No deposit. No high-pressure sales.
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

      {/* FAQ */}
      <section className="py-20 md:py-24 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-10">
            <span className="badge-light text-xs">{city.name} composite fence FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Common questions from {city.name} homeowners
            </h2>
          </div>
          <dl className="space-y-3">
            {cityFaqs.map(f => (
              <details key={f.q} className="group bg-white rounded-2xl p-5 border border-enterprise-950/5 open:border-amber-400/40 transition-colors">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-4">
                  <dt className="text-base font-semibold text-enterprise-950 group-open:text-amber-700 transition-colors">
                    {f.q}
                  </dt>
                  <span className="text-amber-600 text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
                </summary>
                <dd className="mt-3 text-sm text-enterprise-950/60 leading-relaxed">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* NEARBY */}
      <NearbyCities cities={nearby} currentCityName={city.name} />

      {/* CTA */}
      <section className="py-20 md:py-24" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Ready to get a quote in {city.name}?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Free written quotes within 48 hours. No deposit. No high-pressure sales.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Start My {city.name} Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              <Phone size={14} /> Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
