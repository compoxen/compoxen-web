'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Percent, BarChart3, Package, Lightbulb, Calculator } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ========================= */}
      {/*         HERO SECTION      */}
      {/* ========================= */}
      <section className="relative min-h-[80vh] overflow-hidden flex items-center justify-center">
        
        {/* Background Image */}
        <motion.img
          src="/images/hero-fence-bg.jpg"
          alt="Premium fence"
          className="absolute inset-0 w-[110%] h-[110%] object-cover object-center"
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        {/* Radial Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,0,0,0.7)_0%,transparent_70%)]" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center max-w-4xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-bold leading-tight text-4xl sm:text-5xl md:text-6xl mb-8"
          >
            <span className="block mb-4">
              <span
                className="bg-linear-to-br from-amber-300 to-amber-600 bg-clip-text text-transparent"
              >
                Beyond Wood.
              </span>{' '}
              <span className="text-white/95">Beyond Weather.</span>
            </span>

            <span className="block">
              <span className="text-white/95">Beyond Time.</span>{' '}
              <span
                className="bg-linear-to-br from-amber-300 to-amber-600 bg-clip-text text-transparent"
              >
                Beyond Beautiful.
              </span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg sm:text-xl md:text-2xl font-light leading-relaxed mb-12"
          >
            20-year warranty. Zero maintenance.
            <br className="hidden sm:block" />
            The premium choice for homeowners who expect excellence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* Dealer Kit Button */}
            <motion.button
              onClick={() => (window.location.href = '/dealer-kit')}
              className="relative overflow-hidden bg-amber-600 text-white font-bold text-lg px-10 py-5 rounded-lg shadow-xl flex items-center justify-center gap-3 hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Your Dealer Kit</span>
              <ArrowRight size={20} className="relative z-10" />

              {/* Shimmer */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.button>

            {/* Gallery Scroll Button */}
            <motion.button
              onClick={() => {
                const el = document.getElementById('installations')
                if (el) {
                  const yOffset = -80
                  const y = el.getBoundingClientRect().top + window.scrollY + yOffset
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
              className="backdrop-blur-md border border-white/80 text-white font-semibold text-lg px-10 py-5 rounded-lg hover:bg-white/10 transition"
            >
              View Gallery
            </motion.button>
          </motion.div>
        </div>
      </section>


      {/* ========================= */}
      {/*     COMPOSITE FACTS       */}
      {/* ========================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-14"
          >
            Engineered for the Long Run
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                title: 'Built From Advanced Composites',
                desc: 'Mineral‑reinforced polymers with UV‑stable pigments. Never warps, never rots, never needs staining.'
              },
              {
                title: 'Designed for Modern Architecture',
                desc: 'Clean lines. Deep matte finishes. Hidden fasteners. Every detail elevates the spaces it protects.'
              },
              {
                title: 'Proven to Outlast Wood & Vinyl',
                desc: 'Independent testing shows superior impact resistance, fade protection, and long‑term stability.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/*     FIVE ARC COLORS       */}
      {/* ========================= */}
      <section id="architect-colors" className="py-20 md:py-28 bg-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-5"
          >
            Five Modern, Architect‑Led Colors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-14"
          >
            A palette shaped by landscape and architecture — subtle woodgrain, deep matte surfaces, and tones that hold their own against glass, steel, stone, and sky.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {[
              { name: 'Harbor Slate', file: '/images/colors-harbor-slate.png', note: 'Modern grey with coastal clarity.' },
              { name: 'Mesa Taupe', file: '/images/colors-mesa-taupe.png', note: 'Warm, grounded, stone‑friendly tone.' },
              { name: 'Shadow Forge', file: '/images/colors-shadow-forge.png', note: 'Charcoal‑black with industrial depth.' },
              { name: 'Redwood Ember', file: '/images/colors-redwood-ember.png', note: 'Rich red‑brown with natural warmth.' },
              { name: 'Cocoa Ridge', file: '/images/colors-cocoa-ridge.png', note: 'Deep chocolate tone with architectural presence.' }
            ].map((color, i) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="text-center group"
              >
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-4">
                  <img src={color.file} alt={color.name} className="w-full h-full object-cover" />
                </div>

                <div className="text-gray-900 font-semibold text-sm sm:text-base mb-1">{color.name}</div>
                <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">{color.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/*   INSTALLATIONS GALLERY   */}
      {/* ========================= */}
      <section id="installations" className="py-20 md:py-28 bg-gray-900">
        <div className="container mx-auto px-6 max-w-6xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-14"
          >
            Installations That Inspire
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { img: '/images/gallery-1.jpg', title: 'Modern Minimalist' },
              { img: '/images/gallery-2.jpg', title: 'Luxury Estate' },
              { img: '/images/gallery-3.jpg', title: 'Commercial Excellence' },
              { img: '/images/gallery-4.jpg', title: 'Poolside Paradise' },
              { img: '/images/gallery-5.jpg', title: 'Hillside Haven' },
              { img: '/images/gallery-6.jpg', title: 'Backyard Oasis' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="cursor-pointer group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-white mt-4 text-base sm:text-lg font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* ========================= */}
      {/*       RESOURCE HUB        */}
      {/* ========================= */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">

          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-14">
            Everything You Need to <span className="font-bold">Succeed</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Download size={36} className="text-amber-700" />,
                title: '2026 Contractor Guide',
                desc: 'Specs, pricing tiers, installation diagrams, and material breakdowns — engineered for contractors who demand clarity and speed.',
                cta: 'ORDER FREE GUIDE',
                href: '/get-dealer-kit',
                snippetTitle: 'Contractor Guide',
                snippetMeta: '2026 Edition • PDF + Print'
              },
              {
                icon: <Percent size={36} className="text-amber-700" />,
                title: 'Material Science',
                desc: 'Explore the engineering behind Compoxen — composite density, UV‑stable shell, acoustic dampening, and 25+ year performance.',
                cta: 'LEARN MORE',
                href: '/why-compoxen',
                snippetTitle: 'Material Performance',
                snippetMeta: 'Fade‑Resistant • Zero Maintenance'
              },
              {
                icon: <BarChart3 size={36} className="text-amber-700" />,
                title: 'Dealer Dashboard',
                desc: 'Track orders, manage samples, unlock pricing tiers, and accelerate your business with real‑time insights.',
                cta: 'VIEW DASHBOARD',
                href: '/dealer',
                snippetTitle: 'Dealer Dashboard',
                snippetMeta: 'Orders • Samples • Pricing Tiers'
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{
                  y: -6,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
                className="flex flex-col bg-white rounded-2xl border border-gray-200 p-8 text-center transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  {item.icon}
                </div>

                {/* Dark Preview Box */}
                <div className="bg-slate-900 rounded-xl p-4 border border-white/10 text-left text-slate-200 shadow-lg mb-6">
                  <div className="text-sm mb-1 opacity-90">{item.snippetTitle}</div>
                  <div className="text-amber-400 text-sm font-medium">{item.snippetMeta}</div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                  {item.desc}
                </p>

                <button
                  onClick={() => item.href && (window.location.href = item.href)}
                  className="mt-auto border-2 border-amber-700 text-amber-700 px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-amber-700 hover:text-white transition-colors duration-200"
                >
                  {item.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/*     TRUST INDICATORS      */}
      {/* ========================= */}
      <section className="py-16 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { number: '500+', label: 'Contractors Trust Us' },
              { number: '2M+', label: 'Linear Feet Installed' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: 'A+', label: 'BBB Rating' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm sm:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================= */}
      {/*     EXPLORE COMPOXEN      */}
      {/* ========================= */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6 text-center max-w-5xl">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5"
          >
            Explore Compoxen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto mb-14"
          >
            Whether you're designing a backyard, specifying materials for a build, or just exploring modern fencing — start here.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Package, label: 'Order Samples', desc: 'See and feel the finish', href: '/dealer-kit' },
              { icon: Lightbulb, label: 'Get Inspired', desc: 'Browse real installations', href: '/#installations' },
              { icon: Calculator, label: 'Request a Quote', desc: 'Get pricing for your project', href: '/get-quote' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <Link href={item.href} className="block">
                  <div className="w-20 h-20 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:shadow-xl group-hover:bg-amber-600 transition-all duration-300">
                    <item.icon size={34} className="text-white" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">{item.label}</h3>
                  <p className="text-gray-500 text-sm mb-3">{item.desc}</p>

                  <span className="text-amber-700 font-medium text-sm group-hover:underline">
                    Learn more →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* ========================= */}
      {/*          FOOTER           */}
      {/* ========================= */}
      <footer className="bg-neutral-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">

          {/* GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 sm:col-span-1"
            >
              <img
                src="/images/compoxen-logo.png"
                alt="Compoxen"
                className="h-10 mb-5 brightness-0 invert"
              />
              <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
                Composite fencing engineered for modern architecture.
                Built to last. Designed to impress.
              </p>
            </motion.div>

            {/* Navigate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold mb-4">Navigate</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
                <li><Link href="/#installations" className="hover:text-white transition-colors duration-200">Gallery</Link></li>
                <li><Link href="/#architect-colors" className="hover:text-white transition-colors duration-200">Colors & Textures</Link></li>
                <li><Link href="/why-compoxen" className="hover:text-white transition-colors duration-200">Why Composite</Link></li>
              </ul>
            </motion.div>

            {/* Dealers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold mb-4">Dealers</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/dealer-kit" className="hover:text-white transition-colors duration-200">Become a Dealer</Link></li>
                <li><Link href="/get-quote" className="hover:text-white transition-colors duration-200">Get Quote</Link></li>
              </ul>
            </motion.div>

            {/* Company / Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base font-semibold mb-4">Company</h4>
              <ul className="space-y-2.5 text-gray-400 text-sm">
                <li><Link href="/why-compoxen" className="hover:text-white transition-colors duration-200">Our Materials</Link></li>
                <li><Link href="/dealer-kit" className="hover:text-white transition-colors duration-200">Dealer Kit</Link></li>
                <li><Link href="/get-quote" className="hover:text-white transition-colors duration-200">Request Quote</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              </ul>

              <div className="mt-5">
                <h5 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Contact</h5>
                <p className="text-gray-400 text-sm leading-relaxed">
                  385‑483‑3700<br />
                  info@compoxen.com<br />
                  Lehi, Utah
                </p>
              </div>
            </motion.div>

          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Compoxen. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </div>
  )
}

