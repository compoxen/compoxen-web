/**
 * Single source of truth for FAQ content.
 * Used by both the visible /faq page AND the FAQPage JSON-LD schema.
 * The visible text and the schema text MUST match verbatim — AI engines
 * distrust schemas whose answers don't appear on the page.
 */

export interface FAQItem {
  q: string
  a: string
  /** Section/cluster this Q&A belongs to (for grouping on /faq). */
  section: FAQSection
}

export type FAQSection =
  | 'Material & engineering'
  | 'Lifecycle & maintenance'
  | 'Cost & purchase'
  | 'Installation'
  | 'Availability & service area'

export const FAQS: FAQItem[] = [
  // ─── Material & engineering ───────────────────────────────────────
  {
    section: 'Material & engineering',
    q: 'What is composite fencing?',
    a: 'Composite fencing is a fencing material made by binding mineral and polymer components into rigid panels and posts. The result is a board that looks like a finished architectural product but does not rot like wood, warp like vinyl, or rust like metal. Compoxen uses a mineral-reinforced polymer composite engineered for permanent outdoor exposure.',
  },
  {
    section: 'Material & engineering',
    q: 'What is mineral-reinforced polymer composite?',
    a: 'Mineral-reinforced polymer composite is a class of composite that combines a polymer matrix with a high percentage of mineral filler. The mineral content provides dimensional stability and fire resistance; the polymer provides moisture resistance and color depth. Compoxen panels use this construction with a fade-resistant outer shell.',
  },
  {
    section: 'Material & engineering',
    q: 'Is composite fencing fire-resistant?',
    a: 'Compoxen composite fencing carries a Class A fire rating, the highest classification under ASTM E84 surface burning characteristics testing. This makes it suitable for use in wildland-urban interface zones, including California fire-hazard areas where Class A materials are commonly required.',
  },
  {
    section: 'Material & engineering',
    q: 'What temperature range does composite fencing handle?',
    a: 'Compoxen composite fencing is rated for a working temperature range of -40°F to 140°F. Mineral reinforcement reduces thermal expansion and contraction compared to all-polymer products like vinyl, which lets the panels stay flat through freeze-thaw cycles and high desert heat.',
  },
  {
    section: 'Material & engineering',
    q: 'What wind rating does composite fencing have?',
    a: 'When installed per the manufacturer specification with engineered post spacing and hidden fastener system, Compoxen composite fencing is rated to 130 mph wind load. That is sufficient for most non-coastal residential applications and many high-wind exposure zones.',
  },
  {
    section: 'Material & engineering',
    q: 'How does composite fencing handle UV exposure?',
    a: 'Compoxen panels use UV-stable pigments encapsulated in a fade-resistant outer shell. This is the same pigment-shell strategy used in premium composite decking and is the reason composite fencing keeps its color far longer than painted or stained wood.',
  },
  {
    section: 'Material & engineering',
    q: 'Is composite fencing eco-friendly?',
    a: 'Composite fencing is meaningfully more sustainable than wood over a 20-year period because it eliminates the staining, sealing, and replacement cycles that drive most of wood fencing\'s lifetime carbon and chemical footprint. End-of-life composite is also recyclable through industrial reprocessors.',
  },
  {
    section: 'Material & engineering',
    q: 'Does composite fencing dampen sound?',
    a: 'Yes. The density of mineral-reinforced composite is significantly higher than wood or vinyl of the same thickness, which gives Compoxen panels measurable acoustic dampening. This is one of the reasons it is specified for properties along busy roads and shared boundary lines.',
  },

  // ─── Lifecycle & maintenance ──────────────────────────────────────
  {
    section: 'Lifecycle & maintenance',
    q: 'How long does composite fencing last?',
    a: 'A correctly installed Compoxen composite fence is engineered for a service life well in excess of its 20-year warranty term. Independent testing on similar mineral-reinforced composite systems projects functional service life of 25–30 years before any cosmetic refresh is needed.',
  },
  {
    section: 'Lifecycle & maintenance',
    q: 'What warranty does Compoxen offer?',
    a: 'Compoxen offers a 20-year warranty on all composite fencing products, covering structural integrity, fade, and material failure under normal residential and commercial use. Full warranty terms are available on request.',
  },
  {
    section: 'Lifecycle & maintenance',
    q: 'Does composite fencing fade over time?',
    a: 'All outdoor materials experience some color shift over decades. Compoxen\'s fade-resistant shell is engineered to keep color shift within tight tolerances over the warranty period — far less than painted wood, which typically requires re-staining every 2–3 years to maintain appearance.',
  },
  {
    section: 'Lifecycle & maintenance',
    q: 'How do I clean a composite fence?',
    a: 'Cleaning a Compoxen fence requires only a garden hose, mild soap, and a soft brush. There is no annual sanding, sealing, or staining. Pressure washing on a low setting is acceptable but not required.',
  },
  {
    section: 'Lifecycle & maintenance',
    q: 'What happens if a panel is damaged?',
    a: 'Individual Compoxen panels and posts can be replaced without disassembling the entire run, thanks to the hidden fastener system. Your certified installer can source a replacement matching your original color.',
  },
  {
    section: 'Lifecycle & maintenance',
    q: 'Does the warranty transfer if I sell my home?',
    a: 'Compoxen\'s 20-year warranty is generally tied to the property and transfers with ownership for the remaining term. Confirm specifics in your warranty document at time of purchase.',
  },

  // ─── Cost & purchase ──────────────────────────────────────────────
  {
    section: 'Cost & purchase',
    q: 'How much does composite fencing cost per linear foot?',
    a: 'Installed Compoxen composite fencing in Utah typically ranges from $45 to $85 per linear foot depending on color, height, site complexity, and location. Material-only pricing is available out of our Lehi warehouse. Request a quote for an exact number on your project.',
  },
  {
    section: 'Cost & purchase',
    q: 'Why is composite fencing more expensive than wood up front?',
    a: 'Composite carries a higher upfront cost because the material itself is more engineered than wood. The total-cost-of-ownership picture inverts within roughly 5–7 years once you factor in the staining, repairs, and eventual replacement that wood requires.',
  },
  {
    section: 'Cost & purchase',
    q: 'Do you offer financing?',
    a: 'Financing is available through several Compoxen certified installer networks. Ask your dealer for current options when you request a quote.',
  },
  {
    section: 'Cost & purchase',
    q: 'Is there a minimum order?',
    a: 'There is no minimum order for installed projects in Utah. Material-only orders out of our Lehi warehouse have a small minimum to cover handling — request a material quote for current terms.',
  },
  {
    section: 'Cost & purchase',
    q: 'What is the typical lead time?',
    a: 'Lead time for Compoxen residential projects is typically 2–4 weeks from approved quote to install start, depending on color availability and your installer\'s schedule. Larger commercial projects are scheduled separately.',
  },

  // ─── Installation ─────────────────────────────────────────────────
  {
    section: 'Installation',
    q: 'Can I install Compoxen fencing myself?',
    a: 'Compoxen is sold and installed exclusively through a certified installer network. The hidden fastener system, engineered post spacing, and warranty terms all assume professional installation, which is what allows the 20-year warranty to be honored.',
  },
  {
    section: 'Installation',
    q: 'How long does installation take?',
    a: 'A typical residential Compoxen install of 100–200 linear feet completes in 1–3 working days, including post setting and panel placement. Larger or stepped runs on uneven ground take longer.',
  },
  {
    section: 'Installation',
    q: 'How deep do the posts go?',
    a: 'Compoxen post depth follows local frost and wind code, typically 24–36 inches with concrete footings. Your certified installer pulls the appropriate code for your jurisdiction before bidding the project.',
  },
  {
    section: 'Installation',
    q: 'Can it be installed on uneven or sloped ground?',
    a: 'Yes. Compoxen panels can be racked or stepped to follow grade, and the engineered post system accommodates significant elevation changes across a single property line.',
  },
  {
    section: 'Installation',
    q: 'Can my old fence be removed by the same crew?',
    a: 'Yes. Most Compoxen certified installers offer removal and disposal of an existing wood, vinyl, or chain-link fence as part of the project. Confirm scope and pricing on your quote.',
  },

  // ─── Availability & service area ──────────────────────────────────
  {
    section: 'Availability & service area',
    q: 'Where is Compoxen composite fencing available?',
    a: 'Compoxen is a Utah company. We supply composite fence material and install it across the entire state of Utah — Salt Lake, Utah, Davis, Weber, Tooele, Wasatch, Summit, and Cache counties. Material kits also ship to most US states for DIY installs.',
  },
  {
    section: 'Availability & service area',
    q: 'Do you install in my Utah city?',
    a: 'Yes. If your address has a Utah ZIP (840–847), Compoxen installs there. Use the availability checker on the home page or visit /service-areas to find your city directly.',
  },
  {
    section: 'Availability & service area',
    q: 'How fast can you start a project in Utah?',
    a: 'Most Utah projects book within a week of quote acceptance and finish in 2–4 days for a typical residential lot. Larger or commercial projects are scheduled per scope.',
  },
  {
    section: 'Availability & service area',
    q: 'Is Compoxen designed in the USA?',
    a: 'Yes. Compoxen is designed in the United States and tested in Utah’s extreme climate — high-altitude UV, freeze-thaw, and dry desert wind — before any product reaches market.',
  },
  {
    section: 'Availability & service area',
    q: 'How do I find Compoxen near me in Utah?',
    a: 'Enter your Utah ZIP in the availability checker on the home page, or browse /service-areas to find your city directly. Every Utah city listed receives the same product, warranty, and installer training.',
  },
]

export const FAQ_SECTIONS: FAQSection[] = [
  'Material & engineering',
  'Lifecycle & maintenance',
  'Cost & purchase',
  'Installation',
  'Availability & service area',
]
