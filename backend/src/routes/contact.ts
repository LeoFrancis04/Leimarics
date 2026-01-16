// backend/src/routes/contact.ts
import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validator'
import { contactLimiter } from '../middleware/rateLimiter'
import databaseService from '../services/databaseService'
import emailService from '../services/emailService'
import { ContactFormData } from '../types'

const router = Router()

// Validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .trim(),
  email: z
    .string()
    .email('Invalid email format')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long')
    .toLowerCase()
    .trim(),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number is too long')
    .regex(/^[+\d\s()-]+$/, 'Invalid phone number format')
    .trim(),
  projectType: z.enum(['basic', 'business', 'ecommerce', 'maintenance', 'other'], {
    errorMap: () => ({ message: 'Invalid project type' }),
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long')
    .trim(),
})

// Submit contact form
router.post(
  '/',
  contactLimiter,
  validateRequest(contactSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const formData: ContactFormData = req.body

      // Save to database
      const submission = await databaseService.createContactSubmission(formData)

      // Send notification email to admin (non-blocking)
      emailService
        .sendContactNotification(formData)
        .then((sent) => {
          if (sent) {
            console.log('✅ Notification email sent to admin')
          } else {
            console.warn('⚠️ Failed to send notification email')
          }
        })
        .catch((error) => console.error('Email error:', error))

      // Send confirmation email to user (non-blocking)
      emailService
        .sendContactConfirmation(formData.name, formData.email)
        .then((sent) => {
          if (sent) {
            console.log('✅ Confirmation email sent to user')
          }
        })
        .catch((error) => console.error('Email error:', error))

      res.status(200).json({
        success: true,
        message: "Thank you! We'll get back to you within 24 hours.",
        data: {
          id: submission.id,
          submittedAt: submission.createdAt,
        },
      })
    } catch (error) {
      next(error)
    }
  }
)

// Get all submissions (admin endpoint - add auth later)
router.get(
  '/submissions',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const submissions = await databaseService.getContactSubmissions()

      res.status(200).json({
        success: true,
        data: submissions,
        total: submissions.length,
      })
    } catch (error) {
      next(error)
    }
  }
)

export default router