'use client'

import React, { ReactNode } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation' // Needed only if layout.tsx doesn't handle inner routes well (but it should!)

// Actually, per audit, layout.tsx handles Navigation globally. 
// EXCEPT the audit said "Double Navigation rendering".
// So we will NOT include Navigation here, assuming layout.tsx has it.

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
    <main className="min-h-screen relative flex items-center justify-center py-24 px-6 bg-brand-dark">
      
      {/* Background with optimized Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px]" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-[520px]"
      >
        <div className="bg-surface-glass backdrop-blur-xl border border-surface-glassBorder rounded-2xl p-6 md:p-12 shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            {title}
          </h1>
          
          <p className="text-center text-white/70 mb-8 text-base md:text-lg leading-relaxed">
            {description}
          </p>

          <div className="space-y-4">
            {children}
          </div>
        </div>
      </motion.div>
    </main>
  )
}
