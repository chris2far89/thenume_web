"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { X, Plus } from "lucide-react"

interface ServiceFormProps {
  service?: any
  open: boolean
  onClose: () => void
  onSave: (service: any) => void
}

const categories = [
  "Consultation",
  "Body Sculpting", 
  "Facial Treatments",
  "Men's Treatments",
  "Skin Treatments",
  "Hair & Scalp",
  "Wellness",
  "Fungal Treatments"
]

export function ServiceForm({ service, open, onClose, onSave }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    id: service?.id || '',
    title: service?.title || '',
    category: service?.category || '',
    price_display: service?.price_display || service?.price || '',
    description: service?.description || '',
    benefits: service?.benefits || [''],
    details: service?.details || [''],
    sessions: service?.sessions || '',
    results: service?.results || '',
    areas: service?.areas || [],
    image_url: service?.image_url || '',
    active: service?.active ?? true,
    bookingOptions: service?.bookingOptions || [{ id: '', name: '', price: 0, duration: '' }]
  })

  const addBenefit = () => {
    setFormData({...formData, benefits: [...formData.benefits, '']})
  }

  const removeBenefit = (index: number) => {
    setFormData({...formData, benefits: formData.benefits.filter((_, i) => i !== index)})
  }

  const updateBenefit = (index: number, value: string) => {
    const newBenefits = [...formData.benefits]
    newBenefits[index] = value
    setFormData({...formData, benefits: newBenefits})
  }

  const addDetail = () => {
    setFormData({...formData, details: [...formData.details, '']})
  }

  const removeDetail = (index: number) => {
    setFormData({...formData, details: formData.details.filter((_, i) => i !== index)})
  }

  const updateDetail = (index: number, value: string) => {
    const newDetails = [...formData.details]
    newDetails[index] = value
    setFormData({...formData, details: newDetails})
  }

  const addBookingOption = () => {
    setFormData({...formData, bookingOptions: [...formData.bookingOptions, { id: '', name: '', price: 0, duration: '' }]})
  }

  const removeBookingOption = (index: number) => {
    setFormData({...formData, bookingOptions: formData.bookingOptions.filter((_, i) => i !== index)})
  }

  const updateBookingOption = (index: number, field: string, value: any) => {
    const newOptions = [...formData.bookingOptions]
    newOptions[index] = { ...newOptions[index], [field]: value }
    setFormData({...formData, bookingOptions: newOptions})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const url = '/api/admin/services'
    const method = service ? 'PUT' : 'POST'
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        benefits: formData.benefits.filter(b => b.trim()),
        details: formData.details.filter(d => d.trim()),
        areas: formData.areas.filter(a => a.trim()),
        bookingOptions: formData.bookingOptions.filter(o => o.name && o.price > 0)
      })
    })
    
    if (response.ok) {
      onSave(formData)
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-[var(--font-display)] text-2xl font-light">
            {service ? 'Edit Service' : 'Add Service'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Service ID</Label>
              <Input
                placeholder="service-id"
                value={formData.id}
                onChange={(e) => setFormData({...formData, id: e.target.value})}
                required
              />
            </div>
            
            <div>
              <Label>Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <Label>Service Title</Label>
            <Input
              placeholder="Service Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label>Price Display</Label>
            <Input
              placeholder="e.g., R800 or Virtual: R250 | In-Person: R395"
              value={formData.price_display}
              onChange={(e) => setFormData({...formData, price_display: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label>Description</Label>
            <Textarea
              placeholder="Service description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              rows={3}
            />
          </div>

          <Separator />
          
          <div>
            <Label className="flex items-center justify-between">
              Benefits
              <Button type="button" size="sm" variant="outline" onClick={addBenefit}>
                <Plus className="w-4 h-4" />
              </Button>
            </Label>
            <div className="space-y-2">
              {formData.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Benefit description"
                    value={benefit}
                    onChange={(e) => updateBenefit(index, e.target.value)}
                  />
                  {formData.benefits.length > 1 && (
                    <Button type="button" size="sm" variant="outline" onClick={() => removeBenefit(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Label className="flex items-center justify-between">
              Treatment Details
              <Button type="button" size="sm" variant="outline" onClick={addDetail}>
                <Plus className="w-4 h-4" />
              </Button>
            </Label>
            <div className="space-y-2">
              {formData.details.map((detail, index) => (
                <div key={index} className="flex gap-2">
                  <Textarea
                    placeholder="Treatment detail"
                    value={detail}
                    onChange={(e) => updateDetail(index, e.target.value)}
                    rows={2}
                  />
                  {formData.details.length > 1 && (
                    <Button type="button" size="sm" variant="outline" onClick={() => removeDetail(index)}>
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Sessions Info (Optional)</Label>
              <Input
                placeholder="e.g., 8-12 sessions recommended"
                value={formData.sessions}
                onChange={(e) => setFormData({...formData, sessions: e.target.value})}
              />
            </div>
            
            <div>
              <Label>Results Info (Optional)</Label>
              <Input
                placeholder="e.g., Visible after 3-5 sessions"
                value={formData.results}
                onChange={(e) => setFormData({...formData, results: e.target.value})}
              />
            </div>
          </div>
          
          <div>
            <Label>Image URL</Label>
            <Input
              placeholder="/service-image.png"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
            />
          </div>

          <Separator />
          
          <div>
            <Label className="flex items-center justify-between">
              Booking Options
              <Button type="button" size="sm" variant="outline" onClick={addBookingOption}>
                <Plus className="w-4 h-4" />
              </Button>
            </Label>
            <div className="space-y-3">
              {formData.bookingOptions.map((option, index) => (
                <div key={index} className="grid grid-cols-4 gap-2 p-3 border rounded">
                  <Input
                    placeholder="Option ID"
                    value={option.id}
                    onChange={(e) => updateBookingOption(index, 'id', e.target.value)}
                  />
                  <Input
                    placeholder="Option Name"
                    value={option.name}
                    onChange={(e) => updateBookingOption(index, 'name', e.target.value)}
                  />
                  <Input
                    type="number"
                    placeholder="Price"
                    value={option.price}
                    onChange={(e) => updateBookingOption(index, 'price', parseInt(e.target.value) || 0)}
                  />
                  <div className="flex gap-1">
                    <Input
                      placeholder="Duration"
                      value={option.duration}
                      onChange={(e) => updateBookingOption(index, 'duration', e.target.value)}
                    />
                    {formData.bookingOptions.length > 1 && (
                      <Button type="button" size="sm" variant="outline" onClick={() => removeBookingOption(index)}>
                        <X className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">Save Service</Button>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}