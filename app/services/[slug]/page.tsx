import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle, Phone } from 'lucide-react'

import { services, getServiceBySlug } from '@/lib/services'
import { BRAND, PRODUCT_SPECS } from '@/lib/constants'
import { getAllCities, getCityHref } from '@/lib/cities'
import {
  getBreadcrumbSchema, getCityServiceSchema, getOrganizationSchema,
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
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: `Call ${BRAND.phone}`, href: BRAND.phoneHref }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      />

      {/* DETAIL */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl grid md:grid-cols-3 gap-10">
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
                  <li className="flex justify-between">
                    <span>Material warranty</span>
                    <span className="font-medium text-enterprise-950">{PRODUCT_SPECS.warranty}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Wind rating</span>
                    <span className="font-medium text-enterprise-950">{PRODUCT_SPECS.windRating}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fire rating</span>
                    <span className="font-medium text-enterprise-950">{PRODUCT_SPECS.fireRating}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Service area</span>
                    <span className="font-medium text-enterprise-950">All of Utah</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/get-quote"
                className="block text-center px-5 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
              >
                Start a Quote
              </Link>
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

      {/* CITIES */}
      <section className="py-16 md:py-20 bg-enterprise-50 border-y border-enterprise-950/5">
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
                className="bg-white rounded-xl p-3 text-center border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all text-sm font-medium text-enterprise-950 hover:text-amber-700"
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

      {/* CTA */}
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
