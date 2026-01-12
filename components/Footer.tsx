'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">

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
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs mx-auto sm:mx-0">
              Composite fencing engineered for modern architecture.
              Built to last. Designed to impress.
            </p>
          </motion.div>

          {/* Navigate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
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
            className="text-center sm:text-left"
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
            className="text-center sm:text-left"
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
  )
}
