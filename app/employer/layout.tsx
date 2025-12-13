import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apna for Employers - Hire Top Talent Faster',
  description: 'Streamline your recruitment with AI-driven precision. Find qualified candidates quickly and efficiently.',
}

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar variant="employer" />
      {children}
    </>
  )
}


