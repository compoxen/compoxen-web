import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { Prose, ContentSection, LastUpdated, ClosingCTA } from '@/components/content/Primitives'
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema'
import { Check, X, Minus } from 'lucide-react'

export interface ComparisonRow {
  attribute: string
  compoxen: string
  competitor: string
  /** 'win' = Compoxen wins; 'loss' = competitor wins; 'tie' = neutral. */
  verdict: 'win' | 'loss' | 'tie'
}

export interface ComparisonPageProps {
  competitorName: string
  competitorSlug: 'wood' | 'vinyl' | 'metal'
  url: string
  publishedDate: string
  updatedDate: string
  oneLineVerdict: string
  intro: string
  rows: ComparisonRow[]
  chooseCompoxenIf: string[]
  chooseCompetitorIf: string[]
  longForm: React.ReactNode
  heroImage: string
  metaTitle: string
  metaDescription: string
}

function VerdictIcon({ verdict }: { verdict: ComparisonRow['verdict'] }) {
  if (verdict === 'win') return <Check size={16} className="text-green-600" aria-label="Compoxen wins" />
  if (verdict === 'loss') return <X size={16} className="text-red-500" aria-label="Competitor wins" />
  return <Minus size={16} className="text-enterprise-950/40" aria-label="Tie" />
}

export default function ComparisonPage(props: ComparisonPageProps) {
  return (
    <>
      <SchemaScript
        data={[
          getArticleSchema({
            type: 'Article',
            url: props.url,
            headline: props.metaTitle,
            description: props.metaDescription,
            image: props.heroImage,
            datePublished: props.publishedDate,
            dateModified: props.updatedDate,
            section: 'Comparisons',
            keywords: [`composite fencing vs ${props.competitorSlug}`, props.competitorSlug + ' fencing', 'composite fencing'],
          }),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Composite Fencing', url: '/composite-fencing' },
            { name: `vs ${props.competitorName}`, url: props.url },
          ]),
        ]}
      />

      <PageHero
        badge="Comparison"
        title={
          <>
            Composite vs <span className="text-gradient-light">{props.competitorName.toLowerCase()}</span> fencing
          </>
        }
        subtitle={props.oneLineVerdict}
        primaryCta={{ label: 'Get a Quote', href: '/get-quote' }}
        secondaryCta={{ label: 'See Specifications', href: '/specifications' }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Composite Fencing', href: '/composite-fencing' },
          { name: `vs ${props.competitorName}`, href: props.url },
        ]}
      />

      <ContentSection>
        <Prose>
          <p className="text-xl text-enterprise-950 font-medium">{props.intro}</p>
          <LastUpdated date={props.updatedDate} />
        </Prose>

        {/* The comparison table */}
        <div className="my-10 overflow-x-auto">
          <table className="w-full border-collapse bg-white border border-enterprise-950/8 rounded-2xl overflow-hidden text-sm">
            <thead>
              <tr className="bg-enterprise-950 text-white">
                <th scope="col" className="text-left p-4 font-semibold">Attribute</th>
                <th scope="col" className="text-left p-4 font-semibold">Compoxen composite</th>
                <th scope="col" className="text-left p-4 font-semibold">{props.competitorName}</th>
                <th scope="col" className="text-center p-4 font-semibold w-20">Winner</th>
              </tr>
            </thead>
            <tbody>
              {props.rows.map((row, i) => (
                <tr key={row.attribute} className={i % 2 === 0 ? 'bg-enterprise-50' : 'bg-white'}>
                  <th scope="row" className="text-left p-4 font-medium text-enterprise-950">{row.attribute}</th>
                  <td className="p-4 text-enterprise-950/80">{row.compoxen}</td>
                  <td className="p-4 text-enterprise-950/60">{row.competitor}</td>
                  <td className="p-4 text-center"><VerdictIcon verdict={row.verdict} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-white border border-enterprise-950/8 rounded-2xl">
            <h3 className="text-base font-semibold text-enterprise-950 mb-3">Choose composite if…</h3>
            <ul className="space-y-2 text-sm text-enterprise-950/70">
              {props.chooseCompoxenIf.map(s => (
                <li key={s} className="flex gap-2"><Check size={14} className="text-green-600 mt-1 shrink-0" /> {s}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 bg-white border border-enterprise-950/8 rounded-2xl">
            <h3 className="text-base font-semibold text-enterprise-950 mb-3">Choose {props.competitorName.toLowerCase()} if…</h3>
            <ul className="space-y-2 text-sm text-enterprise-950/70">
              {props.chooseCompetitorIf.map(s => (
                <li key={s} className="flex gap-2"><Check size={14} className="text-enterprise-950/40 mt-1 shrink-0" /> {s}</li>
              ))}
            </ul>
          </div>
        </div>

        <Prose>{props.longForm}</Prose>
      </ContentSection>

      <ClosingCTA />
    </>
  )
}
