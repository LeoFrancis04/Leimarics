'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Input, Textarea, Select } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setLoading(false)
    setSuccess(true)
    
    // Reset form
    setTimeout(() => {
      setSuccess(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="coral" className="mb-4">Get In Touch</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white font-display">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your online presence? Get in touch and let&apos;s discuss how 
            we can help your business grow.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Fill out the form and we&apos;ll get back to you within 24 hours. 
                Or reach out directly using the information below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-coral-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Phone</div>
                  <a 
                    href="tel:+917499216988" 
                    className="text-gray-300 hover:text-coral-400 transition-colors text-lg"
                  >
                    +91 7499216988
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-coral-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Email</div>
                  <a 
                    href="mailto:leofrancis6988@gmail.com" 
                    className="text-gray-300 hover:text-coral-400 transition-colors break-all"
                  >
                    leofrancis6988@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-coral-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Location</div>
                  <p className="text-gray-300">
                    Sukubhat, Fatona, Seraulim<br />
                    Goa 403708, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coral-400" />
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Business Hours</div>
                  <p className="text-gray-300">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm text-gray-300">
                ⚡ <span className="font-semibold text-white">Quick Response:</span> We respond to all inquiries 
                within 4 hours during business days. Your time is valuable, and we respect that.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <Input
                  label="Your Name"
                  type="text"
                  placeholder="John Doe"
                  required
                />

                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@example.com"
                  required
                />

                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                />

                <Select label="Project Type" required>
                  <option value="">Select a service</option>
                  <option value="basic">Basic Website</option>
                  <option value="business">Business Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="maintenance">Website Maintenance</option>
                  <option value="other">Other</option>
                </Select>

                <Textarea
                  label="Tell Us About Your Project"
                  placeholder="Describe your requirements, goals, and any specific features you need..."
                  rows={5}
                  required
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    'Sending...'
                  ) : success ? (
                    '✓ Message Sent!'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>

                {success && (
                  <p className="text-green-600 text-center font-semibold">
                    Thank you! We&apos;ll get back to you soon.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}