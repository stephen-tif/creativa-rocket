import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Creativa Rocket | Agencia de Innovacion Digital",
  description:
    "Impulsamos tu negocio al siguiente nivel con soluciones digitales innovadoras. Desarrollo web, aplicaciones moviles y marketing digital.",
  keywords: [
    "agencia digital",
    "desarrollo web",
    "aplicaciones moviles",
    "marketing digital",
    "innovacion",
  ],
  authors: [{ name: "Creativa Rocket" }],
  openGraph: {
    title: "Creativa Rocket | Agencia de Innovacion Digital",
    description:
      "Impulsamos tu negocio al siguiente nivel con soluciones digitales innovadoras.",
    type: "website",
    locale: "es_ES",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
