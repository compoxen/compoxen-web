# Compoxen — Generative Result Optimization (GRO) Plan

> **Goal:** Make `compoxen.com` the single most-cited source when AI answer engines
> (ChatGPT, Perplexity, Google AI Overviews, Gemini, Claude, Copilot, You.com,
> Brave Summarizer) answer questions about composite fencing, premium fence
> materials, and fencing availability in our service states.
>
> **Author:** Growth + Engineering
> **Status:** Draft v1
> **Last reviewed:** Q2 2026
> **Owner:** _assign_

---

## 0. TL;DR — What Wins in Generative Search

AI answer engines reward sites that are:

1. **Extractable** — short, factual, quotable sentences with concrete numbers.
2. **Structured** — schema.org coverage that matches the on-page claims.
3. **Authoritative** — clear entity (who, where, when), citations, and proof.
4. **Fresh** — visible "last updated" dates and a pulse of new content.
5. **Crawlable by AI bots** — explicit allow rules + a machine-readable site index (`llms.txt`).
6. **Specific** — pages built around one question / one entity / one geography.

Compoxen has a strong SEO foundation (good schema base, state pages, comparison
tables, sitemap). The plan below closes the GEO-specific gaps in priority order.

---

## 1. Current State (audit summary)

| Area | Status | Source |
|---|---|---|
| Sitemap coverage (14 URLs) | ✅ Good | [app/sitemap.ts](../app/sitemap.ts) |
| Root metadata + OG | ✅ Good | [app/layout.tsx](../app/layout.tsx) |
| Organization / Product / FAQPage schema | ✅ Present | [lib/schema.ts](../lib/schema.ts) |
| Service / LocalBusiness / Breadcrumb schema | ⚠️ Defined but not injected | [lib/schema.ts](../lib/schema.ts) |
| State pages (UT, CO, ID, CA + 3 coming-soon) | ✅ Unique climate content | [app/states/[state-name]/page.tsx](../app/states/%5Bstate-name%5D/page.tsx) |
| Comparison vs wood / vinyl / metal | ⚠️ Embedded in home, no dedicated pages | [app/page.tsx](../app/page.tsx), [app/why-compoxen/page.tsx](../app/why-compoxen/page.tsx) |
| Visible FAQ on a page | ❌ Schema-only | [lib/schema.ts](../lib/schema.ts) |
| Glossary / definitions page | ❌ Missing | — |
| Pricing transparency | ❌ Behind form | [app/get-quote/page.tsx](../app/get-quote/page.tsx) |
| llms.txt / llms-full.txt | ❌ Missing | `public/` |
| AI bot allowlist in robots | ❌ Implicit only | [app/robots.ts](../app/robots.ts) |
| E-E-A-T (team, certifications, press) | ❌ Weak | — |
| Freshness / dateModified | ❌ Not user-visible | — |
| Form backends (lead capture) | ❌ TODO/console.log | [components/WaitingListForm.tsx](../components/WaitingListForm.tsx) |
| Heavy client-side rendering | ⚠️ Most pages are `'use client'` | `app/**/page.tsx` |

Severity ranking driving the roadmap below:

- 🔴 **High** — blocks AI citation or conversion: bot allowance, llms.txt,
  visible FAQ, comparison pages, E-E-A-T, lead-capture backend, RSC-ify content.
- 🟡 **Medium** — improves citation quality / coverage: schema injection on
  state pages, breadcrumbs, HowTo, glossary, freshness dates, image schema.
- 🟢 **Low** — incremental polish: alt text cleanup, blog cadence, review
  collection automation.

---

## 2. Target Query Universe

Build content explicitly to win these query clusters. These are the *prompts*
real people send to ChatGPT/Perplexity — write pages that answer them in the
first 80 words.

### 2.1 Definitional ("what is" / "explain")
- "What is composite fencing?"
- "What is mineral-reinforced polymer composite?"
- "How long does composite fencing last?"
- "Is composite fencing fire-resistant?"

