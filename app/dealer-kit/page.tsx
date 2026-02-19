'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import LeadFormLayout from '@/components/layouts/LeadFormLayout'
import { getServiceStatus, getStateInfo, ALL_US_STATES, ACTIVE_STATE_ABBREVS } from '@/lib/constants'

export default function DealerKitPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    state: ''
  })

  const selectedStateStatus = formData.state ? getServiceStatus(formData.state) : null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Replace with actual API call
    console.log('Dealer Request:', { ...formData, serviceStatus: selectedStateStatus })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  if (submitted) {
    const isActive = selectedStateStatus === 'active'
    return (
      <LeadFormLayout
        title="Request Received!"
        description={
          isActive
            ? 'Your dealer kit is on its way. A territory manager will contact you within 48 hours.'
            : `We've added you to the installer partner waitlist. We'll reach out when we expand to your area.`
        }
      >
        <div className="text-center py-8">
          <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
          <p className="text-white/70 text-sm">
            {isActive
              ? 'Check your email for dealer kit tracking details.'
              : 'Every installer application helps us prioritize which states we expand to next.'}
          </p>
        </div>
      </LeadFormLayout>
    )
  }

  return (
    <LeadFormLayout
      title="Become a Partner"
      description="Get product details, pricing, and installation specifications. Designed in USA."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          id="businessName"
          label="Business Name" 
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
        <Input 
          id="contactName"
          label="Contact Name" 
          placeholder="Contact Name"
          value={formData.contactName}
          onChange={handleChange}
          required
        />
        <Input 
          id="email"
          type="email"
          label="Email Address" 
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input 
          id="phone"
          type="tel"
          label="Phone Number" 
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        
        <Input
          as="select"
          id="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          required
        >
          <option value="" className="bg-brand-dark text-white">Select State</option>
          {/* Active states first */}
          <optgroup label="Currently Serving">
            {ALL_US_STATES.filter(s => ACTIVE_STATE_ABBREVS.includes(s.abbreviation)).map((s) => (
              <option key={s.abbreviation} value={s.abbreviation} className="bg-brand-dark text-white">
                {s.name} ✓
              </option>
            ))}
          </optgroup>
          <optgroup label="All States">
            {ALL_US_STATES.filter(s => !ACTIVE_STATE_ABBREVS.includes(s.abbreviation)).map((s) => (
              <option key={s.abbreviation} value={s.abbreviation} className="bg-brand-dark text-white">
                {s.name}
              </option>
            ))}
          </optgroup>
        </Input>

        {/* State availability indicator */}
        {selectedStateStatus && (
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
            selectedStateStatus === 'active'
              ? 'bg-green-500/15 text-green-300 border border-green-500/20'
              : selectedStateStatus === 'coming-soon'
              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
              : 'bg-white/5 text-white/60 border border-white/10'
          }`}>
            {selectedStateStatus === 'active' && <><CheckCircle size={14} /> Active territory — dealer kits ship immediately.</>}
            {selectedStateStatus === 'coming-soon' && <><Clock size={14} /> Expanding soon — your application will be prioritized.</>}
            {selectedStateStatus === 'waiting-list' && <><MapPin size={14} /> Not in service area yet — your interest helps us plan expansion.</>}
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full mt-4" 
          variant="primary"
          disabled={loading}
        >
          {loading ? 'Sending...' : selectedStateStatus === 'active' ? 'Request Dealer Kit' : 'Join Partner Waitlist'}
          {!loading && <ArrowRight size={20} />}
        </Button>
      </form>
      
      <p className="text-center text-white/40 text-sm mt-4">
        For licensed contractors, distributors, and design professionals.
        <br />
        <span className="text-white/25">🇺🇸 Designed in USA • Currently Serving UT, CO, ID, CA</span>
      </p>

      {/* Additional CTA */}
      <div className="mt-8 pt-6 border-t border-white/10 text-center">
        <Link
          href="/dealer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-amber text-black font-semibold text-sm rounded-lg transition-all duration-200 hover:bg-amber-500 hover:shadow-lg hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Explore Dealer Dashboard
          <ArrowRight size={18} />
        </Link>
      </div>
    </LeadFormLayout>
  )
}
