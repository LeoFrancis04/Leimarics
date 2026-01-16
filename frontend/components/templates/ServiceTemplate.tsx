'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Check, ArrowRight } from 'lucide-react'
import Contact from '@/components/sections/Contact'

interface ServiceTemplateProps {
  title: string
  subtitle: string
  description: string
  features: string[]
  benefits: string[]
  pricing: {
    basic: { price: string; features: string[] }
    business: { price: string; features: string[] }
  }
  icon: React.ReactNode
}

export default function ServiceTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  pricing,
  icon,
}: ServiceTemplateProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-coral-500/20 mb-6">
              {icon}
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8">{subtitle}</p>
            <Link href="/#contact">
              <Button variant="primary" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">{description}</p>

            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-coral-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose This Service?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <Check className="w-8 h-8 text-coral-500 mb-3" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Pricing Options</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic */}
            <div className="border-2 border-gray-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
              <div className="text-4xl font-bold text-coral-500 mb-6">{pricing.basic.price}</div>
              <ul className="space-y-3 mb-8">
                {pricing.basic.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#contact">
                <Button variant="outline" className="w-full">Choose Basic</Button>
              </Link>
            </div>

            {/* Business */}
            <div className="border-2 border-coral-500 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-coral-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Business Package</h3>
              <div className="text-4xl font-bold text-coral-500 mb-6">{pricing.business.price}</div>
              <ul className="space-y-3 mb-8">
                {pricing.business.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-coral-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#contact">
                <Button variant="primary" className="w-full">Choose Business</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
    </>
  )
}