'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Phone, MapPin, FileText, BookOpen, Shield, Star, CheckCircle, Users, Calculator, Lightbulb, Package } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('residential')

  return (
    <>
      {/* Hero Section - Product Focused */}
<section style={{ 
  minHeight: '80vh',
  position: 'relative',
  overflow: 'hidden'
}}>
  <motion.img 
  src="/images/hero-fence-bg.jpg" 
  alt="Premium fence"
  style={{ 
    position: 'absolute',
    inset: '-5%',
    width: '110%',
    height: '110%',
    objectFit: 'cover',
    objectPosition: 'center 30%' // ← NEW LINE HERE
  }}
  animate={{ scale: [1, 1.05] }}
  transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
/>

  
  <div style={{ 
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.7) 0%, transparent 70%)'
  }} />
  
  <div className="container mx-auto px-8" style={{ paddingTop: '120px', position: 'relative', zIndex: 10 }}>
  <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', paddingBottom: '60px' }}>
    <motion.h1 
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  style={{ 
    fontSize: '64px',
    fontWeight: 700,
    color: 'white',
    marginBottom: '32px',
    lineHeight: 1,
    textAlign: 'center'
  }}
>
  <motion.span
    style={{ 
      display: 'block',
      background: 'linear-gradient(135deg, #FFB74D 0%, #D97706 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      marginBottom: '20px'
    }}
    animate={{ opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    Beyond Wood. Beyond Weather.
  </motion.span>
  <motion.span
    style={{ 
      display: 'block',
      color: 'rgba(255,255,255,0.95)',
      textShadow: '0 4px 20px rgba(217,119,6,0.4)'
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3 }}
  >
    Beyond Time. Beyond Beautiful.
  </motion.span>
</motion.h1>



    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      style={{ 
        fontSize: '24px', 
        color: 'rgba(255,255,255,0.9)',
        marginBottom: '56px',
        lineHeight: 1.5,
        fontWeight: 300,
        textAlign: 'center'
      }}
    >
      20-year warranty. Zero maintenance. 
      <br />
      The sustainable choice for those who build better.
    </motion.p>

      <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4 }}
  style={{ display: 'flex', gap: '24px', justifyContent: 'center' }} // ← Added justifyContent
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
    whileHover={{ 
      scale: 1.05,
      boxShadow: '0 20px 60px rgba(217,119,6,0.6)'
    }}
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
    whileHover={{ 
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderColor: 'white'
    }}
  >
    View Gallery
  </motion.button>
</motion.div>

    </div>
  </div>
