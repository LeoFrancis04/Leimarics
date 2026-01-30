import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, Users } from 'lucide-react'

export const metadata = {
  title: 'FitZone Gym Website - Portfolio | Leimarics',
  description: 'Modern fitness center website with class schedules and membership management.',
}

export default function FitZoneGymPage() {
  const project = {
    title: 'FitZone Gym',
    category: 'Fitness & Wellness',
    client: 'FitZone Gym',
    description: 'A dynamic fitness center website featuring class schedules, trainer profiles, membership management, and online class booking system.',
    challenge: 'FitZone Gym was struggling with manual class registrations and membership renewals. Members had no way to view schedules online, leading to missed classes and frustration. They needed a modern solution to streamline operations.',
    solution: 'We created an engaging, mobile-first website with an integrated class booking system, trainer profiles with specialty areas, automated membership renewal reminders, and a member portal where users can track their fitness journey and book classes in real-time.',
    
    features: [
      'Real-time class schedule with availability tracking',
      'Online class booking and waitlist management',
      'Trainer profiles with specializations and schedules',
      'Member portal with workout history tracking',
      'Membership plan comparison and online sign-up',
      'Automated renewal and payment reminders',
      'Fitness blog with workout tips and nutrition advice',
      'Integration with fitness tracking apps (MyFitnessPal, Strava)',
      'Virtual tour of gym facilities',
      'Mobile app-like experience for easy booking on the go',
    ],
    
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Stripe (Subscriptions)',
      'Calendar API',
      'Push Notifications',
      'Google Maps',
    ],
    
    results: [
      {
        metric: 'New Memberships',
        value: '+85%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '2 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Class Attendance',
        value: '+70%',
        icon: <Users className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'Our members love the new booking system! Class attendance has increased dramatically, and we\'ve reduced no-shows by 60%. The website perfectly captures our energetic brand.',
      author: 'Rahul Mehta',
      role: 'Owner',
      company: 'FitZone Gym',
    },
    
    timeline: '2 weeks',
    liveUrl: 'https://fitzonegym-demo.vercel.app', // demo link
  }

  return <PortfolioDetailTemplate project={project} />
}