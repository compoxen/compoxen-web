'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Section from '@/components/layouts/Section'

// Note: Metadata must be in a separate layout.tsx or page.tsx without 'use client'
// For client components, use Head from next/head or create a parallel server component

export default function WhyCompoxen() {
  return (
    <main className="bg-gray-50 min-h-screen">
      
      {/* HERO */}
      <section className="pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              🇺🇸 Designed in USA • Salt Lake City, UT
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extralight text-center mb-6 text-neutral-900 tracking-tight leading-tight"
          >
            The Fence That <span className="font-semibold">Completes</span> Your Architecture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center text-lg sm:text-xl md:text-2xl text-neutral-500 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Composite engineered for permanence, silence, and modern outdoor living.  
            Built to disappear into the landscape while elevating everything around it.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <Section className="border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-5 text-neutral-900">
            Born From Every Fence That Failed
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
            Wood rots. Vinyl warps. Metal rusts. Traditional fencing forces homeowners into a cycle of
            repairs, repainting, and replacement. Compoxen was engineered to end that cycle permanently.
            A material that looks refined, feels substantial, and stands quietly in the background while
            your architecture, landscape, and lifestyle take center stage.
          </p>
        </div>
      </Section>

      {/* MATERIAL SCIENCE */}
      <Section background="bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-neutral-900">
            Engineered for 25+ Years of Quiet Performance
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Compoxen is built from a dense composite core wrapped in a UV‑stable matte shell.  
            Every detail is designed for longevity, stability, and architectural clarity.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-base text-neutral-700">
            {['Deep matte finish that hides dust', 'Subtle woodgrain, organic feel', 'Zero maintenance — no sealing', 'No warping, cracking, splintering', 'Fade‑resistant for harsh sun', 'Acoustically quiet, solid core'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COLOR PALETTE */}
      <Section background="bg-neutral-900" className="text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6 text-white">
            Five Modern, Architect‑Led Colors
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Inspired by coastlines, mountains, desert mesas, and modern urban materials.  
            Each tone is crafted to sit quietly next to stone, stucco, steel, and glass.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Harbor Slate', desc: 'Modern grey with coastal clarity' },
              { name: 'Mesa Taupe', desc: 'Warm, grounded, stone‑friendly tone' },
              { name: 'Shadow Forge', desc: 'Grey‑black with industrial depth' },
              { name: 'Redwood Ember', desc: 'Rich red‑brown with natural warmth' },
              { name: 'Cocoa Ridge', desc: 'Deep chocolate tone' }
            ].map((color) => (
              <div key={color.name} className="border-l-2 border-brand-amber/50 pl-5 py-2">
                <h3 className="text-xl font-medium mb-1">{color.name}</h3>
                <p className="text-white/50 text-sm">{color.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link
              href="/#architect-colors"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-amber text-black font-semibold text-base rounded-lg transition-all duration-200 hover:bg-amber-500 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Explore Architect-Led Colors
            </Link>
          </div>
        </div>
      </Section>

      {/* DESIGNED IN USA */}
      <Section background="bg-gradient-to-br from-slate-50 to-amber-50/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-5 text-neutral-900">
            Designed in <span className="font-semibold">America</span>. Perfected in the <span className="font-semibold">Mountains</span>.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Every Compoxen product is designed at our innovation center in Salt Lake City, Utah — 
            then tested against the Mountain West&apos;s most extreme conditions. Scorching summers, 
            sub-zero winters, high-altitude UV, relentless wind. If it performs here, it performs anywhere.
          </p>
          <div className="grid sm:grid-cols-4 gap-4 text-center">
            {[
              { state: 'Utah', status: 'HQ & Testing' },
              { state: 'Colorado', status: 'Active' },
              { state: 'Idaho', status: 'Active' },
              { state: 'California', status: 'Active' },
            ].map((item) => (
              <div key={item.state} className="bg-white rounded-xl p-4 border border-gray-200">
                <div className="text-neutral-900 font-semibold">{item.state}</div>
                <div className="text-amber-700 text-sm">{item.status}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/states"
              className="text-amber-700 font-medium text-sm hover:underline"
            >
              View all service areas & expansion timeline →
            </Link>
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-5 text-neutral-900">
            A Fence You Don't Have to Think About
          </h2>
          <p className="text-lg text-neutral-500 mb-10">
            The ultimate luxury is the absence of worry.
          </p>
          <Link
            href="/get-quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-700 text-white font-semibold text-base rounded-lg transition-all duration-200 hover:bg-amber-600 hover:shadow-lg hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>
      </Section>
    </main>
  )
}
