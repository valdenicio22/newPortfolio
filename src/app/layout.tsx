import { BackToTop } from '@/components/BackToTop'
import { ContactForm } from '@/components/ContactForm'
import { Footer } from '@/components/Foorter'
import { Toaster } from '@/components/Toaster'
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { IBM_Plex_Mono, Inter } from 'next/font/google'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: '%s | VF Dev'
  },
  icons: [
    {
      url: '/next.svg'
    }
  ]
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
    <html lang="pt-BR" className={`${inter.className}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
