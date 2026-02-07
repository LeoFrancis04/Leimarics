import { Router } from 'express'
import { validateRequest } from '../middleware/validator'
import { contactLimiter } from '../middleware/rateLimiter'
// Import schema and handler from the controller
import { submitContactForm, getSubmissions, contactSchema } from '../controllers/contactController'

const router = Router()

// Route: Submit contact form
// 1. Rate Limit -> 2. Validate (using schema from controller) -> 3. Execute Controller Logic
router.post(
  '/',
  contactLimiter,
  validateRequest(contactSchema),
  submitContactForm
)

// Route: Get all submissions (Admin)
router.get('/submissions', getSubmissions)

export default router