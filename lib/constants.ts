/**
 * Compoxen Global Constants
 * Central configuration for brand, service areas, and business data
 */

// ─── Brand ────────────────────────────────────────────────────────
export const BRAND = {
  name: 'Compoxen',
  tagline: 'Premium Composite Fencing',
  designOrigin: 'Designed in USA',
  designCenter: 'Salt Lake City, UT',
  phone: '1-800-COMPOXEN',
  localPhone: '385-483-3700',
  email: 'info@compoxen.com',
  privacyEmail: 'privacy@compoxen.com',
  address: 'Lehi, Utah',
  url: 'https://compoxen.com',
  founded: 2024,
} as const

// ─── Service Areas ────────────────────────────────────────────────
export type ServiceStatus = 'active' | 'coming-soon' | 'waiting-list'

export interface StateInfo {
  name: string
  abbreviation: string
  slug: string
  status: ServiceStatus
  region: string
  climateZone: string
  description: string
  benefits: string[]
  installerCount?: number
  launchDate?: string // ISO date for coming-soon states
}

export const SERVICE_STATES: Record<string, StateInfo> = {
  UT: {
    name: 'Utah',
    abbreviation: 'UT',
    slug: 'utah',
    status: 'active',
    region: 'Mountain West',
    climateZone: 'Semi-arid / Alpine',
    description: 'Our home base. Compoxen was born in Utah\'s extreme climate—tested against scorching summers, harsh winters, and everything in between.',
    benefits: [
      'Engineered for extreme temperature swings (-20°F to 110°F)',
      'UV-stable pigments for high-altitude sun exposure',
      'Snow load rated for mountain communities',
      'Zero maintenance in dry, dusty conditions',
    ],
    installerCount: 45,
  },
  CO: {
    name: 'Colorado',
    abbreviation: 'CO',
    slug: 'colorado',
    status: 'active',
    region: 'Mountain West',
    climateZone: 'Alpine / Semi-arid',
    description: 'From Denver\'s Front Range to Aspen\'s mountain estates, Compoxen delivers premium fencing that thrives at altitude.',
    benefits: [
      'Rated for 9,000+ ft elevation UV exposure',
      'Handles rapid freeze-thaw cycles without warping',
      'Wind-resistant engineered connections',
      'Wildfire-resistant composite materials',
    ],
    installerCount: 32,
  },
  ID: {
    name: 'Idaho',
    abbreviation: 'ID',
    slug: 'idaho',
    status: 'active',
    region: 'Mountain West',
    climateZone: 'Continental / Semi-arid',
    description: 'Idaho\'s growing communities deserve fencing that matches the landscape. Compoxen performs in Boise\'s heat and Sun Valley\'s cold.',
    benefits: [
      'Proven in continental climate extremes',
      'Agricultural-grade durability',
      'Modern aesthetics for Boise\'s booming neighborhoods',
      'Zero rot in high-moisture mountain zones',
    ],
    installerCount: 18,
  },
  CA: {
    name: 'California',
    abbreviation: 'CA',
    slug: 'california',
    status: 'active',
    region: 'West Coast',
    climateZone: 'Mediterranean / Desert',
    description: 'From coastal homes to desert estates, California architects choose Compoxen for its clean lines and permanent performance.',
    benefits: [
      'Fire-resistant Class A composite materials',
      'Salt air and coastal moisture resistant',
      'UV-stable in year-round California sun',
      'Meets California Building Code (CBC) standards',
    ],
    installerCount: 67,
  },
}

