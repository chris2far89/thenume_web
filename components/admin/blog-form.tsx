"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface BlogFormProps {
  blog?: any
  open: boolean
  onClose: () => void
  onSave: (blog: any) => void
}

export function BlogForm({ blog, open, onClose, onSave }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    excerpt: blog?.excerpt || '',
    content: blog?.content || '',
    author_name: blog?.author_name || '',
    author_credentials: blog?.author_credentials || '',
    featured_image: blog?.featured_image || '',
    published: blog?.published ?? false
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleImageUpload = async (file: File) => {
    setUploading(true)
    try {
      // Simple image upload - you can replace with your preferred service
      const formData = new FormData()
      formData.append('file', file)
      
      // For now, just use a placeholder URL
      const imageUrl = `/blog-images/${file.name}`
      setFormData(prev => ({ ...prev, featured_image: imageUrl }))
    } catch (error) {
      console.error('Image upload failed:', error)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const url = '/api/admin/blogs'
    const method = blog ? 'PUT' : 'POST'
    const payload = blog ? { id: blog.id, ...formData } : formData
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    
    if (response.ok) {
      onSave(formData)
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-[var(--font-display)] text-2xl font-light">
            {blog ? 'Edit Blog Post' : 'Add Blog Post'}
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
          
          <Textarea
            placeholder="Excerpt"
            value={formData.excerpt}
            onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
            rows={3}
          />
          
          <Textarea
            placeholder="Content"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            rows={10}
            required
          />
          
          <Input
            placeholder="Author Name"
            value={formData.author_name}
            onChange={(e) => setFormData({...formData, author_name: e.target.value})}
            required
          />
          
          <Input
            placeholder="Author Credentials"
            value={formData.author_credentials}
            onChange={(e) => setFormData({...formData, author_credentials: e.target.value})}
          />
          
          <div className="space-y-2">
            <Input
              placeholder="Featured Image URL"
              value={formData.featured_image}
              onChange={(e) => setFormData({...formData, featured_image: e.target.value})}
            />
            <div className="text-sm text-muted-foreground">Or upload image:</div>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  setImageFile(file)
                  handleImageUpload(file)
                }
              }}
              disabled={uploading}
            />
            {uploading && <div className="text-sm text-muted-foreground">Uploading...</div>}
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({...formData, published: checked})}
            />
            <label className="text-sm">Published</label>
          </div>
          
          <div className="flex gap-2">
            <Button type="submit" className="flex-1">Save</Button>
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}