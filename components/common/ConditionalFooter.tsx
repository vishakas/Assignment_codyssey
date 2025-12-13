'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'
import EmployerFooter from '@/components/employer/EmployerFooter'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Show employer footer on employer routes
  if (pathname?.startsWith('/employer')) {
    return <EmployerFooter />
  }
  
  return <Footer />
}

