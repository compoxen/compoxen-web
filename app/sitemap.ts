import { MetadataRoute } from 'next'
import { BRAND } from '@/lib/constants'
import { getAllCities, getActiveCounties, COUNTY_META, getCityHref } from '@/lib/cities'
import { services } from '@/lib/services'
import { BLOG_POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${baseUrl}/composite-fencing`,           lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/service-areas`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${baseUrl}/services`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/why-compoxen`,                lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/specifications`,              lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/installation`,                lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/pricing`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/composite-fencing-vs-wood`,   lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/composite-fencing-vs-vinyl`,  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/composite-fencing-vs-metal`,  lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/faq`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.8  },
    { url: `${baseUrl}/glossary`,                    lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${baseUrl}/about`,                       lastModified: now, changeFrequency: 'monthly', priority: 0.6  },
    { url: `${baseUrl}/blog`,                        lastModified: now, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${baseUrl}/get-quote`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/privacy-policy`,              lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
  ]

  const cityPages: MetadataRoute.Sitemap = getAllCities().map(city => ({
    url: `${baseUrl}${getCityHref(city)}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: city.tier === 'tier1' ? 0.9 : city.tier === 'tier2' ? 0.8 : 0.7,
  }))

  const countyPages: MetadataRoute.Sitemap = getActiveCounties().map(county => ({
    url: `${baseUrl}/counties/${COUNTY_META[county].slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const servicePages: MetadataRoute.Sitemap = services.map(s => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...cityPages, ...countyPages, ...servicePages, ...blogPages]
}
