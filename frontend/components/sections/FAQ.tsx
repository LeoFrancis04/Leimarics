'use client'
import { useState } from 'react'
import { Badge } from '@/components/ui/Badge'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'How much does a website cost?', a: 'Packages start from ₹15,000 for basic websites.' },
  { q: 'How long does it take?', a: 'Most projects are completed in 2-3 weeks.' },
  { q: 'Do you provide support?', a: 'Yes! All packages include post-launch support.' }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <Badge variant="coral">FAQ</Badge>
          <h2 className="text-4xl font-bold mt-4">Frequently Asked Questions</h2>
        </div>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-4">
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-6 bg-gray-50 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.q}</h3>
                <ChevronDown className={`w-5 h-5 transition ${open === i ? 'rotate-180' : ''}`} />
              </div>
              {open === i && <p className="mt-4 text-gray-600">{faq.a}</p>}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}