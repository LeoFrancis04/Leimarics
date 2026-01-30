import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, Home } from 'lucide-react'

export const metadata = {
  title: 'HomeScape Realty - Portfolio | Leimarics',
  description: 'Property listings platform with advanced search and virtual property tours.',
}

export default function HomeScapeRealtyPage() {
  const project = {
    title: 'HomeScape Realty',
    category: 'Real Estate',
    client: 'HomeScape Realty',
    description: 'A comprehensive real estate platform featuring property listings, advanced search filters, virtual tours, mortgage calculator, and lead management system.',
    challenge: 'HomeScape Realty was relying on third-party listing sites where their brand got lost among competitors. They had no way to showcase their unique value proposition or capture leads directly. Property inquiries were low, and they were paying high commissions to listing platforms.',
    solution: 'We created a beautiful, user-friendly property listing website with high-quality image galleries, 360° virtual tours, interactive maps, advanced search with multiple filters (location, price, bedrooms, amenities), mortgage calculator, and an integrated CRM for lead management.',
    
    features: [
      '200+ property listings with detailed information',
      'Advanced search and filtering system',
      '360° virtual property tours',
      'Interactive neighborhood maps',
      'Mortgage calculator with EMI estimator',
      'Property comparison tool (side-by-side)',
      'Agent profiles with direct contact',
      'Schedule property viewing online',
      'Email alerts for new listings',
      'Lead management CRM integration',
      'Blog with real estate tips and market insights',
      'Mobile app for property browsing on the go',
    ],
    
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'PostgreSQL',
      'Google Maps API',
      'Cloudinary (Images)',
      'Matterport (Virtual Tours)',
      'SendGrid (Email)',
    ],
    
    results: [
      {
        metric: 'Property Inquiries',
        value: '+150%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '3 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Properties Sold',
        value: '50+',
        icon: <Home className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'The virtual tour feature has been a game-changer! Buyers can explore properties from home, which saves everyone time. Our inquiries have increased by 150%, and we\'ve closed more deals.',
      author: 'Sneha Desai',
      role: 'Director',
      company: 'HomeScape Realty',
    },
    
    timeline: '3 weeks',
    liveUrl: 'https://homescaperealty-demo.vercel.app', // demo link
  }

  return <PortfolioDetailTemplate project={project} />
}