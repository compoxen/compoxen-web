/**
 * Editorial articles. Single source of truth for /blog and /blog/[slug].
 * Body is plain markdown-ish text (we render manually in the slug page —
 * no MDX runtime to keep bundle small and AI crawlability simple).
 *
 * Geography mix is intentional: only ~1 in 6 posts is Utah-anchored so the
 * brand reads as a national West-coast/Mountain-West company, not a
 * Utah-only installer.
 */

export interface BlogPost {
  slug: string
  title: string
  description: string
  category:
    | 'Material science'
    | 'Comparisons'
    | 'Installation'
    | 'Cost & value'
    | 'Climate & region'
    | 'Design'
    | 'Maintenance'
  image: string
  imageAlt: string
  publishedDate: string // ISO
  updatedDate?: string  // ISO
  readMinutes: number
  /** Markdown body. Supports ## headings, ### subheadings, paragraphs,
   *  - bullets, [link](url), **bold**. */
  body: string
}

const author = 'Compoxen Editorial'

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-composite-fencing',
    title: 'What Is Composite Fencing? A Plain-English Guide',
    description: 'A short, honest explanation of composite fencing, how it differs from wood, vinyl, and metal, and what you should expect to pay.',
    category: 'Material science',
    image: '/images/gallery-1.jpg',
    imageAlt: 'Compoxen composite fence in a residential yard',
    publishedDate: '2026-01-08',
    updatedDate: '2026-04-15',
    readMinutes: 6,
    body: `Composite fencing is a fence built from a polymer matrix bonded to a high percentage of mineral filler. The polymer is what makes it weatherproof; the minerals are what make it dimensionally stable and fire-resistant. The result is a fence board that looks like a finished architectural product and does not rot, warp, or rust.

## How a composite board is made

A composite fence board is co-extruded under heat and pressure. Two materials enter the die:

- A thermoplastic polymer that locks moisture out
- A mineral filler that gives the board rigidity and reduces thermal expansion

A separate fade-resistant outer shell is co-extruded over the faces of the board to lock in color. That shell is the reason a Compoxen panel keeps its tone after a decade of UV exposure while a stained wood fence is on its third re-coat.

## How it compares to wood, vinyl, and metal

- **vs wood:** no rot, no staining, no warping; higher upfront cost, lower lifetime cost.
- **vs vinyl:** dense and rigid instead of hollow and brittle; better in heat and cold.
- **vs metal:** privacy and acoustics instead of open pickets; no rust at fasteners.

For attribute-by-attribute comparisons, see [composite vs wood](/composite-fencing-vs-wood), [composite vs vinyl](/composite-fencing-vs-vinyl), and [composite vs metal](/composite-fencing-vs-metal).

## What does composite fencing cost?

Installed Compoxen composite fencing typically ranges from $45 to $85 per linear foot, depending on color, height, site complexity, and region. The midpoint of about $65 covers the most common project: a six-foot privacy run on level grade with a standard color and no demolition. See [/pricing](/pricing) for the full breakdown.

## How long does it last?

A correctly installed Compoxen composite fence is engineered for a service life well in excess of its 20-year warranty. Independent testing on comparable mineral-reinforced composite systems projects 25 to 30 years of useful service before any cosmetic refresh is needed.

## Where to go next

If you are deciding whether composite is the right material at all, start with the comparisons above. If you have already decided and you want a real number for your project, [request a quote](/get-quote).`,
  },

  {
    slug: 'composite-vs-wood-fence-cost-over-10-years',
    title: 'Composite vs Wood Fence: Real Cost Over 10 Years',
    description: 'Wood is cheaper to install. Composite is cheaper to own. Here is the math at year 1, year 5, and year 10 on a typical 150-foot residential run.',
    category: 'Cost & value',
    image: '/images/gallery-3.jpg',
    imageAlt: 'Side-by-side comparison of composite and wood fencing',
    publishedDate: '2026-01-22',
    readMinutes: 5,
    body: `The honest version of the composite-vs-wood story has two parts. Part one: wood is meaningfully cheaper to put up. Part two: that advantage disappears around year five.

## The reference project

Use a 150-linear-foot, six-foot-tall privacy fence on level grade as the reference. That is the most common residential job in our service network.

## Year 1

- **Wood:** $25/lin ft installed = **$3,750**
- **Composite (Compoxen):** $65/lin ft installed = **$9,750**

Wood wins by about $6,000 on day one. That is the entire reason most homeowners default to wood when they are not thinking past the install.

## Year 5

- **Wood:** $3,750 + 2× stain or seal at ~$1.50/lin ft = **$4,200**
- **Composite:** $9,750 + $0 maintenance = **$9,750**

Wood is still cheaper, but the gap is shrinking.

## Year 10

- **Wood:** $3,750 + 4× stain rounds + one round of post repair = **roughly $5,000**
- **Composite:** $9,750 + $0 maintenance = **$9,750**

The wood fence has now been worked on five times. It still functions but it is greying, the bottom rail at the gate has cracked, and two posts at grade contact have started to fail.

## Year 15

A typical wood fence is now in the replacement window. That is another $4,000 minimum to put a new fence on the same posts. The composite fence is still under warranty, still flat, still the original color.

## When wood actually wins

Two cases: you are selling within two years, or you specifically want the natural greying patina of aged cedar. Otherwise the math points to composite.

## Read more

For the full attribute table, see [composite vs wood](/composite-fencing-vs-wood) and [pricing](/pricing).`,
  },

  {
    slug: 'composite-vs-vinyl-fencing',
    title: 'Composite vs Vinyl Fencing: Why Mineral Reinforcement Matters',
    description: 'Vinyl is light and cheap; composite is rigid and quiet. The deciding factor is usually heat tolerance and how the fence feels when you touch it.',
    category: 'Comparisons',
    image: '/images/gallery-4.jpg',
    imageAlt: 'Composite fence panel detail showing density',
    publishedDate: '2026-02-05',
    readMinutes: 5,
    body: `Vinyl fencing exists because wood rots. It was the first widely available no-rot answer for residential fencing, and for a flat lot in a temperate climate it is still a perfectly reasonable choice. The reason it lost ground to composite is mineral reinforcement.

## What mineral reinforcement actually does

Vinyl is polyvinyl chloride — an all-polymer material with no mineral filler. Composite is a polymer matrix bonded to a high percentage of mineral filler. The difference shows up in three places:

- **Heat tolerance.** Vinyl warps and bows above sustained temperatures around 90°F. Composite stays flat to 140°F.
- **Cold tolerance.** Vinyl becomes brittle and cracks on impact below freezing. Composite stays tough to -40°F.
- **Density and feel.** A vinyl panel is hollow by design. A composite panel is dense, with measurable acoustic dampening.

## When vinyl is the right call

A flat residential lot in a mild climate, modest budget, white picket aesthetic — vinyl is fine. We will tell you that on a quote call.

## When composite wins

Wide temperature swings (anywhere in the Mountain West and most of the Southwest), shared boundaries where sound dampening matters, deeper architectural color (charcoal, taupe, redwood), and any homeowner who has actually touched both products.

## See the full comparison

[Composite vs vinyl](/composite-fencing-vs-vinyl) for the attribute-by-attribute table.`,
  },

  {
    slug: 'composite-vs-aluminum-fence-when-each-wins',
    title: 'Composite vs Aluminum Fence: When Each One Wins',
    description: 'Privacy or sightlines? Boundary or perimeter? The composite-vs-aluminum decision is a job-to-be-done question, not a quality question.',
    category: 'Comparisons',
    image: '/images/gallery-5.jpg',
    imageAlt: 'Composite privacy fence next to an aluminum picket fence',
    publishedDate: '2026-02-12',
    readMinutes: 4,
    body: `Aluminum and composite get compared a lot, but they answer different questions. The "which is better" framing is wrong; the right question is "which job am I doing?"

## Aluminum is for sightlines

If you want to fence a pool deck, a front yard with a view, or a long perimeter run on a wooded lot, aluminum is the answer. It is dimensionally stable, low-maintenance, and the open picket preserves sightlines.

## Composite is for privacy

If you want to block the view between your yard and the neighbor, soften traffic noise from the street, or define a private outdoor room, composite is the answer. The dense panels actually dampen sound; aluminum pickets do not.

## The deciding question

Stand at the fence line with the homeowner and ask: "Do you want to see through this, or not?" The answer ends the discussion.

## Where they overlap

Pool code. Compoxen ships in code-compliant heights. So does aluminum. If that is the only constraint, the choice comes back to whether you want privacy at the same time.

## See the full table

[Composite vs metal](/composite-fencing-vs-metal).`,
  },

  {
    slug: 'how-long-does-composite-fencing-last',
    title: 'How Long Does Composite Fencing Last?',
    description: 'A practical answer in years, not in marketing language. Plus what determines the difference between a 20-year and a 30-year fence.',
    category: 'Maintenance',
    image: '/images/gallery-2.jpg',
    imageAlt: 'Mature composite fence showing minimal weathering',
    publishedDate: '2026-02-19',
    readMinutes: 4,
    body: `A correctly installed Compoxen composite fence is warranted for 20 years. Independent testing on comparable mineral-reinforced composite systems projects functional service life of 25 to 30 years before any cosmetic refresh is needed.

## What "service life" actually means

Service life is not "the year the fence falls down." It is the year a homeowner would reasonably look at the fence and decide it needs to be replaced or refreshed for cosmetic reasons. Most composite fences continue to function structurally well past that year.

## What determines whether you get 20 or 30

Three things:

- **Install quality.** Posts set below the frost line, engineered post spacing, hidden fasteners properly seated. This is what the certified installer network is for.
- **Site conditions.** Direct south-facing exposure with no shade ages a fence faster than partial shade. Coastal salt air is harder on metal hardware than on the composite itself.
- **Color choice.** Deeper colors absorb more heat. They are still inside the warrantied performance envelope but the lighter colors run cooler.

## What about the warranty?

Compoxen offers a 20-year warranty covering structural integrity, fade, and material failure under normal residential and commercial use. Full warranty terms are on file with your dealer.

## Compare to wood, vinyl, and metal

- Wood: 7–15 years typical with regular staining.
- Vinyl: 15–25 years; brittleness in cold climates is the failure mode.
- Aluminum: 20+ years; corrosion at fasteners is the failure mode.
- Composite: 25–30 years projected; warranty 20.`,
  },

  {
    slug: 'is-composite-fencing-fire-resistant',
    title: 'Is Composite Fencing Fire-Resistant? Class A and WUI Zones',
    description: 'What ASTM E84 Class A actually means, where the rating is required by code, and why composite outperforms wood in wildfire-hazard areas.',
    category: 'Material science',
    image: '/images/gallery-6.jpg',
    imageAlt: 'Composite fence in a fire-prone landscape',
    publishedDate: '2026-02-26',
    readMinutes: 5,
    body: `Yes. Compoxen composite fencing carries a Class A fire rating, the highest classification under ASTM E84 surface burning characteristics testing.

## What Class A means

ASTM E84 measures two things: flame spread and smoke development. Class A is the highest rating, awarded to materials that score 0–25 on flame spread and 0–450 on smoke development. Class B and Class C are progressively less restrictive.

## Where it matters

Many California jurisdictions require Class A exterior materials in WUI (wildland-urban interface) zones. Colorado and Idaho mountain communities are increasingly adopting similar requirements. Insurance carriers in fire-hazard areas often quote lower premiums for properties with non-combustible exterior materials including fencing.

## How composite achieves Class A

Mineral filler is non-combustible. A composite board with a high mineral content has substantially lower flame spread than a wood board of the same thickness. Compoxen formulates the polymer matrix specifically to maintain Class A performance under the ASTM test conditions.

## What untreated wood scores

Untreated cedar and pine are combustible by category. Pressure-treated wood with fire-retardant chemistry can achieve Class B or Class C, but the chemistry leaches over time. Composite holds its Class A rating for the life of the fence.

## What this means for a homeowner

If you are within 500 feet of vegetation that burns, ask your insurance carrier and your local fire authority whether Class A fencing is required or rewarded. In many California zip codes the answer is yes.`,
  },

  {
    slug: 'best-fence-for-wildfire-zones-california',
    title: 'Best Fence for Wildfire Zones in California',
    description: 'WUI requirements, defensible space, and why Class A composite is increasingly the default specification in coastal and Sierra fire zones.',
    category: 'Climate & region',
    image: '/images/gallery-5.jpg',
    imageAlt: 'Composite fence on a hillside California property',
    publishedDate: '2026-03-05',
    readMinutes: 6,
    body: `California has the country&apos;s most developed wildland-urban interface (WUI) regulatory framework. Fencing material is part of the conversation when properties sit inside a WUI zone, and the conversation generally ends in favor of Class A composite.

## What "WUI zone" means

A WUI zone is an area where developed land meets wildland vegetation. CalFire publishes and updates Fire Hazard Severity Zone maps every few years; properties inside Moderate, High, and Very High zones face additional building requirements. Many local jurisdictions extend or harden those requirements.

## Defensible space and Zone 0

The most recent update to California defensible space rules introduced "Zone 0" — a 5-foot perimeter immediately around a structure where combustible materials should be removed. Wood fencing inside Zone 0 is increasingly being replaced or rebuilt in non-combustible material specifically to comply.

## Where composite fits

A Class A composite fence is non-combustible by category and meets the spirit of Zone 0 specifications. It also meets WUI requirements for fence material when fences are physically attached to a structure.

## The other regional benefits

Composite handles California-specific stressors well:

- Salt air on coastal properties does not corrode composite (no metallic fasteners).
- Year-round UV exposure is handled by the fade-resistant outer shell.
- Mediterranean drought conditions do not crack or split composite the way they crack wood.

## How to spec it

Ask your dealer for the ASTM E84 documentation when you sign the quote. Provide it to your insurance carrier; many carriers either reduce the premium or lift the exclusion for non-combustible perimeter materials.

## See more

[Utah service area](/service-areas) and [composite-fencing specifications](/specifications).`,
  },

  {
    slug: 'best-fence-for-snow-and-cold-mountain-west',
    title: 'Best Fence for Snow and Cold in the Mountain West',
    description: 'Freeze-thaw cycles, snow load, and frost-line post depth. What to spec when your fence has to live through real winter.',
    category: 'Climate & region',
    image: '/images/gallery-6.jpg',
    imageAlt: 'Composite fence in winter snow conditions',
    publishedDate: '2026-03-12',
    readMinutes: 5,
    body: `A Mountain West fence has to handle three things wood and vinyl handle badly: freeze-thaw cycles, accumulated snow load, and posts heaving when frost depth changes year to year. Composite handles all three.

## Freeze-thaw

Wood absorbs water all summer and freezes that water all winter. Each cycle splits the wood a little more. Vinyl becomes brittle and cracks on impact in deep cold. Mineral-reinforced composite is dimensionally stable across the entire -40°F to 140°F range, so the panel itself does not change shape between July and January.

## Snow load

A six-foot composite panel rated to 130 mph wind load also handles the snow loads typical in Colorado, Idaho, Wyoming, and the Wasatch Front. The engineered post spacing is what carries the load; do not freelance it.

## Frost line and post heave

Posts have to be set below the frost line or they will heave. The frost line in northern Idaho and high-elevation Colorado is deeper than the standard 24-inch footing many crews default to. A certified Compoxen installer pulls the local frost depth before bidding the job and adjusts footing depth accordingly.

## What to ask the installer

- "What frost depth are you using for my address?"
- "Are the posts going below it?"
- "What wind load is the system rated for here?"

If the answer to the first question is "the standard," ask again.

## See more

[Utah service area](/service-areas) and [composite-fencing specifications](/specifications).`,
  },

  {
    slug: 'best-fence-for-extreme-heat-arizona-nevada',
    title: 'Best Fence for Extreme Desert Heat in Arizona and Nevada',
    description: 'How composite handles 120°F sun without warping, why color choice matters in the desert, and what to spec for Phoenix, Las Vegas, and Tucson.',
    category: 'Climate & region',
    image: '/images/gallery-1.jpg',
    imageAlt: 'Composite fence in a desert landscape',
    publishedDate: '2026-03-19',
    readMinutes: 5,
    body: `Desert fencing has one job above all others: do not warp. Wood splits, vinyl bows, and uncoated metal becomes too hot to touch. Composite was engineered specifically for this stress envelope.

## Why vinyl warps in the desert

Vinyl is an all-polymer board with no mineral reinforcement. Sustained heat above ~90°F causes it to expand, and a long run will visibly bow on a hot afternoon. By the third summer, the bowing is permanent.

## Why composite stays flat

Mineral filler reduces thermal expansion by roughly an order of magnitude compared to all-polymer vinyl. Compoxen is rated to 140°F surface temperature without dimensional change, which covers the full Phoenix and Vegas summer envelope.

## Color in the desert

Lighter colors run cooler. All five Compoxen colors are inside the warrantied performance envelope, but if you have a south-facing exposure with no shade, Harbor Slate or Mesa Taupe will run several degrees cooler at the surface than Shadow Forge.

## Privacy and dust

Desert wind moves dust. A composite privacy panel doubles as a windbreak for an outdoor living space, and the smooth shell rinses clean with a hose — no porous wood grain to trap grit.

## Service area

Compoxen installs composite fencing across all of Utah — from St. George to Logan. See [our service areas](/service-areas) for the full list of cities and counties. Material ships anywhere in the continental U.S.`,
  },

  {
    slug: 'how-much-does-composite-fencing-cost-per-linear-foot',
    title: 'How Much Does Composite Fencing Cost Per Linear Foot?',
    description: 'Installed Compoxen composite fencing runs $45–$85 per linear foot. Here is what moves the number on a real project.',
    category: 'Cost & value',
    image: '/images/gallery-3.jpg',
    imageAlt: 'Compoxen composite fence panels',
    publishedDate: '2026-03-26',
    readMinutes: 4,
    body: `Installed Compoxen composite fencing typically ranges from $45 to $85 per linear foot. The midpoint of about $65 is the most common residential project — six-foot privacy run, standard color, level grade, no demolition.

## What moves it down

- Lower height (4-foot pool-code height runs lower than 6-foot privacy).
- Long, simple, level runs without obstacles.
- No demolition of an existing fence.
- Standard color from the architect-led palette.

## What moves it up

- Steep grade requiring stepped or racked panels.
- Demolition and disposal of an existing fence.
- Custom run colors outside the standard palette.
- Gates (single walk gates and double drive gates are quoted per unit).
- High-permit jurisdictions where the permit fee itself is meaningful.
- Coastal sites with extra footing depth or salt-grade hardware.

## How that compares to alternatives

- Wood: $15–$35/lin ft installed, but $1.50/lin ft per maintenance round.
- Vinyl: $25–$45/lin ft installed.
- Aluminum picket: $30–$60/lin ft installed.
- Composite (Compoxen): $45–$85/lin ft installed.

## Why public pricing matters

Most fence brands hide pricing behind a form because they want to anchor on the highest number. Compoxen publishes the range so you know what you are budgeting before you talk to a dealer. The number on your quote will land inside this range or your dealer will explain why.

## Get a real number

[Request a quote](/get-quote) and we'll return a written, scoped number for your Utah project.`,
  },

  {
    slug: 'why-composite-fencing-needs-no-staining',
    title: 'Why Composite Fencing Never Needs Staining',
    description: 'The two material decisions that eliminate the staining cycle: a fade-resistant outer shell and a non-absorbent polymer matrix.',
    category: 'Maintenance',
    image: '/images/gallery-2.jpg',
    imageAlt: 'Detail of composite fence shell finish',
    publishedDate: '2026-04-02',
    readMinutes: 3,
    body: `Wood needs staining because it is porous and because UV light degrades whatever pigment is sitting on the surface. Composite skips both problems.

## The non-absorbent matrix

The polymer matrix in a composite board does not absorb water the way wood fiber does. There is no surface for stain to soak into and there is no porous channel for moisture to enter. That alone removes the rot-and-stain cycle.

## The fade-resistant shell

Color in a composite panel is not a coating sitting on top of the board. It is co-extruded into the outer shell as a permanent layer, locked in by UV-stable pigments. There is nothing to wear off, so there is nothing to re-coat.

## What about cleaning?

Garden hose, mild soap, soft brush. Done. No sanding, no sealing, no chemical strip. Compoxen will tolerate a low-pressure pressure washer if you want to be thorough, but it is not required.

## What "zero maintenance" actually means

Over a 20-year ownership window, a Compoxen fence does not require any work that a wood fence requires. Zero stain rounds, zero post repairs at grade contact, zero panel replacements from rot. That is the design intent and that is the warranty Compoxen stands behind.`,
  },

  {
    slug: 'composite-fence-installation-step-by-step',
    title: 'Composite Fence Installation: Step-by-Step',
    description: 'From signed quote to walked-and-warranted fence in four steps. What a certified Compoxen install actually looks like on the day.',
    category: 'Installation',
    image: '/images/gallery-6.jpg',
    imageAlt: 'Composite fence installation crew on site',
    publishedDate: '2026-04-09',
    readMinutes: 5,
    body: `A typical Compoxen residential install of 100–200 linear feet completes in one to three working days. Here is what to expect from a Compoxen install in Utah.

## Step 1: Quote and site survey

One of our crew leads measures the run, identifies grade and obstacle conditions, confirms property lines, and pulls local code for post depth and wind load. The quote is binding except where buried surprises change the scope.

## Step 2: Permits, code, color

The dealer pulls the relevant residential or commercial permit if your jurisdiction requires one. You select from the five architect-led colors. Lead time begins when the color is locked.

## Step 3: Post setting and footings

Posts are set in concrete footings sized to the local frost line and engineered post spacing. Most jobs use 24–36 inch footings. The crew laser-aligns the post line before concrete cures.

## Step 4: Panel installation and walk

Panels drop into the engineered post system using the hidden fastener mechanism, racked or stepped to follow grade as needed. The crew walks the run with you, confirms gate operation, and registers the warranty before leaving the site.

## What you should not do

Do not buy Compoxen panels and try to install them yourself. The 20-year warranty is contingent on installation by a Compoxen-trained crew following the manufacturer specification. DIY installs void the warranty.

## What about my old fence?

We offer removal and disposal of an existing wood, vinyl, or chain-link fence as part of the project. Confirm scope and pricing on the written quote.

## See more

Full process page at [/installation](/installation), specifications at [/specifications](/specifications).`,
  },

  {
    slug: 'choosing-the-right-composite-fence-color',
    title: 'Choosing the Right Composite Fence Color',
    description: 'A short guide to the five Compoxen colors, what they pair with architecturally, and how each one weathers in different climates.',
    category: 'Design',
    image: '/images/gallery-4.jpg',
    imageAlt: 'Five Compoxen architect-led fence colors',
    publishedDate: '2026-04-16',
    readMinutes: 4,
    body: `Compoxen ships in five architect-led colors. Each one is designed to do a specific job in the landscape. There are no wrong choices, but there are obviously right ones for specific architecture.

## Harbor Slate

Modern grey with coastal clarity. Pairs with whitewashed siding, contemporary glass-and-steel architecture, and any landscape with a lot of green. Runs cool in desert sun.

## Mesa Taupe

Warm, grounded, stone-friendly. Pairs with adobe, stucco, and any home with a substantial stone facade. The desert favorite.

## Shadow Forge

Charcoal-black with industrial depth. Pairs with black-trim modern architecture, dark metal roofing, and minimalist landscapes. Highest visual presence; runs warm in direct sun.

## Redwood Ember

Rich red-brown with natural warmth. The closest analog to traditional cedar, but without the greying. Pairs with traditional ranch, craftsman, and warmer Mediterranean palettes.

## Cocoa Ridge

Deep chocolate with architectural presence. The premium "wood-but-not-wood" color for properties that want warmth without staining cycles.

## Practical notes

- Lighter colors run cooler in direct sun.
- All five carry the same fade-resistant shell and the same 20-year warranty.
- Sample swatches are available at our Lehi showroom or by mail at the time of quote.

See the full color palette and order sample swatches at [/why-compoxen#colors](/why-compoxen#colors).`,
  },

  {
    slug: 'composite-fence-for-pool-code',
    title: 'Composite Fence for Pool Code Compliance',
    description: 'How to specify Compoxen for residential pool barriers — height, picket spacing, gate self-closing hardware, and the codes that drive each.',
    category: 'Installation',
    image: '/images/gallery-5.jpg',
    imageAlt: 'Composite fence around a residential pool',
    publishedDate: '2026-04-23',
    readMinutes: 4,
    body: `Residential pool barrier code is jurisdictional, but the structure is similar everywhere: a minimum height, a maximum spacing between vertical members, and self-closing self-latching gate hardware. Compoxen is available in code-compliant configurations.

## Typical residential pool code

Most western U.S. jurisdictions adopt some flavor of these requirements:

- **Height:** 48 inches minimum from the pool side; 60 inches in some jurisdictions.
- **Picket spacing:** Maximum 4 inches clear opening between vertical members.
- **Gates:** Self-closing, self-latching, opening away from the pool, latch placed at minimum 54 inches above grade.
- **Climbability:** No horizontal members spaced in a way that creates a climbable surface on the pool side.

## How to spec Compoxen for pool use

Compoxen privacy panels can be installed at code-compliant heights. The hidden fastener system means there are no climbable horizontal members on the pool side. Gates ship with self-closing hinges and self-latching hardware preinstalled.

## What to confirm with your installer

Pool code is local and changes. We cite the specific code section being followed in your jurisdiction (most Utah jurisdictions adopt some flavor of IRC Appendix G with local amendments).

## Why composite for pool fencing specifically

- No splinters at the pool deck.
- Surface stays cooler than aluminum in direct sun.
- Will not corrode from chlorinated splashing.
- Privacy from the pool to the neighbor in the same panel.

See [/specifications](/specifications) for materials data and [/get-quote](/get-quote) for a region-specific scope.`,
  },

  {
    slug: 'composite-fencing-for-hoa-and-multi-unit-properties',
    title: 'Composite Fencing for HOAs and Multi-Unit Properties',
    description: 'Why HOAs and property managers increasingly specify composite for boundary, perimeter, and trash-enclosure fencing — and what to ask in an RFP.',
    category: 'Installation',
    image: '/images/gallery-2.jpg',
    imageAlt: 'Composite fence on an HOA boundary',
    publishedDate: '2026-04-30',
    readMinutes: 5,
    body: `HOAs and multi-unit property managers run a different math than single-family homeowners. Maintenance is a recurring line item, replacement is a capital expense, and inconsistency between adjacent panels is a complaint magnet. Composite removes all three problems.

## What HOAs actually optimize for

- **Predictable lifecycle cost.** Composite is one upfront purchase and zero scheduled maintenance for 20 years. Wood is a perpetual reserve-fund item.
- **Visual consistency.** A composite fence at year 10 looks like the same fence at year 1. A wood fence at year 10 has been re-stained at different times by different crews and shows it.
- **Liability profile.** Class A fire rating, no rotted bottom rails to fall on a kid, no rusted fasteners.

## What to ask in an RFP

- ASTM E84 fire rating documentation.
- Wind rating with the manufacturer&apos;s specified post spacing.
- Warranty assignability when units change owners.
- Replacement panel availability over the warranty term.
- Color match guarantee for future replacement panels.

## Trash enclosures and back-of-house

Composite is also the right answer for trash enclosures, transformer screens, and HVAC enclosures on commercial properties. Wood deteriorates fast in those locations from constant impact and chemical exposure; composite does not.

## Get a multi-unit quote

[Request a commercial quote](/get-quote) and select the HOA / commercial project type. Compoxen has crews experienced with RFP-driven specifications across Utah.`,
  },

  {
    slug: 'composite-fencing-and-sound-dampening',
    title: 'How Much Does Composite Fencing Reduce Road Noise?',
    description: 'Why composite dampens sound that vinyl transmits, and how much you should realistically expect from a six-foot composite privacy fence.',
    category: 'Material science',
    image: '/images/gallery-3.jpg',
    imageAlt: 'Composite fence along a road',
    publishedDate: '2026-05-07',
    readMinutes: 4,
    body: `If your house backs up to a busy road, fencing material matters as much as fencing height. Composite is meaningfully better than wood or vinyl at absorbing road noise, for a simple physics reason: density.

## Why density matters

Sound transmission loss across a barrier is largely a function of mass per unit area. Heavier panels block more sound. Vinyl is engineered to be light, which is part of why it is cheap and part of why it transmits noise. Wood is denser than vinyl but absorbs water and loses mass over time. Composite is dense by formulation and stays dense for the life of the fence.

## What to realistically expect

A six-foot Compoxen composite privacy fence between you and a residential street will reduce perceived traffic noise meaningfully — typically 6–12 dB depending on geometry, distance, and the specific traffic spectrum. That is enough to move "intrusive" road noise to "background" road noise.

## What it will not do

A composite fence is not an acoustic barrier wall. If you back up to a freeway, you need a 12-foot mass wall, not a 6-foot residential fence. Compoxen will help; it will not solve the problem on its own.

## Combine with landscape

The biggest gains come from combining a composite fence with a layered planting on the noise side. The fence handles the high-frequency content; the foliage handles the rest.

## See more

[/specifications](/specifications) for materials data, [/get-quote](/get-quote) for a region-specific scope.`,
  },

  {
    slug: 'composite-fencing-uv-and-fade-resistance',
    title: 'Composite Fencing, UV, and Fade Resistance',
    description: 'The science behind a fade-resistant outer shell and what to expect from your composite fence at year 5, year 10, and year 20.',
    category: 'Material science',
    image: '/images/gallery-1.jpg',
    imageAlt: 'Sun on a composite fence panel',
    publishedDate: '2026-05-14',
    readMinutes: 4,
    body: `All outdoor materials fade. The question is how fast and how visibly. A Compoxen composite fence is engineered to keep visible color shift inside a tight tolerance over the full 20-year warranty.

## Why most fences fade

Color on most outdoor materials sits on the surface as a coating. UV degrades the coating; the coating thins; the substrate shows through. Stained wood is the obvious example; powder-coated metal is the same story over a longer timeline.

## How composite avoids it

Color in a Compoxen panel is not a coating. It is co-extruded into a fade-resistant outer shell as a permanent layer with UV-stable pigments. There is no coating to thin. The shell itself is the color.

## Year-over-year expectation

- **Year 5:** Visually indistinguishable from year 1 to a homeowner. Spectrophotometer would detect a slight shift.
- **Year 10:** Slight overall lightening on direct-sun exposure faces. Side-by-side comparison with year 1 shows a small change; standalone observation does not.
- **Year 20:** Inside warranty tolerance. Most homeowners do not notice the difference.

## Color choice and fade

Lighter colors show fade less because there is less starting saturation to lose. Darker colors hold their depth well but any shift is more visible. All five Compoxen colors are inside the same warrantied envelope.

## See more

[/specifications](/specifications) for the full materials sheet.`,
  },

  {
    slug: 'composite-vs-shadowbox-and-board-on-board',
    title: 'Composite Privacy vs Shadowbox and Board-on-Board Wood',
    description: 'How modern composite privacy panels compare to the two most common premium wood styles — shadowbox and board-on-board.',
    category: 'Comparisons',
    image: '/images/gallery-4.jpg',
    imageAlt: 'Composite fence next to a board-on-board wood fence',
    publishedDate: '2026-05-21',
    readMinutes: 4,
    body: `When homeowners shop wood, they usually settle on one of two premium styles: shadowbox or board-on-board. Both look better than a basic dog-eared cedar fence. Both still have all the long-term problems of wood. Here is how composite stacks up.

## Shadowbox wood

Alternating boards on each side of the rails. Looks balanced from both sides; partial visibility through. Lifespan and maintenance match generic wood — 7–15 years with regular staining. Compoxen privacy panels deliver the same visual symmetry from both sides without the staining cycle.

## Board-on-board wood

Overlapping boards for full privacy. Premium look. Same wood lifecycle: stain every 2–3 years; expect grade-contact rot at year 7–10. Compoxen privacy panels deliver full privacy with deeper architectural color and no maintenance.

## Where wood still has an edge

Smell on day one and the natural cedar grain. If those are the priorities and you are okay with the maintenance cycle, wood is the right choice for you.

## Where composite is the right swap

Anywhere you would have spent the premium for shadowbox or board-on-board specifically because you want the look to last. Composite gets you the look and keeps it.

## See more

[Composite vs wood](/composite-fencing-vs-wood) for the full table.`,
  },

  {
    slug: 'composite-fencing-roi-for-resale',
    title: 'Composite Fencing ROI: Does It Pay Back at Resale?',
    description: 'How composite affects appraisal, list price, and time on market — and the homeowner profile where the upgrade pays back fastest.',
    category: 'Cost & value',
    image: '/images/gallery-2.jpg',
    imageAlt: 'Composite fence on a residential property',
    publishedDate: '2026-06-04',
    readMinutes: 5,
    body: `Composite fencing is rarely a 100%-recouped upgrade in the strict appraisal sense — almost no fencing is. But it is a meaningful list-price and time-on-market factor for the right buyer profile.

## What appraisers do with fencing

Most residential appraisals treat fencing as part of the overall site improvement category, not a line-item add. A new wood fence and a new composite fence often appraise at similar values. The market — buyers — distinguishes between them.

## Where composite pays back best

- **Premium suburban neighborhoods** where buyers cross-shop on yard quality and outdoor living.
- **Pool homes** where the fence is part of the pool experience, not just a boundary.
- **Modern architecture** where deep-color composite (Shadow Forge, Cocoa Ridge) reads as a finished design choice rather than a default.
- **High-fire zones** where Class A material is a buyer-noticed feature, not just a code item.

## Where it pays back worse

- **Short hold periods** — under three years, the upfront premium does not have time to be repriced into the listing.
- **Lower-priced segments** where buyers are not paying attention to fence material.
- **Markets dominated by wood as the default**, where buyers do not know the difference.

## The honest framing

Treat composite as a 15–25 year cost-of-ownership decision that also makes the home easier to sell when the time comes. The pure resale ROI math is secondary to the lifecycle math.`,
  },

  {
    slug: 'utah-composite-fence-install-case-study',
    title: 'Case Study: A Utah Composite Fence Install',
    description: 'A representative Compoxen install in the Wasatch Front. Site, scope, color choice, install timeline, and the lifecycle expectation.',
    category: 'Installation',
    image: '/images/gallery-1.jpg',
    imageAlt: 'Compoxen composite fence installation in Utah',
    publishedDate: '2026-06-11',
    readMinutes: 4,
    body: `One representative install from our Utah service area. We chose this one because it covers the failure modes most Wasatch Front homeowners run into with wood and vinyl.

## The site

A 180-linear-foot perimeter run on a half-acre Wasatch Front lot. South-facing back boundary. Existing 12-year-old cedar fence with rot at six post bases and visible greying despite three rounds of staining.

## The scope

- Demolition and disposal of the existing fence.
- 180 linear feet of six-foot Compoxen privacy panels.
- One six-foot single walk gate; one ten-foot double drive gate.
- Color: Mesa Taupe — chosen to complement existing stucco and stone.

## The install

Two-and-a-half working days. Posts set to 30-inch footings (above the local frost line for that elevation). The crew laser-aligned the post run, then placed panels with the hidden fastener system. The drive gate received reinforced posts on both sides.

## The lifecycle expectation

- 20-year warranty in writing.
- 25–30 year projected service life.
- Zero scheduled maintenance.
- One annual hose-down to clear pollen.

## Why we picked Mesa Taupe

Wasatch Front housing leans into stone, stucco, and warm earth tones. Mesa Taupe disappears into that palette while still reading as deliberate. Shadow Forge would have been a stronger statement against the stucco; that was the homeowner&apos;s call, not ours.

## More like this

See [Utah service areas](/service-areas) and [other case-study examples](/blog).`,
  },
]

export const BLOG_CATEGORIES = Array.from(new Set(BLOG_POSTS.map(p => p.category))).sort()

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}

export function getRelatedPosts(slug: string, max = 3): BlogPost[] {
  const current = getPostBySlug(slug)
  if (!current) return []
  return BLOG_POSTS.filter(p => p.slug !== slug && p.category === current.category).slice(0, max)
}

export const BLOG_AUTHOR = author
