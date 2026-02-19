'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
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
              <h3 className="text-xl font-semibold text-white mb-2">Stay in the loop</h3>
              <p className="text-white/40 text-sm max-w-sm">
                Product updates, expansion news, and dealer opportunities. No spam, ever.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                <Mail size={16} /> You&apos;re subscribed — thank you!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">

          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-2">
            <img
              src="/images/compoxen-logo.png"
              alt="Compoxen"
              className="h-7 mb-5 brightness-0 invert"
            />
            <p className="text-white/30 leading-relaxed text-sm max-w-xs mb-5">
              Premium composite fencing engineered in the USA. 
              20-year warranty. Zero maintenance. Five architect-led colors.
            </p>
            <div className="inline-flex items-center gap-2 badge-dark text-xs">
              🇺🇸 Designed in Salt Lake City, UT
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/#architect-colors" className="text-white/40 hover:text-white transition-colors duration-200">Colors & Textures</Link></li>
              <li><Link href="/#installations" className="text-white/40 hover:text-white transition-colors duration-200">Gallery</Link></li>
              <li><Link href="/why-compoxen" className="text-white/40 hover:text-white transition-colors duration-200">Material Science</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Service Areas</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/states/utah" className="text-white/40 hover:text-white transition-colors duration-200">Utah</Link></li>
              <li><Link href="/states/colorado" className="text-white/40 hover:text-white transition-colors duration-200">Colorado</Link></li>
              <li><Link href="/states/idaho" className="text-white/40 hover:text-white transition-colors duration-200">Idaho</Link></li>
              <li><Link href="/states/california" className="text-white/40 hover:text-white transition-colors duration-200">California</Link></li>
              <li><Link href="/states" className="text-amber-500/70 hover:text-amber-400 transition-colors duration-200">All Areas →</Link></li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Partners</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/dealer-kit" className="text-white/40 hover:text-white transition-colors duration-200">Become a Dealer</Link></li>
              <li><Link href="/get-quote" className="text-white/40 hover:text-white transition-colors duration-200">Get a Quote</Link></li>
              <li><Link href="/dealer" className="text-white/40 hover:text-white transition-colors duration-200">Dealer Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-[13px]">
              <li><Link href="/why-compoxen" className="text-white/40 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/privacy-policy" className="text-white/40 hover:text-white transition-colors duration-200">Privacy</Link></li>
              <li><a href="mailto:info@compoxen.com" className="text-white/40 hover:text-white transition-colors duration-200">Contact</a></li>
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
              Designed in USA · Currently Serving UT, CO, ID, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
