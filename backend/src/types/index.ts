// backend/src/types/index.ts

export interface ContactSubmission {
    id: string
    name: string
    email: string
    phone: string
    projectType: string
    message: string
    status: string
    createdAt: Date
    updatedAt: Date
  }
  
  export interface NewsletterSubscriber {
    id: string
    email: string
    subscribedAt: Date
    isActive: boolean
  }
  
  export interface ApiResponse<T = any> {
    success: boolean
    message?: string
    data?: T
    error?: string
    details?: any
  }
  
  export type ProjectType = 'basic' | 'business' | 'ecommerce' | 'maintenance' | 'other'
  
  export interface ContactFormData {
    name: string
    email: string
    phone: string
    projectType: ProjectType
    message: string
  }
  
  export interface EmailData {
    to: string
    subject: string
    html: string
  }