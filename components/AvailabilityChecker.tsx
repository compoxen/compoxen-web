'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, CheckCircle, ArrowRight, Truck } from 'lucide-react'
import Link from 'next/link'
import { isUtahZip, BRAND } from '@/lib/constants'

// UT/ID/OR/CO ZCTA prefixes — Strategic Distributor region.
const REGION_ZIP_PREFIXES = [
  // Utah 840–847
  '840','841','842','843','844','845','846','847',
  // Idaho 832–838
  '832','833','834','835','836','837','838',
  // Oregon 970–979
  '970','971','972','973','974','975','976','977','978','979',
  // Colorado 800–816
  '800','801','802','803','804','805','806','807','808','809','810','811','812','813','814','815','816',
]

function isInRegionZip(zip: string): boolean {
  if (!zip || zip.length < 3) return false
  return REGION_ZIP_PREFIXES.includes(zip.substring(0, 3)) || isUtahZip(zip)
}

type CheckResult =
  | { type: 'in-region' }
  | { type: 'out-of-region' }
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
      setResult(isInRegionZip(zipCode) ? { type: 'in-region' } : { type: 'out-of-region' })
      setIsChecking(false)
    }, 400)
  }

  return (
    <div className="w-full">
      <form onSubmit={handleCheck} className="flex gap-2">
        <div className="relative grow">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
          <label htmlFor="availability-zip" className="sr-only">UT, ID, OR, or CO zip code</label>
          <input
            id="availability-zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="Enter a UT, ID, OR, or CO zip"
            aria-label="Enter a UT, ID, OR, or CO zip code"
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
            {result.type === 'in-region' && (
              <div className="bg-green-500/15 border border-green-500/30 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={24} className="text-green-400" />
                  <h3 className="text-green-300 font-bold text-lg">
                    You&apos;re inside the Compoxen region.
                  </h3>
                </div>
                <p className="text-white/70 text-sm mb-4">
                  We stock and ship to distributor partners across Utah, Idaho, Oregon, and Colorado. Some territories are still open — apply to carry the line.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/get-quote"
                    className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
                  >
                    Open a Trade Account <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 hover:text-white font-medium px-6 py-3 rounded-lg transition-all text-sm"
                  >
                    <MapPin size={14} /> See Dealer Map
                  </Link>
                </div>
              </div>
            )}

            {result.type === 'out-of-region' && (
              <div className="bg-white/5 border border-white/15 rounded-xl p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={24} className="text-amber-400" />
                  <h3 className="text-white/90 font-bold text-lg">
                    Outside our core region — let&apos;s talk freight.
                  </h3>
                </div>
                <p className="text-white/60 text-sm mb-4">
                  Our Strategic Distributor Program covers Utah, Idaho, Oregon, and Colorado today. For dealers and contractors elsewhere, we quote container and pallet freight case-by-case. Call {BRAND.phone}.
                </p>
                <Link
                  href="/get-quote"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm border border-white/20"
                >
                  Request a Freight Quote <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
