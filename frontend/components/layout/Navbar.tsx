'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/#process' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Newsletter', href: '/#newsletter' },
    { name: 'FAQ', href: '/#faq' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clickable to Home - UPDATED */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            {/* Option 1: Use actual logo image */}
            <div className="relative w-48 h-12">
              <Image
                src="/Leimarics-log.png"
                alt="Leimarics - For What's Next"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Option 2: If you don't have logo yet, use styled text (REMOVE IF YOU HAVE LOGO) */}
            {/* <div className="text-2xl font-bold">
              <span className="text-navy-900">Ser</span>
              <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">Webz</span>
            </div> */}

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className={`font-medium transition-colors ${
                    pathname === item.href 
                      ? 'text-coral-500' 
                      : 'text-gray-700 hover:text-coral-500'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="/#contact"
                className="px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Get Quote
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-coral-500"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-medium transition-colors ${
                      pathname === item.href 
                        ? 'text-coral-500' 
                        : 'text-gray-700 hover:text-coral-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl font-semibold"
                >
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}