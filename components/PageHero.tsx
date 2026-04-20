import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export interface PageHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

/**
 * Server-rendered hero for content/marketing pages.
 * Mirrors the visual language of `app/why-compoxen/page.tsx` without the
 * `'use client'` boundary, so the H1 + first paragraph are visible to AI
 * crawlers without JS execution.
 */
export default function PageHero({
  badge,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden" style={{ background: '#050505' }}>
      <div className="dot-grid-dark absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(217,119,6,0.08)_0%,transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        {badge && <span className="badge-dark text-xs">{badge}</span>}
        <h1
          className="mt-6 text-white font-semibold tracking-tight leading-[1.08]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-xl hover:bg-amber-500 transition-all"
              >
                {primaryCta.label} <ArrowRight size={16} />
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/70 font-medium text-sm rounded-xl hover:bg-white/6 transition-all"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-enterprise-50 to-transparent" />
    </section>
  )
}
