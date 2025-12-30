'use client'
import { Download, Percent, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Users,
  Calculator,
  Lightbulb,
  Package
} from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link' // ← FIXED

export default function Home() {
  const [activeTab, setActiveTab] = useState('residential')

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
        <motion.img
          src="/images/hero-fence-bg.jpg"
          alt="Premium fence"
          style={{
            position: 'absolute',
            inset: '-5%',
            width: '110%',
            height: '110%',
            objectFit: 'cover',
            objectPosition: 'center 30%'
          }}
          animate={{ scale: [1, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.7) 0%, transparent 70%)'
          }}
        />

        <div className="container mx-auto px-8" style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', paddingBottom: '60px' }}>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: '64px',
                fontWeight: 700,
                marginBottom: '32px',
                lineHeight: 1
              }}
            >
              <motion.span style={{ display: 'block', marginBottom: '20px' }}>
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFB74D 0%, #D97706 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Beyond Wood.
                </span>{' '}
                <span style={{ color: 'rgba(255,255,255,0.95)' }}>Beyond Weather.</span>
              </motion.span>

              <motion.span style={{ display: 'block' }}>
                <span style={{ color: 'rgba(255,255,255,0.95)' }}>Beyond Time.</span>{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #FFB74D 0%, #D97706 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Beyond Beautiful.
                </span>
              </motion.span>
            </motion.h1>

            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '24px',
                color: 'rgba(255,255,255,0.9)',
                marginBottom: '56px',
                lineHeight: 1.5,
                fontWeight: 300
              }}
            >
              20-year warranty. Zero maintenance.
              <br />
              The premium choice for homeowners who expect excellence.
            </motion.p>

            <motion.div
  {...fadeIn}
  transition={{ delay: 0.4 }}
  style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}
