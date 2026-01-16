// backend/src/server.ts
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import { connectDatabase, disconnectDatabase } from './config/database'
import { verifyEmailConnection } from './config/email'
import { errorHandler, notFoundHandler } from './middleware/errorHandler'
import { apiLimiter } from './middleware/rateLimiter'
import contactRoutes from './routes/contact'
import newsletterRoutes from './routes/newsletter'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rate limiting
app.use('/api', apiLimiter)

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Routes
app.use('/api/contact', contactRoutes)
app.use('/api/newsletter', newsletterRoutes)

// Error handling
app.use(notFoundHandler)
app.use(errorHandler)

// Start server
async function startServer() {
  try {
    // Connect to database
    await connectDatabase()

    // Verify email (non-blocking)
    verifyEmailConnection().catch(console.warn)

    // Start listening
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
      console.log(`📧 Email notifications: ${process.env.NOTIFICATION_EMAIL}`)
      console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL}`)
      console.log(`📊 Environment: ${process.env.NODE_ENV}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...')
  await disconnectDatabase()
  process.exit(0)
})

process.on('SIGINT', async () => {
  console.log('SIGINT received, shutting down gracefully...')
  await disconnectDatabase()
  process.exit(0)
})

startServer()