import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary px-4 py-12 text-primary-foreground">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/tesisdata-logo.png"
                alt="TesisData Logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md bg-primary-foreground/10 p-1"
              />
              <span className="font-heading text-lg font-bold text-primary-foreground">
                TesisData
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/60">
              Consultoría estadística de alto nivel con R Studio para tesis y publicaciones científicas.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Enlaces rápidos
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#servicios"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#testimonios"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Testimonios
                </a>
              </li>
              <li>
                <a
                  href="#precios"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Precios
                </a>
              </li>
              <li>
                <a
                  href="#comunidad"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Comunidad
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  contacto@tesisdata.com
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  +51 999 999 999
                </span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  Lima, Perú
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            {"© 2026 TesisData. Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
