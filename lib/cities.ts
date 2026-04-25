/**
 * Compoxen — Utah Service Area Database
 * Composite fence supply + professional installation across Utah.
 *
 * Tiers reflect population and projected demand, not service quality.
 * Every city listed receives the same product, warranty, and installer training.
 */

export type CityTier = 'tier1' | 'tier2' | 'tier3' | 'micro'

export type UtahCounty =
  | 'Salt Lake'
  | 'Utah'
  | 'Davis'
  | 'Weber'
  | 'Tooele'
  | 'Wasatch'
  | 'Summit'
  | 'Cache'

export interface CityData {
  name: string
  slug: string
  county: UtahCounty
  tier: CityTier
  population: number
  neighborhoods: string[]
  metaTitle: string
  metaDescription: string
  /** Optional one-liner used in city hero. Falls back to a generated default. */
  intro?: string
}

export const COUNTIES: UtahCounty[] = [
  'Salt Lake',
  'Utah',
  'Davis',
  'Weber',
  'Tooele',
  'Wasatch',
  'Summit',
  'Cache',
]

const meta = (name: string, opts?: { tier?: CityTier; suffix?: string }) => {
  const tier = opts?.tier ?? 'tier2'
  const adj =
    tier === 'tier1'
      ? "premium"
      : tier === 'tier2'
      ? "engineered"
      : tier === 'tier3'
      ? "low-maintenance"
      : "modern"
  return {
    metaTitle: `${name} Composite Fence Installation | Compoxen Utah`,
    metaDescription: `${name}, UT composite fence supply and professional install. ${
      adj.charAt(0).toUpperCase() + adj.slice(1)
    } UV-stable composite, 20-year warranty, zero maintenance. Free quotes. (385) 530-0588`,
  }
}

