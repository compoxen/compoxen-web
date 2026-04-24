import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

import {
  COUNTY_META, getCitiesByCounty, getCityHref, getCountyBySlug, type UtahCounty,
} from '@/lib/cities'
import { BRAND, PRODUCT_SPECS } from '@/lib/constants'
import { services } from '@/lib/services'
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'

interface CountyPageProps {
  params: Promise<{ county: string }>
}

export async function generateStaticParams() {
  return Object.values(COUNTY_META).map(c => ({ county: c.slug }))
}

export async function generateMetadata({ params }: CountyPageProps): Promise<Metadata> {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)
  if (!county) return {}
  const url = `${BRAND.url}/counties/${county.slug}`
  return {
    title: `${county.name} Composite Fence Installation | Compoxen Utah`,
    description: `Composite fence supply and certified install across ${county.name}, Utah. ${PRODUCT_SPECS.warranty} warranty, free quotes. (385) 483-3700`,
    alternates: { canonical: url },
    openGraph: {
      title: `${county.name} Composite Fence | Compoxen`,
      description: `Composite fence supply + install across ${county.name}, Utah.`,
      url,
    },
  }
}

export default async function CountyPage({ params }: CountyPageProps) {
  const { county: slug } = await params
  const county = getCountyBySlug(slug)
  if (!county) notFound()

  // find original UtahCounty key
  const countyKey = (Object.keys(COUNTY_META) as UtahCounty[]).find(
    k => COUNTY_META[k].slug === slug,
  )!
  const cities = getCitiesByCounty(countyKey).sort((a, b) => b.population - a.population)

  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/service-areas' },
            { name: county.name, url: `/counties/${county.slug}` },
          ]),
        ]}
      />

      <PageHero
        badge={`${county.name}, Utah`}
        title={
          <>
            Composite fence in <span className="text-gradient-light">{county.name}</span>
          </>
        }
        subtitle={county.description}
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: `Call ${BRAND.phone}`, href: BRAND.phoneHref }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Service Areas', href: '/service-areas' },
          { name: county.name, href: `/counties/${county.slug}` },
        ]}
      />

      {/* CITIES IN COUNTY */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="mb-8">
            <span className="badge-light text-xs">Cities in {county.name}</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              {cities.length} {county.name} cities served
            </h2>
            <p className="mt-3 text-enterprise-950/60">
              {county.name} county seat: <strong>{county.seat}</strong>. Compoxen ships from Lehi and installs
              statewide — same-day quotes for {county.name} addresses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {cities.map(c => (
              <Link
                key={c.slug}
                href={getCityHref(c)}
                className="group bg-enterprise-50 rounded-xl p-4 border border-enterprise-950/5 hover:border-amber-400/40 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="text-sm font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <MapPin size={12} className="text-amber-600/70" /> {c.name}
                </div>
                <div className="text-xs text-enterprise-950/50 mt-1">
                  {c.population.toLocaleString()} pop. · {c.neighborhoods.length} neighborhoods
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-enterprise-50 border-y border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <span className="badge-light text-xs">Services</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              What we install in {county.name}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-2xl p-5 border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                  <s.icon size={18} className="text-amber-600" />
                </div>
                <div className="text-sm font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                  {s.shortTitle}
                </div>
                <div className="text-xs text-enterprise-950/50 mt-1">{s.priceRange}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Ready for a {county.name} quote?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Free written quote within 48 hours. No deposit, no high-pressure sales.
          </p>
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
