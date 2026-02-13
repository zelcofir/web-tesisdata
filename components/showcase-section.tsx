"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  BarChart,
  Bar,
  ErrorBar,
  Cell,
  Legend,
} from "recharts"

/* ─── ROC curve data (realistic AUC ~0.85) ─── */
const rocData = [
  { fpr: 0, tpr: 0 },
  { fpr: 0.02, tpr: 0.18 },
  { fpr: 0.05, tpr: 0.38 },
  { fpr: 0.08, tpr: 0.52 },
  { fpr: 0.1, tpr: 0.6 },
  { fpr: 0.15, tpr: 0.7 },
  { fpr: 0.2, tpr: 0.78 },
  { fpr: 0.25, tpr: 0.82 },
  { fpr: 0.3, tpr: 0.86 },
  { fpr: 0.4, tpr: 0.9 },
  { fpr: 0.5, tpr: 0.93 },
  { fpr: 0.6, tpr: 0.95 },
  { fpr: 0.7, tpr: 0.97 },
  { fpr: 0.8, tpr: 0.98 },
  { fpr: 0.9, tpr: 0.99 },
  { fpr: 1, tpr: 1 },
]

const diagonalData = [
  { fpr: 0, tpr: 0 },
  { fpr: 1, tpr: 1 },
]

/* ─── OR Forest plot data ─── */
const forestData = [
  { variable: "Diabetes", or: 3.42, lower: 1.85, upper: 6.32, p: "0.001" },
  { variable: "HTA", or: 2.18, lower: 1.24, upper: 3.84, p: "0.007" },
  { variable: "Tabaquismo", or: 1.95, lower: 1.12, upper: 3.39, p: "0.018" },
  { variable: "Obesidad", or: 1.67, lower: 0.89, upper: 3.12, p: "0.112" },
  { variable: "Edad > 60", or: 2.85, lower: 1.56, upper: 5.21, p: "0.001" },
  { variable: "Sedentarismo", or: 1.43, lower: 0.78, upper: 2.62, p: "0.245" },
]

/* ─── OR / PR table data ─── */
const tableData = [
  {
    variable: "Diabetes Mellitus II",
    cases: "45 (62.5%)",
    controls: "18 (25.0%)",
    or: "5.00",
    ic95: "2.45 - 10.21",
    p: "< 0.001",
    significant: true,
  },
  {
    variable: "Hipertensión Arterial",
    cases: "38 (52.8%)",
    controls: "22 (30.6%)",
    or: "2.53",
    ic95: "1.28 - 4.99",
    p: "0.007",
    significant: true,
  },
  {
    variable: "Tabaquismo Activo",
    cases: "28 (38.9%)",
    controls: "15 (20.8%)",
    or: "2.43",
    ic95: "1.15 - 5.12",
    p: "0.019",
    significant: true,
  },
  {
    variable: "Dislipidemia",
    cases: "32 (44.4%)",
    controls: "20 (27.8%)",
    or: "2.08",
    ic95: "1.04 - 4.16",
    p: "0.038",
    significant: true,
  },
  {
    variable: "Obesidad (IMC > 30)",
    cases: "22 (30.6%)",
    controls: "18 (25.0%)",
    or: "1.32",
    ic95: "0.63 - 2.78",
    p: "0.458",
    significant: false,
  },
  {
    variable: "Sedentarismo",
    cases: "25 (34.7%)",
    controls: "20 (27.8%)",
    or: "1.38",
    ic95: "0.68 - 2.82",
    p: "0.373",
    significant: false,
  },
]

/* ─── Tabs ─── */
type Tab = "roc" | "forest" | "table"

const tabs: { id: Tab; label: string; description: string }[] = [
  {
    id: "roc",
    label: "Curva ROC",
    description: "Capacidad diagnóstica del modelo",
  },
  {
    id: "forest",
    label: "Forest Plot OR",
    description: "Odds Ratio con IC 95%",
  },
  {
    id: "table",
    label: "Tabla OR / PR",
    description: "Medidas de asociación",
  },
]

