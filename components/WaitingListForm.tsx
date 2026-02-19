'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'

interface WaitingListFormProps {
  stateName: string
  stateAbbrev: string
}

export default function WaitingListForm({ stateName, stateAbbrev }: WaitingListFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'homeowner', // homeowner, contractor, architect
    zipCode: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // TODO: Replace with actual API call (e.g., to Strapi CMS or waiting list service)
    console.log('Waiting list signup:', { ...form, state: stateAbbrev, stateName })

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-500/15 border border-green-500/30 rounded-2xl p-8 text-center"
      >
        <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
        <h3 className="text-white text-2xl font-bold mb-2">You&apos;re on the list!</h3>
        <p className="text-white/70">
          We&apos;ll notify you when Compoxen launches in {stateName}. 
          You&apos;ll get early-access pricing and first pick of installer partnerships.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white/5 border border-white/15 rounded-2xl p-8 text-left space-y-5"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wl-name" className="block text-white/70 text-sm mb-1.5">
            Full Name *
          </label>
          <input
            id="wl-name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="wl-email" className="block text-white/70 text-sm mb-1.5">
            Email *
          </label>
          <input
            id="wl-email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wl-phone" className="block text-white/70 text-sm mb-1.5">
            Phone
          </label>
          <input
            id="wl-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="wl-zip" className="block text-white/70 text-sm mb-1.5">
            Zip Code *
          </label>
          <input
            id="wl-zip"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            required
            value={form.zipCode}
            onChange={(e) => setForm(f => ({ ...f, zipCode: e.target.value.replace(/\D/g, '') }))}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="12345"
          />
        </div>
      </div>

      <div>
        <label htmlFor="wl-role" className="block text-white/70 text-sm mb-1.5">
          I am a... *
        </label>
        <select
          id="wl-role"
          required
          value={form.role}
          onChange={(e) => setForm(f => ({ ...f, role: e.target.value }))}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-500 appearance-none"
        >
          <option value="homeowner" className="bg-slate-900">Homeowner</option>
          <option value="contractor" className="bg-slate-900">Contractor / Installer</option>
          <option value="architect" className="bg-slate-900">Architect / Designer</option>
          <option value="builder" className="bg-slate-900">Home Builder</option>
          <option value="distributor" className="bg-slate-900">Distributor</option>
          <option value="other" className="bg-slate-900">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-600/50 text-white font-bold py-4 rounded-lg transition-all text-lg"
      >
        {isSubmitting ? (
          'Submitting…'
        ) : (
          <>
            <Send size={18} /> Join the Waiting List
          </>
        )}
      </button>

      <p className="text-white/40 text-xs text-center">
        We&apos;ll only contact you about Compoxen availability in {stateName}. No spam, ever.
      </p>
    </motion.form>
  )
}
