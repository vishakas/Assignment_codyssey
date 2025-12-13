'use client'

import { usePathname } from 'next/navigation'
import Footer from './Footer'

export default function ConditionalFooter() {
  const pathname = usePathname()
  
  // Don't show footer on employer routes
  if (pathname?.startsWith('/employer')) {
    return null
  }
  
  return <Footer />
}

