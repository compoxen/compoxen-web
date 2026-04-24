import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, KeyFacts, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getOrganizationSchema, getBreadcrumbSchema } from '@/lib/schema'
import { BRAND } from '@/lib/constants'

const URL = '/about'
const UPDATED = '2026-04-20'

export const metadata: Metadata = {
  title: 'About Compoxen — Premium Composite Fencing, Designed in USA',
  description:
    'Compoxen is a Utah composite fencing supply store and professional installer. Premium composite fencing, designed in the USA, installed across all of Utah.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'About Compoxen',
    description: 'Premium composite fencing, designed in the USA.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/hero-fence-bg.jpg', width: 1200, height: 630, alt: 'Compoxen composite fencing' }],
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="The company"
        title={<>The fence brand <span className="text-gradient-light">designed in America</span></>}
        subtitle="Compoxen makes premium composite fencing for homeowners, contractors, and architects who are tired of replacing fences."
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'Service Areas', href: '/service-areas' }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About', href: URL }]} />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">
            Compoxen designs, sells, and warranties premium composite fencing built
            from mineral-reinforced polymer composite. Every product carries a 20-year
            warranty, requires zero maintenance, and ships in five architect-led colors.
            We are sold exclusively through a certified installer network so the people
            who build the fence are the people who stand behind it.
          </p>
          <LastUpdated date={UPDATED} />

          <KeyFacts
            facts={[
              { label: 'Founded', value: String(BRAND.founded) },
              { label: 'Headquarters', value: BRAND.address },
              { label: 'Service area', value: 'CA, CO, ID, UT (active); NV, AZ, WY (launching 2026–2027)' },
              { label: 'Certified contractors', value: '500+ across active states' },
              { label: 'Certified installers', value: '160+ trained and active' },
              { label: 'Linear feet installed', value: '2M+ since launch' },
              { label: 'BBB rating', value: 'A+' },
            ]}
          />

          <h2>What we make</h2>
          <p>
            Compoxen is a privacy fence built around the failure modes of every
            other fencing material. Wood rots, vinyl warps, metal rusts. We
            engineered Compoxen to skip all three failure modes by combining a
            polymer matrix (no rot) with mineral reinforcement (no warp) and
            non-metallic hidden fasteners (no rust). The product is finished in
            five architect-led colors with a co-extruded fade-resistant shell.
          </p>

          <h2>How we sell</h2>
          <p>
            We are a Utah composite fence supply store and professional installer.
            We sell Compoxen material directly and we install it ourselves with
            our own crews across the Wasatch Front and statewide Utah. The same
            company that walks your run on day one is on the hook if something
            goes wrong on day 7,300.
          </p>

          <h2>Where we are</h2>
          <p>
            Headquartered in Lehi, we install composite fencing across all of
            Utah — Salt Lake, Utah, Davis, Weber, Tooele, Wasatch, Summit, and
            Cache counties. See the full{' '}
            <a href="/service-areas">Utah service area list</a> for cities and
            neighborhoods. Material can ship anywhere in the continental U.S.
          </p>

          <h2>How to reach us</h2>
          <ul>
            <li><strong>Quotes:</strong> <a href="/get-quote">/get-quote</a></li>
            <li><strong>Service areas:</strong> <a href="/service-areas">/service-areas</a></li>
            <li><strong>General:</strong> <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></li>
            <li><strong>Phone:</strong> {BRAND.phone}</li>
          </ul>

          <h2>Press and media</h2>
          <p>
            For press inquiries, brand assets, or interview requests, email{' '}
            <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a> with subject line
            beginning "Press —".
          </p>
        </Prose>
      </ContentSection>

      <ClosingCTA />
    </>
  )
}
