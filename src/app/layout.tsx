import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const inter = Montserrat({
  weight: ['400','500','600','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Main',
  description: 'Main Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
