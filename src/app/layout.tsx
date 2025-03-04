import '../i18n/config'
import I18nProvider from '@/i18n/I18nProvider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Mecatec',
    default: 'Mecatec - Yenilikçi Teknoloji Çözümleri',
  },
  description:
    'Mecatec, kompozit teknolojileri, optik çözümler ve test sistemleri alanında yenilikçi çözümler sunan lider teknoloji şirketidir.',
  keywords:
    'mecatec, kompozit teknolojileri, optik çözümler, test sistemleri, teknoloji, inovasyon',
  authors: [{ name: 'Mecatec' }],
  creator: 'Mecatec',
  publisher: 'Mecatec',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://mecatec.com',
    siteName: 'Mecatec',
    title: 'Mecatec - Yenilikçi Teknoloji Çözümleri',
    description:
      'Mecatec, kompozit teknolojileri, optik çözümler ve test sistemleri alanında yenilikçi çözümler sunan lider teknoloji şirketidir.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mecatec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mecatec - Yenilikçi Teknoloji Çözümleri',
    description:
      'Mecatec, kompozit teknolojileri, optik çözümler ve test sistemleri alanında yenilikçi çözümler sunan lider teknoloji şirketidir.',
    images: ['/images/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://mecatec.com" />
        <meta name="theme-color" content="#0066ff" />
      </head>
      <body>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
