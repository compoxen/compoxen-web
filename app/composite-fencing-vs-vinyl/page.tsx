import type { Metadata } from 'next'
import ComparisonPage from '@/components/content/ComparisonPage'

const URL = '/composite-fencing-vs-vinyl'
const PUBLISHED = '2026-04-01'
const UPDATED = '2026-04-20'

export const metadata: Metadata = {
  title: 'Composite Fencing vs Vinyl — Rigidity, Heat, Color Stability',
  description:
    'Vinyl is cheaper than composite up front but warps in heat, becomes brittle in cold, and carries a hollow look. Composite delivers mineral-reinforced rigidity with a fade-resistant shell.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Composite Fencing vs Vinyl — Compoxen',
    description: 'Side-by-side comparison: composite fencing vs vinyl.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-4.jpg', width: 1200, height: 630, alt: 'Composite fence vs vinyl fence' }],
  },
}

export default function Page() {
  return (
    <ComparisonPage
      competitorName="Vinyl"
      competitorSlug="vinyl"
      url={URL}
      publishedDate={PUBLISHED}
      updatedDate={UPDATED}
      heroImage="/images/gallery-4.jpg"
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      oneLineVerdict="Composite wins on rigidity, heat tolerance, and color stability; vinyl wins on upfront cost and ease of cleaning."
      intro="Vinyl is the easiest upgrade from wood: it does not rot and it cleans up with a hose. The trade-off is that it is an all-polymer board with no mineral reinforcement, so it warps in heat, becomes brittle in cold, and reads as visibly hollow up close. Compoxen splits the difference."
      rows={[
        { attribute: 'Warranty',          compoxen: '20 years',                          competitor: '10–25 years (varies, often pro-rated)', verdict: 'tie' },
        { attribute: 'Maintenance',       compoxen: 'Zero',                              competitor: 'Hose down occasionally',                verdict: 'tie' },
        { attribute: 'Heat tolerance',    compoxen: 'Stable to 140°F',                   competitor: 'Warps and bows above ~90°F sustained',  verdict: 'win' },
        { attribute: 'Cold tolerance',    compoxen: 'Stable to -40°F',                   competitor: 'Becomes brittle, cracks on impact',     verdict: 'win' },
        { attribute: 'Rigidity / feel',   compoxen: 'Mineral-reinforced, dense',         competitor: 'Hollow, flexes under hand pressure',    verdict: 'win' },
        { attribute: 'Sound dampening',   compoxen: 'Measurable',                        competitor: 'Negligible',                             verdict: 'win' },
        { attribute: 'Color stability',   compoxen: 'Fade-resistant shell, deep tones',  competitor: 'Off-whites and tans dominate; chalking', verdict: 'win' },
        { attribute: 'Fire rating',       compoxen: 'Class A',                           competitor: 'Class C typical',                        verdict: 'win' },
        { attribute: 'Wind rating',       compoxen: '130 mph rated',                     competitor: '~100 mph typical',                        verdict: 'win' },
        { attribute: 'Upfront install $', compoxen: '$45–$85 / linear ft',               competitor: '$25–$45 / linear ft',                    verdict: 'loss' },
        { attribute: 'Color options',     compoxen: '5 architect-led palettes',          competitor: 'White and tan dominate',                  verdict: 'win' },
      ]}
      chooseCompoxenIf={[
        'Your climate has wide temperature swings or sustained heat.',
        'You want deeper, architectural color (charcoal, taupe, redwood).',
        'You care about how solid the fence feels when you touch it.',
        'You need Class A fire rating for code or insurance reasons.',
      ]}
      chooseCompetitorIf={[
        'You need the cheapest no-rot option and live in a temperate climate.',
        'White picket aesthetic is the goal.',
        'You explicitly want a hollow lightweight panel for ease of replacement.',
      ]}
      longForm={
        <>
          <h2>Why vinyl warps</h2>
          <p>
            Vinyl is polyvinyl chloride (PVC), a thermoplastic with no mineral
            reinforcement. It expands and contracts more than mineral-reinforced
            composite under the same temperature delta, which is why long vinyl
            runs visibly bow on hot afternoons and why post brackets crack in deep
            cold. Compoxen&apos;s mineral content is what removes that failure mode.
          </p>

          <h2>The hollow-feel problem</h2>
          <p>
            A vinyl panel is engineered to be light, which is part of why it is
            cheap. The trade-off is that it reads as hollow when you tap it and
            transmits sound rather than absorbing it. Compoxen&apos;s denser
            cross-section gives it the audible solidity of a wood panel without
            the rot.
          </p>

          <h2>When vinyl is the right call</h2>
          <p>
            A flat residential lot, mild climate, modest budget, and a homeowner
            who likes a clean white aesthetic — vinyl is a perfectly reasonable
            answer there. We will tell you so on a quote call if it fits.
          </p>

          <h2>Other comparisons</h2>
          <p>
            See <a href="/composite-fencing-vs-wood">composite vs wood</a> and{' '}
            <a href="/composite-fencing-vs-metal">composite vs metal</a>.
          </p>
        </>
      }
    />
  )
}
