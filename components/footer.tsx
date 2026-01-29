"use client";

import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Desarrollo Web", href: "#" },
    { name: "Apps Moviles", href: "#" },
    { name: "Marketing Digital", href: "#" },
    { name: "Diseno UI/UX", href: "#" },
    { name: "Consultoria", href: "#" },
  ],
  company: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Clientes", href: "#clientes" },
    { name: "Blog", href: "#" },
    { name: "Carreras", href: "#" },
    { name: "Contacto", href: "#contacto" },
  ],
  resources: [
    { name: "Documentacion", href: "#" },
    { name: "Guias", href: "#" },
    { name: "Soporte", href: "#" },
    { name: "API", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Terminos", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "Li" },
  { name: "Twitter", href: "#", icon: "Tw" },
  { name: "Instagram", href: "#", icon: "Ig" },
  { name: "Dribbble", href: "#", icon: "Dr" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-5 h-5 text-background"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L8 8h8l-4-6z" />
                    <path d="M8 8v10l4 4 4-4V8" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <span className="font-display font-bold text-lg text-foreground">
                  Creativa Rocket
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mb-6">
                Impulsamos tu negocio al siguiente nivel con soluciones digitales 
                innovadoras y experiencias que marcan la diferencia.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 rounded-lg border border-border bg-background/50 flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                    aria-label={social.name}
                  >
                    <span className="text-xs font-medium">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Creativa Rocket. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho con pasion en Mexico
          </p>
        </div>
      </div>
    </footer>
  );
}
