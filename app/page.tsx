'use client'

import { motion, useMotionValue, useTransform, useInView } from 'framer-motion'
import { ArrowRight, Download, Percent, BarChart3, Package, Lightbulb, Calculator, MapPin, Shield, Zap, Clock, Check, X as XIcon, ChevronRight, Star, Layers, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AvailabilityChecker from '@/components/AvailabilityChecker'
import { useRef, useEffect, useState } from 'react'

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (!startOnView || !isInView) return
    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [end, duration, isInView, startOnView])
  
  return { count, ref }
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  })
}

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
}

export default function Home() {
  // Counters for social proof
  const citiesServed = useCounter(75, 2000)
  const linearFeet = useCounter(2, 1800)
  const satisfaction = useCounter(99, 2200)
  const installDays = useCounter(3, 1600)

  return (
    <div className="w-full overflow-x-hidden">

      {/* ========================= */}
      {/*         HERO SECTION      */}
      {/* ========================= */}
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
        
        {/* Background Image */}
        <motion.img
          src="/images/hero-fence-bg.jpg"
          alt="Premium composite fence installation"
          className="absolute inset-0 w-[110%] h-[110%] object-cover object-center"
          animate={{ scale: [1, 1.04] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />

        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,0,0,0.4)_0%,transparent_70%)]" />

        {/* Dot grid subtle pattern */}
        <div className="absolute inset-0 dot-grid-dark opacity-30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-36 pb-24 text-center max-w-5xl">

          {/* Enterprise Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 badge-dark mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-[13px] font-medium">Trade-only · Utah · Idaho · Oregon · Colorado</span>
          </motion.div>

          {/* Main Headline — enterprise scale */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-bold leading-[1.05] text-[clamp(2.5rem,6vw,5rem)] mb-8 tracking-tight max-w-4xl mx-auto"
          >
            Carry the line that{' '}
            <span className="text-gradient-light">sells itself.</span>
          </motion.h1>

          {/* Subtext — clean and concise */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-white/70 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
          >
            A composite fence system built for fence dealers, lumberyards, and pro contractors across the Mountain West.
            Pallet-ready in days. 20-year warranty. Zero callbacks for fade.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/get-quote"
              className="group inline-flex items-center gap-2.5 bg-brand-amber text-black font-semibold text-base px-8 py-4 rounded-xl cta-glow hover:bg-amber-500 transition-all"
            >
              Open a Trade Account
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/specifications"
              className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium text-base px-8 py-4 rounded-xl hover:bg-white/15 hover:border-white/30 transition-all"
            >
              Download the Line Card
              <ChevronRight size={18} className="text-white/50" />
            </Link>
          </motion.div>

          {/* Hero social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2"><Shield size={14} className="text-amber-500/60" /> 20-Year Warranty</span>
            <span className="flex items-center gap-2"><Zap size={14} className="text-amber-500/60" /> Pallet-Ready in 5 Days</span>
            <span className="flex items-center gap-2"><Star size={14} className="text-amber-500/60" /> Net-30 on Approval</span>
            <span className="flex items-center gap-2"><Layers size={14} className="text-amber-500/60" /> Protected Territories</span>
          </motion.div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-enterprise-50 to-transparent" />
      </section>


      {/* ========================= */}
      {/*     SOCIAL PROOF BAR      */}
      {/* ========================= */}
      <section className="py-16 md:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12">
            {[
              { ref: citiesServed.ref, value: `${citiesServed.count}+`, label: 'Cities With Active Dealers' },
              { ref: linearFeet.ref, value: `${linearFeet.count}M+`, label: 'Linear Feet in the Field' },
              { ref: installDays.ref, value: `${installDays.count + 1}`, label: 'States Served (UT · ID · OR · CO)' },
              { ref: satisfaction.ref, value: `${satisfaction.count}%`, label: 'Dealer Reorder Rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                ref={stat.ref}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-1.5 tabular-nums tracking-tight">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/*     WHY COMPOSITE         */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-white dot-grid">
        <div className="container mx-auto px-6 max-w-6xl">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="badge badge-amber mb-5">
              <Zap size={14} /> Why Composite
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5"
            >
              A line your yard can stand behind.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Engineered to outperform wood, vinyl, and metal — and to keep your phone quiet after the install.
              Fewer warranty calls, higher ticket, repeatable margin.
            </motion.p>
          </motion.div>

          {/* Bento-style feature grid */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {[
              {
                title: 'Advanced Composites',
                desc: 'Mineral-reinforced polymers with UV-stable pigments. Never warps, rots, or needs staining.',
                icon: <Layers size={22} />,
                accent: 'from-amber-500/10 to-amber-600/5'
              },
              {
                title: 'Modern Architecture',
                desc: 'Clean lines. Deep matte finishes. Hidden fasteners. Elevates the spaces it protects.',
                icon: <Package size={22} />,
                accent: 'from-blue-500/10 to-blue-600/5'
              },
              {
                title: 'Proven Performance',
                desc: 'Independent testing shows superior impact resistance, fade protection, and 25+ year stability.',
                icon: <Shield size={22} />,
                accent: 'from-green-500/10 to-green-600/5'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="card-enterprise p-7 sm:p-8"
              >
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${item.accent} flex items-center justify-center mb-5 text-gray-700`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*   COMPARISON TABLE        */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-14"
          >
            <motion.div variants={fadeUp} className="badge badge-amber mb-5">
              <BarChart3 size={14} /> Material Comparison
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5">
              The talk track your reps already wanted.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              A side-by-side your counter team can hand to any contractor or homeowner walking in the door.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Feature</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-50/50">Compoxen</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Wood</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400">Vinyl</th>
                    <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-400 hidden sm:table-cell">Metal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { feature: 'Warranty', compoxen: '20 Years', wood: '1–5 Years', vinyl: '5–10 Years', metal: '10–15 Years' },
                    { feature: 'Maintenance', compoxen: 'None', wood: 'Annual', vinyl: 'Occasional', metal: 'Moderate' },
                    { feature: 'UV Resistance', compoxen: true, wood: false, vinyl: false, metal: true },
                    { feature: 'Rot & Insect Proof', compoxen: true, wood: false, vinyl: true, metal: true },
                    { feature: 'Architect Colors', compoxen: '5 Premium', wood: '2–3 Stains', vinyl: '3–4 Basic', metal: 'Limited' },
                    { feature: 'Fade Resistance', compoxen: true, wood: false, vinyl: false, metal: false },
                    { feature: 'Sound Dampening', compoxen: true, wood: false, vinyl: false, metal: false },
                    { feature: 'Eco-Friendly', compoxen: true, wood: false, vinyl: false, metal: true },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 text-sm font-medium text-gray-700">{row.feature}</td>
                      <td className="py-4 px-6 text-sm font-semibold text-amber-800 bg-amber-50/30">
                        {typeof row.compoxen === 'boolean'
                          ? <Check size={18} className="text-green-600" />
                          : row.compoxen
                        }
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {typeof row.wood === 'boolean'
                          ? (row.wood ? <Check size={18} className="text-green-600" /> : <XIcon size={18} className="text-gray-300" />)
                          : row.wood
                        }
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500">
                        {typeof row.vinyl === 'boolean'
                          ? (row.vinyl ? <Check size={18} className="text-green-600" /> : <XIcon size={18} className="text-gray-300" />)
                          : row.vinyl
                        }
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-500 hidden sm:table-cell">
                        {typeof row.metal === 'boolean'
                          ? (row.metal ? <Check size={18} className="text-green-600" /> : <XIcon size={18} className="text-gray-300" />)
                          : row.metal
                        }
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*     FIVE ARC COLORS       */}
      {/* ========================= */}
      <section id="architect-colors" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="badge badge-amber mb-5">
              <Lightbulb size={14} /> Color System
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5">
              Five Architect-Led Colors
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              A palette shaped by landscape and modern architecture — subtle woodgrain, deep matte surfaces, 
              and tones that complement glass, steel, stone, and sky.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6"
          >
            {[
              { name: 'Harbor Slate', file: '/images/colors-harbor-slate.png', note: 'Modern grey · Coastal clarity' },
              { name: 'Mesa Taupe', file: '/images/colors-mesa-taupe.png', note: 'Warm tone · Stone-friendly' },
              { name: 'Shadow Forge', file: '/images/colors-shadow-forge.png', note: 'Charcoal-black · Industrial' },
              { name: 'Redwood Ember', file: '/images/colors-redwood-ember.png', note: 'Rich red-brown · Warm' },
              { name: 'Cocoa Ridge', file: '/images/colors-cocoa-ridge.png', note: 'Deep chocolate · Bold' }
            ].map((color, i) => (
              <motion.div
                key={color.name}
                variants={fadeUp}
                custom={i}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-3/4 rounded-2xl overflow-hidden mb-4 card-enterprise border-0 shadow-sm hover:shadow-lg transition-all duration-500 relative">
                  <Image
                    src={color.file}
                    alt={color.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="text-gray-900 font-semibold text-sm mb-0.5">{color.name}</div>
                <div className="text-gray-400 text-xs">{color.note}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*   HOW IT WORKS            */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-gray-50 dot-grid">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="badge badge-amber mb-5">
              <Clock size={14} /> Process
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5">
              From application to first pallet.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              A clean, four-step path to carrying Compoxen. Most accounts ship within two weeks.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { step: '01', title: 'Apply', desc: 'Tell us about your business, region, and current fence mix. Resale cert and EIN.' },
              { step: '02', title: 'Qualify', desc: 'We review territory fit and credit. You get tier pricing, MAP policy, and the line card.' },
              { step: '03', title: 'Onboard', desc: 'Sample boards ship. Counter staff and installers get certified on the system.' },
              { step: '04', title: 'Stock & Sell', desc: 'First pallet or truckload lands. Co-op marketing and dealer locator go live.' },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                custom={i}
                className="relative"
              >
                <div className="card-enterprise p-6 sm:p-7 h-full">
                  <div className="text-amber-600/20 text-5xl font-bold mb-4 leading-none">{item.step}</div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*   INSTALLATIONS GALLERY   */}
      {/* ========================= */}
      <section id="installations" className="py-24 md:py-32" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="badge badge-dark mb-5">
              <Star size={14} /> Gallery
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-white text-3xl sm:text-4xl md:text-[2.75rem] font-bold mb-5">
              On the ground, across the Mountain West.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-lg max-w-2xl mx-auto">
              Real installs from Compoxen dealer crews — proof for the next contractor walking your counter.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {[
              { img: '/images/gallery-1.jpg', title: 'Modern Minimalist', tag: 'Residential' },
              { img: '/images/gallery-2.jpg', title: 'Luxury Estate', tag: 'Estate' },
              { img: '/images/gallery-3.jpg', title: 'Commercial Excellence', tag: 'Commercial' },
              { img: '/images/gallery-4.jpg', title: 'Poolside Paradise', tag: 'Outdoor Living' },
              { img: '/images/gallery-5.jpg', title: 'Hillside Haven', tag: 'Landscape' },
              { img: '/images/gallery-6.jpg', title: 'Backyard Oasis', tag: 'Residential' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="cursor-pointer group relative overflow-hidden rounded-2xl"
              >
                <div className="relative w-full h-64 sm:h-72">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">{item.tag}</span>
                  <p className="text-white font-semibold text-base mt-1">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*       RESOURCE HUB        */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} className="badge badge-amber mb-5">
              <Download size={14} /> Resources
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5">
              The dealer toolkit.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto">
              Spec sheets, line cards, sample boards, and counter-sales material — everything your team needs to move the line.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Download size={20} />,
                title: '2026 Dealer Line Card',
                desc: 'Profiles, pack quantities, freight class, MAP policy, and tier pricing windows. Built for buyers and counter staff.',
                cta: 'Request the Line Card',
                href: '/get-quote',
                tag: '2026 Edition · PDF'
              },
              {
                icon: <Percent size={20} />,
                title: 'Spec & Test Data',
                desc: 'ASTM results, UV-stable shell data, freeze-thaw, wind, and 25+ year performance — for spec writers and warranty teams.',
                cta: 'Open the Spec Library',
                href: '/specifications',
                tag: 'ASTM · Class A · 130 mph'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={i}
                className="card-enterprise p-7 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-400 font-medium">{item.tag}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 grow">
                  {item.desc}
                </p>

                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-amber-700 font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  {item.cta} <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*   CHECK AVAILABILITY      */}
      {/* ========================= */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #111 50%, #0a0a0a 100%)' }}>
        <div className="absolute inset-0 dot-grid-dark opacity-50" />
        {/* Subtle amber radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-amber-500/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 max-w-2xl text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="badge badge-dark mb-6 mx-auto">
              <MapPin size={14} /> Service Areas
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-white text-3xl sm:text-4xl md:text-[2.75rem] font-bold mb-5">
              Is your territory open?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-base sm:text-lg max-w-lg mx-auto mb-10">
              Drop a zip in Utah, Idaho, or Colorado. We&apos;ll tell you if a dealer slot is available — or who already carries the line nearby.
            </motion.p>
            <motion.div variants={fadeUp}>
              <AvailabilityChecker />
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm mt-8 transition-colors"
              >
                <MapPin size={14} /> View all service areas →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*     DESIGNED IN USA       */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-white dot-grid">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            >
              <motion.div variants={fadeUp} className="badge badge-amber mb-6">
                🇺🇸 Our Story
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Built where it has to perform.
                <br />
                Sold where it has to ship.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-500 leading-relaxed mb-8">
                Engineered in Draper, Utah and tested against Mountain West extremes — desert heat, alpine cold,
                high-altitude UV, and snow load. We stock and ship from the Wasatch Front to dealers across
                Utah, Idaho, Oregon, and Colorado, so the line lands when your jobs are booked.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {['Draper, UT HQ', 'Mountain West Tested', 'Trade-Only Distribution'].map((item) => (
                  <span key={item} className="badge badge-amber text-xs">
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '4', label: 'States Stocked (UT · ID · OR · CO)', icon: <MapPin size={16} /> },
                { value: '162+', label: 'Certified Installers', icon: <Star size={16} /> },
                { value: '20yr', label: 'Limited Warranty', icon: <Shield size={16} /> },
                { value: 'Net-30', label: 'On Approved Credit', icon: <Zap size={16} /> },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  variants={fadeUp} 
                  custom={i}
                  className="card-enterprise p-6 text-center group"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-amber-50 text-amber-600 mb-3 group-hover:bg-amber-100 transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/*     EXPLORE / CTA         */}
      {/* ========================= */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-gray-900 mb-5">
              Three ways to start carrying the line.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-lg max-w-2xl mx-auto mb-14">
              Whether you&apos;re a fence contractor, a lumberyard, or a multi-location dealer — pick the path that fits and we&apos;ll move fast.
            </motion.p>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {[
              { icon: Package, label: 'Request a Sample Board', desc: 'See the colors and shell on your counter', href: '/get-quote' },
              { icon: Lightbulb, label: 'Download the Line Card', desc: 'Profiles, pack qtys, freight class, MAP', href: '/specifications' },
              { icon: Calculator, label: 'Open a Trade Account', desc: 'Apply for tier pricing and Net-30', href: '/get-quote' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
              >
                <Link href={item.href} className="card-enterprise p-7 flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <item.icon size={22} className="text-amber-700" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5 group-hover:text-amber-700 transition-colors">{item.label}</h3>
                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                  <span className="text-amber-700 font-medium text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}

