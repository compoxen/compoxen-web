'use client';

import { motion } from 'framer-motion';

export default function WhyCompoxen() {
  return (
    <section style={{ padding: '140px 0', background: '#F7F7F7' }}>
      <div className="container mx-auto px-8" style={{ maxWidth: '1100px' }}>

        {/* HERO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '64px',
            fontWeight: 200,
            textAlign: 'center',
            marginBottom: '32px',
            color: '#111',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}
        >
          The Fence That <span style={{ fontWeight: 600 }}>Completes</span> Your Architecture
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            textAlign: 'center',
            fontSize: '22px',
            color: '#555',
            maxWidth: '760px',
            margin: '0 auto 120px',
            lineHeight: '1.6'
          }}
        >
          Composite engineered for permanence, silence, and modern outdoor living.  
          Built to disappear into the landscape while elevating everything around it.
        </motion.p>

        {/* STORY */}
        <section style={{ marginBottom: '140px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 300, marginBottom: '24px', color: '#222' }}>
            Born From Every Fence That Failed
          </h2>
          <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.75', maxWidth: '900px' }}>
            Wood rots. Vinyl warps. Metal rusts. Traditional fencing forces homeowners into a cycle of
            repairs, repainting, and replacement. Compoxen was engineered to end that cycle permanently.
            A material that looks refined, feels substantial, and stands quietly in the background while
            your architecture, landscape, and lifestyle take center stage.
          </p>
        </section>

        {/* MATERIAL SCIENCE */}
        <section style={{ marginBottom: '140px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 300, marginBottom: '24px', color: '#222' }}>
            Engineered for 25+ Years of Quiet Performance
          </h2>
          <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.75', marginBottom: '32px' }}>
            Compoxen is built from a dense composite core wrapped in a UV‑stable matte shell.  
            Every detail is designed for longevity, stability, and architectural clarity.
          </p>

          <ul style={{ fontSize: '20px', color: '#555', lineHeight: '1.9', paddingLeft: '24px' }}>
            <li>Deep matte finish that hides dust and fingerprints</li>
            <li>Subtle woodgrain that feels organic without imitation</li>
            <li>Zero maintenance — no painting, staining, or sealing</li>
            <li>No warping, cracking, or splintering</li>
            <li>Fade‑resistant color for harsh sun and mountain climates</li>
            <li>Acoustically quiet — no rattling, no hollow vinyl sound</li>
          </ul>
        </section>

        {/* COLOR PALETTE */}
        <section style={{ marginBottom: '140px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 300, marginBottom: '24px', color: '#222' }}>
            Five Modern, Architect‑Led Colors
          </h2>
          <p style={{ fontSize: '20px', color: '#555', marginBottom: '32px', lineHeight: '1.75' }}>
            Inspired by coastlines, mountains, desert mesas, and modern urban materials.  
            Each tone is crafted to sit quietly next to stone, stucco, steel, and glass.
          </p>

          <ul style={{ fontSize: '20px', color: '#555', lineHeight: '1.9', paddingLeft: '24px' }}>
            <li>Harbor Slate — modern grey with coastal clarity</li>
            <li>Mesa Taupe — warm, grounded, stone‑friendly tone</li>
            <li>Shadow Forge — grey‑black with industrial depth</li>
            <li>Redwood Ember — rich red‑brown with natural warmth</li>
            <li>Cocoa Ridge — deep chocolate tone with architectural presence</li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section style={{ marginBottom: '140px' }}>
          <h2 style={{ fontSize: '40px', fontWeight: 300, marginBottom: '24px', color: '#222' }}>
            A Fence You Don’t Have to Think About
          </h2>
          <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.75', maxWidth: '900px' }}>
            Compoxen is built for people who value their time, their space, and their peace.
            No seasonal repairs. No fading or peeling. No maintenance schedules.  
            Just a clean, modern boundary that elevates everything around it.
          </p>
        </section>

        {/* CTA */}
<div style={{ textAlign: 'center' }}>
  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    onClick={() => (window.location.href = '/request-quote')}
    style={{
      background: '#D97706', // brand amber
      border: 'none',
      color: 'white',
      padding: '16px 48px',
      fontWeight: 600,
      fontSize: '20px',
      cursor: 'pointer',
      letterSpacing: '0.5px',
      borderRadius: '8px',
      boxShadow: '0 6px 22px rgba(217,119,6,0.35)'
    }}
    whileHover={{ scale: 1.05 }}
  >
    Get Quote
  </motion.button>
</div>


      </div>
    </section>
  );
}
