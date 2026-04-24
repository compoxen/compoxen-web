import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import type { CityData } from '@/lib/cities'
import { getCityHref } from '@/lib/cities'

interface NearbyCitiesProps {
  cities: CityData[]
  currentCityName?: string
  heading?: string
}

/**
 * Internal-link block used on city pages, county pages, and service pages.
 * Drives PageRank flow between city pages and gives users a "near me" hop.
 */
export default function NearbyCities({
  cities,
  currentCityName,
  heading,
}: NearbyCitiesProps) {
  if (cities.length === 0) return null
  const title =
    heading ??
    (currentCityName
      ? `Composite fence service near ${currentCityName}`
      : 'Other Utah cities we serve')

  return (
    <section className="py-16 md:py-20 bg-white border-y border-enterprise-950/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
          <div>
            <span className="badge-light text-xs">Nearby cities</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-enterprise-950 tracking-tight">
              {title}
            </h2>
          </div>
          <Link
            href="/service-areas"
            className="text-sm text-amber-700 font-semibold hover:text-amber-600 transition-colors inline-flex items-center gap-1"
          >
            All Utah cities <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {cities.map(c => (
            <Link
              key={c.slug}
              href={getCityHref(c)}
              className="group bg-enterprise-50 rounded-xl p-4 border border-enterprise-950/5 hover:border-amber-400/40 hover:bg-white transition-all flex items-center justify-between"
            >
              <div>
                <div className="text-sm font-semibold text-enterprise-950 group-hover:text-amber-700 transition-colors flex items-center gap-1.5">
                  <MapPin size={12} className="text-amber-600" />
                  {c.name}
                </div>
                <div className="text-xs text-enterprise-950/40 mt-0.5">{c.county} County</div>
              </div>
              <ArrowRight
                size={14}
                className="text-enterprise-950/30 group-hover:text-amber-600 group-hover:translate-x-0.5 transition-all"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
