"use client";

import { Code2, Smartphone, LineChart, Palette, Zap, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description:
      "Creamos sitios web y aplicaciones web de alto rendimiento con las tecnologias mas modernas del mercado.",
    features: ["React & Next.js", "E-commerce", "CMS Personalizado"],
    size: "large",
  },
  {
    icon: Smartphone,
    title: "Apps Moviles",
    description:
      "Desarrollamos aplicaciones nativas y multiplataforma que destacan en las tiendas de apps.",
    features: ["iOS & Android", "React Native", "Flutter"],
    size: "medium",
  },
  {
    icon: LineChart,
    title: "Marketing Digital",
    description:
      "Estrategias de marketing que impulsan el crecimiento y generan resultados medibles.",
    features: ["SEO & SEM", "Social Media", "Analytics"],
    size: "medium",
  },
  {
    icon: Palette,
    title: "Diseno UI/UX",
    description:
      "Interfaces intuitivas y experiencias de usuario que enamoran a tus clientes.",
    features: ["Prototipado", "Design Systems", "User Research"],
    size: "small",
  },
  {
    icon: Zap,
    title: "Optimizacion",
    description:
      "Mejoramos el rendimiento y la velocidad de tus plataformas digitales existentes.",
    features: ["Performance", "Core Web Vitals", "Auditorias"],
    size: "small",
  },
  {
    icon: Shield,
    title: "Consultoria Tech",
    description:
      "Asesoramiento experto para transformar digitalmente tu negocio.",
    features: ["Arquitectura", "Integraciones", "Escalabilidad"],
    size: "small",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Soluciones digitales completas para tu negocio
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Desde la conceptualizacion hasta la implementacion, ofrecemos servicios 
            integrales que impulsan el exito de tu empresa en el mundo digital.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={cn(
                  "group relative p-6 lg:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm",
                  "hover:border-foreground/20 hover:bg-card transition-all duration-300",
                  service.size === "large" && "md:col-span-2 lg:col-span-1 lg:row-span-2",
                  service.size === "medium" && index === 1 && "lg:col-start-2",
                )}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors">
                  <Icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-foreground/5 text-muted-foreground border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-4 h-4 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
