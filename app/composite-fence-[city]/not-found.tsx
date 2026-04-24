import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getAllCities, getCityHref } from '@/lib/cities'

export default function CityNotFound() {
  // Show a few popular fallbacks for users who landed on a malformed slug
  const popular = getAllCities()
    .filter(c => c.tier === 'tier1')
    .slice(0, 8)

  return (
    <section className="pt-40 pb-24 min-h-[70vh]" style={{ background: '#050505' }}>
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <span className="badge-dark text-xs">404</span>
        <h1 className="mt-6 text-4xl md:text-5xl text-white font-semibold tracking-tight">
          We don&apos;t have a page for that Utah city — yet.
        </h1>
        <p className="mt-4 text-white/50 text-lg">
          Compoxen serves all of Utah. Pick a nearby city below or get a quote and we&apos;ll route a
          crew to your address.
        </p>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {popular.map(c => (
            <Link
              key={c.slug}
              href={getCityHref(c)}
              className="bg-white/5 border border-white/10 rounded-xl p-4 text-white/80 text-sm hover:bg-white/10 hover:text-white transition-colors"
            >
              {c.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-white font-medium text-sm rounded-xl hover:bg-white/5 transition-all"
          >
            View all Utah cities
          </Link>
          <Link
            href="/get-quote"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
          >
            Get a Utah quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
