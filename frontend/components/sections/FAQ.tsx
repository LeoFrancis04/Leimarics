'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer: 'Timeline depends on complexity. A basic business site typically takes 2-4 weeks, while larger e-commerce or custom web apps may take 6-10 weeks.'
  },
  {
    question: 'Do you provide website maintenance?',
    answer: 'Yes! We offer ongoing support packages to keep your website secure, updated, and running smoothly after launch.'
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer: 'Absolutely. All our websites are designed "mobile-first" to look and perform perfectly on phones, tablets, and desktops.'
  },
  {
    question: 'Can I update the website content myself?',
    answer: 'Yes. We build on modern CMS platforms that allow you to easily edit text, images, and blog posts without needing to code.'
  },
  {
    question: 'What is your payment structure?',
    answer: 'Typically, we take a 50% deposit to start the project and the remaining 50% upon completion and launch.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    // FIX: Added id="faq" here so the navbar link can find it
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="coral" className="mb-4">Common Questions</Badge>
          <h2 className="text-4xl font-bold text-navy-900 mb-4 font-display">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about working with SerWebz.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-navy-900 text-lg">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4 text-coral-500">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}