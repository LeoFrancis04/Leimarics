// backend/src/controllers/contactController.ts
import { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
// Keep the database import that was working for you
import databaseService from '../services/databaseService' 
// ✅ FIX: Use named imports to match our new emailService.ts file
import { sendNotificationEmail, sendConfirmationEmail } from '../services/emailService'       

// 1. Define Validation Schema (Restored Rich Validation)
export const contactSchema = z.object({
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
  projectType: z.enum(['basic', 'business', 'ecommerce', 'maintenance', 'other'] as const, {
    errorMap: () => ({ message: 'Invalid project type' }),
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message is too long')
    .trim(),
})

// 2. Define the Controller Function
export const submitContactForm = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Validate the body against the schema
    const formData = contactSchema.parse(req.body)

    // Save to database (Using your original service call)
    // Note: If this fails, check if you changed databaseService.ts exports
    const submission = await databaseService.createContactSubmission(formData)

    // ✅ FIX: Send notification email to admin (Using new Named Import)
    sendNotificationEmail(formData)
      .then((sent) => {
        if (sent) console.log('✅ Notification email sent to admin')
        else console.warn('⚠️ Failed to send notification email')
      })
      .catch((error) => console.error('Email error:', error))

    // ✅ FIX: Send confirmation email to user (Using new Named Import)
    sendConfirmationEmail(formData.email, formData.name)
      .then((sent) => {
        if (sent) console.log('✅ Confirmation email sent to user')
      })
      .catch((error) => console.error('Email error:', error))

    // Send Response
    res.status(200).json({
      success: true,
      message: "Thank you! We'll get back to you within 24 hours.",
      data: {
        id: submission.id,
        submittedAt: submission.createdAt,
      },
    })
  } catch (error) {
    // Handle Zod Validation Errors specifically
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: error.issues.map((err) => ({
          field: err.path.join('.'),
          message: err.message,
        })),
      })
    }
    // Pass other errors to Express global error handler
    next(error)
  }
}

// 3. Admin: Get all submissions (Restored from Old Code)
export const getSubmissions = async (req: Request, res: Response, next: NextFunction) => {
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

// import { Request, Response, NextFunction } from 'express'
// import { z } from 'zod'
// import databaseService from '../services/databaseService' 
// import emailService from '../services/emailService'       
// import { ContactFormData } from '../types'

// // 1. Define Validation Schema (Exported so Route can use it)
// export const contactSchema = z.object({
//   name: z
//     .string()
//     .min(2, 'Name must be at least 2 characters')
//     .max(100, 'Name is too long')
//     .trim(),
//   email: z
//     .string()
//     .email('Invalid email format')
//     .min(5, 'Email is too short')
//     .max(100, 'Email is too long')
//     .toLowerCase()
//     .trim(),
//   phone: z
//     .string()
//     .min(10, 'Phone number must be at least 10 digits')
//     .max(20, 'Phone number is too long')
//     .regex(/^[+\d\s()-]+$/, 'Invalid phone number format')
//     .trim(),
//   projectType: z.enum(['basic', 'business', 'ecommerce', 'maintenance', 'other'] as const, {
//     errorMap: () => ({ message: 'Invalid project type' }),
//   }),
//   message: z
//     .string()
//     .min(10, 'Message must be at least 10 characters')
//     .max(1000, 'Message is too long')
//     .trim(),
// })

// // 2. Define the Controller Function
// export const submitContactForm = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const formData: ContactFormData = req.body

//     // Save to database
//     const submission = await databaseService.createContactSubmission(formData)

//     // Send notification email to admin (non-blocking)
//     emailService
//       .sendContactNotification(formData)
//       .then((sent) => {
//         if (sent) console.log('✅ Notification email sent to admin')
//         else console.warn('⚠️ Failed to send notification email')
//       })
//       .catch((error) => console.error('Email error:', error))

//     // Send confirmation email to user (non-blocking)
//     emailService
//       .sendContactConfirmation(formData.name, formData.email)
//       .then((sent) => {
//         if (sent) console.log('✅ Confirmation email sent to user')
//       })
//       .catch((error) => console.error('Email error:', error))

//     // Send Response
//     res.status(200).json({
//       success: true,
//       message: "Thank you! We'll get back to you within 24 hours.",
//       data: {
//         id: submission.id,
//         submittedAt: submission.createdAt,
//       },
//     })
//   } catch (error) {
//     next(error)
//   }
// }

// // 3. Admin: Get all submissions
// export const getSubmissions = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const submissions = await databaseService.getContactSubmissions()

//     res.status(200).json({
//       success: true,
//       data: submissions,
//       total: submissions.length,
//     })
//   } catch (error) {
//     next(error)
//   }
// }