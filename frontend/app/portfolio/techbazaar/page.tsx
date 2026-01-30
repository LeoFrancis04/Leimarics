import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, ShoppingCart } from 'lucide-react'

export const metadata = {
  title: 'TechBazaar E-Store - Portfolio | Leimarics',
  description: 'Full-featured electronics e-commerce platform with payment gateway and inventory.',
}

export default function TechBazaarPage() {
  const project = {
    title: 'TechBazaar E-Store',
    category: 'E-commerce',
    client: 'TechBazaar',
    description: 'A complete electronics e-commerce platform with advanced product filtering, secure payment processing, real-time inventory management, and customer reviews.',
    challenge: 'TechBazaar was selling through social media and WhatsApp, leading to order confusion, manual inventory tracking, and lost sales. They needed a professional online store to scale their business and compete with larger e-commerce platforms.',
    solution: 'We built a feature-rich e-commerce platform with product categories, advanced search and filters, secure checkout with multiple payment options, automated inventory management, order tracking, and a comprehensive admin dashboard for managing products, orders, and customers.',
    
    features: [
      'Product catalog with 500+ electronics items',
      'Advanced search with filters (price, brand, specs)',
      'Shopping cart with saved items',
      'Multiple payment options (Cards, UPI, COD, EMI)',
      'Real-time inventory tracking and low-stock alerts',
      'Order tracking with SMS notifications',
      'Customer reviews and ratings system',
      'Wishlist and product comparison',
      'Automated invoice generation',
      'Admin dashboard for complete store management',
      'Analytics and sales reports',
      'Coupon and discount management system',
    ],
    
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma ORM',
      'Razorpay Payment Gateway',
      'AWS S3 (Images)',
      'Redis (Caching)',
      'Elasticsearch (Search)',
    ],
    
    results: [
      {
        metric: 'Online Sales',
        value: '+200%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '4 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Daily Orders',
        value: '150+',
        icon: <ShoppingCart className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'Moving to our own e-commerce platform was the best decision for our business. Sales have tripled, and we now have complete control over our brand and customer experience.',
      author: 'Amit Patel',
      role: 'Founder',
      company: 'TechBazaar',
    },
    
    timeline: '4 weeks',
    liveUrl: 'https://techbazaar-demo.vercel.app', // demo link
  }

  return <PortfolioDetailTemplate project={project} />
}