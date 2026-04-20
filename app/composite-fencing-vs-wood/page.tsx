import type { Metadata } from 'next'
import ComparisonPage from '@/components/content/ComparisonPage'

const URL = '/composite-fencing-vs-wood'
const PUBLISHED = '2026-04-01'
const UPDATED = '2026-04-20'

export const metadata: Metadata = {
  title: 'Composite Fencing vs Wood — Cost, Lifespan, Maintenance',
  description:
    'Composite outlasts wood by roughly 3× and eliminates the annual staining cycle, in exchange for a higher upfront cost. Side-by-side comparison of warranty, maintenance, fire rating, and total cost of ownership.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Composite Fencing vs Wood — Compoxen',
    description: 'Side-by-side comparison: composite fencing vs wood.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-3.jpg', width: 1200, height: 630, alt: 'Composite fence vs wood fence' }],
  },
}

export default function Page() {
  return (
    <ComparisonPage
      competitorName="Wood"
      competitorSlug="wood"
      url={URL}
      publishedDate={PUBLISHED}
      updatedDate={UPDATED}
      heroImage="/images/gallery-3.jpg"
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      oneLineVerdict="Composite outlasts wood by roughly 3× and eliminates the staining cycle, in exchange for a higher upfront cost."
      intro="Wood is the historical default for residential fencing because it is cheap to put up. The economics invert by year five, when staining, warping, and rot start to compound. Compoxen composite is engineered to skip that cycle entirely."
      rows={[
        { attribute: 'Warranty',         compoxen: '20 years',                     competitor: 'None typical (1-yr installer at best)', verdict: 'win' },
        { attribute: 'Maintenance',      compoxen: 'Zero',                          competitor: 'Stain or seal every 2–3 years',       verdict: 'win' },
        { attribute: 'Lifespan',          compoxen: '25–30 years projected',         competitor: '7–15 years typical',                  verdict: 'win' },
        { attribute: 'Rot resistance',   compoxen: 'Permanent',                     competitor: 'Fails at posts and grade contact',     verdict: 'win' },
        { attribute: 'Insect resistance', compoxen: 'Permanent',                    competitor: 'Vulnerable (termites, carpenter bees)',verdict: 'win' },
        { attribute: 'Fire rating',      compoxen: 'Class A (ASTM E84)',            competitor: 'Untreated wood is combustible',        verdict: 'win' },
        { attribute: 'Color stability',  compoxen: 'Fade-resistant shell',          competitor: 'Greys without stain',                   verdict: 'win' },
        { attribute: 'Sound dampening',  compoxen: 'Higher density, measurable',   competitor: 'Low',                                   verdict: 'win' },
        { attribute: 'Upfront install $',compoxen: '$45–$85 / linear ft',           competitor: '$15–$35 / linear ft',                   verdict: 'loss' },
        { attribute: 'DIY-friendly',     compoxen: 'Pro install only',             competitor: 'Yes',                                   verdict: 'loss' },
        { attribute: 'Look (year 1)',    compoxen: 'Architectural matte / woodgrain', competitor: 'Natural wood grain',                 verdict: 'tie' },
      ]}
      chooseCompoxenIf={[
        'You plan to stay in the home more than 5 years.',
        'You want zero annual maintenance.',
        'You live in a fire-hazard zone (CA WUI, mountain interface).',
        'You care about how the fence looks at year 10 and year 20.',
        'You want sound dampening from a road or shared boundary.',
      ]}
      chooseCompetitorIf={[
        'You need the cheapest possible install today and will sell within a year or two.',
        'You explicitly want a natural-wood grain that greys with age.',
        'You are comfortable re-staining every 2–3 years.',
      ]}
      longForm={
        <>
          <h2>Total cost of ownership at year 10</h2>
          <p>
            A 150-linear-foot wood fence at $25 installed costs $3,750 up front. Add
            three rounds of staining at roughly $1.50 per linear foot per round and
            you are at $4,425 by year nine. Add one round of post repair (rot at
            grade contact is the most common failure mode) and you are pushing
            $5,000 with a fence that still has visible greying.
          </p>
          <p>
            The same 150-foot run in Compoxen at $65 installed is $9,750 up front
            and $0 in maintenance. The cost lines cross around year 12–15 in most
            markets, and the composite fence still looks like the day it was
            installed.
          </p>

          <h2>Where wood actually wins</h2>
          <p>
            Two cases: short-hold properties (you are flipping or moving inside two
            years) and a homeowner who specifically wants the natural greying patina
            of aged cedar. There is nothing wrong with wood; it is just a different
            product with a different lifecycle.
          </p>

          <h2>Where composite wins decisively</h2>
          <p>
            Fire-hazard zones (Class A vs combustible), shared boundaries where
            sound dampening matters, hot/dry climates that punish wood UV exposure,
            and any homeowner whose top complaint about their last fence was that
            it kept needing work. See <a href="/specifications">/specifications</a>
            for the underlying material data.
          </p>

          <h2>What about composite vs vinyl or metal?</h2>
          <p>
            See the dedicated comparisons: <a href="/composite-fencing-vs-vinyl">composite vs vinyl</a>{' '}
            and <a href="/composite-fencing-vs-metal">composite vs metal</a>.
          </p>
        </>
      }
    />
  )
}
