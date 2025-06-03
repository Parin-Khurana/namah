import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import { FAQChatbot } from "@/components/faq-chatbot"
import { Montserrat } from "next/font/google"
import "@/app/globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Namah Global Visionaries Summit | Business & Youth Summit",
  description:
    "A revolutionary platform where changemakers, entrepreneurs, creators, and dreamers come together to build, lead, and disrupt the norm.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`min-h-screen bg-background font-sans antialiased ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            {children}
            <SiteFooter />
            <FAQChatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
