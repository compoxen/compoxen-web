'use client'

import { FormEvent, useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import LeadFormLayout from '@/components/layouts/LeadFormLayout'
import { isUtahZip } from '@/lib/constants'

type ZipStatus = 'utah' | 'outside-utah' | null

export default function GetQuotePage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [zipStatus, setZipStatus] = useState<ZipStatus>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    projectType: 'residential'
  })

  // Real-time zip code Utah check
  useEffect(() => {
    if (formData.zip.length >= 3) {
      setZipStatus(isUtahZip(formData.zip) ? 'utah' : 'outside-utah')
    } else {
      setZipStatus(null)
    }
  }, [formData.zip])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // TODO: Replace with actual API call
    console.log('Quote Request:', { ...formData, zipStatus })
    
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
          zipStatus === 'utah'
            ? "We'll reply within 24 hours with pricing, lead time, and an install window for your Utah project."
            : "We've received your request. We install in Utah only, but we can ship Compoxen material anywhere in the continental U.S. We'll be in touch shortly."
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
      description="Tell us about your project. Compoxen installs across all of Utah and ships material nationwide."
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
          <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium ${
            zipStatus === 'utah'
              ? 'bg-green-500/10 text-green-300 border border-green-500/15'
              : 'bg-white/4 text-white/50 border border-white/6'
          }`}>
            {zipStatus === 'utah' && <><CheckCircle size={14} /> Utah ZIP confirmed — we install here. Expect a quote within 24 hours.</>}
            {zipStatus === 'outside-utah' && <><MapPin size={14} /> Outside Utah. We can&apos;t install, but we can ship Compoxen material to you.</>}
          </div>
        )}

        <Input
          as="select"
          id="projectType"
          label="Project Type"
          value={formData.projectType}
          onChange={handleChange}
        >
          <option value="residential" className="bg-enterprise-950">Residential install</option>
          <option value="commercial" className="bg-enterprise-950">Commercial install</option>
          <option value="hoa" className="bg-enterprise-950">HOA / Multi-Family</option>
          <option value="material-only" className="bg-enterprise-950">Material only (ships nationwide)</option>
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

        <p className="text-white/20 text-xs text-center mt-3">
          Compoxen · Lehi, Utah · Statewide install · Nationwide material
        </p>
      </form>
    </LeadFormLayout>
  )
}
