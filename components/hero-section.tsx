"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const RocketScene = dynamic(() => import("@/components/rocket-scene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-2 border-muted-foreground/20 border-t-foreground rounded-full animate-spin" />
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden grid-pattern">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-16 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-muted-foreground">
                Disponibles para nuevos proyectos
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
              <span className="text-foreground">Impulsamos tu</span>
              <br />
              <span className="text-foreground">negocio al</span>
              <br />
              <span className="relative">
                <span className="text-foreground">siguiente nivel</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/30"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
              Creamos soluciones digitales innovadoras que transforman ideas en 
              experiencias extraordinarias. Desarrollo web, apps y estrategia digital.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                Ver Showreel
              </Button>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-8 border-t border-border">
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  150+
                </div>
                <div className="text-sm text-muted-foreground">
                  Proyectos Completados
                </div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Clientes Satisfechos
                </div>
              </div>
              <div>
                <div className="font-display text-3xl lg:text-4xl font-bold text-foreground">
                  8+
                </div>
                <div className="text-sm text-muted-foreground">
                  Anos de Experiencia
                </div>
              </div>
            </div>
          </div>

          {/* 3D Rocket */}
          <div className="relative h-[400px] lg:h-[600px]">
            <RocketScene />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
