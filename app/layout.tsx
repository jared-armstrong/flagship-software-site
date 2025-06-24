import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientRootLayout from '@/components/ClientRootLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flagship Software - Designing the Future',
  description: 'Flagship Software creates innovative, user-centric software solutions. Discover our cutting-edge products including DataFlow Pro, ConnectHub, and AI Insights.',
  keywords: ['software design', 'data visualization', 'collaboration platform', 'AI insights', 'user experience'],
  authors: [{ name: 'Flagship Software' }],
  creator: 'Flagship Software',
  publisher: 'Flagship Software',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flagship-software.com'),
  openGraph: {
    title: 'Flagship Software - Designing the Future',
    description: 'Flagship Software creates innovative, user-centric software solutions. Discover our cutting-edge products including DataFlow Pro, ConnectHub, and AI Insights.',
    url: 'https://flagship-software.com',
    siteName: 'Flagship Software',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flagship Software - Designing the Future',
    description: 'Flagship Software creates innovative, user-centric software solutions.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E🚀%3C/text%3E%3C/svg%3E" />
      </head>
      <body className={inter.className}>
        <ClientRootLayout>
          {children}
        </ClientRootLayout>
      </body>
    </html>
  )
} 