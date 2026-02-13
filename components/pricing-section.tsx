import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const WHATSAPP_URL = "https://wa.me/51999999999?text=Hola%2C%20quiero%20cotizar%20un%20servicio%20de%20TesisData"

interface PricingPlan {
  name: string
  emoji: string
  price: string
  suffix?: string
  description: string
  features: string[]
  popular?: boolean
}

const plans: PricingPlan[] = [
  {
    name: "Plan Semilla",
    emoji: "🌱",
    price: "S/ 200",
    description: "Limpieza y preparación de datos",
    features: [
      "Limpieza de datos (Data Cleaning)",
      "Traslado de datos a R",
      "Manejo de duplicados y datos perdidos",
      "Recodificación de escalas",
    ],
  },
  {
    name: "Plan Tesis",
    emoji: "🎓",
    price: "S/ 560",
    description: "Descriptivo + Bivariado",
    popular: true,
    features: [
      "Todo lo del Plan Semilla",
      "Pruebas de Normalidad",
      "Tabla sociodemográfica",
      "Cruce de variables (Chi2, t-test)",
      "Formato APA/Vancouver",
    ],
  },
  {
    name: "Plan Investigador",
    emoji: "🔬",
    price: "S/ 960",
    description: "Asociación + Medidas de riesgo",
    features: [
      "Todo lo del Plan Tesis",
      "OR/PR (Odds Ratio / Razón de prevalencia)",
      "Regresión simple e Intervalos de confianza",
      "Ideal para publicaciones científicas",
    ],
  },
  {
    name: "Plan Elite",
    emoji: "🏆",
    price: "S/ 1,260",
    suffix: "+",
    description: "Diagnóstico o Multivariado",
    features: [
      "Todo lo del Plan Investigador",
      "Sensibilidad / Especificidad",
      "Curvas ROC",
      "Regresión logística múltiple",
      "Especial para residentado médico",
    ],
  },
]

export function PricingSection() {
  return (
    <section id="precios" className="bg-muted/50 px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            <span className="text-balance">
              Planes diseñados para cada etapa de tu investigación
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            Elige el plan que mejor se adapte a tu nivel de análisis. Todos
            incluyen código en R documentado.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col transition-all hover:shadow-lg",
                plan.popular &&
                  "border-2 border-secondary shadow-md shadow-secondary/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground">
                    Más Solicitado
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <div className="mb-2 text-3xl">{plan.emoji}</div>
                <CardTitle className="font-heading text-lg text-foreground">
                  {plan.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="font-heading text-3xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.suffix && (
                    <span className="text-xl font-bold text-foreground">
                      {plan.suffix}
                    </span>
                  )}
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  <a
                    href={`${WHATSAPP_URL}%20-%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Cotizar Ahora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
