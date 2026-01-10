import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

// Types for Contentful entries
export interface PortfolioProject {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    category: 'Restaurant' | 'Hotel' | 'Travel' | 'Retail'
    shortDescription: string
    fullDescription: any // Rich text
    featuredImage: {
      fields: {
        title: string
        file: {
          url: string
          details: {
            size: number
            image: {
              width: number
              height: number
            }
          }
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

export interface Testimonial {
  sys: {
    id: string
    createdAt: string
  }
  fields: {
    clientName: string
    clientRole: string
    clientCompany: string
    rating: number
    testimonialText: string
  }
}

// Helper functions
export async function getPortfolioProjects() {
  try {
    const entries = await contentfulClient.getEntries<PortfolioProject>({
      content_type: 'portfolioProject',
      order: '-sys.createdAt',
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    const entries = await contentfulClient.getEntries<PortfolioProject>({
      content_type: 'portfolioProject',
      'fields.slug': slug,
      limit: 1,
    })
    return entries.items[0] || null
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getTestimonials() {
  try {
    const entries = await contentfulClient.getEntries<Testimonial>({
      content_type: 'testimonial',
      order: '-sys.createdAt',
      limit: 6,
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}