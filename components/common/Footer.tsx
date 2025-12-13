import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Download Apna App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Free Job Alerts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Vulnerability Disclosure Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  User Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary-600 transition-colors">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-gray-300">
        <div className="container-custom py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-xl font-bold text-white lowercase">apna</span>
                <div className="flex gap-0.5 h-1 mt-0.5">
                  <div className="w-3 bg-teal-400 rounded"></div>
                  <div className="w-3 bg-orange-400 rounded"></div>
                  <div className="w-3 bg-blue-400 rounded"></div>
                </div>
              </div>
              <p className="text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                {['Facebook', 'LinkedIn', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                  <div
                    key={social}
                    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <span className="text-xs">{social[0]}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} Apna | All rights reserved Privacy Policy Apna Advantage T&C Rewards T&C AI Prep T&C
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-2">Apply on the go</h4>
              <p className="text-sm text-gray-600 mb-4">Get real time job updates</p>
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-3xl">📱</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2 mb-3">
                    <button className="w-full bg-black text-white py-2 px-3 rounded text-xs font-semibold hover:bg-gray-800 transition-colors">
                      Download on the App Store
                    </button>
                    <button className="w-full bg-black text-white py-2 px-3 rounded text-xs font-semibold hover:bg-gray-800 transition-colors">
                      GET IT ON Google Play
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="font-bold text-gray-900">apna</span>
                    <span>4.7 ⭐</span>
                    <span>7L reviews</span>
                    <span>5cr+ Downloads</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

