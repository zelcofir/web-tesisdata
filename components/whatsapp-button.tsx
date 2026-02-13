"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/51999913119?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20TesisData"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
