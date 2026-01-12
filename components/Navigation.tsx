'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Stable scroll handler with useCallback
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/#installations' },
    { label: 'Colors & Textures', href: '/#architect-colors' },
    { label: 'Why Composite', href: '/why-compoxen' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className={clsx(
          'w-full transition-all duration-300 border-b',
          scrolled 
            ? 'bg-black/60 backdrop-blur-md border-white/10 py-3' 
            : 'bg-black/30 backdrop-blur-sm border-transparent py-5'
        )}
        aria-label="Main Navigation"
        role="navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="relative flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 rounded-sm"
          >
            <img
              src="/images/compoxen-logo.png"
              alt="Compoxen - Return to Homepage"
              className="h-10 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={clsx(
                      'text-sm font-medium tracking-wide uppercase transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:rounded-sm',
                      pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]))
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Get Quote CTA Button */}
            <Link
              href="/get-quote"
              className={clsx(
                'ml-4 px-6 py-2 bg-brand-amber text-black font-semibold text-sm uppercase tracking-wide rounded-lg',
                'transition-all duration-200 hover:bg-amber-500 hover:shadow-lg',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black/50'
              )}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={clsx(
              'md:hidden relative z-[60] text-white p-2 rounded-lg transition-colors',
              'hover:bg-white/10',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500'
            )}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        id="mobile-navigation"
        className={clsx(
          'fixed inset-0 z-[55] flex flex-col items-center justify-center md:hidden',
          'bg-black/95 backdrop-blur-xl',
          'transition-all duration-300 ease-in-out',
          isOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible pointer-events-none'
        )}
        aria-hidden={!isOpen}
      >
        <nav aria-label="Mobile Navigation">
          <ul className="flex flex-col items-center gap-8 text-center" role="list">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    'block text-2xl font-light tracking-widest uppercase transition-all duration-200',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:rounded-sm px-4 py-2',
                    pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href.split('#')[0]))
                      ? 'text-brand-amber'
                      : 'text-white hover:text-brand-amber'
                  )}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            
            {/* Mobile Get Quote CTA */}
            <li>
              <Link
                href="/get-quote"
                className={clsx(
                  'block mt-4 px-8 py-3 bg-brand-amber text-black font-semibold text-lg uppercase tracking-wide rounded-lg',
                  'transition-all duration-200 hover:bg-amber-500',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400'
                )}
                onClick={() => setIsOpen(false)}
                tabIndex={isOpen ? 0 : -1}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
                  transform: isOpen ? 'translateY(0)' : 'translateY(-10px)',
                  opacity: isOpen ? 1 : 0
                }}
              >
                Get Quote
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
