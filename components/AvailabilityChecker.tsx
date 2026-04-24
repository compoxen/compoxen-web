'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, CheckCircle, ArrowRight, Truck } from 'lucide-react'
import Link from 'next/link'
import { isUtahZip, BRAND } from '@/lib/constants'

type CheckResult =
  | { type: 'utah' }
  | { type: 'outside-utah' }
  | null

export default function AvailabilityChecker() {
  const [zipCode, setZipCode] = useState('')
  const [result, setResult] = useState<CheckResult>(null)
  const [isChecking, setIsChecking] = useState(false)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (zipCode.length < 3) return

    setIsChecking(true)
    setTimeout(() => {
      setResult(isUtahZip(zipCode) ? { type: 'utah' } : { type: 'outside-utah' })
      setIsChecking(false)
    }, 400)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="Enter your Utah zip code"
            value={zipCode}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '')
              setZipCode(val)
              if (val.length < 3) setResult(null)
            }}
            className="w-full pl-11 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-lg"
            required
          />
        </div>
        <button
          type="submit"
          disabled={zipCode.length < 3 || isChecking}
          className="px-6 py-4 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-600/50 text-white font-bold rounded-lg transition-all whitespace-nowrap"
        >
          {isChecking ? 'Checking…' : 'Check'}
        </button>
      </form>

      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result.type}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6"
          >
            {result.type === 'utah' && (
              <div className="bg-green-500/15 border border-green-500/30 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={24} className="text-green-400" />
                  <h3 className="text-green-300 font-bold text-lg">
                    You&apos;re in our service area.
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Compoxen supplies and installs composite fencing across Utah. Free quotes within 48 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg transition-all text-sm"
                  >
                    <MapPin size={14} /> View All Cities
                  </Link>
                </div>
              </div>
            )}

            {result.type === 'outside-utah' && (
              <div className="bg-white/5 border border-white/15 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={24} className="text-amber-400" />
                  <h3 className="text-white/90 font-bold text-lg">
                    We install in Utah — material ships further.
                  </h3>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  Professional installation is Utah-only right now. Compoxen panels and hardware
                  ship as DIY-ready kits to most US states. Call {BRAND.phone} for freight quotes.
                </p>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm border border-white/20"
                >
                  Request a Material Quote <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
