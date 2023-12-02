import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] ,variable: '--font-inter',display: 'swap',})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['100','200','300','400','500','600', '700'],
  
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
