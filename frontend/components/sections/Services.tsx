'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check } from 'lucide-react'

const services = [
  {
    name: 'Basic Website',
    price: '₹15,000',
    description: 'Perfect for small businesses getting started online',
    features: [
      '5-page professional website',
      'Mobile responsive design',
      'Contact form integration',
      'Google Maps integration',
      'Basic SEO optimization',
      '1 month support',
    ],
    popular: false,
  },
  {
    name: 'Business Website',
    price: '₹30,000',
    description: 'Ideal for established businesses looking to grow',
    features: [
      'Everything in Basic +',
      'Up to 10+ pages',
      'Photo gallery/portfolio',
      'Social media integration',
      'Blog section',
      'WhatsApp Business integration',
      '3 months support',
      'Google My Business setup',
    ],
    popular: true,
  },
  {
    name: 'E-commerce',
    price: '₹60,000',
    description: 'Complete online store with payment gateway',
    features: [
      'Everything in Business +',
      'Online store setup',
      'Payment gateway integration',
      'Product management system',
      'Order tracking',
      'Inventory management',
      '6 months support',
    ],
    popular: false,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-coral-100 text-coral-600 font-semibold text-sm mb-4">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. All packages include modern design, 
            mobile responsiveness, and ongoing support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card 
                hover 
                className={`h-full relative ${
                  service.popular 
                    ? 'border-coral-500 border-2 scale-105 shadow-2xl' 
                    : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-coral-500 to-pink-500 text-white rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-navy-900">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={service.popular ? 'primary' : 'outline'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}