'use client'

import { motion } from 'framer-motion'
import Section from '@/components/layouts/Section'

export default function WhyCompoxen() {
  return (
    <main className="bg-gray-50">
      
      {/* HERO */}
      <div className="pt-32 pb-20 container mx-auto px-6 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-display-md md:text-display-lg font-extralight text-center mb-8 text-neutral-900 tracking-tight"
        >
          The Fence That <span className="font-semibold">Completes</span> Your Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto mb-20 leading-relaxed font-light"
        >
          Composite engineered for permanence, silence, and modern outdoor living.  
          Built to disappear into the landscape while elevating everything around it.
        </motion.p>
      </div>

      {/* STORY */}
      <Section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-neutral-900">
            Born From Every Fence That Failed
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
            Wood rots. Vinyl warps. Metal rusts. Traditional fencing forces homeowners into a cycle of
            repairs, repainting, and replacement. Compoxen was engineered to end that cycle permanently.
            A material that looks refined, feels substantial, and stands quietly in the background while
            your architecture, landscape, and lifestyle take center stage.
          </p>
        </div>
      </Section>

      {/* MATERIAL SCIENCE */}
      <Section background="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-neutral-900">
            Engineered for 25+ Years of Quiet Performance
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-8">
            Compoxen is built from a dense composite core wrapped in a UV‑stable matte shell.  
            Every detail is designed for longevity, stability, and architectural clarity.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-lg text-neutral-700">
            {['Deep matte finish that hides dust', 'Subtle woodgrain, organic feel', 'Zero maintenance — no sealing', 'No warping, cracking, splintering', 'Fade‑resistant for harsh sun', 'Acoustically quiet, solid core'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-amber flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* COLOR PALETTE */}
      <Section className="bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">
            Five Modern, Architect‑Led Colors
          </h2>
          <p className="text-xl text-white/80 mb-10 leading-relaxed">
            Inspired by coastlines, mountains, desert mesas, and modern urban materials.  
            Each tone is crafted to sit quietly next to stone, stucco, steel, and glass.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Harbor Slate', desc: 'Modern grey with coastal clarity' },
              { name: 'Mesa Taupe', desc: 'Warm, grounded, stone‑friendly tone' },
              { name: 'Shadow Forge', desc: 'Grey‑black with industrial depth' },
              { name: 'Redwood Ember', desc: 'Rich red‑brown with natural warmth' },
              { name: 'Cocoa Ridge', desc: 'Deep chocolate tone' }
            ].map((color) => (
              <div key={color.name} className="border-l-2 border-brand-amber/50 pl-6 py-1">
                <h3 className="text-2xl font-medium mb-1">{color.name}</h3>
                <p className="text-white/60">{color.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 text-neutral-900">
            A Fence You Don’t Have to Think About
          </h2>
          <p className="text-xl text-neutral-600 mb-12">
            The ultimate luxury is the absence of worry.
          </p>
        </div>
      </Section>
    </main>
  )
}
