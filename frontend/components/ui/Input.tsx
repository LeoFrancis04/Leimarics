// frontend/components/ui/Input.tsx
import * as React from 'react'

// --- Input ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <input
          className={`flex h-12 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-red-500' : ''} ${className}`}
          ref={ref}
          {...props}
        />
        
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

// --- Textarea ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <textarea
          className={`flex min-h-[120px] w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-coral-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-none ${error ? 'border-red-500' : ''} ${className}`}
          ref={ref}
          {...props}
        />
        
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

// --- Select ---
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            className={`flex h-12 w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-base transition-all focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${error ? 'border-coral-500' : ''} ${className}`}
            ref={ref}
            {...props}
          >
            {children}
          </select>
          {/* Custom Arrow Icon */}
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        
        {error && (
          <p className="mt-1.5 text-sm text-coral-600">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'