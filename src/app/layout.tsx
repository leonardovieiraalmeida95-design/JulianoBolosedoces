import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./editorial.css";
import "./story.css";
import "./mobile-story.css";
export const metadata: Metadata = {
  "title": "Juliano Bolos e Doces",
  "description": "Bolos personalizados, bolos de comemoração e docinhos para festas em Jaguariaíva, PR. Encomendas sob consulta pelo WhatsApp.",
  "openGraph": {
    "type": "website",
    "title": "Juliano Bolos e Doces",
    "description": "Bolos personalizados e docinhos para festas em Jaguariaíva, PR. Solicite seu orçamento pelo WhatsApp.",
    "locale": "pt_BR"
  },
  icons: { icon: (process.env.VERCEL === "1" ? "" : "/JulianoBolosedoces") + "/img/logo.png", apple: (process.env.VERCEL === "1" ? "" : "/JulianoBolosedoces") + "/img/logo.png" }
};
export const viewport: Viewport = { themeColor: "#0f2247" };
export default function RootLayout({ children }: { children: ReactNode }) { return <html lang="pt-BR"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link rel="stylesheet" href={"https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;1,6..72,400&display=swap"} /></head><body>{children}</body></html>; }
