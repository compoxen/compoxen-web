'use client'

import { FormEvent, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import LeadFormLayout from '@/components/layouts/LeadFormLayout'

export default function GetQuotePage() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    projectType: 'residential'
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    console.log('Submitting Quote Request:', formData)
    setTimeout(() => {
      setLoading(false)
      alert('Quote request sent!')
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  return (
    <LeadFormLayout
      title="Get a Quote"
      description="Tell us about your project and we'll connect you with a certified dealer."
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
      </form>
    </LeadFormLayout>
  )
}
