import ServiceTemplate from '@/components/templates/ServiceTemplate'
import { Globe } from 'lucide-react'

export const metadata = {
  title: 'Website Development Services - Leimarics',
  description: 'Professional custom website development services for businesses in India.',
}

export default function WebsiteDevelopmentPage() {
  return (
    <ServiceTemplate
      title="Website Development"
      subtitle="Custom websites built for your business success"
      description="We create professional, modern websites that represent your brand perfectly and convert visitors into customers. Every website is custom-built with clean code, fast performance, and mobile responsiveness."
      icon={<Globe className="w-10 h-10 text-coral-500" />}
      features={[
        'Custom design tailored to your brand',
        'Mobile-responsive on all devices',
        'SEO-optimized for Google rankings',
        'Fast loading speeds (under 3 seconds)',
        'Secure HTTPS encryption',
        'Contact forms and integrations',
        'Content management system',
        'Google Analytics integration',
      ]}
      benefits={[
        'Professional online presence that builds trust',
        'Attract more customers with better visibility',
        'Easy to update and manage yourself',
        'Works perfectly on phones, tablets, and desktops',
      ]}
      pricing={{
        basic: {
          price: '₹15,000',
          features: [
            '5-page professional website',
            'Mobile responsive design',
            'Contact form integration',
            'Google Maps integration',
            'Basic SEO optimization',
            '1 month support',
          ],
        },
        business: {
          price: '₹30,000',
          features: [
            'Up to 10+ pages',
            'Everything in Basic +',
            'Photo gallery/portfolio',
            'Social media integration',
            'Blog section',
            'WhatsApp Business integration',
            '3 months support',
          ],
        },
      }}
    />
  )
}