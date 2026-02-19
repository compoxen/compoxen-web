'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative text-white py-14 md:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)' }}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-12">

          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left"
          >
            <img
              src="/images/compoxen-logo.png"
              alt="Compoxen"
              className="h-10 mb-5 brightness-0 invert mx-auto sm:mx-0"
            />
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto sm:mx-0 mb-4">
              Premium composite fencing designed in the USA.
              Perfected in the Mountains. Built to last.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs text-amber-400 font-medium">
              🇺🇸 Designed in USA
            </div>
          </motion.div>

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-bold mb-4 tracking-wide">Navigate</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/#installations" className="hover:text-white transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/#architect-colors" className="hover:text-white transition-colors duration-200">Colors & Textures</Link></li>
              <li><Link href="/why-compoxen" className="hover:text-white transition-colors duration-200">Why Composite</Link></li>
              <li><Link href="/states" className="hover:text-white transition-colors duration-200">Service Areas</Link></li>
            </ul>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-bold mb-4 tracking-wide">Service Areas</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/states/utah" className="hover:text-white transition-colors duration-200"><MapPin size={12} className="inline mr-1" />Utah</Link></li>
              <li><Link href="/states/colorado" className="hover:text-white transition-colors duration-200"><MapPin size={12} className="inline mr-1" />Colorado</Link></li>
              <li><Link href="/states/idaho" className="hover:text-white transition-colors duration-200"><MapPin size={12} className="inline mr-1" />Idaho</Link></li>
              <li><Link href="/states/california" className="hover:text-white transition-colors duration-200"><MapPin size={12} className="inline mr-1" />California</Link></li>
              <li><Link href="/states" className="text-amber-500 hover:text-amber-400 hover:brightness-110 transition-all duration-200">Check Availability →</Link></li>
            </ul>
          </motion.div>

          {/* Dealers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-bold mb-4 tracking-wide">Partners</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/dealer-kit" className="hover:text-white transition-colors duration-200">Become an Installer</Link></li>
              <li><Link href="/get-quote" className="hover:text-white transition-colors duration-200">Get a Quote</Link></li>
              <li><Link href="/dealer" className="hover:text-white transition-colors duration-200">Dealer Dashboard</Link></li>
            </ul>
          </motion.div>

          {/* Company / Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <h4 className="text-base font-bold mb-4 tracking-wide">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="/why-compoxen" className="hover:text-white transition-colors duration-200">Our Materials</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
            </ul>

            <div className="mt-5">
              <h5 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">Contact</h5>
              <p className="text-gray-400 text-sm leading-relaxed">
                1‑800‑COMPOXEN<br />
                info@compoxen.com<br />
                Design Center: Salt Lake City, UT
              </p>
            </div>
          </motion.div>

        </div>

        {/* Divider & Copyright */}
        <div className="section-divider mb-0" />
        <div className="pt-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Compoxen. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs text-center sm:text-right">
              Compoxen® | Designed in USA | Currently Serving UT, CO, ID, CA |{' '}
              <Link href="/states" className="text-amber-500/70 hover:text-amber-400 transition-colors">
                Check Availability
              </Link>
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
