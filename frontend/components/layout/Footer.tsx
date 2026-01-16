'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Newsletter state (if using footer newsletter)
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterLoading, setNewsletterLoading] = useState(false)
  const [newsletterSuccess, setNewsletterSuccess] = useState(false)
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterLoading(true)
    setNewsletterError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail }),
      })

      const data = await response.json()

      if (data.success) {
        setNewsletterSuccess(true)
        setNewsletterEmail('')
        setTimeout(() => setNewsletterSuccess(false), 5000)
      } else {
        setNewsletterError(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      setNewsletterError('Network error')
    } finally {
      setNewsletterLoading(false)
    }
  }

  // Social media links - UPDATE THESE WITH YOUR REAL LINKS LATER
  const socialLinks = {
    facebook: 'https://www.facebook.com', // Replace with: https://www.facebook.com/serwebz
    twitter: 'https://www.twitter.com',    // Replace with: https://www.twitter.com/serwebz
    instagram: 'https://www.instagram.com', // Replace with: https://www.instagram.com/serwebz
    linkedin: 'https://www.linkedin.com',   // Replace with: https://www.linkedin.com/company/serwebz
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Ser</span>
              <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">Webz</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Crafting Digital Success. We build modern, high-performing websites that drive real results for growing businesses.
            </p>
            
            {/* Social Media Links - NOW WORKING! */}
            <div className="flex gap-4">
              <a 
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 hover:text-coral-500 transition-colors">Home</Link></li>
              <li><Link href="/#services" className="text-gray-400 hover:text-coral-500 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="text-gray-400 hover:text-coral-500 transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-coral-500 transition-colors">About</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-coral-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services - NOW CLICKABLE! */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/website-development" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/ecommerce" className="text-gray-400 hover:text-coral-500 transition-colors">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-gray-400 hover:text-coral-500 transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-400 hover:text-coral-500 transition-colors">
                  Website Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-gray-400 hover:text-coral-500 transition-colors">
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+917499216988" className="hover:text-coral-500 transition-colors">
                    +91 7499216988
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:leofrancis6988@gmail.com" className="hover:text-coral-500 transition-colors break-all">
                    leofrancis6988@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                <div>Seraulim, Goa 403708, India</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} SerWebz. All rights reserved. Crafted with care in India.</p>
          <p className="mt-2 text-sm">We Build, You Grow 🚀</p>
        </div>
      </div>
    </footer>
  )
}