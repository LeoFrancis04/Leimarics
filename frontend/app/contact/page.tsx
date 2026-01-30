import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'

export const metadata = {
  title: 'Contact Us - Leimarics',
  description: 'Get in touch with Leimarics for your web development needs. We reply within 24 hours.',
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind? Let's talk! Fill out the form below and we'll 
            get back to you within 24 hours.
          </p>
        </div>
      </div>
      <Contact />
      <FAQ />
    </>
  )
}
