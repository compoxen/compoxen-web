'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LeadFormLayoutProps {
  title: string
  description: string
  children: ReactNode
  backgroundImage?: string
}

export default function LeadFormLayout({
  title,
  description,
  children,
  backgroundImage = '/images/hero-fence-bg.jpg'
}: LeadFormLayoutProps) {
  return (
    <main className="min-h-screen relative flex items-center justify-center py-24 md:py-32 px-6" style={{ background: '#050505' }}>
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
      </div>

      {/* Dot grid overlay */}
      <div className="dot-grid-dark absolute inset-0 z-1 opacity-30" />

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/6 backdrop-blur-2xl border border-white/8 rounded-2xl p-7 md:p-10 shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-white mb-2 tracking-tight">
            {title}
          </h1>
          
          <p className="text-center text-white/40 mb-7 text-sm leading-relaxed">
            {description}
          </p>

          <div className="space-y-3.5">
            {children}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
