import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Adventure Tours Platform - Portfolio | SerWebz',
  description: 'Comprehensive tour operator website with booking system and package management.',
}

export default function AdventureToursPage() {
  const project = {
    title: 'Adventure Tours Platform',
    category: 'Travel & Tourism',
    client: 'Adventure Tours Co.',
    description: 'A comprehensive tour operator platform featuring advanced booking system, package management, customer reviews, and integrated payment gateway.',
    challenge: 'Adventure Tours Co. was managing bookings through phone calls and emails, leading to double bookings, missed inquiries, and administrative headaches. They needed a professional online platform to streamline operations and increase bookings.',
    solution: 'We built a complete tour booking platform with real-time availability checking, package customization, secure payment processing, and automated confirmation emails. The admin dashboard allows them to manage tours, bookings, and customer inquiries efficiently.',
    
    features: [
      'Advanced tour booking system with calendar availability',
      'Multiple tour packages with custom pricing',
      'Secure payment gateway integration (Razorpay)',
      'Customer review and rating system',
      'Photo galleries for each tour destination',
      'Automated booking confirmation emails',
      'Admin dashboard for tour and booking management',
      'WhatsApp Business integration for quick inquiries',
      'Multi-language support (English, Hindi)',
      'Mobile app-like experience (PWA)',
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
      'Razorpay API',
      'WhatsApp Business API',
      'Nodemailer',
    ],
    
    results: [
      {
        metric: 'Increased Inquiries',
        value: '+120%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '3 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Tour Destinations',
        value: '25+',
        icon: <MapPin className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'Professional, responsive, and delivered exactly what was promised. Our new website has helped us attract more customers and stand out from competitors. Highly recommended!',
      author: 'Arun Sharma',
      role: 'CEO',
      company: 'Adventure Tours Co.',
    },
    
    timeline: '3 weeks',
    liveUrl: 'https://adventuretoursco-demo.vercel.app', //demo link
  }

  return <PortfolioDetailTemplate project={project} />
}