// Phase 2 expansion states (adjacent to current service area)
export const EXPANSION_STATES: Record<string, StateInfo> = {
  NV: {
    name: 'Nevada',
    abbreviation: 'NV',
    slug: 'nevada',
    status: 'coming-soon',
    region: 'Mountain West',
    climateZone: 'Desert / Arid',
    description: 'Las Vegas and Reno are growing fast. Compoxen is preparing to bring premium composite fencing to Nevada.',
    benefits: [
      'Extreme heat resistance for desert climates',
      'Zero maintenance in dusty, arid conditions',
      'UV-stable in intense desert sun',
      'Modern design for luxury desert homes',
    ],
    launchDate: '2026-09-01',
  },
  AZ: {
    name: 'Arizona',
    abbreviation: 'AZ',
    slug: 'arizona',
    status: 'coming-soon',
    region: 'Southwest',
    climateZone: 'Desert / Arid',
    description: 'Arizona\'s extreme heat demands extreme materials. Compoxen is coming to the Valley of the Sun.',
    benefits: [
      'Engineered for 120°F+ desert heat',
      'Won\'t crack, warp, or fade in Arizona sun',
      'Dust and sand resistant surfaces',
      'Pool-safe composite materials',
    ],
    launchDate: '2026-10-01',
  },
  WY: {
    name: 'Wyoming',
    abbreviation: 'WY',
    slug: 'wyoming',
    status: 'coming-soon',
    region: 'Mountain West',
    climateZone: 'Continental / Alpine',
    description: 'Wyoming\'s ranches and mountain homes will soon have access to the most durable fencing on the market.',
    benefits: [
      'Built for extreme wind and cold',
      'Ranch-grade durability with modern aesthetics',
      'Snow load and ice resistant',
      'Zero maintenance in remote locations',
    ],
    launchDate: '2027-01-01',
  },
}

// All states for the waiting list system
export const ALL_US_STATES = [
  { name: 'Alabama', abbreviation: 'AL', slug: 'alabama' },
  { name: 'Alaska', abbreviation: 'AK', slug: 'alaska' },
  { name: 'Arizona', abbreviation: 'AZ', slug: 'arizona' },
  { name: 'Arkansas', abbreviation: 'AR', slug: 'arkansas' },
  { name: 'California', abbreviation: 'CA', slug: 'california' },
  { name: 'Colorado', abbreviation: 'CO', slug: 'colorado' },
  { name: 'Connecticut', abbreviation: 'CT', slug: 'connecticut' },
  { name: 'Delaware', abbreviation: 'DE', slug: 'delaware' },
  { name: 'Florida', abbreviation: 'FL', slug: 'florida' },
  { name: 'Georgia', abbreviation: 'GA', slug: 'georgia' },
  { name: 'Hawaii', abbreviation: 'HI', slug: 'hawaii' },
  { name: 'Idaho', abbreviation: 'ID', slug: 'idaho' },
  { name: 'Illinois', abbreviation: 'IL', slug: 'illinois' },
  { name: 'Indiana', abbreviation: 'IN', slug: 'indiana' },
  { name: 'Iowa', abbreviation: 'IA', slug: 'iowa' },
  { name: 'Kansas', abbreviation: 'KS', slug: 'kansas' },
  { name: 'Kentucky', abbreviation: 'KY', slug: 'kentucky' },
  { name: 'Louisiana', abbreviation: 'LA', slug: 'louisiana' },
  { name: 'Maine', abbreviation: 'ME', slug: 'maine' },
  { name: 'Maryland', abbreviation: 'MD', slug: 'maryland' },
  { name: 'Massachusetts', abbreviation: 'MA', slug: 'massachusetts' },
  { name: 'Michigan', abbreviation: 'MI', slug: 'michigan' },
  { name: 'Minnesota', abbreviation: 'MN', slug: 'minnesota' },
  { name: 'Mississippi', abbreviation: 'MS', slug: 'mississippi' },
  { name: 'Missouri', abbreviation: 'MO', slug: 'missouri' },
  { name: 'Montana', abbreviation: 'MT', slug: 'montana' },
  { name: 'Nebraska', abbreviation: 'NE', slug: 'nebraska' },
  { name: 'Nevada', abbreviation: 'NV', slug: 'nevada' },
  { name: 'New Hampshire', abbreviation: 'NH', slug: 'new-hampshire' },
  { name: 'New Jersey', abbreviation: 'NJ', slug: 'new-jersey' },
  { name: 'New Mexico', abbreviation: 'NM', slug: 'new-mexico' },
  { name: 'New York', abbreviation: 'NY', slug: 'new-york' },
  { name: 'North Carolina', abbreviation: 'NC', slug: 'north-carolina' },
  { name: 'North Dakota', abbreviation: 'ND', slug: 'north-dakota' },
  { name: 'Ohio', abbreviation: 'OH', slug: 'ohio' },
  { name: 'Oklahoma', abbreviation: 'OK', slug: 'oklahoma' },
  { name: 'Oregon', abbreviation: 'OR', slug: 'oregon' },
  { name: 'Pennsylvania', abbreviation: 'PA', slug: 'pennsylvania' },
  { name: 'Rhode Island', abbreviation: 'RI', slug: 'rhode-island' },
  { name: 'South Carolina', abbreviation: 'SC', slug: 'south-carolina' },
  { name: 'South Dakota', abbreviation: 'SD', slug: 'south-dakota' },
  { name: 'Tennessee', abbreviation: 'TN', slug: 'tennessee' },
  { name: 'Texas', abbreviation: 'TX', slug: 'texas' },
  { name: 'Utah', abbreviation: 'UT', slug: 'utah' },
  { name: 'Vermont', abbreviation: 'VT', slug: 'vermont' },
  { name: 'Virginia', abbreviation: 'VA', slug: 'virginia' },
  { name: 'Washington', abbreviation: 'WA', slug: 'washington' },
  { name: 'West Virginia', abbreviation: 'WV', slug: 'west-virginia' },
  { name: 'Wisconsin', abbreviation: 'WI', slug: 'wisconsin' },
  { name: 'Wyoming', abbreviation: 'WY', slug: 'wyoming' },
] as const

