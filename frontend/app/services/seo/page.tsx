import ServiceTemplate from '@/components/templates/ServiceTemplate'
import { TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'SEO Optimization Services - Leimarics',
  description: 'Improve your Google rankings and get more organic traffic with professional SEO.',
}

export default function SEOPage() {
  return (
    <ServiceTemplate
      title="SEO Optimization"
      subtitle="Get found on Google and attract more customers"
      description="What good is a beautiful website if no one can find it? Our SEO services help your business rank higher on Google, attract more organic traffic, and convert visitors into customers. We use proven strategies to boost your online visibility and grow your business."
      icon={<TrendingUp className="w-10 h-10 text-coral-500" />}
      features={[
        'Comprehensive SEO audit',
        'Keyword research and strategy',
        'On-page optimization (meta tags, headers, content)',
        'Technical SEO (site speed, mobile, structure)',
        'Local SEO (Google My Business optimization)',
        'Backlink building and outreach',
        'Content optimization',
        'Monthly ranking reports',
      ]}
      benefits={[
        'Get more customers from Google searches',
        'Reduce dependency on paid advertising',
        'Build long-term organic traffic',
        'Outrank your competitors',
      ]}
      pricing={{
        basic: {
          price: '₹8,000/month',
          features: [
            'SEO audit and recommendations',
            'Keyword research (10 keywords)',
            'On-page optimization',
            'Meta tags and descriptions',
            'Google My Business setup',
            'Monthly ranking report',
            '3-month minimum',
          ],
        },
        business: {
          price: '₹15,000/month',
          features: [
            'Everything in Basic +',
            'Advanced keyword research (30+ keywords)',
            'Content creation (2 blog posts/month)',
            'Backlink building',
            'Competitor analysis',
            'Technical SEO fixes',
            'Weekly progress reports',
            'Priority support',
          ],
        },
      }}
    />
  )
}