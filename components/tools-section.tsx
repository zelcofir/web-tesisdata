import { Badge } from "@/components/ui/badge"
import { Code2, Repeat, ShieldCheck, Microscope } from "lucide-react"

const features = [
  {
    icon: Code2,
    title: "Precisión Algorítmica",
    description:
      "Scripts personalizados en R que garantizan resultados reproducibles y verificables.",
  },
  {
    icon: Repeat,
    title: "Reproducibilidad Total",
    description:
      "Cada análisis incluye código documentado para que puedas replicar los resultados.",
  },
  {
    icon: ShieldCheck,
    title: "Rigor Académico",
    description:
      "Tablas y gráficos en formato APA/Vancouver listos para tu tesis o publicación.",
  },
  {
    icon: Microscope,
    title: "Análisis Avanzado",
    description:
      "Desde descriptivos hasta regresión logística múltiple y curvas ROC.",
  },
]

export function ToolsSection() {
  return (
    <section id="servicios" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-4 border-secondary/30 bg-secondary/10 text-secondary">
            Powered by R Studio
          </Badge>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            <span className="text-balance">
              Tecnología de nivel investigador
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
            Utilizamos R Studio como herramienta principal para ofrecer
            precisión algorítmica y reproducibilidad en cada análisis
            estadístico.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary/40 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <feature.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
