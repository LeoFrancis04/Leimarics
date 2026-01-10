import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface ContactSubmission {
  id?: string
  name: string
  email: string
  phone: string
  project_type: string
  message: string
  created_at?: string
}

// Helper functions
export async function submitContactForm(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([data])
      .select()
      .single()

    if (error) throw error
    return { success: true, data: result }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error }
  }
}

export async function subscribeToNewsletter(email: string) {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error)
    return { success: false, error }
  }
}