import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Container,
  Layers,
  Handshake,
  Tag,
  Clock,
  PackageCheck,
  Mail,
  Phone,
} from 'lucide-react'
import PageHero from '@/components/PageHero'
import Breadcrumbs from '@/components/Breadcrumbs'
import SchemaScript from '@/components/SchemaScript'
import { getBreadcrumbSchema } from '@/lib/schema'
import { BRAND } from '@/lib/constants'

const URL = '/pricing'

// Strategic Distributor Program contact (separate from general inbox).
const PROGRAM_CONTACT = {
  name: 'Greg Brown',
  title: 'Director of National Supplier Partnerships',
  email: 'gbrown@compoxen.com',
  phone: '(385) 530-0021',
  phoneHref: 'tel:+13855300021',
}

export const metadata: Metadata = {
  title: 'Strategic Distributor Program | Compoxen',
  description:
    'Compoxen Strategic Distributor Program — protected territory, container-volume partnerships, DDP logistics, and the Horizon Series Gen II co-extruded composite fence system. UT · ID · OR · CO.',
  alternates: { canonical: BRAND.url + URL },
  openGraph: {
    title: 'Strategic Distributor Program | Compoxen',
    description:
      'A composite fence line built for the trade. Protected territory, container-optimized DDP logistics, OEM and private-label capability.',
    url: BRAND.url + URL,
    images: [
      { url: '/images/gallery-3.jpg', width: 1200, height: 630, alt: 'Compoxen Horizon Series composite fence' },
    ],
  },
}

