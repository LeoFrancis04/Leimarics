import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'About Us - SerWebz',
  description: 'Learn about SerWebz and our mission to empower businesses with professional web solutions.',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">About SerWebz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about helping businesses succeed online with modern, 
            high-performing websites that drive real results.
          </p>
        </div>
      </div>
      <About />
      <Process />
      <Testimonials />
      <Contact />
    </>
  )
}