import PortfolioDetailTemplate from '@/components/templates/PortfolioDetailTemplate'
import { TrendingUp, Clock, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Dr. Care Clinic - Portfolio | Leimarics',
  description: 'Medical clinic website with online appointment booking and patient portal.',
}

export default function DrCareClinicPage() {
  const project = {
    title: 'Dr. Care Clinic',
    category: 'Healthcare',
    client: 'Dr. Care Clinic',
    description: 'A professional medical clinic website with online appointment booking, doctor profiles, patient portal, health blog, and telemedicine integration.',
    challenge: 'Dr. Care Clinic was managing appointments through phone calls, leading to scheduling conflicts, long wait times, and missed appointments. Patients had no way to access their medical records or prescriptions online. The clinic needed a modern digital solution.',
    solution: 'We developed a comprehensive healthcare platform with online appointment booking showing real-time doctor availability, patient portal for accessing medical records and test results, automated appointment reminders via SMS and email, telemedicine video consultation integration, and a health blog for patient education.',
    
    features: [
      'Online appointment booking with real-time availability',
      'Doctor profiles with specializations and timings',
      'Patient portal for medical records access',
      'Prescription and lab report download',
      'Telemedicine video consultation integration',
      'Automated appointment reminders (SMS + Email)',
      'Health insurance information and verification',
      'Patient feedback and review system',
      'Health blog with medical articles',
      'Emergency contact information prominently displayed',
      'Multi-language support (English, Hindi, Marathi)',
      'HIPAA-compliant data security',
    ],
    
    technologies: [
      'Next.js 14',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'PostgreSQL',
      'Twilio (SMS)',
      'Zoom API (Telemedicine)',
      'Stripe (Payments)',
      'AWS S3 (Secure Documents)',
      'Encryption (AES-256)',
    ],
    
    results: [
      {
        metric: 'Online Bookings',
        value: '+95%',
        icon: <TrendingUp className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Development Time',
        value: '3 weeks',
        icon: <Clock className="w-8 h-8 text-coral-600" />,
      },
      {
        metric: 'Missed Appointments',
        value: '-75%',
        icon: <Calendar className="w-8 h-8 text-coral-600" />,
      },
    ],
    
    images: {
      hero: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=800&h=600&fit=crop',
      ],
    },
    
    testimonial: {
      quote: 'The online booking system has transformed our clinic operations. Patients love the convenience, and we\'ve reduced no-shows by 75%. The patient portal is a huge value-add.',
      author: 'Dr. Rajesh Kumar',
      role: 'Chief Medical Officer',
      company: 'Dr. Care Clinic',
    },
    
    timeline: '3 weeks',
    liveUrl: 'https://drcareclinic-demo.vercel.app', //demo link
  }

  return <PortfolioDetailTemplate project={project} />
}