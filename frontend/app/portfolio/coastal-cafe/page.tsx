import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'Coastal Café Website - Portfolio | SerWebz',
  description: 'Modern restaurant website with online reservations and dynamic menu system.',
}

export default function CoastalCafePage() {
  const project = {
    title: 'Coastal Café Website',
    category: 'Restaurant',
    client: 'Coastal Café',
    description: 'A modern, elegant restaurant website featuring online reservations, dynamic menu system, and seamless integration with social media platforms.',
    challenge: 'Coastal Café needed a digital presence that would reflect their upscale coastal dining experience while making it easy for customers to make reservations and view their seasonal menu. They were losing customers to competitors who offered online booking.',
    solution: 'We created a stunning, mobile-responsive website with an integrated reservation system, beautiful food photography galleries, and a dynamic menu that the restaurant can update daily. The site captures the essence of coastal dining with ocean-inspired design elements.',
    
    features: [
      'Online table reservation system with real-time availability',
      'Dynamic menu management with daily specials',
      'Beautiful photo gallery showcasing dishes and ambiance',
      'Google Maps integration for easy navigation',
      'Social media integration (Instagram feed)',
      'Mobile-responsive design optimized for all devices',
      'Contact form with instant email notifications',
      'SEO optimization for local search visibility',
    ],
    
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Google Maps API',
      'Instagram API',
    ],
    
    results: [
      {
        metric: 'Increased Bookings',
        value: '+45%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '2 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Customer Satisfaction',
        value: '98%',
        icon: <Users className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'Working with SerWebz was a game-changer for our restaurant. Our online bookings increased by 40% within the first month. The website is beautiful, fast, and exactly what we needed!',
      author: 'Priya Reddy',
      role: 'Owner',
      company: 'Coastal Café',
    },
    
    timeline: '2 weeks',
    liveUrl: 'https://coastalcafe-demo.vercel.app', // demo link
  }

  return <PortfolioDetailTemplate project={project} />
}