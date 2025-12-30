'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Colors & Textures', href: '/colors' },
    { label: 'Why Composite', href: '/why-composite' },
    { label: 'Resources', href: '/resources' },
    { label: 'Become a Dealer', href: '/dealer/request' }
  ]

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
        {/* Logo with left padding */}
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
          {navLinks.map((link) => (
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
          ))}

          {/* Get Quote */}
          <Link
            href="/quote"
            style={{
              color: 'rgba(255,255,255,0.9)',
              padding: '10px 18px',
              borderRadius: '6px',
              border: '1px solid rgba(255,255,255,0.25)',
              fontSize: '15px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
          >
            Get Quote
          </Link>

          {/* Portal Login → Dealer Dashboard */}
          <Link
            href="/dealer/dashboard"
            style={{
              background: '#D97706',
              color: 'white',
              padding: '10px 22px',
              borderRadius: '6px',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(217,119,6,0.35)'
            }}
          >
            Portal Login
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
            {navLinks.map((link) => (
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
            ))}

            {/* Get Quote */}
            <Link
              href="/quote"
              onClick={() => setOpen(false)}
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: '18px',
                textDecoration: 'none'
              }}
            >
              Get Quote
            </Link>

            {/* Portal Login */}
            <Link
              href="/dealer/dashboard"
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
              Portal Login
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
