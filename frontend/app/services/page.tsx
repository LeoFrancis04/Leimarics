import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Our Services - Leimarics',
  description: 'Professional web development services including website design, e-commerce, and maintenance.',
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From simple websites to complex e-commerce platforms, we offer 
            comprehensive web development services tailored to your needs.
          </p>
        </div>
      </div>
      <Services />
      <Process />
      <Testimonials limit={3} />
      <FAQ />
      <Contact />
    </>
  )
}