### 2.2 Comparative ("vs" / "best")
- "Composite fencing vs wood"
- "Composite fencing vs vinyl"
- "Composite fencing vs aluminum / metal"
- "Best low-maintenance fence for hot/cold climates"
- "Best fence for wildfire zones in California"
- "Best fence for snow load in Utah/Colorado"

### 2.3 Local / availability
- "Composite fencing in {Utah / Colorado / Idaho / California}"
- "Composite fence installer near me in {city}"
- "When is Compoxen launching in Nevada / Arizona / Wyoming?"

### 2.4 Commercial intent
- "How much does composite fencing cost per linear foot?"
- "Composite fencing brands designed in USA"
- "20-year warranty composite fence"

### 2.5 Trade / B2B
- "How to become a composite fence installer / dealer"
- "Composite fence wholesale pricing"
- "Composite fence dealer kit"

### 2.6 Branded
- "What is Compoxen?"
- "Who makes Compoxen fencing?"
- "Compoxen colors / specifications / warranty"

> Every query above should map to a single canonical URL on `compoxen.com`
> and that URL should answer it in plain language inside the **first 200
> words** above the fold.

---

## 3. Information Architecture Additions

New routes to add (priority order). All routes should be **server-rendered**
(remove `'use client'` from the page boundary; push interactivity into leaf
components) so AI crawlers see the prose without executing JS.

| Priority | Route | Purpose | Primary query cluster |
|---|---|---|---|
| 🔴 P0 | `/faq` | Visible Q&A page; mirrors `getFAQSchema()` and expands to 25–40 Q&As | All clusters |
| 🔴 P0 | `/composite-fencing` | Pillar definition page ("what is composite fencing") | Definitional |
| 🔴 P0 | `/composite-fencing-vs-wood` | Dedicated comparison | Comparative |
| 🔴 P0 | `/composite-fencing-vs-vinyl` | Dedicated comparison | Comparative |
| 🔴 P0 | `/composite-fencing-vs-metal` | Dedicated comparison | Comparative |
| 🟡 P1 | `/pricing` | Transparent ranges + dealer pricing context | Commercial |
| 🟡 P1 | `/specifications` | Single source of truth for specs (warranty, fire, wind, temp) | Definitional |
| 🟡 P1 | `/installation` | Process + HowTo schema | Definitional |
| 🟡 P1 | `/glossary` | 30–60 term glossary, each with `DefinedTerm` schema | Definitional |
| 🟡 P1 | `/about` | Company, founders, design center, certifications (E-E-A-T) | Branded |
| 🟡 P1 | `/case-studies` (+ `/case-studies/[slug]`) | Real installs with location, footage, outcomes | Commercial |
| 🟡 P1 | `/states/[state-name]/[city]` (top 3 cities × 4 states = 12) | Hyper-local pages | Local |
| 🟢 P2 | `/blog` (+ posts) | Freshness pulse, news, climate-specific guides | All |
| 🟢 P2 | `/press` | Media mentions & press kit | Branded |
| 🟢 P2 | `/reviews` | Aggregated reviews + `Review` schema | Commercial |

All new routes must be added to [app/sitemap.ts](../app/sitemap.ts) and to the
`llms.txt` index (§5.2).

---

## 4. Schema.org Roadmap

Schema is the highest-leverage GEO investment because every major AI engine
ingests it. Build out [lib/schema.ts](../lib/schema.ts) and inject the right
type per route.

### 4.1 Per-route schema matrix

