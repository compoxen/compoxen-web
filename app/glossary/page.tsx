import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { ContentSection, LastUpdated } from '@/components/content/Primitives'
import { getDefinedTermSetSchema, getBreadcrumbSchema, type DefinedTerm } from '@/lib/schema'

const URL = '/glossary'
const UPDATED = '2026-04-20'

const TERMS: DefinedTerm[] = [
  { term: 'Composite fencing', alternateName: ['composite fence', 'composite privacy fence'], definition: 'A fence built from a polymer matrix bonded to mineral filler. The polymer makes it weatherproof; the minerals make it dimensionally stable and fire-resistant.' },
  { term: 'Mineral-reinforced polymer composite', alternateName: ['MRPC'], definition: 'A composite class that combines a thermoplastic polymer with a high percentage of mineral filler. Used by Compoxen for all fence panels and posts.' },
  { term: 'Polymer matrix', definition: 'The thermoplastic resin in a composite that surrounds the reinforcing material. Provides moisture resistance and color depth.' },
  { term: 'Mineral filler', definition: 'Inorganic particulate (often talc, calcium carbonate, or silica) added to a polymer to increase rigidity, fire resistance, and dimensional stability.' },
  { term: 'Co-extrusion', definition: 'A manufacturing process where two materials are extruded together so one forms a permanent shell over the other. Used to apply the fade-resistant outer shell on Compoxen panels.' },
  { term: 'Fade-resistant shell', definition: 'A pigmented outer layer co-extruded over a composite board to lock in color and resist UV degradation.' },
  { term: 'Class A fire rating', alternateName: ['ASTM E84 Class A'], definition: 'The highest classification under ASTM E84 surface burning characteristics testing, indicating low flame spread and smoke development. Required by code in many wildland-urban interface zones.' },
  { term: 'WUI zone', alternateName: ['wildland-urban interface'], definition: 'An area where developed land meets wildland vegetation. WUI zones in California and other states often require Class A fire-rated exterior materials including fencing.' },
  { term: 'Hidden fastener system', definition: 'A panel attachment method where fasteners are concealed inside the post-and-rail assembly so they are not visible from either face of the fence. Standard on Compoxen.' },
  { term: 'Linear foot', alternateName: ['lin. ft.'], definition: 'The standard unit of measure for fencing pricing — one foot of fence run regardless of height.' },
  { term: 'Post spacing', definition: 'The center-to-center distance between adjacent fence posts. Compoxen uses an engineered post spacing matched to the panel system and the local wind load.' },
  { term: 'Footing', definition: 'The concrete base in which a fence post is set. Depth is determined by the local frost line and wind load — typically 24–36 inches for Compoxen.' },
  { term: 'Frost line', definition: 'The maximum depth at which the ground freezes in winter in a given region. Footings must extend below the frost line to prevent post heave.' },
  { term: 'Racking', definition: 'Tilting a fence panel parallelogram-style to follow a slope while keeping the top rail straight relative to the posts.' },
  { term: 'Stepping', definition: 'Installing fence panels at fixed heights with vertical steps between bays to follow steep grade. The alternative to racking.' },
  { term: 'Privacy fence', definition: 'A solid-panel fence (typically 6 feet tall) designed to block sight lines between properties. Compoxen 6&apos; panels are the standard privacy product.' },
  { term: 'Pool code', definition: 'Local jurisdictional requirements for residential pool barrier height, picket spacing, and gate self-closing hardware. Compoxen ships in pool-code-compliant heights where applicable.' },
  { term: 'Wind rating', definition: 'The maximum sustained wind load a fence is engineered to withstand without failure when installed per spec. Compoxen is rated to 130 mph.' },
  { term: 'Thermal expansion', definition: 'The amount a material grows or shrinks per degree of temperature change. Mineral reinforcement reduces thermal expansion in composite, which is why Compoxen does not warp like all-polymer vinyl.' },
  { term: 'UV stability', definition: 'A material&apos;s ability to resist degradation and color change from ultraviolet light. Compoxen uses UV-stable pigments inside a fade-resistant shell.' },
  { term: 'Sound dampening', definition: 'A material&apos;s ability to absorb rather than transmit sound. Denser composite panels dampen more sound than hollow vinyl or open metal pickets.' },
  { term: 'Architect-led color', definition: 'A color developed in collaboration with practicing architects to complement contemporary residential and commercial design. Compoxen ships in five.' },
  { term: 'Total cost of ownership', alternateName: ['TCO'], definition: 'The full lifecycle cost of a fence including installation, maintenance, repairs, and eventual replacement. Composite&apos;s higher upfront cost is offset by zero maintenance over a 20-year window.' },
  { term: 'Certified installer', definition: 'A contractor trained and authorized by Compoxen to bid, install, and warrant Compoxen products in a defined geographic area.' },
  { term: 'Dealer kit', definition: 'The onboarding package for new Compoxen certified dealers, covering training, marketing assets, and the tiered pricing structure.' },
  { term: 'Service area', definition: 'A state or metro where Compoxen has an active certified installer network. Currently: California, Colorado, Idaho, Utah.' },
  { term: 'Waitlist', definition: 'The signup mechanism for homeowners and contractors in geographies where Compoxen has not yet launched. Used to prioritize expansion order.' },
  { term: 'Lead time', definition: 'The elapsed time between an approved quote and the start of installation. Compoxen residential lead time is typically 2–4 weeks.' },
  { term: 'AggregateOffer', definition: 'A schema.org type representing a price range across multiple offers for the same product. Used by Compoxen for installed-price ranges.' },
  { term: 'Schema.org', definition: 'A shared vocabulary used by search engines and AI answer engines to interpret structured data on web pages. Compoxen ships JSON-LD schema on every page.' },
]

export const metadata: Metadata = {
  title: 'Composite Fencing Glossary — Terms, Codes, and Industry Language',
  description:
    'Plain-English definitions for every term you will encounter in a composite fencing project: material science, code, installation, and pricing vocabulary.',
  alternates: { canonical: 'https://compoxen.com' + URL },
  openGraph: {
    title: 'Composite Fencing Glossary — Compoxen',
    description: 'Plain-English definitions for composite fencing terminology.',
    url: 'https://compoxen.com' + URL,
    images: [{ url: '/images/gallery-1.jpg', width: 1200, height: 630, alt: 'Compoxen composite fence' }],
  },
}

export default function GlossaryPage() {
  return (
    <>
      <SchemaScript
        data={[
          getDefinedTermSetSchema('Compoxen Composite Fencing Glossary', TERMS),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Glossary', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Reference"
        title={<>Composite fencing <span className="text-gradient-light">glossary</span></>}
        subtitle="Plain-English definitions for the material science, code, install, and pricing language you will run into."
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Glossary', href: URL }]} />

      <ContentSection>
        <LastUpdated date={UPDATED} />

        <dl className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {TERMS.map(t => (
            <div
              key={t.term}
              id={slugify(t.term)}
              className="p-5 bg-white border border-enterprise-950/8 rounded-2xl scroll-mt-32"
            >
              <dt className="font-semibold text-enterprise-950">{t.term}</dt>
              {t.alternateName && t.alternateName.length > 0 && (
                <p className="text-xs text-enterprise-950/40 mt-1">
                  Also: {t.alternateName.join(', ')}
                </p>
              )}
              <dd
                className="text-sm text-enterprise-950/70 mt-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.definition }}
              />
            </div>
          ))}
        </dl>
      </ContentSection>
    </>
  )
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
