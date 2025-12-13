import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import EmployerNavbar from '@/components/employer/EmployerNavbar'
import Footer from '@/components/common/Footer'

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
      <EmployerNavbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}


