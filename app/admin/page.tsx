"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, X, Eye, Edit, Trash2, Plus, Clock, Calendar } from "lucide-react"
import { ServiceForm } from "@/components/admin/service-form"
import { BlogForm } from "@/components/admin/blog-form"
import { PageContentForm } from "@/components/admin/page-content-form"
import { BookingSettingsForm } from "@/components/admin/booking-settings-form"

export default function AdminDashboard() {
  const [bookings, setBookings] = useState([])
  const [services, setServices] = useState([])
  const [blogs, setBlogs] = useState([])
  const [pageContent, setPageContent] = useState([])
  const [timeSlots, setTimeSlots] = useState([])
  const [loading, setLoading] = useState(true)
  const [serviceFormOpen, setServiceFormOpen] = useState(false)
  const [blogFormOpen, setBlogFormOpen] = useState(false)
  const [pageContentFormOpen, setPageContentFormOpen] = useState(false)
  const [bookingSettingsOpen, setBookingSettingsOpen] = useState(false)
  const [editingService, setEditingService] = useState(null)
  const [editingBlog, setEditingBlog] = useState(null)
  const [editingPageContent, setEditingPageContent] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [bookingsRes, servicesRes, blogsRes, pageContentRes, timeSlotsRes] = await Promise.all([
        fetch('/api/bookings').then(res => res.json()),
        supabase.from('services').select('*').order('created_at', { ascending: false }),
        supabase.from('blog_posts').select('*').order('created_at', { ascending: false }),
        supabase.from('page_content').select('*').order('page_key'),
        supabase.from('time_slots').select('*').order('date', { ascending: true })
      ])
      
      setBookings(bookingsRes.success ? bookingsRes.bookings : [])
      setServices(servicesRes.data || [])
      setBlogs(blogsRes.data || [])
      setPageContent(pageContentRes.data || [])
      setTimeSlots(timeSlotsRes.data || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const updateBookingStatus = async (id: string, status: string) => {
    try {
      await supabase.from('bookings').update({ status }).eq('id', id)
      fetchData()
    } catch (error) {
      console.error('Error updating booking:', error)
    }
  }

  const deleteItem = async (table: string, id: string) => {
    try {
      if (table === 'services') {
        await fetch(`/api/admin/services?id=${id}`, { method: 'DELETE' })
      } else if (table === 'blog_posts') {
        await fetch(`/api/admin/blogs?id=${id}`, { method: 'DELETE' })
      }
      fetchData()
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }

  const openServiceForm = (service = null) => {
    setEditingService(service)
    setServiceFormOpen(true)
  }

  const openBlogForm = (blog = null) => {
    setEditingBlog(blog)
    setBlogFormOpen(true)
  }

  const openPageContentForm = (content = null) => {
    setEditingPageContent(content)
    setPageContentFormOpen(true)
  }

  if (loading) return (
    <div className="min-h-screen bg-card flex items-center justify-center">
      <div className="font-[var(--font-display)] text-2xl font-light">Loading...</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-card p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-[var(--font-display)] text-4xl font-light text-foreground">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => window.location.href = '/admin/login'}>Logout</Button>
        </div>
        
        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-background border border-border">
            <TabsTrigger value="bookings" className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Bookings</TabsTrigger>
            <TabsTrigger value="services" className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Services</TabsTrigger>
            <TabsTrigger value="blogs" className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Blog Posts</TabsTrigger>
            <TabsTrigger value="content" className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Page Content</TabsTrigger>
            <TabsTrigger value="settings" className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Booking Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground">Bookings</h2>
            </div>
            <div className="grid gap-4">
              {bookings.length === 0 ? (
                <Card className="p-8 text-center border border-border">
                  <p className="font-[var(--font-body)] text-muted-foreground">No bookings found</p>
                </Card>
              ) : (
                bookings.map((booking: any) => (
                  <Card key={booking.id} className="p-6 border border-border bg-background">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-[var(--font-display)] text-xl font-light text-foreground">{booking.service_name}</h3>
                        <p className="font-[var(--font-body)] text-sm text-muted-foreground">{booking.full_name} • {booking.email}</p>
                        <p className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground">{booking.date} at {booking.time}</p>
                        <Badge variant={booking.status === 'pending' ? 'secondary' : 'default'} className="font-[var(--font-body)] text-xs">
                          {booking.status}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        {booking.status === 'pending' && (
                          <>
                            <Button size="sm" onClick={() => updateBookingStatus(booking.id, 'confirmed')} className="bg-foreground text-background hover:bg-foreground/90">
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => updateBookingStatus(booking.id, 'cancelled')}>
                              <X className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground">Services</h2>
              <Button onClick={() => openServiceForm()} className="bg-foreground text-background hover:bg-foreground/90">
                <Plus className="w-4 h-4 mr-2" />
                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Add Service</span>
              </Button>
            </div>
            <div className="grid gap-4">
              {services.length === 0 ? (
                <Card className="p-8 text-center border border-border">
                  <p className="font-[var(--font-body)] text-muted-foreground">No services found</p>
                </Card>
              ) : (
                services.map((service: any) => (
                  <Card key={service.id} className="p-6 border border-border bg-background">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-[var(--font-display)] text-xl font-light text-foreground">{service.title}</h3>
                        <p className="font-[var(--font-body)] text-sm text-muted-foreground">{service.category}</p>
                        <p className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground">R{service.price} • {service.duration}</p>
                        <Badge variant={service.active ? 'default' : 'secondary'} className="font-[var(--font-body)] text-xs">
                          {service.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-border" onClick={() => openServiceForm(service)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteItem('services', service.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="blogs" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground">Blog Posts</h2>
              <Button onClick={() => openBlogForm()} className="bg-foreground text-background hover:bg-foreground/90">
                <Plus className="w-4 h-4 mr-2" />
                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Add Post</span>
              </Button>
            </div>
            <div className="grid gap-4">
              {blogs.length === 0 ? (
                <Card className="p-8 text-center border border-border">
                  <p className="font-[var(--font-body)] text-muted-foreground">No blog posts found</p>
                </Card>
              ) : (
                blogs.map((blog: any) => (
                  <Card key={blog.id} className="p-6 border border-border bg-background">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-[var(--font-display)] text-xl font-light text-foreground">{blog.title}</h3>
                        <p className="font-[var(--font-body)] text-sm text-muted-foreground">{blog.excerpt}</p>
                        <p className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground">By {blog.author_name}</p>
                        <Badge variant="default" className="font-[var(--font-body)] text-xs">
                          Published
                        </Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-border">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-border" onClick={() => openBlogForm(blog)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteItem('blog_posts', blog.id)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground">Page Content</h2>
              <Button onClick={() => openPageContentForm()} className="bg-foreground text-background hover:bg-foreground/90">
                <Plus className="w-4 h-4 mr-2" />
                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Add Content</span>
              </Button>
            </div>
            <div className="grid gap-4">
              {pageContent.length === 0 ? (
                <Card className="p-8 text-center border border-border">
                  <p className="font-[var(--font-body)] text-muted-foreground">No page content found</p>
                </Card>
              ) : (
                pageContent.map((content: any) => (
                  <Card key={content.id} className="p-6 border border-border bg-background">
                    <div className="flex justify-between items-start">
                      <div className="space-y-2">
                        <h3 className="font-[var(--font-display)] text-xl font-light text-foreground">{content.title || content.page_key}</h3>
                        <p className="font-[var(--font-body)] text-sm text-muted-foreground">{content.subtitle}</p>
                        <p className="font-[var(--font-body)] text-xs tracking-[0.1em] uppercase text-muted-foreground">Page: {content.page_key}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-border" onClick={() => openPageContentForm(content)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="font-[var(--font-display)] text-2xl font-light text-foreground">Booking Settings</h2>
              <Button onClick={() => setBookingSettingsOpen(true)} className="bg-foreground text-background hover:bg-foreground/90">
                <Clock className="w-4 h-4 mr-2" />
                <span className="font-[var(--font-body)] text-xs tracking-[0.15em] uppercase">Manage Time Slots</span>
              </Button>
            </div>
            <div className="grid gap-4">
              <Card className="p-6 border border-border bg-background">
                <h3 className="font-[var(--font-display)] text-xl font-light text-foreground mb-4">Available Time Slots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {timeSlots.slice(0, 12).map((slot: any) => (
                    <div key={slot.id} className={`p-3 border rounded ${slot.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-[var(--font-body)] text-sm font-medium">{slot.date}</p>
                          <p className="font-[var(--font-body)] text-xs text-muted-foreground">{slot.time}</p>
                        </div>
                        <Badge variant={slot.available ? 'default' : 'secondary'} className="font-[var(--font-body)] text-xs">
                          {slot.available ? 'Available' : 'Booked'}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                {timeSlots.length > 12 && (
                  <p className="font-[var(--font-body)] text-xs text-muted-foreground mt-4">Showing first 12 slots. Use "Manage Time Slots" to see all.</p>
                )}
              </Card>
            </div>
          </TabsContent>
        </Tabs>
        
        <ServiceForm
          service={editingService}
          open={serviceFormOpen}
          onClose={() => {
            setServiceFormOpen(false)
            setEditingService(null)
          }}
          onSave={() => fetchData()}
        />
        
        <BlogForm
          blog={editingBlog}
          open={blogFormOpen}
          onClose={() => {
            setBlogFormOpen(false)
            setEditingBlog(null)
          }}
          onSave={() => fetchData()}
        />
        
        <PageContentForm
          content={editingPageContent}
          open={pageContentFormOpen}
          onClose={() => {
            setPageContentFormOpen(false)
            setEditingPageContent(null)
          }}
          onSave={() => fetchData()}
        />
        
        <BookingSettingsForm
          open={bookingSettingsOpen}
          onClose={() => setBookingSettingsOpen(false)}
          onSave={() => fetchData()}
        />
      </div>
    </div>
  )
}