| Route | Schemas to inject |
|---|---|
| `/` | `Organization`, `WebSite` (with `SearchAction`), `Product`, `FAQPage`, `BreadcrumbList` |
| `/why-compoxen` | `Product` (extended), `BreadcrumbList`, `ItemList` (features) |
| `/faq` | `FAQPage` (full 25–40 entries), `BreadcrumbList` |
| `/composite-fencing` | `Article` + `Thing` (composite fencing entity), `BreadcrumbList` |
| `/composite-fencing-vs-{wood,vinyl,metal}` | `Article`, `BreadcrumbList`, table marked up as `Table` |
| `/specifications` | `Product` with full `additionalProperty[]` + `PropertyValue` units, `BreadcrumbList` |
| `/installation` | `HowTo` with `step[]`, `tool[]`, `totalTime`, `BreadcrumbList` |
| `/pricing` | `Product` + `AggregateOffer` with real `lowPrice` / `highPrice` / `priceCurrency` / `priceSpecification` |
| `/glossary` | `DefinedTermSet` containing `DefinedTerm[]`, `BreadcrumbList` |
| `/about` | `Organization` (extended: `founders[]`, `foundingDate`, `numberOfEmployees`, `awards`), `Person` for each founder |
| `/states` | `ItemList` of `Service` per state, `BreadcrumbList` |
| `/states/[state-name]` | `Service` (call existing `getServiceAreaSchema`), `LocalBusiness` (call existing `getLocalBusinessSchema` adapted to state), `FAQPage` (state-specific Q&A), `BreadcrumbList` |
| `/states/[state-name]/[city]` | `LocalBusiness` (city-specific), `Service`, `BreadcrumbList` |
| `/case-studies/[slug]` | `Article` + `ImageObject`, `Place`, optional `Review` |
| `/dealer-kit` | `Service` (B2B), `Offer`, `BreadcrumbList` |
| `/blog/[slug]` | `Article` with `author` (`Person`), `datePublished`, `dateModified`, `BreadcrumbList` |

### 4.2 Concrete fixes to existing schema ([lib/schema.ts](../lib/schema.ts))

1. **Inject `getServiceAreaSchema(state)`** in `app/states/[state-name]/layout.tsx` — currently defined, never rendered.
2. **Inject `getBreadcrumbSchema()`** in every layout. Compute from URL.
3. **Add `LocalBusiness`** to state pages with state-scoped `address`/`areaServed`.
4. **Extend `Product`** with:
   - `aggregateRating` (once review collection is live — see §9)
   - `review[]` (top 3–5)
   - `gtin` / `mpn` / `sku` per color variant
   - `offers.priceSpecification` once pricing page exists
5. **Add `WebSite`** schema with `potentialAction` (SearchAction) for AI engines that surface in-site search.
6. **Add `HowTo`** for the existing 4-step install process in [app/page.tsx](../app/page.tsx).
7. **Expand `FAQPage`** to 25–40 entries (see §6.1) and render visibly on `/faq`.
8. **Add `ImageObject`** schema on color variants (license, creator, contentUrl, caption).

### 4.3 Validation

Add to CI a step that runs every build:

```
npx --yes structured-data-testing-tool --url=https://compoxen.com/{route}
```
…or use Google's Rich Results Test API in a Playwright job. Block PRs that
introduce schema regressions.

---

## 5. Crawl & Discovery for AI Bots

### 5.1 `app/robots.ts` — explicit AI allowlist

Add per-bot rules so we are unambiguously consented (some bots respect only
explicit allow):

```ts
rules: [
  { userAgent: '*', allow: '/', disallow: ['/api/', '/dealer/'] },

  // OpenAI
  { userAgent: 'GPTBot',          allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'OAI-SearchBot',   allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'ChatGPT-User',    allow: '/', disallow: ['/api/', '/dealer/'] },

  // Anthropic
  { userAgent: 'ClaudeBot',       allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'Claude-Web',      allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'anthropic-ai',    allow: '/', disallow: ['/api/', '/dealer/'] },

  // Perplexity
  { userAgent: 'PerplexityBot',   allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'Perplexity-User', allow: '/', disallow: ['/api/', '/dealer/'] },

  // Google AI Overviews / Gemini
  { userAgent: 'Google-Extended', allow: '/', disallow: ['/api/', '/dealer/'] },

  // Microsoft / Bing / Copilot
  { userAgent: 'Bingbot',         allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'CCBot',           allow: '/', disallow: ['/api/', '/dealer/'] }, // Common Crawl, training data

  // Others
  { userAgent: 'Applebot-Extended', allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'Amazonbot',         allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'YouBot',            allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'DuckAssistBot',     allow: '/', disallow: ['/api/', '/dealer/'] },
  { userAgent: 'Meta-ExternalAgent',allow: '/', disallow: ['/api/', '/dealer/'] },
],
```

