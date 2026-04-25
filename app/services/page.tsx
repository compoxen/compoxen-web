import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Phone, Shield, Sparkles } from 'lucide-react'
import { services } from '@/lib/services'
import { BRAND, PRODUCT_SPECS } from '@/lib/constants'
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Composite Fence Services in Utah | Compoxen',
  description:
    "Compoxen's full Utah service catalog: composite fence installation, privacy fence, pool fence, material supply, HOA-approved fencing, and commercial projects.",
  alternates: { canonical: `${BRAND.url}/services` },
  openGraph: {
    title: 'Composite Fence Services in Utah | Compoxen',
    description: 'Full composite fence service catalog. Supply + install across Utah.',
    url: `${BRAND.url}/services`,
  },
}

export default function ServicesIndexPage() {
  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
          ]),
        ]}
      />

      <PageHero
        badge="Services"
        title={
          <>
            Compoxen does both: <span className="text-gradient-light">supply and install</span>
          </>
        }
        subtitle="Pick a service for full scope, pricing, and timeline. Every service ships from our Lehi yard and is installed by Compoxen-trained crews across Utah."
        primaryCta={{ label: 'Get a Free Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'Service Areas', href: '/service-areas' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      {/* TRUST STRIP */}
      <section className="bg-white border-b border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-6xl py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {[
              { icon: Shield, label: PRODUCT_SPECS.warranty, sub: 'Material warranty' },
              { icon: Sparkles, label: '5 architect colors', sub: 'Premium composite' },
              { icon: Clock, label: '48-hour quotes', sub: 'Free written estimate' },
              { icon: Phone, label: BRAND.phone, sub: 'Talk to a Utah estimator' },
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

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-enterprise-50 rounded-2xl p-6 border border-enterprise-950/5 hover:border-amber-400/40 hover:bg-white hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-enterprise-950/5 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-amber-600" />
                </div>
                <h2 className="text-lg font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-enterprise-950/60 leading-relaxed">{s.tagline}</p>

                <ul className="mt-4 space-y-1.5 text-xs text-enterprise-950/60">
                  <li className="flex gap-2">
                    <span className="text-amber-600 shrink-0">•</span>
                    <span>{s.bullets[0]}</span>
                  </li>
                  <li className="flex gap-2">
                    <Clock size={12} className="text-amber-600 shrink-0 mt-0.5" />
                    <span>{s.leadTime.split(';')[0]}</span>
                  </li>
                </ul>

                <div className="mt-5 pt-4 border-t border-enterprise-950/5 flex items-center justify-between text-xs">
                  <span className="text-amber-700 font-semibold">{s.priceRange}</span>
                  <span className="text-enterprise-950/40 group-hover:text-amber-700 transition-colors inline-flex items-center gap-1">
                    Details <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Not sure which service you need?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Tell us about your project and we&apos;ll point you at the right scope &mdash; no upsell.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a Free Quote <ArrowRight size={16} />
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
