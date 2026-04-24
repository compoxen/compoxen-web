'use client'

// Retained as a thin re-export shim. Compoxen pivoted to Utah-only service,
// so the multi-state waitlist UX is gone. Anything that still imports this
// component renders a compact CTA pointing at the unified quote form.

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface WaitingListFormProps {
  stateName?: string
  stateAbbrev?: string
}

export default function WaitingListForm(_props: WaitingListFormProps) {
  return (
    <div className="bg-white/5 border border-white/15 rounded-2xl p-8 text-center">
      <p className="text-white/70 mb-5">
        Compoxen now serves Utah statewide for installation and ships material nationwide.
      </p>
      <Link
        href="/get-quote"
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
      >
        Get a Quote <ArrowRight size={16} />
      </Link>
    </div>
  )
}

// Legacy multi-state waitlist implementation removed in the Utah-only pivot.

