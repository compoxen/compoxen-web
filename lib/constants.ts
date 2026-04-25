/**
 * Compoxen Global Constants
 * Brand, Utah service area, and product configuration.
 */

// ─── Brand ────────────────────────────────────────────────────────
export const BRAND = {
  name: 'Compoxen',
  tagline: 'Composite Fence Supply + Install — Statewide Utah',
  designOrigin: 'Designed in USA',
  designCenter: 'Draper, UT',
  phone: '(385) 530-0588',
  localPhone: '385-530-0588',
  phoneHref: 'tel:+13855300588',
  email: 'contact@compoxen.com',
  privacyEmail: 'privacy@compoxen.com',
  address: '12218 S Lone Peak Pkwy #101, Draper, UT 84020',
  streetAddress: '12218 S Lone Peak Pkwy #101',
  addressLocality: 'Draper',
  addressRegion: 'UT',
  addressPostalCode: '84020',
  url: 'https://compoxen.com',
  founded: 2024,
  serviceState: 'Utah',
  serviceStateAbbrev: 'UT',
  hours: 'Mon–Sat 9 AM – 6 PM',
  googleRating: 5.0,
  googleReviewCount: 11,
  /**
   * Public social / external profiles. Used in JSON-LD `sameAs` for
   * entity disambiguation. Leave empty strings for any profile that does
   * not exist yet — they are filtered out before serialization.
   */
  social: [
    'https://www.google.com/maps?cid=0', // TODO: replace with real Google Business Profile CID URL
    '', // TODO: 'https://www.facebook.com/compoxen'
    '', // TODO: 'https://www.instagram.com/compoxen'
    '', // TODO: 'https://www.linkedin.com/company/compoxen'
    '', // TODO: 'https://www.youtube.com/@compoxen'
  ],
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

