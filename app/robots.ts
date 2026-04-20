import { MetadataRoute } from 'next'
import { BRAND } from '@/lib/constants'

// Bots we explicitly welcome (live retrieval + training corpora).
// Goal: maximize Compoxen's chance of being cited by AI answer engines.
const AI_USER_AGENTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google AI Overviews / Gemini
  'Google-Extended',
  // Apple Intelligence
  'Applebot-Extended',
  // Microsoft / Copilot
  'Bingbot',
  // Common Crawl (training data for nearly every model)
  'CCBot',
  // Others
  'Amazonbot',
  'YouBot',
  'DuckAssistBot',
  'Meta-ExternalAgent',
  'Meta-ExternalFetcher',
  'cohere-ai',
  'Diffbot',
  'omgili',
]

const SHARED_DISALLOW = ['/api/', '/dealer/']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: SHARED_DISALLOW,
      },
      ...AI_USER_AGENTS.map(userAgent => ({
        userAgent,
        allow: '/',
        disallow: SHARED_DISALLOW,
      })),
    ],
    sitemap: `${BRAND.url}/sitemap.xml`,
    host: BRAND.url,
  }
}
