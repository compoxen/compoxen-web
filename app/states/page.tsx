'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICE_STATES, EXPANSION_STATES, BRAND } from '@/lib/constants'
import AvailabilityChecker from '@/components/AvailabilityChecker'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}
const stagger = { visible: { transition: { staggerChildren: 0.08 } } }

export default function StatesIndex() {
  const activeStates = Object.values(SERVICE_STATES)
  const comingSoonStates = Object.values(EXPANSION_STATES)

  return (
    <div className="w-full overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,119,6,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge-dark text-xs">
              {BRAND.designOrigin} · Perfected in the Mountains
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-white font-semibold tracking-tight leading-[1.08]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Where Compoxen is{' '}
            <span className="text-gradient-light">available</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/40 text-lg max-w-xl mx-auto"
          >
            Currently perfecting operations in the Mountain West.
            Expanding nationwide based on demand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-md mx-auto"
          >
            <AvailabilityChecker />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-enterprise-50 to-transparent" />
      </section>

      {/* ── ACTIVE STATES ── */}
      <section className="py-20 md:py-28 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="badge-green text-xs">
              <CheckCircle size={12} className="mr-1" /> Currently Serving
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Active service states
            </motion.h2>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
            {activeStates.map((state) => (
              <motion.div key={state.abbreviation} variants={fadeUp}>
                <Link
                  href={`/states/${state.slug}`}
                  className="block card-enterprise p-7 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                        {state.name}
                      </h3>
                      <p className="text-enterprise-950/40 text-sm">{state.region} · {state.climateZone}</p>
                    </div>
                    <span className="badge-green text-xs">Active</span>
                  </div>
                  <p className="text-enterprise-950/50 text-sm leading-relaxed mb-4 line-clamp-2">
                    {state.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-enterprise-950/30 text-sm">
                      {state.installerCount}+ Certified Installers
                    </span>
                    <span className="text-amber-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── COMING SOON ── */}
      <section className="py-20 md:py-28 bg-white border-t border-enterprise-950/4">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="badge-amber text-xs">
              <Clock size={12} className="mr-1" /> Expanding Soon
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl sm:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Coming next
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-enterprise-950/40 max-w-xl mx-auto">
              Based on demand from contractors and homeowners, these states are next in our expansion plan.
            </motion.p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-3 gap-4">
            {comingSoonStates.map((state) => (
              <motion.div key={state.abbreviation} variants={fadeUp}>
                <Link
                  href={`/states/${state.slug}`}
                  className="block card-enterprise p-6 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors">
                      {state.name}
                    </h3>
                    <span className="badge-amber text-xs">Soon</span>
                  </div>
                  <p className="text-enterprise-950/50 text-sm leading-relaxed mb-3 line-clamp-2">
                    {state.description}
                  </p>
                  {state.launchDate && (
                    <p className="text-amber-600 text-xs font-medium">
                      Est. {new Date(state.launchDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-30" />
        <div className="relative z-10 container mx-auto px-6 max-w-2xl text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">
              Don&apos;t see your state?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/35 mt-3 leading-relaxed">
              We&apos;re expanding based on demand. Every waiting list signup helps us prioritize
              which states we enter next.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
