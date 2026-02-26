import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Allan Xavier',
  description: 'Portfólio de Allan Farias de Moura Xavier - Desenvolvedor Backend | Python, FastAPI, Django, PostgreSQL, Docker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
