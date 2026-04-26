import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Ecobus Construction | Premium Building Solutions',
  description: 'Ecobus Construction delivers exceptional commercial and residential construction services. With 25+ years of experience, we transform visions into reality with precision and excellence.',
  keywords: ['construction', 'building', 'commercial construction', 'residential construction', 'renovation', 'general contractor'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Ecobus Construction | Premium Building Solutions',
    description: 'Ecobus Construction delivers exceptional commercial and residential construction services.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#092473',
  width: 'device-width',
  initialScale: 1,
}

import { LanguageProvider } from '@/lib/i18n/context'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
