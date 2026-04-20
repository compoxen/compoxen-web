import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getBreadcrumbSchema } from '@/lib/schema'
import { BRAND } from '@/lib/constants'

const URL = '/pricing'
const UPDATED = '2026-04-20'

const offerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Compoxen Premium Composite Fencing',
  brand: { '@type': 'Brand', name: BRAND.name },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '45',
    highPrice: '85',
    offerCount: 5,
    availability: 'https://schema.org/InStock',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'USD',
      price: '65',
      referenceQuantity: { '@type': 'QuantitativeValue', unitCode: 'FOT', value: 1 },
      unitText: 'linear foot, installed',
    },
  },
}

export const metadata: Metadata = {
  title: 'Compoxen Pricing — $45 to $85 per Linear Foot, Installed',
  description:
    'Public price ranges for Compoxen composite fencing: $45–$85 per linear foot installed, plus the factors that move the number on a specific job. Dealer pricing terms also covered.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Pricing — Compoxen',
    description: 'Public price ranges for Compoxen composite fencing.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-3.jpg', width: 1200, height: 630, alt: 'Compoxen composite fence' }],
  },
}

export default function PricingPage() {
  return (
    <>
      <SchemaScript
        data={[
          offerSchema,
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Pricing', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Pricing"
        title={<>$45–$85 per <span className="text-gradient-light">linear foot</span>, installed</>}
        subtitle="Honest public ranges. Real numbers come back on your written quote, scoped to your zip code and site conditions."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'See Specifications', href: '/specifications' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Pricing', href: URL }]} />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">
            Installed Compoxen composite fencing typically ranges from
            <strong> $45 to $85 per linear foot</strong>. The midpoint of about
            $65 covers the most common residential project: six-foot privacy
            run, standard color, level grade, no demolition.
          </p>
          <LastUpdated date={UPDATED} />

          <h2>What moves the number</h2>
          <ul>
            <li><strong>Color:</strong> standard architect colors price the same; custom run colors are quoted on request.</li>
            <li><strong>Height:</strong> 6&apos; privacy is the standard reference. 4&apos; pool-code height is lower; 8&apos; commercial is higher.</li>
            <li><strong>Site complexity:</strong> sloped ground, root removal, and stepped runs add labor.</li>
            <li><strong>Demolition:</strong> removing and disposing of an existing fence is added line-item.</li>
            <li><strong>Region:</strong> permit fees and concrete prices vary by state and metro.</li>
            <li><strong>Gates:</strong> single walk gates and double drive gates are quoted per unit.</li>
          </ul>

          <h2>Dealer and wholesale pricing</h2>
          <p>
            Certified dealers buy on a tiered structure that improves with
            sustained sales volume. The current tiers and onboarding terms are
            in the <a href="/dealer-kit">dealer kit</a>.
          </p>

          <h2>Financing</h2>
          <p>
            Several Compoxen certified installer networks offer financing through
            third-party providers. Ask your dealer for the current options when
            you request a quote.
          </p>

          <h2>How does the cost compare to wood, vinyl, and metal?</h2>
          <p>
            Composite is more expensive up front than wood or vinyl. The
            economics flip inside roughly five to seven years once staining,
            repairs, and replacement enter the picture. See{' '}
            <a href="/composite-fencing-vs-wood">composite vs wood</a>,{' '}
            <a href="/composite-fencing-vs-vinyl">composite vs vinyl</a>, and{' '}
            <a href="/composite-fencing-vs-metal">composite vs metal</a> for
            attribute-by-attribute comparisons.
          </p>
        </Prose>
      </ContentSection>

      <ClosingCTA title="Want a real number for your project?" body="Send your zip code and project type. A certified dealer replies with a written, scoped quote." />
    </>
  )
}
