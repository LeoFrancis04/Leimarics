import { createClient, type EntrySkeletonType } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
})

// --- 1. Portfolio Project Types ---
export interface PortfolioProjectFields {
  title: string
  slug: string
  category: 'Restaurant' | 'Hotel' | 'Travel' | 'Retail'
  shortDescription: string
  fullDescription: any 
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

export interface PortfolioProjectSkeleton extends EntrySkeletonType {
  contentTypeId: 'portfolioProject'
  fields: PortfolioProjectFields
}

// --- 2. Testimonial Types ---
export interface TestimonialFields {
  clientName: string
  clientRole: string
  clientCompany: string
  rating: number
  testimonialText: string
}

export interface TestimonialSkeleton extends EntrySkeletonType {
  contentTypeId: 'testimonial'
  fields: TestimonialFields
}

// --- 3. Helper Functions ---

export async function getPortfolioProjects() {
  try {
    const entries = await contentfulClient.getEntries<PortfolioProjectSkeleton>({
      content_type: 'portfolioProject',
      order: ['-sys.createdAt'],
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching portfolio projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string) {
  try {
    // FIX applied here: added 'as any' to satisfy the TS compiler
    const entries = await contentfulClient.getEntries<PortfolioProjectSkeleton>({
      content_type: 'portfolioProject',
      'fields.slug': slug,
      limit: 1,
    } as any)
    return entries.items[0] || null
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getTestimonials() {
  try {
    const entries = await contentfulClient.getEntries<TestimonialSkeleton>({
      content_type: 'testimonial',
      order: ['-sys.createdAt'],
      limit: 6,
    })
    return entries.items
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}