const cityDatabase: CityData[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // TIER 1 — Population 50,000+
  // ─────────────────────────────────────────────────────────────────────────
  {
    name: 'Salt Lake City',
    slug: 'salt-lake-city',
    county: 'Salt Lake',
    tier: 'tier1',
    population: 200133,
    neighborhoods: [
      'Sugar House', 'The Avenues', 'Liberty Park', 'Marmalade', 'Rose Park',
      'Glendale', 'East Bench', 'Federal Heights', 'Capitol Hill', 'Downtown',
    ],
    intro:
      "From historic Avenues bungalows to new Sugar House builds, Salt Lake homeowners pick Compoxen for fences that ignore the inversion, the snowmelt, and the sun.",
    ...meta('Salt Lake City', { tier: 'tier1' }),
    metaTitle: 'Salt Lake City Composite Fence Installation | Compoxen',
    metaDescription:
      "Salt Lake City composite fence supply and certified install. Engineered for SLC's freeze-thaw and high-altitude UV. 20-year warranty. Free quotes. (385) 530-0588",
  },
  {
    name: 'West Valley City',
    slug: 'west-valley-city',
    county: 'Salt Lake',
    tier: 'tier1',
    population: 140230,
    neighborhoods: ['Hunter', 'Granger', 'Chesterfield', 'Valley Fair'],
    ...meta('West Valley City', { tier: 'tier1' }),
  },
  {
    name: 'West Jordan',
    slug: 'west-jordan',
    county: 'Salt Lake',
    tier: 'tier1',
    population: 116961,
    neighborhoods: ['Oquirrh Shadows', 'Jordan Landing', 'Mountain Shadows'],
    ...meta('West Jordan', { tier: 'tier1' }),
  },
  {
    name: 'Provo',
    slug: 'provo',
    county: 'Utah',
    tier: 'tier1',
    population: 115162,
    neighborhoods: ['North Park', 'South Provo', 'Edgemont', 'Carterville', 'Sunset'],
    intro:
      "Provo's mix of student rentals, established neighborhoods, and new construction means one thing for fences: they need to last decades without a stain can.",
    ...meta('Provo', { tier: 'tier1' }),
  },
  {
    name: 'Orem',
    slug: 'orem',
    county: 'Utah',
    tier: 'tier1',
    population: 97499,
    neighborhoods: ['Northridge', 'Cascade', 'Vineyard Connector', 'University Mall Area'],
    ...meta('Orem', { tier: 'tier1' }),
  },
  {
    name: 'Sandy',
    slug: 'sandy',
    county: 'Salt Lake',
    tier: 'tier1',
    population: 96904,
    neighborhoods: ['Alta Canyon', 'Sandy Hills', 'Quarry Bend', 'Bell Canyon'],
    ...meta('Sandy', { tier: 'tier1' }),
  },
  {
    name: 'Ogden',
    slug: 'ogden',
    county: 'Weber',
    tier: 'tier1',
    population: 87000,
    neighborhoods: ['Downtown Ogden', 'East Bench', 'South Ogden Valley'],
    ...meta('Ogden', { tier: 'tier1' }),
  },
  {
    name: 'Layton',
    slug: 'layton',
    county: 'Davis',
    tier: 'tier1',
    population: 81773,
    neighborhoods: ['East Layton', 'West Layton', 'Layton Hills'],
    ...meta('Layton', { tier: 'tier1' }),
  },
  {
    name: 'South Jordan',
    slug: 'south-jordan',
    county: 'Salt Lake',
    tier: 'tier1',
    population: 77487,
    neighborhoods: ['Daybreak', 'Glenmoor', 'South Jordan Heights'],
    intro:
      "Daybreak HOAs see more fence applications than most Utah cities — Compoxen's clean panel system passes architectural review on the first submission.",
    ...meta('South Jordan', { tier: 'tier1' }),
  },
  {
    name: 'Lehi',
    slug: 'lehi',
    county: 'Utah',
    tier: 'tier1',
    population: 75000,
    neighborhoods: ['Traverse Mountain', 'Thanksgiving Point', 'Wines Park'],
    intro:
      "Silicon Slopes builds fast — Compoxen ships fast. Lehi homeowners and builders get composite fencing on schedule, finished the day it goes in.",
    ...meta('Lehi', { tier: 'tier1' }),
  },

  // ─────────────────────────────────────────────────────────────────────────
  // TIER 2 — Population 20,000–50,000
  // ─────────────────────────────────────────────────────────────────────────
  { name: 'Logan',             slug: 'logan',             county: 'Cache',     tier: 'tier2', population: 53690, neighborhoods: ['Island', 'Adams', 'Wilson'],                              ...meta('Logan',             { tier: 'tier2' }) },
  { name: 'Draper',            slug: 'draper',            county: 'Salt Lake', tier: 'tier2', population: 48587, neighborhoods: ['SunCrest', 'Corner Canyon', 'Draper Park'],               ...meta('Draper',            { tier: 'tier2' }) },
  { name: 'Eagle Mountain',    slug: 'eagle-mountain',    county: 'Utah',      tier: 'tier2', population: 47000, neighborhoods: ['Ranches', 'Eagle Point', 'Cedar Pass'],                   ...meta('Eagle Mountain',    { tier: 'tier2' }) },
  { name: 'Saratoga Springs',  slug: 'saratoga-springs',  county: 'Utah',      tier: 'tier2', population: 44000, neighborhoods: ['Harbor Bay', 'Talus Ridge', 'Jacobs Ranch'],              ...meta('Saratoga Springs',  { tier: 'tier2' }) },
  { name: 'Bountiful',         slug: 'bountiful',         county: 'Davis',     tier: 'tier2', population: 44000, neighborhoods: ['North Bountiful', 'South Bountiful', 'Bountiful Hills'],  ...meta('Bountiful',         { tier: 'tier2' }) },
  { name: 'Riverton',          slug: 'riverton',          county: 'Salt Lake', tier: 'tier2', population: 44000, neighborhoods: ['Western Springs', 'Riverton Meadows', 'Midas Creek'],     ...meta('Riverton',          { tier: 'tier2' }) },
  { name: 'Herriman',          slug: 'herriman',          county: 'Salt Lake', tier: 'tier2', population: 43000, neighborhoods: ['Blackridge', 'Rosecrest', 'Herriman Towne Center'],       ...meta('Herriman',          { tier: 'tier2' }) },
  { name: 'Spanish Fork',      slug: 'spanish-fork',      county: 'Utah',      tier: 'tier2', population: 42000, neighborhoods: ['Spanish Oaks', 'Harvest Hills', 'River Bottom'],          ...meta('Spanish Fork',      { tier: 'tier2' }) },
  { name: 'Pleasant Grove',    slug: 'pleasant-grove',    county: 'Utah',      tier: 'tier2', population: 39000, neighborhoods: ['Grove Creek', 'Valley View', 'Manila Creek'],             ...meta('Pleasant Grove',    { tier: 'tier2' }) },
  { name: 'Roy',               slug: 'roy',               county: 'Weber',     tier: 'tier2', population: 39000, neighborhoods: ['Roy Center', 'West Roy'],                                 ...meta('Roy',               { tier: 'tier2' }) },
  { name: 'Tooele',            slug: 'tooele',            county: 'Tooele',    tier: 'tier2', population: 38000, neighborhoods: ['Overlake', 'East Tooele', 'Downtown Tooele'],             ...meta('Tooele',            { tier: 'tier2' }) },
  { name: 'Murray',            slug: 'murray',            county: 'Salt Lake', tier: 'tier2', population: 50637, neighborhoods: ['Fashion Place', 'Murray Park', 'Old Murray'],             ...meta('Murray',            { tier: 'tier2' }) },
  { name: 'Millcreek',         slug: 'millcreek',         county: 'Salt Lake', tier: 'tier2', population: 36000, neighborhoods: ['Canyon Rim', 'Millcreek East', 'Evergreen'],              ...meta('Millcreek',         { tier: 'tier2' }) },
  { name: 'Midvale',           slug: 'midvale',           county: 'Salt Lake', tier: 'tier2', population: 36000, neighborhoods: ['Bingham Junction', 'Union Square', 'East Midvale'],       ...meta('Midvale',           { tier: 'tier2' }) },
  { name: 'Cottonwood Heights',slug: 'cottonwood-heights',county: 'Salt Lake', tier: 'tier2', population: 34000, neighborhoods: ['Canyon Estates', 'Cottonwood Park', 'Heights Village'],   ...meta('Cottonwood Heights',{ tier: 'tier2' }) },
  { name: 'Springville',       slug: 'springville',       county: 'Utah',      tier: 'tier2', population: 34000, neighborhoods: ['Hobble Creek', 'Spring Creek', 'Art City'],               ...meta('Springville',       { tier: 'tier2' }) },
  { name: 'American Fork',     slug: 'american-fork',     county: 'Utah',      tier: 'tier2', population: 33000, neighborhoods: ['Harbor Village', 'North Valley', 'Temple Area'],          ...meta('American Fork',     { tier: 'tier2' }) },
  { name: 'Kaysville',         slug: 'kaysville',         county: 'Davis',     tier: 'tier2', population: 32000, neighborhoods: ['Kaysville Center', 'East Kaysville'],                     ...meta('Kaysville',         { tier: 'tier2' }) },
  { name: 'Clearfield',        slug: 'clearfield',        county: 'Davis',     tier: 'tier2', population: 32000, neighborhoods: ['Clearfield Center', 'Freeport Center'],                   ...meta('Clearfield',        { tier: 'tier2' }) },
  { name: 'Holladay',          slug: 'holladay',          county: 'Salt Lake', tier: 'tier2', population: 31000, neighborhoods: ['Holladay Hills', 'Walker Lane', 'Cottonwood'],            ...meta('Holladay',          { tier: 'tier2' }) },
  { name: 'Syracuse',          slug: 'syracuse',          county: 'Davis',     tier: 'tier2', population: 30000, neighborhoods: ['Bluff Ridge', 'Syracuse Center'],                         ...meta('Syracuse',          { tier: 'tier2' }) },
  { name: 'Kearns',            slug: 'kearns',            county: 'Salt Lake', tier: 'tier2', population: 36000, neighborhoods: ['Kearns Center', 'West Kearns', 'East Kearns'],            ...meta('Kearns',            { tier: 'tier2' }) },
  { name: 'Magna',             slug: 'magna',             county: 'Salt Lake', tier: 'tier2', population: 27000, neighborhoods: ['Magna Main', 'Pleasant Green'],                           ...meta('Magna',             { tier: 'tier2' }) },
  { name: 'South Salt Lake',   slug: 'south-salt-lake',   county: 'Salt Lake', tier: 'tier2', population: 25000, neighborhoods: ['Granite', 'Roosevelt'],                                   ...meta('South Salt Lake',   { tier: 'tier2' }) },
  { name: 'North Ogden',       slug: 'north-ogden',       county: 'Weber',     tier: 'tier2', population: 22000, neighborhoods: ['North Ogden Center', 'Pleasant Valley'],                  ...meta('North Ogden',       { tier: 'tier2' }) },
  { name: 'South Ogden',       slug: 'south-ogden',       county: 'Weber',     tier: 'tier2', population: 17000, neighborhoods: ['Burch Creek', 'Country Hills'],                           ...meta('South Ogden',       { tier: 'tier2' }) },
  { name: 'Clinton',           slug: 'clinton',           county: 'Davis',     tier: 'tier2', population: 22000, neighborhoods: ['Clinton Center', 'West Clinton'],                         ...meta('Clinton',           { tier: 'tier2' }) },
  { name: 'Payson',            slug: 'payson',            county: 'Utah',      tier: 'tier2', population: 21000, neighborhoods: ['Payson Center', 'East Mountain', 'Peteetneet'],           ...meta('Payson',            { tier: 'tier2' }) },
  { name: 'Highland',          slug: 'highland',          county: 'Utah',      tier: 'tier2', population: 20000, neighborhoods: ['Highland Glen', 'Beacon Hill', 'Alpine Cove'],            ...meta('Highland',          { tier: 'tier2' }) },
  { name: 'Santaquin',         slug: 'santaquin',         county: 'Utah',      tier: 'tier2', population: 20000, neighborhoods: ['Santaquin Center', 'East Santaquin'],                     ...meta('Santaquin',         { tier: 'tier2' }) },
  { name: 'Farmington',        slug: 'farmington',        county: 'Davis',     tier: 'tier2', population: 25000, neighborhoods: ['Station Park', 'East Farmington'],                        ...meta('Farmington',        { tier: 'tier2' }) },
  { name: 'Centerville',       slug: 'centerville',       county: 'Davis',     tier: 'tier2', population: 17500, neighborhoods: ['Founders Square', 'Hidden Hollow'],                       ...meta('Centerville',       { tier: 'tier2' }) },

  // ─────────────────────────────────────────────────────────────────────────
  // TIER 3 — Population 10,000–20,000
  // ─────────────────────────────────────────────────────────────────────────
  { name: 'Bluffdale',      slug: 'bluffdale',      county: 'Salt Lake', tier: 'tier3', population: 17000, neighborhoods: ['Independence', 'Day Ranches'],                ...meta('Bluffdale',      { tier: 'tier3' }) },
  { name: 'Heber City',     slug: 'heber-city',     county: 'Wasatch',   tier: 'tier3', population: 17000, neighborhoods: ['Red Ledges', 'Old Town Heber'],               ...meta('Heber City',     { tier: 'tier3' }) },
  { name: 'Vineyard',       slug: 'vineyard',       county: 'Utah',      tier: 'tier3', population: 17000, neighborhoods: ['Vineyard Center', 'Lakeside'],                ...meta('Vineyard',       { tier: 'tier3' }) },
  { name: 'Grantsville',    slug: 'grantsville',    county: 'Tooele',    tier: 'tier3', population: 12000, neighborhoods: ['South Willow', 'Grantsville Center'],         ...meta('Grantsville',    { tier: 'tier3' }) },
  { name: 'Mapleton',       slug: 'mapleton',       county: 'Utah',      tier: 'tier3', population: 12000, neighborhoods: ['Mapleton Hills', 'Maple Creek'],              ...meta('Mapleton',       { tier: 'tier3' }) },
  { name: 'Stansbury Park', slug: 'stansbury-park', county: 'Tooele',    tier: 'tier3', population: 11000, neighborhoods: ['Lakeside', 'Stansbury Lake'],                 ...meta('Stansbury Park', { tier: 'tier3' }) },
  { name: 'Lindon',         slug: 'lindon',         county: 'Utah',      tier: 'tier3', population: 11000, neighborhoods: ['Lindon Heights', 'Foothill'],                 ...meta('Lindon',         { tier: 'tier3' }) },
  { name: 'Salem',          slug: 'salem',          county: 'Utah',      tier: 'tier3', population: 9000,  neighborhoods: ['Salem Center', 'East Salem'],                 ...meta('Salem',          { tier: 'tier3' }) },
  { name: 'Alpine',         slug: 'alpine',         county: 'Utah',      tier: 'tier3', population: 10000, neighborhoods: ['Alpine Village', 'Alpine Cove', 'Lambert Park'], ...meta('Alpine',     { tier: 'tier3' }) },
  { name: 'Cedar Hills',    slug: 'cedar-hills',    county: 'Utah',      tier: 'tier3', population: 10000, neighborhoods: ['Cedar Ridge', 'Cottonwood Drive'],            ...meta('Cedar Hills',    { tier: 'tier3' }) },
  { name: 'Park City',      slug: 'park-city',      county: 'Summit',    tier: 'tier3', population: 8400,  neighborhoods: ['Old Town', 'Deer Valley', 'Promontory'],
    intro:
      "Park City's snow load, deer pressure, and HOA scrutiny are exactly what Compoxen was built for. Mountain-tested in the climate that proves materials.",
    ...meta('Park City',     { tier: 'tier3' }) },
  { name: 'Smithfield',     slug: 'smithfield',     county: 'Cache',     tier: 'tier3', population: 13000, neighborhoods: ['Smithfield Center', 'Mack Park'],             ...meta('Smithfield',     { tier: 'tier3' }) },
  { name: 'North Logan',    slug: 'north-logan',    county: 'Cache',     tier: 'tier3', population: 11000, neighborhoods: ['Green Canyon', 'Cliffside'],                  ...meta('North Logan',    { tier: 'tier3' }) },
  { name: 'Hyrum',          slug: 'hyrum',          county: 'Cache',     tier: 'tier3', population: 9000,  neighborhoods: ['Hyrum Center', 'East Hyrum'],                 ...meta('Hyrum',          { tier: 'tier3' }) },
  { name: 'Kamas',          slug: 'kamas',          county: 'Summit',    tier: 'micro', population: 2500,  neighborhoods: ['Kamas Valley'],                               ...meta('Kamas',          { tier: 'micro' }) },
  { name: 'Coalville',      slug: 'coalville',      county: 'Summit',    tier: 'micro', population: 1500,  neighborhoods: ['Coalville Center'],                           ...meta('Coalville',      { tier: 'micro' }) },
  { name: 'Midway',         slug: 'midway',         county: 'Wasatch',   tier: 'tier3', population: 6000,  neighborhoods: ['Old Midway', 'Soldier Hollow'],               ...meta('Midway',         { tier: 'tier3' }) },
  { name: 'Wellsville',     slug: 'wellsville',     county: 'Cache',     tier: 'micro', population: 4000,  neighborhoods: ['Wellsville Main'],                            ...meta('Wellsville',     { tier: 'micro' }) },
  { name: 'Providence',     slug: 'providence',     county: 'Cache',     tier: 'tier3', population: 8000,  neighborhoods: ['Providence Center', 'East Bench'],            ...meta('Providence',     { tier: 'tier3' }) },
  { name: 'Nibley',         slug: 'nibley',         county: 'Cache',     tier: 'micro', population: 7500,  neighborhoods: ['Nibley Park'],                                ...meta('Nibley',         { tier: 'micro' }) },
  { name: 'Erda',           slug: 'erda',           county: 'Tooele',    tier: 'micro', population: 4000,  neighborhoods: ['Erda Acres'],                                 ...meta('Erda',           { tier: 'micro' }) },
  { name: 'Lake Point',     slug: 'lake-point',     county: 'Tooele',    tier: 'micro', population: 2000,  neighborhoods: ['Lake Point'],                                 ...meta('Lake Point',     { tier: 'micro' }) },
  { name: 'Woods Cross',    slug: 'woods-cross',    county: 'Davis',     tier: 'tier3', population: 12000, neighborhoods: ['Foxboro', 'Woods Cross Center'],              ...meta('Woods Cross',    { tier: 'tier3' }) },
  { name: 'North Salt Lake',slug: 'north-salt-lake',county: 'Davis',     tier: 'tier3', population: 22000, neighborhoods: ['Foxboro North', 'Eaglewood'],                 ...meta('North Salt Lake',{ tier: 'tier3' }) },
  { name: 'West Bountiful', slug: 'west-bountiful', county: 'Davis',     tier: 'tier3', population: 6000,  neighborhoods: ['West Bountiful Center'],                      ...meta('West Bountiful', { tier: 'tier3' }) },
  { name: 'Pleasant View',  slug: 'pleasant-view',  county: 'Weber',     tier: 'tier3', population: 11000, neighborhoods: ['Pleasant View Heights', 'North Mountain Rd'], ...meta('Pleasant View',  { tier: 'tier3' }) },
  { name: 'Harrisville',    slug: 'harrisville',    county: 'Weber',     tier: 'micro', population: 7000,  neighborhoods: ['Harrisville Center'],                         ...meta('Harrisville',    { tier: 'micro' }) },
  { name: 'Plain City',     slug: 'plain-city',     county: 'Weber',     tier: 'micro', population: 7500,  neighborhoods: ['Plain City'],                                 ...meta('Plain City',     { tier: 'micro' }) },
  { name: 'Farr West',      slug: 'farr-west',      county: 'Weber',     tier: 'micro', population: 7500,  neighborhoods: ['Farr West'],                                  ...meta('Farr West',      { tier: 'micro' }) },
  { name: 'West Haven',     slug: 'west-haven',     county: 'Weber',     tier: 'tier3', population: 15000, neighborhoods: ['West Haven Center'],                          ...meta('West Haven',     { tier: 'tier3' }) },
  { name: 'Fruit Heights',  slug: 'fruit-heights',  county: 'Davis',     tier: 'micro', population: 6000,  neighborhoods: ['Fruit Heights'],                              ...meta('Fruit Heights',  { tier: 'micro' }) },
  { name: 'South Weber',    slug: 'south-weber',    county: 'Davis',     tier: 'micro', population: 8000,  neighborhoods: ['South Weber'],                                ...meta('South Weber',    { tier: 'micro' }) },
  { name: 'Elk Ridge',      slug: 'elk-ridge',      county: 'Utah',      tier: 'micro', population: 4000,  neighborhoods: ['Elk Ridge'],                                  ...meta('Elk Ridge',      { tier: 'micro' }) },
  { name: 'Woodland Hills', slug: 'woodland-hills', county: 'Utah',      tier: 'micro', population: 1500,  neighborhoods: ['Woodland Hills'],                             ...meta('Woodland Hills', { tier: 'micro' }) },
]

