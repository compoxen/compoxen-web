import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Truck, ShieldCheck, CircleDot } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import { getBreadcrumbSchema, getOrganizationSchema } from '@/lib/schema'
import SchemaScript from '@/components/SchemaScript'
import Breadcrumbs from '@/components/Breadcrumbs'
import PageHero from '@/components/PageHero'

const URL = '/service-areas'

export const metadata: Metadata = {
  title: 'Territory — UT · ID · OR · CO | Compoxen',
  description:
    'Compoxen runs a Strategic Distributor Program across Utah, Idaho, Oregon, and Colorado. A small group of strong partners, protected territories, container-optimized DDP logistics.',
  alternates: { canonical: `${BRAND.url}${URL}` },
  openGraph: {
    title: 'Territory — UT · ID · OR · CO | Compoxen',
    description:
      'Strategic Distributor Program across Utah, Idaho, Oregon, and Colorado. Protected territories. Container-volume partners.',
    url: `${BRAND.url}${URL}`,
  },
}

type TerritoryStatus = 'open' | 'limited' | 'closed'

interface Territory {
  state: string
  abbrev: string
  status: TerritoryStatus
  hubs: string[]
  notes: string
}

const TERRITORIES: Territory[] = [
  {
    state: 'Utah',
    abbrev: 'UT',
    status: 'limited',
    hubs: ['Salt Lake City', 'Provo', 'Ogden', 'St. George', 'Logan'],
    notes:
      'Home market. Draper HQ ships from the Wasatch Front. A small number of partner slots remain along the I-15 corridor.',
  },
  {
    state: 'Idaho',
    abbrev: 'ID',
    status: 'open',
    hubs: ['Boise', 'Meridian', 'Idaho Falls', 'Coeur d’Alene', 'Twin Falls'],
    notes:
      'Open territory across Treasure Valley, Eastern Idaho, and the Panhandle. Strong fit for established yards or fence-contractor groups.',
  },
  {
    state: 'Oregon',
    abbrev: 'OR',
    status: 'open',
    hubs: ['Portland', 'Salem', 'Eugene', 'Bend', 'Medford'],
    notes:
      'Open territory across the Willamette Valley and Central/Southern Oregon. Climate-engineered shell suits coastal UV and wet/dry cycles.',
  },
  {
    state: 'Colorado',
    abbrev: 'CO',
    status: 'limited',
    hubs: ['Denver', 'Colorado Springs', 'Fort Collins', 'Boulder', 'Grand Junction'],
    notes:
      'Front Range slots filling first. Western Slope and mountain markets are open and a strong fit for our freeze-thaw spec.',
  },
]

const STATUS_LABEL: Record<TerritoryStatus, string> = {
  open: 'Open territory',
  limited: 'Limited slots',
  closed: 'Closed',
}

const STATUS_STYLE: Record<TerritoryStatus, string> = {
  open: 'bg-green-50 text-green-700 ring-1 ring-green-200',
  limited: 'bg-amber-50 text-amber-800 ring-1 ring-amber-200',
  closed: 'bg-gray-100 text-gray-500 ring-1 ring-gray-200',
}

export default function TerritoryPage() {
  return (
    <>
      <SchemaScript
        data={[
          getOrganizationSchema(),
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Territory', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Territory"
        title={
          <>
            Four states.{' '}
            <span className="text-gradient-light">A small group of partners.</span>
          </>
        }
        subtitle="The Compoxen Strategic Distributor Program runs across Utah, Idaho, Oregon, and Colorado. We work with a few strong partners per region — not the whole list."
        primaryCta={{ label: 'Open a Trade Account', href: '/get-quote' }}
        secondaryCta={{ label: `Call ${BRAND.phone}`, href: BRAND.phoneHref }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Territory', href: URL }]} />

      {/* SIGNAL STRIP */}
      <section className="bg-white border-b border-enterprise-950/5">
        <div className="container mx-auto px-6 max-w-5xl py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <Stat icon={<MapPin size={16} />} value="4" label="States in program" />
            <Stat icon={<ShieldCheck size={16} />} value="Protected" label="Territory model" />
            <Stat icon={<Truck size={16} />} value="DDP" label="Door-to-door logistics" />
            <Stat icon={<CircleDot size={16} />} value="~6 wks" label="Order to delivery" />
          </div>
        </div>
      </section>

      {/* TERRITORY CARDS */}
      <section className="py-16 md:py-20 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TERRITORIES.map((t) => (
              <article
                key={t.abbrev}
                className="bg-white rounded-2xl p-7 border border-enterprise-950/5 hover:border-amber-400/40 hover:shadow-md transition-all"
              >
                <header className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-1">
                      {t.abbrev}
                    </div>
                    <h2 className="text-2xl font-semibold text-enterprise-950 tracking-tight">
                      {t.state}
                    </h2>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold ${STATUS_STYLE[t.status]}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                    {STATUS_LABEL[t.status]}
                  </span>
                </header>

                <p className="text-enterprise-950/60 text-sm leading-relaxed mb-5">
                  {t.notes}
                </p>

                <div className="text-[11px] font-semibold text-enterprise-950/40 uppercase tracking-wider mb-2">
                  Primary hubs
                </div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {t.hubs.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-enterprise-50 text-enterprise-950/70 text-xs"
                    >
                      <MapPin size={10} className="text-amber-600/70" />
                      {h}
                    </span>
                  ))}
                </div>

                <Link
                  href="/get-quote"
                  className="inline-flex items-center gap-1.5 text-amber-700 font-semibold text-sm hover:text-amber-600 transition-colors"
                >
                  Inquire about {t.state} territory <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE PARTNER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="badge badge-amber mb-5">
              <ShieldCheck size={14} /> How We Partner
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-4 tracking-tight">
              Selective by design.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Compoxen is built for strategic distribution — not contractor-level competition. Our model supports a small group of strong partners who want exclusivity, margin protection, and a premium product line they can own in their market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                title: 'Protected territory',
                body: 'A few partners per region. We do not sell to everyone in your market.',
              },
              {
                title: 'Margin discipline',
                body: 'Multi-tiered pricing structure that protects distributor economics from the first pallet.',
              },
              {
                title: 'DDP logistics',
                body: 'Door-to-door delivery with customs, duties, and import handling included. No surprises at port.',
              },
            ].map((c) => (
              <div key={c.title} className="card-enterprise p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <MapPin size={28} className="text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Is your territory still open?
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Tell us your market and volume. We&apos;ll tell you whether a slot is available — and walk you through container planning if it is.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Open a Trade Account <ArrowRight size={16} />
            </Link>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              Call {BRAND.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ value, label, icon }: { value: string; label: string; icon: React.ReactNode }) {
  return (
    <div>
      <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 mb-2">
        {icon}
      </div>
      <div className="text-2xl font-semibold text-enterprise-950 tabular-nums">{value}</div>
      <div className="text-enterprise-950/40 text-xs mt-1 uppercase tracking-wider">{label}</div>
    </div>
  )
}
