import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BarChart3, FileText, FlaskConical } from "lucide-react"

const WHATSAPP_URL = "https://wa.me/51999913119?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20TesisData"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary px-4 py-20 lg:py-32">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-6 border-secondary/30 bg-secondary/10 text-secondary">
            Consultoría estadística especializada
          </Badge>

          <h1 className="font-heading text-3xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-balance">
              Tus datos no mienten,{" "}
              <span className="text-secondary">
                nosotros los hacemos hablar
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/70 md:text-lg">
            Consultoría estadística de alto nivel con R Studio para tesis y
            publicaciones científicas. Rigor académico en formato APA/Vancouver.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Solicitar Cotización
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href="#precios">Ver Planes</a>
            </Button>
          </div>

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-4">
              <BarChart3 className="h-5 w-5 text-secondary" />
              <span className="text-2xl font-bold text-primary-foreground">500+</span>
              <span className="text-xs text-primary-foreground/60">Tesis Asesoradas</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-4">
              <FileText className="h-5 w-5 text-secondary" />
              <span className="text-2xl font-bold text-primary-foreground">APA/Vancouver</span>
              <span className="text-xs text-primary-foreground/60">Formatos Soportados</span>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-4">
              <FlaskConical className="h-5 w-5 text-secondary" />
              <span className="text-2xl font-bold text-primary-foreground">R Studio</span>
              <span className="text-xs text-primary-foreground/60">Herramienta Principal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
