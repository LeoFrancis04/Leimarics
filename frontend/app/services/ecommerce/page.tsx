import ServiceTemplate from '@/components/templates/ServiceTemplate'
import { ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'E-commerce Solutions - Leimarics',
  description: 'Complete online store setup with payment gateway integration.',
}

export default function EcommercePage() {
  return (
    <ServiceTemplate
      title="E-commerce Solutions"
      subtitle="Start selling online with a professional store"
      description="Launch your online store with our complete e-commerce solutions. We handle everything from product catalog setup to payment gateway integration, giving you a professional platform to sell your products online."
      icon={<ShoppingCart className="w-10 h-10 text-coral-500" />}
      features={[
        'Product catalog with unlimited products',
        'Shopping cart and checkout system',
        'Payment gateway integration (Razorpay/PayPal)',
        'Order management dashboard',
        'Inventory tracking',
        'Customer accounts',
        'Order tracking for customers',
        'Email notifications',
      ]}
      benefits={[
        'Reach customers across India 24/7',
        'Accept online payments securely',
        'Manage your entire business online',
        'Reduce operational costs',
      ]}
      pricing={{
        basic: {
          price: '₹60,000',
          features: [
            'Complete online store setup',
            'Up to 50 products',
            'Payment gateway integration',
            'Product management system',
            'Order tracking',
            'Inventory management',
            '6 months support',
          ],
        },
        business: {
          price: '₹1,00,000',
          features: [
            'Unlimited products',
            'Everything in Basic +',
            'Advanced analytics',
            'Multi-currency support',
            'Coupon/discount system',
            'Email marketing integration',
            '12 months support',
          ],
        },
      }}
    />
  )
}