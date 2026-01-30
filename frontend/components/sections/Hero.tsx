'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge - UPDATED */}
            <Badge variant="coral" className="mb-6 text-lg px-6 py-2">
              <Sparkles className="w-5 h-5 mr-2" />
              For What&apos;s Next
            </Badge>

            {/* Headline - UPDATED */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-display">
              Where Ambition Meets
              <span className="block mt-2 bg-gradient-to-r from-coral-500 via-pink-500 to-coral-600 bg-clip-text text-transparent">
                Execution
              </span>
            </h1>

            {/* Subheadline - UPDATED */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We architect world-class digital solutions that help businesses communicate clearly, 
              grow sustainably, and lead their markets. Built for today. Designed for forever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/#contact">
                <Button variant="primary" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
                  View Our Work
                </Button>
              </Link>
            </div>

            {/* Trust Indicators - UPDATED */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle, label: '50+ Projects Delivered' },
                { icon: CheckCircle, label: 'Global Standards' },
                { icon: CheckCircle, label: '98% Client Satisfaction' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 text-gray-300"
                >
                  <item.icon className="w-6 h-6 text-coral-400" />
                  <span className="font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}