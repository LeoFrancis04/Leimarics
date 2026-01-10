import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm } from '@/lib/supabase'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  project_type: z.enum(['basic', 'business', 'ecommerce', 'custom']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactSchema.parse(body)
    
    // Submit to database
    const result = await submitContactForm(validatedData)
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }
    
    // Here you could also:
    // - Send email notification
    // - Send to CRM
    // - Trigger webhook
    
    return NextResponse.json(
      { message: 'Form submitted successfully', data: result.data },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}