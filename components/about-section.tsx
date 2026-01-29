"use client";

import { Target, Lightbulb, Users, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada proyecto esta orientado a generar un impacto real y medible en tu negocio.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion Constante",
    description: "Exploramos y adoptamos las tecnologias emergentes para mantenerte a la vanguardia.",
  },
  {
    icon: Users,
    title: "Colaboracion Cercana",
    description: "Trabajamos como una extension de tu equipo, con comunicacion transparente y continua.",
  },
  {
    icon: Award,
    title: "Excelencia en Calidad",
    description: "Aplicamos los mas altos estandares de desarrollo y diseno en cada entrega.",
  },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left content */}
          <div className="space-y-8">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Sobre Nosotros
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Transformamos ideas en experiencias digitales
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Creativa Rocket nacio con una mision clara: ayudar a empresas y 
                emprendedores a alcanzar su maximo potencial en el mundo digital. 
                Con mas de 8 anos de experiencia, hemos trabajado con marcas de 
                todos los tamanos y sectores.
              </p>
              <p>
                Nuestro equipo multidisciplinario combina expertise tecnico con 
                vision estrategica para crear soluciones que no solo se ven 
                increibles, sino que tambien generan resultados tangibles.
              </p>
            </div>

            {/* Timeline / Milestones */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <span className="font-display text-4xl font-bold text-foreground">2016</span>
                <p className="text-sm text-muted-foreground">Fundacion de la agencia</p>
              </div>
              <div className="space-y-2">
                <span className="font-display text-4xl font-bold text-foreground">150+</span>
                <p className="text-sm text-muted-foreground">Proyectos entregados</p>
              </div>
              <div className="space-y-2">
                <span className="font-display text-4xl font-bold text-foreground">25+</span>
                <p className="text-sm text-muted-foreground">Profesionales en el equipo</p>
              </div>
              <div className="space-y-2">
                <span className="font-display text-4xl font-bold text-foreground">5</span>
                <p className="text-sm text-muted-foreground">Paises donde operamos</p>
              </div>
            </div>
          </div>

          {/* Right - Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl border border-border bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
