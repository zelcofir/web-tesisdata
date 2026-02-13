"use client"

import { useState, useEffect, useCallback } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  university: string
  text: string
  rating: number
  plan: string
}

const testimonials: Testimonial[] = [
  {
    name: "Dra. Carmen Quispe",
    role: "Médica Residente de Cardiología",
    university: "Universidad Nacional Mayor de San Marcos",
    text: "TesisData fue clave para mi tesis de especialidad. Me entregaron las curvas ROC y la regresión logística en formato APA impecable. El jurado felicitó la calidad del análisis estadístico.",
    rating: 5,
    plan: "Plan Elite",
  },
  {
    name: "Mg. Luis Fernández",
    role: "Maestrando en Salud Pública",
    university: "Universidad Peruana Cayetano Heredia",
    text: "Necesitaba OR e intervalos de confianza para mi publicación. El equipo de TesisData no solo me entregó las tablas, sino que me explicó cada resultado. Publiqué en revista indexada.",
    rating: 5,
    plan: "Plan Investigador",
  },
  {
    name: "Est. María Torres",
    role: "Tesista de Enfermería",
    university: "Universidad Nacional de Trujillo",
    text: "Tenía mis datos desordenados y no sabía cómo procesarlos. Con el Plan Tesis obtuve tablas sociodemográficas y pruebas Chi-cuadrado perfectas. Sustenté con total confianza.",
    rating: 5,
    plan: "Plan Tesis",
  },
  {
    name: "Dr. Jorge Huamán",
    role: "Investigador Asociado",
    university: "Instituto Nacional de Salud",
    text: "Trabajo con TesisData desde hace 2 años para mis publicaciones. La calidad del código en R es excepcional y siempre puedo reproducir los resultados. Son los mejores del mercado.",
    rating: 5,
    plan: "Plan Elite",
  },
  {
    name: "Est. Alejandra Vega",
    role: "Tesista de Obstetricia",
    university: "Universidad Nacional Federico Villarreal",
    text: "El Plan Semilla me salvó semanas de trabajo. Limpiaron mi base de datos de más de 300 registros en 2 días. Datos listos para analizar sin errores.",
    rating: 5,
    plan: "Plan Semilla",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const t = testimonials[current]

  return (
    <section id="testimonios" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-4 border-secondary/30 bg-secondary/10 text-secondary">
            Casos de Éxito
          </Badge>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            <span className="text-balance">
              Lo que dicen nuestros clientes
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            Investigadores y tesistas de las mejores universidades del país
            confían en TesisData.
          </p>
        </div>

        <div className="mt-14">
          <Card className="mx-auto max-w-3xl border-border bg-card">
            <CardContent className="px-6 py-8 sm:px-10 sm:py-10">
              <div className="flex flex-col items-center text-center">
                <Quote className="mb-6 h-8 w-8 text-secondary/40" />

                <p className="text-base leading-relaxed text-foreground sm:text-lg">
                  {`"${t.text}"`}
                </p>

                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {t.university}
                  </p>
                  <Badge
                    variant="outline"
                    className="mt-2 border-secondary/30 text-xs text-secondary"
                  >
                    {t.plan}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current
                      ? "w-6 bg-secondary"
                      : "w-2 bg-border hover:bg-muted-foreground/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-secondary hover:text-secondary"
              aria-label="Testimonio siguiente"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