// ─── Zip Code → State Mapping (first 3 digits) ───────────────────
// Maps zip code prefixes to state abbreviations for availability checking
export const ZIP_TO_STATE: Record<string, string> = {
  // Utah (840-847)
  '840': 'UT', '841': 'UT', '842': 'UT', '843': 'UT', '844': 'UT', '845': 'UT', '846': 'UT', '847': 'UT',
  // Colorado (800-816)
  '800': 'CO', '801': 'CO', '802': 'CO', '803': 'CO', '804': 'CO', '805': 'CO', '806': 'CO', '807': 'CO', '808': 'CO', '809': 'CO', '810': 'CO', '811': 'CO', '812': 'CO', '813': 'CO', '814': 'CO', '815': 'CO', '816': 'CO',
  // Idaho (832-838)
  '832': 'ID', '833': 'ID', '834': 'ID', '835': 'ID', '836': 'ID', '837': 'ID', '838': 'ID',
  // California (900-961)
  '900': 'CA', '901': 'CA', '902': 'CA', '903': 'CA', '904': 'CA', '905': 'CA', '906': 'CA', '907': 'CA', '908': 'CA', '909': 'CA',
  '910': 'CA', '911': 'CA', '912': 'CA', '913': 'CA', '914': 'CA', '915': 'CA', '916': 'CA', '917': 'CA', '918': 'CA', '919': 'CA',
  '920': 'CA', '921': 'CA', '922': 'CA', '923': 'CA', '924': 'CA', '925': 'CA', '926': 'CA', '927': 'CA', '928': 'CA',
  '930': 'CA', '931': 'CA', '932': 'CA', '933': 'CA', '934': 'CA', '935': 'CA', '936': 'CA', '937': 'CA', '938': 'CA', '939': 'CA',
  '940': 'CA', '941': 'CA', '942': 'CA', '943': 'CA', '944': 'CA', '945': 'CA', '946': 'CA', '947': 'CA', '948': 'CA', '949': 'CA',
  '950': 'CA', '951': 'CA', '952': 'CA', '953': 'CA', '954': 'CA', '955': 'CA', '956': 'CA', '957': 'CA', '958': 'CA', '959': 'CA',
  '960': 'CA', '961': 'CA',
  // Nevada (889-898)
  '889': 'NV', '890': 'NV', '891': 'NV', '893': 'NV', '894': 'NV', '895': 'NV', '896': 'NV', '897': 'NV', '898': 'NV',
  // Arizona (850-865)
  '850': 'AZ', '851': 'AZ', '852': 'AZ', '853': 'AZ', '855': 'AZ', '856': 'AZ', '857': 'AZ', '858': 'AZ', '859': 'AZ', '860': 'AZ', '863': 'AZ', '864': 'AZ', '865': 'AZ',
  // Wyoming (820-831)
  '820': 'WY', '821': 'WY', '822': 'WY', '823': 'WY', '824': 'WY', '825': 'WY', '826': 'WY', '827': 'WY', '828': 'WY', '829': 'WY', '830': 'WY', '831': 'WY',
}

