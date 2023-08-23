import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My personal portfolio'
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500']
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${plexMono.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