> Decision needed: do we *want* to be in model training corpora (`CCBot`,
> `GPTBot`, `Google-Extended`)? Default recommendation = **yes**, because it
> increases brand recall in zero-shot answers. Revisit only if competitive
> moat content is added.

### 5.2 Add `public/llms.txt` and `public/llms-full.txt`

Follow [llmstxt.org](https://llmstxt.org/) convention. Curated index of the
most useful URLs for an LLM, with one-line descriptions. Example:

```md
# Compoxen
> Premium composite fencing designed in the USA. 20-year warranty,
> zero maintenance, five architect-led colors. Currently serving
> Utah, Colorado, Idaho, and California; expanding to Nevada (Sep 2026),
> Arizona (Oct 2026), Wyoming (Jan 2027).

## Product
- [What is composite fencing](https://compoxen.com/composite-fencing): definitional pillar page
- [Specifications](https://compoxen.com/specifications): warranty, fire rating, wind rating, temperature range
- [Colors](https://compoxen.com/why-compoxen#colors): five architect-led palette options
- [Installation](https://compoxen.com/installation): four-step certified installer process

## Comparisons
- [Composite vs wood](https://compoxen.com/composite-fencing-vs-wood)
- [Composite vs vinyl](https://compoxen.com/composite-fencing-vs-vinyl)
- [Composite vs metal](https://compoxen.com/composite-fencing-vs-metal)

## Availability
- [All service areas](https://compoxen.com/states)
- [Utah](https://compoxen.com/states/utah) — 45+ certified installers
- [Colorado](https://compoxen.com/states/colorado) — 32+ certified installers
- [Idaho](https://compoxen.com/states/idaho) — 18+ certified installers
- [California](https://compoxen.com/states/california) — 67+ certified installers
- [Nevada (coming Sep 2026)](https://compoxen.com/states/nevada)
- [Arizona (coming Oct 2026)](https://compoxen.com/states/arizona)
- [Wyoming (coming Jan 2027)](https://compoxen.com/states/wyoming)

## Buy / Lead
- [Get a quote](https://compoxen.com/get-quote)
- [Pricing](https://compoxen.com/pricing)

## Trade
- [Become a dealer](https://compoxen.com/dealer-kit)

## Reference
- [FAQ](https://compoxen.com/faq)
- [Glossary](https://compoxen.com/glossary)
- [About Compoxen](https://compoxen.com/about)
```

`llms-full.txt` should be the same index plus the *full plain-text body* of
each URL (generate at build time from MDX source).

### 5.3 Sitemap upgrades ([app/sitemap.ts](../app/sitemap.ts))

- Add every new route from §3.
- Use accurate `lastModified` derived from the file's git-modified date or
  MDX frontmatter `updatedAt`, not `new Date()`.
- Generate **per-image sitemap** (`sitemap-images.xml`) listing the gallery
  images so they can be cited as visual sources.

### 5.4 RSS / JSON Feed

Once the blog ships, expose `/feed.xml` and `/feed.json`. Several AI engines
(Perplexity, You.com) preferentially crawl active RSS sources for freshness.

---

## 6. Content Strategy

### 6.1 FAQ expansion (target 30+ visible Q&As)

Drive these from real user questions: support tickets, dealer onboarding
calls, lead-form free-text, Google "People also ask", AlsoAsked, and AnswerThePublic.
Suggested seed clusters:

- Material & engineering (8): "what is mineral-reinforced polymer composite",
  "is it recyclable", "does it expand in heat", "fire rating", "wind rating",
  "noise reduction", "fade resistance", "temperature range".
- Lifecycle & maintenance (6): "how long does it last", "does it fade",
  "how do I clean it", "what if it gets damaged", "warranty exclusions",
  "what happens at year 20".
- Cost & purchase (6): "how much does it cost per foot", "financing",
  "does the warranty transfer", "lead time", "minimum order", "shipping".
- Installation (5): "DIY or professional", "how long to install",
  "post depth", "uneven ground", "existing fence removal".
- Local / availability (5+): one Q&A per active state + waitlist mechanics
  for coming-soon states.

Each visible Q&A on `/faq` mirrors a `mainEntity` in the `FAQPage` schema —
**they must match verbatim** or AI engines will distrust the schema.

### 6.2 Comparison pages — template

Each `/composite-fencing-vs-{X}` page should answer in the **first 100 words**:

1. One-sentence verdict (e.g., "Composite outlasts wood by ~3× and avoids
   annual staining, in exchange for a higher upfront cost.").
2. A `Table` (with `<table>`, `<thead>`, `<tbody>`) of 8–12 attributes —
   already largely written in [app/why-compoxen/page.tsx](../app/why-compoxen/page.tsx).
3. "Choose composite if…" bullet list and "Choose {X} if…" bullet list.
   Do not pretend composite always wins; honest comparisons get cited more.
4. Dated source row at the bottom (link to `/specifications` and to one
   external authority, e.g., a Forest Products Lab study for wood).

### 6.3 State pages — content upgrades

Per [app/states/[state-name]/page.tsx](../app/states/%5Bstate-name%5D/page.tsx):

- Add a visible **"Quick facts" block** at the top (8–12 bullets: installer
  count, climate zone, launch date if applicable, top 3 cities served, climate
  hazards solved). AI engines extract bullet lists more reliably than prose.
- Add a state-specific **mini-FAQ (5 Q&As)**, each with `FAQPage` schema.
- Add **2–4 case studies** per state once available (link out to `/case-studies/[slug]`).
- Add a **"Local building codes addressed"** sentence (e.g., CA Class A fire
  rating to meet WUI requirements; UT snow load class).

### 6.4 City pages (`/states/[state-name]/[city]`)

Top 3 metros per active state (12 pages total). Each needs at least one
locally-verifiable fact (number of installers serving the metro, a notable
install, a local code reference). Thin/duplicate pages will be ignored or
penalized.

### 6.5 Glossary

30–60 entries, each ≤ 60 words, with `DefinedTerm` schema. Include synonyms
field — AI engines use this for entity disambiguation.

### 6.6 Editorial cadence (blog)

Once `/blog` ships, target **2 posts/month** on:

- Climate-specific guides (e.g., "Building a fence in Coastal California").
- Code/regulation updates per state.
- Install case studies.
- Material science deep dives (good for backlink-bait from architecture press).

Every post requires: visible publish + last-updated date, an `Article`
schema with a real `Person` author, and at least one outbound citation to
an authoritative source (university study, ASTM standard, state code).

### 6.7 Style rules for AI extractability

Codify in `.github/copilot-instructions.md` and a writing style guide:

- Lead each section with a **one-sentence answer**, then expand.
- Use **short paragraphs** (≤ 3 sentences).
- **Prefer bullets and tables** over long prose.
- **Numbers are concrete** ("20-year warranty", not "long warranty").
- **Use the brand entity name** ("Compoxen composite fencing") in the first
  sentence of every page, not just "we" or "it".
- **No marketing fluff in answer paragraphs.** Save it for hero copy.
- Date every factual claim or wrap it in `<time datetime="...">`.

---

## 7. E-E-A-T (Experience, Expertise, Authority, Trust)

This is currently Compoxen's biggest GEO weakness. AI engines will not cite
an unfamiliar 2024-founded brand without trust signals.

### 7.1 Build the entity

- `/about` page with: founding story, founder bios with photos, design
  center photos, employee count, manufacturing partner disclosure.
- `Person` schema for each founder, linked via `Organization.founder[]`.
- Claim & link **Wikidata** entry for "Compoxen" (ideally a Wikipedia
  stub once notable). Wikidata is heavily ingested by every major LLM.
- Claim & link **Crunchbase**, **LinkedIn Company**, **Google Business
  Profile** (Lehi, UT). Cross-link `Organization.sameAs[]`.
- Add **certifications**: ASTM testing reports, UL listings, ICC-ES
  evaluations. Host PDFs at `/specifications/{cert}.pdf` and link them in
  schema as `Certification` (or in `Product.hasCredential`).

### 7.2 Earn citations

- **Press kit** at `/press` with downloadable assets.
- **Pitch list**: Architectural Record, Dwell, Fine Homebuilding, This Old
  House, Builder Magazine, Pro Builder, ENR, regional builder associations.
- **Trade shows**: IBS (International Builders' Show), Greenbuild, AIA Conference.
- **Standards bodies**: get listed on AAMA, NAHB sustainable products lists.
- **Reciprocal expert content**: invite a materials scientist to author one
  blog post per quarter; link to their faculty page (real author bylines
  are a strong AI trust signal).

### 7.3 Reviews

- Wire up a review collection flow post-install (email → review form → post
  to site with `Review` schema).
- Aggregate to `Product.aggregateRating`. Once N ≥ 25, Google AI Overviews
  starts showing the rating.
- Mirror reviews on Google Business Profile and Houzz; link both via `sameAs`.

---

## 8. Technical Foundations

### 8.1 Server-render the prose

Most pages currently start with `'use client'` (e.g.
[app/page.tsx](../app/page.tsx), [app/why-compoxen/page.tsx](../app/why-compoxen/page.tsx)).
That ships an initial HTML shell with the marketing content rendered on
the client after hydration. Some AI crawlers (PerplexityBot, ClaudeBot)
**do not execute JS**.

Action: refactor each route as:

- `app/<route>/page.tsx` — Server Component, contains all prose, headings,
  lists, tables, and JSON-LD.
- `app/<route>/<Interactive>.tsx` — `'use client'` islands for the bits that
  need state (animations, AvailabilityChecker, forms).

This is the single biggest win for AI extraction quality.

### 8.2 Freshness signals

- Add a `<time dateTime={lastUpdated}>Last updated {Month YYYY}</time>` to
  every key page footer.
- Surface `dateModified` in `Article` and (where applicable) `Product`
  schema. Pull from git history at build time.

### 8.3 Image SEO

- Audit all `<Image alt="…">` for descriptive copy (replace generic
  "Background" in [components/layouts/LeadFormLayout.tsx](../components/layouts/LeadFormLayout.tsx)).
- Add `ImageObject` schema for the color swatches and gallery hero images.
- Generate an image sitemap (§5.3).
- Provide a clear, downloadable **brand asset page** under `/press` so
  third parties cite the canonical Compoxen image.

### 8.4 Performance / Core Web Vitals

- Run Lighthouse CI on every PR; fail at LCP > 2.5s or CLS > 0.1.
- Defer/lazy-load Framer Motion below the fold.
- Inline critical CSS for hero (Tailwind's JIT does most of this; verify).
- Preconnect to fonts and image CDN.

### 8.5 Lead-capture backend (conversion)

Forms currently `console.log` (see TODOs in
[components/WaitingListForm.tsx](../components/WaitingListForm.tsx) and
form pages). This converts none of the GEO traffic. Implement:

- `app/api/lead/route.ts` (POST) → CRM (HubSpot / Salesforce) + Slack notify.
- `app/api/dealer-kit/route.ts` (POST) → CRM with `lifecycle = 'dealer'`.
- `app/api/waitlist/route.ts` (POST) → CRM with state + role tags.
- Use `next-safe-action` or zod parsing on inputs; rate-limit by IP.
- Add **honeypot** + **Turnstile / hCaptcha** to all forms (spam from AI
  agents will spike once you rank).

### 8.6 Analytics & attribution

- Add a server-side analytics layer (Plausible / PostHog) so AI-bot traffic
  isn't filtered out by client-only blockers.
- Tag visits where `referer` matches `*.openai.com`, `*.perplexity.ai`,
  `*.google.com/search?…`, `*.bing.com`, `chat.openai.com`, etc., as
  channel = `ai_referral`.
- Track `utm_source=chatgpt|perplexity|gemini|copilot` if we ever paste
  links into an AI prompt for testing — and ask dealers to do the same.

---

## 9. Trust & Conversion (the bottom of the funnel)

Even with great GEO, the visitor still has to convert. Tighten:

- **Public price ranges** on `/pricing` (e.g., "$45–$85 / linear ft installed,
  varies by state and site complexity"). AI engines cannot recommend a
  brand without price context; "contact us" pages get filtered out.
- **Trust strip** site-wide: BBB A+, USA designed, 20-yr warranty, # of
  installers — already present, keep visible above the fold on every page.
- **Social proof per state**: rotate 1–3 quoted testimonials with city +
  install date.
- **Above-the-fold CTA on every new page**: "Check your zip" → existing
  [components/AvailabilityChecker.tsx](../components/AvailabilityChecker.tsx).

---

## 10. Measurement

You cannot improve what you cannot see.

### 10.1 GEO-specific KPIs

| KPI | Source | Target (12 mo) |
|---|---|---|
| AI-referral sessions / month | server logs (referer match) | 2,500 |
| AI-referral lead conversions | CRM | 100 / mo |
| Branded "Compoxen" mentions in AI answers | manual + Profound/Otterly probes | 60% of relevant prompts |
| Citations in Perplexity for top 20 queries | Perplexity API monitoring | 30% of queries |
| Pages with valid schema (no Rich Results errors) | CI | 100% |
| Bot-allowed crawl coverage | server logs | All routes hit by GPTBot, ClaudeBot, PerplexityBot, Google-Extended monthly |
| `lastModified` freshness | sitemap | All pillar pages ≤ 90 days |

### 10.2 AI visibility tooling

Choose one of (in priority order): **Profound**, **Otterly.ai**, **Peec.ai**,
**AthenaHQ**, **Goodie**. These probe ChatGPT/Perplexity/Gemini weekly with
the query universe in §2 and report mention rate.

If budget = 0, build a thin internal harness:

- A nightly GitHub Action that calls the OpenAI / Perplexity / Gemini APIs
  with each of our target queries.
- Stores responses in a JSON log.
- Diffs week-over-week to detect when Compoxen is mentioned, where it's
  cited, and which competitors win.

### 10.3 Quarterly review

Every quarter:

1. Re-run the audit (§1) and update the status table.
2. Re-rank the priority backlog (§11) based on KPI delta.
3. Refresh `llms.txt` index for any new pages.
4. Refresh `lastModified` on pillar pages whose facts have been re-verified.

---

## 11. Phased Roadmap

### Phase 1 — Foundations (quick wins, weeks 1–2)

- [ ] Add explicit AI bot allowlist to [app/robots.ts](../app/robots.ts).
- [ ] Ship `public/llms.txt` (manually curated initial version).
- [ ] Inject `getServiceAreaSchema()` and `getLocalBusinessSchema()` into
      [app/states/[state-name]/layout.tsx](../app/states/%5Bstate-name%5D/layout.tsx).
- [ ] Inject `getBreadcrumbSchema()` site-wide.
- [ ] Ship visible `/faq` page rendering all current `getFAQSchema()` Q&As.
- [ ] Replace generic alt text in [components/layouts/LeadFormLayout.tsx](../components/layouts/LeadFormLayout.tsx).
- [ ] Wire form backends (lead capture must work before driving traffic).

### Phase 2 — Pillars (weeks 3–6)

- [ ] Build `/composite-fencing` pillar page (server-rendered).
- [ ] Build `/composite-fencing-vs-wood`, `/-vs-vinyl`, `/-vs-metal`.
- [ ] Build `/specifications` (single source of truth).
- [ ] Build `/installation` with `HowTo` schema.
- [ ] Expand `/faq` to 30+ entries with mirrored schema.
- [ ] Build `/about` with founders + `Person` schema; claim Wikidata.
- [ ] Refactor home and `/why-compoxen` to server components with client islands.

### Phase 3 — Depth (weeks 7–12)

- [ ] Build `/glossary` with 30+ `DefinedTerm` entries.
- [ ] Build `/pricing` with public ranges + `Offer` schema.
- [ ] Build `/case-studies` + 4 initial slugs (one per active state).
- [ ] Build top-3-city pages per active state (12 pages).
- [ ] Add per-state mini-FAQ + state-specific `FAQPage` schema.
- [ ] Wire review collection → `aggregateRating` once N ≥ 25.

### Phase 4 — Authority & Cadence (weeks 13–24)

- [ ] Launch `/blog` with 2 posts/mo cadence.
- [ ] Launch `/press` with media kit + earned media list.
- [ ] Pitch top 10 trade publications.
- [ ] Apply for ASTM / UL / ICC-ES listings; publish certs.
- [ ] Stand up AI-visibility monitoring (Profound or DIY).

### Phase 5 — Compounding (ongoing)

- [ ] Refresh pillar pages quarterly with new dates and new facts.
- [ ] Add new state pages as Phase 2/3 launches roll out
      (NV Sep 2026, AZ Oct 2026, WY Jan 2027, then expansion).
- [ ] Quarterly re-audit + KPI review (§10.3).

---

## 12. Risk & Decisions Required

1. **Training-data consent**: Should `CCBot` and `GPTBot` be allowed for
   model-training use, not just live retrieval? Default = yes. Owner: _Legal/Marketing_.
2. **Public pricing**: Will dealer network agree to a public price band on
   `/pricing`? This is the single biggest commercial-intent GEO win.
   Owner: _Sales leadership_.
3. **E-E-A-T disclosure**: Are we comfortable disclosing manufacturing
   partner / design center detail on `/about`? Owner: _Founders_.
4. **Outbound citations**: Are we willing to link to authoritative third
   parties in comparison pages (including, occasionally, competitors)?
   GEO best practice = yes; brand instinct may resist. Owner: _Brand_.
5. **Review collection**: Need a post-install workflow with installers.
   Owner: _Operations_.

---

## 13. Appendix — One-page checklist for any new page

Use as PR template addition for any new route.

```
[ ] Server component (no `'use client'` at the page boundary)
[ ] <h1> contains the canonical entity / query
[ ] First 80 words directly answer the page's primary query
[ ] At least one bullet list or table
[ ] Visible "Last updated {Month YYYY}"
[ ] Page-specific JSON-LD: Article|Product|Service|FAQPage|HowTo|...
[ ] BreadcrumbList JSON-LD
[ ] OpenGraph image + title + description in metadata export
[ ] Canonical URL set
[ ] Added to app/sitemap.ts
[ ] Added to public/llms.txt
[ ] At least one outbound citation to an authoritative source (where applicable)
[ ] All <Image> have descriptive alt text
[ ] Page validates: no schema errors in Rich Results Test
[ ] Visible CTA: zip-check or quote form
```
