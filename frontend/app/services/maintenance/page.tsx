import ServiceTemplate from '@/components/templates/ServiceTemplate'
import { Settings } from 'lucide-react'

export const metadata = {
  title: 'Website Maintenance Services - Leimarics',
  description: 'Keep your website secure, fast, and up-to-date with our maintenance services.',
}

export default function MaintenancePage() {
  return (
    <ServiceTemplate
      title="Website Maintenance"
      subtitle="Keep your website running smoothly 24/7"
      description="Your website needs regular care to stay secure, fast, and functioning properly. Our maintenance services ensure your site is always up-to-date, protected from threats, and performing at its best—so you can focus on running your business."
      icon={<Settings className="w-10 h-10 text-coral-500" />}
      features={[
        'Regular security updates and patches',
        'Daily backups and disaster recovery',
        'Performance monitoring and optimization',
        'Content updates (text, images, prices)',
        'Plugin and software updates',
        'Broken link checking and fixing',
        'Uptime monitoring (99.9% guarantee)',
        'Monthly performance reports',
      ]}
      benefits={[
        'Prevent security breaches and hacking',
        'Avoid downtime that loses customers',
        'Keep your site fast and performing well',
        'Peace of mind with professional support',
      ]}
      pricing={{
        basic: {
          price: '₹2,500/month',
          features: [
            'Weekly security updates',
            'Weekly backups',
            'Monthly content updates (up to 3 changes)',
            'Performance monitoring',
            'Email support',
            'Monthly report',
          ],
        },
        business: {
          price: '₹5,000/month',
          features: [
            'Daily security updates',
            'Daily backups',
            'Unlimited content updates',
            'Everything in Basic +',
            'Priority support',
            'Emergency support (24/7)',
            'SEO monitoring',
            'Detailed analytics',
          ],
        },
      }}
    />
  )
}