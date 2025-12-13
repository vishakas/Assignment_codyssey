'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 lowercase">apna</span>
              <div className="flex gap-0.5 h-1 mt-0.5">
                <div className="w-3 bg-teal-400 rounded"></div>
                <div className="w-3 bg-orange-400 rounded"></div>
                <div className="w-3 bg-blue-400 rounded"></div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1">
              Jobs
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <Link href="/job-prep" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2">
              Job Prep
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/contests" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2">
              Contests
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/degree" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-2">
              Degree
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/resume-tools" className="text-gray-700 hover:text-primary-600 transition-colors flex items-center gap-1">
              Resume Tools
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              href="/employer"
              className="text-green-600 hover:text-green-700 font-medium px-4 py-2 transition-colors"
            >
              Employer Login
            </Link>
            <Link
              href="/login"
              className="bg-green-600 text-white hover:bg-green-700 font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Candidate Login
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
            <Link href="/" className="block text-gray-700 hover:text-primary-600">
              Jobs
            </Link>
            <Link href="/job-prep" className="block text-gray-700 hover:text-primary-600 flex items-center gap-2">
              Job Prep
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/contests" className="block text-gray-700 hover:text-primary-600 flex items-center gap-2">
              Contests
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/degree" className="block text-gray-700 hover:text-primary-600 flex items-center gap-2">
              Degree
              <span className="bg-orange-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                NEW
              </span>
            </Link>
            <Link href="/resume-tools" className="block text-gray-700 hover:text-primary-600">
              Resume Tools
            </Link>
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Link
                href="/employer"
                className="block text-center text-green-600 hover:text-green-700 font-medium py-2"
              >
                Employer Login
              </Link>
              <Link
                href="/login"
                className="block text-center bg-green-600 text-white hover:bg-green-700 font-medium py-2 rounded-lg"
              >
                Candidate Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

