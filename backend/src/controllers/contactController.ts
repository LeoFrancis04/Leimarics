import { Request, Response } from 'express'
import { z } from 'zod'
import { submitToDatabase } from '../services/databaseService'
import { sendEmailNotification } from '../services/emailService'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  project_type: z.enum(['basic', 'business', 'ecommerce', 'custom']),
  message: z.string().min(10),
})

export async function handleContactSubmission(req: Request, res: Response) {
  try {
    // Validate input
    const validatedData = contactSchema.parse(req.body)
    
    // Save to database
    const dbResult = await submitToDatabase(validatedData)
    
    if (!dbResult.success) {
      return res.status(500).json({ error: 'Failed to save submission' })
    }
    
    // Send email notification (non-blocking)
    sendEmailNotification(validatedData).catch(console.error)
    
    // Success response
    res.status(200).json({
      message: 'Contact form submitted successfully',
      id: dbResult.data?.id,
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation failed',
        details: error.errors,
      })
    }
    
    console.error('Contact submission error:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}