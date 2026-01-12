'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/#installations' },
    { label: 'Colors & Textures', href: '/#five-arc' },
    { label: 'Why Composite', href: '/why-compoxen' },
    { label: 'Become a Dealer', href: '/dealer-kit' }
  ]

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled 
          ? 'bg-black/45 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 flex items-center group">
           <img
             src="/images/compoxen-logo.png"
             alt="Compoxen"
             className="h-10 w-auto brightness-0 invert transition-opacity group-hover:opacity-80"
           />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors uppercase"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        <div
          className={clsx(
            'fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <ul className="flex flex-col items-center gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white text-2xl font-light tracking-widest uppercase hover:text-brand-amber transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
