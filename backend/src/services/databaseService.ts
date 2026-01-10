import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY! // Use service key for backend
)

interface ContactData {
  name: string
  email: string
  phone: string
  project_type: string
  message: string
}

export async function submitToDatabase(data: ContactData) {
  try {
    const { data: result, error } = await supabase
      .from('contact_submissions')
      .insert([{
        ...data,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single()

    if (error) throw error

    return { success: true, data: result }
  } catch (error) {
    console.error('Database error:', error)
    return { success: false, error }
  }
}