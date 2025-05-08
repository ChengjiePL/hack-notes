import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ethical Hacking Help Portal",
  description: "A comprehensive resource for ethical hacking tools, tutorials, and knowledge",
  openGraph: {
    title: "Ethical Hacking Help Portal",
    description: "A comprehensive resource for ethical hacking tools, tutorials, and knowledge",
    url: "https://ethical-hacking-help.vercel.app",
    siteName: "Ethical Hacking Help",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ethical Hacking Help Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider defaultOpen={false}>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <div className="flex flex-1 relative">
                <Sidebar />
                <main className="flex-1 w-full">{children}</main>
              </div>
              <Footer />
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
