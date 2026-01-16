// superbase database

// import { createClient } from '@supabase/supabase-js'

// const supabase = createClient(
//   process.env.SUPABASE_URL!,
//   process.env.SUPABASE_SERVICE_KEY! // Use service key for backend
// )

// interface ContactData {
//   name: string
//   email: string
//   phone: string
//   project_type: string
//   message: string
// }

// export async function submitToDatabase(data: ContactData) {
//   try {
//     const { data: result, error } = await supabase
//       .from('contact_submissions')
//       .insert([{
//         ...data,
//         created_at: new Date().toISOString(),
//       }])
//       .select()
//       .single()

//     if (error) throw error

//     return { success: true, data: result }
//   } catch (error) {
//     console.error('Database error:', error)
//     return { success: false, error }
//   }
// }

// for local database
// backend/src/services/databaseService.ts
import prisma from '../config/database'
import { ContactFormData } from '../types'

export class DatabaseService {
  // Create contact submission
  async createContactSubmission(data: ContactFormData) {
    try {
      const submission = await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          projectType: data.projectType,
          message: data.message,
          status: 'new',
        },
      })

      return submission
    } catch (error) {
      console.error('Database error:', error)
      throw new Error('Failed to save contact submission')
    }
  }

  // Get all contact submissions (for admin)
  async getContactSubmissions() {
    try {
      const submissions = await prisma.contactSubmission.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      })

      return submissions
    } catch (error) {
      console.error('Database error:', error)
      throw new Error('Failed to fetch contact submissions')
    }
  }

  // Subscribe to newsletter
  async subscribeNewsletter(email: string) {
    try {
      // Check if already subscribed
      const existing = await prisma.newsletterSubscriber.findUnique({
        where: { email },
      })

      if (existing) {
        if (existing.isActive) {
          throw new Error('This email is already subscribed')
        } else {
          // Reactivate subscription
          return await prisma.newsletterSubscriber.update({
            where: { email },
            data: { isActive: true },
          })
        }
      }

      // Create new subscription
      const subscriber = await prisma.newsletterSubscriber.create({
        data: {
          email,
          isActive: true,
        },
      })

      return subscriber
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      console.error('Database error:', error)
      throw new Error('Failed to subscribe to newsletter')
    }
  }

  // Unsubscribe from newsletter
  async unsubscribeNewsletter(email: string) {
    try {
      const subscriber = await prisma.newsletterSubscriber.update({
        where: { email },
        data: { isActive: false },
      })

      return subscriber
    } catch (error) {
      console.error('Database error:', error)
      throw new Error('Failed to unsubscribe from newsletter')
    }
  }

  //Check newsletter subscription status
  async checkNewsletterStatus(email: string): Promise<boolean> {
    try {
      const subscriber = await prisma.newsletterSubscriber.findUnique({
        where: { email },
      })

      return subscriber ? subscriber.isActive : false
    } catch (error) {
      console.error('Database error:', error)
      return false
    }
  }
}

export default new DatabaseService()