import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-coral-500 transition-colors">
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

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Website Development</li>
              <li>E-commerce Solutions</li>
              <li>UI/UX Design</li>
              <li>Website Maintenance</li>
              <li>SEO Optimization</li>
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