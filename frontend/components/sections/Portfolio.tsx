// frontend/components/sections/Portfolio.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { ArrowRight, ExternalLink, TrendingUp, Clock } from 'lucide-react'

// Mock project type (replace with your Contentful types later)
interface Project {
  sys: {
    id: string
    createdAt: string
  }
  fields: {
    title: string
    slug: string
    category: string
    shortDescription: string
    featuredImage: {
      fields: {
        file: {
          url: string
        }
      }
    }
    clientName: string
    results: Array<{
      metric: string
      value: string
    }>
    liveUrl?: string
  }
}

interface PortfolioProps {
  projects?: Project[]
  limit?: number
  showViewAll?: boolean
}

export default function Portfolio({ 
  projects = [], 
  limit, 
  showViewAll = true 
}: PortfolioProps) {
  // Mock data for fallback
  const mockProjects: Project[] = [
    {
      sys: { id: '1', createdAt: '2024-01-01' },
      fields: {
        title: 'Coastal Café Website',
        slug: 'coastal-cafe',
        category: 'Restaurant',
        shortDescription: 'Modern restaurant website with online reservations and dynamic menu system.',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop'
            }
          }
        },
        clientName: 'Coastal Café',
        results: [
          { metric: 'Increased Bookings', value: '+45%' },
          { metric: 'Development Time', value: '2 weeks' }
        ],
        liveUrl: 'https://example.com'
      }
    },
    {
      sys: { id: '2', createdAt: '2024-01-02' },
      fields: {
        title: 'Adventure Tours Platform',
        slug: 'adventure-tours',
        category: 'Travel',
        shortDescription: 'Comprehensive tour operator website with booking system and package management.',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
            }
          }
        },
        clientName: 'Adventure Tours Co.',
        results: [
          { metric: 'Increased Inquiries', value: '+120%' },
          { metric: 'Development Time', value: '3 weeks' }
        ],
        liveUrl: 'https://example.com'
      }
    },
    {
      sys: { id: '3', createdAt: '2024-01-03' },
      fields: {
        title: 'Sunset Villa Resort',
        slug: 'sunset-villa',
        category: 'Hotel',
        shortDescription: 'Elegant boutique hotel website with direct booking integration and virtual tours.',
        featuredImage: {
          fields: {
            file: {
              url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
            }
          }
        },
        clientName: 'Sunset Villa Resort',
        results: [
          { metric: 'Direct Bookings', value: '+60%' },
          { metric: 'Development Time', value: '3 weeks' }
        ],
        liveUrl: 'https://example.com'
      }
    }
  ]

  const projectsToDisplay = projects.length > 0 ? projects : mockProjects
  const displayProjects = limit ? projectsToDisplay.slice(0, limit) : projectsToDisplay

  const getCategoryColor = (category: string) => {
    const colors: Record<string, 'coral' | 'info' | 'success' | 'warning'> = {
      Restaurant: 'coral',
      Hotel: 'info',
      Travel: 'success',
      Retail: 'warning',
    }
    return colors[category] || 'coral'
  }

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      Restaurant: '🍽️',
      Hotel: '🏨',
      Travel: '✈️',
      Retail: '🛍️',
    }
    return icons[category] || '💼'
  }

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="coral" className="mb-4 text-sm px-4 py-2">
            Our Work
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-display">
            Recent Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across different industries. 
            Each website is crafted with attention to detail and optimized for results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.sys.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${project.fields.slug}`}>
                <Card hover className="h-full group cursor-pointer overflow-hidden">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.fields.featuredImage.fields.file.url}
                      alt={project.fields.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <Badge variant={getCategoryColor(project.fields.category)}>
                        <span className="mr-1">{getCategoryIcon(project.fields.category)}</span>
                        {project.fields.category}
                      </Badge>
                    </div>

                    {/* Live link button */}
                    {project.fields.liveUrl && (
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                          <ExternalLink className="w-4 h-4 text-navy-900" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <CardHeader>
                    <CardTitle className="group-hover:text-coral-500 transition-colors">
                      {project.fields.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.fields.shortDescription}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {/* Client name */}
                    <div className="text-sm text-gray-500 mb-4">
                      Client: <span className="font-semibold text-gray-700">{project.fields.clientName}</span>
                    </div>

                    {/* Results */}
                    {project.fields.results && project.fields.results.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                        {project.fields.results.slice(0, 2).map((result, i) => (
                          <div key={i} className="flex items-start gap-2">
                            {result.metric.toLowerCase().includes('time') ? (
                              <Clock className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <TrendingUp className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                            )}
                            <div>
                              <div className="text-sm font-semibold text-navy-900">{result.value}</div>
                              <div className="text-xs text-gray-500">{result.metric}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* View project link */}
                    <div className="mt-4 flex items-center gap-2 text-coral-500 font-semibold group-hover:gap-3 transition-all">
                      <span>View Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/portfolio">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}