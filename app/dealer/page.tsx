'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useTransform, animate, useMotionValueEvent } from 'framer-motion'
import Section from '@/components/layouts/Section'

export default function DealerIntroPage() {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.floor(latest).toLocaleString())
  const [roundedValue, setRoundedValue] = useState('0')

  useMotionValueEvent(rounded, 'change', latest => setRoundedValue(latest))

  useEffect(() => {
    const controls = animate(count, 4200, { duration: 2.4, ease: 'easeOut' })
    return controls.stop
  }, [])

  return (
    <main className="min-h-screen bg-brand-dark relative text-white pt-32">
      
      {/* Background Pulse */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.04),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.03),transparent_60%)] z-0" />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        
        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-tight mb-8">
            The Dealer Dashboard That <span className="font-semibold text-white">Drives Growth</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
            Real‑time insights, automated tools, and a modern interface built to help you close more projects,
            unlock better pricing, and scale your business.
          </p>

          {/* Metric */}
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [1, 0.9, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
          >
            <div className="text-6xl md:text-8xl font-bold bg-linear-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 tabular-nums">
              {roundedValue}
            </div>
            <div className="text-slate-400 uppercase tracking-widest text-sm font-medium">
              Linear Feet Sold This Month
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 pb-32">
          {[
            { title: 'Project Tracker', desc: 'Monitor every quote and installation in real time.' },
            { title: 'Smart Pricing', desc: 'Dynamic tiers unlock as you sell more product.' },
            { title: 'Marketing Hub', desc: 'Access high-res assets and branded collateral.' }
          ].map((item, i) => (
             <div key={i} className="bg-surface-glass border border-surface-glassBorder p-8 rounded-xl hover:bg-white/10 transition-colors">
               <h3 className="text-2xl font-medium mb-4 text-brand-amber">{item.title}</h3>
               <p className="text-slate-300 leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>

        {/* Become a Dealer CTA */}
        <div className="text-center pb-16">
          <Link
            href="/dealer-kit"
            className="inline-flex items-center gap-2 px-10 py-5 bg-brand-amber text-black font-bold text-lg rounded-lg transition-all duration-200 hover:bg-amber-500 hover:shadow-xl hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Become a Dealer
          </Link>
          <p className="text-slate-400 mt-4 text-sm">
            Join our network of certified contractors and distributors.
          </p>
        </div>

      </div>
    </main>
  )
}

