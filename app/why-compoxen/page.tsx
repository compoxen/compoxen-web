'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Check, X, ArrowRight, Shield, Droplets, Sun, Wind, Volume2, Paintbrush } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}
const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function WhyCompoxen() {
  return (
    <main className="bg-enterprise-50 min-h-screen">

      {/* ── HERO ── */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,119,6,0.08)_0%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
            <span className="badge-dark text-xs">Material Science</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-white font-semibold tracking-tight leading-[1.08]"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            The fence that <span className="text-gradient-light">completes</span> your architecture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-5 text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Composite engineered for permanence, silence, and modern outdoor living.
            Built to disappear into the landscape while elevating everything around it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <Link
              href="/#architect-colors"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/70 font-medium text-sm rounded-xl hover:bg-white/6 transition-all"
            >
              Explore Colors
            </Link>
          </motion.div>
        </div>

        {/* bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-enterprise-50 to-transparent" />
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 md:py-28 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="badge-amber text-xs">The Problem</motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight"
            >
              Born from every fence that failed
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-enterprise-950/50 leading-relaxed"
            >
              Wood rots. Vinyl warps. Metal rusts. Traditional fencing forces homeowners into
              a cycle of repairs, repainting, and replacement. Compoxen was engineered to end
              that cycle permanently — a material that looks refined, feels substantial, and
              stands quietly in the background while your architecture takes center stage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── MATERIAL SCIENCE ── */}
      <section className="py-20 md:py-28 bg-white border-y border-enterprise-950/4">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} className="badge-amber text-xs">Engineering</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Engineered for 25+ years of quiet performance
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-enterprise-950/50 max-w-2xl mx-auto">
              Dense composite core wrapped in a UV‑stable matte shell. Every detail is designed
              for longevity, stability, and architectural clarity.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              { icon: Paintbrush, title: 'Deep matte finish', desc: 'Hides dust and fingerprints with an organic, matte surface.' },
              { icon: Shield, title: 'Zero maintenance', desc: 'No sealing, staining, or painting — ever.' },
              { icon: Droplets, title: 'Moisture resistant', desc: 'Won\'t warp, crack, or splinter in any climate.' },
              { icon: Sun, title: 'UV stable', desc: 'Fade‑resistant shell tested in high-altitude sun exposure.' },
              { icon: Volume2, title: 'Acoustically quiet', desc: 'Solid-core dampens wind and impact noise.' },
              { icon: Wind, title: 'Wind rated', desc: 'Engineered to withstand sustained high winds without flex.' },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="card-enterprise p-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-amber-600" />
                </div>
                <h3 className="font-semibold text-enterprise-950 mb-1">{item.title}</h3>
                <p className="text-sm text-enterprise-950/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── HEAD-TO-HEAD COMPARISON ── */}
      <section className="py-20 md:py-28 bg-enterprise-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <motion.span variants={fadeUp} className="badge-amber text-xs">Comparison</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              How Compoxen stacks up
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-enterprise overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-enterprise-950/6">
                    <th className="text-left py-4 px-5 text-enterprise-950/40 font-medium">Feature</th>
                    <th className="py-4 px-4 text-center font-semibold text-amber-700 bg-amber-50/60">Compoxen</th>
                    <th className="py-4 px-4 text-center text-enterprise-950/50 font-medium">Wood</th>
                    <th className="py-4 px-4 text-center text-enterprise-950/50 font-medium">Vinyl</th>
                    <th className="py-4 px-4 text-center text-enterprise-950/50 font-medium">Metal</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['20‑Year Warranty',       true,  false, false, false],
                    ['Zero Maintenance',        true,  false, true,  false],
                    ['Won\'t Rot or Warp',      true,  false, true,  true],
                    ['Fade Resistant',           true,  false, false, true],
                    ['Natural Texture',          true,  true,  false, false],
                    ['Sound Dampening',          true,  false, false, false],
                    ['Eco‑Friendly Materials',   true,  false, false, false],
                    ['Architect‑Ready Colors',   true,  false, false, false],
                  ].map(([feature, ...vals], i) => (
                    <tr key={i} className="border-b border-enterprise-950/4 last:border-0">
                      <td className="py-3.5 px-5 text-enterprise-950/70">{feature as string}</td>
                      {(vals as boolean[]).map((v, j) => (
                        <td key={j} className={`py-3.5 px-4 text-center ${j === 0 ? 'bg-amber-50/40' : ''}`}>
                          {v
                            ? <Check size={16} className="mx-auto text-green-600" />
                            : <X size={16} className="mx-auto text-enterprise-950/15" />
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COLOR PALETTE ── */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#050505' }}>
        <div className="dot-grid-dark absolute inset-0 opacity-30" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="badge-dark text-xs">Palette</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Five architect‑led colors
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-white/35 max-w-xl leading-relaxed">
              Inspired by coastlines, mountains, desert mesas, and modern urban materials.
              Each tone sits quietly next to stone, stucco, steel, and glass.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid sm:grid-cols-2 gap-4"
          >
            {[
              { name: 'Harbor Slate', desc: 'Modern grey with coastal clarity' },
              { name: 'Mesa Taupe', desc: 'Warm, grounded, stone‑friendly tone' },
              { name: 'Shadow Forge', desc: 'Grey‑black with industrial depth' },
              { name: 'Redwood Ember', desc: 'Rich red‑brown with natural warmth' },
              { name: 'Cocoa Ridge', desc: 'Deep chocolate tone' },
            ].map((color) => (
              <motion.div key={color.name} variants={fadeUp} className="card-enterprise-dark p-5">
                <h3 className="text-white font-medium mb-0.5">{color.name}</h3>
                <p className="text-white/30 text-sm">{color.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link
              href="/#architect-colors"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
            >
              Explore Colors <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── DESIGNED IN USA ── */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} className="badge-amber text-xs">Origin</motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight">
              Designed in America. Perfected in the mountains.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 text-lg text-enterprise-950/50 leading-relaxed max-w-2xl">
              Every product is designed at our innovation center in Salt Lake City, Utah —
              then tested against the Mountain West&apos;s most extreme conditions. Scorching summers,
              sub-zero winters, high-altitude UV, relentless wind. If it performs here, it performs anywhere.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { state: 'Salt Lake County', status: 'Active' },
              { state: 'Utah County',      status: 'Active' },
              { state: 'Davis & Weber',    status: 'Active' },
              { state: 'Wasatch & Summit', status: 'Active' },
            ].map((item) => (
              <motion.div key={item.state} variants={fadeUp} className="card-enterprise p-4 text-center">
                <div className="font-semibold text-enterprise-950">{item.state}</div>
                <div className="text-amber-600 text-xs mt-0.5">{item.status}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <Link href="/service-areas" className="text-amber-700 font-medium text-sm hover:underline">
              View all Utah service areas →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 md:py-28 bg-enterprise-50 border-t border-enterprise-950/4">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-enterprise-950 tracking-tight"
            >
              A fence you don&apos;t have to think about
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-3 text-enterprise-950/40 text-lg">
              The ultimate luxury is the absence of worry.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href="/get-quote"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-enterprise-950 text-white font-semibold text-sm rounded-xl hover:bg-enterprise-950/90 transition-all"
              >
                Get a Quote <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
