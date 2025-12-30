'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Phone, MapPin, Award, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('residential')

  return (
    <>
      {/* Hero - Clean and Professional */}
      <section style={{ 
        minHeight: '85vh', 
        background: 'linear-gradient(to bottom, #F8F8F8 0%, #FFFFFF 100%)',
        position: 'relative'
      }}>
        <div className="container mx-auto px-8 pt-32">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h1 style={{ 
                fontSize: '56px', 
                fontWeight: 300,
                color: '#1A1A1A',
                marginBottom: '24px',
                lineHeight: 1.1
              }}>
                Premium Composite Fencing
                <span style={{ display: 'block', fontWeight: 700, color: '#B45309' }}>Built to Last</span>
              </h1>
              
              <p style={{ 
                fontSize: '20px', 
                color: '#666',
                marginBottom: '40px',
                lineHeight: 1.6
              }}>
                Engineered for contractors who demand excellence. 
                25-30 year warranty. Zero maintenance. Unmatched beauty.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
                <button style={{
                  background: '#B45309',
                  color: 'white',
                  padding: '16px 32px',
                  border: 'none',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  Download Catalog
                </button>
                
                <button style={{
                  background: 'white',
                  color: '#1A1A1A',
                  padding: '16px 32px',
                  border: '2px solid #E5E5E5',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  Find a Dealer
                </button>
              </div>
              
              {/* Trust badges */}
              <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                <img src="/images/bbb-logo.png" alt="BBB" style={{ height: '40px' }} />
                <img src="/images/nahb-logo.png" alt="NAHB" style={{ height: '40px' }} />
                <img src="/images/made-usa.png" alt="Made in USA" style={{ height: '40px' }} />
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <img 
                src="/images/hero-fence-clean.jpg" 
                alt="Compoxen Premium Fence"
                style={{ 
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}
              />
              {/* Floating specs */}
              <div style={{
                position: 'absolute',
                bottom: '40px',
                left: '40px',
                background: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontWeight: 700, marginBottom: '8px' }}>Walnut Series</div>
                <div style={{ color: '#666' }}>6' Privacy Panel Kit</div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#B45309', marginTop: '8px' }}>$230/kit</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories Tabs */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container mx-auto px-8">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>
              Explore Our Collections
            </h2>
            <p style={{ fontSize: '18px', color: '#666' }}>
              Professional-grade composite fencing for every application
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginBottom: '60px',
            borderBottom: '1px solid #E5E5E5'
          }}>
            {['Residential', 'Commercial', 'Agricultural'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                style={{
                  padding: '20px 40px',
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: activeTab === tab.toLowerCase() ? 700 : 400,
                  color: activeTab === tab.toLowerCase() ? '#B45309' : '#666',
                  cursor: 'pointer',
                  borderBottom: activeTab === tab.toLowerCase() ? '3px solid #B45309' : 'none',
                  marginBottom: '-1px'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Product Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { color: 'Walnut', price: '$230', image: '/images/walnut-panel.jpg' },
              { color: 'Golden Teak', price: '$240', image: '/images/teak-panel.jpg' },
              { color: 'Light Grey', price: '$225', image: '/images/grey-panel.jpg' },
              { color: 'Charcoal', price: '$235', image: '/images/charcoal-panel.jpg' }
            ].map((product) => (
              <motion.div 
                key={product.color}
                whileHover={{ y: -8 }}
                style={{ cursor: 'pointer' }}
              >
                <img 
                  src={product.image}
                  alt={product.color}
                  style={{width: '100%',
                    height: '280px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    marginBottom: '16px'
                  }}
                />
                <h4 style={{ fontSize: '18px', fontWeight: 600, marginBottom: '8px' }}>{product.color}</h4>
                <p style={{ color: '#666', fontSize: '14px', marginBottom: '8px' }}>6' Privacy Panel Kit</p>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#B45309' }}>{product.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 0', background: '#F8F8F8' }}>
        <div className="container mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '36px', fontWeight: 300, marginBottom: '32px' }}>
                Why Contractors Choose 
                <span style={{ fontWeight: 700, color: '#B45309' }}> Compoxen</span>
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  '25-30 Year Limited Warranty',
                  'Fade & Stain Resistant Technology',
                  'No Painting, Staining, or Sealing',
                  'Insect & Rot Resistant',
                  'Eco-Friendly Recycled Materials'
                ].map((feature) => (
                  <div key={feature} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <CheckCircle style={{ color: '#B45309', flexShrink: 0 }} />
                    <span style={{ fontSize: '18px', color: '#333' }}>{feature}</span>
                  </div>
                ))}
              </div>
              
              <button style={{
                marginTop: '40px',
                background: 'transparent',
                border: '2px solid #B45309',
                color: '#B45309',
                padding: '16px 32px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Download size={20} /> Download Specifications
              </button>
            </div>
            
            <div>
              <img 
                src="/images/texture-closeup.jpg"
                alt="Wood grain texture"
                style={{ 
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Gallery */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container mx-auto px-8">
          <h2 style={{ fontSize: '42px', fontWeight: 300, textAlign: 'center', marginBottom: '60px' }}>
            Featured Installations
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '60px' }}>
            {[
              '/images/gallery-1.jpg',
              '/images/gallery-2.jpg',
              '/images/gallery-3.jpg',
              '/images/gallery-4.jpg',
              '/images/gallery-5.jpg',
              '/images/gallery-6.jpg'
            ].map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                style={{ overflow: 'hidden', borderRadius: '4px' }}
              >
                <img 
                  src={img}
                  alt={`Installation ${i + 1}`}
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </motion.div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <button style={{
              background: '#B45309',
              color: 'white',
              padding: '16px 48px',
              border: 'none',
              fontSize: '18px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Dealer Locator */}
      <section style={{ padding: '80px 0', background: '#1A1A1A', color: 'white' }}>
        <div className="container mx-auto px-8 text-center">
          <MapPin size={48} style={{ margin: '0 auto 24px', color: '#B45309' }} />
          <h2 style={{ fontSize: '42px', fontWeight: 300, marginBottom: '16px' }}>
            Find a Compoxen Dealer
          </h2>
          <p style={{ fontSize: '20px', opacity: 0.8, marginBottom: '40px' }}>
            Connect with authorized contractors in your area
          </p>
          
          <div style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', gap: '16px' }}>
            <input 
              type="text"
              placeholder="Enter your ZIP code"
              style={{
                flex: 1,
                padding: '16px 24px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '4px'
              }}
            />
            <button style={{
              background: '#B45309',
              color: 'white',
              padding: '16px 32px',
              border: 'none',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              Find Dealers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', background: '#F8F8F8' }}>
        <div className="container mx-auto px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '60px', marginBottom: '40px' }}>
            <div>
              <img src="/images/compoxen-logo.png" alt="Compoxen" style={{ height: '40px', marginBottom: '24px' }} />
              <p style={{ color: '#666', lineHeight: 1.6 }}>
                Premium composite fencing engineered for lasting beauty and performance.
              </p>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '20px', fontWeight: 600 }}>Products</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Privacy Fencing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Semi-Privacy Fencing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Rail Fencing</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Gates & Hardware</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '20px', fontWeight: 600 }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Installation Guide</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Warranty Information</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Care & Maintenance</a></li>
                <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#666', textDecoration: 'none' }}>Technical Specs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ marginBottom: '20px', fontWeight: 600 }}>Contact</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Phone size={18} style={{ color: '#B45309' }} />
                <span style={{ color: '#666' }}>801-427-9113</span>
              </div>
              <p style={{ color: '#666', marginBottom: '12px' }}>Monday - Friday: 8am - 5pm MST</p>
              <p style={{ color: '#666' }}>contractors@compoxen.com</p>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #E5E5E5', 
            paddingTop: '32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{ color: '#999' }}>© 2025 Compoxen. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Terms of Service</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Dealer Login</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}