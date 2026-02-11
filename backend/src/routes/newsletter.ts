// backend/src/routes/newsletter.ts
import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validator'
import { createRateLimiter } from '../middleware/rateLimiter'
import databaseService from '../services/databaseService'
// ✅ FIX: Import ALL necessary email functions
import { 
  sendWelcomeEmail, 
  sendNewsletterNotification, 
  sendUnsubscribeNotification 
} from '../services/emailService'

const router = Router()

// --- 1. Validation Schemas (Rich Validation Kept) ---
const subscribeSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .min(5, 'Email is too short')
    .max(100, 'Email is too long')
    .toLowerCase()
    .trim(),
})

const unsubscribeSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .toLowerCase()
    .trim(),
})

// --- 2. Rate Limiter ---
const newsletterLimiter = createRateLimiter({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: 'Too many subscription attempts. Please try again later.',
})

// --- 3. Routes ---

// Subscribe to newsletter
router.post(
  '/subscribe',
  newsletterLimiter,
  validateRequest(subscribeSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body

      // Save to database
      const subscriber = await databaseService.subscribeNewsletter(email)

      // 1. Send welcome email to User
      sendWelcomeEmail(email)
        .then((sent) => {
          if (sent) console.log(`✅ Welcome email sent to ${email}`)
          else console.warn(`⚠️ Failed to send welcome email to ${email}`)
        })
        .catch((err) => console.error('Failed to send welcome email:', err))

      // 2. Send notification to Admin (NEW)
      sendNewsletterNotification(email)
        .then((sent) => {
          if (sent) console.log(`✅ Admin notified of new subscriber: ${email}`)
        })
        .catch((err) => console.error('Failed to notify admin:', err))

      res.status(200).json({
        success: true,
        message: 'Successfully subscribed to newsletter!',
        data: {
          email: subscriber.email,
          subscribedAt: subscriber.subscribedAt,
        },
      })
    } catch (error: any) {
      // Handle "Already Subscribed" (Old Logic + Prisma P2002 check)
      if (
        (error instanceof Error && error.message.includes('already subscribed')) ||
        error.code === 'P2002'
      ) {
        return res.status(409).json({
          success: false,
          error: 'This email is already subscribed to our newsletter',
        })
      }
      next(error)
    }
  }
)

// Unsubscribe from newsletter
router.post(
  '/unsubscribe',
  validateRequest(unsubscribeSchema),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body

      // Unsubscribe in database
      await databaseService.unsubscribeNewsletter(email)

      // 1. Send notification to Admin (NEW)
      sendUnsubscribeNotification(email)
        .then((sent) => {
          if (sent) console.log(`✅ Admin notified of unsubscribe: ${email}`)
        })
        .catch((err) => console.error('Failed to notify admin:', err))

      res.status(200).json({
        success: true,
        message: 'Successfully unsubscribed from newsletter',
      })
    } catch (error) {
      // Privacy Preserving Response
      res.status(200).json({
        success: true,
        message: 'If you were subscribed, you have been unsubscribed',
      })
    }
  }
)

// Check subscription status
router.get(
  '/status/:email',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = (req.params.email as string).toLowerCase().trim()

      const emailSchema = z.string().email()
      const validatedEmail = emailSchema.parse(email)

      const status = await databaseService.checkNewsletterStatus(validatedEmail)

      res.status(200).json({
        success: true,
        data: {
          email: validatedEmail,
          isSubscribed: status,
        },
      })
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          error: 'Invalid email format',
        })
      }
      next(error)
    }
  }
)

export default router


// // backend/src/routes/newsletter.ts
// import { Router, Request, Response, NextFunction } from 'express'
// import { z } from 'zod'
// import { validateRequest } from '../middleware/validator'
// import { newsletterLimiter } from '../middleware/rateLimiter'
// import databaseService from '../services/databaseService'
// import emailService from '../services/emailService'

// const router = Router()

// // Validation schemas
// const subscribeSchema = z.object({
//   email: z
//     .string()
//     .email('Invalid email format')
//     .min(5, 'Email is too short')
//     .max(100, 'Email is too long')
//     .toLowerCase()
//     .trim(),
// })

// const unsubscribeSchema = z.object({
//   email: z
//     .string()
//     .email('Invalid email format')
//     .toLowerCase()
//     .trim(),
// })

// // Subscribe to newsletter
// router.post(
//   '/subscribe',
//   newsletterLimiter,
//   validateRequest(subscribeSchema),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { email } = req.body

//       // Save to database
//       const subscriber = await databaseService.subscribeNewsletter(email)

//       // Send welcome email (non-blocking)
//       emailService
//         .sendWelcomeEmail(email)
//         .catch((error) => console.error('Failed to send welcome email:', error))

//       res.status(200).json({
//         success: true,
//         message: 'Successfully subscribed to newsletter!',
//         data: {
//           email: subscriber.email,
//           subscribedAt: subscriber.subscribedAt,
//         },
//       })
//     } catch (error) {
//       if (error instanceof Error) {
//         if (error.message.includes('already subscribed')) {
//           return res.status(409).json({
//             success: false,
//             error: 'This email is already subscribed to our newsletter',
//           })
//         }
//       }
//       next(error)
//     }
//   }
// )

// // Unsubscribe from newsletter
// router.post(
//   '/unsubscribe',
//   validateRequest(unsubscribeSchema),
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const { email } = req.body

//       await databaseService.unsubscribeNewsletter(email)

//       res.status(200).json({
//         success: true,
//         message: 'Successfully unsubscribed from newsletter',
//       })
//     } catch (error) {
//       // Don't reveal if email exists or not for privacy
//       res.status(200).json({
//         success: true,
//         message: 'If you were subscribed, you have been unsubscribed',
//       })
//     }
//   }
// )

// // Check subscription status (optional endpoint)
// router.get(
//   '/status/:email',
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       const email = (req.params.email as string).toLowerCase().trim()

//       // Validate email format
//       const emailSchema = z.string().email()
//       const validatedEmail = emailSchema.parse(email)

//       const status = await databaseService.checkNewsletterStatus(validatedEmail)

//       res.status(200).json({
//         success: true,
//         data: {
//           email: validatedEmail,
//           isSubscribed: status,
//         },
//       })
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return res.status(400).json({
//           success: false,
//           error: 'Invalid email format',
//         })
//       }
//       next(error)
//     }
//   }
// )

// export default router