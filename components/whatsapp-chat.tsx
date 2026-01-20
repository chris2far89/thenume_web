"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "27760401540"
    const message = "Hi! I'd like to book a consultation or learn more about your treatments."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
    </button>
  )
}