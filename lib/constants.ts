/**
 * Compoxen Global Constants
 * Brand, Utah service area, and product configuration.
 */

// ─── Brand ────────────────────────────────────────────────────────
export const BRAND = {
  name: 'Compoxen',
  tagline: 'Composite Fence Supply + Install — Statewide Utah',
  designOrigin: 'Designed in USA',
  designCenter: 'Lehi, UT',
  phone: '(385) 483-3700',
  localPhone: '385-483-3700',
  phoneHref: 'tel:+13854833700',
  email: 'contact@compoxen.com',
  privacyEmail: 'privacy@compoxen.com',
  address: '1500 N Technology Way, Lehi, UT 84043',
  addressLocality: 'Lehi',
  addressRegion: 'UT',
  addressPostalCode: '84043',
  url: 'https://compoxen.com',
  founded: 2024,
  serviceState: 'Utah',
  serviceStateAbbrev: 'UT',
  hours: 'Mon–Fri 8 AM – 5 PM',
  googleRating: 4.9,
} as const

// ─── Utah Zip Code Coverage ───────────────────────────────────────
// All Utah ZCTA prefixes (840–847)
export const UTAH_ZIP_PREFIXES = ['840', '841', '842', '843', '844', '845', '846', '847']

/** True if zip code falls within a Utah ZCTA prefix. */
export function isUtahZip(zipCode: string): boolean {
  if (!zipCode || zipCode.length < 3) return false
  return UTAH_ZIP_PREFIXES.includes(zipCode.substring(0, 3))
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
// (Multi-state helpers were removed — Compoxen is Utah-only.
//  See lib/cities.ts for city/county helpers and isUtahZip above for zip lookup.)

