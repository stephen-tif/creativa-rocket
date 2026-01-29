"use client";

import { useEffect, useRef } from "react";

// Client logos - using placeholder representations
const clients = [
  "Cliente 1",
  "Cliente 2",
  "Cliente 3",
  "Cliente 4",
  "Cliente 5",
  "Cliente 6",
  "Cliente 7",
  "Cliente 8",
  "Cliente 9",
  "Cliente 10",
  "Cliente 11",
  "Cliente 12",
];

const testimonials = [
  {
    quote:
      "Creativa Rocket transformo completamente nuestra presencia digital. El equipo entendio perfectamente nuestras necesidades y entrego un producto excepcional.",
    author: "Maria Garcia",
    role: "CEO, TechStart",
  },
  {
    quote:
      "La calidad del trabajo y la comunicacion durante todo el proyecto fue impecable. Superaron todas nuestras expectativas.",
    author: "Carlos Rodriguez",
    role: "Director de Marketing, InnovaGroup",
  },
  {
    quote:
      "Profesionales, creativos y comprometidos. Nuestra app movil ha sido un exito gracias a su trabajo.",
    author: "Ana Martinez",
    role: "Fundadora, EcoApp",
  },
];

function Marquee({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const scrollWidth = marquee.scrollWidth / 2;
    let position = direction === "left" ? 0 : -scrollWidth;

    const animate = () => {
      if (direction === "left") {
        position -= 0.5;
        if (position <= -scrollWidth) {
          position = 0;
        }
      } else {
        position += 0.5;
        if (position >= 0) {
          position = -scrollWidth;
        }
      }
      marquee.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [direction]);

  return (
    <div className="overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        {children}
        {children}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section id="clientes" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Nuestros Clientes
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            Empresas que confian en nosotros
          </h2>
        </div>

        {/* Logo marquee */}
        <div className="space-y-4 mb-24">
          <Marquee direction="left">
            {clients.slice(0, 6).map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="mx-8 flex items-center justify-center w-32 h-16 rounded-lg border border-border bg-card/30"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </Marquee>
          <Marquee direction="right">
            {clients.slice(6, 12).map((client, i) => (
              <div
                key={`${client}-${i}`}
                className="mx-8 flex items-center justify-center w-32 h-16 rounded-lg border border-border bg-card/30"
              >
                <span className="text-sm font-medium text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 lg:p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-sm"
            >
              <svg
                className="w-8 h-8 text-foreground/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-foreground leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
