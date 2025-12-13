'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ApnaLogo from '@/components/common/ApnaLogo'

export default function EmployerNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/employer" className="flex items-center gap-2">
              <ApnaLogo width={32} height={32} />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/employer" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1">
              Product
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/employer/enterprise" className="text-gray-700 hover:text-primary-600 transition-colors">
              Enterprise
            </Link>
            <Link href="/employer/blogs" className="text-gray-700 hover:text-primary-600 transition-colors">
              Blogs
            </Link>
            <Link href="/employer/pricing" className="text-gray-700 hover:text-primary-600 transition-colors">
              Pricing
            </Link>
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1">
              Looking for a job
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="#contact"
              className="border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/employer"
              className="bg-green-600 text-white hover:bg-green-700 font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Login/Sign up
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/employer" className="block text-gray-700 hover:text-primary-600">
              Product
            </Link>
            <Link href="/employer/enterprise" className="block text-gray-700 hover:text-primary-600">
              Enterprise
            </Link>
            <Link href="/employer/blogs" className="block text-gray-700 hover:text-primary-600">
              Blogs
            </Link>
            <Link href="/employer/pricing" className="block text-gray-700 hover:text-primary-600">
              Pricing
            </Link>
            <Link href="/" className="block text-gray-700 hover:text-primary-600">
              Looking for a job
            </Link>
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Link
                href="#contact"
                className="block text-center border border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 rounded-lg"
              >
                Contact us
              </Link>
              <Link
                href="/employer"
                className="block text-center bg-green-600 text-white hover:bg-green-700 font-medium py-2 rounded-lg"
              >
                Login/Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

