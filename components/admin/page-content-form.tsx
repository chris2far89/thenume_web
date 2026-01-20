"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"

interface PageContentFormProps {
  content?: any
  open: boolean
  onClose: () => void
  onSave: () => void
}

export function PageContentForm({ content, open, onClose, onSave }: PageContentFormProps) {
  const [formData, setFormData] = useState({
    page_key: content?.page_key || '',
    title: content?.title || '',
    subtitle: content?.subtitle || '',
    content: content?.content || '',
    image_url: content?.image_url || ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (content) {
        // Update existing content
        await supabase
          .from('page_content')
          .update(formData)
          .eq('id', content.id)
      } else {
        // Insert new content
        await supabase
          .from('page_content')
          .insert([formData])
      }
      
      onSave()
      onClose()
    } catch (error) {
      console.error('Error saving page content:', error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-[var(--font-display)] text-2xl font-light">
            {content ? 'Edit Page Content' : 'Add Page Content'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Page Key</Label>
            <Input
              placeholder="e.g., hero, about, services"
              value={formData.page_key}
              onChange={(e) => setFormData({...formData, page_key: e.target.value})}
              required
            />
          </div>
          
          <div>
            <Label>Title</Label>
            <Input
              placeholder="Page section title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>
          
          <div>
            <Label>Subtitle</Label>
            <Input
              placeholder="Page section subtitle"
              value={formData.subtitle}
              onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
            />
          </div>
          
          <div>
            <Label>Content</Label>
            <Textarea
              placeholder="Page section content"
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              rows={6}
            />
          </div>
          
          <div>
            <Label>Image URL</Label>
            <Input
              placeholder="/image.jpg"
              value={formData.image_url}
              onChange={(e) => setFormData({...formData, image_url: e.target.value})}
            />
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">Save Content</Button>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}