/* ─── Custom tooltip for ROC chart ─── */
function RocTooltip({
  active,
  payload,
}: {
  active?: boolean
  payload?: Array<{ payload: { fpr: number; tpr: number } }>
}) {
  if (!active || !payload || payload.length === 0) return null
  const d = payload[0].payload
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-md">
      <p className="text-xs text-muted-foreground">
        {"1 - Especificidad: "}
        <span className="font-semibold text-foreground">
          {(d.fpr * 100).toFixed(0)}%
        </span>
      </p>
      <p className="text-xs text-muted-foreground">
        {"Sensibilidad: "}
        <span className="font-semibold text-secondary">
          {(d.tpr * 100).toFixed(0)}%
        </span>
      </p>
    </div>
  )
}

/* ─── Main component ─── */
export function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState<Tab>("roc")

  return (
    <section id="productos" className="px-4 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <Badge className="mb-4 border-secondary/30 bg-secondary/10 text-secondary">
            Nuestro Trabajo
          </Badge>
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
            <span className="text-balance">
              Resultados que hablan por sí solos
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-muted-foreground">
            Cada análisis incluye gráficos de alta calidad, tablas en formato
            APA y código reproducible en R Studio. Estos son ejemplos reales de
            nuestro trabajo.
          </p>
        </div>

        {/* Tab selector */}
        <div className="mx-auto mt-12 flex max-w-xl flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "rounded-lg border px-4 py-2.5 text-sm font-medium transition-all",
                activeTab === tab.id
                  ? "border-secondary bg-secondary/10 text-secondary"
                  : "border-border bg-card text-muted-foreground hover:border-secondary/30 hover:text-foreground"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8">
          {/* ROC CURVE */}
          {activeTab === "roc" && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
              <Card className="border-border lg:col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-base text-foreground">
                    Curva ROC - Modelo de Predicción Diagnóstica
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    {"Área bajo la curva (AUC) = 0.85 | IC 95%: 0.79 - 0.91"}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-[340px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart margin={{ top: 10, right: 20, bottom: 30, left: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 88%)" />
                        <XAxis
                          dataKey="fpr"
                          type="number"
                          domain={[0, 1]}
                          tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`}
                          label={{
                            value: "1 - Especificidad",
                            position: "insideBottom",
                            offset: -15,
                            style: { fontSize: 12, fill: "hsl(213 20% 45%)" },
                          }}
                          tick={{ fontSize: 11, fill: "hsl(213 20% 45%)" }}
                          stroke="hsl(210 15% 88%)"
                        />
                        <YAxis
                          dataKey="tpr"
                          type="number"
                          domain={[0, 1]}
                          tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`}
                          label={{
                            value: "Sensibilidad",
                            angle: -90,
                            position: "insideLeft",
                            offset: 5,
                            style: { fontSize: 12, fill: "hsl(213 20% 45%)" },
                          }}
                          tick={{ fontSize: 11, fill: "hsl(213 20% 45%)" }}
                          stroke="hsl(210 15% 88%)"
                        />
                        <Tooltip
                          content={<RocTooltip />}
                        />
                        {/* Reference diagonal */}
                        <Line
                          data={diagonalData}
                          dataKey="tpr"
                          stroke="hsl(213 20% 45%)"
                          strokeDasharray="6 4"
                          strokeWidth={1.5}
                          dot={false}
                          name="Referencia"
                        />
                        {/* ROC curve */}
                        <Line
                          data={rocData}
                          dataKey="tpr"
                          stroke="hsl(160 50% 42%)"
                          strokeWidth={2.5}
                          dot={{ r: 3, fill: "hsl(160 50% 42%)" }}
                          activeDot={{ r: 5, fill: "hsl(160 50% 42%)", stroke: "#fff", strokeWidth: 2 }}
                          name="Modelo"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* ROC info cards */}
              <div className="flex flex-col gap-4 lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      AUC (Área bajo la curva)
                    </p>
                    <p className="mt-1 font-heading text-3xl font-bold text-secondary">
                      0.85
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {"IC 95%: 0.79 - 0.91 | p < 0.001"}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Punto de corte óptimo
                    </p>
                    <p className="mt-1 font-heading text-3xl font-bold text-foreground">
                      0.52
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Sensibilidad: 78% | Especificidad: 82%
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Interpretación
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      El modelo presenta una{" "}
                      <span className="font-semibold text-foreground">
                        buena capacidad discriminativa
                      </span>{" "}
                      (AUC {">"} 0.80), lo que permite distinguir adecuadamente
                      entre pacientes con y sin la condición estudiada.
                    </p>
                  </CardContent>
                </Card>
                <div className="rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-secondary">
                      Incluido en:
                    </span>{" "}
                    Plan Elite | Generado con R Studio + pROC package
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FOREST PLOT */}
          {activeTab === "forest" && (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
              <Card className="border-border lg:col-span-3">
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-base text-foreground">
                    Forest Plot - Odds Ratio con IC 95%
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Factores de riesgo cardiovascular | Análisis bivariado
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="h-[340px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={forestData}
                        layout="vertical"
                        margin={{ top: 10, right: 30, bottom: 10, left: 90 }}
                      >
                        <CartesianGrid
                          strokeDasharray="3 3"
                          horizontal={false}
                          stroke="hsl(210 15% 88%)"
                        />
                        <XAxis
                          type="number"
                          domain={[0, 7]}
                          tick={{ fontSize: 11, fill: "hsl(213 20% 45%)" }}
                          stroke="hsl(210 15% 88%)"
                          label={{
                            value: "Odds Ratio",
                            position: "insideBottom",
                            offset: -5,
                            style: { fontSize: 12, fill: "hsl(213 20% 45%)" },
                          }}
                        />
                        <YAxis
                          dataKey="variable"
                          type="category"
                          tick={{ fontSize: 12, fill: "hsl(213 50% 15%)" }}
                          width={85}
                          stroke="none"
                        />
                        <Tooltip
                          content={({ active, payload }) => {
                            if (!active || !payload || !payload.length) return null
                            const d = payload[0].payload as (typeof forestData)[0]
                            return (
                              <div className="rounded-lg border border-border bg-card px-3 py-2 shadow-md">
                                <p className="text-xs font-semibold text-foreground">
                                  {d.variable}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {"OR: "}
                                  <span className="font-semibold text-foreground">
                                    {d.or.toFixed(2)}
                                  </span>
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {"IC 95%: "}
                                  {d.lower.toFixed(2)} - {d.upper.toFixed(2)}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {"p = "}{d.p}
                                </p>
                              </div>
                            )
                          }}
                        />
                        <ReferenceLine x={1} stroke="hsl(213 20% 45%)" strokeDasharray="6 4" strokeWidth={1.5} />
                        <Legend
                          verticalAlign="top"
                          align="right"
                          content={() => (
                            <div className="mb-2 flex items-center justify-end gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1.5">
                                <span className="inline-block h-3 w-3 rounded-sm bg-secondary" />
                                {"p < 0.05"}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <span className="inline-block h-3 w-3 rounded-sm bg-muted-foreground/30" />
                                {"p >= 0.05"}
                              </span>
                            </div>
                          )}
                        />
                        <Bar dataKey="or" barSize={14} radius={[0, 4, 4, 0]}>
                          {forestData.map((entry, index) => (
                            <Cell
                              key={index}
                              fill={
                                parseFloat(entry.p) < 0.05
                                  ? "hsl(160 50% 42%)"
                                  : "hsl(213 20% 45% / 0.3)"
                              }
                            />
                          ))}
                          <ErrorBar
                            dataKey={(entry: (typeof forestData)[0]) => [
                              entry.or - entry.lower,
                              entry.upper - entry.or,
                            ]}
                            stroke="hsl(213 50% 15%)"
                            strokeWidth={1.5}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Forest info cards */}
              <div className="flex flex-col gap-4 lg:col-span-2">
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Variable más significativa
                    </p>
                    <p className="mt-1 font-heading text-xl font-bold text-foreground">
                      Diabetes
                    </p>
                    <p className="mt-1 text-sm text-secondary">
                      {"OR = 3.42 (IC: 1.85 - 6.32)"}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Variables significativas
                    </p>
                    <p className="mt-1 font-heading text-3xl font-bold text-secondary">
                      {"4 / 6"}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {"p < 0.05 en análisis bivariado"}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Interpretación
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Los pacientes con{" "}
                      <span className="font-semibold text-foreground">
                        Diabetes
                      </span>{" "}
                      tienen 3.42 veces más probabilidad de presentar el evento
                      en comparación con los no diabéticos, siendo este el
                      factor de riesgo más fuerte.
                    </p>
                  </CardContent>
                </Card>
                <div className="rounded-lg border border-secondary/20 bg-secondary/5 px-4 py-3">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-secondary">
                      Incluido en:
                    </span>{" "}
                    Plan Investigador y Elite | Generado con R Studio + ggplot2
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TABLE OR / PR */}
          {activeTab === "table" && (
            <div className="flex flex-col gap-6">
              <Card className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="font-heading text-base text-foreground">
                    Tabla de Asociación - Odds Ratio (OR) con IC 95%
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">
                    Factores asociados a evento cardiovascular adverso | n = 144
                    | Chi-cuadrado de Pearson
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-primary/20">
                          <th className="px-3 py-3 text-left font-semibold text-foreground">
                            Variable
                          </th>
                          <th className="px-3 py-3 text-center font-semibold text-foreground">
                            Casos n (%)
                          </th>
                          <th className="px-3 py-3 text-center font-semibold text-foreground">
                            Controles n (%)
                          </th>
                          <th className="px-3 py-3 text-center font-semibold text-foreground">
                            OR
                          </th>
                          <th className="px-3 py-3 text-center font-semibold text-foreground">
                            IC 95%
                          </th>
                          <th className="px-3 py-3 text-center font-semibold text-foreground">
                            Valor p
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, i) => (
                          <tr
                            key={row.variable}
                            className={cn(
                              "border-b border-border transition-colors hover:bg-muted/50",
                              i % 2 === 0 ? "bg-card" : "bg-muted/20"
                            )}
                          >
                            <td className="px-3 py-3 font-medium text-foreground">
                              {row.variable}
                            </td>
                            <td className="px-3 py-3 text-center text-muted-foreground">
                              {row.cases}
                            </td>
                            <td className="px-3 py-3 text-center text-muted-foreground">
                              {row.controls}
                            </td>
                            <td
                              className={cn(
                                "px-3 py-3 text-center font-semibold",
                                row.significant
                                  ? "text-secondary"
                                  : "text-muted-foreground"
                              )}
                            >
                              {row.or}
                            </td>
                            <td className="px-3 py-3 text-center text-muted-foreground">
                              {row.ic95}
                            </td>
                            <td
                              className={cn(
                                "px-3 py-3 text-center font-medium",
                                row.significant
                                  ? "text-secondary"
                                  : "text-muted-foreground"
                              )}
                            >
                              {row.p}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-border pt-4">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        Nota:
                      </span>{" "}
                      OR {">"} 1 indica factor de riesgo. IC 95% que no incluye
                      el 1 = estadísticamente significativo.
                    </p>
                    <Badge
                      variant="outline"
                      className="border-secondary/30 text-xs text-secondary"
                    >
                      Formato APA 7ma Edición
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Summary cards */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Factor de riesgo principal
                    </p>
                    <p className="mt-1 font-heading text-lg font-bold text-foreground">
                      Diabetes Mellitus II
                    </p>
                    <p className="text-sm text-secondary">{"OR = 5.00"}</p>
                  </CardContent>
                </Card>
                <Card className="border-border">
                  <CardContent className="px-5 py-5">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Variables significativas
                    </p>
                    <p className="mt-1 font-heading text-3xl font-bold text-secondary">
                      {"4 / 6"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {"p < 0.05"}
                    </p>
                  </CardContent>
                </Card>
                <div className="flex items-center rounded-lg border border-secondary/20 bg-secondary/5 px-5 py-5">
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-secondary">
                      Incluido en:
                    </span>{" "}
                    Plan Investigador y Elite | Tablas generadas con R Studio +
                    gtsummary package
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
