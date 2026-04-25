/**
 * JSON-LD Schema Markup Generators
 * Provides structured data for SEO across the Compoxen platform
 */

import { BRAND, PRODUCT_SPECS, PRODUCT_COLORS } from './constants'
import type { CityData } from './cities'
import type { ServiceData } from './services'
import { FAQS, type FAQItem } from './faqs'

// Organization schema - used site-wide
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND.name,
    url: BRAND.url,
    logo: `${BRAND.url}/images/compoxen-logo.png`,
    description: `${BRAND.tagline}. ${BRAND.designOrigin}.`,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lehi',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    sameAs: [],
    brand: {
      '@type': 'Brand',
      name: BRAND.name,
      slogan: `${BRAND.designOrigin}. Perfected in the Mountains.`,
    },
    areaServed: [
      { '@type': 'State', name: 'Utah' },
    ],
  }
}

// Product schema for composite fencing
export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Compoxen Premium Composite Fencing',
    description: `Mineral-reinforced polymer composite fencing. ${BRAND.designOrigin}. ${PRODUCT_SPECS.warranty} warranty, ${PRODUCT_SPECS.maintenance.toLowerCase()} maintenance.`,
    brand: {
      '@type': 'Brand',
      name: BRAND.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: BRAND.name,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: 'United States',
    },
    material: PRODUCT_SPECS.material,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Warranty', value: PRODUCT_SPECS.warranty },
      { '@type': 'PropertyValue', name: 'Maintenance', value: PRODUCT_SPECS.maintenance },
      { '@type': 'PropertyValue', name: 'Fire Rating', value: PRODUCT_SPECS.fireRating },
      { '@type': 'PropertyValue', name: 'Temperature Range', value: PRODUCT_SPECS.temperatureRange },
      { '@type': 'PropertyValue', name: 'Wind Rating', value: PRODUCT_SPECS.windRating },
      { '@type': 'PropertyValue', name: 'Country of Design', value: 'United States' },
    ],
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      areaServed: [
        { '@type': 'State', name: 'Utah' },
      ],
      priceCurrency: 'USD',
    },
    hasVariant: PRODUCT_COLORS.map(color => ({
      '@type': 'Product',
      name: `Compoxen ${color.name}`,
      description: color.description,
      color: color.name,
      image: `${BRAND.url}${color.image}`,
    })),
  }
}

// City-level Service schema (one per city landing page)
export function getCityServiceSchema(city: CityData, service?: ServiceData) {
  const serviceName = service
    ? `${service.title} in ${city.name}, UT`
    : `Composite Fence Supply & Installation in ${city.name}, UT`

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    serviceType: service?.title ?? 'Composite Fence Installation',
    description: service?.heroDescription ?? `Compoxen composite fence supply and installation in ${city.name}, Utah.`,
    provider: {
      '@type': 'LocalBusiness',
      name: BRAND.name,
      telephone: BRAND.phone,
      url: BRAND.url,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${city.county} County, Utah`,
      },
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  }
}

// Local business schema
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${BRAND.name} Design Center`,
    description: `Premium composite fencing design center. ${BRAND.designOrigin}.`,
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.streetAddress,
      addressLocality: BRAND.addressLocality,
      addressRegion: BRAND.addressRegion,
      postalCode: BRAND.addressPostalCode,
      addressCountry: 'US',
    },
    url: BRAND.url,
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  }
}

// FAQ schema for common questions.
// Pass an explicit subset of FAQs (e.g. for a state-specific page) or omit
// to render the full canonical list from lib/faqs.ts.
export function getFAQSchema(items: FAQItem[] = FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }
}

// Breadcrumb schema generator
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BRAND.url}${item.url}`,
    })),
  }
}

// WebSite schema with SearchAction (helps AI engines surface in-site search)
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND.name,
    url: BRAND.url,
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BRAND.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

// HowTo schema for the certified-installer process
export interface HowToStep {
  name: string
  text: string
}

export function getHowToSchema(opts: {
  name: string
  description: string
  totalTime?: string // ISO-8601 duration, e.g. "PT3D"
  steps: HowToStep[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    totalTime: opts.totalTime,
    step: opts.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  }
}

// Article / BlogPosting schema for editorial content
export interface ArticleSchemaInput {
  type?: 'Article' | 'BlogPosting'
  url: string
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified?: string
  authorName?: string
  section?: string
  keywords?: string[]
}

export function getArticleSchema(input: ArticleSchemaInput) {
  const imageUrl = input.image.startsWith('http') ? input.image : `${BRAND.url}${input.image}`
  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url.startsWith('http') ? input.url : `${BRAND.url}${input.url}`,
    },
    headline: input.headline,
    description: input.description,
    image: [imageUrl],
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Organization',
      name: input.authorName ?? `${BRAND.name} Editorial`,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BRAND.url}/images/compoxen-logo.png`,
      },
    },
    articleSection: input.section,
    keywords: input.keywords?.join(', '),
  }
}

// DefinedTerm / DefinedTermSet for the glossary
export interface DefinedTerm {
  term: string
  definition: string
  alternateName?: string[]
}

export function getDefinedTermSetSchema(name: string, terms: DefinedTerm[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name,
    url: `${BRAND.url}/glossary`,
    hasDefinedTerm: terms.map(t => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      alternateName: t.alternateName,
      inDefinedTermSet: `${BRAND.url}/glossary`,
    })),
  }
}

// City-level LocalBusiness schema (per-city install + supply branch)
export function getCityLocalBusinessSchema(city: CityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BRAND.url}/composite-fence-${city.slug}#localbusiness`,
    name: `${BRAND.name} — ${city.name}`,
    description: `Composite fence supply and certified installation in ${city.name}, Utah. ${PRODUCT_SPECS.warranty} warranty.`,
    telephone: BRAND.phone,
    email: BRAND.email,
    url: `${BRAND.url}/composite-fence-${city.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.addressLocality,
      addressRegion: BRAND.addressRegion,
      postalCode: BRAND.addressPostalCode,
      addressCountry: 'US',
      streetAddress: BRAND.streetAddress,
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${city.county} County, Utah`,
      },
    },
    priceRange: '$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BRAND.googleRating,
      reviewCount: BRAND.googleReviewCount,
    },
  }
}
