import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Demo Day 2026 | AI i praksis - Høyskolen Kristiania",
  description: "80 studenter har intervjuet norsk næringsliv om AI-bruk. Be om invitasjon til Demo Day i Mai 2026.",
}

export const viewport: Viewport = {
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
