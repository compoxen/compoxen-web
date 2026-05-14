'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import clsx from 'clsx'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navLinks = [
    { label: 'The System', href: '/composite-fencing' },
    { label: 'Specs', href: '/specifications' },
    { label: 'Wholesale', href: '/pricing' },
    { label: 'Territory', href: '/service-areas' },
    { label: 'Lookbook', href: '/#installations' },
    { label: 'Insights', href: '/blog' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Announcement Bar */}
      <div className="announcement-bar text-center py-2 px-4">
        <p className="text-[13px] text-white/60 font-medium">
          <span className="text-amber-400/80">Trade desk open:</span>{' '}
          Now booking dealers across Utah, Idaho, Oregon &amp; Colorado —
          <Link href="/get-quote" className="text-white/80 hover:text-white underline underline-offset-2 ml-1 transition-colors">
            open a trade account
          </Link>
        </p>
      </div>

      {/* Main Nav */}
      <nav
        className={clsx(
          'w-full transition-all duration-300',
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/6 py-3' 
            : 'bg-black/20 backdrop-blur-sm border-b border-transparent py-4'
        )}
        aria-label="Main Navigation"
        role="navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center group"
          >
            <Image
              src="/images/compoxen-logo.png"
              alt="Compoxen"
              width={160}
              height={32}
              priority
              className="h-8 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'text-[13px] font-medium px-3.5 py-2 rounded-lg transition-all duration-200',
                      pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]))
                        ? 'text-white bg-white/10'
                        : 'text-white/60 hover:text-white hover:bg-white/6'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <Link
              href="/get-quote"
              className={clsx(
                'ml-3 px-4 py-2 bg-brand-amber text-black font-semibold text-[13px] rounded-lg',
                'transition-all duration-200 hover:bg-amber-500 cta-glow'
              )}
            >
              Open a Trade Account
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              'md:hidden relative z-60 text-white p-2 rounded-lg transition-colors duration-200',
              'hover:bg-white/10 active:bg-white/20'
            )}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-navigation"
        className={clsx(
          'fixed inset-0 z-55 flex flex-col items-center justify-center md:hidden',
          'bg-black/98 backdrop-blur-2xl',
          'transition-all duration-300 ease-in-out',
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col items-center gap-2 text-center" role="list">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block text-xl font-medium tracking-tight px-6 py-3 rounded-xl transition-all duration-200',
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]))
                      ? 'text-brand-amber bg-white/5'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  )}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            <li>
              <Link
                href="/get-quote"
                className={clsx(
                  'block mt-6 px-8 py-3.5 bg-brand-amber text-black font-semibold text-base rounded-xl',
                  'transition-all duration-200 hover:bg-amber-500 active:scale-95 cta-glow'
                )}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(-8px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                Open a Trade Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
