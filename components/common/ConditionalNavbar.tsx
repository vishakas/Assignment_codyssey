'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

export default function ConditionalNavbar() {
  const pathname = usePathname()
  
  // Don't show navbar on employer routes
  if (pathname?.startsWith('/employer')) {
    return null
  }
  
  return <Navbar />
}


