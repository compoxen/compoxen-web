import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/services'
import { BRAND } from '@/lib/constants'
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
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'Service Areas', href: '/service-areas' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-enterprise-50 rounded-2xl p-6 border border-enterprise-950/5 hover:border-amber-400/40 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-enterprise-950/5 flex items-center justify-center mb-4">
                  <s.icon size={20} className="text-amber-600" />
                </div>
                <h2 className="text-lg font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm text-enterprise-950/60 leading-relaxed">{s.tagline}</p>
                <div className="mt-5 flex items-center justify-between text-xs">
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
    </>
  )
}
