'use client'

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
              <motion.button
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

              <motion.button
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
      <section style={{ padding: '120px 0', background: '#F4F4F4' }}>
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
            Deep matte finishes, subtle variation, and tones curated to sit quietly next to stone, stucco, steel, and glass.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '20px' }}>
            {[
              { name: 'Ashwood Grey', file: '/images/colors-ashwood-grey.jpg', note: 'Cool neutral for modern builds.' },
              { name: 'Canyon Taupe', file: '/images/colors-canyon-taupe.jpg', note: 'Warm mid‑tone that pairs with stone.' },
              { name: 'Charcoal Black', file: '/images/colors-charcoal-black.jpg', note: 'Bold contrast, clean lines.' },
              { name: 'Sierra Brown', file: '/images/colors-sierra-brown.jpg', note: 'Rich depth without wood maintenance.' },
              { name: 'Coastal Sand', file: '/images/colors-coastal-sand.jpg', note: 'Soft, bright, coastal‑friendly.' }
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
      <section style={{ padding: '120px 0', background: '#1A1A1A' }}>
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

      {/* RESOURCE HUB — 4 Columns */}
<section style={{ padding: '120px 0', background: 'white' }}>
  <div className="container mx-auto px-8">
    <motion.h2
      {...fadeIn}
      style={{
        fontSize: '48px',
        fontWeight: 300,
        textAlign: 'center',
        marginBottom: '80px'
      }}
    >
      Everything You Need to <span style={{ fontWeight: 700 }}>Succeed</span>
    </motion.h2>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '40px'
      }}
    >
      {[
        {
          img: '/images/catalog-preview.jpg',
          title: '2025 Contractor Guide',
          desc: 'Specs, pricing tiers, and installation guides delivered to your door.',
          cta: 'ORDER FREE GUIDE'
        },
        {
          img: '/images/install-video.jpg',
          title: 'Master Installation',
          desc: 'Video tutorials, best practices, and pro tips from certified installers.',
          cta: 'WATCH TUTORIALS'
        },
        {
          img: '/images/why-compoxen.jpg',
          title: 'Why Compoxen',
          desc: 'Unmatched durability, modern aesthetics, and zero maintenance.',
          cta: 'LEARN MORE'
        },
        {
          img: '/images/dealer-dashboard.jpg', // Add this image to /public/images
          title: 'Dealer Dashboard',
          desc: 'Track orders, manage samples, unlock pricing tiers, and grow your business.',
          cta: 'VIEW DASHBOARD',
          href: '/dealer/dashboard'
        }
      ].map((item, i) => (
        <motion.div
          key={item.title}
          {...fadeIn}
          transition={{ delay: 0.1 * i }}
          whileHover={{ y: -10 }}
          style={{ textAlign: 'center' }}
        >
          <img
            src={item.img}
            alt={item.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              borderRadius: '8px',
              marginBottom: '24px'
            }}
          />

          <h3
            style={{
              fontSize: '28px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            {item.title}
          </h3>

          <p style={{ color: '#666', marginBottom: '24px' }}>
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
              cursor: 'pointer'
            }}
            whileHover={{ scale: 1.05 }}
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

            {/* Products */}
            <motion.div {...fadeIn}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                Products
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Composite Boards</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Posts & Hardware</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Gates</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Accessories</a></li>
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div {...fadeIn}>
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  marginBottom: '20px'
                }}
              >
                Resources
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Installation Guides</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Spec Sheets</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Warranty Info</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Dealer Kit</a></li>
              </ul>
            </motion.div>

            {/* Company / Contact */}
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
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>About Us</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Our Materials</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Sustainability</a></li>
                <li><a style={{ color: '#aaa', textDecoration: 'none' }}>Careers</a></li>
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

          {/* Bottom Row */}
          <motion.div
            {...fadeIn}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            <p style={{ color: '#666', fontSize: '14px' }}>
              © {new Date().getFullYear()} Compoxen. All rights reserved.
            </p>

            <div style={{ display: 'flex', gap: '24px' }}>
              <a style={{ color: '#666', fontSize: '14px', textDecoration: 'none' }}>Privacy Policy</a>
              <a style={{ color: '#666', fontSize: '14px', textDecoration: 'none' }}>Terms of Service</a>
              <a style={{ color: '#666', fontSize: '14px', textDecoration: 'none' }}>Dealer Login</a>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  )
}