export default function WholesalePage() {
  return (
    <>
      <SchemaScript
        data={[
          getBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Wholesale', url: URL },
          ]),
        ]}
      />

      <PageHero
        badge="Strategic Distributor Program"
        title={
          <>
            Built for partners.{' '}
            <span className="text-gradient-light">Not bid sheets.</span>
          </>
        }
        subtitle="A small group of strong partners. Protected territory. Container-optimized DDP logistics. The Horizon Series — Gen II co-extruded composite fencing — engineered for the Western US."
        primaryCta={{ label: 'Apply to the Program', href: '/get-quote' }}
        secondaryCta={{ label: `Email ${PROGRAM_CONTACT.name.split(' ')[0]}`, href: `mailto:${PROGRAM_CONTACT.email}` }}
      />

      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Wholesale', href: URL }]} />

      {/* WHY PARTNER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <div className="badge badge-amber mb-5">
              <Handshake size={14} /> Why Partner With Compoxen
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-4 tracking-tight">
              We are selective on purpose.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Compoxen is built for strategic distribution — not contractor-level competition. Our model supports a small group of partners who want exclusivity, margin protection, and a premium product line they can own in their market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: <Handshake size={20} />,
                title: 'US-based account team',
                body: 'Real-time communication and a dedicated account manager — not a ticket queue.',
              },
              {
                icon: <Layers size={20} />,
                title: 'Western US market expertise',
                body: 'Modern architecture, climate-driven performance, and the regional spec writers we work with daily.',
              },
              {
                icon: <Truck size={20} />,
                title: 'DDP logistics, included',
                body: 'Door-to-door delivery with customs, duties, and import handling built into the landed cost.',
              },
              {
                icon: <Container size={20} />,
                title: 'Container optimization',
                body: 'Engineered loading plans that drive the lowest possible landed cost per panel set.',
              },
              {
                icon: <Tag size={20} />,
                title: 'OEM &amp; private label',
                body: 'Carry the line under the Compoxen brand — or your own. Available for qualified partners.',
              },
              {
                icon: <ShieldCheck size={20} />,
                title: 'Climate-engineered material',
                body: 'Built for high UV, extreme heat, and freeze-thaw cycles across the Mountain West and Pacific Northwest.',
              },
            ].map((c) => (
              <div key={c.title} className="card-enterprise p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700 mb-4">
                  {c.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{c.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: c.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HORIZON SERIES */}
      <section className="py-20 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <div className="badge badge-amber mb-5">
              <Layers size={14} /> The Horizon Series
            </div>
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-gray-900 mb-4 tracking-tight">
              Gen II co-extruded composite fencing.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Our flagship system. A 0.8&quot; (20&nbsp;mm) profile with a full protective cap, engineered for long-term durability and a premium hand-feel on the counter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Premium Panel Kit */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-enterprise-950/5 p-7 md:p-8 shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-1">
                    Flagship System
                  </div>
                  <h3 className="text-2xl font-semibold text-enterprise-950 tracking-tight">
                    Premium Panel Kit
                  </h3>
                  <div className="text-sm text-enterprise-950/50 mt-1">6 ft × 68 in · per kit</div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-800 ring-1 ring-amber-200">
                  Gen II
                </span>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-enterprise-950/70">
                {[
                  '10 co-extruded composite slats (6.35″ × 70.5″)',
                  '1 heavy-duty 96″ aluminum post with cap',
                  'Top and bottom aluminum rails',
                  '4 rail brackets',
                  'Decorative side trims',
                  '0.8″ (20 mm) profile · full cap',
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <PackageCheck size={14} className="text-amber-600 mt-0.5 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gate Kits */}
            <div className="bg-white rounded-2xl border border-enterprise-950/5 p-7 shadow-sm">
              <div className="text-xs font-semibold text-enterprise-950/40 uppercase tracking-wider mb-1">
                KD Gate Kits
              </div>
              <h3 className="text-xl font-semibold text-enterprise-950 tracking-tight mb-4">
                Match the system. Ship flat.
              </h3>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="font-semibold text-enterprise-950">Pedestrian Gate</div>
                  <div className="text-enterprise-950/50 text-xs mb-1">4 ft × 65 in</div>
                  <div className="text-enterprise-950/60">KD frame &amp; panel · 96″ post · latch + 2 heavy-duty hinges</div>
                </li>
                <li className="border-t border-enterprise-950/10 pt-4">
                  <div className="font-semibold text-enterprise-950">Wide Access Gate</div>
                  <div className="text-enterprise-950/50 text-xs mb-1">6 ft × 65 in</div>
                  <div className="text-enterprise-950/60">KD frame &amp; panel · 96″ post · latch + 2 heavy-duty hinges</div>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-6 text-center text-enterprise-950/40 text-xs">
            Wholesale pricing is provided to qualified partners under the Strategic Distributor Program. Contact us for current terms.
          </p>
        </div>
      </section>

      {/* LOGISTICS & TERMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Logistics */}
            <div>
              <div className="badge badge-amber mb-5">
                <Container size={14} /> Logistics
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Container-optimized. DDP delivered.
              </h2>
              <p className="text-gray-500 mb-6">
                We engineer the load plan and handle every step from origin to your dock — so your team plans inventory, not freight forwarders.
              </p>

              <dl className="divide-y divide-enterprise-950/10 border border-enterprise-950/10 rounded-xl overflow-hidden">
                {[
                  ['Container capacity (40′ HQ)', '360 – 380 full panel sets'],
                  ['Loading plan', '16 pallets slats · 3 pallets posts · 1 pallet rails'],
                  ['Pallet spec', '1 pallet = 240 slats = 24 panel sets'],
                  ['Total weight', '~19 tons (US road-legal)'],
                  ['Incoterms', 'DDP — delivered to your US warehouse'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start justify-between gap-4 px-5 py-3.5 bg-white">
                    <dt className="text-sm text-enterprise-950/60">{k}</dt>
                    <dd className="text-sm font-semibold text-enterprise-950 text-right">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Terms */}
            <div>
              <div className="badge badge-amber mb-5">
                <ShieldCheck size={14} /> Partnership Terms
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                Disciplined. Documented. Built to last.
              </h2>
              <p className="text-gray-500 mb-6">
                Multi-tiered pricing protects distributor margins from the first pallet. Terms scale with your relationship.
              </p>

              <ul className="space-y-3">
                {[
                  { icon: <Clock size={16} />, title: 'Lead time', body: '~6 weeks order confirmation to final delivery (production ~2 weeks).' },
                  { icon: <ShieldCheck size={16} />, title: '20-year limited warranty', body: 'Against fading, rotting, and structural failure.' },
                  { icon: <Tag size={16} />, title: 'OEM / private label', body: 'Available for qualified partners.' },
                  { icon: <PackageCheck size={16} />, title: 'Showroom samples', body: 'Sample boards and container planning available on request.' },
                  { icon: <Handshake size={16} />, title: 'Onboarding terms', body: 'First two containers: 30% down. After that: standard terms only — no down payment.' },
                ].map((t) => (
                  <li key={t.title} className="flex items-start gap-3 p-4 rounded-xl border border-enterprise-950/10 bg-white">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                      {t.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-enterprise-950">{t.title}</div>
                      <div className="text-sm text-enterprise-950/60">{t.body}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <div className="badge badge-dark mb-5 mx-auto">
              <Mail size={14} /> Program Contact
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Talk to the program directly.
            </h2>
            <p className="mt-3 text-white/50 text-base max-w-xl mx-auto">
              Pricing, container planning, and territory availability are handled one-on-one. Reach out and we&apos;ll route you fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`mailto:${PROGRAM_CONTACT.email}`}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/8 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Email</div>
                <div className="text-white font-semibold">{PROGRAM_CONTACT.email}</div>
              </div>
            </a>
            <a
              href={PROGRAM_CONTACT.phoneHref}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/40 hover:bg-white/8 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/40">Direct line</div>
                <div className="text-white font-semibold">{PROGRAM_CONTACT.phone}</div>
              </div>
            </a>
          </div>

          <div className="text-center text-white/50 text-sm mb-8">
            <span className="text-white/80 font-semibold">{PROGRAM_CONTACT.name}</span> · {PROGRAM_CONTACT.title}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/get-quote"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Apply to the Program <ArrowRight size={16} />
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
            >
              See Open Territories
            </Link>
          </div>

          <p className="mt-10 text-center text-white/30 text-xs">
            Strategic Distributor Program · Valid through August 31, 2026 · UT · ID · OR · CO
          </p>
        </div>
      </section>
    </>
  )
}
