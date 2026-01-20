"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { supabase } from "@/lib/supabase"
import { Calendar, Clock, Plus, Trash2 } from "lucide-react"

interface BookingSettingsFormProps {
  open: boolean
  onClose: () => void
  onSave: () => void
}

export function BookingSettingsForm({ open, onClose, onSave }: BookingSettingsFormProps) {
  const [timeSlots, setTimeSlots] = useState<any[]>([])
  const [newSlot, setNewSlot] = useState({ date: '', time: '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      fetchTimeSlots()
    }
  }, [open])

  const fetchTimeSlots = async () => {
    try {
      const { data, error } = await supabase
        .from('time_slots')
        .select('*')
        .order('date', { ascending: true })
        .order('time', { ascending: true })

      if (error) throw error
      setTimeSlots(data || [])
    } catch (error) {
      console.error('Error fetching time slots:', error)
    }
  }

  const addTimeSlot = async () => {
    if (!newSlot.date || !newSlot.time) return

    try {
      setLoading(true)
      const { error } = await supabase
        .from('time_slots')
        .insert([{
          date: newSlot.date,
          time: newSlot.time,
          available: true
        }])

      if (error) throw error
      
      setNewSlot({ date: '', time: '' })
      fetchTimeSlots()
    } catch (error) {
      console.error('Error adding time slot:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteTimeSlot = async (id: string) => {
    try {
      const { error } = await supabase
        .from('time_slots')
        .delete()
        .eq('id', id)

      if (error) throw error
      fetchTimeSlots()
    } catch (error) {
      console.error('Error deleting time slot:', error)
    }
  }

  const toggleAvailability = async (id: string, available: boolean) => {
    try {
      const { error } = await supabase
        .from('time_slots')
        .update({ available: !available })
        .eq('id', id)

      if (error) throw error
      fetchTimeSlots()
    } catch (error) {
      console.error('Error updating availability:', error)
    }
  }

  const generateWeekSlots = async () => {
    const today = new Date()
    const slots = []
    const times = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00']

    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      const dateStr = date.toISOString().split('T')[0]

      for (const time of times) {
        slots.push({ date: dateStr, time, available: true })
      }
    }

    try {
      setLoading(true)
      const { error } = await supabase
        .from('time_slots')
        .insert(slots)

      if (error) throw error
      fetchTimeSlots()
    } catch (error) {
      console.error('Error generating slots:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-[var(--font-display)] text-2xl font-light">
            Booking Settings & Time Slots
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Add New Time Slot */}
          <Card className="p-4">
            <h3 className="font-[var(--font-display)] text-lg font-light mb-4">Add Time Slot</h3>
            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <Label>Date</Label>
                <Input
                  type="date"
                  value={newSlot.date}
                  onChange={(e) => setNewSlot({...newSlot, date: e.target.value})}
                />
              </div>
              <div className="flex-1">
                <Label>Time</Label>
                <Input
                  type="time"
                  value={newSlot.time}
                  onChange={(e) => setNewSlot({...newSlot, time: e.target.value})}
                />
              </div>
              <Button onClick={addTimeSlot} disabled={loading}>
                <Plus className="w-4 h-4 mr-2" />
                Add Slot
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-4">
            <h3 className="font-[var(--font-display)] text-lg font-light mb-4">Quick Actions</h3>
            <Button onClick={generateWeekSlots} disabled={loading} variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Generate Next 7 Days (9AM-5PM)
            </Button>
          </Card>

          {/* Time Slots List */}
          <Card className="p-4">
            <h3 className="font-[var(--font-display)] text-lg font-light mb-4">
              All Time Slots ({timeSlots.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-h-96 overflow-y-auto">
              {timeSlots.map((slot) => (
                <div key={slot.id} className={`p-3 border rounded ${slot.available ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-[var(--font-body)] text-sm font-medium">{slot.date}</p>
                      <p className="font-[var(--font-body)] text-xs text-muted-foreground">{slot.time}</p>
                      {slot.booked_by && (
                        <p className="font-[var(--font-body)] text-xs text-red-600">Booked</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <Badge 
                        variant={slot.available ? 'default' : 'secondary'} 
                        className="font-[var(--font-body)] text-xs cursor-pointer"
                        onClick={() => !slot.booked_by && toggleAvailability(slot.id, slot.available)}
                      >
                        {slot.available ? 'Available' : 'Unavailable'}
                      </Badge>
                      {!slot.booked_by && (
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => deleteTimeSlot(slot.id)}
                          className="h-6 w-6 p-0"
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          
          <div className="flex gap-2">
            <Button onClick={() => { onSave(); onClose(); }} className="flex-1">
              Done
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}