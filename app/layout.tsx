import type { Metadata, Viewport } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const _dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'TesisData | Consultoría Estadística con R Studio',
  description:
    'Consultoría estadística de alto nivel con R Studio para tesis y publicaciones científicas. Rigor académico en formato APA/Vancouver.',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a2e4a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
