import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle, Star } from 'lucide-react'
import {
  getAllCities, groupCitiesByCounty, COUNTY_META, getActiveCounties, getCityHref,
} from '@/lib/cities'
import { BRAND, PRODUCT_SPECS } from '@/lib/constants'
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Utah Composite Fence Service Areas | Compoxen',
  description:
    "Compoxen supplies and installs composite fence across all of Utah — Salt Lake, Utah, Davis, Weber, Tooele, Wasatch, Summit, and Cache counties. Find your city.",
  alternates: { canonical: `${BRAND.url}/service-areas` },
  openGraph: {
    title: 'Utah Composite Fence Service Areas | Compoxen',
    description:
      'Composite fence supply + install across Utah. Salt Lake, Utah, Davis, Weber, Tooele, Wasatch, Summit, Cache.',
    url: `${BRAND.url}/service-areas`,
  },
}

export default function ServiceAreasPage() {
  const cities = getAllCities()
  const grouped = groupCitiesByCounty(cities)
  const counties = getActiveCounties()

  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/service-areas' },
          ]),
        ]}
      />

      <PageHero
        badge="Statewide Utah"
        title={
          <>
            Composite fence supply + install,{' '}
            <span className="text-gradient-light">across Utah</span>
          </>
        }
        subtitle={`Compoxen ships material and installs fence in ${cities.length}+ Utah cities across ${counties.length} counties. From Logan to St. George — pick your city below.`}
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: `Call ${BRAND.phone}`, href: BRAND.phoneHref }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Service Areas', href: '/service-areas' }]} />

      {/* STATS */}
      <section className="bg-white border-b border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-5xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat value={`${cities.length}+`} label="Utah cities served" />
            <Stat value={`${counties.length}`} label="Counties" />
            <Stat value={PRODUCT_SPECS.warranty} label="Material warranty" />
            <Stat value={`${BRAND.googleRating}★`} label="Customer rating" />
          </div>
        </div>
      </section>

      {/* CITIES BY COUNTY */}
      <section className="py-16 md:py-20 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-6xl">
          {counties.map(county => {
            const meta = COUNTY_META[county]
            const list = grouped[county] ?? []
            return (
              <div key={county} id={meta.slug} className="mb-14 last:mb-0 scroll-mt-24">
                <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
                  <div>
                    <Link
                      href={`/counties/${meta.slug}`}
                      className="text-2xl md:text-3xl font-semibold text-enterprise-950 hover:text-amber-700 transition-colors tracking-tight"
                    >
                      {meta.name}
                    </Link>
                    <p className="text-enterprise-950/50 text-sm mt-1">
                      {list.length} {list.length === 1 ? 'city' : 'cities'} · seat: {meta.seat}
                    </p>
                  </div>
                  <Link
                    href={`/counties/${meta.slug}`}
                    className="text-sm text-amber-700 font-semibold hover:text-amber-600 inline-flex items-center gap-1"
                  >
                    {meta.name} hub <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {list.map(city => (
                    <Link
                      key={city.slug}
                      href={getCityHref(city)}
                      className="group bg-white rounded-xl p-4 border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="text-sm font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                            <MapPin size={12} className="text-amber-600/70" />
                            {city.name}
                          </div>
                          <div className="mt-1 flex items-center gap-2 text-[11px] text-enterprise-950/50">
                            <TierBadge tier={city.tier} />
                            <span>· {city.population.toLocaleString()} pop.</span>
                          </div>
                        </div>
                        <ArrowRight
                          size={14}
                          className="text-enterprise-950/30 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all shrink-0"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <CheckCircle size={28} className="text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Don&apos;t see your Utah city?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            We serve every Utah ZIP. Call us or request a quote — we&apos;ll route a crew to your address.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-enterprise-950 tabular-nums">{value}</div>
      <div className="text-enterprise-950/40 text-xs mt-1 uppercase tracking-wider">{label}</div>
    </div>
  )
}

function TierBadge({ tier: _tier }: { tier: 'tier1' | 'tier2' | 'tier3' | 'micro' }) {
  // Every Utah city is a primary, top-priority service area for Compoxen.
  // Tier is retained in data for sort/SEO purposes only.
  return (
    <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-800 inline-flex items-center gap-1">
      <Star size={9} className="fill-amber-700" /> Primary
    </span>
  )
}
