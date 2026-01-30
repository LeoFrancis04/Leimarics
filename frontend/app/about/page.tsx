import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export const metadata = {
  title: 'About Us - Leimarics',
  description: 'Learn about Leimarics: Strength, Vision, and Wisdom. We architect world-class digital solutions for global brands.',
}

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 font-display">
              About Leimarics
            </h1>
            <p className="text-xl text-gray-600">
              For What&apos;s Next. Where Ambition Meets Execution.
            </p>
          </div>
        </div>
      </section>
      
      <About />
      <Contact />
    </>
  )
}