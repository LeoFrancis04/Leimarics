import Portfolio from '@/components/sections/Portfolio'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'Our Portfolio - Leimarics',
  description: 'Explore our portfolio of successful web development projects across different industries.',
}

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects. Each website is crafted 
            with attention to detail and optimized for results.
          </p>
        </div>
      </div>
      {/* <Portfolio showViewAll={false} /> */}
      {/* Show ALL projects (no limit) */}
      <Portfolio />
      <Testimonials limit={3} />
      <Contact />
    </>
  )
}