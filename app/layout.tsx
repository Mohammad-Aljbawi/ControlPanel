import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
// dark mode
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "sonner"
import './globals.css'


const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist-sans"
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  title: 'HomeLab',
  description: 'Modern infrastructure management dashboard for monitoring servers, databases, and network resources.',
  icons: {
    icon: [
      {
        url: '/favicon-white-512.png',
        type: 'image/png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo-512.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon-white-512.png',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
