import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './config'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Francisco\'s Online CV',
    template: '%s | Portfolio ',
  },
  description: 'This is my online CV.',
  openGraph: {
    title: 'Welocme to my professional bio',
    description: 'This is my professional bio.',
    url: baseUrl,
    siteName: 'Welocme to my professional bio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        GeistSans.variable,
        GeistMono.variable
      )}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-4xl mx-auto px-6 transition-colors duration-300">
        <Providers>
          <Navbar />
          <main className="flex-auto min-w-0 mt-20 flex flex-col md:px-0">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}
