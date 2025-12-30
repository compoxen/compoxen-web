'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '#installations', type: 'anchor' },
    { label: 'Colors & Textures', href: '#five-arc', type: 'anchor' },
    { label: 'Why Composite', href: '/why-compoxen', type: 'page' },
    { label: 'Become a Dealer', href: '/dealer-kit', type: 'page' }
  ]

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const yOffset = -80 // adjust for fixed nav height
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }

  const handleAnchorClick = (id: string) => {
    if (pathname === '/') {
      // Already on home: just scroll
      scrollToId(id)
    } else {
      // Go to home, then scroll
      router.push(`/#${id}`)
      // small timeout to ensure content is rendered before scrolling
      setTimeout(() => scrollToId(id), 400)
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        background: 'rgba(0,0,0,0.45)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}
    >
      <div
        className="container mx-auto px-6"
        style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px'
          }}
        >
          <img
            src="/images/compoxen-logo.png"
            alt="Compoxen"
            style={{
              height: '42px',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div
          className="hidden md:flex"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px'
          }}
        >
          {navLinks.map((link) => {
            if (link.type === 'anchor') {
              const id = link.href.replace('#', '')
              return (
                <motion.button
                  key={link.label}
                  whileHover={{ y: -2, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => handleAnchorClick(id)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    margin: 0,
                    cursor: 'pointer',
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '15px',
                    fontWeight: 500
                  }}
                >
                  {link.label}
                </motion.button>
              )
            }

            return (
              <motion.div
                key={link.href}
                whileHover={{ y: -2, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={link.href}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            )
          })}

          {/* GET QUOTE — BRAND COLOR */}
          <Link
            href="/request-quote"
            style={{
              background: '#D97706',
              color: 'white',
              padding: '10px 22px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(217,119,6,0.35)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#B45309'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#D97706'
            }}
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          style={{ color: 'white' }}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: 'rgba(0,0,0,0.85)',
            padding: '20px 0',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              padding: '0 24px'
            }}
          >
            {navLinks.map((link) => {
              if (link.type === 'anchor') {
                const id = link.href.replace('#', '')
                return (
                  <button
                    key={link.label}
                    onClick={() => {
                      handleAnchorClick(id)
                      setOpen(false)
                    }}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      padding: 0,
                      margin: 0,
                      textAlign: 'left',
                      cursor: 'pointer',
                      color: 'rgba(255,255,255,0.9)',
                      fontSize: '18px'
                    }}
                  >
                    {link.label}
                  </button>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontSize: '18px',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* GET QUOTE — MOBILE */}
            <Link
              href="/request-quote"
              onClick={() => setOpen(false)}
              style={{
                background: '#D97706',
                color: 'white',
                padding: '14px 20px',
                borderRadius: '6px',
                fontSize: '18px',
                fontWeight: 600,
                textAlign: 'center',
                textDecoration: 'none',
                marginTop: '10px'
              }}
            >
              Get Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
