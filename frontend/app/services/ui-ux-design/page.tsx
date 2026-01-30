import ServiceTemplate from '@/components/templates/ServiceTemplate'
import { Palette } from 'lucide-react'

export const metadata = {
  title: 'UI/UX Design Services - Leimarics',
  description: 'Professional user interface and user experience design for websites and apps.',
}

export default function UIUXDesignPage() {
  return (
    <ServiceTemplate
      title="UI/UX Design"
      subtitle="Beautiful, user-friendly designs that convert"
      description="Great design is more than just looking good—it's about creating intuitive, engaging experiences that guide users toward their goals. We design interfaces that are both beautiful and functional, ensuring your visitors enjoy every interaction with your brand."
      icon={<Palette className="w-10 h-10 text-coral-500" />}
      features={[
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Mobile-first responsive design',
        'Accessibility compliance (WCAG)',
        'Interactive prototypes',
        'Design system creation',
        'Usability testing and iteration',
      ]}
      benefits={[
        'Increase user engagement and time on site',
        'Improve conversion rates with intuitive flows',
        'Build trust with professional, modern design',
        'Stand out from competitors with unique branding',
      ]}
      pricing={{
        basic: {
          price: '₹25,000',
          features: [
            'Website redesign (up to 5 pages)',
            'Modern, professional UI design',
            'Mobile responsive layouts',
            'Brand color scheme',
            'Typography selection',
            'Icon set',
            '2 revision rounds',
          ],
        },
        business: {
          price: '₹50,000',
          features: [
            'Complete website design (10+ pages)',
            'Everything in Basic +',
            'User flow diagrams',
            'Interactive prototypes',
            'Custom illustrations',
            'Animation design',
            'Design system documentation',
            '5 revision rounds',
          ],
        },
      }}
    />
  )
}