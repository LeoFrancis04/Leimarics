// frontend/components/sections/Testimonials.tsx
'use client'

import { motion } from 'framer-motion'
import { Card, CardHeader, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Quote, Star } from 'lucide-react'

// Mock testimonial type
interface Testimonial {
  sys: {
    id: string
    createdAt: string
  }
  fields: {
    clientName: string
    clientRole: string
    clientCompany: string
    rating: number
    testimonialText: string
  }
}

interface TestimonialsProps {
  testimonials?: Testimonial[]
  limit?: number
}

export default function Testimonials({ testimonials = [], limit }: TestimonialsProps) {
  // Mock data for fallback
  const mockTestimonials: Testimonial[] = [
    {
      sys: { id: '1', createdAt: '2024-01-01' },
      fields: {
        clientName: 'Priya Reddy',
        clientRole: 'Owner',
        clientCompany: 'Spice Garden Restaurant',
        rating: 5,
        testimonialText: "Working with SerWebz was a game-changer for our restaurant. Our online bookings increased by 40% within the first month. The website is beautiful, fast, and exactly what we needed!"
      }
    },
    {
      sys: { id: '2', createdAt: '2024-01-02' },
      fields: {
        clientName: 'Arun Sharma',
        clientRole: 'CEO',
        clientCompany: 'Coastal Adventures Tours',
        rating: 5,
        testimonialText: "Professional, responsive, and delivered exactly what was promised. Our new website has helped us attract more customers and stand out from competitors. Highly recommended!"
      }
    },
    {
      sys: { id: '3', createdAt: '2024-01-03' },
      fields: {
        clientName: 'Maria Silva',
        clientRole: 'Manager',
        clientCompany: 'Sunset Beach Resort',
        rating: 5,
        testimonialText: "The team understood our vision perfectly and delivered a stunning website that our guests love. The training session made it easy for us to manage updates ourselves. Worth every rupee!"
      }
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : mockTestimonials
  const limitedTestimonials = limit ? displayTestimonials.slice(0, limit) : displayTestimonials

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-coral-500 text-coral-500' : 'fill-gray-200 text-gray-200'
        }`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="coral" className="mb-4 text-sm px-4 py-2">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with SerWebz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {limitedTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card hover className="h-full relative">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-coral-100 to-coral-50 flex items-center justify-center opacity-50">
                  <Quote className="w-8 h-8 text-coral-500" />
                </div>

                <CardHeader>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.fields.rating)}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Testimonial Text */}
                  <p className="text-gray-700 leading-relaxed italic relative z-10">
                    &quot;{testimonial.fields.testimonialText}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    {/* Avatar */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {getInitials(testimonial.fields.clientName)}
                    </div>

                    {/* Name and Company */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-navy-900 truncate">
                        {testimonial.fields.clientName}
                      </h4>
                      <p className="text-sm text-gray-600 truncate">
                        {testimonial.fields.clientRole}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {testimonial.fields.clientCompany}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg">
            <div>
              <div className="text-3xl font-bold text-navy-900">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-3xl font-bold text-navy-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div>
              <div className="text-3xl font-bold text-navy-900">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}