import type { Metadata } from 'next'
import ComparisonPage from '@/components/content/ComparisonPage'

const URL = '/composite-fencing-vs-metal'
const PUBLISHED = '2026-04-01'
const UPDATED = '2026-04-20'

export const metadata: Metadata = {
  title: 'Composite Fencing vs Metal — Privacy, Heat, Corrosion',
  description:
    'Metal fencing (aluminum, steel) is durable but offers no privacy, conducts heat, and corrodes at fasteners. Composite delivers full privacy, sound dampening, and zero corrosion.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Composite Fencing vs Metal — Compoxen',
    description: 'Side-by-side comparison: composite fencing vs metal.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-5.jpg', width: 1200, height: 630, alt: 'Composite fence vs metal fence' }],
  },
}

export default function Page() {
  return (
    <ComparisonPage
      competitorName="Metal"
      competitorSlug="metal"
      url={URL}
      publishedDate={PUBLISHED}
      updatedDate={UPDATED}
      heroImage="/images/gallery-5.jpg"
      metaTitle={metadata.title as string}
      metaDescription={metadata.description as string}
      oneLineVerdict="Composite wins on privacy, sound dampening, and corrosion resistance; metal wins on perimeter security and very long unmaintained life in the right alloy."
      intro="Aluminum and steel fencing are dimensionally stable and require little maintenance, which is why they show up around pools, parks, and commercial perimeters. The trade-off is privacy and acoustics: an open picket gives you neither. Compoxen is the privacy-and-acoustics answer when metal is overkill or the wrong shape."
      rows={[
        { attribute: 'Warranty',          compoxen: '20 years',                          competitor: '10–20 years typical',                  verdict: 'tie' },
        { attribute: 'Privacy',           compoxen: 'Full privacy panels',               competitor: 'Open picket — no privacy',             verdict: 'win' },
        { attribute: 'Sound dampening',   compoxen: 'Measurable',                        competitor: 'Negligible (open picket)',             verdict: 'win' },
        { attribute: 'Corrosion',         compoxen: 'None — non-metallic',               competitor: 'Rusts at fasteners and cuts',          verdict: 'win' },
        { attribute: 'Heat conduction',   compoxen: 'Low (composite)',                   competitor: 'High — too hot to touch in summer sun', verdict: 'win' },
        { attribute: 'Impact resistance', compoxen: 'High',                              competitor: 'Dents (aluminum), bends (steel)',      verdict: 'win' },
        { attribute: 'Color options',     compoxen: '5 architect-led palettes',          competitor: 'Powder-coat black/bronze typical',     verdict: 'tie' },
        { attribute: 'Coastal salt air',  compoxen: 'No corrosion',                      competitor: 'Aluminum OK, steel fails fast',        verdict: 'win' },
        { attribute: 'Security perimeter',compoxen: 'Privacy fence — not a picket',      competitor: 'Steel pickets are hard to climb',      verdict: 'loss' },
        { attribute: 'Pool code',         compoxen: 'Available in code-compliant heights', competitor: 'Standard pool-code option',          verdict: 'tie' },
        { attribute: 'Upfront install $', compoxen: '$45–$85 / linear ft',               competitor: '$30–$60 / linear ft (aluminum)',       verdict: 'loss' },
      ]}
      chooseCompoxenIf={[
        'Privacy from neighbors or the street is the goal.',
        'You want sound dampening from a road or shared boundary.',
        'You live near salt air and have seen steel fail.',
        'Hot afternoon sun makes a metal fence dangerous to touch.',
      ]}
      chooseCompetitorIf={[
        'You need an open-sightline perimeter (parks, pool decks, view lots).',
        'Security against climbing is the primary requirement.',
        'You want the cheapest possible aluminum picket in a black powder coat.',
      ]}
      longForm={
        <>
          <h2>Privacy is the deciding factor</h2>
          <p>
            Most "do I want metal or composite?" conversations end as soon as
            privacy comes up. A six-foot ornamental aluminum fence is still a
            fence you can see through. If a homeowner wants visual separation
            from a neighbor, a road, or a pool, the answer is composite (or
            wood, or vinyl). Metal is the right answer for security perimeters
            and view-preserving boundaries — different jobs.
          </p>

          <h2>Heat and touch safety</h2>
          <p>
            A south-facing aluminum picket in summer easily clears 140°F surface
            temperature, which is hot enough to burn skin on contact. Compoxen
            composite stays substantially cooler and is safe to touch.
          </p>

          <h2>Corrosion at the joints</h2>
          <p>
            Even powder-coated steel eventually corrodes where the coating is
            scratched at fasteners and cuts. Aluminum fares better but the
            mounting hardware is still steel. Composite is non-metallic
            end-to-end with hidden composite fasteners, so corrosion is not in
            the failure-mode list.
          </p>

          <h2>Other comparisons</h2>
          <p>
            See <a href="/composite-fencing-vs-wood">composite vs wood</a> and{' '}
            <a href="/composite-fencing-vs-vinyl">composite vs vinyl</a>.
          </p>
        </>
      }
    />
  )
}
