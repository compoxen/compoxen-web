'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, ArrowRight, Mail } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    console.log('Newsletter subscribe:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative text-white" style={{ background: '#0a0a0a' }}>
      
      {/* Newsletter CTA band */}
      <div className="border-b border-white/6">
        <div className="container mx-auto px-6 max-w-6xl py-14 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-white mb-2">The Trade Brief</h3>
              <p className="text-white/40 text-sm max-w-sm">
                New colors, spec updates, and distributor programs across UT · ID · OR · CO. Built for the trade — no homeowner fluff.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Mail size={16} /> You&apos;re subscribed — thank you!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="grow px-4 py-3 bg-white/6 border border-white/8 rounded-xl text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 max-w-6xl py-14 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 lg:gap-10">

          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <Image
              src="/images/compoxen-logo.png"
              alt="Compoxen"
              width={140}
              height={28}
              className="h-7 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/30 leading-relaxed text-sm max-w-xs mb-5">
              A composite fence line built for the trade.
              Pallet, truckload &amp; container programs for dealers, lumberyards, and pro contractors across Utah, Idaho, Oregon, and Colorado.
            </p>
            <div className="inline-flex items-center gap-2 badge-dark text-xs">
              🇺🇸 Designed in the USA
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/composite-fencing" className="text-white/40 hover:text-white transition-colors duration-200">Composite Fencing</Link></li>
              <li><Link href="/specifications" className="text-white/40 hover:text-white transition-colors duration-200">Specifications</Link></li>
              <li><Link href="/installation" className="text-white/40 hover:text-white transition-colors duration-200">Installation</Link></li>
              <li><Link href="/pricing" className="text-white/40 hover:text-white transition-colors duration-200">Pricing</Link></li>
              <li><Link href="/#architect-colors" className="text-white/40 hover:text-white transition-colors duration-200">Colors & Textures</Link></li>
              <li><Link href="/#installations" className="text-white/40 hover:text-white transition-colors duration-200">Gallery</Link></li>
            </ul>
          </div>

          {/* Compare */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Compare</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/composite-fencing-vs-wood" className="text-white/40 hover:text-white transition-colors duration-200">vs Wood</Link></li>
              <li><Link href="/composite-fencing-vs-vinyl" className="text-white/40 hover:text-white transition-colors duration-200">vs Vinyl</Link></li>
              <li><Link href="/composite-fencing-vs-metal" className="text-white/40 hover:text-white transition-colors duration-200">vs Metal</Link></li>
              <li><Link href="/why-compoxen" className="text-white/40 hover:text-white transition-colors duration-200">Material Science</Link></li>
            </ul>
          </div>

          {/* Territory */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Territory</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/service-areas" className="text-white/40 hover:text-white transition-colors duration-200">Utah <span className="text-white/20">· Limited</span></Link></li>
              <li><Link href="/service-areas" className="text-white/40 hover:text-white transition-colors duration-200">Idaho <span className="text-white/20">· Open</span></Link></li>
              <li><Link href="/service-areas" className="text-white/40 hover:text-white transition-colors duration-200">Oregon <span className="text-white/20">· Open</span></Link></li>
              <li><Link href="/service-areas" className="text-white/40 hover:text-white transition-colors duration-200">Colorado <span className="text-white/20">· Limited</span></Link></li>
              <li><Link href="/service-areas" className="text-amber-500/70 hover:text-amber-400 transition-colors duration-200">View Territory Map →</Link></li>
            </ul>
          </div>

          {/* For the Trade */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">For the Trade</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/get-quote" className="text-white/40 hover:text-white transition-colors duration-200">Open a Trade Account</Link></li>
              <li><Link href="/pricing" className="text-white/40 hover:text-white transition-colors duration-200">Wholesale Programs</Link></li>
              <li><Link href="/specifications" className="text-white/40 hover:text-white transition-colors duration-200">Spec Sheets &amp; Downloads</Link></li>
              <li><Link href="/installation" className="text-white/40 hover:text-white transition-colors duration-200">Installer Training</Link></li>
              <li><Link href="/services" className="text-amber-500/70 hover:text-amber-400 transition-colors duration-200">Programs Overview →</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/about" className="text-white/40 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/blog" className="text-white/40 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/faq" className="text-white/40 hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/glossary" className="text-white/40 hover:text-white transition-colors duration-200">Glossary</Link></li>
              <li><Link href="/privacy-policy" className="text-white/40 hover:text-white transition-colors duration-200">Privacy</Link></li>
              <li><a href="mailto:contact@compoxen.com" className="text-white/40 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="container mx-auto px-6 max-w-6xl py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/20 text-xs">
              © {new Date().getFullYear()} Compoxen, Inc. All rights reserved.
            </p>
            <p className="text-white/15 text-xs">
              Designed in the USA · Trade-only · UT · ID · OR · CO
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
