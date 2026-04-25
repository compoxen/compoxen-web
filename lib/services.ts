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

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface MaterialHighlight {
  title: string
  description: string
}

export interface ServiceFAQ {
  q: string
  a: string
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
  /** SEO long-form intro paragraphs */
  longDescription: string[]
  /** Premium material spec callouts shown in spotlight section */
  materialHighlights: MaterialHighlight[]
  /** Numbered install/service workflow */
  processSteps: ProcessStep[]
  /** Why-Compoxen differentiator bullets */
  whyChooseUs: string[]
  /** Service-specific FAQs (powers FAQPage schema + accordion) */
  serviceFaqs: ServiceFAQ[]
  /** Cross-link slugs to related services */
  relatedServiceSlugs: string[]
  /** Lead-time copy shown in trust strip */
  leadTime: string
}

// Premium material highlights reused across services
const PREMIUM_MATERIAL: MaterialHighlight[] = [
  {
    title: 'Mineral-reinforced composite core',
    description:
      'Engineered with mineral fiber + recycled HDPE for a denser, stiffer panel that outperforms first-gen WPC. Won\u2019t warp, splinter, or rot.',
  },
  {
    title: 'Cap-stock UV shell',
    description:
      'Proprietary co-extruded shell locks color through Utah\u2019s 300+ sun days a year. ASTM-tested fade resistance.',
  },
  {
    title: 'Hidden fastener system',
    description:
      'Stainless clip-and-rail system means zero visible screws, no rust streaks, and a clean architectural face on both sides.',
  },
  {
    title: '5 architect-led colors',
    description:
      'Coastal Drift, Slate Charcoal, Aged Walnut, Stone Beige, and Onyx Black \u2014 deep matte finishes designed to age gracefully.',
  },
]

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
    leadTime: '1–3 weeks from signed quote to install date',
    longDescription: [
      'Compoxen is the only Utah composite fence company that manufactures the material and installs it. That means the crew on your jobsite was trained on the exact panel they’re putting up — not a generic WPC product they ordered yesterday. Hidden-fastener clip rails, post-set depths, and gate hardware specs are all dialed in before the truck leaves Lehi.',
      'Most Utah residential installs are 2–4 days from post-set to final walkthrough. We pull permits where required (Salt Lake City, Park City, and most HOAs), handle the 811 utility locate, and haul off the old fence. You get one written quote, one warranty, and one number to call — not a separate supplier and installer pointing fingers when something’s off.',
      'Because we engineer for Utah — hot summers, dry air, freeze-thaw winters, and gusty Wasatch Front winds — our panels carry a 20-year material warranty backed by a 5-year workmanship warranty. No staining, no annual sealant, no rotting kickboards.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Free written quote', description: 'On-site or virtual measure within 48 hours. Itemized line items, no high-pressure sales.' },
      { step: 2, title: 'Color + style selection', description: 'Pick your color, height, and gate count. We confirm HOA submittals if needed.' },
      { step: 3, title: 'Schedule + 811 locate', description: 'We book your install date and call utility locates. You don’t lift a finger.' },
      { step: 4, title: 'Install + walkthrough', description: '2–4 day install. Post-set day one, panels day two, gates and walkthrough day three.' },
    ],
    whyChooseUs: [
      'Manufacturer + installer in one — no finger-pointing on warranty claims',
      'Hidden-fastener system used on 100% of installs (no exposed screws)',
      'Utah-engineered for 130 mph wind, 7,000 ft elevation UV, freeze-thaw',
      '20-year material + 5-year labor warranty in a single document',
    ],
    serviceFaqs: [
      { q: 'How long does a composite fence installation take?', a: 'Most Utah residential installs are 2–4 days. Day one is post-setting (we use concrete footings 30–36 inches deep), day two is panel install with hidden fasteners, and day three is gates and final walkthrough.' },
      { q: 'Do you pull permits?', a: 'Yes. We pull fence permits in Salt Lake City, Park City, and any other Utah jurisdiction that requires one. For HOA submittals, we provide architectural review packets and can submit on your behalf with a letter of authorization.' },
      { q: 'What’s the price per linear foot installed?', a: 'Most Utah composite fence installs land between $45 and $78 per linear foot installed, depending on height, color, gate count, and site prep. We give itemized written quotes — no estimates over the phone.' },
      { q: 'Will composite fence warp in Utah heat?', a: 'No. Compoxen uses a mineral-reinforced composite core with a UV-stable cap-stock shell. We’ve tested panels through Utah summers (110°F surface temps) and winters (−20°F) without dimensional change.' },
      { q: 'Do you remove the old fence?', a: 'Yes. Old fence haul-off is included in every quote. We dispose of wood, vinyl, or chain link properly and leave the line ready for new posts.' },
    ],
    relatedServiceSlugs: ['composite-privacy-fence', 'hoa-approved-composite-fence', 'composite-fence-supply'],
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
    leadTime: '1–3 weeks from quote to install',
    longDescription: [
      'A privacy fence is supposed to give you a backyard that feels like yours — not a chore that needs sanding every other summer. Compoxen privacy fence is a solid-panel composite system that blocks line of sight, dampens road and neighbor noise, and shrugs off Utah’s sun and snow without a single coat of stain.',
      'Our panels run a true 6 feet tall (some competitors short you 5½ inches once you account for ground clearance) with a tongue-and-groove edge profile so light gaps don’t open up as the fence settles. Hidden fasteners mean both you and your neighbor get a clean architectural face — no “good side / bad side” arguments.',
      'Mineral-reinforced cores make Compoxen meaningfully denser than first-generation WPC, which translates to real sound dampening for backyards near busy streets, schools, or parks. Add an optional dog-board kick rail to stop dig-outs without a separate buried trench.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Backyard measure', description: 'On-site or virtual measure. We map gates, slope, and any tree/utility obstructions.' },
      { step: 2, title: 'Color + gate plan', description: 'Pick from 5 colors. Confirm single, double, or man-gate placement.' },
      { step: 3, title: 'Old fence removal', description: 'We tear out and haul away wood, vinyl, or chain link before post-set.' },
      { step: 4, title: 'Install + walkthrough', description: 'Concrete-set posts, hidden-clip panels, gates, and a final walkthrough — typically 2–3 days.' },
    ],
    whyChooseUs: [
      'True 6 ft panel — no shrinking allowance for ground clearance',
      'Zero light gaps thanks to tongue-and-groove edge',
      'Both faces look identical — keeps neighbors and HOAs happy',
      '20-year warranty against fade, warp, rot, and insect damage',
    ],
    serviceFaqs: [
      { q: 'How tall is a Compoxen privacy fence?', a: 'Standard is 6 ft. We can also do 5 ft semi-privacy and 7–8 ft tall privacy where local code allows. Most Utah cities permit 6 ft in rear/side yards without a variance.' },
      { q: 'Will my neighbor see the back side?', a: 'Both sides are identical. Hidden-fastener clip rails mean no exposed screws or rails on either face — a major upgrade over wood and most vinyl systems.' },
      { q: 'Does it really block sound?', a: 'Composite panels are denser than wood or hollow vinyl, which meaningfully reduces perceived noise. Customers near I-15, Bangerter, and frontage roads consistently report a quieter backyard after install.' },
      { q: 'Can I add a dog kick board?', a: 'Yes. We offer a matching composite kick rail at the base that prevents pets from digging out without trenching a separate barrier.' },
      { q: 'What about Utah wind?', a: 'Privacy panels are wind-rated to 130 mph when installed on our concrete-set post system at 6 ft on-center. We’ve had zero panel failures in Wasatch Front installs.' },
    ],
    relatedServiceSlugs: ['composite-fence-installation', 'hoa-approved-composite-fence', 'composite-pool-fence'],
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
    leadTime: '1–3 weeks; we coordinate around pool inspections',
    longDescription: [
      'Utah pool barrier code is specific: minimum 48 inch height, self-closing and self-latching gates, no climbable surfaces, and gaps no larger than 4 inches at any point. Compoxen pool fence ships engineered to those specs — you don’t have to argue with the inspector.',
      'Composite is ideal pool material. Chlorine splash, sprinkler overspray, and constant moisture destroy wood and pit metal over time. Our cap-stock shell shrugs all of that off, and the panel face is smooth (no horizontal rails for kids to use as a ladder).',
      'We can match your pool fence to a privacy fence on the rest of the yard so the whole installation looks intentional — not like a code retrofit bolted on after the fact. Inspector-ready documentation comes with every install.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Code review + measure', description: 'We measure the pool deck and confirm gate placement against Utah barrier code.' },
      { step: 2, title: 'Spec sheet to inspector', description: 'You get a signed spec sheet that maps Compoxen panels to each code line item.' },
      { step: 3, title: 'Install + gate setup', description: 'Concrete-set posts, panel install, and self-closing gate calibration.' },
      { step: 4, title: 'Final inspection prep', description: 'We walk through with you so you’re ready for the city or county pool inspector.' },
    ],
    whyChooseUs: [
      'Engineered to meet Utah residential pool barrier code on day one',
      'Smooth, non-climbable panel face — no horizontal foot rails',
      'Self-closing magnetic-latch gate hardware included',
      'Won’t rust, rot, or pit from chlorine and splash',
    ],
    serviceFaqs: [
      { q: 'Does Compoxen meet Utah pool fence code?', a: 'Yes. Our pool fence panels meet or exceed the Utah residential pool barrier code: minimum 48 in height, self-closing self-latching gates, no climbable horizontal members, and no gaps over 4 inches. We provide a spec sheet for your inspector.' },
      { q: 'Will chlorine damage the fence?', a: 'No. The cap-stock UV shell is non-porous and chemically inert. Chlorine splash, salt water, and sprinkler overspray do not affect Compoxen panels.' },
      { q: 'Can I match it to my backyard privacy fence?', a: 'Yes. We make pool and privacy panels in the same 5 colors and the same edge profile so the whole install reads as one system.' },
      { q: 'Are the gates included?', a: 'Self-closing spring hinges and magnetic latches are included on every gate. Color-matched hardware comes standard.' },
    ],
    relatedServiceSlugs: ['composite-privacy-fence', 'composite-fence-installation', 'hoa-approved-composite-fence'],
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
    leadTime: 'Most stock orders ship within 3–7 business days',
    longDescription: [
      'Some homeowners want to install their own fence. Some contractors want a premium composite they can mark up without the licensing strings of a national franchise. Compoxen Supply sells Compoxen panels, posts, gate kits, and hidden-fastener hardware direct — no installer required.',
      'We palletize and label by run so a 200-foot order shows up sorted: posts in one pallet, panels in another, hardware kitted by section. Pickup at our Lehi yard, or forklift-offload statewide.',
      'Contractor accounts get tiered pricing, will-call holds, and access to our installer training program. Every panel still ships with the same 20-year material warranty.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Confirm linear footage', description: 'Send us your line plan or rough footage. We size the kit and quote material.' },
      { step: 2, title: 'Pick color + components', description: 'Choose from 5 colors, pick gate kits, post caps, and any optional kick rail.' },
      { step: 3, title: 'Pickup or delivery', description: 'Lehi yard pickup or forklift-offload delivery anywhere in Utah.' },
      { step: 4, title: 'Install support', description: 'Free phone support during DIY install. Need help? We can crew up too.' },
    ],
    whyChooseUs: [
      'Direct factory pricing — no national franchise markup',
      'Material-only warranty stays valid on DIY installs',
      'Pre-kitted by run so install day is sorted, not chaotic',
      'Free install-tip phone support during your build',
    ],
    serviceFaqs: [
      { q: 'Can I install Compoxen myself?', a: 'Yes. The hidden-fastener clip system is designed to be DIY-friendly with basic tools (impact driver, post-hole digger, level). We include written install instructions and offer free phone support.' },
      { q: 'Does the warranty cover DIY installs?', a: 'The 20-year material warranty stays valid on DIY installs as long as posts are concrete-set and panels are installed per spec. The 5-year labor warranty only applies when our crews install.' },
      { q: 'Do you deliver to all of Utah?', a: 'Yes. We forklift-deliver to any Utah jobsite. Pickup is also available at our Lehi yard during business hours.' },
      { q: 'Do you offer contractor pricing?', a: 'Yes. Set up a contractor account and you get tiered linear-foot pricing, net-30 terms (with credit approval), and will-call holds.' },
    ],
    relatedServiceSlugs: ['composite-fence-installation', 'composite-fence-repair', 'commercial-composite-fence'],
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
    leadTime: '2–6 weeks (depends on HOA review turnaround)',
    longDescription: [
      'If you live in a Utah master-planned community — Daybreak, Traverse Mountain, Promontory, Suncrest, Highbury, or any HOA on the Wasatch Front — your fence has to pass architectural review before a post goes in. Most denials come down to three things: color the board doesn’t recognize, a height that triggers variance, or a material with no documented spec sheet.',
      'Compoxen fixes all three. Our 5 colors are neutral architect-led tones (no faux-wood orange, no shiny vinyl white). We default to a 6 ft privacy height that fits the standard HOA envelope without a variance. And every order ships with a PDF spec sheet, color chip, and elevation drawing your board can attach to your file.',
      'We’ve been pre-approved in dozens of Utah HOAs. With a Letter of Authorization, we’ll submit your packet and follow up with the management company so you don’t have to chase emails for six weeks.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'HOA submittal packet', description: 'We assemble your spec sheet, color chip, elevation drawing, and site plan.' },
      { step: 2, title: 'Submit + follow up', description: 'With an LOA we submit on your behalf and chase the management company for status.' },
      { step: 3, title: 'Approval + scheduling', description: 'Once approved, we schedule install and confirm any HOA color or gate stipulations.' },
      { step: 4, title: 'Install + close-out', description: 'We install per the approved spec and provide a final-condition photo packet for your HOA file.' },
    ],
    whyChooseUs: [
      'Pre-approved in many Wasatch Front HOAs (Daybreak, Traverse, Suncrest, Promontory)',
      'Documented material spec sheet — no “unknown product” denials',
      'Neutral color palette designed to pass architectural review',
      'We submit on your behalf with a Letter of Authorization',
    ],
    serviceFaqs: [
      { q: 'Will my HOA approve a composite fence?', a: 'Most Utah HOAs that allow vinyl or wood will approve composite — especially with a documented spec sheet and a neutral color. We provide a full submittal packet with every quote.' },
      { q: 'Which HOAs is Compoxen already approved in?', a: 'We have approval history in Daybreak, Traverse Mountain, Suncrest, Highbury, Promontory, Talons Cove, and many more. Even if your HOA isn’t on the list, our spec sheet is built for review boards to say yes.' },
      { q: 'Can you submit the HOA paperwork for me?', a: 'Yes. With a Letter of Authorization, we submit the architectural packet and follow up with your HOA management company.' },
      { q: 'How long does HOA approval take?', a: 'Most Utah HOAs return decisions in 2–4 weeks. Some Park City HOAs take 6+ weeks. We start the install scheduling once approval is in hand.' },
    ],
    relatedServiceSlugs: ['composite-privacy-fence', 'composite-fence-installation', 'composite-pool-fence'],
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
    leadTime: '4–12 weeks depending on scope and material lead',
    longDescription: [
      'Multifamily and light commercial properties chew through wood and vinyl. Apartment perimeters take ball impacts, dog parks take constant chewing and digging, and pool decks take chlorine splash year-round. Compoxen Commercial puts the same engineered composite that performs on residential installs into a project-managed package built for property managers and GCs.',
      'You get a dedicated commercial estimator from quote through walkthrough. We phase installs so amenities (pool, dog park, playground) stay open as long as possible, and we deliver insurance certs and conditional / unconditional lien waivers without you asking.',
      'At handoff, every project gets a color-matched maintenance kit (replacement clips, panel section, touch-up cap) so on-site maintenance can handle small dings without calling us back out. Multifamily-rated warranty extensions are available on volume orders.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Site walk + scope', description: 'Estimator walks the property, scopes the run, and identifies phasing constraints.' },
      { step: 2, title: 'Bid package', description: 'Itemized bid with material, labor, mobilization, and phased schedule.' },
      { step: 3, title: 'Phased install', description: 'We work in phases to keep critical amenities (pool, leasing) open.' },
      { step: 4, title: 'Handoff + maintenance kit', description: 'Final walkthrough, lien waivers, and a color-matched maintenance kit for on-site staff.' },
    ],
    whyChooseUs: [
      'Dedicated commercial estimator and PM',
      'Phased scheduling to keep amenities online during install',
      'Standard insurance certs + lien waiver workflow',
      'Volume-tier pricing on 1,000+ linear ft projects',
    ],
    serviceFaqs: [
      { q: 'Do you bid commercial GC packages?', a: 'Yes. We bid both direct-to-owner and as a fence subcontractor on GC packages. We can match your bid form, schedule, and submittal requirements.' },
      { q: 'Can you provide insurance and lien waivers?', a: 'Yes. We carry $2M general liability, workers comp, and auto. We provide conditional and unconditional lien waivers per pay app.' },
      { q: 'Do you offer volume pricing?', a: 'Yes. Projects over 1,000 linear ft get tiered material pricing. Multi-property portfolios get an additional master-agreement discount.' },
      { q: 'How do you keep amenities open during install?', a: 'We phase installs so the pool, dog park, or leasing path stays accessible as long as possible. Temporary fencing is included where required.' },
    ],
    relatedServiceSlugs: ['composite-fence-installation', 'composite-pool-fence', 'composite-fence-supply'],
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
    leadTime: 'Most repairs scheduled within 3–7 days',
    longDescription: [
      'Composite is durable, not bulletproof. A 70 mph windstorm, a backed-up SUV, or a kid with a baseball bat will eventually meet your fence. The good news: Compoxen is built for spot repair. Our hidden-fastener clip system means we can pull a single damaged panel and slot in a color-matched replacement without tearing out the whole run.',
      'Our repair trucks carry the most common colors and panel sizes in stock. Most service calls are resolved on the first visit. For larger storm jobs we provide insurance-ready itemized estimates with photos and line items your adjuster can match against the claim.',
      'Warranty-covered defects (panel fade outside spec, manufacturer defect, hardware failure) are fixed at no charge. Out-of-warranty work is a flat $185 service call plus parts.',
    ],
    materialHighlights: PREMIUM_MATERIAL,
    processSteps: [
      { step: 1, title: 'Call or quote request', description: 'Text us a photo or call. We give a ballpark by phone in most cases.' },
      { step: 2, title: 'Estimate within 48 hours', description: 'On-site visit if needed. Itemized estimate with insurance line items if applicable.' },
      { step: 3, title: 'Repair visit', description: 'Most common-color repairs are done in a single visit — we carry inventory in the truck.' },
      { step: 4, title: 'Walkthrough + warranty', description: 'We confirm the fix, register repair under warranty, and send before/after photos.' },
    ],
    whyChooseUs: [
      'Spot-repair friendly system (no full-run tear-outs)',
      'Color-matched stock in the repair truck',
      'Insurance-ready itemized estimates with photos',
      'Warranty defects fixed at no charge — no nickel-and-diming',
    ],
    serviceFaqs: [
      { q: 'Can you repair a fence that wasn’t installed by Compoxen?', a: 'Yes — if it’s Compoxen material. We can also repair most third-party composite, vinyl, and wood fences (we’ll quote those separately).' },
      { q: 'Will the repair color match?', a: 'On Compoxen panels, yes — we stock all 5 colors. On older or third-party composite, we’ll match as close as possible and walk you through the options.' },
      { q: 'Is storm damage covered by my insurance?', a: 'Most Utah homeowner policies cover wind and impact damage. We provide itemized estimates with photos that adjusters can use to settle the claim.' },
      { q: 'How fast can you come out?', a: 'Most repairs are scheduled within 3–7 days. Storm-emergency calls (full panel down, exposed pool) get priority same-week response.' },
    ],
    relatedServiceSlugs: ['composite-fence-installation', 'composite-fence-supply', 'composite-privacy-fence'],
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}

export function getRelatedServices(slug: string): ServiceData[] {
  const svc = getServiceBySlug(slug)
  if (!svc) return []
  return svc.relatedServiceSlugs
    .map(s => getServiceBySlug(s))
    .filter((s): s is ServiceData => Boolean(s))
}
