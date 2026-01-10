import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio limit={3} showViewAll={true} />
      <About />
      <Process />
      <Testimonials limit={3} />
      <Contact />
      <FAQ />
    </>
  )
}