"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20TesisData"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/tesisdata-logo.png"
            alt="TesisData Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="font-heading text-xl font-bold text-primary">
            TesisData
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              href="#servicios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#productos"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#testimonios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#precios"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Precios
            </a>
          </li>
          <li>
            <a
              href="#comunidad"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Comunidad
            </a>
          </li>
        </ul>

        <div className="hidden md:block">
          <Button asChild className="bg-[#25D366] text-white hover:bg-[#1ebe57]">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </a>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-card px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            <li>
              <a
                href="#servicios"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#productos"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#precios"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Precios
              </a>
            </li>
            <li>
              <a
                href="#comunidad"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Comunidad
              </a>
            </li>
            <li>
              <Button
                asChild
                className="w-full bg-[#25D366] text-white hover:bg-[#1ebe57]"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Cotizar por WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
