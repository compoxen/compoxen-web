/**
 * Compoxen — Service Catalog
 * Each entry powers a /services/[slug] landing page and gets linked from city pages.
 */

import { Shield, Home, Waves, Building2, Sparkles, Hammer, Trees } from 'lucide-react'
import type { ComponentType } from 'react'

export interface ServiceFeature {
  title: string
  description: string
}

export interface ServiceData {
  slug: string
  title: string
  shortTitle: string
  tagline: string
  heroDescription: string
  metaTitle: string
  metaDescription: string
  icon: ComponentType<{ size?: number; className?: string }>
  features: ServiceFeature[]
  bullets: string[]
  priceRange: string
  /** Used for sort/order on the services index */
  order: number
}

export const services: ServiceData[] = [
  {
    slug: 'composite-fence-installation',
    title: 'Composite Fence Installation',
    shortTitle: 'Fence Installation',
    tagline: "Compoxen panels, installed by Compoxen-trained crews.",
    heroDescription:
      "Full-service composite fence installation across Utah. We supply the panels, posts, and hidden-fastener hardware — and our certified crews put it in. One company, one warranty, one finish line.",
    metaTitle: 'Composite Fence Installation in Utah | Compoxen Supply + Install',
    metaDescription:
      "Utah composite fence installation. Compoxen supplies the material and installs it — 20-yr warranty, zero maintenance, finished in days. Free quotes. (385) 483-3700",
    icon: Hammer,
    features: [
      { title: 'Concrete-set posts', description: 'Engineered for Utah wind ratings up to 130 mph.' },
      { title: 'Hidden fastener system', description: 'No visible screws. Clean architectural lines on every panel.' },
      { title: 'Crew-certified by us', description: 'Every installer is trained on Compoxen, not generic composite.' },
      { title: 'Permit-aware', description: 'We pull or guide permits in cities that require them.' },
    ],
    bullets: [
      "Privacy, semi-privacy, and pool-rated heights",
      "5 architect-led colors with deep matte or subtle woodgrain",
      "Typical install: 2–4 days for a residential lot",
      "Material + labor warranty in one document",
    ],
    priceRange: '$45–$78 / linear ft installed',
    order: 1,
  },
  {
    slug: 'composite-privacy-fence',
    title: 'Composite Privacy Fence',
    shortTitle: 'Privacy Fence',
    tagline: "Six feet of solid panel. Zero gaps. Zero maintenance.",
    heroDescription:
      "Solid 6 ft privacy panels engineered for backyard quiet. Compoxen privacy fence blocks line of sight, dampens noise, and never needs a stain can.",
    metaTitle: 'Composite Privacy Fence | Utah Supply + Install | Compoxen',
    metaDescription:
      "Utah composite privacy fence. 6 ft solid panels, zero gaps, 20-year warranty. Engineered for Utah climate. Free quotes. (385) 483-3700",
    icon: Shield,
    features: [
      { title: '6 ft solid panel', description: 'Tongue-and-groove fit means no light gaps over time.' },
      { title: 'Sound-dampening', description: 'Mineral-reinforced composite cuts perceived noise vs. wood or vinyl.' },
      { title: 'Dog-friendly base', description: 'Optional kick board prevents dig-outs without a separate trench.' },
    ],
    bullets: [
      "True 6 ft panel height — no panel droop over time",
      "HOA-friendly aesthetics in 5 colors",
      "Wind-rated to 130 mph",
      "Pairs with matching gates and post caps",
    ],
    priceRange: '$52–$78 / linear ft installed',
    order: 2,
  },
  {
    slug: 'composite-pool-fence',
    title: 'Composite Pool Fence',
    shortTitle: 'Pool Fence',
    tagline: "Code-compliant pool enclosure that matches the patio.",
    heroDescription:
      "Compoxen pool fence is engineered to meet Utah pool barrier codes — 4 ft minimum height, self-closing self-latching gates, and a non-climbable surface — without looking like a pool fence.",
    metaTitle: 'Composite Pool Fence | Utah Code-Compliant | Compoxen',
    metaDescription:
      "Utah composite pool fence supply and install. Code-compliant heights, self-closing gates, zero maintenance. Free quotes. (385) 483-3700",
    icon: Waves,
    features: [
      { title: 'Code-compliant heights', description: '48–60 in panels meet Utah residential pool barrier requirements.' },
      { title: 'Self-closing gate hardware', description: 'Magnetic latches and spring hinges included.' },
      { title: 'Non-climbable face', description: 'Smooth panel surface — no horizontal rails to climb.' },
    ],
    bullets: [
      "Won't rot from chlorine or splash exposure",
      "Pairs with privacy or semi-privacy backyard fence",
      "Color-matched gate hardware",
      "Inspector-ready documentation",
    ],
    priceRange: '$48–$72 / linear ft installed',
    order: 3,
  },
  {
    slug: 'composite-fence-supply',
    title: 'Composite Fence Supply',
    shortTitle: 'Material Supply',
    tagline: "DIY-ready Compoxen panels. We ship Utah, you build.",
    heroDescription:
      "Buy Compoxen composite fence material direct. Panels, posts, post caps, gate kits, and hidden-fastener hardware — palletized for delivery anywhere in Utah, or pickup at our Lehi yard.",
    metaTitle: 'Composite Fence Material Supply | Utah | Compoxen',
    metaDescription:
      "Buy Compoxen composite fence panels and hardware direct in Utah. DIY-ready kits, contractor pricing, palletized delivery. (385) 483-3700",
    icon: Sparkles,
    features: [
      { title: 'Direct-from-supplier pricing', description: 'No middleman markup on panels, posts, or hardware.' },
      { title: 'Pre-cut kits', description: 'Order by linear footage; we cut, palletize, and label by run.' },
      { title: 'Statewide delivery', description: 'Forklift-offload to your jobsite anywhere in Utah.' },
    ],
    bullets: [
      "Sold in panel kits or by component",
      "Contractor account pricing available",
      "Hidden fastener hardware included with every panel",
      "5 architect-led colors in stock",
    ],
    priceRange: '$28–$42 / linear ft material',
    order: 4,
  },
  {
    slug: 'hoa-approved-composite-fence',
    title: 'HOA-Approved Composite Fencing',
    shortTitle: 'HOA Fencing',
    tagline: "Designed to pass architectural review the first time.",
    heroDescription:
      "Most Utah HOA submittal rejections are about color, height, or material. Compoxen's neutral palette, clean panel lines, and documented material specs make architectural review boards say yes on the first submission.",
    metaTitle: 'HOA-Approved Composite Fence | Utah | Compoxen',
    metaDescription:
      "HOA-friendly composite fence for Utah subdivisions. Neutral architect-led colors, documented spec sheets, fast architectural review approval. (385) 483-3700",
    icon: Home,
    features: [
      { title: 'Architectural review packet', description: 'PDF spec sheet, color chips, and elevation drawings on request.' },
      { title: 'Neutral color palette', description: '5 colors selected to pass restrictive HOAs in Daybreak, Traverse, Promontory, more.' },
      { title: 'Clean panel face', description: 'No exposed fasteners or ribbed profiles HOAs flag.' },
    ],
    bullets: [
      "Pre-approved in many South Jordan, Lehi, and Park City HOAs",
      "We can submit on your behalf with an LOA",
      "Standardized 6 ft height that doesn't trigger variance review",
      "Color-matched gates and accessories",
    ],
    priceRange: '$52–$78 / linear ft installed',
    order: 5,
  },
  {
    slug: 'commercial-composite-fence',
    title: 'Commercial Composite Fencing',
    shortTitle: 'Commercial',
    tagline: "Multifamily, light commercial, and amenity-grade installs.",
    heroDescription:
      "Compoxen scales from single-family to multifamily. Apartment perimeters, pool decks, dog parks, and amenity enclosures get the same 20-year warranty material with project-managed install.",
    metaTitle: 'Commercial Composite Fencing | Utah Multifamily | Compoxen',
    metaDescription:
      "Utah commercial and multifamily composite fence install. Apartment perimeters, pool decks, amenity enclosures. Project-managed. (385) 483-3700",
    icon: Building2,
    features: [
      { title: 'Project management', description: 'Single point of contact from spec to walkthrough.' },
      { title: 'Volume material pricing', description: 'Tiered pricing for projects over 1,000 linear ft.' },
      { title: 'Insurance + lien waivers', description: 'Standard documentation for property managers and GCs.' },
    ],
    bullets: [
      "Multifamily-rated warranty available",
      "Phased install to keep amenities open",
      "Color-matched maintenance kits supplied at handoff",
      "Dedicated commercial estimator",
    ],
    priceRange: 'Quoted per project',
    order: 6,
  },
  {
    slug: 'composite-fence-repair',
    title: 'Composite Fence Repair',
    shortTitle: 'Repair',
    tagline: "Storm damage, vehicle impact, or panel swap — we fix it.",
    heroDescription:
      "Compoxen panels are durable, not indestructible. Wind events, vehicle impact, and homeowner mods happen. Our repair crews carry color-matched panels, posts, and hardware in the truck.",
    metaTitle: 'Composite Fence Repair | Utah | Compoxen',
    metaDescription:
      "Utah composite fence repair. Storm damage, panel swap, post resets. Color-matched material, in-truck inventory. (385) 483-3700",
    icon: Trees,
    features: [
      { title: 'In-truck inventory', description: 'Most repairs done same visit on common colors.' },
      { title: 'Insurance-friendly', description: 'Itemized estimates for storm/auto claims.' },
      { title: 'Post resets', description: 'Fix leaning posts without tearing out the run.' },
    ],
    bullets: [
      "Single-panel swaps without removing the whole run",
      "Color-matched repairs (or full re-color)",
      "Estimates within 48 hours",
      "Warranty-covered defects fixed at no charge",
    ],
    priceRange: 'From $185 service call',
    order: 7,
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}
