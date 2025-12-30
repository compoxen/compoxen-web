'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Shield, TrendingUp, Users, DollarSign, Package } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <>
      {/* Hero for Contractors */}
      <section style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0A0A0A' }}>
        <motion.img 
          src="/images/hero-fence-bg.jpg" 
          alt="Premium fence installation"
          style={{ 
            position: 'absolute', 
            inset: '-5%', 
            width: '110%', 
            height: '110%', 
            objectFit: 'cover',
            y: heroY 
          }}
        />
        {/* Less transparent overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.4) 100%)' }} />
        
        <div className="container mx-auto px-8 relative z-10">
          <div style={{ maxWidth: '900px' }}>
            {/* Contractor badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '12px',
                background: 'rgba(217,119,6,0.1)',
                border: '1px solid #D97706',
                padding: '12px 24px',
                borderRadius: '8px',
                marginBottom: '32px'
              }}
            >
              <TrendingUp style={{ width: '20px', height: '20px', color: '#D97706' }} />
              <span style={{ color: '#D97706', fontWeight: 600 }}>CONTRACTOR EXCLUSIVE PRICING</span>
            </motion.div>
            
            <motion.h1 
              style={{ 
                fontSize: 'clamp(60px, 12vw, 140px)', 
                fontWeight: 900, 
                color: 'white',
                marginBottom: '32px',
                lineHeight: 0.9,
                letterSpacing: '-0.03em'
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              SELL MORE FENCE.<br/>
              <span style={{ color: '#D97706' }}>CLOSE FASTER.</span>
            </motion.h1>
            
            <motion.p 
              style={{ fontSize: '28px', color: '#E5E5E5', marginBottom: '48px', fontWeight: 300 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              AI-powered sales tools. AR visualization. 40% higher close rates. 
              Next-day delivery to your job sites.
            </motion.p>
            
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <motion.button 
                style={{ 
                  background: '#D97706',
                  color: 'white',
                  padding: '20px 40px',
                  fontSize: '18px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
                whileHover={{ backgroundColor: '#B45309', scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Users /> Become a Dealer
              </motion.button>

              <motion.button 
                style={{ 
                  background: 'transparent',
                  border: '2px solid white',
                  color: 'white',
                  padding: '20px 40px',
                  fontSize: '18px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  borderRadius: '8px'
                }}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                Contractor Login
              </motion.button>
            </div>

            {/* Trust metrics */}
            <div style={{ display: 'flex', gap: '40px', marginTop: '60px', flexWrap: 'wrap' }}>
              {[
                { number: '500+', label: 'Active Contractors' },
                { number: '48hr', label: 'Delivery Guaranteed' },
                { number: '40%', label: 'Higher Close Rate' }
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{ fontSize: '32px', fontWeight: 700, color: '#D97706' }}>{stat.number}</div>
                  <div style={{ color: '#999', fontSize: '14px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contractor Benefits */}
      <section style={{ padding: '120px 0', background: '#FAFAFA' }}>
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <h2 style={{ fontSize: '64px', fontWeight: 900, color: '#18181B', marginBottom: '24px' }}>
              Why Top Contractors Choose Compoxen
            </h2>
            <p style={{ fontSize: '24px', color: '#52525B', maxWidth: '800px', margin: '0 auto' }}>
              Tools that turn quotes into contracts. Inventory that ships when you need it.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              {
                icon: DollarSign,
                title: 'Volume Discounts',
                desc: 'Up to 35% off with bulk orders. Exclusive contractor rates.',
                highlight: 'Starting at $200/panel'
              },
              {
                icon: Package,
                title: 'Always In Stock',
                desc: 'Local warehouse. Next-day delivery. Never delay a job.',
                highlight: '10,000+ panels ready'
              },
              {
                icon: TrendingUp,
                title: 'Sales Tools That Close',
                desc: 'AR visualization app. Instant quotes. Financing options.',
                highlight: '40% higher close rate'
              }
            ].map((benefit, i) => (
              <motion.div
                key={benefit.title}
                style={{
                  background: 'white',
                  padding: '48px',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                  textAlign: 'center'
                }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
              >
                <benefit.icon style={{ width: '48px', height: '48px', color: '#D97706', margin: '0 auto 24px' }} />
                <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>{benefit.title}</h3>
                <p style={{ color: '#71717A', marginBottom: '24px' }}>{benefit.desc}</p>
                <div style={{ 
                  padding: '12px 24px',
                  background: '#FEF3C7',
                  color: '#92400E',
                  borderRadius: '8px',
                  fontWeight: 600,
                  display: 'inline-block'
                }}>
                  {benefit.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Texture Showcase */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div className="container mx-auto px-8">
          <h2 style={{ fontSize: '56px', fontWeight: 900, textAlign: 'center', marginBottom: '80px' }}>
            Premium Textures Your Clients Will Touch
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '60px' }}>
            {[
              { name: 'Walnut', hex: '#3E2723', image: '/images/walnut-swatch.jpg' },
              { name: 'Golden Teak', hex: '#D4A574', image: '/images/teak-swatch.jpg' },
              { name: 'Light Grey', hex: '#E0E0E0', image: '/images/grey-swatch.jpg' },
              { name: 'Charcoal', hex: '#424242', image: '/images/charcoal-swatch.jpg' }
            ].map((color) => (
              <motion.div 
                key={color.name}
                whileHover={{ scale: 1.02 }}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center' }}
              >
                <img 
                  src={color.image} 
                  alt={color.name}
                  style={{ 
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '12px'
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '16px' }}>{color.name}</h3>
                  <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ width: '60px', height: '60px', background: color.hex, borderRadius: '8px' }} />
                    <div>
                      <p style={{ fontWeight: 600 }}>Color Code</p>
                      <p style={{ color: '#71717A' }}>{color.hex}</p>
                    </div>
                  </div>
                  <button style={{
                    background: '#18181B',
                    color: 'white',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: 600
                  }}>
                    Order Sample
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Portal CTA */}
      <section style={{ 
        padding: '160px 0',
        background: 'linear-gradient(135deg, #18181B 0%, #0A0A0A 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container mx-auto px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Shield style={{ width: '80px', height: '80px', color: '#D97706', margin: '0 auto 32px' }} />
            <h2 style={{ fontSize: '72px', fontWeight: 900, color: 'white', marginBottom: '32px' }}>
              Join the Compoxen Network
            </h2>
            <p style={{ fontSize: '28px', color: '#E5E5E5', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px' }}>
              Exclusive territory protection. Marketing support. Technical training. 
              Become the premium fence supplier in your market.
            </p>
            
            <motion.button
              style={{ 
                background: '#D97706',
                color: 'white',
                padding: '28px 64px',
                fontSize: '22px',
                fontWeight: 700,
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
              whileHover={{ scale: 1.05, backgroundColor: '#B45309' }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to Become a Dealer
            </motion.button>
            
            <p style={{ color: '#999', marginTop: '32px', fontSize: '16px' }}>
              Already a dealer? <a href="#" style={{ color: '#D97706', textDecoration: 'underline' }}>Login to Portal</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contractor Pricing Tiers */}
      <section style={{ padding: '120px 0', background: '#FAFAFA' }}>
        <div className="container mx-auto px-8">
          <h2 style={{ fontSize: '56px', fontWeight: 900, textAlign: 'center', marginBottom: '80px', color: '#18181B' }}>
            Contractor Volume Pricing
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
            {[
              { panels: '50+', price: '$230', label: 'Starter' },
              { panels: '100+', price: '$220', label: 'Professional' },
              { panels: '200+', price: '$210', label: 'Premium' },
              { panels: '300+', price: '$200', label: 'Elite' }
            ].map((tier, i) => (
              <motion.div
                key={tier.panels}
                style={{
                  background: i === 3 ? '#18181B' : 'white',
                  color: i === 3 ? 'white' : '#18181B',
                  padding: '48px 32px',
                  borderRadius: '16px',
                  border: i === 3 ? 'none' : '2px solid #E5E5E5',
                  textAlign: 'center',
                  position: 'relative'
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 30px 60px rgba(0,0,0,0.15)'
                }}
              >
                {i === 3 && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#D97706',
                    color: 'white',
                    padding: '8px 24px',
                    borderRadius: '999px',
                    fontSize: '14px',
                    fontWeight: 700
                  }}>
                    BEST VALUE
                  </div>
                )}
                
                <div style={{ fontSize: '18px', opacity: 0.7, marginBottom: '8px' }}>{tier.label}</div>
                <div style={{ fontSize: '48px', fontWeight: 900, marginBottom: '8px' }}>{tier.price}</div>
                <div style={{ fontSize: '16px', marginBottom: '32px' }}>per panel kit</div>
                <div style={{ fontSize: '24px', fontWeight: 700 }}>{tier.panels} Panels</div>
                
                <div style={{ marginTop: '32px', paddingTop: '32px', borderTop: `1px solid ${i === 3 ? '#333' : '#E5E5E5'}` }}>
                  <div style={{ fontSize: '14px', opacity: 0.8 }}>
                    ✓ Next day delivery<br/>
                    ✓ Technical support<br/>
                    {i >= 2 && '✓ Co-op marketing\n'}
                    {i === 3 && '✓ Protected territory'}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Installations Gallery */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div className="container mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '56px', fontWeight: 900, marginBottom: '24px' }}>
              Contractor Success Stories
            </h2>
            <p style={{ fontSize: '24px', color: '#52525B' }}>
              Real installations. Real profits. Real contractors like you.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { img: '/images/install-modern-home.jpg', contractor: 'Rivera Fencing', location: 'Phoenix, AZ', profit: '+$12,400' },
              { img: '/images/install-luxury-estate.jpg', contractor: 'Premier Fence Co', location: 'Dallas, TX', profit: '+$28,900' },
              { img: '/images/install-commercial.jpg', contractor: 'ABC Contractors', location: 'Denver, CO', profit: '+$45,200' },
              { img: '/images/install-pool-area.jpg', contractor: 'Coastal Fence', location: 'San Diego, CA', profit: '+$15,800' },
              { img: '/images/install-hillside.jpg', contractor: 'Mountain View', location: 'Salt Lake, UT', profit: '+$22,100' },
              { img: '/images/install-backyard.jpg', contractor: 'Green Fence LLC', location: 'Portland, OR', profit: '+$18,500' }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', marginBottom: '20px' }}>
                  <img 
                    src={project.img} 
                    alt={`Installation by ${project.contractor}`}
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#18181B',
                    color: '#10B981',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontWeight: 700,
                    fontSize: '18px'
                  }}>
                    {project.profit}
                  </div>
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '4px' }}>{project.contractor}</h4>
                <p style={{ color: '#71717A' }}>{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Footer */}
      <section style={{ padding: '60px 0', background: '#18181B', color: 'white' }}>
        <div className="container mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', marginBottom: '60px' }}>
            <div>
              <h4 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 700 }}>Dealer Resources</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Dealer Portal Login</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Marketing Materials</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Training Videos</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Warranty Claims</a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 700 }}>Products</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Color Options</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Installation Guides</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Technical Specs</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Sample Request</a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 700 }}>Support</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Technical Support</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Order Tracking</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Returns & Claims</a>
                <a href="#" style={{ color: '#999', textDecoration: 'none' }}>FAQs</a>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 700 }}>Contact Sales</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: '#999' }}>
                <div>
                  <strong style={{ color: 'white' }}>Contractor Hotline</strong><br/>
                  801-427-9113
                </div>
                <div>
                  <strong style={{ color: 'white' }}>Warehouse Visits</strong><br/>
                  Text "WV" to 801-427-9113
                </div>
                <div>
                  <strong style={{ color: 'white' }}>Email</strong><br/>
                  contractors@compoxen.com
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #333', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            <p style={{ color: '#666' }}>© 2025 Compoxen. Contractor pricing subject to approval.</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Terms</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy</a>
              <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Territory Map</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
