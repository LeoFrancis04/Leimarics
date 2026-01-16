'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const emailFromUrl = searchParams.get('email')
  
  const [email, setEmail] = useState(emailFromUrl || '')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleUnsubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter/unsubscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
      } else {
        setError(data.error || 'Failed to unsubscribe')
      }
    } catch (err) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-2xl font-bold mb-4">Unsubscribed Successfully</h1>
          <p className="text-gray-600 mb-6">
            You've been removed from our newsletter. We're sorry to see you go!
          </p>
          <p className="text-sm text-gray-500">
            Changed your mind?{' '}
            <a href="/" className="text-coral-500 hover:underline">
              Visit our homepage
            </a>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold mb-2">Unsubscribe from Newsletter</h1>
        <p className="text-gray-600 mb-6">
          We're sorry to see you go. Enter your email to unsubscribe.
        </p>

        <form onSubmit={handleUnsubscribe}>
          <Input
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
          />

          {error && (
            <p className="text-red-600 text-sm mt-2">{error}</p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full mt-6"
            disabled={loading}
          >
            {loading ? 'Unsubscribing...' : 'Unsubscribe'}
          </Button>
        </form>
      </div>
    </div>
  )
}