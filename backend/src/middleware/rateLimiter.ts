// backend/src/middleware/rateLimiter.ts
import rateLimit from 'express-rate-limit'

// Contact form rate limiter: 5 requests per hour
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 requests per hour
  message: {
    success: false,
    error: 'Too many contact form submissions. Please try again in 1 hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// Newsletter rate limiter: 3 requests per hour
export const newsletterLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3, // 3 requests per hour
  message: {
    success: false,
    error: 'Too many newsletter requests. Please try again in 1 hour.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})

// General API rate limiter: 100 requests per 15 minutes
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: {
    success: false,
    error: 'Too many requests. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
})