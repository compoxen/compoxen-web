import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, KeyFacts, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getProductSchema, getBreadcrumbSchema } from '@/lib/schema'
import { PRODUCT_SPECS, PRODUCT_COLORS } from '@/lib/constants'

const URL = '/specifications'
const UPDATED = '2026-04-20'

export const metadata: Metadata = {
  title: 'Compoxen Composite Fencing — Full Specifications',
  description:
    'Complete technical specification for Compoxen composite fencing: material, warranty, fire rating, wind rating, temperature range, fastener system, and color options.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Specifications — Compoxen',
    description: 'Single source of truth for Compoxen technical specifications.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-2.jpg', width: 1200, height: 630, alt: 'Compoxen composite fence panel' }],
  },
}

export default function SpecificationsPage() {
  return (
    <>
      <SchemaScript
        data={[
          getProductSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Specifications', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Reference"
        title={<>Compoxen <span className="text-gradient-light">specifications</span></>}
        subtitle="The complete technical sheet — engineered numbers, not marketing language."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'Read the FAQ', href: '/faq' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Specifications', href: URL }]} />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">
            Every Compoxen panel and post is built to the same engineered spec.
            This page is the canonical reference; if a number is on a brochure or
            a quote sheet and it disagrees with this page, this page wins.
          </p>
          <LastUpdated date={UPDATED} />

          <h2>Material</h2>
          <KeyFacts
            facts={[
              { label: 'Composition', value: PRODUCT_SPECS.material },
              { label: 'UV protection', value: PRODUCT_SPECS.uvProtection },
              { label: 'Fastener system', value: PRODUCT_SPECS.fastenerSystem },
              { label: 'Surface finishes', value: PRODUCT_SPECS.finishes.join(', ') },
            ]}
          />

          <h2>Performance</h2>
          <KeyFacts
            facts={[
              { label: 'Warranty', value: PRODUCT_SPECS.warranty },
              { label: 'Maintenance', value: PRODUCT_SPECS.maintenance },
              { label: 'Fire rating (ASTM E84)', value: PRODUCT_SPECS.fireRating },
              { label: 'Temperature range', value: PRODUCT_SPECS.temperatureRange },
              { label: 'Wind rating', value: PRODUCT_SPECS.windRating },
              { label: 'Impact resistance', value: PRODUCT_SPECS.impactResistance },
            ]}
          />

          <h2>Color options</h2>
          <p>Five architect-led colors. Each carries the same fade-resistant outer shell.</p>
          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 not-prose">
            {PRODUCT_COLORS.map(c => (
              <div key={c.slug} className="bg-white border border-enterprise-950/8 rounded-2xl overflow-hidden">
                <div className="aspect-video w-full" style={{ background: c.hex }} aria-hidden="true" />
                <div className="p-4">
                  <p className="font-semibold text-enterprise-950">{c.name}</p>
                  <p className="text-xs text-enterprise-950/50 mt-1">{c.hex}</p>
                  <p className="text-sm text-enterprise-950/70 mt-2">{c.description}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Compliance and codes</h2>
          <ul>
            <li><strong>ASTM E84:</strong> Class A surface burning characteristics.</li>
            <li><strong>California Building Code:</strong> Suitable for use in WUI (wildland-urban interface) zones.</li>
            <li><strong>Wind load:</strong> Engineered to 130 mph when installed per spec.</li>
            <li><strong>Pool code:</strong> Available in code-compliant heights for residential pool barriers.</li>
          </ul>

          <h2>Installation requirements</h2>
          <p>
            Compoxen is sold and installed exclusively through certified installer
            networks. The 20-year warranty is contingent on professional install
            following manufacturer specification. See <a href="/installation">/installation</a>
            for the full process.
          </p>

          <h2>Where to buy</h2>
          <p>
            See current <a href="/states">service areas</a> or use the availability
            checker on the home page to route your zip code to a certified dealer.
          </p>
        </Prose>
      </ContentSection>

      <ClosingCTA />
    </>
  )
}
