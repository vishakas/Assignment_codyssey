import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ConditionalNavbar from '@/components/common/ConditionalNavbar'
import ConditionalFooter from '@/components/common/ConditionalFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apna - Find Jobs & Build Your Career',
  description: 'Discover job opportunities and connect with employers across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalNavbar />
        <main>{children}</main>
        <ConditionalFooter />
      </body>
    </html>
  )
}