// ─── Public API ───────────────────────────────────────────────────────────

export function getAllCities(): CityData[] {
  return cityDatabase
}

export function getCityBySlug(slug: string): CityData | undefined {
  return cityDatabase.find(c => c.slug === slug)
}

export function getCitiesByCounty(county: UtahCounty): CityData[] {
  return cityDatabase.filter(c => c.county === county)
}

export function getCitiesByTier(tier: CityTier): CityData[] {
  return cityDatabase.filter(c => c.tier === tier)
}

export function getAllCitySlugs(): string[] {
  return cityDatabase.map(c => c.slug)
}

/** URL slug used for the dynamic city landing pages: /composite-fence-{slug} */
export function getCityRouteSlug(city: CityData | string): string {
  const slug = typeof city === 'string' ? city : city.slug
  return `composite-fence-${slug}`
}

/** /composite-fence-{slug} */
export function getCityHref(city: CityData | string): string {
  return `/${getCityRouteSlug(city)}`
}

/** Counties with at least one city assigned */
export function getActiveCounties(): UtahCounty[] {
  const set = new Set<UtahCounty>()
  for (const c of cityDatabase) set.add(c.county)
  return COUNTIES.filter(c => set.has(c))
}

export function groupCitiesByCounty(cities: CityData[] = cityDatabase): Record<UtahCounty, CityData[]> {
  const grouped = {} as Record<UtahCounty, CityData[]>
  for (const c of cities) {
    if (!grouped[c.county]) grouped[c.county] = []
    grouped[c.county].push(c)
  }
  for (const k in grouped) {
    grouped[k as UtahCounty].sort((a, b) => b.population - a.population)
  }
  return grouped
}