// ─── Products ─────────────────────────────────────────────────────
export const PRODUCT_COLORS = [
  { name: 'Harbor Slate', slug: 'harbor-slate', hex: '#8B9DAF', image: '/images/colors-harbor-slate.png', description: 'Modern grey with coastal clarity.' },
  { name: 'Mesa Taupe', slug: 'mesa-taupe', hex: '#A89080', image: '/images/colors-mesa-taupe.png', description: 'Warm, grounded, stone-friendly tone.' },
  { name: 'Shadow Forge', slug: 'shadow-forge', hex: '#3A3A3A', image: '/images/colors-shadow-forge.png', description: 'Charcoal-black with industrial depth.' },
  { name: 'Redwood Ember', slug: 'redwood-ember', hex: '#8B4513', image: '/images/colors-redwood-ember.png', description: 'Rich red-brown with natural warmth.' },
  { name: 'Cocoa Ridge', slug: 'cocoa-ridge', hex: '#5C4033', image: '/images/colors-cocoa-ridge.png', description: 'Deep chocolate tone with architectural presence.' },
] as const

export const PRODUCT_SPECS = {
  warranty: '20 years',
  maintenance: 'Zero',
  material: 'Mineral-reinforced polymer composite',
  uvProtection: 'UV-stable pigments with fade-resistant shell',
  fireRating: 'Class A',
  temperatureRange: '-40°F to 140°F',
  windRating: '130 mph',
  impactResistance: 'Superior to wood, vinyl, and metal',
  fastenerSystem: 'Hidden fastener technology',
  finishes: ['Deep matte', 'Subtle woodgrain'],
} as const

// ─── Helper Functions ─────────────────────────────────────────────
export function getStateByZip(zipCode: string): string | null {
  const prefix = zipCode.substring(0, 3)
  return ZIP_TO_STATE[prefix] || null
}

export function getServiceStatus(stateAbbrev: string): ServiceStatus {
  if (SERVICE_STATES[stateAbbrev]) return 'active'
  if (EXPANSION_STATES[stateAbbrev]) return 'coming-soon'
  return 'waiting-list'
}

export function getStateInfo(stateAbbrev: string): StateInfo | null {
  return SERVICE_STATES[stateAbbrev] || EXPANSION_STATES[stateAbbrev] || null
}

export function getActiveStates(): StateInfo[] {
  return Object.values(SERVICE_STATES).filter(s => s.status === 'active')
}

export function getComingSoonStates(): StateInfo[] {
  return Object.values(EXPANSION_STATES).filter(s => s.status === 'coming-soon')
}

export function getStateBySlug(slug: string): StateInfo | null {
  const allStates = { ...SERVICE_STATES, ...EXPANSION_STATES }
  return Object.values(allStates).find(s => s.slug === slug) || null
}

export function getAllStatesSorted() {
  return [...ALL_US_STATES].sort((a, b) => a.name.localeCompare(b.name))
}

export const ACTIVE_STATE_ABBREVS = Object.keys(SERVICE_STATES)
export const ACTIVE_STATE_NAMES = Object.values(SERVICE_STATES).map(s => s.name)
export const ACTIVE_STATE_LIST = ACTIVE_STATE_NAMES.join(', ')
