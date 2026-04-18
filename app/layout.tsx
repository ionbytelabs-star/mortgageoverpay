import type { Metadata } from "next"

import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { defaultMetadata } from "@/lib/metadata"

import "./globals.css"

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-slate-50 text-slate-950 antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          {/* Future privacy-conscious analytics can be inserted here once the privacy page is expanded. */}
          <Footer />
        </div>
      </body>
    </html>
  )
}
