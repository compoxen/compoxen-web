'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import LeadFormLayout from '@/components/layouts/LeadFormLayout'

export default function DealerKitPage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    state: ''
  })

  // US States List
  const states = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
    'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
    'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
  ]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    console.log('Submitting Dealer Request:', formData)
    setTimeout(() => {
      setLoading(false)
      alert('Request sent successfully!')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  return (
    <LeadFormLayout
      title="Request Dealer Kit"
      description="Get product details, pricing, and installation specifications."
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
          {states.map((s) => (
            <option key={s} value={s} className="bg-brand-dark text-white">
              {s}
            </option>
          ))}
        </Input>

        <Button 
          type="submit" 
          className="w-full mt-4" 
          variant="primary"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Request Kit'}
          {!loading && <ArrowRight size={20} />}
        </Button>
      </form>
      
      <p className="text-center text-white/40 text-sm mt-4">
        Exclusively for licensed contractors and distributors.
      </p>
    </LeadFormLayout>
  )
}
