import { MetadataRoute } from 'next'
import { SERVICE_STATES, EXPANSION_STATES, BRAND } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND.url
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl,                                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0  },
    { url: `${baseUrl}/composite-fencing`,           lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
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
    { url: `${baseUrl}/get-quote`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/dealer-kit`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.9  },
    { url: `${baseUrl}/dealer`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7  },
    { url: `${baseUrl}/states`,                      lastModified: now, changeFrequency: 'weekly',  priority: 0.9  },
    { url: `${baseUrl}/privacy-policy`,              lastModified: now, changeFrequency: 'yearly',  priority: 0.3  },
  ]

  const activeStatePages: MetadataRoute.Sitemap = Object.values(SERVICE_STATES).map(state => ({
    url: `${baseUrl}/states/${state.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const comingSoonPages: MetadataRoute.Sitemap = Object.values(EXPANSION_STATES).map(state => ({
    url: `${baseUrl}/states/${state.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate ?? post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...activeStatePages, ...comingSoonPages, ...blogPages]
}
