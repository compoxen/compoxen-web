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
    <main className="min-h-screen relative flex items-center justify-center py-20 md:py-28 px-6 bg-brand-dark">
      
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
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-surface-glass backdrop-blur-xl border border-surface-glassBorder rounded-xl p-6 md:p-10 shadow-2xl">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">
            {title}
          </h1>
          
          <p className="text-center text-white/60 mb-6 text-sm md:text-base leading-relaxed">
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
