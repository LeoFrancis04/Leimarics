import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, Star } from 'lucide-react'

export const metadata = {
  title: 'Sunset Villa Resort - Portfolio | Leimarics',
  description: 'Elegant boutique hotel website with direct booking integration and virtual tours.',
}

export default function SunsetVillaPage() {
  const project = {
    title: 'Sunset Villa Resort',
    category: 'Hospitality',
    client: 'Sunset Villa Resort',
    description: 'An elegant, luxury hotel website showcasing premium amenities, room categories, direct booking system, and immersive 360° virtual tours.',
    challenge: 'Sunset Villa Resort was heavily dependent on third-party booking platforms like Booking.com and Agoda, paying 15-20% commission on every reservation. They wanted their own booking system to increase direct bookings and reduce dependency on OTAs.',
    solution: 'We designed a stunning website that captures the luxury experience of the resort with high-quality imagery, virtual tours, and a seamless direct booking engine. The site reduced OTA dependency by 40% and increased direct bookings significantly.',
    
    features: [
      'Direct booking engine with real-time room availability',
      '360° virtual tours of rooms and facilities',
      'Room category showcase with detailed amenities',
      'Special offers and package deals section',
      'Guest review and testimonial integration',
      'Photo gallery with lightbox viewing',
      'Multi-currency pricing (INR, USD, EUR)',
      'Email marketing integration for promotions',
      'Blog section for local travel guides',
      'Google Analytics and conversion tracking',
    ],
    
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'PostgreSQL',
      'Stripe Payment Gateway',
      'Google Analytics',
      'Mailchimp API',
      'Cloudinary (Image hosting)',
    ],
    
    results: [
      {
        metric: 'Direct Bookings',
        value: '+60%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '3 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Guest Rating',
        value: '4.9/5',
        icon: <Star className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'The team understood our vision perfectly and delivered a stunning website that our guests love. The training session made it easy for us to manage updates ourselves. Worth every rupee!',
      author: 'Maria Silva',
      role: 'Manager',
      company: 'Sunset Villa Resort',
    },
    
    timeline: '3 weeks',
    liveUrl: 'https://sunsetvillaresort-demo.vercel.app', // demo link

  }

  return <PortfolioDetailTemplate project={project} />
}