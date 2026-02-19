/**
 * JSON-LD Schema Markup Generators
 * Provides structured data for SEO across the Compoxen platform
 */

import { BRAND, PRODUCT_SPECS, PRODUCT_COLORS, type StateInfo } from './constants'

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
      { '@type': 'State', name: 'Colorado' },
      { '@type': 'State', name: 'Idaho' },
      { '@type': 'State', name: 'California' },
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
        { '@type': 'State', name: 'Colorado' },
        { '@type': 'State', name: 'Idaho' },
        { '@type': 'State', name: 'California' },
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

// Service area schema for state pages
export function getServiceAreaSchema(state: StateInfo) {
  const isActive = state.status === 'active'

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Compoxen Composite Fencing in ${state.name}`,
    description: state.description,
    provider: {
      '@type': 'Organization',
      name: BRAND.name,
      url: BRAND.url,
    },
    areaServed: {
      '@type': 'State',
      name: state.name,
      containedInPlace: {
        '@type': 'Country',
        name: 'United States',
      },
    },
    availableChannel: isActive ? {
      '@type': 'ServiceChannel',
      serviceUrl: `${BRAND.url}/states/${state.slug}`,
      serviceSmsNumber: BRAND.phone,
    } : undefined,
    offers: isActive ? {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    } : {
      '@type': 'Offer',
      availability: 'https://schema.org/PreOrder',
      availabilityStarts: state.launchDate,
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
      addressLocality: 'Salt Lake City',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    url: BRAND.url,
    priceRange: '$$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  }
}

// FAQ schema for common questions
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Compoxen composite fencing available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Compoxen is currently available in Utah, Colorado, Idaho, and California with certified installer networks. We are expanding to additional states — check availability for your zip code on our website.',
        },
      },
      {
        '@type': 'Question',
        name: 'What warranty does Compoxen offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Compoxen offers a ${PRODUCT_SPECS.warranty} warranty on all composite fencing products. Our mineral-reinforced polymer composites are engineered for long-term performance with zero maintenance.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Is Compoxen fencing designed in the USA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Compoxen is designed in the USA at our innovation center in Salt Lake City, Utah. Our products are perfected in the Mountain West\'s extreme conditions before reaching your market.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does composite fencing compare to wood?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Compoxen composite fencing outperforms wood in every measurable way: it never rots, warps, or needs staining. Independent testing shows superior impact resistance, fade protection, and long-term stability with zero annual maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I become a Compoxen installer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! We\'re building a network of certified installers across the country. If you\'re in our current service area (UT, CO, ID, CA), apply now. If you\'re in another state, join our waiting list to be notified when we expand to your area.',
        },
      },
    ],
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
