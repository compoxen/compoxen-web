'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { MapPin, Shield, CheckCircle, Clock, ArrowRight, Users, Star, Thermometer } from 'lucide-react'
import Link from 'next/link'
import { getStateBySlug, BRAND, PRODUCT_COLORS, PRODUCT_SPECS } from '@/lib/constants'
import AvailabilityChecker from '@/components/AvailabilityChecker'
import WaitingListForm from '@/components/WaitingListForm'

export default function StatePage() {
  const params = useParams()
  const slug = params['state-name'] as string
  const state = getStateBySlug(slug)

  if (!state) return null

  const isActive = state.status === 'active'
  const isComingSoon = state.status === 'coming-soon'

  return (
    <div className="w-full overflow-x-hidden">
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0c0c10 0%, #141418 50%, #1a1410 100%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(217,119,6,0.15)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
          <div className="max-w-4xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide ${
                isActive 
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {isActive ? <CheckCircle size={16} /> : <Clock size={16} />}
                {isActive ? 'Currently Serving' : 'Coming Soon'}
              </span>
              <span className="text-white/50 text-sm">|</span>
              <span className="text-amber-400/80 text-sm font-medium tracking-wide">
                {BRAND.designOrigin}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 tracking-tight"
            >
              Premium Composite Fencing
              <br />
              <span className="bg-linear-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                in {state.name}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10"
            >
              {state.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {isActive ? (
                <>
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 cta-glow"
                  >
                    Get a Quote <ArrowRight size={20} />
                  </Link>
                  <Link
                    href="/dealer-kit"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold text-lg px-8 py-4 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all"
                  >
                    Become an Installer
                  </Link>
                </>
              ) : (
                <a
                  href="#waiting-list"
                  className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all hover:scale-105 cta-glow"
                >
                  Join the Waiting List <ArrowRight size={20} />
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATE STATS (Active only) ═══ */}
      {isActive && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, value: `${state.installerCount}+`, label: 'Certified Installers' },
                { icon: Shield, value: PRODUCT_SPECS.warranty, label: 'Warranty' },
                { icon: Star, value: '99%', label: 'Satisfaction Rate' },
                { icon: Thermometer, value: state.climateZone, label: 'Climate Tested' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <stat.icon size={24} className="text-amber-600 mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ CLIMATE BENEFITS ═══ */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #f8f8f6 0%, #f2f2f0 100%)' }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              Engineered for <span className="font-bold">{state.name}&apos;s Climate</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {state.climateZone} conditions demand materials that perform. Compoxen is tested and proven
              in {state.region}&apos;s most demanding environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {state.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm card-premium"
              >
                <div className="shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <CheckCircle size={20} className="text-amber-700" />
                </div>
                <p className="text-gray-700 text-base leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COLOR SHOWCASE ═══ */}
      <section className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f8f6 100%)' }}>
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-3xl sm:text-4xl font-semibold text-gray-900 mb-5 tracking-tight"
          >
            Available Colors in {state.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-600 max-w-2xl mx-auto mb-14"
          >
            Five architect-led colors designed to complement {state.name}&apos;s landscapes and modern architecture.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {PRODUCT_COLORS.map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="text-center group"
              >
                <div className="w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow mb-3">
                  <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-gray-900 font-semibold text-sm">{color.name}</div>
                <div className="text-gray-500 text-xs">{color.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHECK AVAILABILITY / WAITING LIST ═══ */}
      <section id="waiting-list" className="py-20 md:py-28" style={{ background: 'linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)' }}>
        <div className="container mx-auto px-6 max-w-2xl text-center">
          {isActive ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white text-3xl sm:text-4xl font-bold mb-4"
              >
                Check Availability in {state.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/70 mb-10"
              >
                Enter your zip code to find certified Compoxen installers near you.
              </motion.p>
              <AvailabilityChecker />
            </>
          ) : (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-white text-3xl sm:text-4xl font-bold mb-4"
              >
                Coming to {state.name}
                {state.launchDate && (
                  <span className="block text-amber-400 text-xl mt-2">
                    Estimated Launch: {new Date(state.launchDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </span>
                )}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/70 mb-10"
              >
                Join the waiting list to be first in line when Compoxen launches in {state.name}.
                We&apos;ll notify you with exclusive early-access pricing and installer partner opportunities.
              </motion.p>
              <WaitingListForm stateName={state.name} stateAbbrev={state.abbreviation} />
            </>
          )}
        </div>
      </section>

      {/* ═══ DESIGNED IN USA BANNER ═══ */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0c0c10 0%, #141418 100%)' }}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-amber-400 text-sm font-bold tracking-widest uppercase mb-3">
              {BRAND.designOrigin}
            </p>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-4 tracking-tight">
              Perfected in the Mountains. Coming to Your State.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-8">
              Every Compoxen product is designed at our innovation center in {BRAND.designCenter}, 
              tested against the Mountain West&apos;s extreme conditions, and built to perform anywhere in America.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/states/utah"
                className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm hover:bg-white/20 transition"
              >
                <MapPin size={14} className="inline mr-1" /> Utah
              </Link>
              <Link
                href="/states/colorado"
                className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm hover:bg-white/20 transition"
              >
                <MapPin size={14} className="inline mr-1" /> Colorado
              </Link>
              <Link
                href="/states/idaho"
                className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm hover:bg-white/20 transition"
              >
                <MapPin size={14} className="inline mr-1" /> Idaho
              </Link>
              <Link
                href="/states/california"
                className="px-4 py-2 bg-white/10 text-white/90 rounded-lg text-sm hover:bg-white/20 transition"
              >
                <MapPin size={14} className="inline mr-1" /> California
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
