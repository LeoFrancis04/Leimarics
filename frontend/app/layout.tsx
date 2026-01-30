import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://leimarics.com'),
  title: 'Leimarics - For What\'s Next',
  description: 'Where Ambition Meets Execution. We architect world-class digital solutions for businesses ready to lead their markets.',
  keywords: 'web development, digital solutions, Leimarics, business websites, professional websites, global scale',
  
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  
  openGraph: {
    title: 'Leimarics - For What\'s Next',
    description: 'Where Ambition Meets Execution. World-class digital solutions for global brands.',
    url: 'https://leimarics.com',
    siteName: 'Leimarics',
    images: [
      {
        url: '/Leimarics-og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Leimarics - For What\'s Next',
    description: 'Where Ambition Meets Execution.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}