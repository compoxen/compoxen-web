'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  Box,
  Download,
  Percent
} from 'lucide-react';
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useMotionValueEvent
} from 'framer-motion';

export default function DealerIntroPage() {
  // Animated metric: total feet purchased
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.floor(latest).toLocaleString());
  const [roundedValue, setRoundedValue] = useState('0');

  useMotionValueEvent(rounded, 'change', latest => {
    setRoundedValue(latest);
  });

  useEffect(() => {
    const controls = animate(count, 4200, {
      duration: 2.4,
      ease: 'easeOut'
    });
    return controls.stop;
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '140px 24px 120px',
        backgroundColor: '#020617',
        position: 'relative'
      }}
    >
      {/* Background particles */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          background:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04), transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03), transparent 60%)',
          zIndex: 0
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
        {/* HERO — LIVE DATA PULSE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 200,
              color: 'white',
              letterSpacing: '-0.5px',
              marginBottom: '20px'
            }}
          >
            The Dealer Dashboard That <span style={{ fontWeight: 600 }}>Drives Growth</span>
          </h1>

          <p
            style={{
              fontSize: '22px',
              color: 'rgba(226,232,240,0.8)',
              maxWidth: '760px',
              margin: '0 auto 60px',
              lineHeight: '1.6'
            }}
          >
            Real‑time insights, automated tools, and a modern interface built to help you close more projects,
            unlock better pricing, and scale your business.
          </p>

          {/* LIVE METRIC PULSE */}
          <motion.div
            animate={{
              scale: [1, 1.04, 1],
              opacity: [1, 0.9, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              display: 'inline-block',
              padding: '24px 40px',
              borderRadius: '20px',
              background: 'rgba(15,23,42,0.85)',
              border: '1px solid rgba(55,65,81,0.7)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 40px rgba(249,115,22,0.25)'
            }}
          >
            <div style={{ fontSize: '16px', color: 'rgba(226,232,240,0.7)', marginBottom: '6px' }}>
              Total Feet Purchased (YTD)
            </div>

            <div
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: '#f97316'
              }}
            >
              {roundedValue} ft
            </div>
          </motion.div>
        </motion.div>

        {/* POWERED BY */}
        <p
          style={{
            textAlign: 'center',
            color: 'rgba(148,163,184,0.6)',
            fontSize: '14px',
            marginBottom: '80px',
            letterSpacing: '0.08em'
          }}
        >
          Powered by <span style={{ color: '#f97316' }}>Compoxen</span>
        </p>

        {/* FEATURE GRID */}
        <section
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '50px',
            marginBottom: '160px',
            position: 'relative'
          }}
        >
          {[
            {
              icon: <BarChart3 size={40} color="#38bdf8" />,
              title: 'Real‑Time Order Tracking',
              desc: 'Live order statuses, footage totals, delivery windows, and project insights — all in one place.',
              snippetTitle: 'PO‑1842 • North Ridge Estates',
              snippetMeta: '620 ft • In Production',
              snippetColor: '#facc15'
            },
            {
              icon: <Box size={40} color="#facc15" />,
              title: 'Sample Management',
              desc: 'Request boards, hardware kits, and homeowner binders with a single click.',
              snippetTitle: 'Board Color Kit',
              snippetMeta: 'Ships in 3–5 days',
              snippetColor: 'rgba(148,163,184,0.9)'
            },
            {
              icon: <Percent size={40} color="#f97316" />,
              title: 'Tiered Pricing & Growth Tools',
              desc: 'Transparent progress tracking shows exactly how close you are to unlocking better margins.',
              snippetTitle: 'Better Pricing Path',
              snippetMeta: 'Add 3,200 ft to unlock next tier',
              snippetColor: '#facc15'
            },
            {
              icon: <Download size={40} color="#38bdf8" />,
              title: 'Marketing & Sales Assets',
              desc: 'Download photos, spec sheets, brochures, and branded materials — always up‑to‑date.',
              snippetTitle: 'Spec Sheets',
              snippetMeta: 'PDF • Updated monthly',
              snippetColor: 'rgba(148,163,184,0.9)'
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -12,
                scale: 1.05,
                boxShadow: '0 0 60px rgba(249,115,22,0.35)',
                borderColor: 'rgba(249,115,22,0.6)'
              }}
              style={{
                width: '100%',
                maxWidth: '360px',
                background: 'rgba(15,23,42,0.85)',
                borderRadius: '20px',
                border: '1px solid rgba(55,65,81,0.7)',
                padding: '36px',
                textAlign: 'center',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated gradient border */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  padding: '2px',
                  background:
                    'linear-gradient(135deg, rgba(249,115,22,0.25), rgba(56,189,248,0.25))',
                  WebkitMask:
                    'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none'
                }}
              />

              {/* Icon micro-motion */}
              <motion.div
                whileHover={{ rotate: 3, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{ marginBottom: '24px' }}
              >
                {item.icon}
              </motion.div>

              <h3
                style={{
                  fontSize: '26px',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '14px'
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: 'rgba(226,232,240,0.85)',
                  lineHeight: '1.7',
                  marginBottom: '28px',
                  fontSize: '17px'
                }}
                            >
                {item.desc}
              </p>

              {/* Dashboard snippet */}
              <div
                style={{
                  background: 'rgba(2,6,23,0.6)',
                  borderRadius: '14px',
                  padding: '16px',
                  border: '1px solid rgba(55,65,81,0.7)',
                  fontSize: '14px',
                  color: 'rgba(226,232,240,0.95)',
                  textAlign: 'left'
                }}
              >
                <div style={{ marginBottom: '8px', opacity: 0.9 }}>{item.snippetTitle}</div>
                <div style={{ color: item.snippetColor }}>{item.snippetMeta}</div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => (window.location.href = '/get-dealer-kit')}
            style={{
              background: 'transparent',
              border: '2px solid #f97316',
              color: '#f97316',
              padding: '16px 48px',
              fontWeight: 600,
              fontSize: '20px',
              cursor: 'pointer',
              letterSpacing: '0.5px'
            }}
            whileHover={{ scale: 1.05 }}
          >
            Become a Compoxen Dealer
          </motion.button>
        </div>
      </div>
    </main>
  );
}

