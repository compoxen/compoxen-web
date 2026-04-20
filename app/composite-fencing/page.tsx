import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, KeyFacts, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'
import { PRODUCT_SPECS } from '@/lib/constants'

const PUBLISHED = '2026-04-01'
const UPDATED = '2026-04-20'
const URL = '/composite-fencing'

export const metadata: Metadata = {
  title: 'What Is Composite Fencing? A Plain-English Guide',
  description:
    'Composite fencing is a fence built from a polymer matrix bonded to mineral filler. This guide explains what composite fencing is, how it compares to wood, vinyl, and metal, and why it carries a 20-year warranty.',
  alternates: { canonical: 'https://compoxen.com/composite-fencing' },
  openGraph: {
    title: 'What Is Composite Fencing? — Compoxen',
    description: 'Plain-English guide to composite fencing as a category and to Compoxen specifically.',
    url: 'https://compoxen.com/composite-fencing',
    images: [{ url: '/images/gallery-1.jpg', width: 1200, height: 630, alt: 'Composite fence panels' }],
  },
}

export default function CompositeFencingPage() {
  return (
    <>
      <SchemaScript
        data={[
          getArticleSchema({
            type: 'Article',
            url: URL,
            headline: 'What Is Composite Fencing? A Plain-English Guide',
            description: metadata.description as string,
            image: '/images/gallery-1.jpg',
            datePublished: PUBLISHED,
            dateModified: UPDATED,
            section: 'Reference',
            keywords: ['composite fencing', 'mineral-reinforced polymer composite', 'fence materials'],
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Composite Fencing', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Pillar guide"
        title={<>What is <span className="text-gradient-light">composite fencing</span>?</>}
        subtitle="A plain-English explanation of the material, how it differs from wood, vinyl, and metal, and what to expect from a Compoxen install."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'See Specifications', href: '/specifications' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Composite Fencing', href: URL }]} />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">
            Composite fencing is a fence built from a polymer matrix bonded to a high
            percentage of mineral filler. The polymer makes it weatherproof; the
            minerals make it dimensionally stable and fire-resistant. The result is a
            board that looks like a finished architectural product and does not rot
            like wood, warp like vinyl, or rust like metal.
          </p>
          <LastUpdated date={UPDATED} />

          <KeyFacts
            facts={[
              { label: 'Material', value: PRODUCT_SPECS.material },
              { label: 'Warranty', value: PRODUCT_SPECS.warranty },
              { label: 'Maintenance', value: PRODUCT_SPECS.maintenance },
              { label: 'Fire rating', value: PRODUCT_SPECS.fireRating },
              { label: 'Wind rating', value: PRODUCT_SPECS.windRating },
              { label: 'Temperature range', value: PRODUCT_SPECS.temperatureRange },
            ]}
          />

          <h2>How composite fencing is made</h2>
          <p>
            A composite board is extruded under heat and pressure from two main
            ingredients: a thermoplastic polymer (the matrix) and a mineral filler
            (the reinforcement). The polymer locks moisture out; the mineral filler
            keeps the board rigid through temperature swings. A separate fade-resistant
            shell is co-extruded over the outer faces of the board to lock in color.
          </p>

          <h2>How it differs from wood, vinyl, and metal</h2>
          <p>
            Wood is a natural fiber that absorbs water; that is why it rots, splits,
            and needs staining. Vinyl is an all-polymer board with no mineral
            reinforcement; that is why it warps in heat and becomes brittle in cold.
            Metal is dimensionally stable but it conducts heat, dents on impact, and
            corrodes at fasteners. Composite was engineered to land in the middle:
            the appearance and warmth of wood, the moisture resistance of polymer,
            and the rigidity of mineral reinforcement.
          </p>
          <ul>
            <li><strong>vs wood:</strong> no rot, no staining, no warping. <a href="/composite-fencing-vs-wood">Full comparison</a>.</li>
            <li><strong>vs vinyl:</strong> meaningful rigidity, no warping in heat. <a href="/composite-fencing-vs-vinyl">Full comparison</a>.</li>
            <li><strong>vs metal:</strong> no rust, no dents, no thermal conduction. <a href="/composite-fencing-vs-metal">Full comparison</a>.</li>
          </ul>

          <h2>How long does composite fencing last?</h2>
          <p>
            A correctly installed Compoxen composite fence is engineered for a service
            life well in excess of its 20-year warranty term. Independent testing on
            comparable mineral-reinforced composite systems projects a functional
            service life of 25–30 years before any cosmetic refresh is needed.
          </p>

          <h2>Is composite fencing fire-resistant?</h2>
          <p>
            Compoxen composite fencing carries a Class A fire rating, the highest
            classification under ASTM E84 surface burning characteristics testing.
            That is the rating commonly required in California wildland-urban
            interface (WUI) zones and in many local codes governing high-fire-hazard
            areas.
          </p>

          <h2>What does composite fencing cost?</h2>
          <p>
            Installed Compoxen composite fencing typically ranges from <strong>$45 to
            $85 per linear foot</strong>, depending on color, height, site complexity,
            and region. See <a href="/pricing">/pricing</a> for the full breakdown
            including dealer terms and financing notes.
          </p>

          <h2>Where can I buy Compoxen composite fencing?</h2>
          <p>
            Compoxen is sold and installed exclusively through a certified installer
            network. It is currently available in California, Colorado, Idaho, and
            Utah, and is launching in Nevada (September 2026), Arizona (October 2026),
            and Wyoming (January 2027). See the full <a href="/states">service area
            list</a> or use the availability checker on the home page.
          </p>

          <h2>How do I get a quote?</h2>
          <p>
            Use the <a href="/get-quote">quote form</a>. Include your zip code so the
            system can route the request to a certified dealer in your service area.
          </p>
        </Prose>
      </ContentSection>

      <ClosingCTA />
    </>
  )
}
