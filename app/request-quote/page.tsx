'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function RequestQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    projectType: '',
    notes: ''
  })

  useEffect(() => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <>
      <Navigation />

      <section
        style={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px 20px'
        }}
      >
        {/* Background Image */}
        <img
          src="/images/hero-fence-bg.jpg"
          alt="Fence"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.55)'
          }}
        />

        {/* Centered Form */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '520px',
            margin: '0 auto',
            paddingLeft: '12px',
            paddingRight: '12px'
          }}
        >
          <div
            style={{
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(18px)',
              borderRadius: '20px',
              padding: '48px 40px',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)'
            }}
          >
            <h2
              style={{
                fontSize: '32px',
                fontWeight: 700,
                textAlign: 'center',
                color: 'white',
                marginBottom: '12px'
              }}
            >
              Request a Quote
            </h2>

            <p
              style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '32px',
                fontSize: '16px'
              }}
            >
              Get pricing, product recommendations, and installer options for your project.
            </p>

            <div style={{ maxWidth: '440px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gap: '18px' }}>
                {[
                  { key: 'name', placeholder: 'Your Name' },
                  { key: 'email', placeholder: 'Email Address', type: 'email' },
                  { key: 'phone', placeholder: 'Phone Number', type: 'tel' },
                  { key: 'zip', placeholder: 'Zip Code' },
                  { key: 'projectType', placeholder: 'Project Type (e.g. backyard, pool, commercial)' },
                  { key: 'notes', placeholder: 'Additional Notes (optional)' }
                ].map((field) => (
                  <input
                    key={field.key}
                    type={field.type || 'text'}
                    placeholder={field.placeholder}
                    value={formData[field.key as keyof typeof formData]}
                    onChange={(e) =>
                      setFormData({ ...formData, [field.key]: e.target.value })
                    }
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.22)',
                      borderRadius: '10px',
                      fontSize: '16px',
                      color: 'white',
                      boxSizing: 'border-box'
                    }}
                  />
                ))}

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                    color: 'white',
                    padding: '18px',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '18px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '10px'
                  }}
                >
                  Request Quote
                  <ArrowRight size={20} />
                </motion.button>

                {/* Secondary Links */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '24px',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)'
                  }}
                >
                  <a
                    href="/get-dealer-kit"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Contractor or dealer?{' '}
                    <span style={{ textDecoration: 'underline' }}>Get kit</span>
                  </a>
                  <a
                    href="/dealer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    Already a dealer?{' '}
                    <span style={{ textDecoration: 'underline' }}>Sign in</span>
                  </a>
                </div>
              </div>

              {/* TRUST ROW */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginTop: '32px',
                  paddingTop: '24px',
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '14px',
                  textAlign: 'center'
                }}
              >
                <div><Check size={14} color="#D97706" /> 20‑Year Warranty</div>
                <div><Check size={14} color="#D97706" /> Fast Quotes</div>
                <div><Check size={14} color="#D97706" /> Installer Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
