// frontend/components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 -right-48 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 -left-48 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-50 text-coral-600 font-semibold text-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 50+ Businesses</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-display">
              Crafting{' '}
              <span className="bg-gradient-to-r from-coral-500 to-pink-500 bg-clip-text text-transparent">
                Digital Success
              </span>{' '}
              for Growing Businesses
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              We build modern, high-performing websites that drive real results. 
              Transform your online presence and accelerate your business growth with SerWebz.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/#portfolio">
                <Button variant="primary" size="lg" className="group">
                  View Our Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" size="lg">
                  Get Free Quote
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '2 weeks', label: 'Avg. Delivery Time' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-navy-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Floating cards */}
            <FloatingCard delay={0} className="absolute top-0 left-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold">Project Delivered</div>
                  <div className="text-sm text-gray-500">On time &amp; budget</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.2} className="absolute top-1/3 right-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-coral-100 flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold">Lightning Fast</div>
                  <div className="text-sm text-gray-500">Under 2s load time</div>
                </div>
              </div>
            </FloatingCard>

            <FloatingCard delay={0.4} className="absolute bottom-0 left-1/4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <div className="font-semibold">Responsive</div>
                  <div className="text-sm text-gray-500">All devices</div>
                </div>
              </div>
            </FloatingCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Floating card component
function FloatingCard({ 
  children, 
  delay = 0, 
  className = '' 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay
        }
      }}
      className={`bg-white p-4 rounded-2xl shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  )
}