/** Returns the N nearest cities (same county first, then by population proximity) */
export function getNearbyCities(city: CityData, count = 6): CityData[] {
  const sameCounty = cityDatabase
    .filter(c => c.county === city.county && c.slug !== city.slug)
    .sort((a, b) => Math.abs(a.population - city.population) - Math.abs(b.population - city.population))
  if (sameCounty.length >= count) return sameCounty.slice(0, count)
  const others = cityDatabase
    .filter(c => c.county !== city.county && c.slug !== city.slug)
    .sort((a, b) => b.population - a.population)
  return [...sameCounty, ...others].slice(0, count)
}

// County metadata used by /counties/[county]
export const COUNTY_META: Record<UtahCounty, { slug: string; name: string; description: string; seat: string }> = {
  'Salt Lake': {
    slug: 'salt-lake',
    name: 'Salt Lake County',
    description:
      "Utah's most populous county. Compoxen serves urban Salt Lake, the suburban south valley, and every HOA on the bench.",
    seat: 'Salt Lake City',
  },
  'Utah': {
    slug: 'utah',
    name: 'Utah County',
    description:
      "From Lehi's tech corridor to Payson's ag-edge growth, Utah County is the fastest-building county in the state. Compoxen ships fast and installs faster.",
    seat: 'Provo',
  },
  'Davis': {
    slug: 'davis',
    name: 'Davis County',
    description:
      "Davis County homeowners want clean, low-fuss exteriors. Compoxen panels handle the I-15 dust and the lake-effect winters without needing a stain can.",
    seat: 'Farmington',
  },
  'Weber': {
    slug: 'weber',
    name: 'Weber County',
    description:
      "Ogden and the Weber bench see hard winters and harder summers. Compoxen is engineered for the freeze-thaw cycle that ends wood fences early.",
    seat: 'Ogden',
  },
  'Tooele': {
    slug: 'tooele',
    name: 'Tooele County',
    description:
      "Wide-open lots, dust, sun, and wind. Compoxen's mineral-reinforced composite shrugs off Tooele's climate while giving suburban homes a modern edge.",
    seat: 'Tooele',
  },
  'Wasatch': {
    slug: 'wasatch',
    name: 'Wasatch County',
    description:
      "Heber Valley homes deal with snow load and high-altitude UV. Compoxen is the same composite installed at 9,000 ft in Park City — built for it.",
    seat: 'Heber City',
  },
  'Summit': {
    slug: 'summit',
    name: 'Summit County',
    description:
      "Park City and the Snyderville Basin demand premium materials with HOA-approved aesthetics. Compoxen meets both at altitude.",
    seat: 'Coalville',
  },
  'Cache': {
    slug: 'cache',
    name: 'Cache County',
    description:
      "Cache Valley residents know cold. Compoxen handles the basin's winter inversions and dry summers without checking, splitting, or fading.",
    seat: 'Logan',
  },
}

export function getCountyBySlug(slug: string) {
  return Object.values(COUNTY_META).find(c => c.slug === slug)
}
