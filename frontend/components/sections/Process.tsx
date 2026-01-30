'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Search, FileText, Code, Rocket, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Discovery',
    description: 'We learn about your business, goals, and target audience to create the perfect strategy.',
    duration: '1-2 days',
    color: 'from-coral-500 to-pink-500'
  },
  {
    icon: FileText,
    title: 'Proposal',
    description: 'Receive a detailed project proposal with timeline, pricing, and deliverables.',
    duration: '1 day',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Code,
    title: 'Design & Development',
    description: 'We create your website with regular updates and opportunities for feedback.',
    duration: '1-3 weeks',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Rocket,
    title: 'Launch & Training',
    description: 'Your website goes live! We provide training so you can manage it confidently.',
    duration: '1 day',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing support and maintenance to keep your website running smoothly.',
    duration: 'Ongoing',
    color: 'from-orange-500 to-red-500'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="coral" className="mb-4">Our Process</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process designed to deliver exceptional results. 
            Here is what you can expect when working with Leimarics.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-gray-300 to-transparent hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>
                </div>

                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-navy-900">{step.title}</h3>
                    <Badge variant="outline" className="text-xs font-semibold">
                      {step.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-br from-coral-50 to-pink-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6 max-w-2xl">
              <span className="font-bold text-navy-900">Ready to get started?</span> The first step is always free. 
              Let us discuss your project and see how we can help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-coral-500 to-coral-600 text-white rounded-xl font-semibold hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Schedule Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}