</section>


      {/* Trust Indicators */}
      <section style={{ padding: '80px 0', background: 'white', borderBottom: '1px solid #E5E5E5' }}>
        <div className="container mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', textAlign: 'center' }}>
            {[
              { number: '500+', label: 'Contractors Trust Us' },
              { number: '2M+', label: 'Linear Feet Installed' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: 'A+', label: 'BBB Rating' }
            ].map((stat) => (
              <motion.div 
                key={stat.label} 
                whileInView={{ scale: [0.8, 1.1, 1] }} 
                transition={{ duration: 0.5 }}
              >
                <div style={{ fontSize: '48px', fontWeight: 700, color: '#8B4513', marginBottom: '8px' }}>{stat.number}</div>
                <div style={{ color: '#666' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fence Concierge Service */}
      <section style={{ padding: '120px 0', background: '#F8F8F8' }}>
        <div className="container mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '48px', fontWeight: 300, marginBottom: '32px', lineHeight: 1.1 }}>
                Meet Your <span style={{ fontWeight: 700, color: '#8B4513' }}>Fence Expert</span>
              </h2>
              <p style={{ fontSize: '22px', color: '#444', marginBottom: '40px', lineHeight: 1.5 }}>
                From quote to completion, get dedicated support that turns fence projects into profit centers. Our experts help you:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                {[
                  'Match the right product to any project',
                  'Calculate margins and close deals faster',
                  'Access exclusive contractor pricing',
                  'Get same-week delivery guaranteed'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <CheckCircle style={{ color: '#8B4513', flexShrink: 0 }} />
                    <span style={{ fontSize: '18px', color: '#333' }}>{item}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                style={{
                  background: '#8B4513',
                  color: 'white',
                  padding: '20px 48px',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  borderRadius: '4px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span style={{ position: 'relative', zIndex: 2 }}>GET EXPERT SUPPORT</span>
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
            </div>
            <img 
              src="/images/fence-expert.jpg"
              alt="Fence Expert"
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: '120px 0', background: '#1A1A1A' }}>
        <div className="container mx-auto px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: '56px', fontWeight: 700, textAlign: 'center', marginBottom: '80px', color: 'white' }}
          >
            Installations That Inspire
          </motion.h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { img: '/images/install-modern-home.jpg', title: 'Modern Minimalist' },
              { img: '/images/install-luxury-estate.jpg', title: 'Luxury Estate' },
              { img: '/images/install-commercial.jpg', title: 'Commercial Excellence' },
              { img: '/images/install-pool-area.jpg', title: 'Poolside Paradise' },
              { img: '/images/install-hillside.jpg', title: 'Hillside Haven' },
              { img: '/images/install-backyard.jpg', title: 'Backyard Oasis' }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={item.img} 
                  alt={item.title}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <p style={{ color: 'white', marginTop: '16px', fontSize: '18px' }}>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Hub */}
      <section style={{ padding: '120px 0', background: 'white' }}>
        <div className="container mx-auto px-8">
          <h2 style={{ fontSize: '48px', fontWeight: 300, textAlign: 'center', marginBottom: '80px' }}>
            Everything You Need to <span style={{ fontWeight: 700 }}>Succeed</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <motion.div whileHover={{ y: -10 }} style={{ textAlign: 'center' }}>
              <img src="/images/catalog-preview.jpg" alt="Catalog" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>2025 Contractor Guide</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>Specs, pricing tiers, and installation guides delivered to your door.</p>
              <motion.button 
                style={{ 
                  background: 'transparent', 
                  border: '2px solid #8B4513', 
                  color: '#8B4513', 
                  padding: '12px 32px', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                whileHover={{ scale: 1.05 }}
              >
                ORDER FREE GUIDE
              </motion.button>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ textAlign: 'center' }}>
              <img src="/images/install-video.jpg" alt="Installation" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>Master Installation</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>Video tutorials, best practices, and pro tips from certified installers.</p>
              <motion.button 
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
                WATCH TUTORIALS
              </motion.button>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ textAlign: 'center' }}>
              <img src="/images/why-compoxen.jpg" alt="Why Compoxen" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }} />
              <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '16px' }}>Why Compoxen</h3>
              <p style={{ color: '#666', marginBottom: '24px' }}>Unmatched margins, protected territories, marketing support — just the start.</p>
              <motion.button 
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
                LEARN MORE
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(135deg, #F8F8F8 0%, #FFFFFF 100%)' }}>
        <div className="container mx-auto px-8 text-center">
          <h2 style={{ fontSize: '56px', fontWeight: 700, marginBottom: '24px' }}>Ready to Build Better?</h2>
          <p style={{ fontSize: '24px', color: '#666', marginBottom: '80px' }}>Choose your path to premium fence success</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
            {[
              { icon: Package, title: 'Order Samples', desc: 'Feel the quality' },
              { icon: Lightbulb, title: 'Get Inspired', desc: 'Browse installations' },
              { icon: Users, title: 'Find Territory', desc: 'Exclusive areas available' },
              { icon: Calculator, title: 'Calculate ROI', desc: 'See your profits' }
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                style={{ cursor: 'pointer' }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#8B4513',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  boxShadow: '0 10px 30px rgba(139,69,19,0.2)'
                }}>
                  <item.icon size={36} color="white" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#666', fontSize: '14px' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ 
        padding: '120px 0',
        background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)',
        textAlign: 'center'
      }}>
        <div className="container mx-auto px-8">
          <motion.h2 
            style={{ fontSize: '64px', fontWeight: 700, color: 'white', marginBottom: '32px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Join 500+ Contractors Building Better
          </motion.h2>
          <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.9)', marginBottom: '48px' }}>
            Protected territories. Premium products. Professional support.
          </p>
          <motion.button
            style={{ 
              background: 'white',
              color: '#8B4513',
              padding: '24px 60px',
              fontSize: '20px',
              fontWeight: 700,
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Become a Dealer Today</span>
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(139,69,19,0.3) 50%, transparent 100%)'
              }}
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', background: '#1A1A1A', color: 'white' }}>
        <div className="container mx-auto px-8 text-center">
          <img src="/images/compoxen-logo.png" alt="Compoxen" style={{ height: '48px', margin: '0 auto 24px', filter: 'brightness(0) invert(1)' }} />
          <p style={{ color: '#999', marginBottom: '16px' }}>
            Premium composite fencing solutions for professional contractors
          </p>
          <p style={{ color: '#666' }}>
            801-427-9113 | contractors@compoxen.com | © 2025 Compoxen
          </p>
        </div>
      </footer>
    </>
  )
}
