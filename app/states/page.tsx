'use client'

import { motion } from 'framer-motion'
import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { SERVICE_STATES, EXPANSION_STATES, BRAND } from '@/lib/constants'
import AvailabilityChecker from '@/components/AvailabilityChecker'

export default function StatesIndex() {
  const activeStates = Object.values(SERVICE_STATES)
  const comingSoonStates = Object.values(EXPANSION_STATES)

  return (
    <div className="w-full overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/20" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {BRAND.designOrigin} • Perfected in the Mountains
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 max-w-3xl mx-auto"
          >
            Where Compoxen
            <br />
            <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Is Available
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg max-w-xl mx-auto mb-12"
          >
            Currently perfecting operations in the Mountain West. 
            Expanding nationwide based on demand.
          </motion.p>

          {/* Availability Checker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            <AvailabilityChecker />
          </motion.div>
        </div>
      </section>

      {/* ═══ ACTIVE STATES ═══ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <CheckCircle size={16} /> Currently Serving
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Active Service <span className="font-bold">States</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activeStates.map((state, i) => (
              <motion.div
                key={state.abbreviation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/states/${state.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-amber-200 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {state.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{state.region} • {state.climateZone}</p>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Active
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {state.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">
                      <MapPin size={14} className="inline mr-1" />
                      {state.installerCount}+ Certified Installers
                    </span>
                    <span className="text-amber-700 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMING SOON STATES ═══ */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Clock size={16} /> Expanding Soon
            </div>
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900">
              Coming <span className="font-bold">Next</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Based on demand from contractors and homeowners, these states are next in our expansion plan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {comingSoonStates.map((state, i) => (
              <motion.div
                key={state.abbreviation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/states/${state.slug}`}
                  className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-amber-200 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                      {state.name}
                    </h3>
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                    {state.description}
                  </p>
                  {state.launchDate && (
                    <p className="text-amber-600 text-sm font-medium">
                      Est. Launch: {new Date(state.launchDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ NOT YOUR STATE? ═══ */}
      <section className="py-20 md:py-28 bg-gray-900">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
              Don&apos;t See Your State?
            </h2>
            <p className="text-white/70 mb-8">
              We&apos;re expanding based on demand. Every waiting list signup helps us prioritize 
              which states we enter next. Join now and help bring Compoxen to your area.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded-lg transition-all hover:scale-105"
            >
              Request a Quote — We&apos;ll Check Your Area <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
