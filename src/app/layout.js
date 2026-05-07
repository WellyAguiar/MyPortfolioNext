import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/Header/Header";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welly Aguiar | Desenvolvedor Fullstack",
  description: "Portfólio de Welly Aguiar, desenvolvedor Fullstack especializado em React, Next.js e Node.js. Estudante de Engenharia de Software focado em soluções eficientes.",
  keywords: ["Desenvolvedor Fullstack", "React", "Next.js", "Node.js", "Engenharia de Software", "Welly Aguiar"],
  authors: [{ name: "Welly Aguiar" }],
  openGraph: {
    title: "Welly Aguiar | Desenvolvedor Fullstack",
    description: "Conheça os projetos e a trajetória de Welly Aguiar.",
    url: "https://seu-dominio.com",
    siteName: "Portfólio Welly Aguiar",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welly Aguiar | Desenvolvedor Fullstack",
    description: "Portfólio de desenvolvimento web e engenharia de software.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
