'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" alt="SerWebz Team" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-navy-900">50+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <Badge variant="coral">About SerWebz</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold">Connecting Businesses to Digital Excellence</h2>
            <p className="text-lg text-gray-600">At SerWebz, we believe every business deserves a powerful online presence. We specialize in creating modern websites that drive real results.</p>
            {['Custom-built websites', 'Mobile-responsive design', 'SEO-optimized', 'Ongoing support', 'Fast delivery'].map((f, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-coral-600 mt-1" />
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}