>

  {/* BUTTON 1 — Dealer Kit */}
  <motion.button
    onClick={() => (window.location.href = '/dealer-kit')}
    style={{
      background: '#D97706',
      color: 'white',
      padding: '24px 56px',
      border: 'none',
      fontSize: '20px',
      fontWeight: 700,
      cursor: 'pointer',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: '0 10px 40px rgba(217,119,6,0.4)',
      position: 'relative',
      overflow: 'hidden'
    }}
    whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(217,119,6,0.6)' }}
    whileTap={{ scale: 0.95 }}
  >
    <span style={{ position: 'relative', zIndex: 2 }}>Get Your Dealer Kit</span>
    <ArrowRight size={20} style={{ position: 'relative', zIndex: 2 }} />
    <motion.div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)'
      }}
      animate={{ x: ['-200%', '200%'] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.button>

  {/* BUTTON 2 — Scroll to Installations */}
  <motion.button
    onClick={() => {
      const el = document.getElementById('installations')
      if (el) {
        const yOffset = -80 // adjust for fixed nav
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }}
    style={{
      background: 'transparent',
      color: 'white',
      padding: '24px 56px',
      border: '2px solid rgba(255,255,255,0.8)',
      fontSize: '20px',
      fontWeight: 600,
      cursor: 'pointer',
      borderRadius: '8px',
      backdropFilter: 'blur(10px)'
    }}
    whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'white' }}
  >
    View Gallery
  </motion.button>

</motion.div>

          </div>
        </div>
      </section>

      {/* COMPOSITE FACTS */}
      <section style={{ padding: '65px 0', background: 'white' }}>
        <div className="container mx-auto px-8" style={{ maxWidth: '1200px' }}>
          <motion.h2
            {...fadeIn}
            style={{
              fontSize: '48px',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '60px',
              color: '#1A1A1A'
            }}
          >
            Engineered for the Long Run
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '60px' }}>
            {[
              {
                title: 'Built From Advanced Composites',
                desc: 'Mineral‑reinforced polymers with UV‑stable pigments. Never warps, never rots, never needs staining.'
              },
              {
                title: 'Designed for Modern Architecture',
                desc: 'Clean lines. Deep matte finishes. Hidden fasteners. Every detail elevates the spaces it protects.'
              },
              {
                title: 'Proven to Outlast Wood & Vinyl',
                desc: 'Independent testing shows superior impact resistance, fade protection, and long‑term stability.'
              }
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn} transition={{ delay: 0.1 * i }}>
                <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px', color: '#8B4513' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '18px', color: '#444', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COLOR CLOSE-UPS */}
<section id="five-arc" style={{ padding: '120px 0', background: '#F4F4F4' }}>
  <div className="container mx-auto px-8" style={{ maxWidth: '1200px' }}>
    <motion.h2
      {...fadeIn}
      style={{
        fontSize: '48px',
        fontWeight: 300,
        textAlign: 'center',
        marginBottom: '24px',
        color: '#1A1A1A'
      }}
    >
      Five Modern, Architect‑Led Colors
    </motion.h2>


    <motion.p
      {...fadeIn}
      transition={{ delay: 0.1 }}
      style={{
        textAlign: 'center',
        fontSize: '18px',
        color: '#555',
        maxWidth: '640px',
        margin: '0 auto 60px'
      }}
    >
      A palette shaped by landscape and architecture — subtle woodgrain, deep matte surfaces, and tones that hold their own against glass, steel, stone, and sky. Built for composite fencing that feels at home in the mountains, on the coast, and everywhere in between.
    </motion.p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
      {[
        { name: 'Harbor Slate', file: '/images/colors-harbor-slate.png', note: 'Modern grey with coastal clarity.' },
        { name: 'Mesa Taupe', file: '/images/colors-mesa-taupe.png', note: 'Warm, grounded, stone‑friendly tone.' },
        { name: 'Shadow Forge', file: '/images/colors-shadow-forge.png', note: 'Charcoal‑black with industrial depth.' },
        { name: 'Redwood Ember', file: '/images/colors-redwood-ember.png', note: 'Rich red‑brown with natural warmth.' },
        { name: 'Cocoa Ridge', file: '/images/colors-cocoa-ridge.png', note: 'Deep chocolate tone with architectural presence.' }
      ].map((color, i) => (
        <motion.div
          key={color.name}
          {...fadeIn}
          transition={{ delay: 0.1 * i }}
          whileHover={{ y: -6 }}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '3 / 4',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 14px 35px rgba(0,0,0,0.12)',
              marginBottom: '14px'
            }}
          >
            <img src={color.file} alt={color.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px', color: '#222' }}>{color.name}</div>
          <div style={{ fontSize: '13px', color: '#666' }}>{color.note}</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* GALLERY */}
      <section id="installations" style={{ padding: '120px 0', background: '#1A1A1A' }}>
        <div className="container mx-auto px-8">
          <motion.h2
            {...fadeIn}
            style={{
              fontSize: '56px',
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: '80px',
              color: 'white'
            }}
          >
            Installations That Inspire
          </motion.h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { img: '/images/gallery-1.jpg', title: 'Modern Minimalist' },
              { img: '/images/gallery-2.jpg', title: 'Luxury Estate' },
              { img: '/images/gallery-3.jpg', title: 'Commercial Excellence' },
              { img: '/images/gallery-4.jpg', title: 'Poolside Paradise' },
              { img: '/images/gallery-5.jpg', title: 'Hillside Haven' },
              { img: '/images/gallery-6.jpg', title: 'Backyard Oasis' }
            ].map((item, i) => (
              <motion.div key={item.title} {...fadeIn} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.04 }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
                <p style={{ color: 'white', marginTop: '16px', fontSize: '18px' }}>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCE HUB — ENTERPRISE V4 */}
<section style={{ padding: '120px 0', background: 'white' }}>
  <div className="container mx-auto px-8">

    <h2
      style={{
        fontSize: '48px',
        fontWeight: 300,
        textAlign: 'center',
        marginBottom: '80px',
        color: '#111',
        letterSpacing: '-0.5px'
      }}
    >
      Everything You Need to <span style={{ fontWeight: 700 }}>Succeed</span>
    </h2>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '48px'
      }}
    >
      {[
        {
          icon: <Download size={38} color="#8B4513" />,
          title: '2026 Contractor Guide',
          desc: 'Specs, pricing tiers, installation diagrams, and material breakdowns — engineered for contractors who demand clarity and speed.',
          cta: 'ORDER FREE GUIDE',
          href: '/get-dealer-kit',
          snippetTitle: 'Contractor Guide',
          snippetMeta: '2026 Edition • PDF + Print'
        },
        {
          icon: <Percent size={38} color="#8B4513" />,
          title: 'Material Science',
          desc: 'Explore the engineering behind Compoxen — composite density, UV‑stable shell, acoustic dampening, and 25+ year performance.',
          cta: 'LEARN MORE',
          href: '/why-compoxen',
          snippetTitle: 'Material Performance',
          snippetMeta: 'Fade‑Resistant • Zero Maintenance'
        },
        {
          icon: <BarChart3 size={38} color="#8B4513" />,
          title: 'Dealer Dashboard',
          desc: 'Track orders, manage samples, unlock pricing tiers, and accelerate your business with real‑time insights.',
          cta: 'VIEW DASHBOARD',
          href: '/dealer',
          snippetTitle: 'Dealer Dashboard',
          snippetMeta: 'Orders • Samples • Pricing Tiers'
        }
      ].map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: i * 0.08 }}
          whileHover={{
            y: -6,
            scale: 1.015,
            boxShadow: '0 12px 28px rgba(0,0,0,0.12)'
          }}
          style={{
            width: '100%',
            maxWidth: '360px',
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e5e5e5',
            padding: '32px',
            textAlign: 'center',
            transition: 'all 0.18s ease-out',
            position: 'relative'
          }}
        >
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.12 }}
            style={{ marginBottom: '20px' }}
          >
            {item.icon}
          </motion.div>

          {/* DARK PREVIEW BOX */}
          <div
            style={{
              background: '#0F172A',
              borderRadius: '14px',
              padding: '16px',
              border: '1px solid rgba(255,255,255,0.08)',
              fontSize: '14px',
              color: 'rgba(226,232,240,0.95)',
              textAlign: 'left',
              marginBottom: '24px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)'
            }}
          >
            <div style={{ marginBottom: '6px', opacity: 0.9 }}>
              {item.snippetTitle}
            </div>
            <div style={{ color: '#facc15' }}>
              {item.snippetMeta}
            </div>
          </div>

          <h3
            style={{
              fontSize: '26px',
              fontWeight: 600,
              marginBottom: '14px',
              color: '#111'
            }}
          >
            {item.title}
          </h3>

          <p
            style={{
              color: '#555',
              marginBottom: '26px',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            {item.desc}
          </p>

          <motion.button
            onClick={() => item.href && (window.location.href = item.href)}
            style={{
              background: 'transparent',
              border: '2px solid #8B4513',
              color: '#8B4513',
              padding: '12px 32px',
              fontWeight: 600,
              cursor: 'pointer',
              borderRadius: '6px'
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.12 }}
          >
            {item.cta}
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* TRUST INDICATORS */}
      <section style={{ padding: '100px 0', background: '#F8F8F8' }}>
        <div className="container mx-auto px-8" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '500+', label: 'Contractors Trust Us' },
              { number: '2M+', label: 'Linear Feet Installed' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: 'A+', label: 'BBB Rating' }
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeIn}>
                <div style={{ fontSize: '42px', fontWeight: 700, color: '#8B4513', marginBottom: '8px' }}>
                  {stat.number}
                </div>
                <div style={{ color: '#666', fontSize: '16px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPLORE COMPOXEN */}
      <section style={{ padding: '120px 0', background: '#F8F8F8' }}>
        <div className="container mx-auto px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '48px',
              fontWeight: 700,
              marginBottom: '24px',
              color: '#1A1A1A'
            }}
          >
            Explore Compoxen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '20px',
              color: '#555',
              marginBottom: '60px',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Whether you're designing a backyard, specifying materials for a build, or just exploring modern fencing — start here.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { icon: Package, label: 'Order Samples', desc: 'See and feel the finish', href: '/samples' },
                            { icon: Lightbulb, label: 'Get Inspired', desc: 'Browse real installations', href: '/gallery' },
              { icon: Users, label: 'Find Installer', desc: 'Connect with a certified pro', href: '/find-installer' },
              { icon: Calculator, label: 'Request a Quote', desc: 'Get pricing for your project', href: '/quote' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ cursor: 'pointer', textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    background: '#8B4513',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    boxShadow: '0 10px 30px rgba(139,69,19,0.2)'
                  }}
                >
                  <item.icon size={36} color="white" />
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
                  {item.label}
                </h3>

                <p style={{ color: '#666', fontSize: '14px', marginBottom: '12px' }}>
                  {item.desc}
                </p>

                <Link
                  href={item.href}
                  style={{
                    fontSize: '14px',
                    color: '#8B4513',
                    textDecoration: 'underline'
                  }}
                >
                  Learn more
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM FOOTER */}
      <footer
        style={{
          background: '#111',
          color: 'white',
          padding: '100px 0 60px'
        }}
      >
        <div
          className="container mx-auto px-8"
          style={{ maxWidth: '1300px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              gap: '60px',
              marginBottom: '60px'
            }}
          >
            {/* Brand Column */}
            <motion.div {...fadeIn}>
              <img
                src="/images/compoxen-logo.png"
                alt="Compoxen"
                style={{
                  height: '48px',
                  marginBottom: '24px',
                  filter: 'brightness(0) invert(1)'
                }}
              />
              <p
                style={{
                  color: '#aaa',
                  lineHeight: 1.6,
                  fontSize: '16px',
                  maxWidth: '320px'
                }}
              >
                Composite fencing engineered for modern architecture.  
                Built to last. Designed to impress.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div {...fadeIn}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                Navigate
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                <li><a href="/" style={{ color: '#aaa', textDecoration: 'none' }}>Home</a></li>
                <li><a href="/#installations" style={{ color: '#aaa', textDecoration: 'none' }}>Gallery</a></li>
                <li><a href="/#five-arc" style={{ color: '#aaa', textDecoration: 'none' }}>Colors & Textures</a></li>
                <li><a href="/why-compoxen" style={{ color: '#aaa', textDecoration: 'none' }}>Why Composite</a></li>
              </ul>
            </motion.div>

            {/* Dealers */}
            <motion.div {...fadeIn}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                Dealers
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                <li><a href="/get-dealer-kit" style={{ color: '#aaa', textDecoration: 'none' }}>Become a Dealer</a></li>
                <li><a href="/request-quote" style={{ color: '#aaa', textDecoration: 'none' }}>Get Quote</a></li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div {...fadeIn}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                Company
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                <li><a href="/why-compoxen" style={{ color: '#aaa', textDecoration: 'none' }}>Our Materials</a></li>
                <li><a href="/get-dealer-kit" style={{ color: '#aaa', textDecoration: 'none' }}>Dealer Kit</a></li>
                <li><a href="/request-quote" style={{ color: '#aaa', textDecoration: 'none' }}>Request Quote</a></li>
              </ul>

              <div style={{ marginTop: '24px' }}>
                <h5
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#ddd'
                  }}
                >
                  Contact
                </h5>
                <p style={{ color: '#aaa', fontSize: '14px' }}>
                  385‑483‑3700  
                  <br />
                  info@compoxen.com  
                  <br />
                  Lehi, Utah
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'rgba(255,255,255,0.08)',
              margin: '40px 0'
            }}
          />
        </div>
      </footer>

    </>
  )
}
