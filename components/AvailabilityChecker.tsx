'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getStateByZip, getServiceStatus, getStateInfo, ALL_US_STATES } from '@/lib/constants'

type CheckResult = {
  type: 'active' | 'coming-soon' | 'waiting-list'
  stateName: string
  stateSlug?: string
  stateAbbrev: string
} | null

export default function AvailabilityChecker() {
  const [zipCode, setZipCode] = useState('')
  const [result, setResult] = useState<CheckResult>(null)
  const [isChecking, setIsChecking] = useState(false)

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (zipCode.length < 3) return

    setIsChecking(true)

    // Simulate a brief check delay for UX
    setTimeout(() => {
      const stateAbbrev = getStateByZip(zipCode)

      if (stateAbbrev) {
        const status = getServiceStatus(stateAbbrev)
        const stateInfo = getStateInfo(stateAbbrev)
        const stateMeta = ALL_US_STATES.find(s => s.abbreviation === stateAbbrev)

        setResult({
          type: status,
          stateName: stateInfo?.name || stateMeta?.name || stateAbbrev,
          stateSlug: stateInfo?.slug || stateMeta?.slug,
          stateAbbrev,
        })
      } else {
        // Unknown zip — default to waiting list
        setResult({
          type: 'waiting-list',
          stateName: 'your area',
          stateAbbrev: '',
        })
      }

      setIsChecking(false)
    }, 600)
  }

  return (
    <div className="w-full">
      {/* Search Form */}
      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="Enter your zip code"
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

      {/* Result */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={result.type + result.stateName}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-6"
          >
            {result.type === 'active' && (
              <div className="bg-green-500/15 border border-green-500/30 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={24} className="text-green-400" />
                  <h3 className="text-green-300 font-bold text-lg">
                    Great news! We serve {result.stateName}.
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  Compoxen composite fencing is available in your area with certified installers ready to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                  >
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                  {result.stateSlug && (
                    <Link
                      href={`/states/${result.stateSlug}`}
                      className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg transition-all text-sm"
                    >
                      <MapPin size={14} /> View {result.stateName} Details
                    </Link>
                  )}
                </div>
              </div>
            )}

            {result.type === 'coming-soon' && (
              <div className="bg-amber-500/15 border border-amber-500/30 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Clock size={24} className="text-amber-400" />
                  <h3 className="text-amber-300 font-bold text-lg">
                    {result.stateName} is coming soon!
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  We&apos;re expanding to {result.stateName}. Join the waiting list to get early access and launch notifications.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  {result.stateSlug && (
                    <Link
                      href={`/states/${result.stateSlug}#waiting-list`}
                      className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                    >
                      Join Waiting List <ArrowRight size={16} />
                    </Link>
                  )}
                </div>
              </div>
            )}

            {result.type === 'waiting-list' && (
              <div className="bg-white/5 border border-white/15 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin size={24} className="text-white/60" />
                  <h3 className="text-white/90 font-bold text-lg">
                    We&apos;re not in {result.stateName} yet
                  </h3>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  Every request helps us prioritize expansion. Tell us about your project and we&apos;ll notify you when we&apos;re in your area.
                </p>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm border border-white/20"
                >
                  Tell Us About Your Project <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
