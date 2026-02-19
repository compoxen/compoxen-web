'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, CheckCircle, Clock, ArrowRight, Users, Star, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { getStateBySlug, BRAND, PRODUCT_COLORS, PRODUCT_SPECS } from '@/lib/constants'
import AvailabilityChecker from '@/components/AvailabilityChecker'
import WaitingListForm from '@/components/WaitingListForm'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

export default function StatePage() {
  const params = useParams()
  const slug = params['state-name'] as string
  const state = getStateBySlug(slug)

  if (!state) return null

  const isActive = state.status === 'active'

  return (
    <div className="w-full overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(217,119,6,0.1)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 flex-wrap">
              <span className={`${isActive ? 'badge-green' : 'badge-amber'} text-xs`}>
                {isActive ? <><CheckCircle size={12} className="mr-1" /> Currently Serving</> : <><Clock size={12} className="mr-1" /> Coming Soon</>}
              </span>
              <span className="badge-dark text-xs">{BRAND.designOrigin}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-white font-semibold tracking-tight leading-[1.08]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
            >
              Premium composite fencing
              <br />
              <span className="text-gradient-light">in {state.name}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-5 text-white/40 text-lg max-w-2xl leading-relaxed"
            >
              {state.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {isActive ? (
                <>
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/dealer-kit"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/70 font-medium text-sm rounded-xl hover:bg-white/6 transition-all"
                  >
                    Become an Installer
                  </Link>
                </>
              ) : (
                <a
                  href="#waiting-list"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
                >
                  Join the Waiting List <ArrowRight size={16} />
                </a>
              )}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
      </section>

      {/* ── STATS (Active only) ── */}
      {isActive && (
        <section className="py-14 bg-white border-b border-enterprise-950/4">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { icon: Users, value: `${state.installerCount}+`, label: 'Certified Installers' },
                { icon: Shield, value: PRODUCT_SPECS.warranty, label: 'Warranty' },
                { icon: Star, value: '99%', label: 'Satisfaction' },
                { icon: Thermometer, value: state.climateZone, label: 'Climate Tested' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeUp} className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3">
                    <stat.icon size={20} className="text-amber-600" />
                  </div>
                  <div className="text-2xl font-semibold text-enterprise-950 tabular-nums">{stat.value}</div>
                  <div className="text-enterprise-950/40 text-xs mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* ── CLIMATE BENEFITS ── */}
      <section className="py-20 md:py-28 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="badge-amber text-xs">Climate Optimized</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Engineered for {state.name}&apos;s climate
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-enterprise-950/40 max-w-2xl mx-auto">
              {state.climateZone} conditions demand materials that perform. Compoxen is tested and proven
              in {state.region}&apos;s most demanding environments.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-4">
            {state.benefits.map((benefit, i) => (
              <motion.div key={i} variants={fadeUp} className="card-enterprise p-5 flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center">
                  <CheckCircle size={18} className="text-amber-600" />
                </div>
                <p className="text-enterprise-950/60 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COLORS ── */}
      <section className="py-20 md:py-28 bg-white border-t border-enterprise-950/4">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="badge-amber text-xs">Palette</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Available colors in {state.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-enterprise-950/40 max-w-2xl mx-auto">
              Five architect-led colors designed to complement {state.name}&apos;s landscapes and modern architecture.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCT_COLORS.map((color) => (
              <motion.div
                key={color.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow mb-3">
                  <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-enterprise-950 font-semibold text-sm">{color.name}</div>
                <div className="text-enterprise-950/40 text-xs">{color.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AVAILABILITY / WAITING LIST ── */}
      <section id="waiting-list" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-30" />
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          {isActive ? (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">
                Check availability in {state.name}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 mt-3 mb-10">
                Enter your zip code to find certified Compoxen installers near you.
              </motion.p>
              <AvailabilityChecker />
            </motion.div>
          ) : (
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2 variants={fadeUp} className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">
                Coming to {state.name}
                {state.launchDate && (
                  <span className="block text-amber-400 text-lg mt-2 font-medium">
                    Estimated: {new Date(state.launchDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                )}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/35 mt-3 mb-10">
                Join the waiting list to be first in line when Compoxen launches in {state.name}.
              </motion.p>
              <WaitingListForm stateName={state.name} stateAbbrev={state.abbreviation} />
            </motion.div>
          )}
        </div>
      </section>

      {/* ── DESIGNED IN USA ── */}
      <section className="py-16 bg-enterprise-950">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="badge-dark text-xs">{BRAND.designOrigin}</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-white text-2xl sm:text-3xl font-semibold tracking-tight">
              Perfected in the mountains. Coming to your state.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/30 mt-3 max-w-2xl mx-auto text-sm">
              Every Compoxen product is designed at our innovation center in {BRAND.designCenter},
              tested against extreme conditions, and built to perform anywhere.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap justify-center gap-2">
              {['Utah', 'Colorado', 'Idaho', 'California'].map((s) => (
                <Link
                  key={s}
                  href={`/states/${s.toLowerCase()}`}
                  className="px-4 py-2 bg-white/6 border border-white/6 text-white/60 rounded-lg text-xs hover:bg-white/10 hover:text-white transition"
                >
                  {s}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
