'use client'

import { FormEvent, useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Clock, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import LeadFormLayout from '@/components/layouts/LeadFormLayout'
import { getStateByZip, getServiceStatus, getStateInfo, ALL_US_STATES } from '@/lib/constants'

export default function GetQuotePage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [zipStatus, setZipStatus] = useState<'active' | 'coming-soon' | 'waiting-list' | null>(null)
  const [zipStateName, setZipStateName] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    projectType: 'residential'
  })

  // Real-time zip code availability check
  useEffect(() => {
    if (formData.zip.length >= 3) {
      const stateAbbrev = getStateByZip(formData.zip)
      if (stateAbbrev) {
        const status = getServiceStatus(stateAbbrev)
        const info = getStateInfo(stateAbbrev)
        const meta = ALL_US_STATES.find(s => s.abbreviation === stateAbbrev)
        setZipStatus(status)
        setZipStateName(info?.name || meta?.name || stateAbbrev)
      } else {
        setZipStatus('waiting-list')
        setZipStateName('your area')
      }
    } else {
      setZipStatus(null)
      setZipStateName('')
    }
  }, [formData.zip])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Replace with actual API call
    console.log('Quote Request:', { ...formData, serviceStatus: zipStatus, stateName: zipStateName })
    
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  if (submitted) {
    return (
      <LeadFormLayout
        title="Quote Requested!"
        description={
          zipStatus === 'active'
            ? `Great news — we serve ${zipStateName}! A certified dealer will contact you within 24 hours.`
            : `We've received your request. We'll notify you when Compoxen is available in ${zipStateName}.`
        }
      >
        <div className="text-center py-8">
          <CheckCircle size={48} className="text-green-400 mx-auto mb-4" />
          <p className="text-white/70 text-sm">
            Check your email for confirmation details.
          </p>
        </div>
      </LeadFormLayout>
    )
  }

  return (
    <LeadFormLayout
      title="Get a Quote"
      description="Tell us about your project and we'll connect you with a certified dealer. Designed in USA."
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input 
          id="name"
          label="Full Name" 
          placeholder="Full Name"
          value={formData.name}
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
        <div className="grid grid-cols-2 gap-3">
          <Input 
            id="phone"
            type="tel"
            label="Phone" 
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Input 
            id="zip"
            label="Zip Code" 
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
        </div>

        {/* Real-time availability indicator */}
        {zipStatus && (
          <div className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${
            zipStatus === 'active'
              ? 'bg-green-500/15 text-green-300 border border-green-500/20'
              : zipStatus === 'coming-soon'
              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
              : 'bg-white/5 text-white/60 border border-white/10'
          }`}>
            {zipStatus === 'active' && <><CheckCircle size={14} /> We serve {zipStateName}! A dealer will be assigned.</>}
            {zipStatus === 'coming-soon' && <><Clock size={14} /> {zipStateName} is coming soon. We&apos;ll add you to the priority list.</>}
            {zipStatus === 'waiting-list' && <><MapPin size={14} /> Not in service area yet. Your request helps us prioritize expansion.</>}
          </div>
        )}

        <Input
          as="select"
          id="projectType"
          label="Project Type"
          value={formData.projectType}
          onChange={handleChange}
        >
          <option value="residential" className="bg-brand-dark">Residential</option>
          <option value="commercial" className="bg-brand-dark">Commercial</option>
          <option value="hoa" className="bg-brand-dark">HOA / Multi-Family</option>
        </Input>

        <Button 
          type="submit" 
          className="w-full mt-2" 
          variant="primary"
          size="lg"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Get Quote'}
          {!loading && <ArrowRight size={18} />}
        </Button>

        <p className="text-white/30 text-xs text-center mt-3">
          🇺🇸 Designed in USA • Currently Serving UT, CO, ID, CA
        </p>
      </form>
    </LeadFormLayout>
  )
}
