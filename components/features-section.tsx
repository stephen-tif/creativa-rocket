"use client";

import { Check } from "lucide-react";

const features = [
  {
    title: "Tecnologia de Vanguardia",
    description:
      "Utilizamos las herramientas y frameworks mas modernos del mercado para garantizar soluciones robustas y escalables.",
  },
  {
    title: "Metodologia Agil",
    description:
      "Trabajamos con sprints cortos y entregas continuas para que veas el progreso de tu proyecto en tiempo real.",
  },
  {
    title: "Soporte Continuo",
    description:
      "Nuestro compromiso no termina con la entrega. Ofrecemos soporte y mantenimiento para asegurar el exito a largo plazo.",
  },
  {
    title: "Equipo Especializado",
    description:
      "Contamos con profesionales certificados y apasionados por crear experiencias digitales excepcionales.",
  },
];

const stats = [
  { value: "99.9%", label: "Uptime garantizado" },
  { value: "< 24h", label: "Tiempo de respuesta" },
  { value: "100%", label: "Satisfaccion del cliente" },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Por que elegirnos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Construimos el futuro digital de tu empresa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mas que una agencia, somos tu socio estrategico en tecnologia. 
              Combinamos creatividad, experiencia tecnica y vision de negocio 
              para crear soluciones que realmente impactan.
            </p>

            <div className="space-y-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                    <Check className="w-4 h-4 text-background" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Stats card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-3xl" />
            <div className="relative p-8 lg:p-12 rounded-3xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Nuestros numeros hablan
                  </h3>
                  <p className="text-muted-foreground">
                    Resultados que respaldan nuestra experiencia y compromiso con la excelencia.
                  </p>
                </div>

                <div className="grid gap-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center justify-between p-4 rounded-xl bg-background/50 border border-border"
                    >
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-display text-2xl font-bold text-foreground">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-muted border-2 border-card flex items-center justify-center text-xs font-medium text-muted-foreground"
                        >
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">+50 empresas</p>
                      <p className="text-sm text-muted-foreground">
                        confian en nosotros
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
